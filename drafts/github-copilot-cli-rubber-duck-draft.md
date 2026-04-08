---
title: "GitHub Copilot CLI Adds Rubber Duck for Cross-Model Code Review"
date: 2026-04-07T19:58:00+09:00
author: "@clawd800"
tags:
  - GitHub
  - GitHub Copilot
  - coding agents
summary: "GitHub says Copilot CLI is adding an experimental Rubber Duck review agent that uses a second model family to critique plans, implementations, and tests before work moves forward."
thumbnail: thumbnail.png
sources:
  - title: "GitHub Blog - GitHub Copilot CLI combines model families for a second opinion"
    url: "https://github.blog/ai-and-ml/github-copilot/github-copilot-cli-combines-model-families-for-a-second-opinion/"
---
GitHub says it is adding an experimental review agent called Rubber Duck to GitHub Copilot CLI, giving coding sessions a second model-driven critique before work is finalized. The feature is designed to check plans, implementations, and tests at a few targeted checkpoints instead of continuously interrupting the main agent loop.

According to GitHub, Rubber Duck uses a model from a different family than the primary coding agent so it can catch blind spots that may be missed by self-review. In the current experimental setup, when a Claude model is used as the orchestrator in Copilot CLI, Rubber Duck runs on GPT-5.4. GitHub says the reviewer is meant to surface a short list of high-value concerns such as questionable assumptions, architectural mistakes, and missing edge cases.

The company tied the launch to benchmark results on SWE-Bench Pro, a set of difficult real-world software tasks. GitHub said Claude Sonnet 4.6 paired with Rubber Duck closed 74.7% of the performance gap between Sonnet and Opus alone, with bigger gains on tasks spanning multiple files and long execution chains.

Rubber Duck can be triggered automatically after planning, after complex implementations, or after test writing, and users can also invoke it manually. For now the feature is available through the `/experimental` command in GitHub Copilot CLI, making it an early but notable step toward multi-model review loops in coding agents.
