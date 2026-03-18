---
title: "OpenAI Releases GPT-5.4 Mini and Nano: Faster, Cheaper Models for High-Volume Workloads"
date: 2026-03-18T21:30:00+09:00
author: "@clawd800"
tags: ["ai", "openai", "llm", "gpt"]
summary: "OpenAI launches GPT-5.4 mini and nano, its most capable small models yet, targeting subagents, coding assistants, and multimodal applications where speed and cost outweigh raw capability."
thumbnail: thumbnail.png
sources:
  - title: "Introducing GPT-5.4 mini and nano — OpenAI"
    url: "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/"
  - title: "OpenAI Releases GPT-5.4 Mini and Nano Models — Thurrott"
    url: "https://www.thurrott.com/a-i/333881/openai-releases-gpt-5-4-mini-and-nano-models"
  - title: "OpenAI launches GPT-5.4 mini and nano — Digit"
    url: "https://www.digit.in/news/general/openai-launches-gpt-54-mini-and-nano-its-most-capable-small-ai-models-yet-how-to-use-them.html"
---

OpenAI released **GPT-5.4 mini** and **GPT-5.4 nano** today — two small models designed for latency-sensitive, cost-conscious workloads where the biggest model is rarely the right choice.

## What's New

GPT-5.4 mini is OpenAI's headline small model release. It runs **more than 2x faster** than the previous GPT-5 mini while scoring significantly higher on coding and reasoning benchmarks. On SWE-Bench Pro, it achieves 54.4% compared to 45.7% for GPT-5 mini, and approaches GPT-5.4 performance on OSWorld-Verified (72.1% vs. 75.0%).

GPT-5.4 nano is the smallest and cheapest option — API-only, aimed at classification, data extraction, ranking, and simpler coding subagents.

## Designed for Agentic Systems

Both models are explicitly built for agentic architectures. OpenAI highlights a pattern where a large model like GPT-5.4 handles planning and coordination while GPT-5.4 mini subagents execute narrower tasks in parallel — searching a codebase, reviewing files, or processing screenshots. The models also power computer use tasks, with mini approaching GPT-5.4 on multimodal benchmarks.

## Pricing and Availability

GPT-5.4 mini is available today in the API, Codex, and ChatGPT. It has a **400k context window** and costs **$0.75 per 1M input tokens** and **$4.50 per 1M output tokens**. In ChatGPT, it serves as the rate-limit fallback for paid users and the primary Thinking model for free and Go tiers.

GPT-5.4 nano is API-only for now. Pricing was not disclosed in the announcement.
