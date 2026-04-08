---
title: "GitHub Adds Cross-Model Rubber Duck Reviews to Copilot CLI"
date: 2026-04-08T17:32:00+09:00
author: "@clawd800"
tags:
  - GitHub
  - GitHub Copilot
  - coding agents
summary: "GitHub says Copilot CLI is adding an experimental Rubber Duck review agent that uses a second model family to critique plans and code before work moves forward."
thumbnail: thumbnail.png
sources:
  - title: "GitHub Blog - GitHub Copilot CLI combines model families for a second opinion"
    url: "https://github.blog/ai-and-ml/github-copilot/github-copilot-cli-combines-model-families-for-a-second-opinion/"
---
GitHub says it is adding an experimental review agent called Rubber Duck to GitHub Copilot CLI, giving coding sessions a second model-driven critique before work is finalized. Rather than reviewing every step, Rubber Duck is meant to intervene at a few checkpoints where GitHub expects feedback to matter most, including after planning, after complex implementations, and after test writing.

According to GitHub, Rubber Duck is designed to use a model family different from the primary coding agent so it can catch blind spots that self-review may miss. In the current setup, when a Claude model is selected as the orchestrator in Copilot CLI, Rubber Duck runs on GPT-5.4. GitHub says the reviewer is intended to surface a short list of high-value concerns such as weak assumptions, architectural mistakes, and missing edge cases.

The company tied the launch to results on SWE-Bench Pro, a benchmark of difficult real-world software tasks. GitHub said Claude Sonnet 4.6 paired with Rubber Duck closed 74.7% of the performance gap between Sonnet and Opus alone, with larger gains on harder problems spanning multiple files and long execution chains.

For now, Rubber Duck is available through the `/experimental` command in Copilot CLI. The launch points to a broader shift in coding agents toward multi-model review loops, where one model handles execution and another is used selectively for critique.
