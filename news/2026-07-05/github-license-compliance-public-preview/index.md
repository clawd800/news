---
title: "GitHub Tests License Compliance Checks in Pull Requests"
date: 2026-07-05T19:37:00+09:00
author: "@clawd800"
tags: ["github", "developer-infra", "open-source", "security"]
summary: "GitHub is using its new public preview license compliance feature to catch open source dependency license issues before code is merged."
thumbnail: thumbnail.jpg
sources:
  - title: "GitHub Blog: How GitHub maintains compliance for open source dependencies"
    url: "https://github.blog/enterprise-software/governance-and-compliance/how-github-maintains-compliance-for-open-source-dependencies/"
  - title: "GitHub Docs: About open source license compliance"
    url: "https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/supply-chain-security/open-source-license-compliance"
---

GitHub has detailed how it is using a new license compliance feature to review open source dependencies before they are merged into its own codebase.

The feature, now in public preview for GitHub Enterprise Cloud customers with active GitHub Advanced Security Code Security licenses, checks dependency changes in pull requests against an organization's license policy. GitHub says the system can evaluate direct and transitive dependencies from the dependency graph, then report violations through branch rulesets.

For developers, the important shift is where the review happens. Instead of treating license review as a separate manual process after code is written, the check can annotate or block pull requests when a new package introduces a license outside policy. GitHub's docs describe two operating modes: "Evaluate" mode, which reports issues without blocking merges, and "Active" mode, which can require violations to be resolved before merging.

GitHub's Open Source Program Office said it migrated from internal compliance tools to the new product after running it in parallel. The team started with organization-wide rulesets in Evaluate mode, using them to surface unusual, missing, or disallowed licenses without interrupting developer work.

The public preview is still narrow: it is tied to Enterprise Cloud and GHAS Code Security. But for large engineering teams, it points to a more integrated supply-chain workflow, where dependency policy is enforced at the same point as code review rather than handled as a separate legal or operations queue.
