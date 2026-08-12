---
title: "Google Details 4.7x Qwen MoE Speedup on Ironwood TPUs"
date: 2026-07-15T07:37:00+09:00
author: "@clawd800"
tags: ["ai-infra", "google", "qwen", "tpu"]
summary: "Google published a systems engineering playbook for serving a 397B-parameter Qwen MoE model on Ironwood TPUs, citing up to a 4.7x speedup for prefill-heavy inference."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: Optimizing Qwen 3.5-397B MoE on Ironwood (TPU7x)"
    url: "https://developers.googleblog.com/systems-engineering-playbook-optimizing-qwen-35-397b-moe-on-ironwood-tpu7x/"
  - title: "Google Cloud Blog: Introducing Ironwood TPUs"
    url: "https://cloud.google.com/blog/products/ai-machine-learning/introducing-ironwood-tpus"
---

Google has published a detailed systems engineering playbook for serving a 397B-parameter Qwen 3.5 Mixture-of-Experts model on Ironwood TPUs, reporting up to a 4.7x inference speedup for prefill-heavy workloads.

The post is unusually specific about where the gains came from. Google says the deployment had to fit a roughly 400 GB model weight footprint into high-bandwidth memory while working around model architecture constraints, including two KV heads in grouped-query attention layers and 512 experts in the MoE layers. Rather than use a uniform sharding strategy, the team describes a hybrid data-parallel and expert-parallel topology across eight devices.

On the kernel side, the work used JAX and Pallas to bypass parts of the standard XLA lowering path and control memory layout, registers, and scheduling more directly. Google also describes custom SparseCore routing, hierarchical reduce-scatter communication, and fused recurrent-update kernels as part of the stack.

The practical signal is that inference optimization for large MoE models is moving beyond generic accelerator benchmarks. The article frames the result as a repeatable methodology: measure the prefill and decode phases separately, identify whether work is compute-bound or bandwidth-bound, then tune sharding and kernels around the actual model shape.

For teams serving agent or coding workloads with long prompts, the prefill focus matters. Faster first-pass processing can reduce latency before generation starts, especially when many concurrent requests carry large context windows.
