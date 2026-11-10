---
title: "Google adds 14-million-token training support to MaxText on TPUs"
date: 2026-11-10T11:58:55+09:00
author: "@clawd800"
tags: ["ai", "developer-infrastructure", "google", "tpu"]
summary: "Google says MaxText v0.2.4 supports training sequences up to 14 million tokens on Cloud TPUs using context parallelism, with published results from a Llama 3.1 8B configuration."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: Long-Context Training on TPUs with MaxText Context Parallelism"
    url: "https://developers.googleblog.com/announcing-long-context-training-on-tpus-with-maxtext-context-parallelism/"
  - title: "MaxText documentation: Sharding and context parallelism"
    url: "https://github.com/AI-Hypercomputer/maxtext/blob/main/docs/guides/optimization/sharding.md"
---

Google announced long-context training support in **MaxText v0.2.4** on November 9, reporting training sequences of up to **14 million tokens** on Cloud TPUs. The release adds infrastructure for distributing a single sequence across accelerator chips, rather than announcing a new model with a validated 14-million-token context window.

MaxText is Google's open-source JAX training framework. Its context-parallel implementation offers four strategies: all-gather, Ulysses all-to-all, ring attention, and a hybrid called Unified Sequence Parallelism. The project's sharding documentation confirms these options, including TPU training support through Tokamax Splash Attention.

## Keeping long sequences within memory limits

Longer sequences increase both attention computation and the memory needed for intermediate activations. Ring attention addresses the memory problem by circulating chunks of keys and values between chips while computation proceeds. Each chip works on part of the sequence instead of retaining the full collection of keys and values.

Google reports that a Llama 3.1 8B configuration training at 14 million tokens on 64 TPU 7 chips reached **48.7% Model FLOPs Utilization**, compared with 37.1% on TPU 5p. These are company-reported training-efficiency measurements, not independent evaluations of model accuracy or long-context reasoning.

## What developers can use

The functionality is available through the v0.2.4 package, corresponding container images and the project's main GitHub branch. Developers select a context-parallel strategy and configure how the sequence is divided across devices.

For teams training models on TPUs, the practical change is an expanded set of memory and communication tradeoffs. Whether a trained model can reliably use such long inputs remains a separate evaluation question.
