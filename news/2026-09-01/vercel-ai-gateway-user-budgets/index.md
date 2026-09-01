---
title: "Vercel Adds Per-User Budgets to AI Gateway"
date: 2026-09-01T15:37:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "ai-gateway"]
summary: "Vercel added AI Gateway budget controls that cap spending by individual team member across attributed API keys and app tokens."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel Changelog: Set per-user budgets on AI Gateway"
    url: "https://vercel.com/changelog/set-per-user-budgets-on-ai-gateway"
  - title: "Vercel Docs: AI Gateway budgets"
    url: "https://vercel.com/docs/ai-gateway/observability-and-spend/budgets"
---

Vercel has added per-user spending limits to AI Gateway, extending its budget controls beyond team, project, and API key scopes. The feature lets teams cap the dollars that an individual member can spend through attributed API keys and app tokens, with AI Gateway rejecting new requests once an applicable limit is reached.

The change is aimed at a practical problem for agent-heavy development teams: coding agents and automated workloads can run for long periods without a person watching every request. A user-level cap gives owners a way to stop one member's keys or agent sessions from consuming a shared team budget.

Vercel says teams can set a default user budget that applies separately to every member without a custom limit, including users added later. Owners can also set a custom budget for a specific member, which overrides the default. Budgets reset monthly by default, but can be configured for daily, weekly, monthly, or no automatic reset. Custom budgets can send email alerts at 50%, 75%, or 100% of the allocation.

The docs describe the limits as stacked rather than substitutive. A request must fit within every budget that applies to it, such as team, API key, and user budgets. Bring Your Own Key provider credentials do not count toward user budgets, and API keys created before the release remain attributed to the team for compatibility unless rotated or reassigned.
