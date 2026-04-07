function decodeXml(text) {
  return String(text ?? '')
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractFirstTag(block, tagName) {
  const regex = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\/${tagName}>`, 'i');
  const match = block.match(regex);
  return match ? decodeXml(match[1]) : '';
}

function extractBlocks(xml, tagName) {
  const regex = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\/${tagName}>`, 'gi');
  return [...String(xml ?? '').matchAll(regex)].map((match) => match[1]);
}

export function parseRssEntries(xml) {
  const itemBlocks = extractBlocks(xml, 'item');
  if (itemBlocks.length > 0) {
    return itemBlocks.map((block) => ({
      title: extractFirstTag(block, 'title'),
      url: extractFirstTag(block, 'link'),
      createdAt: extractFirstTag(block, 'pubDate'),
      summary: extractFirstTag(block, 'description'),
    }));
  }

  const entryBlocks = extractBlocks(xml, 'entry');
  return entryBlocks.map((block) => {
    const linkMatch = block.match(/<link[^>]+href=["']([^"']+)["'][^>]*>/i);
    return {
      title: extractFirstTag(block, 'title'),
      url: linkMatch?.[1] ?? '',
      createdAt: extractFirstTag(block, 'updated') || extractFirstTag(block, 'published'),
      summary: extractFirstTag(block, 'summary') || extractFirstTag(block, 'content'),
    };
  });
}

export async function fetchRssCandidates(feeds, fetchImpl = fetch) {
  const candidates = [];

  for (const feed of feeds) {
    const response = await fetchImpl(feed.url, {
      headers: {
        'user-agent': 'open-news-scout',
        'accept': 'application/rss+xml, application/atom+xml, application/xml, text/xml;q=0.9, */*;q=0.8',
      },
    });

    if (!response.ok) {
      if (response.status === 403 || response.status === 404 || response.status === 429) continue;
      throw new Error(`RSS fetch failed for ${feed.url}: ${response.status}`);
    }

    const xml = await response.text();
    const entries = parseRssEntries(xml).slice(0, 3);
    for (const entry of entries) {
      candidates.push({
        id: `${feed.name}:${entry.url || entry.title}`,
        title: entry.title,
        signalText: [entry.title, entry.summary].filter(Boolean).join('\n\n'),
        url: entry.url,
        createdAt: entry.createdAt,
        replyCount: 0,
        retweetCount: 0,
        likeCount: 35,
        authorUsername: feed.name,
        authorName: feed.name,
        quotedAuthorUsername: '',
        hasQuotedTweet: false,
        isTrustedAuthor: true,
        discoverySource: feed.sourceType || 'rss',
        discoveryQuery: feed.url,
        hasLink: Boolean(entry.url),
        hasVideo: /video|demo/i.test(`${entry.title} ${entry.summary}`),
      });
    }
  }

  return candidates;
}

