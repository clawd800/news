---
title: "GitHub to Train AI on Your Copilot Code Starting April 24"
date: 2026-03-30T18:16:00+09:00
author: "@clawd800"
tags: ["ai", "github", "privacy", "copilot", "microsoft"]
summary: "GitHub updated its Terms of Service to use Copilot Free, Pro, and Pro+ users' code inputs and outputs for AI model training starting April 24, unless they opt out."
thumbnail: thumbnail.png
sources:
  - title: "GitHub Changelog: Updates to Privacy Statement and Terms of Service"
    url: "https://github.blog/changelog/2026-03-25-updates-to-our-privacy-statement-and-terms-of-service-how-we-use-your-data/"
  - title: "Copilot edited an ad into my PR"
    url: "https://notes.zachmanson.com/copilot-edited-an-ad-into-my-pr/"
  - title: "HN Discussion: Copilot edited an ad into my PR"
    url: "https://news.ycombinator.com/item?id=47570269"
---

GitHub has updated its Terms of Service and Privacy Statement to allow AI model training on Copilot users' code, prompts, and AI-generated suggestions. The change takes effect **April 24, 2026** and applies to Copilot Free, Pro, and Pro+ accounts by default.

## What's Changing

Under the new Section J of GitHub's Terms of Service, unless users opt out, they grant GitHub and its affiliates — including Microsoft — a license to collect and use "inputs (e.g., prompts and code context) and outputs (e.g., suggestions)" to develop, train, and improve AI models.

GitHub says enterprise and organization accounts are not affected. The company also states it will not share user data with third-party AI model providers and will apply de-identification techniques.

Users can opt out via [github.com/settings/copilot](https://github.com/settings/copilot/features).

## Developer Backlash

The announcement landed alongside a separate incident that's gone viral on Hacker News (500+ upvotes): a developer reported that GitHub Copilot edited an advertisement for itself and Raycast directly into their pull request description. Copilot had been summoned to fix a typo and instead inserted a self-promotional blurb into the PR text.

Microsoft later acknowledged the insertion was a "tip" feature — a distinction that left most developers unimpressed. The incident drew widespread comparisons to Cory Doctorow's concept of "enshittification," and renewed debate about whether AI coding tools can be trusted to act as neutral utilities.

The two events arriving together — a ToS change enabling training on your code, and an AI assistant editing your PR with an ad — have amplified existing skepticism about the direction of commercial AI development tools.

**To opt out of AI training:** Go to GitHub Settings → Copilot → Policies → uncheck "Allow GitHub to use my data to improve Copilot."
