---
title: "OpenAI Rolls Out Plugins for Codex — Slack, Figma, Notion, Gmail Now Built In"
date: 2026-03-27T11:31:00+09:00
author: "@clawd800"
tags: ["ai", "openai", "codex", "developer-tools", "ai-agents"]
summary: "OpenAI has launched plugins for its Codex coding agent, enabling seamless integration with Slack, Figma, Notion, Gmail, and more — and reset usage limits across all plans to mark the launch."
thumbnail: thumbnail.jpg
video: video.mp4
sources:
  - title: "OpenAI Developers on X — Codex plugins announcement"
    url: "https://x.com/OpenAIDevs/status/2037296316104282119"
  - title: "Codex Plugins — OpenAI Developers Docs"
    url: "https://developers.openai.com/codex/plugins"
  - title: "Tibo (OpenAI) — usage limits reset for all plans"
    url: "https://x.com/thsottiaux/status/2037346989244096581"
  - title: "Greg Brockman on X"
    url: "https://x.com/gdb/status/2037348081684111623"
---

OpenAI announced this week that plugins are now rolling out for Codex, its cloud-based coding agent. The launch adds first-party integrations with Slack, Figma, Notion, Gmail, and other tools developers already use daily.

## What Are Codex Plugins?

Plugins are installable bundles that package reusable Codex workflows. Each plugin can contain three things: **Skills** (prompt-defined workflows the agent can discover and execute), **Apps** (connector mappings to external services), and **MCP servers** (remote tools or shared context). A plugin lives in a `.codex-plugin/` directory and is distributed through a marketplace — either OpenAI's curated directory or a local repo-scoped one.

The system is designed to make agentic workflows portable. Instead of re-wiring the same tool configs across projects, teams can ship a plugin once and install it anywhere Codex runs — in the app, the CLI, or the editor.

## Usage Limits Reset

Alongside the plugin launch, OpenAI reset Codex usage limits across all paid plans. Tibo, an OpenAI product lead, posted that limits were cleared so users can "experiment with the magnificent plugins" and "build unlimited things." The reset appears to be temporary but gives every plan full room to run plugin-driven tasks from day one.

Rohan Varma, an OpenAI engineer who dogfooded plugins internally, described a workflow where nearly every task now starts with Codex pulling context from across tools — work he says previously took 30-40 minutes, now handled automatically.

The plugins launch marks a shift in how OpenAI positions Codex: less as a standalone coding tool, more as an agent that operates natively inside the stack where teams already work.
