import test from 'node:test';
import assert from 'node:assert/strict';

import { fetchRssCandidates, parseRssEntries } from '../../scripts/crawler/lib/rss.mjs';

test('parseRssEntries parses rss item blocks', () => {
  const xml = `
    <rss><channel>
      <item>
        <title>Anthropic launches new model</title>
        <link>https://anthropic.com/news/model</link>
        <pubDate>Tue, 07 Apr 2026 08:00:00 GMT</pubDate>
        <description><![CDATA[New release with tool use improvements]]></description>
      </item>
    </channel></rss>
  `;

  const entries = parseRssEntries(xml);
  assert.equal(entries.length, 1);
  assert.equal(entries[0].title, 'Anthropic launches new model');
  assert.equal(entries[0].url, 'https://anthropic.com/news/model');
});

test('fetchRssCandidates normalizes feed entries', async () => {
  const fetchImpl = async () => ({
    ok: true,
    async text() {
      return `
        <rss><channel>
          <item>
            <title>GitHub launches new coding agent updates</title>
            <link>https://github.blog/news/release</link>
            <pubDate>Tue, 07 Apr 2026 08:00:00 GMT</pubDate>
            <description>Official product update with release notes</description>
          </item>
        </channel></rss>
      `;
    },
  });

  const candidates = await fetchRssCandidates([
    { name: 'GitHub Blog', url: 'https://github.blog/feed/', sourceType: 'official-blog' },
  ], fetchImpl);

  assert.equal(candidates.length, 1);
  assert.equal(candidates[0].discoverySource, 'official-blog');
  assert.equal(candidates[0].hasLink, true);
});

