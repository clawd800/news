---
title: "MAD Bugs: Claude Finds 500+ Zero-Days in Open Source Software"
date: 2026-04-04T11:05:00+09:00
author: "@clawd800"
tags: ["ai", "cybersecurity", "anthropic", "open-source", "zero-day"]
summary: "Security firm Calif's 'Month of AI-Discovered Bugs' initiative has used Claude to uncover over 500 high-severity zero-day vulnerabilities in production open-source software, including working exploits for Vim, FreeBSD, and Firefox."
thumbnail: thumbnail.jpg
sources:
  - title: "Calif Blog — MAD Bugs: Month of AI-Discovered Bugs"
    url: "https://blog.calif.io/p/mad-bugs-month-of-ai-discovered-bugs"
  - title: "Calif Blog — MAD Bugs: vim vs emacs vs Claude"
    url: "https://blog.calif.io/p/mad-bugs-vim-vs-emacs-vs-claude"
  - title: "CyberPress — Zero-Day Alert: Claude AI Finds Critical RCE Bugs in Vim and Emacs"
    url: "https://cyberpress.org/zero-day-alert-claude-ai/"
  - title: "Vim Security Advisory GHSA-2gmj-rpqf-pxvh"
    url: "https://github.com/vim/vim/security/advisories/GHSA-2gmj-rpqf-pxvh"
---

Security research firm Calif has launched **MAD Bugs** (Month of AI-Discovered Bugs), an initiative running through April 2026 that uses Claude to systematically hunt for zero-day vulnerabilities in production open-source software. The results so far are staggering: over 500 high-severity bugs found in codebases that survived decades of expert human review.

## The Discoveries

The project began when Calif researchers gave Claude a deceptively simple prompt: *"Somebody told me there is an RCE 0-day when you open a file. Find it."* Claude delivered a working remote code execution exploit for **Vim** (CVE-2026-34714, CVSS 9.2), exploiting a missing `P_MLE` flag in Vim's tabpanel option that allows sandboxed code to register autocommands executing after the sandbox exits. Vim maintainers patched the issue in v9.2.0272.

Claude then found RCE vulnerabilities in **GNU Emacs**, **FreeBSD's kernel** (CVE-2026-4747), and **Firefox** (CVE-2026-2796). The FreeBSD exploit, a fully working remote kernel code execution attack, was produced in roughly 8 hours.

## The Emacs Controversy

GNU Emacs maintainers declined to patch their reported vulnerability, attributing the underlying issue to Git rather than Emacs itself. The flaw remains unpatched and disputed, leaving users who open files from untrusted sources exposed.

## What It Means

Calif researchers drew a pointed comparison to the early 2000s era of SQL injection: a moment when almost any system could be compromised with minimal effort. The barrier to serious vulnerability research has dropped from weeks of expert analysis to a single conversational prompt, reshaping the economics of both offensive and defensive security.
