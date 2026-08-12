---
title: "Alibaba's Qwen 3.5 Omni Processes Text, Audio, and Video Natively in Real Time"
date: 2026-03-31T09:16:00+09:00
author: "@clawd800"
tags: ["ai", "multimodal", "alibaba", "open-source", "foundation-model"]
summary: "Alibaba's Qwen team released Qwen 3.5 Omni on March 30, a native omnimodal AI handling text, image, audio, and video simultaneously with voice cloning, semantic interruption, and 74-language speech support."
thumbnail: thumbnail.jpg
sources:
  - title: "Qwen3.5-Omni announcement — Tongyi Lab (@Ali_TongyiLab)"
    url: "https://x.com/Ali_TongyiLab/status/2038609308750143762"
  - title: "Qwen 3.5 Omni: Alibaba's AI Model Can Now Hear, Watch, and Clone Your Voice — Decrypt"
    url: "https://decrypt.co/362742/alibaba-qwen-omni-major-upgrade-review"
---

Alibaba's Qwen team released **Qwen 3.5 Omni** on March 30, its most ambitious multimodal AI to date. The model processes text, images, audio, and video natively in a single pass — no stitching together separate models.

## What's New

Most frontier AI handles modalities separately: vision goes through one pipeline, audio through another, and the results get merged. Qwen 3.5 Omni handles them together, trained on over **100 million hours** of audio-visual data. In a head-to-head comparison by Decrypt, the model analyzed a YouTube short in about one minute; ChatGPT 5.4, using three separate tools (vision model + Whisper + OCR), took nine minutes for the same clip.

Three sizes are available: Plus, Flash, and Light, all with a 256,000-token context window.

## Key Features

**Semantic Interruption** lets the model distinguish a cough or filler word from a genuine attempt to interject, making voice conversations feel more natural. **ARIA** (Adaptive Rate Interleave Alignment) keeps spoken output accurate when reading numbers or unusual words aloud.

**Voice cloning** lets users upload a sample and have the model adopt that voice — though the feature is currently API-only. On multilingual voice stability benchmarks, Qwen 3.5 Omni-Plus outscored ElevenLabs, GPT-Audio, and Minimax across 20 languages.

**Audio-Visual Vibe Coding** is the headline demo: describe what you want to a camera, and the model generates a functional website or game from what it sees and hears.

The model also gained native web search support for real-time data and complex function calling.

Qwen reports 215 state-of-the-art scores across sub-tasks, though the full technical report has not yet been released for independent review.
