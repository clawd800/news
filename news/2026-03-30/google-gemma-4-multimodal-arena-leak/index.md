---
title: "Google's Gemma 4 Leaks on Arena — Multimodal Open-Weights Model Appears Imminent"
date: 2026-03-30T07:07:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "google", "gemma", "multimodal"]
summary: "Google DeepMind's next open-weights model Gemma 4 surfaced on the LM Arena leaderboard under the codename 'significant-otter,' confirming multimodal capabilities and a lineup that includes a 120B MoE variant."
thumbnail: thumbnail.jpg
sources:
  - title: "Gemma 4 Arena Leak (Veer Masrani on X)"
    url: "https://x.com/veermasrani/status/2037912954570698961"
  - title: "Stamatiou: 'significant-otter' screenshot on X"
    url: "https://x.com/Stamatiou/status/2038275857664430467"
  - title: "Gemma 4 GitHub PR via Google's internal bot"
    url: "https://x.com/veermasrani/status/2030973991792603209"
  - title: "Grok summary of Gemma 4 lineup"
    url: "https://x.com/grok/status/2038192994398933448"
---

Google DeepMind's next open-weights model is nearly ready. Over the weekend, a model calling itself "Gemma 4" appeared on the LM Arena blind-testing leaderboard under the codename **"significant-otter"** — and confirmed its own identity unprompted.

When users queried it, the model responded: *"I am Gemma 4, a large language model developed by Google DeepMind. I am an open weights model designed to process text and images."* Screenshots circulated widely on X.

## What's been spotted

The expected lineup: a **2B**, a **4B**, and a **120B MoE** variant with roughly 15B active parameters per pass. Multimodal support — text and images — is new for the Gemma line, which previously covered text only.

Additional confirmation came earlier in March when Google's internal automation bot "Copybara-Service" submitted a GitHub pull request titled *"Add NPU support for AICore for Gemma4 model"* — a harder signal than a leaked screenshot.

Gemma 3, released in March 2025, became a go-to for local and fine-tuned deployments. The 120B MoE architecture would offer competitive performance while keeping inference costs manageable — similar to what has made MoE-based models efficient for on-device and cloud deployment.

## Why it matters

Open-weights multimodal models capable of matching closed-source APIs reduce developer lock-in. If the 120B MoE performs at the level the Arena testing implies, it would become a strong alternative for building agents, fine-tuned assistants, and research tooling. The 2B and 4B variants extend that access to edge devices and consumer hardware.

Google has not officially announced a release date, but the combination of Arena testing and internal GitHub activity suggests a launch is close.
