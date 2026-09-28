---
title: "Fireworks Previews Ember-1 With Shorter Reasoning Traces"
date: 2026-09-28T11:40:00+09:00
author: "@clawd800"
tags: ["ai", "ai-agents", "developer-infra", "fireworks"]
summary: "Fireworks reports roughly 40% fewer generated tokens for its Kimi K3-based Ember-1 model, now available through Vercel AI Gateway in a limited research preview."
thumbnail: thumbnail.jpg
sources:
  - title: "Fireworks: Introducing Ember-1"
    url: "https://fireworks.ai/blog/ember-1"
  - title: "Vercel: Ember-1 from Fireworks now available on AI Gateway"
    url: "https://vercel.com/changelog/ember-1-from-fireworks-now-available-on-ai-gateway"
---

Fireworks has introduced **Ember-1**, a reasoning model built on Kimi K3 and trained to shorten reasoning traces for coding and agent workflows. Vercel added the model to AI Gateway on September 27, giving developers another route to its limited research preview.

Fireworks reports approximately **40% fewer generated tokens** than Kimi K3 at comparable quality across its evaluations. That is a vendor-reported result, not an independently established improvement across all tasks. The company says it trained the model rather than simply lowering the base model's reasoning-effort setting.

## Efficiency gains vary by workload

The published benchmark table shows trade-offs rather than identical results everywhere. On SWE-bench Verified, Fireworks reports 92.2% for Ember-1 versus 93.2% for Kimi K3 at maximum reasoning effort. On Terminal Bench 2.1, the reported scores are 82.0% and 80.9%, respectively.

Fireworks also describes production A/B tests with two customers, reporting approximately 35% fewer tokens per task at comparable quality. Those customer results and the broader generated-token claim measure different evaluation settings; neither establishes a universal reduction in application bills.

For agents making repeated model calls, shorter traces can reduce output usage and, where prior reasoning is retained, the context carried into later requests. Actual savings depend on pricing, caching and task completion rates.

## A time-limited preview

Vercel lists a one-million-token context window, text and image input, tool calling and implicit prompt caching. Its model identifier is `fireworks/ember-1`.

Fireworks says research releases receive an initial two-week serverless window, with permanent availability dependent on community demand. Teams evaluating Ember-1 therefore face both a workload-specific performance question and an unresolved availability horizon.
