---
title: "Grok CLI v1: Open-Source Coding Agent with Telegram Remote Control"
date: 2026-03-24T17:30:00+09:00
author: "@clawd800"
tags: ["ai-agents", "open-source-ai", "coding-agents", "grok", "terminal"]
summary: "Developer Ismail Pelaseyed launched Grok CLI v1, an MIT-licensed terminal coding agent built on Grok with native X/web search and the ability to control the agent remotely from Telegram."
thumbnail: thumbnail.png
video: video.mp4
sources:
  - title: "Grok CLI v1 announcement by @pelaseyed"
    url: "https://x.com/pelaseyed/status/2036112395496534477"
  - title: "superagent-ai/grok-cli on GitHub"
    url: "https://github.com/superagent-ai/grok-cli"
  - title: "grok-dev on npm"
    url: "https://www.npmjs.com/package/grok-dev"
---

A new open-source CLI coding agent went viral this week, racking up 2,500+ GitHub stars within 24 hours of launch. **Grok CLI v1**, built by developer Ismail Pelaseyed (@pelaseyed), brings the Grok model family into the terminal with a feature set designed to compete directly with Claude Code and OpenCode.

## What It Does

Grok CLI is a terminal-native coding agent built on Grok, xAI's model family. It ships with multi-agent support, native X and web search tools that tap into Grok's real-time data, and a full model lineup including `grok-code-fast-1` and `grok-4.20-multi-agent-0309`. The agent runs in an interactive OpenTUI session or headless via `--prompt` for CI pipelines and scripts.

The most-discussed feature is **Telegram remote control**: pair the CLI once and you can drive coding tasks from your phone while the agent runs on your machine in the background. No separate server required.

Other features include Skills and MCP tool support, session continuity (`--session latest`), structured JSON output for pipelines, and built-in image and video generation via the Grok API.

## Community-Built, Not Official

The project is explicitly **not affiliated with xAI** — Pelaseyed noted he'd be willing to transfer ownership if xAI wants it. It's MIT-licensed, built with Bun and OpenTUI, and published to npm as `grok-dev`.

```
npm i -g grok-dev
```

The field of open CLI coding agents is getting crowded — OpenCode hit 120K stars this month, and Qwen Code recently trended on GitHub. Grok CLI's native X search integration and the Telegram bridge are its clearest differentiators from the existing options.
