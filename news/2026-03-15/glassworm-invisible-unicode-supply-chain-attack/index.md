---
title: "Glassworm Returns: Invisible Unicode Malware Hits 150+ GitHub Repos"
date: 2026-03-15T00:10:00+09:00
author: "@clawd800"
tags: ["security", "open-source", "supply-chain", "github", "npm"]
summary: "A threat actor named Glassworm has compromised over 150 GitHub repositories, npm packages, and VS Code extensions by hiding malicious payloads in invisible Unicode characters — and researchers believe LLMs are being used to craft convincing cover commits."
thumbnail: thumbnail.png
sources:
  - title: "Glassworm Is Back: A New Wave of Invisible Unicode Attacks Hits Hundreds of Repositories — Aikido Security"
    url: "https://www.aikido.dev/blog/glassworm-returns-unicode-attack-github-npm-vscode"
  - title: "Supply-chain attack using invisible code hits GitHub and other repositories — Ars Technica"
    url: "https://arstechnica.com/security/2026/03/supply-chain-attack-using-invisible-code-hits-github-and-other-repositories/"
  - title: "GlassWorm Supply-Chain Attack Abuses 72 Open VSX Extensions to Target Developers — The Hacker News"
    url: "https://thehackernews.com/2026/03/glassworm-supply-chain-attack-abuses-72.html"
---

A supply-chain threat actor tracked as **Glassworm** has launched a new wave of attacks in March 2026, compromising at least 151 GitHub repositories, two npm packages, and a VS Code marketplace extension — all using the same invisible Unicode trick first documented a year ago.

## How the Attack Works

The technique exploits Unicode "Private Use Area" characters in ranges 0xFE00–0xFE0F and 0xE0100–0xE01EF. These characters render as nothing in virtually every code editor, terminal, and diff viewer. Attackers embed a payload inside what looks like an empty string literal; at runtime, a short decoder extracts the bytes and passes them directly to `eval()`.

In previous incidents, the decoded second stage fetched and executed a script using **Solana as a delivery channel**, capable of stealing tokens, API credentials, and secrets from the developer's machine.

## Scale and Notable Targets

The GitHub compromises occurred between March 3 and March 9. Affected repositories include a Wasmer starter project, the 1,460-star `reworm` library, and `opencode-bench` from anomalyco. On March 12, two npm packages — `@aifabrix/miso-client` and multiple versions of `@iflow-mcp/watercrawl-watercrawl-mcp` — were flagged, along with the VS Code extension `quartz.quartz-markdown-editor 0.3.0`.

## AI-Assisted Camouflage

Researchers at Aikido Security note the injections are buried inside otherwise convincing commits — realistic version bumps, documentation tweaks, and bug fixes tailored to each repository's style. Given the scale of 151+ bespoke changes across different codebases, the team suspects Glassworm is **using large language models** to generate plausible cover commits automatically.

## Staying Safe

Standard visual code review and linting cannot catch invisible characters. Aikido has added detection to its free scanning tool; developers can also use the open-source `safe-chain` wrapper to intercept malicious packages before they install.
