---
title: "GitHub Releases ReviewBench for Evaluating AI Code Review"
date: 2026-10-06T03:39:14+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-tools", "github", "benchmarks"]
summary: "GitHub's ReviewBench research preview compares AI code-review agents on 219 pull requests, with open evaluation tools and separate scoring for newly discovered issues."
thumbnail: thumbnail.jpg
sources:
  - title: "GitHub: ReviewBench, an open benchmark for AI code review"
    url: "https://github.blog/ai-and-ml/github-copilot/reviewbench-an-open-benchmark-for-ai-code-review/"
  - title: "ReviewBench: Official benchmark project"
    url: "https://review-bench.ai/"
---

GitHub launched ReviewBench on October 5, releasing a research-preview benchmark for comparing AI code-review agents on real pull requests. The project publishes its dataset, evaluation methodology, judge configuration and self-serve runner so developers can test their own reviewers.

The benchmark contains **219 pull requests from 187 public repositories across 19 languages**. GitHub says it analyzed 103.9 million pull requests to model language and repository-size distributions. The smaller evaluation corpus deliberately gives more weight to substantive, multi-file changes instead of letting tiny changes dominate.

## Measuring useful findings, not just comment volume

ReviewBench builds its reference findings from human reviews, author follow-up commits, static analysis and multiple model families. It merges duplicate findings and evaluates them under a shared rubric: an issue must be true, relevant and non-trivial to count.

Its scoring separates findings that match the existing reference set from newly discovered issues. Grounded metrics measure performance against known labels; augmented metrics also credit previously unlisted findings that pass evaluation. GitHub uses grounded recall for headline comparisons because augmented recall changes its denominator for each agent.

Users can filter results by severity and category, or adjust the balance between catching more issues and producing fewer false alarms.

## A useful comparison, with limits

GitHub reports 96.6% agreement between benchmark labels and a separate review by senior engineers. That is a label-quality check, not a claim that any agent catches 96.6% of bugs.

For teams adopting automated review, the release offers an inspectable test set and a repeatable comparison method. Its research-preview status and deliberately selected workload remain important context when applying results to a particular repository.
