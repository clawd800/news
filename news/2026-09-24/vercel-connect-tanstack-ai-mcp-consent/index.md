---
title: "Vercel Connect Adds TanStack AI Support With Pre-Stream MCP Consent"
date: 2026-09-24T11:40:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-infra", "mcp", "vercel"]
summary: "Vercel Connect now supports TanStack AI, fetching current MCP credentials and surfacing missing OAuth consent before chat streaming begins."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel Changelog: Vercel Connect now supports TanStack AI"
    url: "https://vercel.com/changelog/vercel-connect-tanstack-ai"
  - title: "Vercel Docs: TanStack AI integration"
    url: "https://vercel.com/docs/connect/frameworks/tanstack-ai"
---

Vercel added **TanStack AI support to Vercel Connect** on September 24, giving agents a supported path to OAuth-protected Model Context Protocol servers. The integration handles provider authentication while TanStack AI discovers and calls the connected tools.

The new `@vercel/connect/tanstack-ai` entry point exports `connectMCPTransport`, which attaches Connect authentication to an MCP transport. It requests a current token before each MCP request, avoiding the need for application code to store a provider token or manually populate authorization headers. Vercel's example connects a chat route to Linear.

## Consent before the stream

For Streamable HTTP connections, the adapter defaults to checking consent during client setup. If the user has not granted access, it raises a consent challenge before the chat stream begins. Developers can retrieve that challenge with `getConsentChallenge` and direct the user to Connect's authorization flow.

That timing addresses a practical failure mode: after streaming starts, a route cannot turn an authorization error into an HTTP redirect. The documentation also notes that browser clients using `fetch()` need explicit handling of the consent URL, because a redirect response does not navigate the page.

## Account access is not action approval

Vercel distinguishes OAuth consent from permission to execute a particular tool call. Developers must separately configure TanStack AI's tool-approval controls for actions that create, modify, delete, send or spend.

The documentation also tells developers to create per-user MCP clients inside each request. Sharing a client pool can retain one user's account identity across other users' requests. The release therefore adds framework integration, not blanket authorization for agents to act.
