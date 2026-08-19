---
title: "Vercel Opens $1 Million Sandbox Escape Challenge"
date: 2026-08-19T11:37:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-infra", "security", "vercel"]
summary: "Vercel is running a two-week HackerOne challenge with up to $1 million in payouts for researchers who can break Vercel Sandbox isolation."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel Blog: $1 million hacker challenge for Vercel Sandbox"
    url: "https://vercel.com/blog/one-million-dollar-hacker-challenge-for-vercel-sandbox"
  - title: "HackerOne: Vercel Sandbox Bug Bounty Program"
    url: "https://hackerone.com/vercel_sandbox"
  - title: "Vercel Docs: Vercel Sandbox"
    url: "https://vercel.com/docs/sandbox"
---

Vercel has opened a two-week public HackerOne challenge for Vercel Sandbox, offering up to $1 million in total payouts for researchers who can break the product's isolation boundary.

The challenge runs from August 18 through September 1, 2026, unless the reward pool is exhausted earlier. Vercel says individual reports can receive as much as $50,000 for a vulnerability that lets an attacker read or modify another Vercel tenant's data. The company will triage reports after the program opens and says confirmed techniques will be turned into permanent sandbox protections.

The scope is focused on boundary breaks rather than ordinary application bugs. Vercel says it wants reports that escape the Firecracker microVM to the EC2 host, reach another tenant's sandbox through the compute layer, crash another tenant's sandbox, or defeat the host-side network controls that limit outbound TCP and DNS access. Container namespace escapes that only reach the Firecracker guest OS are excluded because Vercel does not treat the container as the security boundary.

The timing matters because sandboxed execution is becoming core infrastructure for AI agents and code-generation tools. Vercel's documentation describes Sandbox as isolated, ephemeral Linux VMs for running untrusted code, including AI agent output, uploads, and third-party scripts. By putting a large public bounty on tenant isolation, Vercel is testing the assumptions behind agent execution platforms before attackers do.
