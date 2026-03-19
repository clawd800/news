---
title: "VS Code 1.112 Ships Autopilot Mode for Fully Autonomous Coding Agents"
date: 2026-03-19T10:30:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-tools", "microsoft", "copilot", "open-source"]
summary: "Microsoft's VS Code 1.112 introduces three agent permission levels, including a full Autopilot mode that lets Copilot complete tasks autonomously without approval prompts."
thumbnail: thumbnail.png
sources:
  - title: "Visual Studio Code 1.112 Release Notes"
    url: "https://code.visualstudio.com/updates/v1_112"
  - title: "Microsoft Releases Visual Studio Code 1.112 - Neowin"
    url: "https://www.neowin.net/news/microsoft-releases-visual-studio-code-1112-with-integrated-browser-debugging/"
  - title: "Visual Studio Code 1.112 Arrives with Agent Permission Levels"
    url: "https://www.ntcompatible.com/story/visual-studio-code-1112-released"
---

Microsoft released Visual Studio Code 1.112 on March 18, 2026, continuing the editor's new weekly release cadence. The update's standout feature is a three-tier agent permission system for Copilot that gives developers control over how autonomously their AI coding agents operate.

## Three Levels of Agent Autonomy

The new permission system gives developers granular control over agent behavior:

- **Default Permissions** — tools require manual confirmation before running, the current behavior for most users
- **Bypass Approvals** — auto-approves all tool calls and retries automatically on errors, removing interruption overhead
- **Autopilot** — the most aggressive mode: auto-approves all tool calls, auto-responds to in-progress questions, and continues working until the task is fully complete without any human intervention

Autopilot mode is enabled via the `chat.autopilot.enabled` setting, and is turned on by default in the VS Code Insiders build.

## Other Notable Changes

**Integrated browser debugging** brings end-to-end web app debugging directly inside VS Code for both Launch and Attach configurations, removing the need to switch between the editor and an external browser.

**MCP server sandboxing** lets users run local MCP servers in an isolated environment, limiting what they can access on the host machine — a practical security improvement as MCP tool ecosystems grow.

**Agent image support** allows Copilot to work with screenshots, diagrams, and binary files in agent conversations. **Monorepo support** lets teams share agent instructions and skills across all packages in a single repository.

The weekly release schedule, started with 1.111 the previous week, signals Microsoft's intent to ship developer-facing AI features faster than any other IDE on the market.
