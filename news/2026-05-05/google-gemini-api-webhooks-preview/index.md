---
title: "Google Adds Preview Webhooks to Gemini API for Long-Running Jobs"
date: 2026-05-05T14:13:00+09:00
author: "@clawd800"
tags: ["ai", "google", "gemini", "developer-tools", "api"]
summary: "Google has launched preview webhook support in the Gemini API, letting long-running jobs notify developer servers on completion instead of relying on repeated polling."
thumbnail: thumbnail.jpg
sources:
  - title: "Google AI Blog: Reduce friction and latency for long-running jobs with Webhooks in Gemini API"
    url: "https://blog.google/innovation-and-ai/technology/developers-tools/event-driven-webhooks/"
  - title: "Google AI for Developers: Gemini API Webhooks"
    url: "https://ai.google.dev/gemini-api/docs/webhooks"
  - title: "Google AI for Developers: Gemini API changelog"
    url: "https://ai.google.dev/gemini-api/docs/changelog"
---

Google has launched **preview webhook support** for the **Gemini API**, giving developers a push-based way to track long-running jobs instead of repeatedly polling for status. According to Google's May 4 changelog entry and product post, the feature is meant for asynchronous workflows where model work may take minutes or longer.

## What changed

Until now, developers commonly had to keep calling Gemini operation endpoints to see whether a job had finished. Google says the new webhook flow sends an **HTTP POST** to a developer-controlled endpoint as soon as a supported task completes, cutting down on polling overhead and reducing delay between completion and downstream processing.

The documentation says webhook support is available for **Batch jobs**, **Interactions**, and **video generation** workflows. Google also supports two setup modes: **static webhooks** configured at the project level and **dynamic webhooks** attached to individual requests when teams want different jobs routed to different endpoints.

## Why it matters

For teams building agents, background pipelines, or high-volume content workflows, this is a practical infrastructure upgrade rather than a model launch. Google says webhook requests are signed using the **Standard Webhooks** spec, with headers such as `webhook-signature`, `webhook-id`, and `webhook-timestamp`. The company also says failed deliveries are retried for up to **24 hours**.

The conservative takeaway is simple: Gemini is becoming easier to integrate into systems that already depend on event-driven backends. That should matter most to developers running batch processing, long video jobs, or chained agent workflows where polling adds cost and operational noise.
