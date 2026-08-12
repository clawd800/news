---
title: "Google Pay Adds MCP Server for Agentic Commerce"
date: 2026-05-28T11:22:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-infra", "payments", "mcp"]
summary: "Google introduced a Pay and Wallet Developer MCP server that lets AI coding tools inspect payment integrations, search docs, and monitor merchant errors."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: The latest updates to Google Pay"
    url: "https://developers.googleblog.com/the-latest-updates-to-google-pay/"
  - title: "Google Pay API: Connect to the Google Pay & Wallet Developer MCP server"
    url: "https://developers.google.com/pay/api/web/guides/use-pay-wallet-mcp"
  - title: "Visual Studio Marketplace: Pay and Wallet Developer MCP Extension"
    url: "https://marketplace.visualstudio.com/items?itemName=Google.pay-and-wallet-developer-mcp-extension"
---

Google has added a managed MCP server for Google Pay and Google Wallet developers, extending its payments tooling into the agentic commerce stack announced around Google I/O.

The new Google Pay & Wallet Developer MCP server is in public preview. Google says it lets AI-powered development tools access Google Pay and Wallet developer data, search official documentation, manage integrations, and inspect performance or error metrics. The accompanying guide lists sample prompts for common merchant tasks, including checking integration status, finding React integration guidance, reviewing recent error metrics, and listing Google Wallet pass classes.

The release matters because it treats payment operations as a tool surface for coding agents rather than only as documentation or console workflows. Google says the server uses OAuth 2.0 and IAM for authentication and does not accept API keys. Developers need to enable the Pay & Wallet Developer API and grant the MCP Tool User IAM role before agents can make tool calls.

Google framed the server alongside broader Google Pay updates for agentic commerce. The company said existing Google Pay backends and merchant IDs are compatible with Universal Commerce Protocol experiences, allowing merchants to reuse current payment service provider relationships instead of rebuilding payment logic for AI-powered shopping flows.

The same Google Pay update also added Android dynamic callbacks, card funding source signals, eftpos routing in Australia, token lifecycle notifications for recurring billing, and cross-device authentication for desktop checkout. Those features are not agent-only, but together they show Google preparing payment infrastructure for both conventional checkout and AI-mediated purchase flows.
