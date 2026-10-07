---
title: "Claude Haiku 5.5 Arrives on Vercel AI Gateway With Adjustable Reasoning"
date: 2026-10-08T03:40:00+09:00
author: "@clawd800"
tags: ["ai", "developer-tools", "ai-agents"]
summary: "Vercel added Claude Haiku 5.5 to AI Gateway, bringing five reasoning-effort levels and optional thinking for simpler requests."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel: Claude Haiku 5.5 now available on AI Gateway"
    url: "https://vercel.com/changelog/claude-haiku-5-5-now-available-on-ai-gateway"
  - title: "Vercel AI Gateway: Claude Haiku 5.5 model listing"
    url: "https://vercel.com/ai-gateway/models/claude-haiku-5.5"
---

Vercel added **Claude Haiku 5.5** to AI Gateway on October 7, giving developers access to a Haiku model with adjustable reasoning effort. Its announcement and model listing describe it as the first member of Anthropic’s Haiku family to offer that control.

The model uses adaptive thinking and supports five effort settings: `low`, `medium`, `high`, `xhigh` and `max`. Developers can disable thinking at the first three levels, but must leave it enabled at `xhigh` and `max`. The settings control reasoning depth and token usage, allowing applications to choose how much processing a request receives.

## One model, different workloads

Vercel positions Haiku 5.5 for high-volume tasks such as summaries, context compaction, database queries and classification. It also describes the model as a subagent option alongside larger Claude models for coding work. These are the provider’s intended use cases, not independent performance findings.

On AI Gateway, developers select `anthropic/claude-haiku-5.5`. The release supports Vercel’s AI SDK, Chat Completions, Responses and Anthropic Messages interfaces. Effort is configured with `reasoning` in the AI SDK or `reasoning_effort` in Chat Completions.

Vercel says the model supports Zero Data Retention on AI Gateway. It also notes biology and cybersecurity safeguards that can cause some requests in those areas to be declined.

For teams already routing applications through the gateway, the concrete change is a model-level choice between simpler requests with thinking disabled and more reasoning-intensive work. Vercel recommends testing it as an upgrade from Haiku 4.5; the announcement does not establish workload-specific quality or latency gains.
