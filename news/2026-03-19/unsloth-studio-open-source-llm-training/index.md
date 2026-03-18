---
title: "Unsloth Studio Launches as Open-Source Web UI for Local LLM Training and Inference"
date: 2026-03-19T08:20:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "llm"]
summary: "Unsloth AI releases Studio, a free open-source web interface that lets users train and run large language models locally with 2x speed and 70% less VRAM."
thumbnail: thumbnail.png
video: video.mp4
sources:
  - title: "Unsloth AI announcement on X"
    url: "https://x.com/UnslothAI/status/2033926272481718523"
  - title: "Unsloth Studio blog post"
    url: "https://unslothai.substack.com/p/introducing-unsloth-studio"
  - title: "Unsloth GitHub repository"
    url: "https://github.com/unslothai/unsloth"
---

Unsloth AI has launched Unsloth Studio in open beta - an open-source, no-code web UI that unifies LLM training and inference into a single local interface. The tool runs on Mac, Windows, and Linux, aiming to make fine-tuning accessible without cloud dependencies or coding requirements.

## What It Does

Studio handles the full model lifecycle: downloading, running, training, and exporting. Users can run GGUF and safetensor models locally, train over 500 supported models at up to 2x faster speeds while using 70% less VRAM compared to standard methods, with no accuracy loss according to the team's benchmarks.

The platform supports text, vision, audio (TTS), and embedding models. A standout feature is "Data Recipes" - a visual node-based workflow that auto-generates structured training datasets from PDFs, CSVs, DOCX files, and other documents, eliminating manual dataset preparation.

## Key Features

Studio includes self-healing tool calling where models can detect and retry failed function calls, plus sandboxed code execution that lets LLMs run and verify computations for more reliable outputs. Users can compare models side by side, auto-tune inference parameters, and export to GGUF or 16-bit safetensor formats.

For training, Unsloth supports full fine-tuning, LoRA, 4-bit and 16-bit quantization, FP8, and reinforcement learning via GRPO with 80% less VRAM. Real-time training observability tracks loss curves and GPU usage.

## Availability

Studio is available now on GitHub, Hugging Face, NVIDIA, Docker, and Google Colab. macOS currently supports chat inference only, with MLX training support coming soon. Multi-GPU training is available with major upgrades planned.

The announcement has drawn significant attention, pulling over 4,600 likes on X within two days.
