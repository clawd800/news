---
title: "Vercel Adds Claude Fable 5 To AI Gateway"
date: 2026-06-10T07:18:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "vercel", "anthropic", "ai-gateway"]
summary: "Vercel has added Anthropic's Claude Fable 5 to AI Gateway, giving developers another hosted route to the new generally available Claude model."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel Changelog: Claude Fable 5 now available on AI Gateway"
    url: "https://vercel.com/changelog/claude-fable-5-now-available-on-ai-gateway"
  - title: "Anthropic Docs: Claude models overview"
    url: "https://platform.claude.com/docs/en/about-claude/models/overview"
  - title: "Vercel Docs: AI Gateway"
    url: "https://vercel.com/docs/ai-gateway"
---

Vercel has added **Claude Fable 5** to AI Gateway, extending its model-routing service with Anthropic's newest generally available Claude model.

The Vercel changelog lists the model as available through AI Gateway, while Anthropic's model documentation says Claude Fable 5 became generally available on June 9, 2026. Anthropic identifies `claude-fable-5` as the Claude API model name and lists broader availability across Claude API, Claude Platform on AWS, Amazon Bedrock, Vertex AI, and Microsoft Foundry.

For developers already using AI Gateway, the practical point is routing rather than model research. Vercel's AI Gateway is designed to give applications one API surface for multiple providers, with budgets, usage monitoring, load balancing, and fallback controls. Adding Fable 5 means teams can test the new Claude model inside that existing operational layer instead of wiring a separate provider path for evaluation.

That matters most for production AI apps that already treat model choice as an infrastructure concern. A gateway layer can make it easier to compare behavior, cap spend, and move traffic between models when availability, latency, or cost changes.

The conservative read is that this is a distribution update, not a benchmark result. Vercel is making the model available through its gateway; developers still need to validate Fable 5 against their own workloads before replacing an existing Claude, OpenAI, Google, or open model deployment.
