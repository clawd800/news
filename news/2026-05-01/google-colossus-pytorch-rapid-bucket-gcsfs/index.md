---
title: "Google Brings Colossus-Backed Rapid Buckets to PyTorch via gcsfs"
date: 2026-05-01T01:13:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "google-cloud", "pytorch", "storage"]
summary: "Google says PyTorch workloads on Google Cloud can train faster with a new gcsfs integration for Rapid Buckets, a Colossus-backed storage path designed to reduce data-loading and checkpoint bottlenecks."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: Speeding Up AI: Bringing Google Colossus to PyTorch via GCSFS and Rapid Bucket"
    url: "https://developers.googleblog.com/speeding-up-ai-bringing-google-colossus-to-pytorch-via-gcsfs-and-rapid-bucket/"
  - title: "fsspec/gcsfs GitHub release v2026.3.0"
    url: "https://github.com/fsspec/gcsfs/releases/tag/2026.3.0"
---

Google says PyTorch users on Google Cloud can now access **Rapid Buckets** through `gcsfs`, giving the storage layer used across much of the PyTorch ecosystem a faster path into Google's Colossus infrastructure.

## What changed

The integration routes storage traffic through persistent bidirectional gRPC streams instead of the usual REST path. Google says that matters because large training runs are often limited by data loading and checkpoint writes, not raw GPU availability. In its example setup - a 451GB dataset spread across 16 GKE nodes with eight A4 GPUs each - the company said total training time improved **23%** versus a standard regional bucket.

Google also attached concrete performance claims: more than **15 TiB/s** aggregate throughput, under-1ms random-read and append latency, and over **20 million QPS**. Separately, the `gcsfs` v2026.3.0 release notes confirm Rapid Bucket support, bucket auto-detection, and new benchmark tooling.

## Why it matters

This is a technical infrastructure update, but an important one. Tools like Dask, Pandas, Hugging Face Datasets, PyTorch Lightning, and vLLM already depend on `fsspec`, so Google is trying to speed up training pipelines without requiring application rewrites. If the gains hold up outside Google's own benchmark, the feature could make storage a smaller bottleneck for large PyTorch jobs on Google Cloud.
