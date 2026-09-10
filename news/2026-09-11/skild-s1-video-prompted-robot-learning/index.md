---
title: "Skild S1 Uses Video Prompts to Teach Robots Unseen Tasks"
date: 2026-09-11T03:39:00+09:00
author: "@clawd800"
tags: ["robotics", "physical-ai", "machine-learning", "nvidia"]
summary: "Skild reports that S1 performs unseen manipulation tasks from one video without fine-tuning, with internal results that measure step-level rather than whole-task success."
thumbnail: thumbnail.jpg
sources:
  - title: "Skild AI: Introducing S1 — In-Context Learning for Robotics"
    url: "https://www.skild.ai/blogs/s1"
  - title: "NVIDIA: Skild AI Teaches Robots New Tasks From a Single Video"
    url: "https://blogs.nvidia.com/blog/skild-ai-s1-physical-ai/"
---

Skild AI says its S1 robot foundation model can execute previously unseen manipulation tasks after receiving a single video demonstration, without task-specific fine-tuning. NVIDIA detailed the system on September 10, following Skild's introduction the previous week.

The approach uses **in-context learning**: the demonstration enters the model's context, while its weights remain unchanged. Skild says the same weights produced every example in its research post. Instead of relying only on a language instruction, the robot interprets the demonstrated sequence and maps it to its own hardware and surroundings.

## What the demonstrations show

Skild presents plant potting, pancake cooking, pour-over coffee making and kit assembly as tasks absent from S1's training data. The demonstrations span dozens of manipulation steps and tasks lasting up to ten minutes. In its plant-potting example, the company reports 11 minutes between starting to record the demonstration and autonomous execution on hardware.

The research also compares demonstration prompting with a language-conditioned robot policy using matched data, architectures apart from prompt embeddings, and compute. At 100,000 hours of pretraining data, Skild reports 66% on unseen tasks versus 9% for the language-conditioned baseline.

## A benchmark caveat

Those figures are **not whole-task completion rates**. Skild describes its metric as an average of cumulative per-step success rates, with human intervention to recover from failures during evaluation, mainly for the baseline. The results come from internal benchmarks, not independent validation.

For robot deployment, the potential change is reducing new-task data collection and retraining. The evidence so far supports a demonstrated research capability, not a guarantee of reliable performance across arbitrary factory or household jobs.
