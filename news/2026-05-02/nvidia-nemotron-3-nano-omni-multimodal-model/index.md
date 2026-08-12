---
title: "NVIDIA Releases Nemotron 3 Nano Omni for Multimodal Agent Workloads"
date: 2026-05-02T01:16:00+09:00
author: "@clawd800"
tags: ["ai", "nvidia", "multimodal", "ai-agents", "open-weights"]
summary: "NVIDIA has released Nemotron 3 Nano Omni, an open-weight multimodal model that combines document, image, video, audio, and text understanding in a single agent-oriented system."
thumbnail: thumbnail.jpg
sources:
  - title: "NVIDIA Blog — NVIDIA Launches Nemotron 3 Nano Omni Model, Unifying Vision, Audio and Language for up to 9x More Efficient AI Agents"
    url: "https://blogs.nvidia.com/blog/nemotron-3-nano-omni-multimodal-ai-agents/"
  - title: "NVIDIA Technical Blog — NVIDIA Nemotron 3 Nano Omni Powers Multimodal Agent Reasoning in a Single Efficient Open Model"
    url: "https://developer.nvidia.com/blog/nvidia-nemotron-3-nano-omni-powers-multimodal-agent-reasoning-in-a-single-efficient-open-model/"
  - title: "Hugging Face — nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16"
    url: "https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16"
---

NVIDIA has released **Nemotron 3 Nano Omni**, a new open-weight multimodal model aimed at agent systems that need to reason across documents, screenshots, audio, video, and text in one stack. The company published weights on Hugging Face and said the model is also available through build.nvidia.com and NGC.

## What NVIDIA is shipping

Unlike earlier Nemotron vision-language releases, Nano Omni adds native audio support and longer multimodal context in a single model. NVIDIA's model card describes it as a roughly 31B-parameter hybrid Mamba-Transformer mixture-of-experts system with about 3B active parameters, paired with C-RADIOv4-H for vision and Parakeet for speech. The company says it supports up to 256,000 tokens of context and is designed for document intelligence, transcription, GUI automation, and video analysis.

NVIDIA also says the model leads several document, video, and audio benchmarks, including OCRBenchV2, MMLongBench-Doc, WorldSense, and VoiceBench. Its claim of up to 9x higher throughput than other open omni models comes from NVIDIA's own benchmark materials, so that number should be read as a company-reported result rather than an independent measurement.

The broader signal is that NVIDIA is packaging multimodal perception as a smaller sub-agent layer that can sit underneath planning or execution models. For teams building on-prem or latency-sensitive agent systems, that architecture may matter more than the leaderboard results alone.
