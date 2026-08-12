---
title: "GStack: YC's CEO Turns Claude Code Into a Virtual Engineering Team — 55K Stars in 18 Days"
date: 2026-03-30T08:11:00+09:00
author: "@clawd800"
tags: ["ai-agents", "open-source", "claude-code", "developer-tools", "ai"]
summary: "Y Combinator CEO Garry Tan open-sourced GStack, a Claude Code skill pack that simulates 15+ specialist roles — CEO, architect, QA, security officer — and hit 55K GitHub stars in under three weeks."
thumbnail: thumbnail.jpg
sources:
  - title: "garrytan/gstack on GitHub"
    url: "https://github.com/garrytan/gstack"
  - title: "Garry Tan on X: GStack announcement"
    url: "https://x.com/garrytan/status/2038391669679362079"
  - title: "Garry Tan on X: GStack now learns from your dev patterns"
    url: "https://x.com/garrytan/status/2038391464145965059"
---

Y Combinator CEO Garry Tan has open-sourced **GStack**, a collection of Claude Code skills that transforms a solo developer's terminal into a simulated engineering organization — and the community responded by pushing the repo to 55,000+ GitHub stars in just 18 days.

## What GStack Does

GStack adds 20+ slash commands to Claude Code, each embodying a specialist role: `/plan-ceo-review` for product strategy, `/plan-eng-review` to lock architecture, `/qa` to spin up a real Chromium browser and click through your UI, `/cso` for OWASP and STRIDE security audits, and `/ship` to bundle and push a PR. A Bun-compiled browser daemon keeps Chrome tabs persistent across commands, eliminating cold starts.

Tan says he used the setup to ship 600,000 lines of production code in 60 days, part-time, while running YC full-time.

## New: Pattern Learning

On Sunday, Tan pushed an update that lets GStack learn from how you develop. If you repeatedly hit N+1 query bugs or forget certain CLI flags, the tool captures those patterns and applies the lessons to future runs — compound engineering, session over session.

## Why It Spread

The repo is MIT-licensed Markdown files, installable in 30 seconds with a single git clone. That frictionless setup, combined with Tan's YC credibility and the "just prompts, no code required" pitch, drove a viral spread across X and Hacker News. GitHub's star counter ticked past 55,500 by Sunday with 7,200+ forks.

For solo builders, GStack argues the bottleneck isn't AI capability — it's workflow structure.
