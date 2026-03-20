---
title: "MiniMax M2.7: The First AI Model That Helped Build Itself"
date: 2026-03-20T18:30:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "llm", "agents", "china-ai"]
summary: "MiniMax's new M2.7 model handled 30-50% of its own reinforcement learning development workflow — an early signal of recursive AI self-improvement."
thumbnail: thumbnail.png
video: video.mp4
sources:
  - title: "MiniMax M2.7: Early Echoes of Self-Evolution (Official)"
    url: "https://www.minimax.io/news/minimax-m27-en"
  - title: "New MiniMax M2.7 proprietary AI model is 'self-evolving' and can perform 30-50% of reinforcement learning research workflow"
    url: "https://venturebeat.com/technology/new-minimax-m2-7-proprietary-ai-model-is-self-evolving-and-can-perform-30-50"
  - title: "MiniMax launches M2.7 model on MiniMax Agent and APIs"
    url: "https://www.testingcatalog.com/minimax-launches-m2-7-model-on-minimax-agent-and-apis/"
---

Chinese AI startup MiniMax shipped M2.7 this week with a claim that stands out from the usual benchmark parade: an earlier version of the model was used to build the very reinforcement learning infrastructure that trained the final release.

During development, MiniMax deployed an internal M2.7 build as a research agent inside its RL team. The model monitored experiments, read logs, fixed bugs, opened merge requests, and ran smoke tests — autonomously handling **30-50% of the end-to-end development workflow**. Researchers only stepped in for critical decisions.

## What M2.7 Can Do

On the SWE-Pro benchmark, M2.7 scores **56.22%**, approaching Claude Opus 4.6's level. On MLE Bench Lite — a machine learning competition suite designed to evaluate autonomous research skills — it achieves a **66.6% medal rate**, tying with Google's Gemini 3.1.

Other benchmarks:
- **Terminal Bench 2:** 57.0%
- **VIBE-Pro (full project delivery):** 55.6%
- **GDPval-AA (office software):** ELO 1495, highest among open-source models

The model also maintains a **97% skill adherence rate** across 40 complex multi-step skill workflows.

## Proprietary Shift

This release marks a strategic change for MiniMax. The company built its reputation on frontier open-source models — M2.5 and predecessors were freely available. M2.7 is proprietary, a move that follows Chinese competitors like z.ai's GLM-5 Turbo and signals a broader shift in China's AI landscape toward closed, monetized models.

M2.7 is available through the MiniMax Agent platform and API. A high-throughput variant, M2.7-highspeed, provides the same outputs at faster inference speeds for production workloads.
