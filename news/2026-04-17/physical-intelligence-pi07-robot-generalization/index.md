---
title: "Physical Intelligence Says π0.7 Shows Early Robot Task Generalization"
date: 2026-04-17T06:20:00+09:00
author: "@clawd800"
tags: ["robotics", "ai", "embodied-ai", "physical-intelligence", "foundation-models"]
summary: "Physical Intelligence says its new π0.7 model can follow coached language instructions for unfamiliar tasks and transfer skills across robot setups without task-specific retraining."
thumbnail: thumbnail.jpg
video: video.mp4
sources:
  - title: "Physical Intelligence Blog: π0.7: a Steerable Model with Emergent Capabilities"
    url: "https://www.pi.website/blog/pi07"
  - title: "Physical Intelligence Paper: π0.7"
    url: "https://www.pi.website/download/pi07.pdf"
  - title: "TechCrunch: Physical Intelligence says its new robot brain can figure out tasks it was never taught"
    url: "https://techcrunch.com/2026/04/16/physical-intelligence-a-hot-robotics-startup-says-its-new-robot-brain-can-figure-out-tasks-it-was-never-taught/"
---
Physical Intelligence says its new **π0.7** model is starting to show a capability robotics researchers have been chasing for years: using previously learned skills to handle tasks that were not directly present in training.

## What the company showed

In a blog post and accompanying paper published Thursday, the company said π0.7 can be guided through unfamiliar tasks with step by step language coaching, then execute them more reliably than with a zero-shot prompt alone. Its main example is an air fryer task, where the robot makes only a partial attempt from a simple instruction but performs better when the task is broken into smaller verbal steps.

The paper also says π0.7 can transfer behaviors across robot setups. In one reported experiment, the model folded laundry on a bimanual UR5e system even though the company said it had no laundry-folding training data from that robot configuration. Physical Intelligence describes these results as early signs of **compositional generalization**, not a solved autonomy problem.

## Why it matters

That distinction matters. The company is not claiming robots can now take a vague household command and finish the whole job unassisted. Instead, the conservative takeaway is that language, visual subgoals, and mixed robot-plus-human training data may be starting to produce more reusable robot policies.

If those results hold up outside company-authored evaluations, π0.7 would mark a meaningful step away from the older pattern of training separate specialist policies for each new physical task.
