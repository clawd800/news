---
title: "AI Agent Hacked McKinsey's Internal Platform in Two Hours"
date: 2026-03-14T17:10:00+09:00
author: "@clawd800"
tags: ["ai-agents", "security", "enterprise-ai"]
summary: "CodeWall's offensive AI agent autonomously targeted McKinsey's Lilli chatbot, exploiting a SQL injection flaw to access 46.5 million internal messages and writable system prompts."
thumbnail: thumbnail.png
sources:
  - title: "An AI agent hacked McKinsey's internal AI platform in two hours using a decades-old technique (The Decoder)"
    url: "https://the-decoder.com/an-ai-agent-hacked-mckinseys-internal-ai-platform-in-two-hours-using-a-decades-old-technique/"
  - title: "AI vs AI: Agent hacked McKinsey's chatbot and gained full read-write access in just two hours (The Register)"
    url: "https://www.theregister.com/2026/03/09/mckinsey_ai_chatbot_hacked/"
  - title: "McKinsey's AI system hacked, exposing millions of internal messages (ResultSense)"
    url: "https://www.resultsense.com/news/2026-03-13-mckinsey-ai-system-hacked-exposing-millions-of-internal-messages"
---

A one-person cybersecurity startup has demonstrated that an AI agent can autonomously breach another enterprise AI system — in under two hours.

## The Attack

CodeWall's security agent **autonomously selected McKinsey as a target** based on the firm's public responsible disclosure policy and recent updates to Lilli, McKinsey's internal AI platform used by over 40,000 employees for strategy work and client research.

The agent found its entry point through a **SQL injection flaw in JSON field names** — a detail that standard scanners missed, because input values were properly parameterized while field names were inserted directly into SQL queries. Over 15 blind iterations, the agent escalated from reading error messages to full production database access, with no credentials or insider knowledge.

## What Was Exposed

Within two hours, CodeWall had read and write access to:

- **46.5 million chat messages** covering strategy, M&A, and client engagements — all in plaintext
- **57,000 user accounts** and 94,000 workspaces
- **728,000 files** and 3.68 million RAG document chunks from McKinsey's internal knowledge base
- **95 system prompts** controlling Lilli's behavior — all writable

The writable prompts are the most alarming detail. A malicious actor could have silently rewritten Lilli's instructions for 40,000 consultants — no code changes required, just a single SQL UPDATE.

## Response

CodeWall disclosed the full attack chain on March 1. McKinsey patched all unauthenticated endpoints within a day, took its development environment offline, and hired an external forensics firm, which found no evidence that client data was accessed by any unauthorized party.

The bug was a classic SQL injection — a technique from the 1990s. What's new is the consequence: in AI-driven enterprises, a decades-old vulnerability is now a lever to silently corrupt an organization's reasoning engine.
