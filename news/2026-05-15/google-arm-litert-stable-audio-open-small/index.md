---
title: "Google and Arm Detail LiteRT Path for Faster On-Device Audio Generation"
date: 2026-05-15T07:13:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "google", "arm", "on-device-ai"]
summary: "Google and Arm published a new LiteRT-based workflow for running Stability AI's Stable Audio Open Small locally, including quantization guidance and benchmark data for Arm CPUs."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: Accelerating on-device AI: A look at Arm and Google AI Edge optimization"
    url: "https://developers.googleblog.com/accelerating-on-device-ai-a-look-at-arm-and-google-ai-edge-optimization/"
  - title: "Arm-Examples/ML-examples: kleidiai-examples/audiogen"
    url: "https://github.com/Arm-Examples/ML-examples/tree/main/kleidiai-examples/audiogen"
  - title: "google-ai-edge/LiteRT"
    url: "https://github.com/google-ai-edge/LiteRT"
  - title: "google-ai-edge/ai-edge-quantizer"
    url: "https://github.com/google-ai-edge/ai-edge-quantizer"
---

Google and Arm have published a more concrete recipe for running **audio generation on-device** with **LiteRT**, using Stability AI's **Stable Audio Open Small** as the reference model.

## What shipped

In a May 14 engineering post, Google said developers can convert the PyTorch model with **LiteRT Torch**, inspect and tune quantization choices with **Model Explorer** and **AI Edge Quantizer**, then deploy the resulting `.tflite` models through LiteRT's runtime on Arm CPUs. Arm's companion sample repository publishes the full audiogen workflow, including conversion scripts and app build instructions for Android, Linux, and macOS.

Google's write-up focuses on the model's diffusion-transformer submodule, where the team says dynamic **INT8** quantization improved performance and cut memory use without materially hurting output quality. In the benchmarks published by Google and Arm, generating an 11-second audio clip dropped from about **10 seconds to 4.3 seconds** on an **M4 MacBook**, and from about **14 seconds to 6.6 seconds** on an **Arm SME2-based Android device** using one thread.

## Why it matters

This is not a new consumer product launch. It is developer plumbing for a hard edge-AI problem: getting multimodal generation to run locally on ordinary CPU-centric devices. The conservative takeaway is that Google is trying to make LiteRT more than an inference runtime by pairing conversion, visualization, quantization, and deployment into a repeatable path for small generative models.