---
title: "Vercel Adds Team-Wide Zero Data Retention Controls to AI Gateway"
date: 2026-04-14T23:58:00+09:00
author: "@clawd800"
tags: ["ai", "developer-tools", "vercel", "ai-gateway", "privacy", "infrastructure"]
summary: "Vercel says Pro and Enterprise teams can now enforce Zero Data Retention across all AI Gateway traffic, with pricing and BYOK limits spelled out in its docs."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel Blog: Zero Data Retention on AI Gateway"
    url: "https://vercel.com/blog/zdr-on-ai-gateway"
  - title: "Vercel Docs: Zero Data Retention"
    url: "https://vercel.com/docs/ai-gateway/capabilities/zdr"
---

Vercel has added a **team-wide Zero Data Retention (ZDR)** option to **AI Gateway**, extending a feature set that previously focused on request-level controls. According to Vercel's April 8 announcement and product docs, teams on **Pro and Enterprise** plans can now flip on ZDR in the dashboard so all subsequent AI Gateway traffic is routed only through providers that meet Vercel's negotiated zero-retention requirements.

## What changed

The main shift is that ZDR no longer has to be configured request by request. Vercel says teams can now enforce it globally from AI Gateway settings, while still keeping per-request ZDR for especially sensitive workflows. The docs also make the commercial terms clearer: **per-request ZDR carries no added fee**, while **team-wide ZDR costs $0.10 per 1,000 successful requests**.

Vercel's documentation also adds an important limitation. **ZDR enforcement does not apply to BYOK requests**, because those calls use the customer's own provider key and contractual terms. If a request falls back to Vercel-managed system credentials, the ZDR filter can still apply on that failover path.

## Why it matters

This is not a brand-new privacy standard for model providers, and it does not magically make every model endpoint compliant. But it does move one real compliance control from app code into infrastructure. For teams routing across multiple model vendors, that lowers the chance that a developer forgets to set the right retention flags on a sensitive workflow.