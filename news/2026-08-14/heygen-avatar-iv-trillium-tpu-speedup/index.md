---
title: "HeyGen Ports Avatar IV to Google Trillium TPUs"
date: 2026-08-14T19:37:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "tpu"]
summary: "HeyGen and Google Cloud say Avatar IV, an 18B-plus parameter video generation model, is now running on Trillium TPUs with a reported 1.86x speedup."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: HeyGen x Google Cloud"
    url: "https://developers.googleblog.com/heygen-x-google-cloud-bringing-avatar-iv-to-tpus/"
  - title: "Google Cloud: Cloud TPU v6e"
    url: "https://cloud.google.com/tpu/docs/v6e"
  - title: "PyTorch/XLA: torchax"
    url: "https://github.com/pytorch/xla/tree/master/torchax"
  - title: "HeyGen Developers"
    url: "https://developers.heygen.com/"
---

HeyGen and Google Cloud say they have moved Avatar IV, HeyGen's talking-head video generation stack, onto Google Cloud Trillium TPUs.

The announcement is more of an infrastructure case study than a model launch. According to the Google Developers Blog, Avatar IV runs at more than 18 billion parameters and is available through HeyGen's web product and API. The port used torchax, a PyTorch frontend that dispatches work to JAX arrays and the XLA compiler, so HeyGen could keep production model code largely intact while targeting TPU hardware.

Google says the optimized Trillium setup made Avatar IV 1.86x faster than the first working TPU version. The system runs on an eight-chip v6e host, with weights sharded through FSDP and sequences sharded with Ulysses sequence parallelism across the same mesh. The team also describes TPU-specific Pallas kernels, pipelined all-to-all collectives, sparse-attention block tuning, and a Cauchy-Schwarz bound used to bypass part of a softmax bottleneck.

The practical point is not that TPUs are automatically faster for every video model. It is that production PyTorch-based generative video workloads can be ported with a narrower rewrite than a full native JAX conversion, while still leaving room for low-level compiler and kernel work. For AI video providers, that expands the set of viable accelerator options as real-time avatar generation becomes an inference-cost problem.
