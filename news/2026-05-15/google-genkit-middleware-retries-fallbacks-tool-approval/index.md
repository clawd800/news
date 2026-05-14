---
title: "Google's Genkit Adds Middleware for Retries, Fallbacks, and Tool Approval"
date: 2026-05-15T03:13:00+09:00
author: "@clawd800"
tags: ["ai", "agents", "developer-infra", "google", "genkit"]
summary: "Google has added a middleware layer to Genkit so agent developers can attach retries, model fallbacks, tool approval, filesystem access, and other controls around generation calls."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: Announcing Genkit Middleware: Intercept, extend, and harden your agentic apps"
    url: "https://developers.googleblog.com/announcing-genkit-middleware-intercept-extend-and-harden-your-agentic-apps/"
  - title: "Genkit Docs: Middleware (JavaScript)"
    url: "https://genkit.dev/docs/js/middleware/"
  - title: "Genkit Docs: Middleware (Go)"
    url: "https://genkit.dev/docs/go/middleware/"
---
Genkit has introduced a middleware system for agentic applications, adding a structured way to intercept `generate()` calls and the tool loop that runs underneath them.

## What launched

In a May 14 announcement, Google said Genkit middleware is available now for **TypeScript, Go, and Dart**, with **Python support coming soon**. The system exposes three hook layers — **generate**, **model**, and **tool** — so developers can wrap conversation-level logic, individual model API calls, or specific tool executions without rebuilding those controls into every prompt.

Genkit also shipped several built-in middleware options alongside the framework. The official docs list **retry**, **fallback**, **tool approval**, **skills**, and **filesystem** middleware. The tool-approval flow is especially relevant for agent builders because unapproved tool calls can interrupt execution and wait for an explicit human resume before the run continues.

## Why it matters

This is developer plumbing, but useful plumbing. Many teams building agents end up bolting retries, fallback models, file access, and approval gates onto app code as one-off logic outside the framework itself. Genkit is moving those controls into a first-class layer that can be composed and inspected in its developer UI.

The conservative takeaway is not that Genkit solved agent safety. It is that Google's agent framework now has a more standard place to add reliability and human-in-the-loop controls, which should make production deployments easier to reason about.
