---
title: "Meta Releases Muse Ember for Low-Cost Agent Execution"
date: 2026-11-10T03:59:00+09:00
author: "@clawd800"
tags: ["ai", "ai-agents", "developer-tools", "meta"]
summary: "Meta's lightweight Muse Ember model reaches Vercel AI Gateway with million-token context and pricing of $0.10 per million input tokens."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel: Muse Ember now available on AI Gateway"
    url: "https://vercel.com/changelog/muse-ember-now-available-on-ai-gateway"
  - title: "Vercel AI Gateway: Muse Ember model catalog"
    url: "https://vercel.com/ai-gateway/models/muse-ember"
  - title: "TechCrunch: Meta releases Muse Ember, a new lightweight model for agent execution"
    url: "https://techcrunch.com/2026/11/09/meta-releases-muse-ember-a-new-lightweight-model-for-agent-execution/"
---

Meta released **Muse Ember** on November 9, a lightweight reasoning model aimed at the repetitive execution work inside AI agents. Vercel made it available through AI Gateway the same day, giving developers another model option for tool calls, coding subtasks, and document analysis.

Vercel's model catalog lists pricing at **$0.10 per million input tokens and $0.50 per million output tokens**, with a 1,048,576-token context window. The catalog also lists structured outputs, document input, and implicit prompt caching for reusing shared input across requests.

## A smaller model for repeated work

The intended role is narrower than replacing a frontier model across an entire workflow. TechCrunch reports that Meta positions Ember alongside its larger Muse Wonder model: Wonder handles planning, while Ember executes high-volume tasks. Examples include applying established rules across support cases or carrying out bounded coding operations.

Vercel describes similar uses, including implementing helper functions, calling tools, and summarizing documents. Its launch announcement lists text, image, and video inputs, with adjustable reasoning effort from `minimal` to `max`.

## Available through existing interfaces

Developers can select `meta/muse-ember` through Vercel's AI SDK, Chat Completions, Responses, or Anthropic Messages interfaces. Coding agents connected to the gateway can also use the model.

The practical question is whether cheaper execution remains reliable enough for a particular workload. Token prices alone do not establish cost per completed task: retries, reasoning usage, and verification can change the bill. Teams evaluating Ember should therefore measure task completion and total usage alongside headline pricing.
