---
title: "Google Unveils TorchTPU to Run PyTorch Natively Across TPU Clusters"
date: 2026-04-08T18:12:00+09:00
author: "@clawd800"
tags:
  - Google
  - TPUs
  - PyTorch
summary: "Google says its new TorchTPU stack is designed to let PyTorch workloads run natively on TPUs with support for eager execution, torch.compile, and distributed training APIs at large scale."
thumbnail: thumbnail.png
sources:
  - title: "Google Developers Blog - TorchTPU: Running PyTorch Natively on TPUs at Google Scale"
    url: "https://developers.googleblog.com/torchtpu-running-pytorch-natively-on-tpus-at-google-scale/"
---
Google says it is introducing TorchTPU, a new software stack aimed at letting PyTorch workloads run natively on TPU infrastructure without forcing developers into a separate programming model. The company is positioning the project as a bridge between PyTorch’s existing APIs and the scale of Google’s TPU clusters, where modern training jobs can span thousands of accelerators.

In its technical writeup, Google said TorchTPU is built to support both eager execution and `torch.compile`, allowing developers to start with familiar PyTorch code and then move into full-graph compilation when they want higher performance. Instead of routing compiled workloads through Torch Inductor, Google said TorchTPU uses XLA as its main backend compiler and lowers PyTorch operators into StableHLO, OpenXLA’s intermediate representation for tensor workloads.

A big part of the pitch is distributed training. Google said TorchTPU supports Distributed Data Parallel, Fully Sharded Data Parallel v2, and DTensor out of the box. The company also framed the project as a response to a key limitation in PyTorch/XLA, which it said was too dependent on pure SPMD execution. TorchTPU is designed to better tolerate the slightly divergent multi-process behavior common in real PyTorch code while still preserving TPU performance.

Google also said TorchTPU supports custom kernels written in Pallas and JAX, with Helion support still in progress. If the stack works as advertised, it could make TPUs more accessible to teams already invested in PyTorch, while giving Google a stronger story for TPU adoption beyond TensorFlow-native or tightly specialized workflows.
