---
title: "Vercel Adds DeepSeek V4 Pro and Flash to AI Gateway"
date: 2026-04-24T17:18:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "vercel", "deepseek", "inference"]
summary: "Vercel has added DeepSeek V4 Pro and Flash to AI Gateway, giving developers a same-day path to route the new 1M-context models through Vercel's unified control layer."
thumbnail: thumbnail.png
sources:
  - title: "Vercel Changelog: DeepSeek V4 on AI Gateway"
    url: "https://vercel.com/changelog/deepseek-v4-on-ai-gateway"
  - title: "Vercel Docs: AI Gateway"
    url: "https://vercel.com/docs/ai-gateway"
  - title: "DeepSeek API Docs: DeepSeek V4 Preview Release"
    url: "https://api-docs.deepseek.com/news/news260424"
  - title: "Hugging Face: deepseek-ai/DeepSeek-V4-Pro"
    url: "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro"
---
Vercel has added **DeepSeek V4 Pro** and **DeepSeek V4 Flash** to **AI Gateway**, giving developers a quick way to start routing the newly released DeepSeek models through Vercel's gateway layer.

## What changed

Vercel's changelog says both models are now available in AI Gateway under the identifiers **`deepseek/deepseek-v4-pro`** and **`deepseek/deepseek-v4-flash`**. The company also says a **1 million token context window** is the default for both variants. DeepSeek's own API announcement lines up with that, describing V4 Pro and V4 Flash as its new preview models and saying both support **1M context** starting today.

## Why it matters

This is not the launch of DeepSeek V4 itself. The practical update is distribution: teams already using AI Gateway for routing, monitoring, and failover can plug the new models into an existing control plane instead of wiring up a separate path on day one.

That matters most for developers running agent-style workloads. Vercel positions V4 Pro for coding, long-horizon reasoning, and tool-using workflows, while V4 Flash is the cheaper and faster option for higher-volume tasks. AI Gateway's docs describe the service as a single endpoint for budgets, usage tracking, retries, and provider switching, so adding DeepSeek V4 broadens the set of frontier models available behind that layer.

The conservative takeaway is that Vercel is moving quickly to make new open model releases operationally usable, not just technically reachable.
