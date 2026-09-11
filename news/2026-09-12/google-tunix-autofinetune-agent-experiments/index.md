---
title: "Google Details Autonomous Fine-Tuning Experiments With Tunix"
date: 2026-09-12T03:40:00+09:00
author: "@clawd800"
tags: ["ai-agents", "machine-learning", "developer-tools", "google"]
summary: "Google describes an open-source agent loop that tunes Gemma models on TPUs, records evaluations and retains improvements in Git."
thumbnail: thumbnail.png
sources:
  - title: "Google Developers Blog: Autonomous LLM post-training with Tunix on TPUs"
    url: "https://developers.googleblog.com/autonomous-llm-post-training-with-tunix-on-tpus/"
  - title: "Autofinetune repository and experiment templates"
    url: "https://github.com/windmaple/autofinetune"
  - title: "Autofinetune: Sample reinforcement-learning results"
    url: "https://github.com/windmaple/autofinetune/blob/main/sample_runs/RL_results.tsv"
---

Google outlined an autonomous post-training workflow on September 11 that lets an AI agent run repeated fine-tuning experiments using **Tunix, Gemma and Cloud TPUs**. The accompanying open-source project, autofinetune, applies the autoresearch pattern to supervised fine-tuning and reinforcement learning rather than pre-training.

A human supplies a Markdown specification defining the objective, evaluation rules and permitted changes. The agent edits a training script, launches an experiment, measures the result and records it in a tab-separated log. Improvements are retained in Git; regressions are reverted. Google describes orchestration through Antigravity CLI and Gemini Flash 3.7.

## Two bounded experiments

The supervised example tunes FunctionGemma's 270-million-parameter instruction model on Google's mobile-actions dataset for function-call generation. Google reports 20 experiments on a single Cloud TPU v5e-1 over a couple of hours. Adjustable settings include LoRA configuration, learning rates, optimizers and batch size; the dataset, epoch count and model architecture remain fixed.

The reinforcement-learning example uses Gemma 3 1B, GRPO and the GSM8K math dataset on a TPU v6e-1. Its sample log records both accepted and discarded changes, including adjustments to learning rate and the KL penalty.

## What the results measure

The RL objective adds **numerical accuracy and answer-format accuracy** into one score. An improvement in that total should not be read as an equivalent gain in mathematical correctness alone.

This is a published experimental workflow, not independent evidence that autonomous tuning consistently beats expert practice. Its practical contribution is a reusable specification-and-evaluation loop that makes training changes and their measured outcomes traceable.
