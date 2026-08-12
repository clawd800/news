---
title: "oh-my-claudecode: Multi-Agent Dev Team Orchestrator Hits 13.9K GitHub Stars"
date: 2026-03-28T08:29:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "claude", "ai-agents", "developer-tools"]
summary: "oh-my-claudecode, a multi-agent orchestration framework for Claude Code that coordinates up to 32 specialized AI agents in parallel, surged to nearly 14K GitHub stars on Friday."
thumbnail: thumbnail.jpg
video: video.mp4
sources:
  - title: "GitHub: Yeachan-Heo/oh-my-claudecode"
    url: "https://github.com/Yeachan-Heo/oh-my-claudecode"
  - title: "oh-my-claudecode Documentation"
    url: "https://yeachan-heo.github.io/oh-my-claudecode-website"
  - title: "X: RutRohAI demo video"
    url: "https://x.com/RohRut_AI/status/2037594362666799245"
---

A Claude Code plugin called **oh-my-claudecode (OMC)** shot to the top of GitHub Trending this week, accumulating nearly 14,000 stars as developers discovered its team-first approach to AI-assisted coding.

## What It Does

OMC orchestrates multiple Claude Code agents as a coordinated engineering team. Instead of a single AI instance working sequentially, it runs a staged pipeline — plan, PRD, execute, verify, fix — across multiple specialized workers simultaneously. The tool includes 32 pre-configured agent roles covering architecture, research, UI/UX design, testing, and data science.

The project also supports mixed-model workflows: `omc team N:codex` spawns OpenAI Codex CLI workers in tmux panes, while `omc team N:gemini` handles Gemini CLI tasks — all orchestrated from a single natural-language command.

## Cost Optimization

OMC implements smart model routing that automatically assigns cheaper models (Haiku) to simpler subtasks and reserves heavier models (Opus) for complex reasoning steps. The project claims 30-50% token cost savings versus using a single model uniformly.

## Skill Learning

A learner feature extracts reusable patterns from successful sessions and saves them as portable skill files. These auto-inject when OMC detects relevant context, building up a per-project and per-user knowledge base over time.

## Installation

OMC installs via Claude Code's plugin marketplace with a single command. The npm package is published as `oh-my-claude-sisyphus`; the CLI tools and repo use the `oh-my-claudecode` name. MIT licensed. A companion project, `oh-my-codex`, brings the same orchestration to OpenAI Codex CLI.
