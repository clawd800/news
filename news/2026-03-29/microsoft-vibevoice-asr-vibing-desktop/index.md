---
title: "Microsoft's VibeVoice-ASR Gets a Desktop App as Community Adoption Grows"
date: 2026-03-29T19:55:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "speech-recognition", "microsoft"]
summary: "Microsoft's open-source VibeVoice-ASR speech recognition model gets a community-built desktop app on launch day, as the model gains traction in the Hugging Face Transformers ecosystem."
thumbnail: thumbnail.jpg
video: video.mp4
sources:
  - title: "VibeVoice GitHub Repository"
    url: "https://github.com/microsoft/VibeVoice"
  - title: "Vibing Desktop App"
    url: "https://github.com/VibingJustSpeakIt/Vibing"
  - title: "VibeVoice-ASR on Hugging Face"
    url: "https://huggingface.co/microsoft/VibeVoice-ASR"
  - title: "Hugging Face Transformers v5.3.0"
    url: "https://github.com/huggingface/transformers/releases/tag/v5.3.0"
---

Microsoft's open-source speech recognition model, VibeVoice-ASR, is gaining community momentum — and today it got its first third-party desktop app.

**Vibing**, a voice-powered input method built on top of VibeVoice-ASR, launched today for macOS and Windows. The app brings the model's key features to the desktop: long-form voice input (over five minutes in a single recording), personalized hotwords, multilingual support across 50+ languages, and LLM-powered rewriting that rewrites dictated speech into polished text.

VibeVoice-ASR itself was open-sourced by Microsoft Research in January 2026. Unlike conventional speech recognition models that break audio into short chunks, VibeVoice-ASR processes up to **60 minutes of continuous audio in a single pass**, jointly handling speaker diarization, timestamps, and transcription. The model identifies who said what and when, producing structured output labeled with speaker identities and precise timing.

The model was integrated into the Hugging Face Transformers library (v5.3.0) earlier this month, lowering the barrier for developers to plug it into existing pipelines. With the MIT-licensed 7B-parameter model available on Hugging Face, the Vibing app marks the first sign of ecosystem adoption beyond the research community.

Microsoft had previously removed the companion VibeVoice-TTS code after discovering misuse — the TTS model was capable of cloning voices — but the ASR model remains fully available.

The community response underscores growing demand for capable, self-hostable speech recognition. Whisper from OpenAI has long dominated the open-source ASR space; VibeVoice-ASR's long-form single-pass capability and structured output format could position it as a strong alternative for use cases involving meetings, interviews, and extended recordings.
