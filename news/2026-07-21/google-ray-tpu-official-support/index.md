---
title: "Google Brings First-Class Ray Support to Cloud TPUs"
date: 2026-07-21T19:37:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "google-cloud", "ray"]
summary: "Google says Ray 2.55 now treats Cloud TPUs as first-class accelerators, giving distributed Python workloads a supported path onto TPU slices through GKE and KubeRay."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: Run Ray on TPU, Part 1"
    url: "https://developers.googleblog.com/run-ray-on-tpu-part-1-the-foundations/"
  - title: "Ray 2.55.0 release notes"
    url: "https://github.com/ray-project/ray/releases/tag/ray-2.55.0"
  - title: "Ray Docs: Use TPUs with KubeRay"
    url: "https://docs.ray.io/en/latest/cluster/kubernetes/user-guides/tpu.html"
---

## Ray gets a TPU path

Google has published the first part of its guide to running Ray workloads on Cloud TPUs, saying Ray 2.55 adds official support for TPUs through familiar Ray task, actor, training, and serving APIs.

The change matters for teams that already scale Python workloads with Ray but want to test Google's accelerator hardware without rewriting scheduling logic around TPU-specific constraints. Google's post says Ray and Google Kubernetes Engine handle the placement details needed to keep multi-host TPU slices together over the inter-chip interconnect.

## Why placement matters

TPU slices have stricter topology requirements than many GPU clusters. Workers generally need to land on an intact slice, not just any free accelerator host. Google says KubeRay on GKE provisions and labels the underlying hardware layout, while Ray Core reads those labels to reserve the right resources for the workload.

Ray's 2.55.0 release notes separately list TPU-related changes, including multi-host TPU work, TPU readiness utilities, and TPU Docker image build and publish support. Ray's documentation now also includes a KubeRay guide for using TPUs on GKE.

The conservative read is that this is infrastructure plumbing rather than a new model launch. Still, it is notable developer infrastructure: Ray is a common distributed compute layer, and first-class TPU support gives AI teams another managed path for training, inference, and batch workloads on Google's chips.
