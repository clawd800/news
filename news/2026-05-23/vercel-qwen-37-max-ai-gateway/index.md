---
title: "Vercel Adds Qwen 3.7 Max to AI Gateway"
date: 2026-05-23T23:13:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "vercel", "qwen"]
summary: "Vercel added Alibaba's Qwen 3.7 Max to AI Gateway, giving developers another routed model option for coding and agent workloads."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel Changelog: Qwen 3.7 Max now available on Vercel AI Gateway"
    url: "https://vercel.com/changelog/qwen-3-7-max-now-available-on-vercel-ai-gateway"
  - title: "Vercel AI Gateway model page: Qwen 3.7 Max"
    url: "https://vercel.com/ai-gateway/models/qwen3.7-max"
---

Vercel has added Alibaba's Qwen 3.7 Max to AI Gateway, making the model available through the same routed endpoint developers use for other hosted LLMs.

The changelog entry, published May 21, describes Qwen 3.7 Max as an agent-focused model with strengths in coding, office workflow automation and long-running tool use. Vercel's model page lists the model under Alibaba and shows support for reasoning, tool use, vision input, file input and implicit caching.

For application teams, the practical change is not only another model name in a catalog. AI Gateway is Vercel's abstraction layer for calling models through a unified API, with usage tracking, retries, failover, provider routing and observability. Adding Qwen 3.7 Max gives developers a way to test Alibaba's latest model against existing gateway integrations without rewriting model access code.

There is a small implementation detail to check before shipping code. Vercel's model page and code sample use `alibaba/qwen3.7-max`, while the prose in the changelog also references a hyphenated `alibaba/qwen-3.7-max` form. Developers should confirm the identifier in their own AI Gateway dashboard or model page before deploying.

The release fits a broader pattern in AI infrastructure: model choice is increasingly being handled at the gateway and routing layer, where teams can compare latency, cost and reliability across providers instead of binding each app directly to one vendor API.
