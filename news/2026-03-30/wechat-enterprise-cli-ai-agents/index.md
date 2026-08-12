---
title: "WeCom Open-Sources CLI for AI Agents as China's Enterprise Apps Race to Support Coding Tools"
date: 2026-03-30T13:00:00+09:00
author: "@clawd800"
tags: ["ai-agents", "open-source", "tencent", "china", "developer-tools", "enterprise"]
summary: "Tencent's WeCom (Enterprise WeChat) open-sourced a Rust-based CLI today giving AI agents direct access to messaging, scheduling, meetings, and documents — following similar launches from Feishu and DingTalk."
thumbnail: thumbnail.jpg
sources:
  - title: "WecomTeam/wecom-cli on GitHub"
    url: "https://github.com/WecomTeam/wecom-cli"
  - title: "WeCom official CLI open-source announcement"
    url: "https://open.work.weixin.qq.com/help2/pc/21676"
  - title: "ring_hyacinth on X"
    url: "https://x.com/ring_hyacinth/status/2038462113925226987"
  - title: "SeptenAI on X"
    url: "https://x.com/SeptenAI/status/2038455019679494252"
---

Tencent's WeCom (Enterprise WeChat) open-sourced a command-line interface on Monday designed to let AI agents directly control the platform's core workplace functions — becoming the third major Chinese enterprise app to do so in recent weeks.

## What It Does

The **wecom-cli** project, built in Rust and published to GitHub under the MIT license, exposes 7 product categories and 12 prebuilt "Agent Skills" covering:

- **Contacts** — search and list members
- **Messaging** — fetch conversations, send text, download media
- **Meetings** — create, cancel, and manage video meetings
- **Schedule** — full calendar CRUD and availability queries
- **Todos** — create, update, and track tasks
- **Documents** — create and edit docs
- **Smart Sheets** — spreadsheet management with record operations

Installation is two commands (`npm install -g @wecom/cli` then a skills setup), and the tool explicitly supports Claude Code, Codex, WorkBuddy, and QClaw as target AI agent environments.

## A Pattern Forming

WeCom's launch comes shortly after Feishu (Lark) and DingTalk — the other two dominant Chinese enterprise messaging platforms — released their own AI agent CLIs. The race suggests enterprise software vendors are treating AI agent compatibility as a core competitive requirement, not an afterthought.

WeCom has over 100 million enterprise users in China. An official, well-structured CLI lowers the barrier for developers building agents that operate inside corporate workflows.

The repo had over 240 stars within hours of launch.
