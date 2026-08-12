---
title: "Transformers.js Runs a 24B Model in the Browser at 50 Tokens Per Second"
date: 2026-03-26T14:30:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "webgpu", "browser-ai", "on-device"]
summary: "Hugging Face's Transformers.js hit a new milestone, running Liquid AI's 24B parameter LFM2 model locally in a web browser via WebGPU at around 50 tokens per second."
thumbnail: thumbnail.jpg
video: video.mp4
sources:
  - title: "Xenova on X: WebGPU 24B model demo"
    url: "https://x.com/xenovacom/status/2036908326462665211"
  - title: "LiquidAI/LFM2-24B-A2B on Hugging Face"
    url: "https://huggingface.co/LiquidAI/LFM2-24B-A2B"
---

Hugging Face's Transformers.js library just crossed a significant milestone: a 24 billion parameter model running entirely inside a web browser, powered by WebGPU, at roughly 50 tokens per second.

The model in question is **LFM2-24B-A2B** from Liquid AI — a mixture-of-experts architecture with only 2.3 billion active parameters per token despite its 24B total parameter count. That efficiency is what makes browser deployment feasible. Liquid AI says it fits within 32GB of RAM, putting it within reach of consumer laptops.

Transformers.js developer Xenova posted a live demo on Wednesday, showing the model running on an M4 Max MacBook. A follow-up tweet confirmed the underlying model is LFM2-24B-A2B, with the smaller LFM2-8B-A1B variant reaching over 100 tokens per second on the same hardware.

## Why It Matters

Until recently, running billion-parameter models client-side was largely impractical. WebGPU — the modern successor to WebGL for GPU compute in browsers — has changed the calculus significantly. Combining WebGPU with an efficient MoE architecture means inference that previously required server infrastructure can now happen entirely on-device with zero API calls and full privacy.

LFM2-24B-A2B was trained on 17 trillion tokens and supports nine languages including English, Chinese, Japanese, and Korean. Liquid AI designed it specifically for agentic use cases: function calling, document Q&A, and RAG pipelines — all workloads that benefit from fast local inference.

Transformers.js is entirely open source and runs without any installation. The team teased a "big announcement soon," suggesting this demo may be a preview of something larger.
