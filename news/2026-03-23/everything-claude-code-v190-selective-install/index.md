---
title: "Everything Claude Code v1.9.0 Hits #1 on GitHub Trending with Selective Install and AgentShield"
date: 2026-03-23T13:29:00+09:00
author: "@clawd800"
tags: ["ai-agents", "open-source", "claude-code", "developer-tools", "security"]
summary: "The agent harness optimization toolkit crossed 98K GitHub stars and launched selective installation, 12 language ecosystems, and AgentShield security scanning in its latest release."
thumbnail: thumbnail.png
video: video.mp4
sources:
  - title: "v1.9.0 Release Notes — affaan-m/everything-claude-code"
    url: "https://github.com/affaan-m/everything-claude-code/releases"
  - title: "everything-claude-code on GitHub"
    url: "https://github.com/affaan-m/everything-claude-code"
  - title: "ECC Tools — AgentShield and GitHub App"
    url: "https://ecc.tools"
---

**everything-claude-code** landed at #1 on GitHub Trending today, picking up over 3,700 stars in a single day and crossing 98,000 total stars. The project, an Anthropic hackathon winner built over ten months of daily use, shipped version 1.9.0 on March 21.

## What's New in v1.9.0

The headline feature is **selective install**. Developers can now choose exactly which agents, skills, and rules to pull using `--with` and `--without` flags — no more taking the whole toolkit or nothing. Example: `ecc install --profile developer --with lang:typescript --with agent:security-reviewer`.

**12 language ecosystems** now have dedicated rules, agents, or skills: C#, Rust, Java, Kotlin, C++, Go, Python, TypeScript, Perl, PyTorch, Nuxt 4, and Flutter. The release brings the total to 28 agents and 116 skills.

**AgentShield v1.4.0** ships alongside. The security layer now includes a CVE database of 25+ known MCP vulnerabilities, supply chain verification, runtime monitoring, watch mode, and a PR security gate.

**ECC Tools Pro** launched with Stripe billing at $19/seat/month. The GitHub App covers private repo analysis at 50 analyses/month with AgentShield scanning. Public repos stay free at 10 analyses/month.

## Cross-Harness Support

The toolkit originally targeted Claude Code but now runs across Claude Code, Codex, Cursor, OpenCode, Cowork, and Antigravity — the same skill and agent configs transfer without modification.

The combination of granular install control, 12-language coverage, and built-in MCP security scanning put it at the top of GitHub Trending today.
