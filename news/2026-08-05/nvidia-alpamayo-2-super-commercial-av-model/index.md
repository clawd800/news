---
title: "NVIDIA Releases Alpamayo 2 Super for Commercial AV Development"
date: 2026-08-05T07:37:00+09:00
author: "@clawd800"
tags: ["ai", "robotics", "autonomous-vehicles"]
summary: "NVIDIA has released Alpamayo 2 Super on Hugging Face for commercial autonomous-vehicle development under the OpenMDW-1.1 license."
thumbnail: thumbnail.png
sources:
  - title: "NVIDIA Blog: Alpamayo 2 Super Now Available"
    url: "https://blogs.nvidia.com/blog/alpamayo-2-super-open-model-now-available/"
  - title: "Hugging Face: nvidia/Alpamayo2-Super"
    url: "https://huggingface.co/nvidia/Alpamayo2-Super"
---

NVIDIA has released **Alpamayo 2 Super**, a foundation model for autonomous-vehicle development, on Hugging Face for commercial use.

The company says the model is part of its Alpamayo open platform and is intended for tasks around robotaxis and other autonomous vehicles, especially unusual driving situations that require reasoning across camera input, motion history, maps and planned routes. NVIDIA describes the release as an open reasoning model for AV work rather than a production driving stack by itself.

According to the Hugging Face model card, Alpamayo 2 Super is a **34 billion-parameter** system that combines a **32 billion-parameter vision-language model backbone** with a **2 billion-parameter diffusion expert**. NVIDIA says that design is meant to support multiple AV-relevant development tasks inside one foundation model, including reasoning and planning workflows.

The licensing is the practical change for developers. NVIDIA says Alpamayo 2 Super is available under **OpenMDW-1.1**, a Linux Foundation license for open AI model distributions. Its blog says the license covers fine-tuning, derivative models and commercial redistribution, allowing automakers, truckmakers, suppliers and AV developers to adapt the model to their own data and deployment policies.

That still leaves a long path between model access and road deployment. But the release gives AV teams a commercially usable baseline for experimenting with frontier-scale reasoning models before distilling or optimizing smaller systems for vehicle constraints.
