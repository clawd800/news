import { canReadViaJina } from './jina.mjs';

function getHeader(response, name) {
  const headers = response?.headers;
  if (!headers) return '';
  if (typeof headers.get === 'function') return headers.get(name) || '';
  if (headers instanceof Map) return headers.get(name) || '';
  return headers[name] || headers[name.toLowerCase()] || '';
}

function safeUrl(value) {
  try {
    return new URL(value);
  } catch {
    return null;
  }
}

export function isDiscoveryOnlyUrl(value) {
  const url = safeUrl(value);
  if (!url) return true;

  const path = `${url.pathname}${url.search}`.toLowerCase();
  return (
    path.endsWith('.xml') ||
    /\/rss(\/|\.xml|$)/.test(path) ||
    /\/feed(\/|$)/.test(path) ||
    /\/feeds\//.test(path) ||
    /\/atom(\/|$)/.test(path)
  );
}

export function needsPrimarySourceVerification(candidate) {
  return candidate.discoverySource === 'official-blog' || candidate.discoverySource === 'github-release';
}

export async function canAccessPrimarySource(url, fetchImpl = fetch) {
  if (isDiscoveryOnlyUrl(url)) return false;

  try {
    const response = await fetchImpl(url, {
      method: 'GET',
      redirect: 'follow',
      headers: {
        'user-agent': 'open-news-scout',
        'accept': 'text/html,application/xhtml+xml;q=0.9,*/*;q=0.8',
      },
    });

    if (!response.ok) return canReadViaJina(url, fetchImpl);

    const contentType = String(getHeader(response, 'content-type') || '').toLowerCase();
    if (contentType.includes('xml') || contentType.includes('rss') || contentType.includes('atom')) return false;

    return true;
  } catch {
    return canReadViaJina(url, fetchImpl);
  }
}

export async function verifyCandidateSources(candidates, fetchImpl = fetch) {
  const verified = await Promise.all(candidates.map(async (candidate) => {
    if (!needsPrimarySourceVerification(candidate)) return candidate;
    const ok = await canAccessPrimarySource(candidate.url, fetchImpl);
    return ok ? candidate : null;
  }));

  return verified.filter(Boolean);
}
