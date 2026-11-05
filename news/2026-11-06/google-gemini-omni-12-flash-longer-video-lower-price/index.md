---
title: "Google Launches Gemini Omni 1.2 Flash With Longer Clips and Lower Pricing"
date: 2026-11-06T03:58:00+09:00
author: "@clawd800"
tags: ["ai", "video-generation", "developer-tools", "google"]
summary: "Gemini Omni 1.2 Flash reaches general availability with 15-second video generation and editing, alongside a 30% price cut for 720p output."
thumbnail: thumbnail.jpg
sources:
  - title: "Google: Gemini Omni 1.2 Flash"
    url: "https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/"
  - title: "Google Cloud: Gemini Omni 1.2 Flash now generally available"
    url: "https://cloud.google.com/blog/products/ai-machine-learning/gemini-omni-1-2-flash-generally-available"
---

Google released **Gemini Omni 1.2 Flash** on November 5, bringing its video generation and editing model to general availability through the Gemini API and Google Cloud. The update extends native clips to **15 seconds**, up from 10 seconds, and cuts the published price for 720p video to **$0.07 per second**, 30% below Omni 1.1 Flash.

Developers can specify durations from three to 15 seconds in one-second increments. Google describes a workflow in which users create drafts at 360p or 720p, make follow-up edits, and upscale selected results to 1080p or 4K.

## Editing without restarting

Multi-turn conversational editing lets users request changes to a clip's background, lighting, products or aspect ratio without starting again. Google says the model follows visual references more closely and better preserves characters, objects and scenes across camera movements. Those quality improvements remain company-reported claims, rather than independent benchmark findings.

The model also supports more natural dialogue and multi-speaker conditioning, according to Google. However, its Cloud announcement specifies that **audio references require allowlisting**, an important limit for developers planning voice-conditioned workflows.

## Production access and limits

Google Cloud offers Provisioned Throughput, and generated outputs carry an imperceptible SynthID watermark. Its announcement lists Google Vids as available while describing Gemini for business integration as coming soon.

The practical change is a longer single-generation clip at a lower listed price, paired with editing controls that may reduce repeated generation. Google still identifies fast sports action, rapid script changes and complex physics as areas needing improvement; general availability does not eliminate those limitations.
