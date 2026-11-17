---
title: "Lambda Deploys NVIDIA Photonics Network Across More Than 10,000 GPUs"
date: 2026-11-17T11:59:00+09:00
author: "@clawd800"
tags: ["ai", "infrastructure", "nvidia", "photonics"]
summary: "Lambda says its Quebec deployment connects more than 10,000 Blackwell Ultra GPUs using co-packaged optics, with lower network latency in company benchmarks."
thumbnail: thumbnail.jpg
sources:
  - title: "Lambda: Large-scale deployment of NVIDIA Photonics switches with CPO"
    url: "https://lambda.com/blog/worlds-first-large-scale-deployment-of-nvidia-photonics-switches-with-cpo"
  - title: "NVIDIA: Lambda Boosts AI Factory Resiliency and Efficiency With NVIDIA Photonics"
    url: "https://blogs.nvidia.com/blog/lambda-photonics/"
---

Lambda announced on November 16 that it has deployed NVIDIA Photonics switches at its Quebec campus, connecting **more than 10,000 NVIDIA Blackwell Ultra GPUs**. The installation uses co-packaged optics, bringing optical engines onto the switch package rather than relying on conventional pluggable transceivers.

The announcement provides a concrete deployment example for a networking technology intended to reduce the power and reliability costs of connecting large AI clusters.

## Lower latency, unchanged throughput

Lambda reports that its benchmarks showed lower network latency across rack, scalable-unit and pod configurations. NVIDIA summarizes the improvement as about 4% at rack scale and up to about 10% at pod scale, with throughput matching conventional pluggable optics.

These are company-reported network measurements, not evidence that complete training jobs or inference workloads run 10% faster. The distinction matters because application performance depends on more than the network alone.

The deployment uses liquid-cooled switches with **144 ports operating at 800Gb/s** and 18 removable external light sources per switch. NVIDIA reports median optics temperatures of 36°C, compared with 51°C for conventional pluggable optics in the company's tests.

## Bringing optics closer to compute

Co-packaging shortens the electrical signal path between the switch chip and optical engines. NVIDIA says this reduces signal loss and removes the need for retimer chips, cutting components and power draw. External light-source modules can also be replaced in the field.

For infrastructure teams, the significant development is deployment at cluster scale, with measured networking results rather than only component-level promises.
