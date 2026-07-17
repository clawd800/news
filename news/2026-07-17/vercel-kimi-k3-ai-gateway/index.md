---
title: "Vercel Adds Kimi K3 to AI Gateway"
date: 2026-07-17T15:50:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "vercel", "ai-gateway"]
summary: "Vercel added Moonshot AI's Kimi K3 model to AI Gateway, giving developers a hosted route to its long-context coding and multimodal capabilities."
thumbnail: thumbnail.png
sources:
  - title: "Vercel Changelog: Kimi K3 is now available on AI Gateway"
    url: "https://vercel.com/changelog/kimi-k3-is-now-available-on-ai-gateway"
  - title: "Vercel AI Gateway: Kimi K3"
    url: "https://vercel.com/ai-gateway/models/kimi-k3"
---

Vercel has added Moonshot AI's Kimi K3 to AI Gateway, making the model available through the same API surface developers use for routing, usage tracking and fallback behavior across providers.

The launch is a narrow but useful developer-infrastructure update. Vercel says Kimi K3 is an open-source model aimed at long-horizon software engineering, knowledge work and deep reasoning. The changelog says it accepts text, image and video inputs, with native visual understanding and a 1M-token context window.

The model page lists the provider slug as `moonshotai/kimi-k3`, which means AI SDK users can call it by changing the model field rather than wiring a separate provider integration. Vercel's page also shows file input, tool use and vision support, with Moonshot AI as the provider.

For teams already using AI Gateway, the practical change is less about a new model name and more about operational control. Gateway centralizes model calls, cost and usage reporting, routing rules, retries and failover. That matters for coding-agent and product workflows where teams may want to test a long-context model without rebuilding their inference plumbing.

Vercel's listed provider details show a 1M-token context limit, 131K max output, and posted API pricing of $3 per million input tokens and $15 per million output tokens. The model page lists July 16, 2026 as the release date on Gateway.
