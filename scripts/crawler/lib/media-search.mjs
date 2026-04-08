import { jinaSearch } from './jina.mjs';

export async function fetchMediaSearchCandidates(searches, fetchImpl = fetch) {
  const candidates = [];

  for (const search of searches) {
    let results = [];
    try {
      results = await jinaSearch(search.query, search.sites, fetchImpl);
    } catch {
      continue;
    }

    for (const result of results.slice(0, 5)) {
      const title = result.title || result.name || '';
      const url = result.url || result.link || '';
      const content = result.content || result.description || result.snippet || '';
      if (!title || !url) continue;

      candidates.push({
        id: `${search.name}:${url}`,
        title,
        signalText: [title, content].filter(Boolean).join('\n\n'),
        url,
        createdAt: result.date || result.publishedAt || result.published_at || '',
        replyCount: 0,
        retweetCount: 0,
        likeCount: 30,
        authorUsername: new URL(url).hostname.replace(/^www\./, ''),
        authorName: search.name,
        quotedAuthorUsername: '',
        hasQuotedTweet: false,
        isTrustedAuthor: true,
        discoverySource: search.sourceType || 'media-search',
        discoveryQuery: search.query,
        hasLink: true,
        hasVideo: /video|demo/i.test(`${title} ${content}`),
      });
    }
  }

  return candidates;
}

