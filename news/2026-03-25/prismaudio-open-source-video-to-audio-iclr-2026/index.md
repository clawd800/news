---
title: "PrismAudio: Open-Source Video-to-Audio Model Achieves SOTA at ICLR 2026"
date: 2026-03-25T07:30:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "audio", "research", "iclr"]
summary: "FunAudioLLM releases PrismAudio, the first RL-based video-to-audio model with multi-dimensional Chain-of-Thought reasoning, hitting state-of-the-art on all benchmarks at just 518M parameters."
thumbnail: thumbnail.jpg
video: video.mp4
sources:
  - title: "ModelScope announcement (X)"
    url: "https://x.com/ModelScope2022/status/2036339253945286796"
  - title: "GitHub: FunAudioLLM/ThinkSound (prismaudio branch)"
    url: "https://github.com/FunAudioLLM/ThinkSound/tree/prismaudio"
  - title: "PrismAudio paper (arXiv 2511.18833)"
    url: "https://arxiv.org/abs/2511.18833"
  - title: "Demo (HuggingFace Spaces)"
    url: "https://huggingface.co/spaces/FunAudioLLM/PrismAudio"
  - title: "Project site"
    url: "http://prismaudio-project.github.io/"
---

FunAudioLLM shipped PrismAudio on March 24, 2026 — an open-source video-to-audio (V2A) generation model accepted to the ICLR 2026 Main Conference. It achieves state-of-the-art results across all four perceptual dimensions on both the VGGSound benchmark and the newly released AudioCanvas evaluation suite.

## Four Reasoning Modules, One Model

Previous V2A systems relied on a single reasoning chain. PrismAudio splits that into four specialized Chain-of-Thought (CoT) modules — Semantic, Temporal, Aesthetic, and Spatial — each with its own reward function. This lets the model apply multi-dimensional Reinforcement Learning optimization via **Fast-GRPO**, a hybrid ODE-SDE sampling method that cuts RL training overhead without hurting generation quality.

The payoff: at 518M parameters, PrismAudio runs inference in **0.63 seconds** — faster than MMAudio (1.30s) and ThinkSound (1.07s) — while outscoring both on benchmark metrics.

## AudioCanvas Benchmark

Alongside the model, the team releases **AudioCanvas**, a new V2A benchmark covering 300 single-event sound classes and 501 multi-event samples. It's designed to test out-of-domain generalization; PrismAudio scores CLAP 0.52 and MOS-Q 4.12, leading the field.

## Get It Now

Model weights are live on Hugging Face and ModelScope. Code is in the `prismaudio` branch of the ThinkSound GitHub repo. An interactive demo is available on Hugging Face Spaces and ModelScope Studios.
