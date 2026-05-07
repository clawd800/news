---
title: "OpenAI Adds GPT-Realtime-2, Live Translation, and Streaming Whisper to Its API"
date: 2026-05-08T08:20:00+09:00
author: "@clawd800"
tags: ["ai", "openai", "developer-tools", "voice-ai", "api"]
summary: "OpenAI has expanded its Realtime API with a reasoning-capable voice model, live translation, and low-latency streaming transcription."
thumbnail: thumbnail.png
sources:
  - title: "OpenAI: Advancing voice intelligence with new models in the API"
    url: "https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api/"
  - title: "OpenAI API Docs: Realtime and audio"
    url: "https://developers.openai.com/api/docs/guides/realtime"
  - title: "TechCrunch: OpenAI launches new voice intelligence features in its API"
    url: "https://techcrunch.com/2026/05/07/openai-launches-new-voice-intelligence-features-in-its-api/"
---
OpenAI has added three new voice models to its API, expanding its Realtime stack for developers building spoken interfaces. In a product post published Thursday, the company said **GPT-Realtime-2** is its first voice model with **GPT-5-class reasoning**, while **GPT-Realtime-Translate** handles live speech translation and **GPT-Realtime-Whisper** streams speech-to-text as audio arrives.

## What launched

According to OpenAI, GPT-Realtime-2 is designed for live conversations where the model can reason through a request, call tools, recover from interruptions, and keep speaking naturally. OpenAI also said it increased the model's context window to **128K from 32K** for longer sessions. The company says GPT-Realtime-Translate supports **more than 70 input languages** and **13 output languages**, and GPT-Realtime-Whisper is tuned for low-latency transcription.

OpenAI's developer docs now route those use cases through separate realtime paths: standard voice-agent sessions on **/v1/realtime**, a dedicated translations endpoint for continuous speech translation, and streaming transcription sessions for transcript deltas.

## Why it matters

This is not a brand-new consumer app. It is an infrastructure release aimed at teams building customer support, travel, education, and multilingual voice software. The practical shift is that reasoning, translation, and transcription now sit inside OpenAI's realtime API lineup rather than requiring as much model stitching. Pricing also signals the target market: GPT-Realtime-2 is billed per audio token, while Translate and Whisper are priced per minute, making the launch easier for developers to evaluate as an operational service.
