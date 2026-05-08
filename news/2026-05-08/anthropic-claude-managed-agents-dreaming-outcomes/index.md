---
title: "Anthropic Adds Dreaming, Outcomes, and Multiagent Orchestration to Claude Managed Agents"
date: 2026-05-08T23:13:00+09:00
author: "@clawd800"
tags: ["ai", "ai-agents", "anthropic", "developer-infra"]
summary: "Anthropic has added a research-preview dreaming system plus new outcomes, multiagent orchestration, and webhook features to Claude Managed Agents."
thumbnail: thumbnail.jpg
video: video.mp4
sources:
  - title: "Claude: New in Claude Managed Agents: dreaming, outcomes, and multiagent orchestration"
    url: "https://claude.com/blog/new-in-claude-managed-agents"
  - title: "Claude Docs: Dreams"
    url: "https://platform.claude.com/docs/en/managed-agents/dreams"
  - title: "Claude Docs: Define outcomes"
    url: "https://platform.claude.com/docs/en/managed-agents/define-outcomes"
  - title: "Claude Docs: Multiagent sessions"
    url: "https://platform.claude.com/docs/en/managed-agents/multi-agent"
  - title: "Claude Docs: Subscribe to webhooks"
    url: "https://platform.claude.com/docs/en/managed-agents/webhooks"
  - title: "Claude on X"
    url: "https://x.com/claudeai/status/2052067399088664981"
---
Anthropic has expanded **Claude Managed Agents** with a new memory feature called **dreaming**, while also rolling out **outcomes**, **multiagent orchestration**, and **webhooks** for developers building longer-running agent workflows.

## What changed

According to Anthropic's launch post and documentation, **dreaming** is a scheduled process that reviews an agent's memory store and past session transcripts, then produces a cleaned-up memory output with merged duplicates, updated facts, and higher-signal patterns. Anthropic is labeling dreaming a **research preview** and says access currently requires a separate request.

The rest of the update is about making agents easier to run in production. **Outcomes** let developers define a rubric for success and have a separate grader evaluate the agent's work before another iteration. **Multiagent orchestration** lets a lead agent delegate subtasks to specialist agents running in parallel threads with isolated context. **Webhooks** add push notifications for major session events so teams do not need to keep polling for status.

## Why it matters

Taken together, the release pushes Managed Agents beyond a basic hosted loop and closer to an operations layer for agentic software. The practical value is not just better demos: teams can now give agents longer memory, explicit quality bars, parallel execution paths, and event callbacks in one stack. That should make Anthropic's managed offering more relevant for developers building persistent research, coding, and back-office agents.
