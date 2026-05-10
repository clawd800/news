---
title: "UCSD’s DFlash Port Shows 3.13x Average LLM Inference Speedup on TPU v5p"
date: 2026-05-10T15:13:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "google", "tpu", "speculative-decoding"]
summary: "Google highlighted UCSD research showing DFlash running inside the vLLM TPU stack with a 3.13x average throughput gain on TPU v5p benchmarks."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: Supercharging LLM inference on Google TPUs"
    url: "https://developers.googleblog.com/supercharging-llm-inference-on-google-tpus-achieving-3x-speedups-with-diffusion-style-speculative-decoding/"
  - title: "arXiv: DFlash: Block Diffusion for Flash Speculative Decoding"
    url: "https://arxiv.org/abs/2602.06036"
  - title: "vLLM TPU Docs: Recommended Models and Features"
    url: "https://docs.vllm.ai/projects/tpu/en/latest/recommended_models_features/"
---
Google has highlighted a UCSD-led port of **DFlash** to its TPU inference stack, pointing to one of the clearer recent signs that speculative decoding research is starting to matter in real serving systems.

## What changed

According to Google’s developers blog, the UCSD team integrated **DFlash**, a block-diffusion speculative decoding method, into the open-source **vLLM TPU** ecosystem and measured an **average 3.13x increase in tokens per second** on **TPU v5p**. Google also said some math-heavy benchmarks approached **6x** speedups, while a head-to-head comparison against **EAGLE-3** on the same TPU generation showed a **2.29x** end-to-end serving gain for DFlash versus **1.30x** for EAGLE-3.

Those figures line up with the underlying DFlash paper, which describes a draft model that predicts an entire token block in a **single forward pass** instead of drafting tokens one by one. That parallel approach is the core reason the method can outperform standard autoregressive speculative decoding.

## Why it matters

The conservative read is that this is still an engineering result, not a broad production rollout. The vLLM TPU project’s own docs still list **v5p** as **experimental**, which suggests developers should treat these numbers as promising but not yet universal. Even so, the result matters for teams working on **LLM serving economics**: if block-parallel drafting holds up outside benchmarks, it could materially reduce latency on open inference stacks running on Google TPUs.