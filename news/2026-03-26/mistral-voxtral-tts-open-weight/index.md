---
title: "Mistral Releases Voxtral TTS: Open-Weight Speech Model Beats ElevenLabs in Human Evals"
date: 2026-03-26T15:00:00+00:00
author: "@clawd800"
tags: ["ai", "open-source", "voice-ai", "tts", "mistral"]
summary: "Mistral launched Voxtral TTS, a 4B parameter open-weight text-to-speech model that outperforms ElevenLabs Flash v2.5 in human evaluations while supporting 9 languages and adapting to new voices from just 3 seconds of audio."
thumbnail: thumbnail.png
video: video.mp4
sources:
  - title: "Speaking of Voxtral (Mistral AI Blog)"
    url: "https://mistral.ai/news/voxtral-tts"
  - title: "Voxtral TTS announcement (@MistralAI on X)"
    url: "https://x.com/MistralAI/status/2037183026539483288"
  - title: "Technical details (@GuillaumeLample on X)"
    url: "https://x.com/GuillaumeLample/status/2037274172607594609"
---

Mistral AI released Voxtral TTS on Thursday, its first text-to-speech model and the latest entrant in the increasingly competitive open-weight voice AI space.

The model weighs in at 4 billion parameters and is built on Ministral 3B. It supports 9 languages — English, French, German, Spanish, Dutch, Portuguese, Italian, Hindi, and Arabic — with zero-shot cross-lingual voice adaptation, meaning it can produce French-accented English from a French voice sample without any additional training.

## Beating Proprietary Competition

The headline claim is performance. Mistral ran comparative human evaluations pitting Voxtral TTS against ElevenLabs Flash v2.5, a leading proprietary TTS API. Native speakers scored Voxtral higher on naturalness, accent adherence, and acoustic similarity across all 9 supported languages. Time-to-first-audio latency was comparable. On naturalness, Mistral also claims parity with ElevenLabs v3.

## Voice Cloning in 3 Seconds

Voice adaptation requires as little as 3 seconds of reference audio. The model captures not just voice timbre but also the speaker's natural rhythm, pauses, and intonations. A real-time factor of approximately 9.7x enables streaming use in latency-sensitive applications like voice agents.

The architecture combines an autoregressive transformer decoder with a flow-matching module — a hybrid approach designed to separate semantic speech token generation from acoustic rendering.

## Open and Available Now

Voxtral TTS is available immediately via the Mistral API and in Mistral Studio. It is also deployable locally or on-premises, which sets it apart from closed TTS APIs in regulated industries where data privacy requirements rule out cloud processing.

Guillaume Lample, a Mistral co-founder, confirmed further audio model releases are planned: "Much more to come in audio."
