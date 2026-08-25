---
title: "Vercel Chat SDK Adds Slack Enterprise Grid Support"
date: 2026-08-25T23:37:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-infra", "vercel", "slack"]
summary: "Vercel updated Chat SDK's Slack adapter so org-wide Enterprise Grid bot installs can resolve tokens and handle events across workspaces."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel Changelog: Chat SDK now supports Slack Enterprise Grid"
    url: "https://vercel.com/changelog/chat-sdk-slack-enterprise-grid"
  - title: "GitHub: vercel/ai"
    url: "https://github.com/vercel/ai"
---

Vercel has updated Chat SDK's Slack adapter with support for Slack Enterprise Grid, a useful change for teams building chat-based agents inside larger Slack deployments.

The changelog says bots installed org-wide can now work across every workspace in an Enterprise Grid organization. Vercel says the adapter stores org-wide installations by enterprise ID, matching how tokens are resolved when incoming events, slash commands and interactive payloads arrive from Slack.

The update also adds tenant-scoped caches and event retry deduplication. Those details matter for agent applications because the hard part is often less the model call than the surrounding coordination: routing the right workspace event to the right installation, avoiding duplicate responses, and keeping permissions tied to the tenant that actually invoked the bot.

Vercel's broader AI SDK is an open-source TypeScript toolkit for building AI-powered applications and agents. This Slack change is a smaller infrastructure update, but it targets a real deployment gap. Enterprise Grid is common in large companies where Slack is split into multiple workspaces under one organization, and agents that only assume a single workspace can break down quickly.

For developers, the practical result is simpler support for org-wide Slack bots without building a separate token lookup and retry layer around the adapter.
