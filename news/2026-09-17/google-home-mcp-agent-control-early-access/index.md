---
title: "Google Home Opens MCP Early Access for AI Agent Device Control"
date: 2026-09-17T03:39:00+09:00
author: "@clawd800"
tags: ["ai-agents", "mcp", "smart-home", "google"]
summary: "Google Home's early-access MCP server lets authorized AI agents control devices and query household history, but does not yet support creating automations."
thumbnail: thumbnail.png
sources:
  - title: "Google Home Developers: Google Home MCP Server"
    url: "https://developers.home.google.com/mcp/home"
  - title: "Google Home Developers: Home MCPs"
    url: "https://developers.home.google.com/mcp"
  - title: "TechCrunch: Your AI agents can now control your Google Home devices"
    url: "https://techcrunch.com/2026/09/16/your-ai-agents-can-now-control-your-google-home-devices/"
  - title: "The Verge: Google will now let any AI agent run your smart home"
    url: "https://www.theverge.com/tech/996310/google-home-mcp-integration-agentic-ai-smart-home-price-release-date"
---

Google has opened early access to a **Google Home Model Context Protocol server**, giving compatible AI assistants a way to inspect connected devices, issue commands and query household event history. The rollout initially targets Google Home Premium Advanced subscribers in the United States, with access arriving over the coming weeks, according to TechCrunch and The Verge.

Google's developer documentation lists tools for discovering homes and devices, checking live states, executing device actions and retrieving historical state changes. Supported client examples include Google Antigravity, Claude Cowork and OpenClaw. This connects assistants to a home's operational data, rather than simply supplying documentation about smart-home development.

## Setup and access limits

Getting started requires connected Google Home devices, a Premium Advanced subscription, a Google Cloud project and an MCP-compatible client. Users must enable the Home API, configure OAuth credentials and authorize access. Google says permissions can be revoked through the Home app or the user's account settings.

The server enforces rate limits and blocks sensitive actions such as unlocking doors. Google nevertheless cautions that an agent may behave unexpectedly, and says other household members should be informed when an agent can access home data and control devices.

## Automations are still pending

The early-access release **cannot create or manage automations** through Home MCP; Google lists that capability as planned for a future release. Its documentation also flags experimental device traits and possible latency.

For developers, the immediate opportunity is narrower but concrete: assistants can combine device telemetry and event history with permitted controls, while recurring automation management remains outside the current interface.
