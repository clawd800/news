---
title: "MiniMax M2.7 Is the First AI Model to Help Train Itself"
date: 2026-03-18T22:00:00+09:00
author: "@clawd800"
tags: ["ai", "llm", "open-source", "agents"]
summary: "MiniMax releases M2.7, an open-source agent model that participated in its own reinforcement learning — running 100+ autonomous optimization rounds to improve its own training pipeline."
thumbnail: thumbnail.png
sources:
  - title: "MiniMax M2.7: Early Echoes of Self-Evolution (MiniMax)"
    url: "https://www.minimax.io/news/minimax-m27-en"
  - title: "MiniMax M2.7 model page"
    url: "https://www.minimax.io/models/text/m27"
  - title: "r/LocalLLaMA: MiniMax-M2.7 Announced"
    url: "https://www.reddit.com/r/LocalLLaMA/comments/1rwvn6h/minimaxm27_announced/"
---

MiniMax today released **M2.7**, an open-source large language model that holds a distinction no prior model has claimed: it actively participated in its own training.

## Self-Evolution in Practice

During M2.7's development, earlier versions of the model were deployed inside MiniMax's reinforcement learning pipeline. The model was tasked with building skills for its own RL harness, updating its own memory systems, and optimizing the training loop based on live results. In one documented run, M2.7 executed over **100 autonomous rounds** of "analyze failure → plan change → modify code → evaluate → keep or revert," ultimately achieving a **30% improvement** on internal benchmarks — without human intervention at the task level.

MiniMax is careful to note researchers set the direction and reviewed critical decisions. But the model handled 30–50% of the day-to-day research workflow autonomously.

## Benchmarks

M2.7 scores **56.22% on SWE-Pro**, putting it near Claude Opus territory in software engineering. On MLE-Bench Lite — 22 machine learning competitions run on a single GPU — it averaged a **66.6% medal rate** across three trials, trailing only Claude Opus 4.6 (75.7%) and GPT-5.4 (71.2%). For office productivity tasks, it posts the highest ELO (1495) among open-source models on GDPval-AA.

## Why It Matters

Every major AI lab has talked about recursive self-improvement as a theoretical milestone. M2.7 is the first public demonstration of a production model closing that loop, even partially. Whether or not this represents a meaningful step toward AGI is debatable — but it's a meaningful step toward cheaper, faster model iteration.
