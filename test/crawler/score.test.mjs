import test from 'node:test';
import assert from 'node:assert/strict';

import { scoreCandidate } from '../../scripts/crawler/lib/score.mjs';

test('scoreCandidate favors trusted accounts with video and engagement', () => {
  const highSignal = scoreCandidate({
    authorUsername: 'base',
    hasVideo: true,
    hasLink: true,
    discoverySource: 'priority-account',
    likeCount: 120,
    retweetCount: 40,
    replyCount: 10,
  });

  const lowSignal = scoreCandidate({
    authorUsername: 'random_builder',
    hasVideo: false,
    hasLink: false,
    discoverySource: 'search',
    likeCount: 2,
    retweetCount: 0,
    replyCount: 0,
  });

  assert.ok(highSignal > lowSignal);
});

