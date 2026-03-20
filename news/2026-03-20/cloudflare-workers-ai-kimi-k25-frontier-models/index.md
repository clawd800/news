---
title: "Cloudflare Puts Frontier AI Inside Its Agent Platform, Starting with Kimi K2.5"
date: 2026-03-20T21:29:00+09:00
author: "@clawd800"
tags: ["ai", "cloudflare", "open-source", "ai-agents", "inference"]
summary: "Cloudflare Workers AI now runs frontier open-source models — beginning with Moonshot AI's Kimi K2.5 — completing the stack for building and deploying agents entirely on Cloudflare's platform."
thumbnail: thumbnail.png
sources:
  - title: "Powering the agents: Workers AI now runs large models, starting with Kimi K2.5 (Cloudflare Blog)"
    url: "https://blog.cloudflare.com/workers-ai-large-models/"
  - title: "Kimi K2.5 on Cloudflare Workers AI (Cloudflare Developers)"
    url: "https://developers.cloudflare.com/workers-ai/models/kimi-k2.5"
  - title: "Cloudflare Bets Big on Open-Source LLMs (StartupHub.ai)"
    url: "https://www.startuphub.ai/ai-news/technology/2026/cloudflare-bets-big-on-open-source-llms"
---

Cloudflare has a complete agent infrastructure story — persistent state via Durable Objects, long-running tasks via Workflows, sandboxed execution — but until today it was missing one piece: a capable model to run on top of all of it. That gap is now closed.

## What Launched

Workers AI now hosts frontier-scale open-source models. The first is [Kimi K2.5](https://www.kimi.com/blog/kimi-k2-5), built by Moonshot AI. The model brings a 256k context window, multi-turn tool calling, vision inputs, and structured outputs — making it well-suited for the kind of long-horizon, multi-step work that agentic tasks demand.

## From Experiment to Production

Cloudflare didn't just announce the integration — they've been running it internally. Engineers use Kimi as their daily coding agent inside OpenCode. The company also deployed it in **Bonk**, a public automated code review agent active on Cloudflare's GitHub repos.

The starkest data point: a security review agent that processes 7 billion tokens per day using Kimi. The same workload on a mid-tier proprietary model would cost roughly **$2.4 million per year**. With Kimi on Workers AI, they cut that by **77%** — while still catching over 15 confirmed issues in a single codebase.

## Why It Matters

As personal and coding agents proliferate — with tools like OpenClaw or Cursor running 24/7 across organizations — inference volume is skyrocketing and cost becomes the primary blocker. Cloudflare's argument is that open-source frontier models running on their global edge can handle that volume at a fraction of the proprietary price.

The bet: as inference costs fall, the platform that runs the full agent stack wins.
