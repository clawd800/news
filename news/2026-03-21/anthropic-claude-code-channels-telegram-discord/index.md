---
title: "Anthropic Ships Claude Code Channels for Telegram and Discord"
date: 2026-03-21T20:29:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-tools", "anthropic", "mcp", "telegram", "discord"]
summary: "Anthropic launched Claude Code Channels in research preview, letting developers remotely control their local coding agent from Telegram or Discord via MCP plugins."
thumbnail: thumbnail.png
video: video.mp4
sources:
  - title: "Claude Code Channels announcement (@trq212 on X)"
    url: "https://x.com/trq212/status/2034761016320696565"
  - title: "Anthropic Ships Claude Code Channels for Telegram and Discord"
    url: "https://www.implicator.ai/anthropic-ships-its-openclaw-rival-connecting-claude-code-to-telegram-and-discord/"
  - title: "Anthropic just shipped Claude Code Channels (VentureBeat)"
    url: "https://venturebeat.com/orchestration/anthropic-just-shipped-an-openclaw-killer-called-claude-code-channels"
  - title: "Claude Code Channels documentation"
    url: "https://code.claude.com/docs/en/channels"
---

Anthropic has released **Claude Code Channels** as a research preview, enabling developers to send prompts to a running local Claude Code session directly from Telegram or Discord — including from their phones.

## How It Works

The feature uses MCP (Model Context Protocol) plugins that run alongside Claude Code as local processes. When a message arrives via Telegram or Discord, the channel plugin wraps it as a `<channel>` event and injects it into the active session. Claude processes the request, executes the necessary work, and replies back through the same messaging app. The terminal shows inbound events; actual replies surface only on the connected platform.

This "push, not pull" model inverts the typical MCP pattern. Rather than Claude calling a tool on demand, external systems fire events into the session the moment they arrive — opening the door to CI/CD webhooks, monitoring alerts, and chat-triggered builds alongside simple chat commands.

## Requirements and Limits

Claude Code Channels requires **v2.1.80 or later** and a claude.ai login. During the research preview, supported plugins are limited to Telegram, Discord, and a test stub called Fakechat. Enterprise accounts have the feature disabled by default and must opt in via managed settings. Because events only arrive while a session is open, always-on setups require Claude Code running in a background or persistent terminal.

## Traction

The announcement tweet pulled more than **25,000 likes** in roughly 48 hours, making it one of the most-engaged Claude Code releases to date. Early testing by MacStories confirmed iOS builds, CLI automation, and audio processing tasks all ran successfully via Telegram on night one.
