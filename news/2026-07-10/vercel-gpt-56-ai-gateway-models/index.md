---
title: "Vercel Adds GPT-5.6 Models to AI Gateway"
date: 2026-07-10T19:37:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "vercel", "ai-gateway"]
summary: "Vercel added GPT-5.6 Sol, Luna, and Terra to AI Gateway, expanding the model choices available through its unified developer endpoint."
thumbnail: thumbnail.png
sources:
  - title: "Vercel Changelog: GPT 5.6 Sol, Luna, and Terra now available on AI Gateway"
    url: "https://vercel.com/changelog/gpt-5-6-now-available-on-ai-gateway"
  - title: "Vercel Docs: AI Gateway"
    url: "https://vercel.com/docs/ai-gateway"
---

Vercel has added **GPT-5.6 Sol, Luna, and Terra** to AI Gateway, bringing the latest OpenAI model variants into the company's unified model access layer for developers.

The changelog entry is narrow, but it matters for teams already routing AI traffic through Vercel. AI Gateway is designed to provide one endpoint and one API key for models from multiple providers, with support for text, image, video, embeddings, and other workloads. Vercel's documentation also says the gateway works with AI SDK v5 and v6, and includes routing, retries, observability, and spend monitoring features.

Adding the GPT-5.6 variants means developers can test the new OpenAI models without creating a separate integration path just for that family. In practice, that can make model comparison less disruptive: an application can keep the same gateway integration while changing the model identifier, measuring behavior, and deciding whether a more capable or differently tuned model is worth adopting.

The announcement does not include benchmark claims, pricing changes, or availability guarantees beyond support through AI Gateway. The conservative read is that this is a catalog expansion rather than a new developer product. Still, model availability inside common deployment platforms is important because it shapes how quickly production teams can evaluate new systems.

For Vercel, the update reinforces AI Gateway's role as a routing layer between applications and a rapidly changing model market. For developers, the immediate value is simpler access to GPT-5.6 options inside an existing Vercel-centered stack.
