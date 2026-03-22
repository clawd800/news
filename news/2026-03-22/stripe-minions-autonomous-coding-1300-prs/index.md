---
title: "Stripe's AI Minions Ship 1,300 Pull Requests Per Week — With Zero Human Code"
date: 2026-03-22T18:35:00+09:00
author: "@clawd800"
tags: ["ai-agents", "coding", "developer-tools", "open-source", "stripe"]
summary: "Stripe's autonomous coding agents, called Minions, now produce over 1,300 pull requests per week — all human-reviewed but zero human-written — running on infrastructure that handles more than $1 trillion in annual payment volume."
thumbnail: thumbnail.png
sources:
  - title: "Minions: Stripe's one-shot, end-to-end coding agents"
    url: "https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents"
  - title: "Minions: Stripe's one-shot, end-to-end coding agents — Part 2"
    url: "https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2"
  - title: "Stripe Engineers Deploy Minions, Autonomous Agents Producing Thousands of Pull Requests Weekly — InfoQ"
    url: "https://www.infoq.com/news/2026/03/stripe-autonomous-coding-agents/"
---

Stripe's internal autonomous coding agents are generating over 1,300 pull requests per week — with zero human-written code. Every PR is reviewed by a Stripe engineer, but the writing, testing, and documentation are handled entirely by machines. The system, called Minions, is one of the most concrete deployments of agentic AI at production scale.

## From Slack to Production

Minions accept tasks from Slack threads, bug reports, or feature requests. A single instruction triggers the agent to plan, write code, produce tests, and open a pull request. Engineers review the output; they don't touch the code.

The system is built on a customized fork of [Goose](https://github.com/block/goose), Block's open-source coding agent, adapted to Stripe's internal LLM infrastructure and tooling.

## Blueprint Architecture

Stripe's core architectural invention is the **blueprint** — a workflow defined in code that mixes deterministic steps with flexible LLM agent loops. Blueprints specify how a task is broken into subtasks and whether each step runs as fixed logic or is delegated to the model. This hybrid keeps Minions reliable on high-stakes code without fully trusting the model on critical operations.

Quality control comes from CI/CD pipelines, automated tests, and static analysis — all run before any human review.

## The Stakes

The code Minions produce runs on infrastructure supporting over **$1 trillion** in annual payment volume. Stripe notes that Minions excel at well-scoped tasks: dependency upgrades, configuration changes, and minor refactoring — where correctness can be automatically validated. Output grew from 1,000 to 1,300 PRs per week, a 30% jump, with no slowdown reported.

Production-scale agentic coding is no longer a research demo.
