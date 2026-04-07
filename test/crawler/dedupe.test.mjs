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

