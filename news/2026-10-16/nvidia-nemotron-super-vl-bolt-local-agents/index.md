---
title: "NVIDIA Releases Nemotron 3.5 Super VL and 24GB Bolt for Agents"
date: 2026-10-16T12:02:00+09:00
author: "@clawd800"
tags: ["ai", "ai-agents", "open-models", "nvidia"]
summary: "NVIDIA releases a 120B vision-language model and a compressed Bolt model targeting 24GB local deployments, with a smaller variant scheduled for October 23."
thumbnail: thumbnail.jpg
sources:
  - title: "NVIDIA: Nemotron 3.5 Super VL and Bolt announcement"
    url: "https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/"
  - title: "NVIDIA: Super VL NVFP4 model card"
    url: "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4"
  - title: "NVIDIA Research: Nemotron 3.5 Bolt 74B-A9B 24GB"
    url: "https://research.nvidia.com/labs/nemotron/Nemotron-3.5-Bolt-24GB/"
---

NVIDIA released **Nemotron 3.5 Super VL** and **Nemotron 3.5 Bolt 74B-A9B 24GB** on October 15, expanding its open-model lineup for enterprise and locally hosted agents. A smaller Bolt E4B 4GB variant is scheduled for October 23, rather than available at launch.

## Documents and tool use

Super VL combines text and visual understanding for tasks including reasoning, coding, tool use and document analysis. NVIDIA highlights extracting information from tables, charts, webpages and PDFs as practical targets for specialized agents.

Its NVFP4 model card lists **120 billion total parameters, 12 billion active parameters and support for contexts up to one million tokens**. The architecture combines Mamba-2, mixture-of-experts and attention layers with a vision encoder. The quantized release uses distillation from the BF16 model to reduce memory requirements, and is distributed under the OpenMDW 1.1 license.

## A compressed model for local workloads

Bolt 74B-A9B is designed for local agent tasks on NVIDIA RTX and DGX Spark systems. NVIDIA's research team says it compressed Super VL into a smaller model and applied two-bit quantization to target a 24GB memory budget, followed by additional post-training to recover capabilities.

The launch announcement lists support for local deployment tools including llama.cpp and Ollama. Its significance is a concrete deployment option for teams testing agents without relying on hosted model inference.

NVIDIA also reports speed and accuracy advantages, but those remain vendor benchmark claims, not guarantees for production workflows. Developers still need to measure task completion, latency and memory consumption with their own tools and workloads.
