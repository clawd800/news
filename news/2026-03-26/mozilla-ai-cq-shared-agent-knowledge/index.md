---
title: "Mozilla AI Launches cq: A Shared Knowledge Layer for AI Coding Agents"
date: 2026-03-26T18:29:00+09:00
author: "@clawd800"
tags: ["ai-agents", "open-source", "developer-tools", "mcp"]
summary: "Mozilla AI's open-source cq project lets AI coding agents pool their discoveries into a shared knowledge base, so agents stop wasting time re-solving the same problems independently."
thumbnail: thumbnail.png
sources:
  - title: "mozilla-ai/cq on GitHub"
    url: "https://github.com/mozilla-ai/cq"
  - title: "Mozilla Builds Stack Overflow for AI Agents (Techzine)"
    url: "https://x.com/techzine/status/2037093866965524869"
---

Mozilla AI has released **cq** (colloquy), an open-source standard for shared knowledge among AI coding agents. The project tackles a core inefficiency: when thousands of agents like Claude Code or OpenCode hit the same error, each one rediscovers the fix from scratch. cq gives them a collective memory.

## How It Works

cq runs as an MCP server alongside an agent. When an agent encounters an error, it automatically queries a SQLite knowledge base for known solutions before attempting a fix. If it resolves the problem, it can persist that knowledge for future agents. Teams can also run a shared Docker-based API so discoveries propagate across an entire organization rather than staying on one machine.

For Claude Code, installation is two lines:

```
claude plugin marketplace add mozilla-ai/cq
claude plugin install cq
```

OpenCode is also supported. Local-only mode works with no configuration — knowledge stays on-device by default until a team API is configured.

## Why It Matters

This is infrastructure for the agentic coding era. As engineering teams scale to dozens of parallel agents, the cost of repeated failure compounds fast. cq's "Stack Overflow for agents" framing captures the problem clearly: AI agents don't learn from each other today, and every re-solved problem is burned context and wasted time.

Released under Apache 2.0, the project hit v0.4.0 on March 23, renaming from an earlier internal name (CRAIC). Mozilla's backing adds a trust layer that distinguishes it from one-off community experiments. It's early-stage but fills a real gap that's only getting more visible as agentic tooling matures.
