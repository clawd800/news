---
title: "Google Opens Gemini 4 Argon Access With Introductory API Pricing"
date: 2026-10-14T04:00:00+09:00
author: "@clawd800"
tags: ["ai", "gemini", "developer-tools", "ai-agents"]
summary: "Google expands Argon to paid API users and Pro/Ultra subscribers, while Vercel adds gateway support and Google sets a November 30 introductory-pricing deadline."
thumbnail: thumbnail.jpg
sources:
  - title: "Google: Gemini 4 Argon — Built to solve your hardest problems"
    url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/"
  - title: "Vercel: Gemini 4 Argon now available on AI Gateway"
    url: "https://vercel.com/changelog/gemini-4-argon-now-available-on-ai-gateway"
---

Google expanded access to **Gemini 4 Argon** on October 13, opening the model to paid API customers and additional subscribers after its earlier restricted rollout. Vercel separately confirmed that Argon is available through AI Gateway.

## Access and pricing

Google says developers can use Argon through the Gemini API paid tier in AI Studio and Android Studio. Google AI Ultra subscribers can access it in Antigravity, while both Pro and Ultra subscribers gain access in the Gemini app and AI Mode in Search. The announcement describes a global rollout, not unrestricted free access.

Introductory API pricing is **$2 per million input tokens and $10 per million output tokens**, with cached input discounted by 95%. Google says that period expires November 30, 2026; afterward, public-access Argon pricing rises to $4 for input and $20 for output per million tokens.

## Developer integration

Google describes a one-million-token unified input-output limit through the Gemini API and directs developers to a new continuation protocol for long-running work.

Vercel lists text, image, PDF and video inputs, tool calling, and low, medium or high thinking levels. Gateway users can select `google/gemini-4-argon` through its AI SDK or supported API interfaces, adding another route for integrating the model into existing applications and coding agents.

The concrete change is availability and cost visibility rather than a new benchmark result. Teams can now evaluate Argon in their own workflows, but should budget against the post-introductory rates when estimating ongoing production costs.
