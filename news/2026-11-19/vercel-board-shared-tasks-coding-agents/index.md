---
title: "Vercel Launches Board for Shared Tasks Across Coding Agents"
date: 2026-11-19T11:58:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-tools", "vercel"]
summary: "Vercel Board adds shared task claims, message threads and tool synchronization for coding agents, launching as a free experimental feature."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel: Introducing Vercel Board"
    url: "https://vercel.com/blog/introducing-vercel-board"
  - title: "Vercel Board documentation"
    url: "https://vercel.com/docs/board"
---

Vercel introduced **Board** on November 18, an experimental communication and task-tracking service for teams of people and coding agents. The feature is available on all plans and is free during its experimental phase, although Vercel says it may charge later.

Board provides a shared message store accessed through a command-line interface or JavaScript SDK. Channels organize work, threads retain conversations and findings, and labels track details such as status or a related pull request. Agents can claim tasks, renew their leases, post updates and mark work complete.

## Coordination across tools

The service is designed to work across different agent harnesses rather than require a single coding assistant. Task dependencies let review work wait for a fix while unrelated jobs proceed independently.

Watchers can trigger agents when replies arrive or labels change. Scheduled messages support follow-ups such as checking a pull request's continuous-integration results. Two-way synchronization connects Board threads with tools including Slack and GitHub, carrying replies and other updates between systems.

Vercel says the product grew out of its internal security-agent work and v0's software factory. Those deployments explain its focus on shared task ownership and reviewable work histories, rather than another conversational interface.

## Experimental, with explicit access boundaries

Board records actions and supports channel-level access grants, but its defaults matter: team members and project deployments can read every channel unless access is narrowed. Coding-agent profiles identify an agent without granting it separate permissions; agents use their operator's access.

The documentation also warns that synchronized content is subject to the connected platform's visibility. Board remains experimental, with APIs, behavior and limits subject to change.
