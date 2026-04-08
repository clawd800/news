import { getEnv } from './env.mjs';

function jinaHeaders(extra = {}) {
  const apiKey = getEnv('JINA_API_KEY');
  return {
    'user-agent': 'open-news-scout',
    ...(apiKey ? { authorization: `Bearer ${apiKey}` } : {}),
    ...extra,
  };
}

export async function jinaRead(url, fetchImpl = fetch) {
  const target = `https://r.jina.ai/http://${url.replace(/^https?:\/\//, '')}`;
  const response = await fetchImpl(target, {
    headers: jinaHeaders({ accept: 'text/plain' }),
  });
  if (!response.ok) {
    throw new Error(`Jina read failed: ${response.status}`);
  }
  return response.text();
}

export async function jinaSearch(query, sites = [], fetchImpl = fetch) {
  const params = new URLSearchParams();
  for (const site of sites) params.append('site', site);
  const url = `https://s.jina.ai/${encodeURIComponent(query)}${params.toString() ? `?${params.toString()}` : ''}`;
  const response = await fetchImpl(url, {
    headers: jinaHeaders({ accept: 'application/json' }),
  });
  if (!response.ok) {
    throw new Error(`Jina search failed: ${response.status}`);
  }
  const data = await response.json();
  return Array.isArray(data) ? data : (data.data || data.results || []);
}

export async function canReadViaJina(url, fetchImpl = fetch) {
  try {
    const text = await jinaRead(url, fetchImpl);
    return Boolean(String(text).trim());
  } catch {
    return false;
  }
}

