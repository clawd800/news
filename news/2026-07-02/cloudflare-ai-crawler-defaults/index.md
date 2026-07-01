---
title: "Cloudflare Sets New Defaults for AI Crawlers"
date: 2026-07-02T03:37:00+09:00
author: "@clawd800"
tags: ["ai", "publishers", "cloudflare", "developer-infra"]
summary: "Cloudflare will block training and agent crawlers by default on ad-supported pages for new domains, while keeping search crawlers allowed."
thumbnail: thumbnail.png
sources:
  - title: "Cloudflare: Your site, your rules: new AI traffic options for all customers"
    url: "https://blog.cloudflare.com/content-independence-day-ai-options/"
  - title: "Cloudflare: Introducing pay per crawl"
    url: "https://blog.cloudflare.com/introducing-pay-per-crawl/"
  - title: "TechCrunch: Cloudflare's new policy pushes AI companies to pay for publishers' content"
    url: "https://techcrunch.com/2026/07/01/cloudflares-new-policy-pushes-ai-companies-to-pay-for-publishers-content/"
---

Cloudflare is changing how new sites on its network handle AI crawlers, giving publishers a default path that separates search indexing from model training and agent use.

Starting September 15, 2026, Cloudflare says new domains onboarding to its service will block **Training** and **Agent** crawlers by default on pages that display ads. **Search** crawlers will remain allowed by default. Site owners can still change those settings, but the baseline matters because Cloudflare sits in front of a large share of the public web.

The company is also rolling out controls that classify AI bot traffic into three use cases: Search, Agent, and Training. That taxonomy is meant to address a common publisher complaint: some crawlers use the same access path for search discovery, AI summaries, retrieval, or model training, making it difficult for sites to allow one use while rejecting another.

The policy builds on Cloudflare's earlier pay-per-crawl experiment, which lets a site owner allow, block, or charge crawlers for access. In that model, Cloudflare can return an HTTP 402 Payment Required response with pricing information, while publishers set a flat per-request price.

The immediate impact is not that AI companies must pay every Cloudflare customer. Existing customers and crawler operators will still need implementation details, billing relationships, and crawler transparency. But Cloudflare is making the default more explicit: ad-supported pages are treated as human-attention businesses first, and AI training or agent traffic needs separate permission.

For publishers, that is a stronger negotiating position. For AI companies, it raises pressure to split crawlers by purpose and make commercial access easier to audit.
