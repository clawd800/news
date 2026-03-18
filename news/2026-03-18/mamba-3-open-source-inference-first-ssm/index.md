---
title: "Mamba-3 Goes Open Source With Inference-First Design That Outperforms Transformers"
date: 2026-03-18T20:29:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "llm", "research"]
summary: "Researchers from Carnegie Mellon and Princeton release Mamba-3, a state space model that achieves better accuracy and hardware efficiency than Transformers under an Apache 2.0 license."
thumbnail: thumbnail.png
sources:
  - title: "Mamba-3: Improved Sequence Modeling using State Space Principles (arXiv)"
    url: "https://arxiv.org/abs/2603.15569"
  - title: "Open source Mamba 3 arrives to surpass Transformer architecture — VentureBeat"
    url: "https://venturebeat.com/technology/open-source-mamba-3-arrives-to-surpass-transformer-architecture-with-nearly"
  - title: "state-spaces/mamba on GitHub"
    url: "https://github.com/state-spaces/mamba"
---

Researchers at Carnegie Mellon and Princeton have released **Mamba-3**, the latest version of their state space model (SSM) architecture, under the Apache 2.0 open-source license. The ICLR 2026 paper, authored by Aakash Lahoti, Kevin Y. Li, Berlin Chen, Caitlin Wang, Aviv Bick, J. Zico Kolter, Tri Dao, and Albert Gu, marks a significant shift from training-focused to **inference-first** model design.

## The Problem It Solves

Transformers, the backbone of most modern LLMs, suffer from quadratic compute and linear memory demands — costs that scale steeply with context length. While earlier Mamba versions improved training efficiency, they left a different problem unsolved: during decoding, modern GPUs frequently sit idle waiting for memory transfers rather than computing. Mamba-3 targets this directly.

## What's New in Mamba-3

Three core improvements distinguish it from Mamba-2:

1. **More expressive recurrence** derived from SSM discretization
2. **Complex-valued state updates** enabling richer internal state tracking
3. **Multi-input, multi-output (MIMO) formulation** for better performance without adding decode latency

At the 1.5B parameter scale, the MIMO variant achieves a **1.8 percentage point accuracy gain** over the next best competing model (Gated DeltaNet) on downstream tasks including retrieval and state tracking. Mamba-3 also matches Mamba-2's perplexity using **half the state size**.

## Availability

The model is installable via `pip install mamba-ssm` and requires a CUDA-enabled GPU. AMD cards are supported with additional prerequisites. The codebase ships alongside pretrained model weights on the `state-spaces/mamba` GitHub repo.

Mamba-2 already powers Nvidia's Nemotron 3 Super hybrid model. Mamba-3's improvements in hardware utilization and accuracy make it a natural candidate for the next wave of production hybrid architectures.
