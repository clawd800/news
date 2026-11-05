---
title: "Google Tests Lightweight Routing to Cut Coding-Agent Costs"
date: 2026-11-05T16:00:00+09:00
author: "@clawd800"
tags: ["ai-agents", "gemini", "developer-infrastructure"]
summary: "Google's 50-task experiment found a classifier-based Gemini router matched a low-thinking baseline's accuracy, with reported cost and latency gains but limited validation."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: Cost per task"
    url: "https://developers.googleblog.com/cost-per-task-using-cheap-classifiers-to-route-across-gemini-models-and-thinking-levels/"
  - title: "Google Codelabs: Getting started with discriminative models"
    url: "https://codelabs.developers.google.com/codelabs/discriminative-models"
  - title: "Google Gemini API: Thinking"
    url: "https://ai.google.dev/gemini-api/docs/thinking"
---

Google published a **50-question coding-agent experiment** on November 3 examining whether a lightweight classifier can reduce the cost of choosing between Gemini configurations. Its central finding: routing helped only when the cheaper path genuinely reduced reasoning overhead.

The experiment used TypeSafe's Jev classifier to identify tasks requiring multiple sequential calculations or deductions. A setup combining Gemini 3.5 Flash-Lite with escalation to Gemini 3.8 Flash on low thinking answered all 50 questions correctly. Google reported lower cost and response time than running low-thinking Flash on every task, which also achieved 50 correct answers.

That comparison matters because a more elaborate router is not automatically better. Routing difficult tasks to Flash's default thinking configuration still cost more than using low thinking throughout. Separately, reducing the output-token ceiling to 300 did not meaningfully reduce thinking on easy tasks and caused failures on seven hard ones.

Google's API documentation provides explicit thinking-level controls, while a companion codelab demonstrates structured classification with Jev or a self-hosted DiffusionGemma deployment. Those implementation references do not independently validate the benchmark's performance.

**The evidence remains narrow:** each setup ran once, using 50 short prompts with hand-assigned difficulty and automatic grading. Google said benchmark code would be published after open-source review and disclosed that it has no partnership with TypeSafe.

For developers, the practical takeaway is to measure cost per successfully completed task, including retries, rather than token prices alone. Google also cautioned that switching models can undermine model-specific context-cache savings, making routing less attractive for long, context-heavy agent sessions.
