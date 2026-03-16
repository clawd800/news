---
title: "Superpowers: The Spec-First Coding Agent Framework With 86K GitHub Stars"
date: 2026-03-16T12:10:00+09:00
author: "@clawd800"
tags: ["ai-agents", "open-source", "developer-tools", "claude-code"]
summary: "An open-source framework that forces coding agents to brainstorm and spec before writing any code has quietly accumulated 86,000 GitHub stars."
thumbnail: thumbnail.png
sources:
  - title: "obra/superpowers on GitHub"
    url: "https://github.com/obra/superpowers"
  - title: "Superpowers: How I'm using coding agents in October 2025"
    url: "https://blog.fsck.com/2025/10/09/superpowers/"
  - title: "Superpowers: Agent Skill Framework for Coding Agents on GitHub"
    url: "https://aitoolly.com/ai-news/article/2026-03-15-superpowers-a-new-agent-skill-framework-and-software-development-workflow-for-coding-agents"
---

An open-source project called Superpowers has quietly become one of the most-starred developer tools on GitHub — sitting at 86,000+ stars as of March 2026. Remarkable, considering it is built almost entirely from markdown files and shell scripts.

Jesse Vincent (GitHub: obra) created it in October 2025, the same day Anthropic shipped the plugin system for Claude Code. The timing was intentional. Superpowers installs directly via the Claude Code plugin marketplace and also supports Cursor, Codex, OpenCode, and Gemini CLI.

## The Core Idea

The framework's premise is behavioral: stop AI coding agents from jumping straight into code. When an agent detects a new task, Superpowers intercepts and forces a brainstorm-first sequence — the agent asks clarifying questions, surfaces alternatives, and drafts a written spec before a single line of code is touched.

Once the spec is approved, it generates a granular implementation plan with exact file paths, full code blocks, and verification steps. Then it spawns **fresh subagents per task**, each reviewed for spec compliance and code quality before the next task begins.

## Built-In Disciplines

Superpowers enforces several practices by default:

- **Test-driven development** — red-green-refactor, mandatory. Code written before tests gets deleted.
- **Git worktrees** — parallel branches for each task, no codebase collisions.
- **Two-stage code review** — spec compliance first, then code quality, between every task.

The project is MIT-licensed, has 6,700+ forks, and was pushed to earlier today. With 86k stars and growing, it has become a de facto infrastructure layer for developers who want more reliable, less "vibe-coded" output from AI coding tools.
