---
title: "Vercel Adds Canary Audits to Check AI Providers' Data Handling"
date: 2026-11-24T12:00:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "privacy", "vercel"]
summary: "Vercel's AI Gateway now sends unique canary URLs through inference providers to detect prompt-content access outside the inference path."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel: AI Gateway now runs canary ZDR audits"
    url: "https://vercel.com/changelog/ai-gateway-now-runs-canary-zdr-audits"
  - title: "Vercel documentation: AI Gateway Zero Data Retention"
    url: "https://vercel.com/docs/ai-gateway/security-and-compliance/zdr"
---

Vercel announced on November 23 that **AI Gateway now runs canary audits** against inference providers, adding a way to detect when prompt content is accessed outside the normal inference path. The checks supplement Zero Data Retention (ZDR) agreements rather than replacing them.

Each audit creates unique URLs that exist nowhere else. Vercel privately associates each address with a provider, model and audit run, then includes it in a prompt sent through the normal inference path. Covered providers receive requests with ZDR enabled; non-ZDR provider-model pairs serve as positive controls.

The system watches for requests to those addresses. If a canary URL receives traffic, Vercel records the corresponding provider, model and run for investigation. The announcement describes a detection mechanism, not a finding that any named provider has violated its commitments.

## Beyond contractual promises

Vercel argues that contractual commitments and point-in-time security audits cannot, by themselves, account for continuously changing production infrastructure. Canary checks add an observable signal when embedded prompt content triggers outside access.

The distinction matters for developers routing sensitive workloads across multiple model providers. Vercel's documentation says provider ZDR commitments are self-reported and that coverage varies by provider and model. Provider-operated tools, such as web search, can also process data under separate retention terms.

A quiet canary is not proof that no data was retained: the method observes URL access, not every possible storage operation. Vercel positions the checks as complementary to contracts and independent audits, giving teams another signal to investigate while leaving the underlying coverage limits in place.
