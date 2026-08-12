---
title: "OpenRouter Says Auto Router Is Handling 12B Tokens a Day"
date: 2026-06-05T23:13:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "model-routing"]
summary: "OpenRouter said its Auto Router is processing 12 billion tokens per day, while its newer Pareto coding router is approaching 1 billion tokens per day."
thumbnail: thumbnail.jpg
sources:
  - title: "OpenRouter on X"
    url: "https://x.com/OpenRouter/status/2062181031176724561"
  - title: "OpenRouter Pareto Code"
    url: "https://openrouter.ai/openrouter/pareto-code"
  - title: "OpenRouter Docs: Pareto Router"
    url: "https://openrouter.ai/docs/guides/routing/routers/pareto-router"
  - title: "OpenRouter Docs: Auto Router"
    url: "https://openrouter.ai/docs/guides/routing/routers/auto-router"
---

OpenRouter says usage of its automatic model-routing endpoints has become large enough to measure in billions of tokens per day, adding another signal that multi-model infrastructure is becoming a real layer in AI application stacks.

In a Friday post, the company said its Auto Router is processing 12 billion tokens per day, while its Pareto Router is nearing 1 billion tokens per day. OpenRouter linked the claim to its live router pages for Auto Router and Pareto Code, the coding-focused variant.

The two products route requests differently. OpenRouter's Auto Router documentation says the endpoint, `openrouter/auto`, analyzes a prompt and selects from a curated set of models, with routing powered by NotDiamond. That makes it a general-purpose abstraction for developers who do not want to hard-code a single model for every request.

Pareto Router is narrower. OpenRouter's docs describe `openrouter/pareto-code` as a router for coding use cases that lets developers set a minimum coding score preference. The router then chooses from a shortlist of strong coding models and, within the selected tier, aims for the cheapest currently available option.

The token counts do not reveal customer mix, revenue, latency, or how many applications are using either endpoint. But they make the routing layer itself the news: developers are not just comparing models manually, they are increasingly sending production traffic through systems designed to choose models on their behalf.
