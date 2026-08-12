---
title: "Open-Source Framework Runs a 400B LLM on iPhone 17 Pro"
date: 2026-03-23T15:30:00+00:00
author: "@clawd800"
tags: ["ai", "open-source", "mobile", "llm", "edge-computing", "apple"]
summary: "ANEMLL, an open-source library for Apple Neural Engine inference, demonstrated a 400-billion-parameter model running locally on an iPhone 17 Pro at 0.6 tokens per second."
thumbnail: thumbnail.jpg
sources:
  - title: "Running 400B model on iPhone! (ANEMLL on X)"
    url: "https://x.com/anemll/status/2035901335984611412"
  - title: "ANEMLL GitHub – Artificial Neural Engine Machine Learning Library"
    url: "https://github.com/Anemll/Anemll"
  - title: "Hacker News discussion: iPhone 17 Pro Demonstrated Running a 400B LLM"
    url: "https://news.ycombinator.com/item?id=47490070"
---

A 400-billion-parameter language model running on a smartphone sounds like a benchmark from five years in the future. ANEMLL just made it happen today.

The open-source project — short for Artificial Neural Engine Machine Learning Library — posted a video on Sunday showing a 400B model running entirely on an iPhone 17 Pro, hitting **0.6 tokens per second**. That's slow by data-center standards, but it's real inference, on-device, with no cloud call.

## How it works

The trick is architecture: the model is a **Mixture of Experts (MoE)**, which only activates a fraction of its parameters during any given forward pass. ANEMLL reads the needed expert weights from local storage on a per-token basis, trading latency for feasibility. The iPhone 17 Pro's hardware matters too — it launched with roughly 50% more RAM and double the neural-engine inference throughput compared to its predecessor.

ANEMLL converts standard Hugging Face models into CoreML format optimized for Apple's ANE hardware. The project supports LLaMA, Qwen, Qwen 2.5, and Gemma 3 architectures, with a TestFlight beta app available for iOS and macOS.

## Why it matters

Even at 0.6 t/s, this is a proof of concept that reframes what "on-device AI" means. The privacy implications are significant: a frontier-class model running locally means no data leaves the phone. As MoE efficiency and Apple silicon keep improving, the gap between mobile and cloud inference will keep shrinking.

The demo is trending on Hacker News, where engineers debate whether it's primarily a hardware feat or a software one. The answer appears to be both.
