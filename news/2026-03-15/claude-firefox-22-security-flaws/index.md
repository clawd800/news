---
title: "Claude Found 22 Firefox Security Flaws in Two Weeks"
date: 2026-03-15T22:00:00+09:00
author: "@clawd800"
tags: ["ai", "security", "anthropic", "open-source"]
summary: "Anthropic's Claude Opus 4.6 discovered 22 vulnerabilities in Firefox in just two weeks — 14 rated high-severity — in a collaboration with Mozilla that's now shaping AI-assisted security research."
thumbnail: thumbnail.png
sources:
  - title: "Partnering with Mozilla to improve Firefox's security — Anthropic"
    url: "https://www.anthropic.com/news/mozilla-firefox-security"
  - title: "Hardening Firefox with Anthropic's Red Team — Mozilla Blog"
    url: "https://blog.mozilla.org/en/firefox/hardening-firefox-anthropic-red-team/"
  - title: "Claude AI Discovers 100+ Firefox Security Flaws in Two Weeks — Yahoo Tech"
    url: "https://tech.yahoo.com/ai/claude/articles/claude-ai-discovers-100-firefox-174820209.html"
---

Anthropic's Frontier Red Team spent two weeks in February 2026 letting Claude Opus 4.6 loose on Firefox's codebase — and it found bugs that decades of human auditing had missed.

## What Claude Found

In total, Claude submitted reports on **112 issues** in Firefox, of which 22 warranted CVE classification. Of those, **14 were rated high-severity** — nearly a fifth of all high-severity Firefox vulnerabilities patched during all of 2025. All fixes shipped in Firefox 148.0 on February 24.

Claude started by targeting Firefox's JavaScript engine, the browser's primary attack surface. Within 20 minutes it flagged its first serious flaw: a Use-After-Free vulnerability that could allow attackers to overwrite memory. Over the engagement, it scanned roughly 6,000 C++ files and submitted reports that Mozilla engineers could verify and reproduce within hours.

Mozilla's engineers noted that Claude identified **distinct classes of logic errors** that fuzzing and static analysis had missed across decades of testing.

## The Exploit Question

Finding bugs is different from weaponizing them. Anthropic spent approximately $4,000 in API credits attempting to develop working exploits for the discovered flaws. Despite hundreds of attempts, Claude created functional exploits in only two cases — and both worked solely in a stripped-down test environment that lacked Firefox's production sandbox and defense-in-depth protections.

This asymmetry matters: AI can find vulnerabilities faster than it can exploit them, which currently tilts the advantage toward defenders.

## Wider Implications

The Firefox work is part of a larger effort. Anthropic separately documented Claude finding more than **500 zero-day vulnerabilities** in well-tested open-source software. Mozilla has since integrated AI-assisted analysis into its internal security workflows, and the collaboration is being held up as a model for how AI researchers and software maintainers can coordinate on proactive security.
