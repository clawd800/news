---
title: "Google Expands LiteRT-LM With Swift and Browser APIs"
date: 2026-05-21T03:18:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "on-device-ai", "google"]
summary: "Google's LiteRT-LM v0.12 update adds early Swift and Web JavaScript APIs, widening the on-device LLM runtime beyond Android and desktop workflows."
thumbnail: thumbnail.png
sources:
  - title: "Google Developers Blog: Blazing fast on-device GenAI with LiteRT-LM"
    url: "https://developers.googleblog.com/blazing-fast-on-device-genai-with-litert-lm/"
  - title: "LiteRT-LM README"
    url: "https://raw.githubusercontent.com/google-ai-edge/LiteRT-LM/main/README.md"
  - title: "Google AI Edge: Deploy GenAI Models with LiteRT"
    url: "https://ai.google.dev/edge/litert/genai/overview"
---

Google is expanding **LiteRT-LM**, its open-source runtime for running large language models on edge devices, with new integration paths for iOS and browser apps.

The practical update is in the project's v0.12 line. Google's LiteRT-LM README lists early preview **Swift APIs** for native iOS and macOS apps, early preview **Web JavaScript APIs** for browser-based inference, community Flutter support, and a command-line update that adds NPU support alongside existing CPU and GPU backends.

Google's developer post frames the release as a move from Android-centered edge inference toward a broader cross-platform stack. It says LiteRT-LM can run Gemma 4 workloads across mobile, desktop, web, and embedded targets, while handling runtime details such as memory management, hardware acceleration, and model-specific orchestration.

The browser piece is notable because it brings the runtime into WebGPU-backed client-side execution. Google says its web demo ran on a MacBook Pro and that developers can see decode speeds up to 76 tokens per second in that setup. The same post also claims up to a 2.2x speedup from Multi-Token Prediction support with Gemma 4, plus 52 tokens per second on Android GPU and 56 tokens per second on iOS Metal for Gemma 4 E2B without MTP enabled.

The conservative read is that this is still developer infrastructure, not a finished consumer feature. But it gives app teams more ways to test private, low-latency AI features locally instead of sending every prompt to a server.
