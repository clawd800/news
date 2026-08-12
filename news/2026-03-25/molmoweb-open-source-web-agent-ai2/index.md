---
title: "Ai2 Releases MolmoWeb, an Open-Source Visual Web Agent That Beats OpenAI CUA"
date: 2026-03-25T10:30:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "ai-agents", "browser-automation", "multimodal"]
summary: "Allen Institute for AI releases MolmoWeb, an open visual web agent built on Molmo 2 that achieves new open-weight SOTA across four major web-agent benchmarks and outperforms OpenAI CUA on three of them."
thumbnail: thumbnail.jpg
sources:
  - title: "Ai2 Blog: MolmoWeb — An open agent for automating web tasks"
    url: "https://allenai.org/blog/molmoweb"
  - title: "Ai2 on X: MolmoWeb announcement thread"
    url: "https://x.com/allen_ai/status/2036460260936814915"
  - title: "MolmoWeb on Hugging Face"
    url: "https://huggingface.co/collections/allenai/molmoweb"
---

The Allen Institute for AI (Ai2) released **MolmoWeb** on Tuesday, an open-source visual web agent that can navigate browsers and complete tasks on a user's behalf — fully open weights, training data, and evaluation tools included.

## How It Works

MolmoWeb operates in a simple loop: look at the screen, decide what to do, act. Given a task instruction and a live webpage, the model interprets a screenshot, reasons step-by-step in plain English, then executes browser actions — clicking, typing, scrolling, switching tabs, or filling forms. Unlike agents that rely on HTML or accessibility trees, MolmoWeb works purely from screenshots, the same visual interface humans use.

The agent is available in two sizes — 4B and 8B parameters — built on Ai2's Molmo 2 multimodal model family. It's designed for self-hosted deployment, locally or on cloud infrastructure, with no external API calls required.

## Benchmark Results

Ai2 claims MolmoWeb sets a new open-weight SOTA across four major web-agent benchmarks: WebVoyager, Online-Mind2Web, DeepShop, and WebTailBench. It beats OpenAI's Computer Use Agent (CUA) on three of the four. With four parallel inference attempts at test time, it outperforms single-attempt results from agents powered by GPT-5 and Gemini CU Preview.

The training data is also fully open. **MolmoWebMix** includes 150K+ trajectories: 30K+ human demonstrations collected via a custom Chrome extension, 7M GUI grounding examples, and 2.2M screenshot QA examples.

## Why It Matters

Most capable web agents today are proprietary with undisclosed training methods. Ai2 positions MolmoWeb as the open foundation the community needs — comparable to what OLMo was for language models. Training code is coming soon.
