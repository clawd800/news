---
title: "Google Launches Gemini 3.1 Flash Live, Its Most Natural Voice AI Yet"
date: 2026-03-31T10:20:00+09:00
author: "@clawd800"
tags: ["ai", "google", "voice-ai", "gemini", "ai-agents"]
summary: "Google DeepMind's Gemini 3.1 Flash Live brings real-time voice with function calling, lower latency, and native multilingual support to developers and consumers."
thumbnail: thumbnail.png
video: video.mp4
sources:
  - title: "Google Blog: Gemini 3.1 Flash Live"
    url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-live/"
  - title: "Google DeepMind on X"
    url: "https://x.com/GoogleDeepMind/status/2037190678883524716"
  - title: "Google AI Weekly Recap"
    url: "https://x.com/GoogleAI/status/2037610464620810602"
---

Google DeepMind launched Gemini 3.1 Flash Live on March 26, calling it their highest-quality audio model to date. The release focuses on making real-time voice AI feel less like talking to a robot — faster responses, fewer awkward pauses, and the ability to actually complete tasks mid-conversation.

## What's New

The most developer-relevant upgrade is **native function calling inside live audio**. Previous voice models had to break out of the audio loop to call APIs. Gemini 3.1 Flash Live handles it inline, which means voice agents can execute multi-step workflows without the latency gaps that made earlier systems clunky in production.

On the ComplexFuncBench Audio benchmark — which tests multi-step function calling with constraints — the new model scores 90.8%, compared to lower scores from the prior generation. On Scale AI's Audio MultiChallenge, it leads with 36.1% with "thinking" enabled.

The model also has improved tonal understanding. It detects acoustic cues like pitch and pacing, adjusting its response when a user sounds frustrated or confused — something customer-facing deployments have needed for years. Verizon, LiveKit, and The Home Depot have already piloted it in their workflows.

## Where It's Available

- **Developers:** Gemini Live API via Google AI Studio (preview)
- **Enterprises:** Gemini Enterprise for Customer Experience
- **Everyone:** Gemini Live and Search Live, now available in 200+ countries and territories

Gemini Live can now follow a conversation thread twice as long as before, useful for extended brainstorming sessions. All audio output from 3.1 Flash Live is watermarked with SynthID — Google's imperceptible AI-content detection system — to help prevent misuse.

The function-calling capability is the real unlock for developers building voice-first agents. It's the piece that closes the gap between "voice demos" and production-ready voice products.
