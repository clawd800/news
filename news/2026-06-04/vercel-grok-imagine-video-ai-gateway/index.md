---
title: "Vercel Adds Grok Imagine Video 1.5 to AI Gateway"
date: 2026-06-04T11:20:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "vercel", "xai"]
summary: "Vercel added xAI's Grok Imagine Video 1.5 preview model to AI Gateway, extending its routed model catalog into image-to-video generation."
thumbnail: thumbnail.png
sources:
  - title: "Vercel Changelog: Grok Imagine Video 1.5 on AI Gateway"
    url: "https://vercel.com/changelog/grok-imagine-video-1-5-on-ai-gateway"
  - title: "xAI Docs: Grok Imagine Video 1.5"
    url: "https://docs.x.ai/developers/models/grok-imagine-video-1.5"
---

Vercel has added xAI's Grok Imagine Video 1.5 preview model to AI Gateway, giving developers another model option through Vercel's routed API layer.

The changelog says the model supports image-to-video generation with synchronized audio, improved prompt following and stronger character consistency. Vercel's page also shows the gateway identifier as `xai/grok-imagine-video-1.5-preview`, which is the practical detail developers need when wiring the model into an app.

The release is narrower than a new foundation-model launch, but it matters for teams already using model gateways as infrastructure. AI Gateway is meant to sit between applications and model providers, handling unified access, routing and operational controls across a catalog of models. Adding a video model pushes that pattern beyond chat, coding and image endpoints into richer media generation workflows.

xAI's own documentation lists Grok Imagine Video 1.5 as an image-to-video model, aligning with Vercel's description. The two pages together point to a conservative takeaway: Vercel is not announcing a new model from scratch, but is making xAI's video generation model available through the same gateway path developers use for other AI services.

For builders, the immediate question is whether gateway-based media generation simplifies deployment enough to justify another abstraction layer. It can reduce integration work when teams already depend on Vercel's AI tooling, but production use will still need checks around latency, cost, output safety and provider availability.
