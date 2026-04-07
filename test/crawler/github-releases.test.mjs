import test from 'node:test';
import assert from 'node:assert/strict';

import { fetchGitHubReleaseCandidates } from '../../scripts/crawler/lib/github-releases.mjs';

test('fetchGitHubReleaseCandidates normalizes non-draft releases', async () => {
  const fetchImpl = async () => ({
    ok: true,
    async json() {
      return [
        {
          id: 1,
          name: 'v1.2.3',
          tag_name: 'v1.2.3',
          body: 'Adds new agent runtime support',
          html_url: 'https://github.com/block/goose/releases/tag/v1.2.3',
          published_at: '2026-04-07T08:00:00.000Z',
          reactions: { total_count: 4 },
          draft: false,
          prerelease: false,
        },
        {
          id: 2,
          name: 'draft release',
          tag_name: 'v9.9.9',
          html_url: 'https://github.com/block/goose/releases/tag/v9.9.9',
          draft: true,
          prerelease: false,
        },
      ];
    },
  });

  const candidates = await fetchGitHubReleaseCandidates(['block/goose'], fetchImpl);
  assert.equal(candidates.length, 1);
  assert.equal(candidates[0].discoverySource, 'github-release');
  assert.equal(candidates[0].authorUsername, 'block');
  assert.equal(candidates[0].title, 'goose v1.2.3 release');
});
