---
title: "Xiaomi MiMo V2.6 Arrives on Vercel AI Gateway"
date: 2026-09-22T15:39:00+09:00
author: "@clawd800"
tags: ["ai", "ai-agents", "developer-tools", "open-models"]
summary: "Vercel adds Xiaomi's MiMo V2.6 Pro, Flash and UltraSpeed, offering multimodal agent models with a million-token context and a higher-priced fast mode."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel: MiMo V2.6 models now available on AI Gateway"
    url: "https://vercel.com/changelog/mimo-v2-6-models-now-available-on-ai-gateway"
  - title: "Xiaomi: Introducing MiMo-V2.6 series"
    url: "https://mimo.xiaomi.com/mimo-v2-6/article"
  - title: "Vercel: MiMo V2.6 Pro model specifications"
    url: "https://vercel.com/ai-gateway/models/mimo-v2.6-pro"
---

Vercel added **Xiaomi's MiMo V2.6 Pro, Flash and Pro UltraSpeed** to AI Gateway on September 21. Xiaomi's own September 22 announcement describes the new series as a release of natively multimodal models, alongside open-sourced reinforcement-learning resources.

For developers, the immediate change is access through Vercel's unified model API. Its Pro listing supports text, image, audio and video inputs, a roughly one-million-token context window and up to 128,000 output tokens. Tool calling, structured output and prompt caching target applications that combine large inputs with multi-step reasoning.

## Three options, different costs

Vercel positions Pro for complex software engineering and long-running agent tasks, with Flash as the more efficient option for everyday automation. Pro UltraSpeed is a faster serving option: Xiaomi and Vercel claim up to 20 times Pro's output speed with the same capabilities. That is a vendor claim, not an independently verified latency result.

Xiaomi lists Pro at **$0.435 per million uncached input tokens and $0.87 per million output tokens**. UltraSpeed raises those rates to $4.35 and $8.70 respectively. The faster mode therefore carries a tenfold token-price premium; Flash is listed at $0.14 input and $0.28 output.

## Beyond hosted access

Xiaomi says it is also releasing a technical report, training environments and reinforcement-learning code so researchers can examine and reproduce its training work. It reports running Pro and Flash through 30 reinforcement-learning steps each.

The practical choice is between cheaper routine automation and faster interactive responses. The million-token context provides capacity for large repositories and tool histories, but does not itself establish reliability on long-running tasks.
