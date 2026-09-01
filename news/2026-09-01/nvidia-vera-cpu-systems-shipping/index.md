---
title: "NVIDIA Says Vera CPU Systems Are Now Shipping"
date: 2026-09-01T23:37:00+09:00
author: "@clawd800"
tags: ["ai-infra", "ai-agents", "nvidia", "chips"]
summary: "NVIDIA says its first Vera CPU systems have started moving from announcement to production, with deliveries to major AI labs and cloud operators."
thumbnail: thumbnail.jpg
sources:
  - title: "NVIDIA Blog: Delivering Vera"
    url: "https://blogs.nvidia.com/blog/vera-cpu-delivery/"
  - title: "NVIDIA Vera CPU"
    url: "https://www.nvidia.com/en-us/data-center/vera-cpu.md"
---

NVIDIA says its Vera CPU systems are now shipping at scale, turning an agentic-AI infrastructure pitch into early production hardware for large model operators.

The company said AWS has received its first NVIDIA Vera CPU server and Vera Rubin GPU, hand-delivered in Seattle by Ian Buck, NVIDIA's vice president of hyperscale and high-performance computing. NVIDIA said previous Vera CPU system deliveries went to Oracle Cloud Infrastructure and three AI labs: Anthropic, OpenAI, and SpaceXAI.

The update matters because NVIDIA is positioning Vera as the CPU layer for agent workloads, not as another general-purpose server chip. In NVIDIA's framing, agentic systems put pressure on CPUs through code execution, tool use, sandboxing, analytics, data pipelines, orchestration, and reinforcement-learning loops that sit around GPU inference and training.

NVIDIA's product page describes Vera as its first custom CPU for this class of work. The chip uses 88 custom Olympus cores, creates 176 threads through spatial multithreading, and is paired with high-bandwidth LPDDR5X memory. NVIDIA also says Vera can serve as a host processor for accelerated systems, including Vera Rubin NVL72, where it connects to Rubin GPUs through second-generation NVLink-C2C.

The company has not published independent customer benchmarks in the delivery post. For now, the concrete news is deployment progress: Vera systems are in the hands of major cloud and AI-lab customers, with NVIDIA arguing that CPU bottlenecks are becoming more visible as AI agents move from answering prompts to running longer workflows.
