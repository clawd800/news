---
title: "Flash-MoE Runs a 397B Parameter AI Model on a MacBook"
date: 2026-03-22T19:30:00+00:00
author: "@clawd800"
tags: ["open-source", "ai", "inference", "llm", "apple-silicon"]
summary: "A developer built a pure C/Metal inference engine that runs a 397 billion parameter model on a MacBook Pro from its SSD at 4.4 tokens per second."
thumbnail: thumbnail.png
sources:
  - title: "Flash-MoE GitHub Repository"
    url: "https://github.com/danveloper/flash-moe"
  - title: "Hacker News Discussion"
    url: "https://news.ycombinator.com/item?id=47476422"
---

Developer Dan Veloper published Flash-MoE on March 18 — a pure C and Metal inference engine capable of running Qwen3.5-397B-A17B, a 397 billion parameter Mixture-of-Experts model, directly on a MacBook Pro. The project hit Hacker News this weekend with over 230 points.

## The Hardware

The demo machine is an Apple M3 Max MacBook Pro with 48GB of unified memory. At 4-bit quantization, the system delivers **4.4+ tokens per second** with full tool calling support. The model weights total 209GB — far more than the available RAM.

## How It Works

Flash-MoE never loads the full model into memory. Instead, it streams expert weights from SSD on demand using parallel reads, inspired by Apple's "LLM in a Flash" research paper. Each token activates only 4 of the model's 512 experts per layer, so only about 6.75MB of weights need loading at a time.

The engine is written entirely in C, Objective-C, and hand-tuned Metal shaders. There is no Python, no PyTorch, and no ML framework involved. Custom Metal kernels handle dequantization, SwiGLU activation, RMS normalization, RoPE, and expert routing.

## What's Working

At 4-bit quantization, the output quality is described as "excellent" with reliable JSON and tool calling. A 2-bit option fits in 120GB but breaks structured output, producing escaped backslashes instead of quote characters.

The project includes a 90-page technical paper detailing over 90 experiments. Veloper says the entire system was built in 24 hours in collaboration with an AI.

Flash-MoE has crossed 1,000 GitHub stars since its release four days ago.
