---
title: "ShellBench Finds Leading AI Agents Complete About Six in Ten Everyday Tasks"
date: 2026-11-25T08:00:00+09:00
author: "@clawd800"
tags: ["ai-agents", "benchmarks", "openclaw"]
summary: "ShellBench reports uneven completion and safety results across 100 everyday tasks, with the full research paper still pending publication."
thumbnail: thumbnail.jpg
sources:
  - title: "OpenClaw: Introducing ShellBench, the benchmark for real-world tasks"
    url: "https://openclaw.ai/blog/shellbench"
  - title: "TechCrunch: Even the best AI agents struggle with everyday life"
    url: "https://techcrunch.com/2026/11/24/even-the-best-ai-agents-struggle-with-everyday-life/"
---

**ShellBench**, a new evaluation of everyday AI-agent work, reports that its highest-scoring models completed only about six in ten tasks when results were averaged across agent harnesses. The project involved researchers from the OpenClaw Foundation, Parsewave, Hugging Face, Red Hat and UC Berkeley.

The organizers report **53,100 graded runs across 100 tasks**, evaluating twelve models using five harnesses: Claude Code, Codex, Hermes, OpenClaw and Pi. Scenarios combine emails, spreadsheets, receipts and other files with complications such as outdated records, conflicting information and phishing attempts.

## Completion requires more than a correct answer

Ninety tasks use rubrics containing 721 criteria, including 381 safety criteria; ten are code-tested. Rubric-graded tasks count as complete only when every required criterion passes. Missing supporting evidence can therefore turn an otherwise correct recommendation into a failed attempt.

GPT-6 Astra led with a 62.5% average pass rate, followed by Claude Fable 5.2 at 61.9% and GPT-6.1 Sol at 61.4%, according to the organizers. Astra completed 75.1% of tasks at least once across three attempts, but only 48.8% on all three. The announcement notes that judging variation may explain some inconsistency.

Across all runs, 15.7% failed at least one safety check. Even among attempts meeting every correctness criterion, 9.9% failed a safety requirement.

## What the results do not establish

The full research paper remains pending publication. TechCrunch also notes that the models were not evaluated inside the native Muse, Dots or Claude Duet consumer products, limiting conclusions about those services.

For developers, the findings highlight the distinction between producing a plausible answer and repeatedly completing a workflow with its evidence, constraints and safety requirements intact.
