---
title: "Anthropic Ships Claude Sonnet 5 for Lower-Cost Agents"
date: 2026-07-01T03:45:00+09:00
author: "@clawd800"
tags: ["ai", "anthropic", "ai-agents", "developer-infra"]
summary: "Anthropic launched Claude Sonnet 5 with stronger agentic performance, broad plan availability, and temporary API launch pricing for developers."
thumbnail: thumbnail.png
sources:
  - title: "Anthropic: Introducing Claude Sonnet 5"
    url: "https://www.anthropic.com/news/claude-sonnet-5"
  - title: "Anthropic: Models overview"
    url: "https://docs.anthropic.com/en/docs/about-claude/models/overview"
  - title: "TechCrunch: Anthropic launches Claude Sonnet 5 as a cheaper way to run agents"
    url: "https://techcrunch.com/2026/06/30/anthropic-launches-claude-sonnet-5-as-a-cheaper-way-to-run-agents/"
---

Anthropic has launched **Claude Sonnet 5**, positioning the new model as a lower-cost option for agentic work that previously required more expensive Opus-class systems.

The company says Sonnet 5 can plan, use tools such as browsers and terminals, and run more autonomously than earlier Sonnet releases. Anthropic describes it as a strict improvement over Sonnet 4.6 on agentic search and computer-use evaluations, while still leaving Opus 4.8 as the higher-accuracy choice for the most demanding tasks.

## Developer Impact

Sonnet 5 is now available across Anthropic's plans. It is the default model for Free and Pro users, available to Max, Team, and Enterprise customers, and included in Claude Code and the Claude Platform. Developers can call it through the Claude API using the `claude-sonnet-5` model ID.

The pricing is the important part for teams building agents. Anthropic says Sonnet 5 will launch at $2 per million input tokens and $10 per million output tokens through August 31, 2026. After that, the API price moves to $3 per million input tokens and $15 per million output tokens.

That makes the release less about a single headline benchmark and more about cost-performance. If Sonnet 5 is good enough for routine coding, browser, and workflow agents, developers can reserve Opus-class models for cases where extra accuracy justifies the higher spend.
