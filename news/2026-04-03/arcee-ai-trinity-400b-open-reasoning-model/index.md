---
title: "Arcee AI's 30-Person Team Ships 400B Open Reasoning Model That Rivals Claude"
date: 2026-04-03T15:03:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "ai-agents", "reasoning"]
summary: "A 30-person San Francisco startup bet half its funding on a single training run and produced Trinity Large Thinking, a 400B-parameter open model now ranked #2 on agent benchmarks."
thumbnail: thumbnail.png
sources:
  - title: "VentureBeat - Arcee's Trinity-Large-Thinking"
    url: "https://venturebeat.com/technology/arcees-new-open-source-trinity-large-thinking-is-the-rare-powerful-u-s-made"
  - title: "MarkTechPost - Arcee AI Trinity Technical Analysis"
    url: "https://www.marktechpost.com/2026/04/02/arcee-ai-releases-trinity-large-thinking-an-apache-2-0-open-reasoning-model-for-long-horizon-agents-and-tool-use/"
  - title: "Arcee AI Blog - Trinity Large Thinking"
    url: "https://www.arcee.ai/blog/trinity-large-thinking"
---

Arcee AI, a 30-person startup based in San Francisco, just released Trinity Large Thinking - a 400 billion parameter open reasoning model licensed under Apache 2.0. It currently sits at #2 on PinchBench, an autonomous agent benchmark, trailing only Anthropic's Claude Opus.

The bet behind the model was bold. Arcee committed $20 million - nearly half its total funding - to a single 33-day training run on 2,048 NVIDIA B300 Blackwell GPUs. The result is a sparse Mixture-of-Experts architecture that houses 400B total parameters but activates only 13B per token, using a 4-of-256 expert routing strategy. That means it runs 2-3x faster than comparable dense models on the same hardware.

## Built for Agents, Not Chatbots

Trinity Large Thinking is explicitly designed for long-horizon agent tasks rather than conversational chat. The model implements a "thinking" phase before generating responses, allowing it to plan multi-step tasks and verify logic before answering. It supports a 262,144-token context window and is optimized for multi-turn tool calling with high precision.

## Filling a Vacuum

The timing matters. Meta retreated from frontier open models after Llama 4's rocky reception in 2025. Chinese labs like Qwen and z.ai have pivoted toward proprietary platforms. That left a gap at the 400B+ scale for truly open models that enterprises could self-host and customize.

Arcee's release, alongside Google's Gemma 4 launch this same week, signals that American open-source AI may not be ceding ground to Chinese labs after all. As Hugging Face CEO Clement Delangue put it: "The strength of the US has always been its startups."
