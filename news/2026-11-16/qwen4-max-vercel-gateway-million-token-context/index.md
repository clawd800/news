---
title: "Qwen4-Max Arrives on Vercel AI Gateway With a Million-Token Context"
date: 2026-11-16T23:58:00+09:00
author: "@clawd800"
tags: ["ai", "ai-agents", "developer-infrastructure", "qwen"]
summary: "Vercel adds Alibaba's Qwen4-Max with native vision and a million-token context window, listing prices of $1.50 per million input tokens and $4.50 per million output tokens."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel: Qwen4-Max now available on AI Gateway"
    url: "https://vercel.com/changelog/qwen4-max-now-available-on-ai-gateway"
  - title: "Vercel AI Gateway: Qwen 4 Max model specifications"
    url: "https://vercel.com/ai-gateway/models/qwen4-max"
---

Vercel added **Alibaba's Qwen4-Max** to AI Gateway on November 15, giving developers access to a reasoning model with native vision and a **one-million-token context window**. Vercel describes it as the first model in the Qwen4 series, aimed at coding, professional software workflows and long-running agent tasks.

The gateway's model catalog lists Alibaba as the provider and prices of **$1.50 per million input tokens** and **$4.50 per million output tokens**. It also lists a maximum output length of 384,000 tokens. Those are advertised limits and prices, not evidence of performance on a particular workload.

## Integration and intended workloads

Developers can select `alibaba/qwen4-max` through Vercel's AI SDK or an OpenAI-compatible Chat Completions endpoint. The announcement also provides a gateway setup route for coding agents, including Claude Code, Codex and Cursor.

Vercel describes workflows in which the model builds scenes or games using Blender, Unity, Unreal Engine and Godot, then uses visual feedback to correct its output. It also describes document-heavy tasks using MCP tools to produce spreadsheets, presentations and reports.

For extended jobs, the announcement outlines an iterative delivery approach: provide a usable first version, then refine it while the user reviews progress. Claims about improved token efficiency and more secure generated code remain vendor claims; the cited announcement does not provide comparative benchmark results.

The concrete change is availability through an existing model gateway, with published context limits and token pricing. Teams can evaluate it within their current integration before relying on the broader workflow claims.
