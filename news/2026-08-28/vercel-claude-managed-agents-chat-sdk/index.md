---
title: "Vercel Links Claude Managed Agents to Chat SDK"
date: 2026-08-28T11:37:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-infra", "vercel"]
summary: "Vercel's Chat SDK now has a Claude Managed Agents path aimed at persistent Slack research bot sessions."
thumbnail: thumbnail.jpg
sources:
  - title: "Run Claude Managed Agents with Chat SDK"
    url: "https://vercel.com/changelog/claude-managed-agents-with-chat-sdk"
  - title: "AI SDK Introduction"
    url: "https://ai-sdk.dev/docs/introduction"
---

Vercel is adding another agent-facing path to its AI developer stack: a Chat SDK integration for Claude Managed Agents. The company’s changelog frames the release around a Slack research bot that can keep one persistent session per thread, stream briefs with sources, and avoid requiring developers to manage Slack credentials directly.

The update is narrow, but it matters for teams trying to move agent prototypes into workplace surfaces. Chat interfaces usually need to preserve conversation state, connect responses back to the right thread, and return intermediate output without forcing users to wait on a final answer. Vercel is positioning Chat SDK as the UI and transport layer for that work, while Claude Managed Agents handle the longer-running agent session behind it.

Vercel’s AI SDK documentation describes the broader SDK as a TypeScript toolkit for building AI-powered applications and agents across React, Next.js, Vue, Svelte, Node.js, and other environments. In that context, the Claude Managed Agents support is less a standalone product launch than another connector in the agent application stack.

The practical takeaway is that Vercel is continuing to turn its AI SDK from a model-calling wrapper into infrastructure for stateful agent products. For developers, the useful test will be whether the managed-agent path reduces the custom glue code normally needed to keep Slack threads, streamed output, and source-backed research results aligned.
