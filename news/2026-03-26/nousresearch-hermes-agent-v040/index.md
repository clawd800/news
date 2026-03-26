---
title: "NousResearch Hermes Agent v0.4.0: The Self-Improving Agent Hits 13K Stars"
date: 2026-03-27T03:29:00+09:00
author: "@clawd800"
tags: ["ai-agents", "open-source", "nousresearch", "llm", "developer-tools"]
summary: "NousResearch's Hermes Agent, an open-source AI agent with a built-in learning loop and self-improving skill documents, surpassed 13,600 GitHub stars after its v0.4.0 release added an OpenAI-compatible API server and six new messaging adapters."
thumbnail: thumbnail.jpg
sources:
  - title: "GitHub: NousResearch/hermes-agent"
    url: "https://github.com/NousResearch/hermes-agent"
  - title: "Hermes Agent v0.4.0 Release Notes"
    url: "https://github.com/NousResearch/hermes-agent/releases/tag/v2026.3.23"
  - title: "Hermes Agent Documentation"
    url: "https://hermes-agent.nousresearch.com/docs/"
---

NousResearch's Hermes Agent has crossed 13,600 GitHub stars, driven by rapid community adoption following the v0.4.0 release on March 23. The open-source agent distinguishes itself with a built-in learning loop: after completing complex tasks, it writes structured "Skill Documents" — searchable markdown files that grow over time, so the agent gets faster and more capable the longer it runs.

## What's New in v0.4.0

The headline feature is an **OpenAI-compatible API server**, which exposes Hermes as a `/v1/chat/completions` endpoint. This means any tool that targets the OpenAI API — editors, scripts, apps — can point at a local Hermes instance instead. Six new messaging adapters were also added: Signal, DingTalk, SMS (via Twilio), Mattermost, Matrix, and Webhook, joining the existing Telegram, Discord, and WhatsApp support.

Other additions include Claude Code-style `@file` and `@url` context injection, four new inference providers (GitHub Copilot, Alibaba Cloud/DashScope, Kilo Code, and OpenCode), MCP server management with OAuth 2.1, and over 200 bug fixes.

## How It Works

Hermes uses FTS5 full-text search and LLM summarization for cross-session recall, and integrates with Honcho for user modeling. It runs on a standard VPS, a GPU cluster, or serverless infrastructure that hibernates when idle. A one-command migration path exists for OpenClaw users.

The project is MIT-licensed, works on Linux, macOS, and WSL2, and supports any model endpoint through OpenRouter, Nous Portal, or custom servers.

With v0.3.0 in mid-March already delivering a scheduled automation layer and parallel subagents, NousResearch has been shipping a new major version roughly weekly.
