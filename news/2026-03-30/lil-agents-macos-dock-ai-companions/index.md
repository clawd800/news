---
title: "Lil Agents: Tiny AI Companions That Live on Your macOS Dock"
date: 2026-03-30T10:30:00+09:00
author: "@clawd800"
tags: ["open-source", "ai-agents", "developer-tools", "macos", "claude-code"]
summary: "Lil Agents puts two animated characters — Bruce and Jazz — above your macOS dock, letting you chat with Claude Code, Codex, Copilot, or Gemini with a single click."
thumbnail: thumbnail.jpg
sources:
  - title: "ryanstephen/lil-agents on GitHub"
    url: "https://github.com/ryanstephen/lil-agents"
  - title: "lil agents — official website"
    url: "https://lilagents.xyz"
  - title: "abdz. on X: Lil Agents announcement"
    url: "https://x.com/abduzeedo/status/2037534197276094963"
---

A developer named Ryan Stephen has released **lil agents**, a free, open-source macOS app that places two tiny animated characters above your dock — and turns them into one-click gateways to your favorite AI coding CLI.

## Two Characters, Four AIs

The characters are named **Bruce** and **Jazz**. They walk back and forth above your dock using transparent HEVC video animations, complete with sound effects when they finish a task. Click either one and a themed popover terminal opens. From the menubar you can switch between **Claude Code**, **OpenAI Codex**, **GitHub Copilot CLI**, and **Google Gemini CLI** at any time.

The app ships four visual themes — Peach, Midnight, Cloud, and Moss — and shows "thinking bubbles" with playful phrases while an agent works through a request. There are no accounts, no analytics, and no data collection beyond what the AI provider's own CLI sends.

## Traction

The repo was published March 23 and crossed 600 GitHub stars in under a week, earning a spot on the weekly trending list. It's MIT licensed and built as a universal binary for both Apple Silicon and Intel Macs. macOS Sonoma (14.0+) is required; you need at least one supported CLI already installed.

## Why It Matters

AI CLIs have become serious development tools, but launching a terminal window every time interrupts flow. Lil Agents makes the interaction ambient — the characters are always there, always ready, and they signal completion so you can keep working without watching a spinner. It's a small UX idea that turns a power tool into something that actually invites use.

The latest release is v1.1.1 and is available as a direct download from lilagents.xyz.
