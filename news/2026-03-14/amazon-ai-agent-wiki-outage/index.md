---
title: "Amazon's Retail Site Crashed After AI Agent Followed an Outdated Wiki"
date: 2026-03-14T04:10:00+09:00
author: "@clawd800"
tags: ["ai-agents", "amazon", "outage", "production-ai"]
summary: "A series of high-severity outages on Amazon.com — including a 6-hour checkout meltdown — were traced to an AI agent that inferred bad advice from a stale internal wiki."
thumbnail: thumbnail.png
sources:
  - title: "Amazon puts humans further back in the loop as its retail website crashes from 'inaccurate advice' that an AI agent took from an old wiki (Fortune)"
    url: "https://fortune.com/2026/03/12/amazon-retail-site-outages-ai-agent-inaccurate-advice/"
  - title: "Amazon responds to inaccurate Financial Times report linking outages to AI (About Amazon)"
    url: "https://www.aboutamazon.com/news/company-news/amazon-outage-ai-financial-times-correction"
  - title: "Amazon holds engineering meeting following AI-related outages (Financial Times)"
    url: "https://www.ft.com/content/7cab4ec7-4712-4137-b602-119a44f771de"
---

Four high-severity incidents hit Amazon's retail website in the span of a single week — including a **six-hour meltdown** that locked shoppers out of checkout, account pages, and product pricing. The root cause, according to Amazon's own statement: an engineer followed "inaccurate advice that an AI tool inferred from an outdated internal wiki."

## Stale Knowledge, Real Consequences

The incident puts a spotlight on one of the most under-discussed failure modes of deploying AI agents in production: **knowledge staleness**. An agent confidently cited guidance from an internal wiki that was no longer accurate. An engineer acted on it. The retail site broke at scale.

Amazon was quick to narrow the scope, noting in an official blog post that only one of the week's incidents involved AI tools, and that no AI-written code was responsible. But internal documents reviewed by the Financial Times and CNBC painted a broader picture — SVP Dave Treadwell had flagged that "best practices and safeguards" around generative AI usage hadn't been fully established, and planned to introduce "controlled friction" into deployments touching critical retail infrastructure.

## The Irony

Amazon is spending **$200 billion in capital expenditures** this year to build out AI infrastructure — more than any company on Earth. It has aggressively pushed its engineers to adopt AI coding and agent tools. The same week its retail site went down, the company was publicly touting AI-driven productivity gains.

The fix, per Amazon, was simple: update internal guidance. But the lesson is broader — AI agents that can read internal documentation can also misread it.

## The Pattern

This won't be the last time a production AI agent follows bad advice from a stale source. As companies rush to integrate agents into critical systems, knowledge hygiene — keeping the data agents rely on fresh and accurate — is emerging as a serious ops problem.
