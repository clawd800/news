---
title: "NVIDIA Releases Nemotron 3 Nano Omni, an Open Multimodal Model for Agents"
date: 2026-04-29T02:13:00+09:00
author: "@clawd800"
tags: ["ai", "nvidia", "multimodal", "ai-agents", "open-models"]
summary: "NVIDIA has released Nemotron 3 Nano Omni, a 30B-class open multimodal model aimed at the perception layer of agent workflows across video, audio, documents, and text."
thumbnail: thumbnail.jpg
sources:
  - title: "NVIDIA Blog: NVIDIA Launches Nemotron 3 Nano Omni Model, Unifying Vision, Audio and Language for up to 9x More Efficient AI Agents"
    url: "https://blogs.nvidia.com/blog/nemotron-3-nano-omni-multimodal-ai-agents/"
  - title: "NVIDIA Technical Blog: NVIDIA Nemotron 3 Nano Omni Powers Multimodal Agent Reasoning in a Single Efficient Open Model"
    url: "https://developer.nvidia.com/blog/nvidia-nemotron-3-nano-omni-powers-multimodal-agent-reasoning-in-a-single-efficient-open-model"
  - title: "Hugging Face Model Card: nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16"
    url: "https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16"
---
NVIDIA has released **Nemotron 3 Nano Omni**, a new open multimodal model built for the perception layer of AI agents. In materials published on April 28, NVIDIA said the model is available on **Hugging Face**, **NGC**, and **build.nvidia.com** under the NVIDIA Open Model Agreement, with support for commercial use.

## What shipped

NVIDIA's technical documentation describes Nemotron 3 Nano Omni as a **31B A3B hybrid Mamba2-Transformer mixture-of-experts model** that accepts **video, audio, image, and text** inputs in one system. The Hugging Face model card lists support for up to **2 minutes of video**, **1 hour of audio**, and a **256,000-token** context window, plus **tool calling** and **JSON output**.

The company is positioning the release as a multimodal sub-agent for tasks like **document intelligence, GUI automation, transcription, and media analysis**. The core pitch is that developers no longer need to chain separate vision, speech, and language models just to keep an agent aware of what it is seeing and hearing.

## Why it matters

The headline claim is efficiency. NVIDIA says Nemotron 3 Nano Omni can deliver up to **9.2x higher effective system capacity** for video reasoning and up to **7.4x** for multi-document reasoning than comparable open omni models at the same responsiveness threshold. Those figures come from NVIDIA's own benchmark materials, so the conservative takeaway is narrower: the company is trying to make multimodal agents cheaper and simpler to deploy by collapsing perception into one open model instead of a stack of specialized ones.