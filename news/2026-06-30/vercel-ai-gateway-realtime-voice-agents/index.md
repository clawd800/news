---
title: "Vercel Adds Realtime Voice Paths to AI Gateway"
date: 2026-06-30T15:37:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-infra"]
summary: "Vercel's AI Gateway beta now covers realtime voice, text-to-speech, and speech-to-text paths for developers building audio agents."
thumbnail: thumbnail.png
sources:
  - title: "Vercel Blog: Build realtime voice agents on AI Gateway"
    url: "https://vercel.com/blog/realtime-voice-agents-on-ai-gateway"
  - title: "Vercel Docs: AI Gateway"
    url: "https://vercel.com/docs/ai-gateway"
  - title: "AI SDK Docs"
    url: "https://sdk.vercel.ai/docs"
---

Vercel has expanded AI Gateway into audio workloads, adding beta paths for realtime voice, text-to-speech, and speech-to-text alongside the text, image, and video routes already available through the service.

The most notable piece is realtime voice for agent-style applications. Vercel's example uses a single realtime model that takes live audio and produces live audio, rather than stitching together separate speech-to-text, language-model, and text-to-speech calls. In the browser, the `useRealtime` hook handles the WebSocket connection, microphone capture, and playback.

The security model is also part of the update. Vercel's sample keeps the AI Gateway credential on the server, where an app mints a short-lived token before handing the browser only that token and a connection URL. The example targets `openai/gpt-realtime-2`, while Vercel says audio support is launching with models from OpenAI and xAI.

For developers, the practical change is that voice agents can sit behind the same gateway layer used for other model calls. Vercel's AI Gateway docs describe that layer as a unified API for access to hundreds of models, with budgets, usage monitoring, load balancing, and fallback controls.

The feature is still labeled beta, so teams should treat it as an integration path to test rather than a settled production abstraction.
