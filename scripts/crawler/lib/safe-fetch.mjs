function normalizeHeaders(headers) {
  if (!headers) return {};
  if (typeof headers.entries === 'function') return Object.fromEntries(headers.entries());
  if (headers instanceof Map) return Object.fromEntries(headers.entries());
  return { ...headers };
}

function collectRegexMatches(text, pattern, limit = 12) {
  if (!pattern) return [];

  let regex;
  try {
    regex = new RegExp(pattern, 'giu');
  } catch (error) {
    return [{ error: `invalid regex: ${error.message}` }];
  }

  const matches = [];
  const lines = String(text).split(/\r?\n/);
  for (const [index, line] of lines.entries()) {
    if (!regex.test(line)) {
      regex.lastIndex = 0;
      continue;
    }

    matches.push({
      line: index + 1,
      text: line.trim().slice(0, 500),
    });
    regex.lastIndex = 0;

    if (matches.length >= limit) break;
  }

  return matches;
}

export async function safeFetch(url, options = {}) {
  let parsedUrl;
  try {
    parsedUrl = new URL(url);
  } catch {
    return {
      ok: false,
      httpOk: false,
      url,
      error: 'invalid-url',
      matches: [],
    };
  }

  const signal = options.signal || AbortSignal.timeout(options.timeoutMs || 15_000);

  try {
    const response = await (options.fetchImpl || fetch)(parsedUrl, {
      method: 'GET',
      redirect: 'follow',
      signal,
      headers: {
        'user-agent': 'open-news-safe-fetch',
        accept: 'text/html,application/xhtml+xml,text/plain;q=0.9,*/*;q=0.8',
        ...(options.headers || {}),
      },
    });

    const contentType = response.headers?.get?.('content-type') || '';
    const text = await response.text();
    const matches = response.ok ? collectRegexMatches(text, options.match, options.matchLimit) : [];

    return {
      ok: true,
      httpOk: response.ok,
      status: response.status,
      url,
      finalUrl: response.url || url,
      contentType,
      headers: options.includeHeaders ? normalizeHeaders(response.headers) : undefined,
      bytes: Buffer.byteLength(text),
      matched: options.match ? response.ok && matches.some((match) => !match.error) : undefined,
      matches,
    };
  } catch (error) {
    return {
      ok: false,
      httpOk: false,
      url,
      error: error?.message || String(error),
      matches: [],
    };
  }
}
