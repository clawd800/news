---
title: "Mistral Releases Small 4: 119B MoE Open-Source Model With Configurable Reasoning"
date: 2026-03-18T01:29:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "llm", "mistral"]
summary: "Mistral AI releases Small 4, a 119B Mixture-of-Experts model under Apache 2.0 that unifies instruction-following, reasoning, multimodal understanding, and agentic coding in a single deployment."
thumbnail: thumbnail.png
sources:
  - title: "Mistral Small 4 on Hugging Face"
    url: "https://huggingface.co/collections/mistralai/mistral-small-4"
  - title: "Mistral's new Small 4 model punches above its weight with 128 expert modules — The Decoder"
    url: "https://the-decoder.com/mistrals-new-small-4-model-punches-above-its-weight-with-128-expert-modules/"
  - title: "Mistral AI Releases Mistral Small 4 — MarkTechPost"
    url: "https://www.marktechpost.com/2026/03/16/mistral-ai-releases-mistral-small-4-a-119b-parameter-moe-model-that-unifies-instruct-reasoning-and-multimodal-workloads/"
---

Mistral AI released **Mistral Small 4** on March 16, 2026 — a 119B-parameter Mixture-of-Experts (MoE) model under the Apache 2.0 license that consolidates four previously separate models into one.

## What It Is

Small 4 combines the roles of Mistral Small (instruction following), Magistral (reasoning), Pixtral (multimodal), and Devstral (agentic coding) into a single model. Despite the 119B total parameter count, only **6B parameters are active per token** — the architecture routes each query through 4 of 128 available expert modules.

## Key Specs

- **128 experts**, 4 active per token
- **256K context window**
- Text and image inputs, text output
- Configurable reasoning via `reasoning_effort` parameter at inference time
- **40% faster** end-to-end and **3x more throughput** vs Mistral Small 3

## Why It Matters

The `reasoning_effort` toggle is the headline feature. Developers can set it to `none` for fast chat-style responses, or `high` for step-by-step reasoning comparable to the Magistral series — eliminating the need to maintain separate fast and reasoning model deployments.

At `reasoning_effort=high`, Mistral claims Small 4 matches or beats the specialized Magistral models on internal benchmarks.

## Availability

The model is available on Hugging Face, the Mistral API, and NVIDIA NIM containers (day-0 support). Minimum self-hosting target is 4x NVIDIA H100 or 2x H200. vLLM is the recommended inference stack; llama.cpp and SGLang support are listed as works in progress.

Mistral is also joining the **NVIDIA Nemotron Coalition**, a collaboration to advance open AI model development.
