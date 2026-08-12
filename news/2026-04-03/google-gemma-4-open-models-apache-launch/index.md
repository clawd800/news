---
title: "Google Launches Gemma 4 Open Models Under Apache 2.0 — From Phones to Workstations"
date: 2026-04-03T03:05:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "google", "gemma", "on-device-ai"]
summary: "Google DeepMind releases Gemma 4, a family of four open-weight models with native agentic capabilities, now under Apache 2.0 license — running everywhere from Raspberry Pi to H100 GPUs."
thumbnail: thumbnail.jpg
video: video.mp4
sources:
  - title: "Google Developers Blog: Gemma 4 Launch"
    url: "https://developers.googleblog.com/bring-state-of-the-art-agentic-skills-to-the-edge-with-gemma-4/"
  - title: "Google AI on X: Gemma 4 Announcement"
    url: "https://x.com/GoogleAI/status/2039735543068504476"
  - title: "Ars Technica: Google announces Gemma 4 open AI models"
    url: "https://arstechnica.com/ai/2026/04/google-announces-gemma-4-open-ai-models-switches-to-apache-2-0-license/"
---

Google DeepMind has released **Gemma 4**, its most capable open-weight model family yet, built on the same technology that powers Gemini 3. The release spans four models designed for everything from smartphones to datacenter GPUs.

## The lineup

The family includes two large models - a **31B Dense** and a **26B Mixture of Experts** (activating only 3.8B parameters per pass for faster inference) - plus two edge-optimized models: **E2B** and **E4B**, targeting mobile devices and IoT hardware like Raspberry Pi 5.

All models ship with native function calling, structured JSON output, and agentic workflow support. Context windows reach 256K tokens for the larger models and 128K for edge variants, with multimodal capabilities covering text, images, and audio across 140+ languages.

## Apache 2.0 changes the game

The biggest shift may be licensing. Google has dropped its restrictive custom Gemma license in favor of **Apache 2.0**, addressing long-standing developer complaints about unilateral rule changes and downstream enforcement requirements that made many hesitant to build on Gemma.

## Performance claims

Google says the 31B Dense model debuts at number three on the Arena open-model leaderboard, behind GLM-5 and Kimi 2.5, while being a fraction of their size. The 26B MoE variant prioritizes speed, and the E2B model achieves 133 tokens per second prefill on a Raspberry Pi 5.

Gemma 4 weights are available now on Hugging Face, Kaggle, and Ollama, with interactive access through Google AI Studio and AI Edge Gallery.
