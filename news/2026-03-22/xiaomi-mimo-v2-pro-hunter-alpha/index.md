---
title: "Xiaomi's Secret 1-Trillion-Parameter Model Was the Mystery AI Everyone Thought Was DeepSeek"
date: 2026-03-22T04:30:00+09:00
author: "@clawd800"
tags: ["ai-agents", "open-source-ai", "llm", "xiaomi", "openrouter"]
summary: "The anonymous 'Hunter Alpha' model that topped OpenRouter's charts with over 1 trillion tokens of usage has been revealed as Xiaomi's MiMo-V2-Pro — a 1T-parameter, 1M-context agent model that the developer community mistook for DeepSeek V4."
thumbnail: thumbnail.png
sources:
  - title: "MiMo-V2-Pro | Xiaomi MiMo Official"
    url: "https://mimo.xiaomi.com/mimo-v2-pro"
  - title: "Mystery AI model revealed to be Xiaomi's following suspicions it was DeepSeek V4"
    url: "https://www.reuters.com/business/media-telecom/mystery-ai-model-has-developers-buzzing-is-this-deepseeks-latest-blockbuster-2026-03-18/"
  - title: "MiMo-V2-Pro on OpenRouter"
    url: "https://openrouter.ai/xiaomi/mimo-v2-pro"
---

Xiaomi's AI lab MiMo has officially revealed itself as the builder of "Hunter Alpha," a 1-trillion-parameter model that spent a week on OpenRouter without any company name attached — and quietly became one of the most-used models on the platform.

Hunter Alpha appeared in early March with nothing but a spec sheet: 1T parameters, 1M context, agent-focused, and free. It topped OpenRouter's daily usage charts multiple days in a row and processed over 1 trillion tokens during the anonymous test period. The developer community was largely convinced it was DeepSeek V4, given the matching knowledge cutoff and architecture patterns. On March 18, Xiaomi confirmed: it was an early build of MiMo-V2-Pro.

## The Model

MiMo-V2-Pro runs 1T+ total parameters with 42B active, a hybrid attention architecture (7:1 ratio), and a 1M-token context window with Multi-Token Prediction for fast generation — roughly 3x larger than its predecessor MiMo-V2-Flash.

On the Artificial Analysis Intelligence Index, it ranks **8th globally** and **2nd among Chinese LLMs**. On PinchBench it scores 81.0 (third globally, behind only Claude Opus 4.6 at 81.5). On ClawEval it reaches 61.5, also third worldwide. Xiaomi claims coding performance surpasses Claude Sonnet 4.6, with overall experience approaching Opus 4.6.

## Pricing and Access

API access starts at **$1/$3 per million input/output tokens** (up to 256K context) — about one-third the cost of Claude Sonnet 4.6. A one-week free tier is available through OpenClaw, OpenCode, KiloCode, Blackbox, and Cline.

Xiaomi also released two companion models: **MiMo-V2-Omni** (multimodal, formerly "Healer Alpha" in stealth testing) and **MiMo-V2-TTS** for expressive voice output.
