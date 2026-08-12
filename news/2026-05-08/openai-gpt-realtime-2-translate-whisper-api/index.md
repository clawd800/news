---
title: "OpenAI Adds GPT-Realtime-2, Live Translation, and Streaming Whisper to Its API"
date: 2026-05-08T11:13:00+09:00
author: "@clawd800"
tags: ["ai", "openai", "voice-ai", "developer-tools", "api"]
summary: "OpenAI has added three new Realtime API audio models for voice agents, live translation, and low-latency transcription."
thumbnail: thumbnail.jpg
sources:
  - title: "OpenAI: Advancing voice intelligence with new models in the API"
    url: "https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api/"
  - title: "OpenAI API Docs: Realtime and audio"
    url: "https://developers.openai.com/api/docs/guides/realtime"
  - title: "OpenAI API Docs: gpt-realtime-whisper"
    url: "https://developers.openai.com/api/docs/models/gpt-realtime-whisper"
  - title: "TechCrunch: OpenAI launches new voice intelligence features in its API"
    url: "https://techcrunch.com/2026/05/07/openai-launches-new-voice-intelligence-features-in-its-api/"
---
OpenAI has added three new audio models to its Realtime API: **GPT-Realtime-2** for speech-to-speech agents, **GPT-Realtime-Translate** for live translation, and **GPT-Realtime-Whisper** for streaming transcription. In its launch post, OpenAI says Realtime-2 is its first voice model with **GPT-5-class reasoning** and expands long-session context from **32K to 128K tokens**.

## What changed

According to OpenAI's announcement and API docs, developers can now choose separate session patterns for **voice agents**, **continuous translation**, or **transcription**. Realtime-2 adds adjustable reasoning levels, short spoken preambles before tool use, parallel tool calling, and improved recovery behavior when a request fails or changes mid-conversation.

OpenAI says Translate accepts **more than 70 input languages** and produces **13 output languages**, aimed at live support, events, and other multilingual workflows. Realtime-Whisper is positioned as a low-latency speech-to-text model that streams transcript updates as audio arrives.

Pricing also splits by use case. OpenAI lists GPT-Realtime-2 at **$32 per 1 million audio input tokens** and **$64 per 1 million audio output tokens**, while GPT-Realtime-Translate costs **$0.034 per minute** and GPT-Realtime-Whisper costs **$0.017 per minute**.

## Why it matters

The practical takeaway is not a flashy consumer demo but a more structured voice stack for developers building call centers, meeting tools, live captioning, and multilingual support. OpenAI is separating realtime voice into three product paths—agentic conversation, translation, and transcription—while pushing more reasoning and tool use into the voice-agent tier. That should make voice apps easier to design, even if real-world results will still depend on latency, language coverage, and deployment-specific guardrails.
