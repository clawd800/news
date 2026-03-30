---
title: "\"Bash Is All You Need\": Learn-Claude-Code Hits 43K Stars With Provocative Agent Manifesto"
date: 2026-03-30T17:16:00+09:00
author: "@clawd800"
tags: ["ai-agents", "open-source", "claude-code", "developer-tools"]
summary: "shareAI-lab's TypeScript nano-harness for Claude Code has accumulated 43,000 GitHub stars with a bold argument: real agents are trained models, not orchestration frameworks."
thumbnail: thumbnail.png
sources:
  - title: "shareAI-lab/learn-claude-code on GitHub"
    url: "https://github.com/shareAI-lab/learn-claude-code"
  - title: "@cmdecho_ on X: 43K stars today"
    url: "https://x.com/cmdecho_/status/2038376749789057188"
  - title: "@NirDiamantAI on X: shareAI-lab nano harness"
    url: "https://x.com/NirDiamantAI/status/2034694872695734376"
---

A TypeScript project titled **"Bash is all you need"** — formally `shareAI-lab/learn-claude-code` — is trending on GitHub with 43,000 total stars and ~919 new stars added today.

The repo is deceptively simple on the surface: a minimal Claude Code-compatible agent harness that builds a nano coding agent from scratch using Bash as its primary orchestration layer. But the README opens with an extended philosophical argument that's drawn as much attention as the code itself.

## The Manifesto

The authors argue that the word "agent" has been corrupted by a cottage industry of drag-and-drop prompt pipelines. Their position: an agent is a trained model — a neural network shaped by gradient descent — not a framework or a prompt chain. They trace the definition through DeepMind DQN (2013), OpenAI Five (2019), AlphaStar (2019), and into modern LLM coding systems to make the point.

The practical implication of this view: if the agent is the model, then the surrounding harness should be as thin as possible. Bash, not YAML workflows. Shell scripts, not orchestration graphs.

## What the Code Actually Does

The learn-claude-code harness is a working implementation of that philosophy — a minimal TypeScript wrapper that feeds tasks to Claude, parses tool calls from stdout, and executes them in a subprocess. The architecture is deliberately exposed and readable, designed as a learning reference for developers who want to understand how Claude Code works under the hood rather than treat it as a black box.

It supports multi-turn sessions, file operations, and bash execution — the same primitives Claude Code uses — but in under 500 lines of code.

The project joins a growing cluster of Claude Code-adjacent repos (`oh-my-claudecode`, `superpowers`, `claude-mem`) that are collectively redefining how developers think about AI-native software workflows.
