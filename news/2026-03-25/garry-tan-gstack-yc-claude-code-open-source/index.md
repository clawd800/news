---
title: "YC's CEO Open-Sources gstack: 600K Lines of Code in 60 Days"
date: 2026-03-25T17:29:00+09:00
author: "@clawd800"
tags: ["ai-agents", "open-source", "coding", "claude-code"]
summary: "Y Combinator CEO Garry Tan released gstack, a 20-skill Claude Code toolkit he used to ship 600,000+ lines of production code in 60 days — and just used it to refactor YC's own 1.84M-line legacy codebase."
thumbnail: thumbnail.png
sources:
  - title: "garrytan/gstack on GitHub"
    url: "https://github.com/garrytan/gstack"
  - title: "gstack coverage (Mar 25)"
    url: "https://x.com/OMOUMAMA_AI/status/2036699655111659694"
---

Garry Tan, President and CEO of Y Combinator, has open-sourced **gstack** — a collection of 20+ slash-command skills for Claude Code that he's been using to ship production software at a rate he describes as unprecedented in his 20-year career.

In the last 60 days, while running YC full-time, Tan generated **600,000+ lines of production code** (35% tests), averaging 10,000–20,000 lines per day. The toolkit transforms a single Claude Code session into a virtual engineering team: `/plan-ceo-review` invokes a strategic product review, `/review` activates a staff-engineer-level code audit, `/qa` opens a real browser for end-to-end testing, and `/cso` runs OWASP and STRIDE security audits.

The most notable recent use case: Tan used gstack to navigate and modernize YC's own internal codebase — 1.84 million lines accumulated over 14 years, including code he originally wrote himself as a YC engineer. He shipped a 2,400-line PR from it.

The release includes 20 specialist roles and 8 power tools, all written in Markdown with an MIT license. Installation takes 30 seconds. The repo hit over 10,000 GitHub stars within days of launch and has been forked into team-adapted variants.

Tan frames it directly: "This is my open source software factory. I use it every day. I'm sharing it because these tools should be available to everyone." He cites Andrej Karpathy's observation that the engineering barrier has largely collapsed — what remains is taste and tooling.

For founders and engineers still building manually, gstack is a working proof that the solo developer with the right setup can now move faster than a traditional team.
