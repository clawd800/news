---
title: "Vercel Adds Muse Spark 1.1 to AI Gateway"
date: 2026-07-10T15:37:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "vercel", "ai-gateway"]
summary: "Vercel added Muse Spark 1.1 to AI Gateway, extending its single-endpoint model catalog with another image generation option for developers."
thumbnail: thumbnail.png
sources:
  - title: "Vercel Changelog: Muse Spark 1.1 is now available on AI Gateway"
    url: "https://vercel.com/changelog/muse-spark-1-1-is-now-available-on-ai-gateway"
  - title: "Vercel Docs: AI Gateway"
    url: "https://vercel.com/docs/ai-gateway"
  - title: "Vercel AI Gateway Models"
    url: "https://vercel.com/ai-gateway/models"
---

Vercel has added **Muse Spark 1.1** to AI Gateway, giving developers another image generation model inside the company's unified model access layer.

The update is small in scope but relevant for teams already standardizing AI calls through Vercel. AI Gateway is pitched as a single endpoint for hundreds of models, covering text, image, video, embeddings, and other workloads. Vercel's documentation says the gateway works with AI SDK v5 and v6 and provides one API key for accessing models from multiple providers.

That matters because image generation is often integrated differently from text models, with separate provider accounts, billing paths, and SDK code. Adding Muse Spark 1.1 to the same gateway can reduce that operational split for applications that already use Vercel's AI tooling. Developers can evaluate the model without building a separate integration path just to test image output.

The announcement does not, by itself, say that Muse Spark 1.1 changes the economics or quality bar for generated images. It is better read as a catalog expansion inside a broader platform strategy: Vercel wants AI Gateway to become the routing layer between app developers and a fast-changing model market.

For production teams, the practical question is less whether one new model is decisive and more whether a gateway abstraction makes it easier to swap models, compare providers, and keep application code stable as image and multimodal systems continue to move quickly.
