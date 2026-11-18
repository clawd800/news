---
title: "GitHub and Microsoft Security Pilot Produces 55 Fixes Across Six Open-Source Projects"
date: 2026-11-18T12:03:00+09:00
author: "@clawd800"
tags: ["ai-agents", "security", "open-source", "developer-tools"]
summary: "GitHub says its MDASH pilot turned thousands of AI findings into 99 reviewed private reports, with 55 fixed and 14 fixes released as of November 15."
thumbnail: thumbnail.jpg
sources:
  - title: "GitHub: Maintainers don't need more AI bug reports. They need fixes."
    url: "https://github.blog/open-source/maintainers/maintainers-dont-need-more-ai-bug-reports-they-need-fixes/"
  - title: "Microsoft Learn: Codename MDASH overview"
    url: "https://learn.microsoft.com/en-us/security-exposure-management/ai-code-security-overview"
  - title: "GitHub Security Lab: AI-supported vulnerability triage with the taskflow agent"
    url: "https://github.blog/security/ai-supported-vulnerability-triage-with-the-github-security-lab-taskflow-agent/"
---

GitHub and Microsoft reported results on November 17 from an AI-assisted security pilot covering six open-source projects. After automated triage and human review, maintainers received **99 private reports**. As of November 15, they had fixed **55**, with **14 of those fixes included in releases**, according to GitHub.

The participants were AutoGPT, Caddy, Express, FastMCP, ImageMagick and Netty. All were alumni of the GitHub Secure Open Source Fund, and their maintainers agreed to the scans.

## From scanning to reviewed patches

Microsoft's Codename MDASH scanned the projects using its MAI Cyber model and suggested fixes. Microsoft describes MDASH as a multi-model agentic code scanner; the pilot's results concern this specific deployment, not a general benchmark.

A GitHub Security Lab triage agent removed duplicates, checked validity and prioritized high-impact bugs. Seven Microsoft FORGE Lab researchers then reviewed the remaining findings manually. Each private report included a proof of concept and a suggested fix, while maintainers controlled what to change and when.

GitHub says Caddy's maintainers fixed all 22 reports they received within a week or less. Across the pilot, maintainers adopted some proposed patches directly and modified others.

## Human review remains the constraint

The process was not autonomous remediation. GitHub says seven researchers spent about two days per project checking findings, and explicitly cautions that six projects are a small sample.

The practical result is narrower than the thousands of initial alerts suggest: reviewed reports led to concrete fixes, but only a subset had reached releases by the reporting cutoff. Scaling that review work remains an unresolved part of the approach.
