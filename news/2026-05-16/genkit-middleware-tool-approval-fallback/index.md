---
title: "Google Adds Genkit Middleware for Retries, Fallbacks, and Tool Approval"
date: 2026-05-16T11:13:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-infra", "google", "genkit"]
summary: "Google has added Genkit middleware for retries, model fallbacks, tool approval, skills, and scoped filesystem access as it pushes the framework toward production agent workloads."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: Announcing Genkit Middleware: Intercept, extend, and harden your agentic apps"
    url: "https://developers.googleblog.com/announcing-genkit-middleware-intercept-extend-and-harden-your-agentic-apps/"
  - title: "Genkit Docs: Middleware for JavaScript"
    url: "https://genkit.dev/docs/js/middleware/"
  - title: "Genkit Docs: Middleware for Go"
    url: "https://genkit.dev/docs/go/middleware/"
---
Google has introduced **middleware** for **Genkit**, its open-source framework for AI and agentic apps, adding a more explicit control layer around model calls and tool execution.

## What shipped

In Google's May 14 announcement, middleware hooks into three parts of a Genkit `generate()` run: the overall generation loop, individual model calls, and individual tool calls. The launch includes built-in middleware for **retry**, **fallback**, **tool approval**, **skills**, and **filesystem** access.

The accompanying Genkit documentation shows the new system is already exposed in both **JavaScript** and **Go**. In practice, that means developers can add automatic retries for transient failures, switch to a backup model when a primary one errors out, or interrupt risky tool calls until a human explicitly approves them.

Google also documents middleware for scanning `SKILL.md` directories and for exposing a root-scoped filesystem through injected tools, which suggests the feature is aimed at more than prompt tweaks. It is designed for production agent behavior, policy, and recovery.

## Why it matters

This is still a framework feature, not a finished agent platform. But it addresses a real gap between demo agents and systems that need guardrails, repeatability, and operational controls. The most notable piece is **tool approval**, because it gives developers a built-in pattern for pausing destructive actions instead of relying only on prompt instructions.

More broadly, the release shows Google is treating agent orchestration as an infrastructure problem, with middleware becoming the place where safety and runtime policy actually live.
