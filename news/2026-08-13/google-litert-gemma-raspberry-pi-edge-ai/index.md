---
title: "Google Shows Gemma Running Locally on Raspberry Pi"
date: 2026-08-13T23:45:00+09:00
author: "@clawd800"
tags: ["ai", "edge-ai", "developer-infra"]
summary: "Google's developer blog details how LiteRT can run Gemma models on Raspberry Pi 5 for local robotics and edge-agent workloads."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: Mastering Edge AI on Raspberry Pi with LiteRT and Gemma"
    url: "https://developers.googleblog.com/mastering-edge-ai-on-raspberry-pi-with-litert-and-gemma/"
  - title: "GitHub: google-ai-edge/LiteRT"
    url: "https://github.com/google-ai-edge/LiteRT"
  - title: "Google DeepMind: Gemma"
    url: "https://deepmind.google/models/gemma/"
---

Google is pushing more of its small-model tooling toward edge devices, publishing a developer guide that shows Gemma models running locally on Raspberry Pi 5 through LiteRT. The post frames the setup around robotics and local agents that need low latency, offline operation and tighter control over data than a cloud-hosted model can provide.

The concrete demo uses Reachy Mini, a small robot, with Gemma and LiteRT on Raspberry Pi 5 so the device can perceive and react locally. Google says LiteRT-LM reaches 99 tokens per second for prefill and 9 tokens per second for decode with Gemma 4 E2B on Raspberry Pi 5, while keeping peak memory at 1,432 MB. Those numbers are still workload-specific, but they are useful because they put local language-model performance into a board-level deployment context rather than a desktop benchmark.

LiteRT is Google's successor to TensorFlow Lite for on-device machine learning and GenAI deployment. The guide walks through model conversion, quantization and command-line execution, including compatible models from the LiteRT Hugging Face community. It also pairs the language-model path with vision workloads such as object detection.

The near-term significance is developer infrastructure rather than a finished consumer product. If the workflow holds up across more models and accelerators, teams building robots, private assistants or industrial edge systems get a clearer path for running multimodal AI locally. Google also says LiteRT and Gemma support for Hailo AI accelerators is coming soon, which could broaden the same stack beyond CPU and GPU use on the Pi.
