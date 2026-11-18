---
title: "Vercel Adds Gemini 4 Neon to AI Gateway"
date: 2026-11-19T08:00:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "ai-agents", "gemini"]
summary: "Vercel added Gemini 4 Neon to AI Gateway with a one-million-token context window, multimodal inputs and support for coding-agent integrations."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel: Gemini 4 Neon now available on AI Gateway"
    url: "https://vercel.com/changelog/gemini-4-neon-now-available-on-ai-gateway"
  - title: "Vercel AI Gateway: Gemini 4 Neon model specifications"
    url: "https://vercel.com/ai-gateway/models/google/gemini-4-neon"
---

Vercel added **Gemini 4 Neon** to AI Gateway on November 18, making Google's model available through its unified model endpoint. The release targets coding, agent workflows and multi-step tasks, with a **one-million-token context window** and support for text, images, video and documents.

The integration exposes the model as `google/gemini-4-neon`. Vercel's announcement lists tool calling, structured outputs, grounding with Google Search and Google Maps, and four reasoning levels: low, medium, high and xhigh. Those controls give developers options for connecting the model to external tools and choosing how much reasoning a task receives.

## Access and pricing

Developers can call Neon through the AI SDK or an OpenAI-compatible Chat Completions endpoint. Vercel also provides setup instructions for coding agents, including fx and Claude Code, and points users of other supported agents to its integration guide.

The gateway's model catalog lists Google and Vertex as providers, with pricing of **$3 per million input tokens and $15 per million output tokens**. These are the catalog's listed rates, rather than an estimate of the total cost of a particular agent workflow.

## What the release establishes

Vercel describes Neon as faster than larger Gemini 4 models while approaching their output quality. Its announcement does not provide comparative benchmark results, so that positioning remains a vendor claim rather than an independently demonstrated performance advantage.

The concrete change is availability: developers using AI Gateway can now evaluate Neon through the same gateway integration, including multimodal requests and tool-driven applications, without treating the announcement as proof of better results on their own workloads.
