import test from 'node:test';
import assert from 'node:assert/strict';

import { annotateDuplicates } from '../../scripts/crawler/lib/dedupe.mjs';

test('annotateDuplicates flags clearly overlapping titles', () => {
  const candidates = [{
    title: 'Google LiteRT-LM Adds Gemma 4 Support for On-Device Agents',
    url: 'https://x.com/google/status/1',
  }];

  const articles = [{
    slug: 'google-litert-lm-gemma-4-on-device-agents',
    title: "Google's LiteRT-LM Adds Gemma 4 Support for On-Device Agents",
    sources: ['https://developers.googleblog.com/post'],
  }];

  const [candidate] = annotateDuplicates(candidates, articles);
  assert.equal(candidate.duplicate, true);
  assert.match(candidate.duplicateReason, /title-similarity|slug-seed-match/);
});

test('annotateDuplicates keeps distinct stories', () => {
  const candidates = [{
    title: 'Virtuals Demos Robot-to-Robot Commerce on Base Using x402 and USDC',
    url: 'https://x.com/virtuals/status/2',
  }];

  const articles = [{
    slug: 'anthropic-google-broadcom-multi-gigawatt-tpu-deal',
    title: 'Anthropic Signs Multi-Gigawatt TPU Deal With Google and Broadcom',
    sources: ['https://anthropic.com/blog'],
  }];

  const [candidate] = annotateDuplicates(candidates, articles);
  assert.equal(candidate.duplicate, false);
});

test('annotateDuplicates catches paraphrased duplicate headlines with strong entity overlap', () => {
  const candidates = [{
    authorName: 'Anthropic',
    title: 'Anthropic signed an agreement with Google and Broadcom for next-generation TPU capacity',
    url: 'https://x.com/AnthropicAI/status/3',
  }];

  const articles = [{
    slug: 'anthropic-google-broadcom-multi-gigawatt-tpu-deal',
    title: 'Anthropic Signs Multi-Gigawatt TPU Deal With Google and Broadcom',
    sources: ['https://www.theverge.com/'],
  }];

  const [candidate] = annotateDuplicates(candidates, articles);
  assert.equal(candidate.duplicate, true);
  assert.match(candidate.duplicateReason, /shared-title-tokens|title-similarity|slug-seed-match/);
});

test('annotateDuplicates catches duplicates from richer signal text even when title differs', () => {
  const candidates = [{
    authorName: 'Google Developers Blog',
    title: 'Bring state-of-the-art agentic skills to the edge with Gemma 4',
    signalText: 'Bring state-of-the-art agentic skills to the edge with Gemma 4 using LiteRT-LM for on-device agents',
    url: 'https://developers.googleblog.com/post/gemma4-edge/',
  }];

  const articles = [{
    slug: 'google-litert-lm-gemma-4-on-device-agents',
    title: "Google's LiteRT-LM Adds Gemma 4 Support for On-Device Agents",
    sources: [],
  }];

  const [candidate] = annotateDuplicates(candidates, articles);
  assert.equal(candidate.duplicate, true);
  assert.match(candidate.duplicateReason, /shared-signal-tokens|shared-title-tokens|title-similarity/);
});
