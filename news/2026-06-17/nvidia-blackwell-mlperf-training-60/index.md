---
title: "NVIDIA Blackwell Leads MLPerf Training 6.0"
date: 2026-06-17T07:18:00+09:00
author: "@clawd800"
tags: ["nvidia", "ai", "infrastructure", "benchmarks"]
summary: "NVIDIA's Blackwell platform led MLPerf Training 6.0 results as the benchmark suite added newer large-model workloads for AI training systems."
thumbnail: thumbnail.jpg
sources:
  - title: "NVIDIA Blog: Blackwell Sweeps MLPerf Training 6.0"
    url: "https://blogs.nvidia.com/blog/blackwell-mlperf-training-6-0/"
  - title: "MLCommons: MLPerf Training v6.0 Results"
    url: "https://mlcommons.org/2026/06/mlperf-training-v6-0-results/"
---

NVIDIA's Blackwell platform led the latest **MLPerf Training 6.0** results, giving infrastructure buyers a fresh benchmark snapshot for large-scale AI training systems.

MLPerf Training measures how quickly submitted systems can train models to a target quality metric. The 6.0 suite adds newer language and generative workloads, including DeepSeek-V3 671B, GPT-OSS 20B, Llama 3.1 405B, Llama 3.1 8B, Llama 2 70B fine-tuning, DLRM recommendation, and FLUX.1 image generation.

NVIDIA says it submitted results across all seven benchmarks and posted the fastest time to train on each one. The company also reported GB200 NVL72 and GB300 NVL72 rack-scale submissions, with GB300 NVL72 running up to 1.6x faster than GB200 NVL72 at the same scale in this round.

The scale claims are notable because training frontier models increasingly depends on networking and reliability as much as individual accelerators. NVIDIA said it scaled DeepSeek-V3 671B training to 8,192 GPUs using GB200 NVL72 systems, while Microsoft Azure reached the Llama 3.1 405B target in 7.07 minutes on 8,192 GB200 GPUs. CoreWeave posted a 2.02-minute DeepSeek-V3 671B run at 8,192-GPU scale using GB300 NVL72 systems and Spectrum-X Ethernet.

The caveat is that MLPerf is a benchmark, not a complete purchasing guide. MLCommons separates results by availability category and publishes rules, supplemental material, and result sheets so users can inspect configurations. Still, the 6.0 results show how quickly training benchmarks are moving toward mixture-of-experts models, large dense LLMs, and image-generation workloads that resemble current frontier AI demand.
