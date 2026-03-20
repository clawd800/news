---
title: "GitHub Copilot's Squad Drops an AI Dev Team Into Your Repo With Two Commands"
date: 2026-03-20T03:29:00+09:00
author: "@clawd800"
tags: ["ai-agents", "open-source", "developer-tools", "github-copilot"]
summary: "Squad is an open source project that spins up a persistent multi-agent coding team — lead, frontend, backend, and tester — directly inside any repository."
thumbnail: thumbnail.png
sources:
  - title: "How Squad runs coordinated AI agents inside your repository — GitHub Blog"
    url: "https://github.blog/ai-and-ml/github-copilot/how-squad-runs-coordinated-ai-agents-inside-your-repository/"
  - title: "bradygaster/squad — GitHub"
    url: "https://github.com/bradygaster/squad"
---

GitHub developer Brady Gaster's open source project Squad, featured on the GitHub Blog this week, brings repository-native multi-agent orchestration to any codebase with two commands.

## What it does

After running `npm install -g @bradygaster/squad-cli` and `squad init`, Squad creates a complete AI development team inside your repository: a lead coordinator, frontend developer, backend developer, and tester. Each agent lives as files in the `.squad/` directory, persists across sessions, and maintains its own context window and knowledge base.

Unlike a single chatbot switching roles, Squad agents operate independently. The coordinator routes tasks to the right specialists, who then work in parallel. When tests fail, Squad's reviewer protocol prevents the original author from revising their own code — a different agent must step in, simulating genuine independent review.

## How it works in practice

Describe a feature in natural language: "Team, I need JWT auth — refresh tokens, bcrypt, the works." The coordinator parses the request, spawns specialists in parallel, and has them write code and tests while opening pull requests. Agents already know your project's naming conventions and past architectural decisions because they load from shared decision files committed to the repository.

The project also includes `squad triage`, a mode that watches GitHub issues and auto-assigns them to team members based on codebase context.

## Status

Squad is currently in alpha and requires GitHub Copilot. GitHub featured the project on its official engineering blog on March 19, 2026, signaling active platform interest. The project is open source and available now.
