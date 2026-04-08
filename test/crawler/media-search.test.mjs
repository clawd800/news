import test from 'node:test';
import assert from 'node:assert/strict';

import { fetchMediaSearchCandidates } from '../../scripts/crawler/lib/media-search.mjs';

test('fetchMediaSearchCandidates converts Jina search results into candidates', async () => {
  const fetchImpl = async () => ({
    ok: true,
    async json() {
      return [{
        title: 'Protocol launches new stablecoin rail',
        url: 'https://coindesk.com/example-story',
        content: 'Launch details and market impact',
        date: '2026-04-08T08:00:00.000Z',
      }];
    },
  });

  const candidates = await fetchMediaSearchCandidates([
    { name: 'Web3 media', query: 'stablecoin launch', sites: ['coindesk.com'], sourceType: 'media-search' },
  ], fetchImpl);

  assert.equal(candidates.length, 1);
  assert.equal(candidates[0].discoverySource, 'media-search');
  assert.equal(candidates[0].authorUsername, 'coindesk.com');
  assert.equal(candidates[0].hasLink, true);
});

