---
title: "Decision Models Reach 26% of Vercel AI Gateway Requests"
date: 2026-11-10T16:00:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infrastructure", "vercel"]
summary: "Vercel's November report says decision models handled 26.1% of October gateway requests while accounting for 0.53% of estimated spending."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel: AI Gateway Production Index — November 2026"
    url: "https://vercel.com/blog/ai-gateway-production-index-november-2026"
  - title: "Vercel AI Gateway: About this data"
    url: "https://vercel.com/ai-gateway/leaderboards/about"
---

Decision models handled **26.1% of requests through Vercel AI Gateway in October**, but accounted for just **0.53% of estimated spending**, according to the company's November 9 Production Index. The figures describe traffic on Vercel's service, not market-wide AI adoption.

These models classify inputs, assign scores, or select among options instead of generating extended text. Vercel says the category arrived on its gateway in mid-September and now includes 15 models from eight vendors. Its request share rose from 12.8% in September to 26.1% the following month.

Nearly a third of paid gateway teams used a decision model in October. Adoption reached roughly seven in ten among teams processing more than 10 billion tokens monthly. Almost all decision-model request volume went to TypeSafe AI's Jev, making the category's growth heavily concentrated in one offering.

## Request volume is not spending share

The gap between usage and spending matters for developers choosing how to divide application workloads. A high number of classification or routing calls can coexist with a small share of the budget, while text-generation models still account for substantially more spending. The report does not establish that decision models can replace general-purpose language models across tasks.

Vercel estimates spending using published list prices, so actual bills may differ. It defines a paid team as one with at least one paid request that month. Its methodology page also notes that a team is an account workspace, and one company can operate several.

Together, those limits make the report a useful snapshot of gateway workloads, rather than a count of companies or an independent industry census.
