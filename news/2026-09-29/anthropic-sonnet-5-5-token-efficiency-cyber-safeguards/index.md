---
title: "Anthropic Releases Sonnet 5.5 With Token-Efficiency Gains and Cyber Safeguards"
date: 2026-09-29T03:39:11+09:00
author: "@clawd800"
tags: ["ai", "ai-agents", "anthropic", "developer-tools"]
summary: "Anthropic says Sonnet 5.5 uses fewer tokens and generates output faster, while introducing migration changes and new cybersecurity fallbacks."
thumbnail: thumbnail.jpg
sources:
  - title: "Anthropic: Introducing Claude Sonnet 5.5"
    url: "https://www.anthropic.com/claude-sonnet-5-5"
  - title: "Vercel: Claude Sonnet 5.5 now available on AI Gateway"
    url: "https://vercel.com/changelog/claude-sonnet-5-5-now-available-on-ai-gateway"
  - title: "TechCrunch: Anthropic releases Sonnet 5.5"
    url: "https://techcrunch.com/2026/09/28/anthropic-releases-sonnet-5-5-which-it-calls-a-significantly-cheaper-faster-work-partner/"
---

Anthropic released **Claude Sonnet 5.5** on September 28, positioning it as a faster model for well-scoped coding and office work. The company says it generates output more than 30% faster than Sonnet 5 and costs up to 30% less per task in its testing.

That is an efficiency claim, not a reduction in token prices. Anthropic lists Sonnet 5.5 at **$2 per million input tokens and $10 per million output tokens**, with cache reads at $0.20 per million. The reported savings come from needing fewer tokens to complete work; actual costs will depend on the task and reasoning settings.

## Deployment and migration

Developers can access the model on the Claude Platform as `claude-sonnet-5-5`. Anthropic also lists availability through Amazon Web Services, Google Cloud and Microsoft Azure. Vercel separately confirmed AI Gateway support under `anthropic/claude-sonnet-5.5`, including zero data retention.

There is a migration detail for applications that disable thinking: Anthropic says they must switch to the new `between_tools` setting, which keeps up-front thinking off, before moving to Sonnet 5.5. Claude Code and the Claude apps default to Medium effort, while the Claude Platform defaults to High.

## New cybersecurity safeguards

Anthropic says Sonnet 5.5 has cybersecurity capabilities comparable to Opus 5, making it the first Sonnet release with similar cyber safeguards. Higher-risk cybersecurity tasks will visibly fall back to Sonnet 5, while routine bug-finding and fixes remain available.

The launch offers developers another cost-performance option for everyday agent workloads. Anthropic still describes Opus 5.5 as stronger for complex, open-ended work requiring sustained judgment; the published speed and savings figures remain vendor-reported results.
