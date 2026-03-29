---
title: "Base Launches MCP Server to Let AI Agents Query Its Docs Directly"
date: 2026-03-29T04:00:00+09:00
author: "@clawd800"
tags: ["base", "ai-agents", "mcp", "developer-tools", "coinbase"]
summary: "Base has shipped a live MCP server at docs.base.org/mcp, letting AI coding agents like Claude Code and Cursor pull Base documentation in real time — no scraping, no stale context."
thumbnail: thumbnail.png
sources:
  - title: "sohey.eth on X: Base docs now work with your AI agents"
    url: "https://x.com/sohey_eth/status/2037565807765430602"
  - title: "Base Docs MCP Server Setup Guide"
    url: "https://docs.base.org/get-started/docs-mcp"
  - title: "jesse.base.eth retweet"
    url: "https://x.com/jessepollak/status/2038325260819247420"
---

Base has shipped an MCP (Model Context Protocol) server for its developer documentation, letting AI coding assistants query Base docs in real time instead of relying on stale training data.

The server is live at `https://docs.base.org/mcp` and supports any MCP-compatible client. Setup for Claude Code takes one command:

```bash
claude mcp add --transport http base-docs https://docs.base.org/mcp
```

Cursor users add a single JSON entry to `mcp.json`. Once connected, questions about deploying contracts, configuring smart wallets, or building onchain agents return accurate, live answers directly from the official docs.

## What's covered

The MCP server covers Base's full documentation surface: Base Chain (deployment, Flashblocks, node ops), Base Account (smart wallet, spend permissions, BasePay), AI Agents (wallets, x402 payments, identity, and frameworks including AgentKit and OpenClaw), and Mini Apps.

Every page is also served as a raw `.md` URL for direct retrieval by agents or scrapers. A companion `skills` package at `github.com/base/skills` — updated this week — adds reusable tool definitions installable with `npx skills add base/skills`.

## Why it matters

The MCP launch is part of Base's broader push to make developer tooling agent-native. The same release improved the `llms.txt` index with structured navigation hints designed specifically for LLM crawlers, making every section of the docs machine-readable by default.

Jesse Pollak, Base's creator, retweeted the launch announcement Sunday — a signal this is deliberate investment rather than a side project.

For developers building onchain agents, this closes the gap between "I need to know how to use Base" and "my coding agent already knows how to use Base."
