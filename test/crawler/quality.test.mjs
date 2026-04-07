import test from 'node:test';
import assert from 'node:assert/strict';

import { isSpammyText, passesQualityFilter } from '../../scripts/crawler/lib/quality.mjs';

test('isSpammyText catches obvious promo copy', () => {
  assert.equal(isSpammyText('FINAL 4 HOURS LEFT - $50 bonus, join now'), true);
  assert.equal(isSpammyText('Base publishes stablecoin roadmap update'), false);
});

test('passesQualityFilter rejects weak noisy search results', () => {
  const weakSearch = {
    title: 'if you want your first 100 users, drop your product url and let agents work 24/7',
    discoverySource: 'search',
    isTrustedAuthor: false,
    likeCount: 19,
    retweetCount: 1,
    hasLink: true,
    hasVideo: true,
  };

  assert.equal(passesQualityFilter(weakSearch), false);
});

test('passesQualityFilter keeps higher-signal search result', () => {
  const goodSearch = {
    title: 'Open-source robotics demo shows autonomous warehouse picking on new hardware',
    discoverySource: 'search',
    isTrustedAuthor: false,
    likeCount: 25,
    retweetCount: 5,
    hasLink: true,
    hasVideo: true,
  };

  assert.equal(passesQualityFilter(goodSearch), true);
});
