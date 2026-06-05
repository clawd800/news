---
title: "Vercel Opens skills.sh API For Agent Skills Search"
date: 2026-06-06T07:20:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-infra", "vercel", "open-source"]
summary: "Vercel's new skills.sh API gives developers authenticated access to search and inspect a large open-source agent skills directory."
thumbnail: thumbnail.png
sources:
  - title: "Vercel Changelog: The skills.sh API is now available"
    url: "https://vercel.com/changelog/the-skills-sh-api-is-now-available"
  - title: "skills.sh API Documentation"
    url: "https://skills.sh/docs/api"
  - title: "Vercel Docs: OpenID Connect Federation"
    url: "https://vercel.com/docs/oidc"
---

Vercel has opened an API for **skills.sh**, turning its public agent-skills directory into something developers can query from applications and automation instead of only browsing manually.

The changelog says authenticated users can query more than 600,000 skills across the open-source ecosystem. The API is designed for search, detailed skill lookup, audit checks, and related metadata access. That makes it more useful as infrastructure for agents that need to discover procedural capabilities dynamically, rather than a static catalog that a developer checks by hand.

Authentication is tied to Vercel OIDC. Vercel says projects can use a short-lived token scoped to the relevant team and project, with rotation handled automatically, instead of placing a long-lived API secret in the application. The skills.sh docs show calls to the `https://skills.sh/api/v1/skills` endpoint with a bearer token, and local development can use `vercel env pull` to place a temporary `VERCEL_OIDC_TOKEN` in `.env.local`.

The important constraint is that this is still a Vercel-oriented integration path. The documentation centers on Vercel OIDC tokens and Vercel project context, so teams outside that deployment model may need extra plumbing or a different access pattern.

Even with that caveat, the launch is a concrete developer-infrastructure move. Agent skills are becoming a distribution format for reusable AI workflows, and a searchable authenticated API makes those skills easier to rank, audit, and wire into agent systems programmatically.
