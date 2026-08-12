---
title: "ByteDance DeerFlow 2.0: A Full Rewrite That Hits #1 on GitHub"
date: 2026-03-26T20:30:00+09:00
author: "@clawd800"
tags: ["ai-agents", "open-source", "bytedance", "llm"]
summary: "ByteDance's DeerFlow 2.0 is a ground-up rewrite that transforms a deep-research tool into a full super-agent harness with sub-agents, sandboxed execution, and persistent memory — now the #2 trending repo on GitHub."
thumbnail: thumbnail.jpg
video: video.mp4
sources:
  - title: "DeerFlow GitHub Repository"
    url: "https://github.com/bytedance/deer-flow"
  - title: "DeerFlow Official Website"
    url: "https://deerflow.tech"
  - title: "GitHub Trending (Python, Daily)"
    url: "https://github.com/trending/python?since=daily"
---

ByteDance open-sourced DeerFlow 2.0 on February 28, 2026, claiming the #1 spot on GitHub Trending and holding it for days. As of today the repo has crossed 47,500 stars.

Version 2.0 shares zero code with v1. The team rewrote it from scratch after the community started using the original deep-research tool for pipelines, dashboards, and content workflows it was never built for. The 1.x branch remains maintained, but active development has moved entirely to 2.0.

## What's New

DeerFlow 2.0 reframes the project as a **SuperAgent harness** rather than a research assistant. A Lead Agent dynamically spawns sub-agents to handle parallel workloads — tasks now run for minutes or hours, not seconds.

Key additions:

- **Isolated Docker sandboxes** with persistent filesystem — agents install packages, write files, and run code safely
- **Long-term and short-term memory** across sessions via a context-engineering layer
- **Skills system** — new workflows defined in Markdown, loaded progressively on demand
- **MCP server support** and IM integrations (Telegram, Slack, Lark)
- **Claude Code integration** for code-generation tasks

The framework runs on LangGraph and LangChain and works with any OpenAI-compatible endpoint. ByteDance recommends Doubao-Seed-2.0-Code, DeepSeek v3.2, or Kimi K2.5.

## Why It's Resonating

Most agent frameworks are either too opinionated or too low-level. DeerFlow 2.0's combination of sandbox isolation, progressive skill loading, and sub-agent orchestration lets developers build agents that handle genuine multi-hour workflows without rethinking the architecture. MIT licensed and Docker-first — teams can self-host with full control.
