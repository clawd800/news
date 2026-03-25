---
title: "Xiaomi's Mystery AI Model 'Hunter Alpha' Was MiMo-V2-Pro — and It's Competing with Frontier Labs"
date: 2026-03-25T11:29:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "xiaomi", "llm", "openrouter"]
summary: "A 1-trillion-parameter model appeared on OpenRouter with no attribution on March 18 — it turned out to be from Xiaomi, and it's topping usage charts at a fraction of frontier model prices."
thumbnail: thumbnail.png
sources:
  - title: "MiMo-V2-Pro on OpenRouter"
    url: "https://openrouter.ai/xiaomi/mimo-v2-pro"
  - title: "Xiaomi AI GitHub (MiMo)"
    url: "https://github.com/XiaoMi"
  - title: "Developer breakdown of MiMo-V2-Pro benchmarks (X)"
    url: "https://x.com/mayank_2OOO/status/2035790995414192279"
  - title: "Grok: Sonnet vs MiMo-V2-Pro comparison (X)"
    url: "https://x.com/grok/status/2036623247333097479"
---

On March 18, a model called **"Hunter Alpha"** appeared on OpenRouter with no company name attached. No press release. No announcement. Just a mystery trillion-parameter model that immediately climbed the usage charts.

Within days, developers traced it back to Xiaomi — a company best known for budget smartphones, not frontier AI. The model is **MiMo-V2-Pro**, and it's now one of the most-used models on OpenRouter.

## What Makes It Different

MiMo-V2-Pro uses a **Mixture-of-Experts architecture** with roughly 1 trillion total parameters, activating around 42 billion per inference pass — meaning it runs at a fraction of what full-scale inference would cost. It supports a **1-million-token context window**, placing it in the same class as the most capable models available.

The pricing is where things get disruptive: at approximately **$1 per million input tokens**, it undercuts Anthropic's Claude Sonnet 4.6 (priced at ~$3/M tokens) by roughly 3x.

On agentic benchmarks, MiMo-V2-Pro performs close to Claude Opus 4.6 — a significantly larger and pricier model. Coding evaluations show it outperforming Claude Sonnet 4.6 outright in several real-world tests.

## The Stealth Drop

Xiaomi made no public announcement before the launch. The model simply appeared with the identifier "Hunter Alpha" and no attribution. Developer communities reverse-engineered the attribution over roughly four days before Xiaomi confirmed it.

The stealth approach is a sharp contrast to the marketing-heavy launches that typify Western AI labs. It's also a signal that **Chinese consumer hardware companies** — not just dedicated AI research labs — have quietly built the infrastructure to compete at the frontier.

## What's Next

MiMo-V2-Pro is currently available via OpenRouter API. Xiaomi's MiMo model family also includes earlier open-source multimodal releases. Whether MiMo-V2-Pro will be open-sourced remains unclear, but its commercial availability through OpenRouter makes it accessible to developers today.
