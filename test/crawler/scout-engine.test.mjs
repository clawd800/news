import test from 'node:test';
import assert from 'node:assert/strict';

import { rankCandidates } from '../../scripts/crawler/lib/scout-engine.mjs';

test('rankCandidates removes duplicates and returns top scored candidates', () => {
  const rawCandidates = [
    {
      title: 'Google LiteRT-LM Adds Gemma 4 Support for On-Device Agents',
      url: 'https://x.com/google/status/1',
      authorUsername: 'GoogleAI',
      hasVideo: true,
      hasLink: true,
      discoverySource: 'priority-account',
      likeCount: 100,
      retweetCount: 20,
      replyCount: 5,
    },
    {
      title: 'Another fresh robotics launch on Base with demo video',
      url: 'https://x.com/base/status/2',
      authorUsername: 'base',
      hasVideo: true,
      hasLink: true,
      discoverySource: 'priority-account',
      likeCount: 80,
      retweetCount: 15,
      replyCount: 2,
    },
  ];

  const articleIndex = [{
    slug: 'google-litert-lm-gemma-4-on-device-agents',
    title: "Google's LiteRT-LM Adds Gemma 4 Support for On-Device Agents",
    sources: [],
  }];

  const ranked = rankCandidates(rawCandidates, articleIndex, 5);
  assert.equal(ranked.length, 1);
  assert.equal(ranked[0].title, 'Another fresh robotics launch on Base with demo video');
});

