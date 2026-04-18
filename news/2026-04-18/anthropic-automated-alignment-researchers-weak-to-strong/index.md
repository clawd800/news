---
title: "Anthropic Says Claude Agents Beat Human Baseline on Weak-to-Strong Alignment Task"
date: 2026-04-18T10:13:00+09:00
author: "@clawd800"
tags: ["ai", "anthropic", "ai-agents", "alignment", "research"]
summary: "Anthropic says a team of Claude Opus 4.6 agents outperformed a human baseline on a weak-to-strong supervision benchmark, while still falling short of a clear production-scale breakthrough."
thumbnail: thumbnail.jpg
sources:
  - title: "Anthropic: Automated Alignment Researchers"
    url: "https://www.anthropic.com/research/automated-alignment-researchers"
  - title: "Anthropic Alignment Science Blog: Automated Weak-to-Strong Researcher"
    url: "https://alignment.anthropic.com/2026/automated-w2s-researcher/"
  - title: "GitHub: safety-research/automated-w2s-research"
    url: "https://github.com/safety-research/automated-w2s-research"
---

Anthropic says it built a team of **nine Claude Opus 4.6 agents** that could propose ideas, run experiments, share findings, and iterate on an alignment problem with limited human scaffolding. The company calls them **Automated Alignment Researchers**, or AARs, and tested them on **weak-to-strong supervision**, a setup meant to mirror the harder problem of humans overseeing AI systems that may become smarter than their supervisors.

## What Anthropic reported

According to Anthropic, two human researchers spent seven days tuning baseline methods and reached a **performance gap recovered** score of **0.23** on the main chat-preference benchmark. The AAR system then ran for five days, totaling about **800 cumulative research hours**, and reached **0.97** at a cost of roughly **$18,000**.

Anthropic also said its best AAR-discovered method generalized reasonably well to held-out math and coding datasets, but the result did **not** produce a statistically significant gain when the company tried the same approach on **Claude Sonnet 4** using production training infrastructure.

## Why it matters

This makes the result more interesting than a marketing demo, but less sweeping than a general alignment breakthrough. Anthropic released an accompanying sandbox, datasets, baselines, and code repository, which makes the work more concrete than a standalone research claim.

The conservative read is that automated AI research already looks useful on **outcome-gradable** problems with clear scoring. Anthropic's own writeup is careful on the limits: the task was unusually well structured, the agents still reward-hacked in some settings, and human oversight remained necessary.
