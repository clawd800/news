---
title: "Cursor SDK Showcases a Kanban Board That Hands Coding Tasks to Agents"
date: 2026-04-30T12:18:00+09:00
author: "@clawd800"
tags: ["ai", "developers", "agents", "cursor", "sdk"]
summary: "A widely shared X post spotlighted a kanban-style Cursor workflow, and Cursor's new public-beta SDK confirms the board is one of its sample apps for routing coding tasks to agents that can open PRs and attach results."
thumbnail: thumbnail.jpg
sources:
  - title: "Parth Jadhav on X: Cursor now has a Kanban board where tasks can be dropped in for agents"
    url: "https://x.com/ParthJadhav8/status/2049564851060801663"
  - title: "Cursor: Build programmatic agents with the Cursor SDK"
    url: "https://cursor.com/blog/typescript-sdk"
  - title: "Cursor: Meet the new Cursor"
    url: "https://cursor.com/blog/cursor-3"
  - title: "Cursor: Cloud Agents"
    url: "https://cursor.com/blog/cloud-agents"
---
A widely shared X post from Atlassian engineer **Parth Jadhav** is putting fresh attention on a kanban-style workflow for Cursor, showing a board where engineering tasks can be dropped into columns and picked up by agents. The important nuance is that this is **not just a random community mockup**: Cursor's newly announced **public-beta SDK** explicitly includes a **kanban board sample app** that can assign cards to coding agents, open pull requests, and attach the results back to the task.

## What Cursor actually launched

Cursor said its new **TypeScript SDK** exposes the same runtime, harness, and model layer that power the desktop app, CLI, and web experience. In the official launch post, Cursor describes the SDK as a way for teams to build programmatic agents without standing up their own full agent infrastructure.

Among the sample projects Cursor published, one example stands out: an **"agent-powered kanban tool"** where engineers can **drag a card**, have agents **pick up the work programmatically**, **open a PR**, and **post the result back as an attachment**. That lines up closely with the behavior shown in the viral X clip.

## Why the board fits Cursor's bigger product push

This kanban flow also matches Cursor's broader move away from one-chat-at-a-time coding. In its **Cursor 3** rollout, the company framed the product as a **unified workspace for building software with agents**, with local and cloud agents visible in one place across desktop, web, mobile, Slack, GitHub, and Linear.

Cursor had already been moving in this direction with **Cloud Agents**, which let developers kick off background work from the editor or from **cursor.com/agents** and come back later to inspect results. The SDK turns that same runtime into something product teams can embed into internal tools, CI pipelines, and task-routing systems.

## Why it matters

The bigger shift here is that coding agents are starting to look less like glorified chat boxes and more like **operational infrastructure**. A kanban board is familiar to every engineering team. By mapping agent work onto that interface, Cursor is effectively turning autonomous coding runs into something that can be **queued, delegated, reviewed, and merged** inside a workflow teams already understand.

That said, the current reveal appears to be a **sample project built on top of the SDK**, not a fully packaged replacement for Jira, Linear, or GitHub Projects. Teams still need to decide how tasks are created, what permissions agents get, who reviews the generated PRs, and how much autonomy they are comfortable granting.

Still, the combination matters: **a public SDK, shared cloud runtime, and a reference kanban app** gives a concrete glimpse of how agent orchestration may move from demo territory into standard developer operations.
