---
title: "AutoKernel Open-Sources an AI Agent Loop for GPU Kernel Optimization"
date: 2026-04-07T03:03:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "gpu", "developer-tools"]
summary: "RightNow AI has released AutoKernel, a framework that uses iterative agent-driven search to profile, rewrite, and benchmark GPU kernels for PyTorch models."
thumbnail: thumbnail.jpg
sources:
  - title: "AutoKernel paper on arXiv"
    url: "https://arxiv.org/abs/2603.21331"
  - title: "RightNow-AI/autokernel on GitHub"
    url: "https://github.com/RightNow-AI/autokernel"
  - title: "Launch thread from Akashi"
    url: "https://x.com/Akashi203/status/2040781342535790810"
---
RightNow AI has open-sourced **AutoKernel**, a framework that applies an autonomous agent loop to one of the messier parts of machine learning infrastructure: GPU kernel tuning. The project arrived on arXiv and GitHub over the weekend, with the team framing it as an "autoresearch" workflow for performance engineering rather than model prompting.

According to the paper, AutoKernel profiles a PyTorch workload, identifies the slowest kernels, then iteratively proposes Triton or CUDA edits, benchmarks the results, and keeps the best versions. The repository describes the same pipeline in practical terms: bottleneck discovery, code generation, repeated testing, and a five-stage correctness harness before a candidate is accepted.

In the paper's KernelBench experiments, the authors say AutoKernel improved 10 of 20 benchmark tasks, while its optimized kernels outperformed baseline PyTorch eager execution on all 20 and beat `torch.compile` on 17. The project README says a typical run can execute roughly 40 experiments per hour, allowing overnight search across multiple bottlenecks.

The release matters because it pushes agent workflows beyond chat interfaces and into low-level systems work that normally takes specialized GPU engineers. It is still an early research project, not a drop-in replacement for compiler tooling, but it shows where agentic coding is heading next: repeated measurement, narrow optimization loops, and code that is judged by benchmarks instead of vibes.
