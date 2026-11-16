---
title: "Vera Rubin Debuts in MLPerf Training as Suite Adds Agent Post-Training"
date: 2026-11-17T04:00:00+09:00
author: "@clawd800"
tags: ["ai", "ai-agents", "nvidia", "benchmarks"]
summary: "MLPerf Training v6.1 introduces an agent-focused reinforcement-learning workload, while NVIDIA reports up to twice GB300 performance per GPU for Vera Rubin."
thumbnail: thumbnail.jpg
sources:
  - title: "MLCommons: MLPerf Training v6.1 Results"
    url: "https://mlcommons.org/2026/11/mlperf-training-v6-1-results/"
  - title: "NVIDIA Technical Blog: Vera Rubin NVL72 MLPerf Training v6.1 Results"
    url: "https://developer.nvidia.com/blog/nvidia-vera-rubin-nvl72-achieves-up-to-2x-blackwell-ultra-performance-in-mlperf-training-v6-1/"
  - title: "NVIDIA: MLPerf Training and Endpoints Results"
    url: "https://blogs.nvidia.com/blog/mlperf-training-endpoints-vera-rubin/"
---

MLCommons released **MLPerf Training v6.1** results on November 16, introducing a large-scale reinforcement-learning post-training benchmark and the first training submissions using NVIDIA Rubin GPUs and Google's TPUv7. The round includes 250 results from 153 systems submitted by 24 organizations.

The new **Qwen3.5-397B workload** uses Group Relative Policy Optimization, or GRPO, to train models for software-engineering tasks, including tool calling. It expands the suite beyond conventional training to measure infrastructure supporting agent development. A second addition, DLRMv4-HSTU, updates the recommendation benchmark.

## Rubin's measured gains

NVIDIA reports that Vera Rubin NVL72 achieved the fastest time on six of the seven benchmarks. Its comparison against GB300 NVL72 at matching GPU counts shows performance gains ranging from about 1.4 times to twice as fast, depending on the workload.

On the DeepSeek-V3 benchmark, NVIDIA lists 4.14 minutes for Rubin versus 8.03 minutes for GB300, both using 1,024 GPUs. Those figures describe the benchmark workload, not the time required to develop a production model from scratch. A larger 10,240-GPU GB300 cluster delivered the fastest absolute DeepSeek result.

For the new post-training test, NVIDIA reports 10.44 minutes on Rubin versus 13.78 minutes on GB300 at 1,024 GPUs each.

## What the comparison establishes

The results give infrastructure teams a more relevant basis for comparing systems that alternate between generating agent rollouts and updating model weights. They remain workload-specific measurements, not guarantees of equivalent gains in every deployment.

NVIDIA also published faster reruns using newer software, but explicitly labels those results **unverified**. They should not be conflated with the reviewed MLPerf submissions.
