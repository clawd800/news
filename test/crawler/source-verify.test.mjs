import test from 'node:test';
import assert from 'node:assert/strict';

import {
  canAccessPrimarySource,
  isDiscoveryOnlyUrl,
  verifyCandidateSources,
} from '../../scripts/crawler/lib/source-verify.mjs';

test('isDiscoveryOnlyUrl rejects feed and xml urls', () => {
  assert.equal(isDiscoveryOnlyUrl('https://openai.com/news/rss.xml'), true);
  assert.equal(isDiscoveryOnlyUrl('https://github.blog/feed/'), true);
  assert.equal(isDiscoveryOnlyUrl('https://openai.com/index/introducing-openai-safety-fellowship'), false);
});

test('canAccessPrimarySource rejects non-ok or feed content', async () => {
  const okHtmlFetch = async () => ({
    ok: true,
    headers: new Map([['content-type', 'text/html; charset=utf-8']]),
  });
  const badXmlFetch = async () => ({
    ok: true,
    headers: new Map([['content-type', 'application/rss+xml']]),
  });
  const forbiddenFetch = async () => ({
    ok: false,
    headers: new Map(),
  });
  const jinaFallbackFetch = async (url) => {
    if (String(url).startsWith('https://r.jina.ai/')) {
      return { ok: true, async text() { return 'Readable article'; } };
    }
    return { ok: false, headers: new Map() };
  };

  assert.equal(await canAccessPrimarySource('https://example.com/post', okHtmlFetch), true);
  assert.equal(await canAccessPrimarySource('https://example.com/feed.xml', okHtmlFetch), false);
  assert.equal(await canAccessPrimarySource('https://example.com/post', badXmlFetch), false);
  assert.equal(await canAccessPrimarySource('https://example.com/post', forbiddenFetch), false);
  assert.equal(await canAccessPrimarySource('https://example.com/post', jinaFallbackFetch), true);
});

test('verifyCandidateSources filters inaccessible official candidates but keeps x candidates', async () => {
  const fetchImpl = async (url) => ({
    ok: !url.includes('blocked'),
    headers: new Map([['content-type', 'text/html; charset=utf-8']]),
  });

  const candidates = [
    {
      discoverySource: 'official-blog',
      url: 'https://example.com/blocked-post',
    },
    {
      discoverySource: 'github-release',
      url: 'https://github.com/block/goose/releases/tag/v1.2.3',
    },
    {
      discoverySource: 'priority-account',
      url: 'https://x.com/base/status/1',
    },
  ];

  const verified = await verifyCandidateSources(candidates, fetchImpl);
  assert.equal(verified.length, 2);
  assert.equal(verified[0].discoverySource, 'github-release');
  assert.equal(verified[1].discoverySource, 'priority-account');
});
