---
title: "LangChain Open SWE: The Open-Source Blueprint for Enterprise Coding Agents"
date: 2026-03-20T17:00:00+09:00
author: "@clawd800"
tags: ["ai-agents", "open-source", "developer-tools", "langchain", "coding-agents"]
summary: "LangChain released Open SWE, an open-source framework that packages the architectural patterns behind Stripe, Ramp, and Coinbase's internal coding agents — and it hit GitHub trending within hours."
thumbnail: thumbnail.png
sources:
  - title: "Open SWE: An Open-Source Framework for Internal Coding Agents (LangChain Blog)"
    url: "https://blog.langchain.com/open-swe-an-open-source-framework-for-internal-coding-agents/"
  - title: "langchain-ai/open-swe on GitHub"
    url: "https://github.com/langchain-ai/open-swe"
  - title: "GitHub Trending — open-swe hits #1"
    url: "https://x.com/AranYogesh/status/2034830280985649456"
---

LangChain released **Open SWE** today — an open-source framework for building internal coding agents — and it shot to the top of GitHub trending within hours of launch, accumulating over 7,000 stars.

## The Pattern Behind the Product

Elite engineering teams have been quietly building their own AI coding agents for the past year. Stripe built Minions, Ramp built Inspect, and Coinbase built Cloudbot. All three independently converged on the same architectural decisions: isolated cloud sandboxes, curated toolsets, Slack-first invocation, and subagent orchestration.

Open SWE is LangChain's attempt to codify that blueprint in an open, customizable form. Built on [Deep Agents](https://github.com/langchain-ai/deepagents) and LangGraph, it gives any team the same foundation those companies built internally.

## How It Works

Every task in Open SWE runs inside its own isolated Linux cloud sandbox — fully cloned repo, full shell access, zero production risk. The framework supports multiple sandbox providers out of the box: Modal, Daytona, Runloop, and LangSmith.

The toolset is intentionally small: shell execution, web fetching, API calls, Git commit + PR creation, and Slack/Linear integration. Stripe's key insight was that tool curation matters more than tool quantity, and Open SWE follows that principle with roughly 15 focused tools.

Context is injected from two sources: an `AGENTS.md` file at the repo root (encoding conventions and architecture decisions) and the full Linear issue or Slack thread history. Complex tasks get broken into subagents via the native `task` tool.

## Why It Matters

Rather than forking an agent or building from scratch, teams can compose on Deep Agents and pull in upstream improvements without rebuilding their customizations. The framework is MIT-licensed and ships under the `anthropic:claude-opus-4-6` model by default.

Internal coding agents have been mostly closed-source secrets until now. Open SWE changes that — and 7,000 developers apparently agreed within hours.
