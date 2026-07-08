---
title: "ZML Releases LLMD as a Universal LLM Inference Server"
date: 2026-07-08T19:37:00+09:00
author: "@clawd800"
tags: ["ai-infra", "developer-tools", "inference"]
summary: "Paris AI startup ZML released LLMD, a self-contained inference server designed to run open-weight LLMs across NVIDIA, AMD, Google TPU, Intel oneAPI, and Apple Metal hardware."
thumbnail: thumbnail.png
sources:
  - title: "ZML/LLMD: The universal LLM server"
    url: "https://zml.ai/llmd/"
  - title: "ZML GitHub Repository"
    url: "https://github.com/zml/zml"
  - title: "ZML/LLMD Docker Hub"
    url: "https://hub.docker.com/r/zmlai/llmd"
  - title: "TechCrunch: ZML releases free product to speed inference"
    url: "https://techcrunch.com/2026/07/08/hot-french-startup-zml-releases-free-product-to-speed-inference-across-lots-of-ai-chips/"
---

ZML has released LLMD, a self-contained inference server for running open-weight language models across several accelerator families. The Paris startup presents LLMD as a "universal LLM server" for LLaMa, Gemma, Qwen, and Mistral models, with support listed for NVIDIA CUDA, AMD ROCm, Google TPU, Intel oneAPI, and Apple Metal.

The release matters because inference is where many AI operating costs now concentrate. Most production stacks still depend heavily on hardware-specific runtimes, so teams that want to mix accelerators often face separate serving layers, portability tradeoffs, or vendor lock-in. ZML's pitch is that model code should compile closer to the metal while staying portable across chips.

Official materials describe ZML as a production inference stack built to decouple AI workloads from proprietary hardware. The public GitHub repository says the stack compiles directly to NVIDIA, AMD, Intel, TPU, and Trainium targets, using Zig, MLIR, and Bazel. The LLMD Docker Hub page calls the server an alpha and warns that it remains a work in progress, a useful caveat for teams evaluating it for production.

LLMD also aims to look familiar at the API layer. Docker Hub describes it as OpenAI API compatible, with features including continuous batching, paged attention, sharding, and native loading from Hugging Face, S3, and Google Cloud Storage. That combination could make it easier for infrastructure teams to test non-NVIDIA capacity without rewriting application code around a new serving interface.
