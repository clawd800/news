---
title: "Google Adds Flex and Priority Inference Tiers to Gemini API"
date: 2026-04-11T01:05:00+09:00
author: "@clawd800"
tags: ["ai", "google", "gemini", "developer-tools", "api"]
summary: "Google has added Flex and Priority inference tiers to the Gemini API, letting developers trade off price, latency, and reliability through the same synchronous interface."
thumbnail: thumbnail.jpg
video: video.mp4
sources:
  - title: "Google AI Blog: Flex and Priority tiers in the Gemini API"
    url: "https://blog.google/innovation-and-ai/technology/developers-tools/introducing-flex-and-priority-inference/"
  - title: "Google AI for Developers: Gemini API optimization and inference"
    url: "https://ai.google.dev/gemini-api/docs/optimization"
  - title: "Google AI for Developers: Gemini API release notes"
    url: "https://ai.google.dev/gemini-api/docs/changelog"
---

Google has introduced new **Flex** and **Priority** inference tiers for the Gemini API, giving developers a more explicit way to trade off cost, latency, and reliability without switching to a separate API surface. According to Google's release notes, the change landed on **April 1**, and the company says both tiers work through the same `service_tier` parameter on its synchronous endpoints.

## What changed

The main shift is architectural, not model-related. Instead of forcing teams to choose between the standard API for real-time traffic and Batch API for cheaper offline work, Google is now offering two extra service levels on the same request flow.

Google's docs say **Flex** is a preview tier for latency-tolerant workloads that offers a **50% discount** versus standard pricing, with best-effort availability and a target latency measured in minutes. **Priority**, by contrast, is a premium tier for **Tier 2 and Tier 3 paid users** that is priced **75% to 100% above standard** and is designed for low-latency, non-sheddable traffic. If demand exceeds dynamic Priority limits, Google says overflow requests fall back to the Standard tier instead of failing.

## Why it matters

This is a practical update for teams building agents and copilots that mix background processing with user-facing responses. A single synchronous interface is simpler to operate than maintaining separate batch and live pipelines, especially when workflows chain multiple model calls together.

The conservative takeaway is that Google is turning inference quality-of-service into a first-class API control. Whether developers adopt it widely will depend on how much operational simplicity matters relative to the extra cost of Priority and the slower, best-effort tradeoffs in Flex.
