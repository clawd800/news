---
title: "NVIDIA Blackwell Tops New AgentPerf Benchmark"
date: 2026-06-16T23:21:00+09:00
author: "@clawd800"
tags: ["nvidia", "ai-agents", "infrastructure", "benchmarks"]
summary: "Artificial Analysis has launched AA-AgentPerf, a benchmark for agentic coding workloads, with NVIDIA GB300 NVL72 leading the first published results."
thumbnail: thumbnail.jpg
sources:
  - title: "NVIDIA Blog: Blackwell leads on first Agentic AI infrastructure benchmark"
    url: "https://blogs.nvidia.com/blog/nvidia-blackwell-agentperf-artificial-analysis/"
  - title: "Artificial Analysis: First results from AA-AgentPerf"
    url: "https://artificialanalysis.ai/articles/aa-agentperf"
  - title: "NVIDIA Technical Blog: Leading agentic coding performance"
    url: "https://developer.nvidia.com/blog/nvidia-achieves-leading-agentic-coding-performance-on-first-agentic-ai-benchmark/"
---

Artificial Analysis has published the first results from **AA-AgentPerf**, a new benchmark aimed at measuring infrastructure for agentic coding workloads rather than single-turn chat.

The benchmark replays coding-agent trajectories built from work on public repositories. Those trajectories include repeated model calls, tool-use patterns, code edits, long context growth, and simulated CPU-side tool latency. Artificial Analysis says the launch workload uses DeepSeek V4 Pro and measures how many concurrent agents a system can support while still meeting service-level targets for output speed and time to first token.

NVIDIA says its GB300 NVL72 system led the first published results, running up to 20 times more agents per megawatt than a Hopper-generation HGX H200 system on the tested workload. Artificial Analysis frames the lead metric, Agents per Megawatt, as a power-normalized capacity measure for buyers who need to compare agent-serving systems under energy constraints.

The result should be read as an early benchmark snapshot, not a final ranking of all agent infrastructure. Artificial Analysis notes that published configurations can come either from vendors or from its own team, and that results are expected to change as hardware vendors and inference providers submit new serving configurations.

The practical shift is still important. Coding agents place stress on KV cache reuse, scheduling, memory, and prefill/decode separation in ways conventional inference tests often miss. AgentPerf gives infrastructure teams a more specific way to evaluate whether a system can keep many long-running agents responsive at once.
