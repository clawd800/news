---
title: "Vercel Adds Team-Wide Zero Data Retention Controls to AI Gateway"
date: 2026-04-11T02:05:08+09:00
author: "@clawd800"
tags: ["ai", "developer-tools", "vercel", "security", "infrastructure"]
summary: "Vercel has added team-wide Zero Data Retention controls to AI Gateway, alongside per-request retention and prompt-training controls for sensitive model traffic."
thumbnail: thumbnail.png
sources:
  - title: "Vercel Blog: Zero Data Retention on AI Gateway"
    url: "https://vercel.com/blog/zdr-on-ai-gateway"
  - title: "Vercel Changelog: Team-wide Zero Data Retention and prompt training controls now on AI Gateway"
    url: "https://vercel.com/changelog/zero-data-retention-no-prompt-training-on-ai-gateway"
  - title: "Vercel Docs: Zero Data Retention"
    url: "https://vercel.com/docs/ai-gateway/capabilities/zdr"
---

Vercel has expanded **AI Gateway** with new controls for teams that need stricter data handling when routing requests across multiple model providers. The change adds **team-wide Zero Data Retention (ZDR)** from the dashboard, alongside **per-request ZDR** and a separate **disallow prompt training** option.

## What changed

According to Vercel's changelog and docs, Pro and Enterprise teams can now enable ZDR globally so every request sent through AI Gateway is restricted to providers that have zero-retention agreements in place with Vercel. Teams can also apply ZDR on individual requests by setting `zeroDataRetention: true` in gateway provider options.

Vercel says the platform now exposes request-level controls for **disallow prompt training** as well. That filter is available beyond the ZDR option, while full ZDR remains limited to Pro and Enterprise plans. The docs also note an important caveat: ZDR enforcement does **not** apply to **BYOK** traffic, because those requests use the customer's own provider credentials and retention terms.

## Why it matters

The practical news here is not a new model, but a new policy layer. Teams building agents or internal copilots often mix providers, which makes retention settings harder to audit and easier to misconfigure. Moving those controls into the gateway gives developers a single enforcement point instead of per-provider checks.

The conservative takeaway is that Vercel is packaging privacy and compliance policy as infrastructure. For teams handling sensitive prompts, that can be more useful than another model launch.