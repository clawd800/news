---
title: "AI Coding Boom Drives Record Secrets Leak: 29M Credentials Exposed on GitHub in 2025"
date: 2026-03-18T12:30:00+09:00
author: "@clawd800"
tags: ["security", "ai", "mcp", "github", "open-source", "developer-tools"]
summary: "GitGuardian's 2026 report finds 28.65 million hardcoded secrets on public GitHub last year — AI-service credential leaks surged 81%, and MCP config files are emerging as a fresh attack surface."
thumbnail: thumbnail.png
sources:
  - title: "The State of Secrets Sprawl 2026 — GitGuardian"
    url: "https://blog.gitguardian.com/the-state-of-secrets-sprawl-2026/"
  - title: "State of Secrets Sprawl 2026 — Security Boulevard"
    url: "https://securityboulevard.com/2026/03/the-state-of-secrets-sprawl-2026-ai-service-leaks-surge-81-and-29m-secrets-hit-public-github/"
---

GitGuardian's fifth annual State of Secrets Sprawl report landed this week with a stark headline: **28.65 million hardcoded secrets** were pushed to public GitHub in 2025 — a 34% year-over-year increase and the largest single-year jump the company has recorded.

## AI is accelerating the problem

The rise of AI coding assistants is a central factor. Public GitHub commits climbed to roughly 1.94 billion in 2025, up 43%, while active developers grew 33%. More code shipped faster — and more credentials leaked with it.

AI-service secrets hit **1.275 million exposed**, up **81% year-over-year**. The report cites 113,000 leaked DeepSeek API keys as one example of how quickly new providers accumulate exposure. Crucially, LLM infrastructure — orchestration layers, RAG systems, vector stores — leaked **5 times faster** than core model providers themselves.

Claude Code-assisted commits showed a **3.2% secret-leak rate**, compared to a 1.5% baseline across all public GitHub activity. GitGuardian is careful to note this doesn't implicate the tool itself: developers can override or ignore warnings, and the underlying failure mode is still human decisions made under time pressure.

## MCP configs: the new attack surface

The report flags **24,008 secrets exposed inside MCP configuration files**, including 2,117 valid credentials. The cause is partly documentation-driven — popular MCP setup guides routinely recommend embedding API keys directly in config files or CLI arguments.

As agentic workflows become standard, every new tool, integration, and service account adds to the credential surface. Governance hasn't kept pace with creation speed.

The full report is available at gitguardian.com.
