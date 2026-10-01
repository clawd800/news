---
title: "Vercel Adds Microsoft Speech Models and Live Transcription to AI Gateway"
date: 2026-10-02T03:40:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infrastructure", "voice-agents", "microsoft"]
summary: "Vercel's AI Gateway now supports Microsoft's MAI-Voice-2.1 speech models and MAI-Transcribe-2 Streaming for incremental live transcription."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel: Microsoft AI models are now available on AI Gateway"
    url: "https://vercel.com/changelog/microsoft-ai-models-are-now-available-on-ai-gateway"
  - title: "Vercel AI Gateway: MAI-Transcribe-2-Streaming model documentation"
    url: "https://vercel.com/ai-gateway/models/mai-transcribe-2-streaming"
---

Vercel added three Microsoft AI audio models to **AI Gateway** on October 1, giving developers access to speech generation and live transcription through its existing model-access service.

The additions are **MAI-Voice-2.1**, **MAI-Voice-2.1-Flash**, and **MAI-Transcribe-2 Streaming**. Vercel says the two voice models generate speech in 23 languages. It positions the standard version for longer narration, including audiobooks and lessons, and Flash for lower-latency spoken replies in assistants and voice agents.

The transcription model accepts a continuous audio stream and returns text incrementally, rather than requiring an application to submit a completed recording. Its model documentation describes a WebSocket-based interface, with partial results updating the current transcription and final results confirming a segment.

## Integration details matter

Vercel's launch examples use AI SDK 7's experimental speech-generation and streaming-transcription functions. The documentation also demonstrates issuing a short-lived transcription token on a server for use by a client application.

For developers building captions or conversational interfaces, one important behavior is that partial transcripts can change as additional audio arrives. Applications therefore need to update provisional text instead of treating every intermediate result as a finished transcript.

Vercel says the models are billed at their listed rates without an additional platform fee or inference markup. The announcement does not provide measured end-to-end latency results, so its description of Flash as lower latency should not be read as an independently verified benchmark.

The concrete change is an additional deployment route for Microsoft's audio models, bringing speech output and incremental speech recognition into the same gateway developers use to manage model access and usage.
