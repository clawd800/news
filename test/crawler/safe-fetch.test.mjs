import test from 'node:test';
import assert from 'node:assert/strict';

import { safeFetch } from '../../scripts/crawler/lib/safe-fetch.mjs';

test('safeFetch reports 404 without throwing or requiring a nonzero exit', async () => {
  const fetchImpl = async () => ({
    ok: false,
    status: 404,
    url: 'https://example.com/missing',
    headers: new Map([['content-type', 'text/html']]),
    async text() {
      return 'not found';
    },
  });

  const result = await safeFetch('https://example.com/missing', { fetchImpl });
  assert.equal(result.ok, true);
  assert.equal(result.httpOk, false);
  assert.equal(result.status, 404);
  assert.deepEqual(result.matches, []);
});

test('safeFetch returns bounded regex matches', async () => {
  const fetchImpl = async () => ({
    ok: true,
    status: 200,
    url: 'https://example.com/post',
    headers: new Map([['content-type', 'text/html']]),
    async text() {
      return [
        '<h1>Ask YouTube</h1>',
        '<p>Gemini Omni is coming to Shorts Remix.</p>',
        '<p>Nothing else.</p>',
      ].join('\n');
    },
  });

  const result = await safeFetch('https://example.com/post', {
    fetchImpl,
    match: 'Gemini Omni|Ask YouTube',
  });

  assert.equal(result.httpOk, true);
  assert.equal(result.matched, true);
  assert.equal(result.matches.length, 2);
});

test('safeFetch reports invalid URLs as data', async () => {
  const result = await safeFetch('not a url');
  assert.equal(result.ok, false);
  assert.equal(result.error, 'invalid-url');
});
