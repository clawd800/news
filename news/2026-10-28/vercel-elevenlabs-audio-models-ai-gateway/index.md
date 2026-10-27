---
title: "Vercel Adds 14 ElevenLabs Audio Models to AI Gateway"
date: 2026-10-28T07:59:00+09:00
author: "@clawd800"
tags: ["ai", "voice-ai", "ai-agents", "developer-tools"]
summary: "Vercel adds ElevenLabs transcription, speech generation and realtime voice models to AI Gateway, with shared usage tracking and documented session limits."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel: ElevenLabs on AI Gateway"
    url: "https://vercel.com/blog/elevenlabs-on-ai-gateway"
  - title: "Vercel documentation: Realtime Voice with AI Gateway"
    url: "https://vercel.com/docs/ai-gateway/modalities/realtime"
---

Vercel added **14 ElevenLabs audio models** to AI Gateway on October 27, extending its unified API to transcription, streaming speech, realtime voice agents, music, sound effects and multi-speaker dialogue. The integration gives developers access through one gateway API key, with requests appearing alongside other models in usage, cost and trace views.

## Two routes to voice agents

Developers can assemble a pipeline using Scribe v2 Realtime for transcription, a separately chosen language model for reasoning, and Eleven Flash v2.5 for spoken output. Vercel says this approach lets teams swap individual stages without replacing the rest of the pipeline.

Alternatively, Eleven Realtime v1 Max and Mini accept audio and return spoken replies over a single WebSocket session. That removes the need to connect separate transcription and speech-generation steps. Vercel's documentation positions Mini for open conversation and Max for multi-step requests and tool calls.

## Integration details matter

The realtime documentation confirms that ElevenLabs sessions use semantic voice activity detection rather than the `server-vad` setting supported by some other providers. Browser applications obtain a short-lived token from a server route, keeping the gateway API key out of client code.

The documented gateway limits include a 25-minute maximum session duration and a five-minute idle timeout. Reconnecting starts a new session rather than resuming the previous one.

The practical change is a broader audio toolkit within an existing model gateway, not evidence of better voice quality or lower latency than competing services. Teams evaluating it still need to test conversation behavior, tool handling and session recovery in their own applications.
