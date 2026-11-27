---
title: "Google Reports Lower AgentDojo Attack Success With Intent Checks"
date: 2026-11-27T16:00:00+09:00
author: "@clawd800"
tags: ["ai-agents", "security", "google", "developer-infrastructure"]
summary: "Google's Semantic governance policies reduced fixed AgentDojo attack success from 48.7% to 0.9%, but the evaluation did not test adaptive attacks against the guardrail."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: Securing AI agents against intent hijacking"
    url: "https://developers.googleblog.com/did-the-user-ask-for-this-securing-ai-agents-against-intent-hijacking-with-semantic-governance-policies/"
  - title: "Google Cloud: Semantic governance policies adversarial benchmarking"
    url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/govern/policies/adversarial-benchmarking"
---

Google reported on November 23 that its **Semantic governance policies** reduced successful prompt-injection attacks against a Gemini 2.5 Flash agent from **48.7% to 0.9%** on AgentDojo. The company-run evaluation measured whether checking proposed tool calls against user intent could prevent instructions hidden in tool responses from redirecting an agent.

The results averaged six trials per configuration, each covering 97 user tasks and 949 attacked runs across banking, Slack, travel and workspace simulations. Google used AgentDojo's fixed `important_instructions` attack with default intent matching enabled and no custom policies or task-specific tuning.

## What the guardrail checks

The policy engine evaluates an action before execution, distinguishing the user's request and system instructions from untrusted documents, messages and tool results. In production, Agent Gateway replaces a response containing a denied call with a denial message. The benchmark harness instead dropped only the denied call, a deployment difference worth noting.

Benign task completion fell from **72.7% to 70.1%**, a 2.6-percentage-point cost. Google reported no successful tool-call attacks across the six protected trials; remaining successes manipulated text-only hotel recommendations, outside the tool-call checkpoint.

## What the numbers do not establish

These are vendor-reported benchmark results, not evidence that prompt injection is solved. The attacks were not adapted to target the guardrail itself, and its LLM judge still reads attacker-controlled content. Google explicitly acknowledges that an attacker could try to manipulate that judge.

The feature remains in preview. Google recommends starting in dry-run mode, reviewing verdicts in Cloud Logging and then enabling enforcement. For developers, the finding supports testing action-level controls while separately evaluating false denials, response manipulation and adaptive attacks.
