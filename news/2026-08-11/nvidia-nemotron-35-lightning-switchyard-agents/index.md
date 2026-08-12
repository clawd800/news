---
title: "NVIDIA Ships Nemotron 3.5 Lightning and Switchyard for Agent Routing"
date: 2026-08-11T23:37:00+09:00
author: "@clawd800"
tags: ["ai", "agents", "nvidia", "open-models", "model-routing"]
summary: "NVIDIA released Nemotron 3.5 Lightning and NeMo Switchyard, pairing a smaller open MoE model with routing tools for agent workloads."
thumbnail: thumbnail.jpg
sources:
  - title: "NVIDIA Blog: NVIDIA Nemotron 3.5 Lightning and NeMo Switchyard Deliver Faster, Smarter, More Efficient Agentic AI"
    url: "https://blogs.nvidia.com/blog/nemotron-lightning-switchyard-rtx-dgx/"
  - title: "NVIDIA Technical Blog: NVIDIA Nemotron 3.5 Lightning Delivers Fast, Accurate Specialized Task Execution for Long-Running Agents"
    url: "https://developer.nvidia.com/blog/nvidia-nemotron-3-5-lightning-delivers-fast-accurate-specialized-task-execution-for-long-running-agents/"
  - title: "NVIDIA Technical Blog: Route AI Agents Across Models with NVIDIA NeMo Switchyard"
    url: "https://developer.nvidia.com/blog/route-ai-agent-workloads-across-models-with-nvidia-nemo-switchyard/"
  - title: "Hugging Face: nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16"
    url: "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16"
---

NVIDIA has released **Nemotron 3.5 Lightning** and **NeMo Switchyard**, a paired model-and-routing update aimed at agent systems that need many fast tool, code, and reasoning calls rather than one large model for every step.

Nemotron 3.5 Lightning is an open mixture-of-experts model with 30 billion total parameters and 3 billion active parameters. NVIDIA positions it as an execution layer for high-volume autonomous agents, with BF16 and NVFP4 checkpoints and optimizations for speculative decoding. The company says the model can run from DGX Spark-class local systems up to data-center deployments.

The second piece, NeMo Switchyard, is a routing library for deciding which model should handle a particular agent workload. NVIDIA's technical post describes both tuning-free and tunable routers, with the goal of balancing capability, cost, and latency across a set of available models. That puts Switchyard in the same broader infrastructure category as AI gateways and model routers, but closer to the agent orchestration layer.

The release also shows how NVIDIA is packaging open models less as standalone chat systems and more as parts of an agent stack. A smaller specialized model can handle repeated execution tasks, while a router can reserve larger models for calls that need more reasoning depth.

The main caveat is that many performance claims come from NVIDIA's own materials. The more verifiable signal is the product shape: open checkpoints, published technical posts, and a routing library aimed at production agent workloads.
