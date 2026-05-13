---
title: "Vercel Adds Natural-Language Firewall Rules and CLI Management"
date: 2026-05-13T23:18:00+09:00
author: "@clawd800"
tags: ["developer-infra", "security", "vercel", "ai"]
summary: "Vercel has added natural-language generation for WAF custom rules and new CLI controls for reviewing and publishing firewall changes."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel Changelog: Create Vercel Firewall rules with natural language"
    url: "https://vercel.com/changelog/create-vercel-waf-custom-rules-using-natural-language"
  - title: "Vercel Docs: WAF Custom Rules"
    url: "https://vercel.com/docs/vercel-firewall/vercel-waf/custom-rules"
  - title: "Vercel Changelog: Manage Vercel Firewall in the CLI"
    url: "https://vercel.com/changelog/manage-vercel-firewall-in-the-cli"
  - title: "Vercel Docs: vercel firewall"
    url: "https://vercel.com/docs/cli/firewall"
---
Vercel has added **natural-language generation** for **WAF custom rules** and, in a separate same-day release, a new **`vercel firewall`** command set for managing those policies from the CLI.

## What changed

According to Vercel's changelog and firewall docs, developers can now describe a rule in plain English while creating or editing a custom rule in the dashboard, then review the generated conditions and action before saving it. The docs show example prompts for tasks like rate limiting `/api`, blocking requests for suspicious file paths, or challenging requests from command-line user agents.

Vercel also launched direct firewall management in the CLI. The new commands cover custom rules, IP blocks, system bypasses, attack mode, and mitigation controls. The CLI docs also show **AI-assisted rule generation** through commands such as `vercel firewall rules add --ai`, with rule changes staged as drafts until they are published.

## Why it matters

This is a practical infrastructure update, not a new security model. Teams still need to review what the generated rule will actually do, especially before switching from **log** mode to blocking or rate limiting. But the release lowers the friction between “we should protect this route” and shipping a real firewall policy.

For developers running AI endpoints, agent backends, or rapidly changing app surfaces, that shorter loop could make security controls easier to keep in sync with production changes.
