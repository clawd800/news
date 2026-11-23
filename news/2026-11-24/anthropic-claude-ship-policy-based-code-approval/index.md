---
title: "Anthropic Launches Claude Ship for Code Review, Fixes and Policy-Based Approval"
date: 2026-11-24T08:00:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-tools", "anthropic"]
summary: "Claude Ship combines code review, automated fixes and team-defined approval policies for GitHub pull requests, with two new agents in beta."
thumbnail: thumbnail.jpg
sources:
  - title: "Anthropic: Introducing Claude Ship"
    url: "https://claude.com/resources/articles/introducing-claude-ship"
  - title: "Claude Code documentation: Claude Ship"
    url: "https://code.claude.com/docs/en/claude-ship"
  - title: "TechCrunch: Anthropic launches Claude Ship"
    url: "https://techcrunch.com/2026/11/23/anthropic-launches-claude-ship-letting-ai-agents-review-fix-and-approve-code-changes/"
---

Anthropic launched **Claude Ship** on November 23, combining agents that review GitHub pull requests, push fixes and apply team-written approval policies. It is available for Claude Team and Enterprise organizations. Code Review is generally available; the new PR Steward and Claude Approvals agents are in public beta.

## From review findings to an approval decision

Code Review examines changes alongside the surrounding code and posts findings ranked by severity. PR Steward addresses failing checks, merge conflicts and feedback from people or review bots, pushing corrective commits. Anthropic says Steward is designed not to approve or merge pull requests.

Claude Approvals handles a separate decision: whether a change satisfies a policy stored in the repository. Teams can specify where people must approve and where Claude may post an approving review. Anthropic recommends starting in observe mode to inspect decisions before enforcing them.

The distinction matters: **approval is not unrestricted merge authority**. GitHub settings and branch rules still determine what merges. The documentation notes that auto-merge or a merge queue can nevertheless land changes without human action when the policy does not require a person's approval.

## Availability and operating costs

Developers can also use the new `/ship` command in Claude Code to open a pull request, review it and work through feedback and failing checks.

Repository-level agents incur token-based usage charges. Approvals bills for classifiers and policy-triggered code reviews, including in observe mode. Organizations using Zero Data Retention, the HIPAA configuration or customer-managed encryption keys cannot use the agents.

The release extends coding automation beyond generating changes into the review-and-approval workflow, while leaving teams responsible for defining the conditions under which those changes can reach production.
