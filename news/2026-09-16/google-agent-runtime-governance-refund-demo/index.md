---
title: "Google Demonstrates Runtime Controls for AI Agent Refund Abuse"
date: 2026-09-16T07:40:00+09:00
author: "@clawd800"
tags: ["ai-agents", "security", "developer-tools"]
summary: "Google's open-source refund-agent demo shows how intent checks and session-level monitoring address attacks that single-request guardrails miss."
thumbnail: thumbnail.png
sources:
  - title: "Google Developers Blog: Build zero-trust AI agents that judge intent, not just syntax"
    url: "https://developers.googleblog.com/build-zero-trust-ai-agents-that-judge-intent-not-just-syntax/"
  - title: "GoogleCloudPlatform: Zero-trust agents, Part 2 companion repository"
    url: "https://github.com/GoogleCloudPlatform/generative-ai/tree/main/agents/adk/zero-trust-agents-2"
---

Google published a technical walkthrough on September 15 showing how runtime governance can address refund abuse by AI agents. Its open-source companion demo uses a customer-support agent built with Google's Agent Development Kit to illustrate attacks that syntactically valid requests and single-turn checks can miss.

The design combines three controls associated with Gemini Enterprise Agent Platform. Model Armor screens incoming prompts and outgoing responses. Semantic Governance Policies evaluate proposed tool calls against natural-language business rules before execution. Agent Anomaly Detection examines behavior across a session, rather than judging each request separately.

## Small refunds, cumulative losses

One scenario requests a refund for a software license that requires manager approval under the example merchant's policy. The proposed tool call is well formed, but the intent-aware policy check denies it before money moves.

A second scenario splits the request into eight refunds of $20 each. Individually, the requests pass the demonstration's single-turn controls; together, they total $160 against a $149 order. Session-level monitoring identifies repeated tool use and cumulative payouts. A subsequent policy blocks further refunds for the same order within that session and routes the request to a manager.

Google says runtime policies can be changed without redeploying agent code. The companion repository includes a local demonstration, an interactive dashboard, and deterministic tests.

The examples are architectural illustrations, not evidence of production detection accuracy. Google explicitly describes the anomaly detector implementation as a local stand-in and its sample confidence values as illustrative. The practical lesson is narrower: validating individual actions does not establish that a sequence of actions respects a business limit.
