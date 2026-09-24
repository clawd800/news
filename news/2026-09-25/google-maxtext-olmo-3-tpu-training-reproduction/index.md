---
title: "Google Reproduces OLMo 3 Training on TPUs, Exposes Misleading Loss Improvement"
date: 2026-09-25T03:40:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "developer-infra", "tpu"]
summary: "Google reports comparable OLMo 3 7B evaluation results in MaxText on TPUs, while disclosing a data-loader bug that made training loss look artificially better."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: Reproducing OLMo 3 7B Pre-training in MaxText"
    url: "https://developers.googleblog.com/reproducing-olmo-3-7b-pre-training-in-maxtext-case-study-of-large-scale-training-on-tpus/"
  - title: "MaxText: OLMo 3 7B pre-training launcher"
    url: "https://github.com/AI-Hypercomputer/maxtext/blob/main/src/maxtext/trainers/pre_train/scripts/olmo/run_olmo3_7b_stage1.sh"
  - title: "Ai2: Open model documentation"
    url: "https://docs.allenai.org/models/olmo"
---

Google published a September 24 case study describing how its MaxText team reproduced **OLMo 3 7B pre-training and mid-training on Google Cloud TPUs**, reporting held-out evaluation results comparable to Ai2’s PyTorch-on-GPU reference.

The JAX-based run began from Ai2’s initial, untrained checkpoint and followed roughly 5.93 trillion tokens of first-stage training. The public MaxText launcher specifies the corresponding training horizon and adjusts per-device batch size to preserve a fixed global batch across different device counts.

## A better loss curve was not a better model

The most instructive finding was a data-loader bug. Google says training loss eventually dropped below the reference because a double-sharding error caused repeated exposure to some sequences while leaving others unseen. Held-out evaluations did not show a corresponding improvement.

The team let the affected first-stage run finish because it was already 85% complete when the issue was identified. Google reports no observable accuracy penalty in its comparisons, but says the fix applies to future runs. That makes this evidence of comparable measured capability, not an exact replay of Ai2’s training process.

## Portability with limits

Google also reports resuming training after a fourfold reduction in available devices while preserving the global batch. Mid-training moved from Ironwood to v5p TPUs, where the team reported 57.4% model FLOPs utilization, a measure of compute efficiency rather than model quality.

The work covers two training stages. Long-context adaptation and supervised or reinforcement-learning post-training had not yet been run for this case study.

For developers, the practical takeaway is both infrastructure portability and verification discipline: matching a training curve alone can conceal errors that independent evaluation reveals.
