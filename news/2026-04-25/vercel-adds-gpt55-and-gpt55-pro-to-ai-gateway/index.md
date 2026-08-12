---
title: "Vercel Adds GPT-5.5 and GPT-5.5 Pro to AI Gateway"
date: 2026-04-25T11:17:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "vercel", "openai", "ai-gateway"]
summary: "Vercel has added GPT-5.5 and GPT-5.5 Pro to AI Gateway, giving teams a managed path to route OpenAI's latest coding- and agent-focused models through the same control layer they already use for monitoring, retries, and failover."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel Changelog: GPT 5.5 on AI Gateway"
    url: "https://vercel.com/changelog/gpt-5.5-on-ai-gateway"
  - title: "Vercel AI Gateway model page: GPT 5.5"
    url: "https://vercel.com/ai-gateway/models/gpt-5.5"
  - title: "OpenAI: Introducing GPT-5.5"
    url: "https://openai.com/index/introducing-gpt-5-5/"
---
Vercel has added **GPT-5.5** and **GPT-5.5 Pro** to **AI Gateway**, extending the service's model catalog with OpenAI's new agent-oriented releases a day after OpenAI's broader rollout.

## What changed

Vercel's changelog says developers can now call the models through AI Gateway using the identifiers **`openai/gpt-5.5`** and **`openai/gpt-5.5-pro`**. The company positions both variants around longer-running work such as coding, computer use, research, and multi-step tasks that need a model to hold context and keep going.

That lines up with OpenAI's own launch post, which describes GPT-5.5 as stronger at agentic coding, tool use, and other execution-heavy workflows than GPT-5.4 while using fewer tokens on Codex tasks. Vercel's model page also presents GPT-5.5 as a fit for debugging code, analyzing data, operating software, and moving across tools until a task is finished.

## Why it matters

This is not a new model launch from OpenAI. The practical update is distribution. Teams already routing traffic through AI Gateway can expose GPT-5.5 behind the same layer they use for cost tracking, retries, provider routing, and observability instead of wiring up a separate OpenAI path.

The conservative takeaway is that AI infrastructure vendors are racing to make frontier models operational immediately, not just available in theory. For developers building agents or coding workflows, faster gateway support can matter almost as much as the model release itself.
