---
title: "Mistral Releases Small 4: One Open-Source Model for Reasoning, Vision, and Code"
date: 2026-03-29T06:45:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "llm", "mistral", "machine-learning"]
summary: "Mistral AI's Small 4 is a 119B-parameter MoE model unifying reasoning, multimodal, and agentic coding under a single Apache 2.0 license."
thumbnail: thumbnail.jpg
sources:
  - title: "Mistral AI: Introducing Mistral Small 4"
    url: "https://mistral.ai/news/mistral-small-4"
  - title: "X: Nacio-Felix on Mistral March releases"
    url: "https://x.com/NacioFelix/status/2037968273958916266"
---

Mistral AI has released **Mistral Small 4**, a hybrid model that merges the capabilities of three previously separate flagship models into one open-source package.

## What's New

Small 4 combines reasoning (Magistral), multimodal vision (Pixtral), and agentic coding (Devstral) into a single 119B-parameter Mixture-of-Experts architecture. Only 6B parameters are active per token, keeping inference costs manageable. The context window is 256k tokens.

The model is available under the **Apache 2.0 license** — meaning commercial use, fine-tuning, and redistribution are all permitted. It runs on frameworks including vLLM, llama.cpp, SGLang, and Hugging Face Transformers.

## Performance

Mistral claims a **40% reduction in end-to-end completion time** in latency-optimized configurations, and **3x more requests per second** versus Small 3. On coding and reasoning benchmarks, Small 4 with reasoning enabled reportedly matches or exceeds GPT-OSS 120B while generating 20–40% fewer output tokens.

## Unified Reasoning

A new `reasoning_effort` parameter lets users toggle between fast instruct-style responses and deep chain-of-thought reasoning in the same model — previously requiring separate deployments.

Mistral also announced **Voxtral TTS**, an open-source multilingual text-to-speech model supporting 9 languages, and **Forge**, an enterprise platform for training custom models on proprietary data.

The simultaneous launch of GPT-5.4, Gemini 3.1, and Mistral Small 4 in the same month marks an unusually dense period for frontier model releases.
