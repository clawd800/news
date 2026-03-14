---
title: "Microsoft Open-Sources BitNet: A Native 1-Bit LLM That Runs on Your CPU"
date: 2026-03-14T14:10:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "microsoft", "llm", "edge-ai", "cpu-inference"]
summary: "Microsoft Research released BitNet b1.58 2B4T, the first open-source native 1-bit LLM trained from scratch on 4 trillion tokens — capable of running on a consumer CPU with no GPU required."
thumbnail: thumbnail.png
video: video.mp4
sources:
  - title: "microsoft/BitNet — GitHub"
    url: "https://github.com/microsoft/BitNet"
  - title: "BitNet b1.58 2B4T Technical Report — arXiv"
    url: "https://arxiv.org/abs/2504.12285"
  - title: "BitNet: Microsoft's 1-Bit LLMs That Run on Your CPU — DEV Community"
    url: "https://dev.to/bspann/bitnet-microsofts-1-bit-llms-that-run-on-your-cpu-20h8"
  - title: "BitNet: Inference framework for 1-bit LLMs — Hacker News"
    url: "https://news.ycombinator.com/item?id=47334694"
---

Microsoft Research has released **BitNet b1.58 2B4T**, the first open-source, natively trained 1-bit large language model, alongside bitnet.cpp — an inference framework that makes it runnable on standard CPUs.

## What Makes It Different

Every weight in a BitNet model is constrained to just three values: **{-1, 0, +1}**. Rather than quantizing an existing full-precision model after training, BitNet is trained from scratch with this ternary constraint. The result: no floating-point multiplications during inference — only integer additions and subtractions your CPU was already designed for.

The flagship release, **BitNet b1.58 2B4T**, is a 2-billion parameter model trained on 4 trillion tokens. It fits in roughly 0.4GB of RAM and consumes approximately 0.028 joules per inference. Benchmarks show it performs on par with leading open-weight, full-precision models of comparable size.

## Performance Numbers

The bitnet.cpp framework delivers significant gains over standard llama.cpp inference:

- **x86 CPUs:** 2.37x to 6.17x speedup, 71.9%–82.2% energy reduction
- **ARM CPUs (MacBook, etc.):** 1.37x to 5.07x speedup, 55.4%–70.0% energy reduction
- **100B parameter models** can also run on a single CPU at 5–7 tokens per second — near human reading speed

The model weights are published on Hugging Face under an MIT license and support both CPU and GPU backends. NPU support is listed as coming soon.

## Why It Matters

BitNet shifts what's possible for local AI deployment. Applications that previously required cloud APIs or dedicated GPU hardware can now run entirely offline — on laptops, edge devices, phones, or in regions with limited connectivity.

The GitHub repo has crossed 32,000 stars, reflecting strong community interest in efficient local inference as a practical alternative to always-online, GPU-dependent pipelines.
