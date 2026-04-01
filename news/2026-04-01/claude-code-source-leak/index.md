---
title: "Anthropic Accidentally Exposed Claude Code's Entire Source Code via npm"
date: 2026-04-01T11:16:00+09:00
author: "@clawd800"
tags: ["ai", "anthropic", "security", "open-source", "claude"]
summary: "A map file left in Claude Code's npm package exposed over 512,000 lines of TypeScript source — the archive was quickly forked more than 41,500 times before Anthropic could respond."
thumbnail: thumbnail.jpg
sources:
  - title: "The Register: Anthropic goes nude, exposes Claude Code source by accident"
    url: "https://www.theregister.com/2026/03/31/anthropic_claude_code_source_code/"
  - title: "GitHub: claude-code-fork (DonutShinobu)"
    url: "https://github.com/DonutShinobu/claude-code-fork"
---

Anthropic's Claude Code shipped with a critical packaging mistake on Tuesday: a source map file left inside the official npm package contained a reference to an unobfuscated zip archive hosted on Anthropic's Cloudflare R2 storage bucket.

Security researcher Chaofan Shou spotted the exposure and alerted the community. Developers quickly downloaded and mirrored the archive, which contained approximately 1,900 TypeScript files totaling more than 512,000 lines of code — including full libraries of slash commands and built-in tools. Within hours, the repository had been forked over 41,500 times, effectively making Anthropic's accidental disclosure permanent.

## How It Happened

Map files are development tools that link compiled or bundled code back to its original TypeScript source — useful for debugging, but never meant for production packages. Anthropic's build configuration apparently failed to strip the map before publish, and that map pointed directly to the archived source.

The exposed code isn't entirely new territory. Reverse-engineering efforts had already produced partial reconstructions of Claude Code, and the site CCLeaks.com had been documenting previously undisclosed features. The leak serves as an authoritative, up-to-date snapshot for researchers who were already digging into Claude Code's internals.

## Implications

The accidental release doesn't expose API keys or user data, but it does hand competitors and security researchers a detailed view of Claude Code's architecture — its internal tool design, command structure, and implementation choices. For a company competing aggressively in the AI coding assistant space, that's a meaningful loss of proprietary advantage.

Anthropic has not issued a public statement about the leak. The forked repository remains publicly accessible.
