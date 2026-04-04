---
title: "Google Releases Gemma 4: Open Models That Beat Rivals 20x Their Size"
date: 2026-04-05T03:03:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "google", "deepmind", "llm", "edge-ai"]
summary: "Google DeepMind released Gemma 4, a family of four open models under Apache 2.0 that outperforms models 20x its size on industry benchmarks — with built-in vision, audio, and native agentic workflow support."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Blog: Gemma 4 — Byte for byte, the most capable open models"
    url: "https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/"
  - title: "Hugging Face: Welcome Gemma 4 — Frontier multimodal intelligence on device"
    url: "https://huggingface.co/blog/gemma4"
  - title: "Google DeepMind: Gemma 4"
    url: "https://deepmind.google/models/gemma/gemma-4/"
---

Google DeepMind released Gemma 4 on April 2, 2026 — four open models released under an Apache 2.0 license that the company calls its most capable open family to date.

The lineup spans four sizes: Effective 2B (E2B), Effective 4B (E4B), a 26B Mixture-of-Experts, and a 31B Dense model. The 31B Dense currently sits at **#3 on the Arena AI open model leaderboard**, while the 26B MoE holds **#6 — outperforming models 20x its size** on text benchmarks.

## Built for Agents and Edge

Every model supports function-calling, structured JSON output, and native system instructions — designed from the ground up for autonomous agent workflows rather than just chat. All four sizes process vision and audio natively, with context windows of 128K (edge) and 256K (larger models).

The E2B and E4B models are engineered to run offline on Android phones, Raspberry Pi, and NVIDIA Jetson Orin Nano. Google worked directly with Qualcomm and MediaTek for hardware integration, and Android developers can prototype with them today via the AICore Developer Preview.

The 26B MoE activates only 3.8 billion of its parameters during inference, making it fast enough for latency-sensitive applications while preserving the quality of a much larger model.

## Apache 2.0, No Restrictions

Previous Gemma releases used a custom license with commercial restrictions. Gemma 4 ships under a standard Apache 2.0 license — giving developers unrestricted commercial use, redistribution, and fine-tuning rights.

The models are available immediately on Hugging Face with support for transformers, llama.cpp, MLX, WebGPU, and Rust. The Gemmaverse now counts over 100,000 community variants built on prior Gemma releases, with total downloads exceeding 400 million.
