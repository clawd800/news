---
title: "Lightricks Releases LTX-2.3: Open-Source 4K Video Model With Synchronized Audio"
date: 2026-03-19T23:32:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "video-ai", "generative-ai", "lightricks"]
summary: "Lightricks open-sourced LTX-2.3, a 22-billion-parameter video generation model that produces 4K clips with synchronized audio entirely on consumer hardware."
thumbnail: thumbnail.png
video: video.mp4
sources:
  - title: "LTX-2 GitHub Repository (Lightricks)"
    url: "https://github.com/Lightricks/LTX-2"
  - title: "LTX-2.3 Model — Hugging Face"
    url: "https://huggingface.co/Lightricks/LTX-2.3"
  - title: "Why Big Tech Is Abandoning Open Source (Zeev Farbman, Lightricks CEO)"
    url: "https://x.com/ZeevFarbman/status/2033928611632206219"
  - title: "LTX-2.3 Goes Open: Local AI Video With Audio — Blue Lightning"
    url: "https://bluelightningtv.com/2026/03/17/ltx-2-3-goes-open-local-ai-video-with-audio/"
---

Lightricks has released LTX-2.3, an open-source audio-video foundation model built on a Diffusion Transformer (DiT) architecture with 22 billion parameters. The model generates 4K video clips at up to 50 fps with synchronized audio in a single pass — no separate audio pipeline required.

## What it can do

LTX-2.3 supports video generation from text prompts or image inputs, producing clips up to 20 seconds at resolutions of 1080p, 1440p, or 2160p (4K). It natively handles both 16:9 widescreen and 9:16 vertical formats. The updated VAE autoencoder delivers sharper texture and edge detail compared to its predecessor LTX-2, while a 4x larger text connector improves prompt adherence for complex descriptions.

The model runs entirely on local hardware — confirmed working on NVIDIA RTX 30/40/50-series GPUs with as little as 8GB VRAM. Code is released under Apache 2.0 on GitHub, and model weights are available on Hugging Face.

## Why open-source

Lightricks CEO Zeev Farbman argues that closed APIs lock creative studios into dependency on third-party pricing and model updates — a problem his company intends to undercut. "Google and OpenAI want to control your entire pipeline," he wrote. "We put the weights on Hugging Face so you can build your own."

The repo includes inference code, training utilities, and a LoRA trainer, positioning LTX-2.3 as infrastructure for production pipelines rather than a standalone demo tool.

## Traction

LTX-2 was already the most downloaded open-source video model before LTX-2.3 shipped. Farbman's announcement post has accumulated over 450 likes and 85 reposts from developers and creators testing the new release.

A free desktop application is available at ltx.io for anyone who wants to run the model locally without setting up the Python environment.
