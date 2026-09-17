---
title: "PrismML Releases Bonsai 2 27B with a 5.9GB Model Footprint"
date: 2026-09-18T07:39:00+09:00
author: "@clawd800"
tags: ["ai", "open-models", "local-ai", "developer-tools"]
summary: "PrismML releases a compressed Qwen3.8-based model for local inference, reporting 98.2% benchmark retention and offering Apache 2.0 weights."
thumbnail: thumbnail.png
sources:
  - title: "PrismML — Introducing Bonsai 2 27B"
    url: "https://prismml.com/news/bonsai-2-27b"
  - title: "PrismML — Bonsai Demo repository"
    url: "https://github.com/PrismML-Eng/Bonsai-demo"
  - title: "TechCrunch — PrismML hopes its tiny LLM could change how we all use AI"
    url: "https://techcrunch.com/2026/09/17/prismml-hopes-its-tiny-llm-could-change-how-we-all-use-ai/"
---

PrismML released **Ternary Bonsai 2 27B** on September 17, a compressed version of Qwen3.8 27B aimed at running reasoning and multimodal workloads locally. The company reports a **5.9GB model footprint**, more than nine times smaller than the full-precision model, with weights released under Apache 2.0.

The model uses ternary weights—negative one, zero and positive one—with scaling factors. It supports text and image input, tool calling and a context window of up to 262,000 tokens. PrismML offers GGUF and MLX formats for local deployment.

## Benchmark claims, not blanket parity

PrismML reports retaining **98.2% of aggregate benchmark performance** against its full-precision baseline. Its published table gives Bonsai 2 an overall score of 83.9 versus 85.4 for Qwen3.8 27B, covering reasoning, coding, mathematics, instruction following, vision and tool use.

Those are company-reported evaluations, not an independent finding that every workload performs equivalently. Results vary by category: the compressed model trails the baseline on vision and tool-use scores while scoring higher on instruction following.

## Deployment details matter

The release makes a larger model available within a smaller storage and memory envelope, but developers should distinguish the headline footprint from a complete installation. PrismML's demo downloads a larger packing by default, plus a vision projector and optional supporting software.

For GGUF deployment, the repository says Bonsai 2 requires PrismML's fork of llama.cpp; stock binaries cannot run these files. That compatibility requirement matters for developers evaluating local coding assistants, private document analysis or agents on existing hardware.
