---
title: "Mamba-3 Beats Transformers on Inference Speed While Matching Quality"
date: 2026-03-22T00:29:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "research", "llm", "inference"]
summary: "Researchers from CMU, Princeton, Cartesia AI, and Together AI released Mamba-3, a state space model that runs 7x faster than Llama 3.2-1B at long sequences while outperforming Transformer baselines on language modeling benchmarks."
thumbnail: thumbnail.png
sources:
  - title: "Mamba-3 (Together AI Blog)"
    url: "https://www.together.ai/blog/mamba-3"
  - title: "Mamba-3: Improved Sequence Modeling using State Space Principles (arXiv)"
    url: "https://arxiv.org/abs/2603.15569"
  - title: "Mamba-3 GitHub"
    url: "https://github.com/togethercomputer/mamba-3"
---

A team from Carnegie Mellon University, Princeton University, Cartesia AI, and Together AI has released Mamba-3, an open-source state space model (SSM) that flips the design priorities of previous Mamba generations. Where Mamba-2 optimized for training speed, Mamba-3 was built from the ground up for inference efficiency — the bottleneck that now dominates real-world AI deployment costs.

## The Inference Gap

As agentic workflows grow — coding assistants, research agents, customer service bots — sustained token generation has become the primary compute expense. Transformers scale quadratically with sequence length, making long-context inference increasingly expensive. Mamba-3 targets that gap directly.

At a 16,384-token sequence on an H100 GPU, Mamba-3 completes prefill and decode in 140 seconds compared to 976 seconds for Meta's Llama-3.2-1B — nearly a 7x speedup. Despite the efficiency gains, Mamba-3 outperforms the Transformer baseline by roughly 4% on language modeling benchmarks and halves state size compared to Mamba-2 without sacrificing perplexity.

## Three Architectural Changes

Mamba-3 improves on Mamba-2 through three targeted upgrades. First, it replaces the first-order discretization with an exponential-trapezoidal scheme, enabling more expressive dynamics while eliminating the short causal convolution that has been part of every Mamba architecture since version one. Second, it introduces complex-valued state tracking, giving the model richer representational capacity. Third, a MIMO (multi-input, multi-output) variant runs multiple SSMs in parallel, boosting accuracy with minimal latency impact.

## Available Now

The model is released under Apache 2.0, with code on GitHub and open-sourced custom kernels built in Triton, TileLang, and CuTe DSL. The paper was accepted at ICLR 2026. NVIDIA and IBM have already shipped hybrid Mamba-Transformer models for enterprise use, suggesting the architecture is moving from research into production.
