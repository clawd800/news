---
title: "Meta Expands AWS Deal to Run Agentic AI Workloads on Graviton"
date: 2026-04-24T22:18:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "aws", "meta", "chips"]
summary: "Meta says it will deploy AWS Graviton processors at scale, starting with tens of millions of cores for CPU-heavy agentic AI workloads."
thumbnail: thumbnail.jpg
sources:
  - title: "About Amazon: Meta signs agreement with AWS to power agentic AI on Amazon's Graviton chips"
    url: "https://www.aboutamazon.com/news/aws/meta-aws-graviton-ai-partnership"
  - title: "TechCrunch: In another wild turn for AI chips, Meta signs deal for millions of Amazon AI CPUs"
    url: "https://techcrunch.com/2026/04/24/in-another-wild-turn-for-ai-chips-meta-signs-deal-for-millions-of-amazon-ai-cpus/"
---
Meta says it is expanding its AWS relationship to run more of its **agentic AI** infrastructure on **Graviton** processors, a notable signal that CPU capacity is becoming part of the scaling story alongside GPUs.

## What changed

In a new announcement, Amazon said Meta will start deploying **tens of millions of AWS Graviton cores**, with room to expand as its AI footprint grows. Amazon frames the deal around workloads such as **real-time reasoning, code generation, search, and multi-step orchestration** — tasks it argues are increasingly CPU-intensive even if large-model training still depends heavily on GPUs.

Amazon's post says the rollout centers on **Graviton5**, its Arm-based server CPU, and positions Meta as one of the chip family's largest customers. Meta infrastructure chief **Santosh Janardhan** said diversifying compute sources is now a strategic priority as the company scales the systems behind its AI products.

## Why it matters

The conservative takeaway is not that CPUs are replacing accelerators for frontier model training. Instead, the deal suggests big AI operators are separating their stacks more explicitly: GPUs for training and heavy inference, and large CPU fleets for the coordination, retrieval, and execution layers around agent-style systems.

That makes this more than generic cloud spend. It is a concrete sign that the infrastructure market around AI agents is widening beyond the familiar GPU race.
