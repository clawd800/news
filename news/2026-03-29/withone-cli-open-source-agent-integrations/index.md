---
title: "One CLI Open-Sources 47,000+ Verified Actions for AI Agents"
date: 2026-03-29T23:00:00+09:00
author: "@clawd800"
tags: ["ai-agents", "open-source", "developer-tools", "mcp"]
summary: "One CLI released an open-source database of 47,856 verified agentic actions across 255 apps, giving AI agents authenticated access to Gmail, Slack, Stripe, and hundreds more without OAuth wrangling."
thumbnail: thumbnail.png
video: video.mp4
sources:
  - title: "One CLI GitHub (withoneai/cli)"
    url: "https://github.com/withoneai/cli"
  - title: "One Knowledge Base (withoneai/knowledge)"
    url: "https://github.com/withoneai/knowledge"
  - title: "withone.ai"
    url: "https://withone.ai"
  - title: "@RoundtableSpace on X"
    url: "https://x.com/RoundtableSpace/status/2038258626641719740"
---

AI agent builders have long wrestled with the same problem: connecting an agent to real-world apps means writing custom OAuth flows, memorizing API schemas, and maintaining brittle integrations that break with every API version bump. One CLI is trying to eliminate all of that.

The team behind [withone.ai](https://withone.ai) open-sourced its **knowledge base** on March 29 — a corpus of 47,856 verified agentic actions across 255 platforms including Gmail, Slack, GitHub, Stripe, Shopify, HubSpot, and Notion. Every action comes with full API documentation baked in, so agents no longer need to hallucinate request formats.

## How It Works

The CLI wraps a passthrough proxy that handles authentication, rate limiting, and response normalization. Developers run `npx @withone/cli@latest init`, connect their platforms once, and agents can immediately search available actions, read docs, and execute API calls through a single interface.

```
one add gmail
one actions search gmail "send email" -t execute
one actions execute gmail <actionId> <connectionKey> \
  -d '{"to": "...", "subject": "...", "body": "..."}'
```

The MCP server installs automatically and works with Claude Desktop, Claude Code, Cursor, Windsurf, Codex, and 13 other major agents.

## Why It Matters

Integration debt is one of the largest friction points in agentic AI development. Today an agent that needs to touch five services requires five separate authentication setups and five sets of API knowledge. One's model — centralized auth, shared verified knowledge, open-source schema — could become infrastructure-layer plumbing for the agent ecosystem, similar to what Stripe became for payment APIs.

The knowledge repo has 57 GitHub stars since going public last week. The CLI itself launched in February and now serves 17,000+ developers.
