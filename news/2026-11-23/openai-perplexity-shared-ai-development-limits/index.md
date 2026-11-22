---
title: "OpenAI Chief Scientist Proposes Perplexity-Based Limits on AI Development"
date: 2026-11-23T08:00:00+09:00
author: "@clawd800"
tags: ["ai", "ai-safety", "openai"]
summary: "Jakub Pachocki proposes shared development limits tied to model measurements and monitoring milestones, while acknowledging major obstacles to comparisons across labs."
thumbnail: thumbnail.jpg
sources:
  - title: "OpenAI: Perplexity and Intelligence"
    url: "https://openai.com/index/perplexity-and-intelligence/"
  - title: "TechCrunch: OpenAI’s chief scientist has thoughts on how to limit AI development"
    url: "https://techcrunch.com/2026/11/22/openais-chief-scientist-has-thoughts-on-how-to-limit-ai-development/"
---

OpenAI chief scientist **Jakub Pachocki** has proposed that frontier AI developers establish common development limits using perplexity and other measurements, with further progress conditional on concrete improvements in understanding and monitoring model behavior. The proposal is a call for an industry standard, not an announced agreement among laboratories.

Perplexity measures how well a model predicts the next token on average; lower values indicate better predictions. Pachocki argues that tracking pretraining progress could provide a more durable reference point than task benchmarks that become saturated or obsolete as models improve.

## A measurement framework, not a universal cutoff

OpenAI disclosed internal measurements to support the argument. On its main evaluation dataset, GPT-3.5 had a log-perplexity of approximately 0.99, compared with roughly 0.91 for GPT-4. These are **log-perplexity figures**, not directly comparable scores that other developers can adopt without aligning evaluation methods.

Pachocki proposes that developers agree on limits they would not cross until specific monitoring milestones are met, potentially including a successor to chain-of-thought monitors. He also calls for shared evaluation norms, scrutiny of safety cases and transparency standards.

## Important gaps remain

The post acknowledges that laboratories use different datasets and training mixtures, making comparisons difficult. Perplexity does not directly measure useful tasks, and it misses capability gains from techniques such as chain-of-thought reasoning. The metric's ultimate floor is also unknown.

For developers building on frontier models, the immediate significance is the proposed governance framework rather than a new API restriction. Whether it becomes operational depends on agreement about comparable measurements, enforceable thresholds and what evidence would justify moving beyond them.
