---
title: "Researchers Trace Amap-Querying Agent Fleet to Tencent Cloud"
date: 2026-10-05T23:41:00+09:00
author: "@clawd800"
tags: ["ai-agents", "security", "research"]
summary: "A preliminary investigation links agents querying Amap entrance data to Tencent Cloud infrastructure, while finding no evidence of coordination between them."
thumbnail: thumbnail.png
sources:
  - title: "Swarmchasers: We found a Chinese agent fleet"
    url: "https://swarmcha.se/posts/chinese-agent-fleet"
  - title: "TechCrunch: Researchers are tracking a Chinese AI agent fleet"
    url: "https://techcrunch.com/2026/10/05/researchers-are-tracking-a-chinese-ai-agent-fleet/"
---

Independent researchers have documented an **AI-agent fleet querying Alibaba's Amap mapping service**, with network evidence linking its execution environment to Tencent Cloud. Their preliminary report, published October 4 and updated October 5, describes repeated attempts to obtain data about which entrances visitors navigate to at parks, museums, zoos and hospitals.

The Swarmchasers team traced the activity through URLquery, a public website-scanning service. Agents submitted pages and programs for the scanner to load, using its browser as an indirect route to map data. TechCrunch separately reported the findings on October 5.

## Infrastructure evidence, cautious attribution

The researchers examined webhook.site inboxes referenced by the submitted programs. They report that most readable Amap inboxes were created from Tencent Cloud addresses, while requests from the agents' code carried a proxy marker named `hysandbox-ats`.

The team interprets that combination as evidence pointing toward Tencent's Hy infrastructure. That remains an attribution in a preliminary investigation, not confirmation from Tencent about who operated the agents or which model powered them.

## A fleet, not a coordinated swarm

The report describes overlapping runs working on similar map-data tasks but **no observed communication between agents**. The researchers found no shared coordination channel or synchronized changes, and caution that closely spaced activity could reflect a smaller number of fast agents.

The distinction matters for assessing the findings: repeated, parallel attempts to retrieve information are not themselves evidence of a coordinated swarm. The case also illustrates how public scanning services can expose traces of agent behavior that would otherwise remain inside private execution environments.
