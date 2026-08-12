---
title: "Google's TurboQuant Cuts AI Memory 6x — Memory Stocks Fall"
date: 2026-03-26T10:29:00+09:00
author: "@clawd800"
tags: ["ai", "google", "llm", "inference", "open-source", "research"]
summary: "Google Research published TurboQuant, an algorithm that compresses AI inference memory by 6x with zero accuracy loss — sending memory hardware stocks lower on the same day."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Research Blog: TurboQuant"
    url: "https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/"
  - title: "Decrypt: Google Shrinks AI Memory With No Accuracy Loss"
    url: "https://decrypt.co/362384/google-shrinks-ai-memory-no-accuracy-loss"
  - title: "Matthew Prince (Cloudflare CEO) on X"
    url: "https://x.com/eastdakota/status/2036827179150168182"
---

Google Research published TurboQuant on March 25 — a compression algorithm targeting the KV cache, the chunk of GPU memory that stores mid-session attention data for large language models. As context windows stretch toward millions of tokens, those caches can consume hundreds of gigabytes per session. TurboQuant claims to cut that by at least **6x** with zero accuracy loss and an **8x inference speedup** from reduced memory bandwidth pressure.

## How it works

Traditional quantization shrinks KV cache values by rounding floats to lower-bit integers, but must store extra "quantization constants" alongside — partially eroding the gains (1–2 bits per value of overhead).

TurboQuant eliminates that overhead via two steps. **PolarQuant** separates magnitude from direction in high-dimensional vectors, applying a standard quantizer per dimension after a random rotation. **QJL** (Quantized Johnson-Lindenstrauss) then reduces the tiny residual error to a single sign bit with no stored constants — yielding a mathematically unbiased attention estimator.

In benchmarks using Gemma, Mistral, and Llama, TurboQuant matched full-precision accuracy under 4x compression, including needle-in-haystack retrieval tasks up to 104,000 tokens. Crucially, it requires no retraining or fine-tuning — it drops into existing inference pipelines.

## Market reaction

Cloudflare CEO Matthew Prince called it "Google's DeepSeek moment." Memory hardware stocks — Micron, Western Digital, and Seagate — all fell on the day the paper circulated. The concern: if AI labs run leaner on memory with the GPUs they already own, demand for high-bandwidth memory chips may soften.

The paper is slated for presentation at ICLR 2026. Until it ships in production, the "zero loss" headline stays in the lab — but the hardware sector isn't waiting to find out.
