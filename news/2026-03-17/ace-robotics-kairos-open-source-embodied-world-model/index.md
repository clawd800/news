---
title: "ACE Robotics Open-Sources Kairos 3.0-4B — One Brain, Any Robot"
date: 2026-03-17T03:30:00+09:00
author: "@clawd800"
tags: ["ai", "robotics", "open-source"]
summary: "ACE Robotics releases Kairos 3.0-4B, an open-source embodied world model built from scratch for real-world robots — running in real time on edge hardware and controlling multiple robot forms from a single 4B-parameter model."
thumbnail: thumbnail.png
sources:
  - title: "ACE ROBOTICS Open-Sources Real-Time Generative World Model Kairos 3.0-4B"
    url: "https://europeanbusinessmagazine.com/media-outreach/ace-robotics-open-sources-real-time-generative-world-model-kairos-3-0-4b/"
  - title: "ACE Robotics Releases Open Source Embodied AI Model Kairos 3.0-4B"
    url: "https://www.opensourceforu.com/2026/03/ace-robotics-releases-open-source-embodied-ai-model-kairos-3-0-4b/"
  - title: "ACE ROBOTICS Open-Sources Real-Time Generative World Model Kairos 3.0-4B (Yahoo Finance)"
    url: "https://finance.yahoo.com/news/ace-robotics-open-sources-real-125400699.html"
---

Shanghai-based ACE ROBOTICS has open-sourced **Kairos 3.0-4B**, a native embodied world model designed to serve as a single AI brain across multiple robot platforms. The model is now publicly available on GitHub and Hugging Face.

Unlike most robotics AI that retrofits general-purpose vision or language models with motion interfaces, Kairos 3.0-4B was built from the ground up around physical and causal laws. It integrates three categories of data — real robot interaction data, structured human behavioral data, and chain-of-thought reasoning data — to achieve what the company calls physical-level deep understanding. Robots using the model can determine not only what action to take, but why.

## Edge-First Performance

The model runs at 4 billion parameters (23.5GB VRAM) and achieves inference speeds **72x faster than NVIDIA Cosmos 2.5** on A800 GPUs. More significantly, it is the first embodied world model to run in real time on edge hardware: deployed on the NVIDIA Jetson Thor T5000 (517 TFLOPs), it generates outputs at 1.5x faster than real-time and issues full-body control commands — upper limbs, fingers, and lower limbs — without intermediate control layers.

Long-horizon capability is another standout: the model maintains scene coherence and physical fidelity across interaction sequences **up to 7 minutes** in length, a new claimed industry benchmark.

## Cross-Embodiment

A single Kairos 3.0-4B instance can control robots of different physical forms. The release explicitly supports the Agilex PIPER, Unitree G1, and Galaxy G1, enabling one model deployment to span multiple hardware configurations.

ACE ROBOTICS is backed by SenseTime, with co-founder Wang Xiaogang serving as Chairman. The open-source release includes model weights, inference tooling, and deployment support for the NVIDIA Jetson platform.
