---
title: "Vercel Adds Grok 4.3 to AI Gateway"
date: 2026-05-01T13:18:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "vercel", "xai", "ai-gateway"]
summary: "Vercel has added xAI's Grok 4.3 to AI Gateway, giving teams a managed way to route the latest Grok model through the same layer they use for usage tracking, retries, and provider failover."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel Changelog: Grok 4.3 on AI Gateway"
    url: "https://vercel.com/changelog/grok-4-3-on-ai-gateway"
  - title: "Vercel AI Gateway model page: Grok 4.3"
    url: "https://vercel.com/ai-gateway/models/grok-4.3"
  - title: "xAI Docs: Models and Pricing"
    url: "https://docs.x.ai/developers/models"
---
Vercel has added **Grok 4.3** to **AI Gateway**, extending its model catalog with xAI's current flagship text model for teams already routing AI traffic through Vercel's unified API layer.

## What changed

According to Vercel's changelog, developers can now call the model through AI Gateway with the identifier **`xai/grok-4.3`**. Vercel's model page says the release carries a **December 2025 knowledge cutoff** and a **1 million token context window**, and supports capabilities including reasoning, tool use, image input, and file input.

xAI's own model documentation also points developers to **Grok 4.3** as the default choice for general-purpose text workloads, describing it as the company's most capable and fastest current model. That makes the Vercel update less about a brand-new model launch and more about distribution: Grok 4.3 is now available behind the same gateway layer developers may already use for routing and operations.

## Why it matters

The practical value is operational. Vercel's AI Gateway is positioned as a single endpoint for budgets, monitoring, retries, fallbacks, and provider switching across hundreds of models. Adding Grok 4.3 means teams comparing frontier models do not need to wire up a separate integration just to test or deploy xAI's latest release.

The conservative takeaway is simple: infrastructure vendors are competing to make new flagship models available immediately inside existing control planes, where observability and routing matter as much as raw model quality.
