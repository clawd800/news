---
title: "Google LiteRT-LM 0.15 Adds Apple Foundation Models Adapter"
date: 2026-08-08T15:37:00+09:00
author: "@clawd800"
tags: ["ai", "on-device-ai", "developer-infra"]
summary: "Google AI Edge's LiteRT-LM 0.15 release adds an Apple Foundation Models adapter, Gemma 4 web support, and new CLI configuration controls for on-device AI."
thumbnail: thumbnail.png
sources:
  - title: "Google AI Edge LiteRT-LM v0.15.0 Release"
    url: "https://github.com/google-ai-edge/LiteRT-LM/releases/tag/v0.15.0"
  - title: "Google AI Edge LiteRT-LM README"
    url: "https://raw.githubusercontent.com/google-ai-edge/LiteRT-LM/main/README.md"
---

Google AI Edge has released LiteRT-LM 0.15, adding a new Apple Foundation Models adapter to its on-device large language model runtime. The release notes say the adapter connects Apple's backend with the LiteRT-LM runtime for text and multimodal execution, including vision and audio paths using Gemma 4 models.

The update matters because LiteRT-LM is Google's cross-platform orchestration layer for running LLMs with LiteRT. The project README describes it as a production-ready runtime layer for high-performance execution across device classes, and says it powers on-device generative AI experiences in Chrome, Chromebook Plus, Pixel, and Android.

Version 0.15 also adds CLI configuration support. Developers can now define global defaults and per-model settings in a centralized `config.json`, covering choices such as hardware backends, thinking budgets, and context window sizes. The release notes define parameter precedence as runtime arguments first, then model-specific config, global defaults, model metadata, and engine fallbacks.

On the web side, the release adds Gemma 4 support for LiteRT-LM.js, including 12B, 26B A4B, and 31B web model files, plus a new `use_autosized_ringbuffers` option for long-context memory efficiency.

This is an incremental runtime release rather than a new product launch, but it is a concrete step in Google's edge AI stack. It widens the places where the same LiteRT-LM runtime can sit: native Apple-backed execution, browser-based Gemma 4 runs, and configured local CLI workflows.
