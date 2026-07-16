---
title: "NVIDIA Launches Jetson Thor Modules for Robotics"
date: 2026-07-16T11:37:00+09:00
author: "@clawd800"
tags: ["robotics", "edge-ai", "nvidia", "ai-infra"]
summary: "NVIDIA introduced Jetson Thor T3000 and T2000 modules, extending its Blackwell-based edge AI platform for robotics and autonomous machines."
thumbnail: thumbnail.png
sources:
  - title: "NVIDIA Blog: NVIDIA Introduces New Jetson Thor Computers to Advance Mainstream Robotics and Edge AI"
    url: "https://blogs.nvidia.com/blog/jetson-thor-robotics-edge-ai-agent/"
  - title: "NVIDIA: Jetson Thor"
    url: "https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-thor/"
---

NVIDIA has introduced two Jetson Thor modules, the T3000 and T2000, aimed at robotics, visual AI and edge workloads that need more local inference capacity than earlier embedded systems.

The company says the new modules are based on the NVIDIA Thor architecture and use Blackwell-generation components. In its launch post, NVIDIA frames the release around general-purpose robots and autonomous machines moving from research environments toward larger deployments, where compact systems need to run foundation models close to sensors and actuators.

The Jetson Thor product page lists up to 2,070 FP4 teraflops of AI compute, 128 GB of memory and a 40-130 W operating range for the series. NVIDIA also claims 7.5x the AI performance and 3.5x the energy efficiency of Jetson AGX Orin, though those comparisons depend on the cited FP4 workload and power conditions.

The launch is not just a board update. NVIDIA says the modules are paired with Jetson software memory optimization and agent skills, and points developers toward support for open-source models through Jetson AI Lab. The company positions the system for tasks such as high-speed sensor processing, humanoid robotics and agentic AI at the edge.

For robotics builders, the useful signal is that NVIDIA is pushing larger transformer and multimodal workloads into embedded deployment envelopes. That could reduce reliance on round trips to cloud inference for machines that need low-latency perception, planning or operator assistance in physical environments.
