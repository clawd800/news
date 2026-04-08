import test from 'node:test';
import assert from 'node:assert/strict';

import {
  hasActionSignal,
  getSignalText,
  hasEvidenceSignal,
  hasNewsSignal,
  isFreshCandidate,
  isMarketingStylePost,
  isNarrativePriorityPost,
  isRoundupStylePost,
  isSpammyText,
  passesQualityFilter,
} from '../../scripts/crawler/lib/quality.mjs';

test('isSpammyText catches obvious promo copy', () => {
  assert.equal(isSpammyText('FINAL 4 HOURS LEFT - $50 bonus, join now'), true);
  assert.equal(isSpammyText('Base publishes stablecoin roadmap update'), false);
});

test('getSignalText includes quoted tweet context when present', () => {
  assert.equal(
    getSignalText({
      title: 'Base is for global payments',
      signalText: 'Base is for global payments\n\nDune: local stablecoin volume reaches $4.4B/month',
    }),
    'Base is for global payments\n\nDune: local stablecoin volume reaches $4.4B/month',
  );
});

test('passesQualityFilter rejects weak noisy search results', () => {
  const weakSearch = {
    title: 'if you want your first 100 users, drop your product url and let agents work 24/7',
    signalText: 'if you want your first 100 users, drop your product url and let agents work 24/7',
    discoverySource: 'search',
    isTrustedAuthor: false,
    likeCount: 19,
    retweetCount: 1,
    hasLink: true,
    hasVideo: true,
  };

  assert.equal(passesQualityFilter(weakSearch), false);
});

test('marketing-style how-to post is rejected even from strong sources', () => {
  const marketingPost = {
    title: 'Curious about vibe coding? Build a vibe coded website in less than 5 minutes',
    signalText: 'Curious about vibe coding? Build a vibe coded website in less than 5 minutes with Google AI Studio',
    discoverySource: 'priority-account',
    isTrustedAuthor: true,
    likeCount: 300,
    retweetCount: 40,
    hasLink: true,
    hasVideo: true,
    hasQuotedTweet: false,
  };

  assert.equal(isMarketingStylePost(marketingPost), true);
  assert.equal(passesQualityFilter(marketingPost), false);
});

test('tutorial-style official blog post is rejected', () => {
  const tutorialPost = {
    title: 'Guide to building intelligent agents with ADK and skills',
    signalText: 'Guide to building intelligent agents with ADK and skills',
    discoverySource: 'official-blog',
    isTrustedAuthor: true,
    createdAt: '2026-04-07T08:00:00.000Z',
    likeCount: 35,
    retweetCount: 0,
    hasLink: true,
    hasVideo: false,
    hasQuotedTweet: false,
  };

  assert.equal(isMarketingStylePost(tutorialPost), true);
  assert.equal(passesQualityFilter(tutorialPost), false);
});

test('roundup-style resource post is rejected', () => {
  const roundupPost = {
    title: 'National Robotics Week - latest physical AI research, breakthroughs and resources',
    signalText: 'National Robotics Week - latest physical AI research, breakthroughs and resources',
    discoverySource: 'official-blog',
    isTrustedAuthor: true,
    createdAt: '2026-04-07T08:00:00.000Z',
    likeCount: 35,
    retweetCount: 0,
    hasLink: true,
    hasVideo: false,
    hasQuotedTweet: false,
  };

  assert.equal(isRoundupStylePost(roundupPost), true);
  assert.equal(passesQualityFilter(roundupPost), false);
});

test('passesQualityFilter keeps higher-signal search result', () => {
  const goodSearch = {
    title: 'OpenAI releases new open-source agent demo with improved tool use',
    signalText: 'OpenAI releases new open-source agent demo with improved tool use',
    createdAt: '2026-04-07T08:00:00.000Z',
    discoverySource: 'search',
    isTrustedAuthor: true,
    likeCount: 25,
    retweetCount: 5,
    hasLink: true,
    hasVideo: true,
  };

  assert.equal(passesQualityFilter(goodSearch), true);
});

test('stale candidates are rejected', () => {
  const staleCandidate = {
    title: 'Anthropic Fellows Research on behavioral differences between models',
    signalText: 'Anthropic Fellows Research on behavioral differences between models',
    createdAt: '2026-04-03T10:00:00.000Z',
    discoverySource: 'priority-account',
    isTrustedAuthor: true,
    likeCount: 80,
    retweetCount: 10,
    hasLink: true,
    hasVideo: false,
    hasQuotedTweet: false,
  };

  assert.equal(isFreshCandidate(staleCandidate, new Date('2026-04-07T10:00:00.000Z')), false);
  assert.equal(
    passesQualityFilter(staleCandidate, { now: new Date('2026-04-07T10:00:00.000Z') }),
    false,
  );
});

test('rejects narrative priority-account post without concrete event signal', () => {
  const narrativePost = {
    title: 'Base is for global payments',
    signalText: 'Base is for global payments',
    discoverySource: 'priority-account',
    isTrustedAuthor: true,
    likeCount: 500,
    retweetCount: 100,
    hasLink: true,
    hasVideo: false,
    hasQuotedTweet: false,
  };

  assert.equal(isNarrativePriorityPost(narrativePost), true);
  assert.equal(hasNewsSignal(narrativePost), false);
  assert.equal(hasEvidenceSignal(narrativePost), false);
  assert.equal(hasActionSignal(narrativePost), false);
  assert.equal(passesQualityFilter(narrativePost), false);
});

test('rejects narrative priority-account post even when quoted context is only evidence, not an event', () => {
  const quotedEvidencePost = {
    title: 'Base is for global payments',
    signalText: 'Base is for global payments\n\nDune says local-currency stablecoins now process $4.4B monthly and cites Visa research',
    discoverySource: 'priority-account',
    isTrustedAuthor: true,
    likeCount: 500,
    retweetCount: 100,
    hasLink: true,
    hasVideo: false,
    hasQuotedTweet: true,
  };

  assert.equal(hasNewsSignal(quotedEvidencePost), true);
  assert.equal(hasEvidenceSignal(quotedEvidencePost), true);
  assert.equal(hasActionSignal(quotedEvidencePost), false);
  assert.equal(passesQualityFilter(quotedEvidencePost), false);
});

test('keeps priority-account post when concrete rollout signal is present', () => {
  const rolloutPost = {
    title: 'Base rolls out Base Pay to Shopify merchants',
    signalText: 'Base rolls out Base Pay to Shopify merchants with one-click USDC checkout',
    discoverySource: 'priority-account',
    isTrustedAuthor: true,
    likeCount: 500,
    retweetCount: 100,
    hasLink: true,
    hasVideo: false,
    hasQuotedTweet: false,
  };

  assert.equal(hasNewsSignal(rolloutPost), true);
  assert.equal(hasActionSignal(rolloutPost), true);
  assert.equal(passesQualityFilter(rolloutPost), true);
});

test('keeps direct release-style priority-account post', () => {
  const releasePost = {
    title: 'Google LiteRT-LM Adds Gemma 4 Support for On-Device Agents',
    signalText: 'Google LiteRT-LM Adds Gemma 4 Support for On-Device Agents',
    discoverySource: 'priority-account',
    isTrustedAuthor: true,
    likeCount: 90,
    retweetCount: 20,
    hasLink: true,
    hasVideo: false,
    hasQuotedTweet: false,
  };

  assert.equal(hasNewsSignal(releasePost), true);
  assert.equal(hasActionSignal(releasePost), true);
  assert.equal(passesQualityFilter(releasePost), true);
});

test('keeps past-tense event phrasing like signed agreements', () => {
  const signedPost = {
    title: "Anthropic signed an agreement with Google and Broadcom for next-generation TPU capacity",
    signalText: "Anthropic signed an agreement with Google and Broadcom for next-generation TPU capacity",
    createdAt: '2026-04-07T08:00:00.000Z',
    discoverySource: 'priority-account',
    isTrustedAuthor: true,
    likeCount: 500,
    retweetCount: 100,
    hasLink: true,
    hasVideo: false,
    hasQuotedTweet: false,
  };

  assert.equal(hasNewsSignal(signedPost), true);
  assert.equal(hasActionSignal(signedPost), true);
  assert.equal(passesQualityFilter(signedPost), true);
});

test('keeps product update phrasing like combines model families', () => {
  const productUpdate = {
    title: 'GitHub Copilot CLI combines model families for a second opinion',
    signalText: 'GitHub Copilot CLI combines model families for a second opinion',
    createdAt: '2026-04-07T08:00:00.000Z',
    discoverySource: 'official-blog',
    isTrustedAuthor: true,
    likeCount: 35,
    retweetCount: 0,
    hasLink: true,
    hasVideo: false,
    hasQuotedTweet: false,
  };

  assert.equal(hasNewsSignal(productUpdate), true);
  assert.equal(hasActionSignal(productUpdate), true);
  assert.equal(passesQualityFilter(productUpdate), true);
});
