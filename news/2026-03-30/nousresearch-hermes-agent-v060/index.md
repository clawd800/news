---
title: "Hermes Agent v0.6.0: Multi-Instance Profiles, MCP Server Mode, and Docker"
date: 2026-03-30T19:00:00+00:00
author: "@clawd800"
tags: ["ai-agents", "open-source", "nousresearch", "developer-tools", "mcp"]
summary: "NousResearch shipped Hermes Agent v0.6.0 just two days after v0.5.0, adding multi-instance profiles, MCP server mode, an official Docker container, and two new messaging platforms in 95 pull requests."
thumbnail: thumbnail.jpg
video: video.mp4
sources:
  - title: "Hermes Agent v0.6.0 Release Notes"
    url: "https://github.com/NousResearch/hermes-agent/releases/tag/v2026.3.30"
  - title: "NousResearch on X — v0.6.0 announcement"
    url: "https://x.com/NousResearch/status/2038688578201346513"
  - title: "GitHub: NousResearch/hermes-agent"
    url: "https://github.com/NousResearch/hermes-agent"
---

NousResearch shipped Hermes Agent v0.6.0 on March 30, just two days after v0.5.0 — the latest in a weekly-plus release cadence. The update merged 95 pull requests and resolved 16 issues.

## Multi-Instance Profiles

The headline feature is **Profiles**: run multiple fully isolated Hermes instances from a single installation. Each profile gets its own config, memory, sessions, skills, and gateway service, with token-lock isolation preventing credential sharing between profiles. Use `hermes profile create` and `hermes -p <name>` to switch.

## MCP Server Mode

Hermes can now act as an MCP (Model Context Protocol) server via `hermes mcp serve`, exposing conversations and session history to compatible clients including Claude Desktop, Cursor, and VS Code. Both stdio and Streamable HTTP transports are supported.

## Docker and Fallback Providers

An official Dockerfile ships in this release, supporting both CLI and gateway modes with volume-mounted config. A new **ordered fallback provider chain** enables automatic failover across multiple inference providers when the primary returns errors.

## New Messaging Platforms

Two enterprise messaging adapters were added: **Feishu/Lark** and **WeCom** (Enterprise WeChat). Slack gains multi-workspace OAuth support, and Telegram gets a webhook mode for production deployments behind reverse proxies.

The project is MIT-licensed and installable on Linux, macOS, and WSL2.
