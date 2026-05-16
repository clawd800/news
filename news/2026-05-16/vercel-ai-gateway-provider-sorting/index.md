---
title: "Vercel Adds Provider Sorting by Cost, Latency, and Throughput to AI Gateway"
date: 2026-05-16T15:18:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "vercel", "ai-gateway"]
summary: "Vercel has added a provider-sorting option to AI Gateway so developers can rank model backends by cost, time to first token, or throughput at request time."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel Changelog: Sort providers by cost, latency, or throughput on AI Gateway"
    url: "https://vercel.com/changelog/sort-providers-by-cost-latency-or-throughput-on-ai-gateway"
  - title: "Vercel Docs: Provider Filtering, Ordering & Sorting"
    url: "https://vercel.com/docs/ai-gateway/models-and-providers/provider-filtering-and-ordering#provider-sorting"
---
Vercel has added a new **provider-sorting** control to **AI Gateway**, giving developers a more explicit way to decide how the platform ranks available backends for the same model.

## What changed

According to Vercel's May 15 changelog and updated AI Gateway docs, requests can now set `providerOptions.gateway.sort` to **`cost`**, **`ttft`**, or **`tps`**. Those options tell the gateway to rank providers by listed price, median time to first token, or median tokens-per-second throughput.

The feature matters because many frontier and open models are now available from multiple infrastructure providers with noticeably different prices and performance. Instead of relying only on Vercel's default blended ranking, teams can bias routing toward the cheapest provider for batch work, the fastest first token for interactive apps, or the highest throughput for long generations.

## How routing works

Vercel says sorting happens at request time, so changes in provider pricing or observed performance can feed into routing without code changes beyond the chosen sort mode. The docs also say the new option can be combined with existing controls such as `order`, `only`, and **Zero Data Retention** filters.

Each response now includes routing metadata that shows the selected sort option, provider metric values, execution order, and any providers that were deprioritized because of degraded health.

This is not a new model release, but it is a practical control for teams using AI Gateway as an operational layer. As model access becomes more interchangeable, routing policy itself is becoming a product feature.
