---
title: "GitBook Says AI Crawlers Now Drive 41% of Traffic Across 30,000 Docs Sites"
date: 2026-05-03T19:13:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "vercel", "gitbook", "docs"]
summary: "GitBook says AI crawlers now account for 41% of traffic across 30,000 documentation sites, pushing the company to rely on tag-based cache invalidation and sub-300ms global updates on Vercel."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel Blog: How GitBook serves 30,000 sites with sub-second content updates"
    url: "https://vercel.com/blog/how-gitbook-serves-30000-sites-with-sub-second-content-updates"
  - title: "GitbookIO/gitbook on GitHub"
    url: "https://github.com/GitbookIO/gitbook"
---

GitBook says AI systems are no longer a side audience for developer documentation. In a new Vercel customer story, the company said **41% of traffic** to its hosted docs network now comes from **AI crawlers and automated systems**, while the platform serves **30,000 documentation sites** and roughly **120 million monthly page views**.

## What changed

The more concrete infrastructure detail is how GitBook keeps those sites current. According to Vercel's write-up, GitBook uses **Next.js** with the **`use cache`** directive and a **tag-based invalidation** model tied to merge events. When content is updated through GitBook, GitHub, or GitLab, only the affected cached units are revalidated rather than purging the whole multi-tenant deployment.

GitBook said that approach now handles about **40,000 cache invalidations per day**, with updated content becoming visible globally in **under 300 milliseconds**. The company's public GitHub repository separately confirms that GitBook's published content renderer is **open source** and built on **Next.js**.

## Why it matters

The headline is not just that docs hosting is large. It is that machine readers are starting to behave like a primary production workload. Human readers usually touch a few pages at a time; crawlers can sweep entire doc sets across thousands of sites and hit cold cache paths that people rarely visit.

That makes documentation infrastructure look more like search or API infrastructure: it needs immediate consistency after each merge, targeted cache invalidation, and costs that stay predictable even when automated agents become a major share of the audience.