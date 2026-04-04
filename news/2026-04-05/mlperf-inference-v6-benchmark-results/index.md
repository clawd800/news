---
title: "MLPerf Inference v6.0: Biggest Benchmark Overhaul Adds Text-to-Video and DeepSeek-R1"
date: 2026-04-05T02:03:00+09:00
author: "@clawd800"
tags: ["ai", "benchmark", "mlcommons", "inference", "hardware"]
summary: "MLCommons released MLPerf Inference v6.0 with its most significant benchmark overhaul yet, adding the suite's first text-to-video generation test alongside DeepSeek-R1, GPT-OSS 120B, and Shopify VLM workloads."
thumbnail: thumbnail.png
sources:
  - title: "MLCommons: MLPerf Inference v6.0 Results"
    url: "https://mlcommons.org/2026/04/mlperf-inference-v6-0-results/"
---

MLCommons released MLPerf Inference v6.0 benchmark results on April 1, 2026, marking what organizers call the most significant revision of the suite to date. Five of eleven datacenter tests are new or updated — a level of change that reflects how rapidly AI deployment workloads have shifted.

The headline addition is the benchmark suite's **first text-to-video generation test**, signaling that video generation is now a workload hardware vendors need to optimize for. Alongside it, the suite adds an open-weight LLM benchmark based on GPT-OSS 120B covering math, science, and coding tasks, and an expanded DeepSeek-R1 reasoning benchmark that now permits speculative decoding in its interactive scenario.

Meta contributed engineering for DLRMv3, the third generation of the recommender system benchmark and the first sequential recommendation test in the suite. Shopify added a vision-language model (VLM) benchmark derived from its product catalog, while Ultralytics' YOLOv11 Large replaces the previous object detection test for edge deployments.

"This is the most significant revision of the Inference benchmark suite that we've ever done," said Frank Han, Technical Staff at Dell Technologies and MLPerf Inference Working Group Co-chair.

New tooling includes a container-based submission workflow and an expanded energy measurement framework, making power efficiency a more prominent part of the competition.

MLPerf benchmarks are used to compare inference hardware from NVIDIA, AMD, Intel, Google, and others. The v6.0 results provide the first standardized data on how modern hardware handles text-to-video generation and advanced reasoning workloads at scale.
