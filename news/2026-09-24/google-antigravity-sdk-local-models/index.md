---
title: "Google Antigravity SDK Adds Offline Local-Model Workflows"
date: 2026-09-24T03:39:40+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-tools", "local-ai", "google"]
summary: "Google adds local-model support to the Antigravity SDK through LiteRT and OpenAI-compatible servers, with hardware and model-compatibility limits."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: Introducing Support for Local AI Models in the Antigravity SDK"
    url: "https://developers.googleblog.com/introducing-support-for-local-ai-models-in-the-antigravity-sdk/"
  - title: "Google Antigravity Python SDK: Local AI Models"
    url: "https://github.com/google-antigravity/antigravity-sdk-python#local-ai-models"
---

Google announced local-model support for the **Antigravity SDK** on September 23, allowing developers to run agent workflows offline rather than sending every inference request to a cloud service. Initial support pairs Gemma 4 26B A4B with Google's LiteRT runtime.

The Python SDK documentation shows developers installing `google-antigravity` and `litert-lm`, downloading a compatible model, and configuring an agent through `LiteRTAgentConfig`. The documentation warns that other LiteRT model files may work poorly or not at all. Hardware requirements are also material: the announcement recommends more than 24GB of VRAM or unified memory.

Google separately says `LocalOpenAIAgentConfig` supports OpenAI-compatible inference servers, including Ollama, LM Studio and vLLM. That gives developers another backend option while retaining the SDK's agent orchestration, tools and workflows.

## Local execution, or a cloud-local split

The announcement also demonstrates a hybrid setup in which a cloud model plans work while local Gemma instances perform code auditing, patch generation and regression testing. Google says the planner receives filenames and task descriptions in that demonstration, while source code remains on the device. This is a described implementation, not a guarantee that every hybrid application keeps the same data boundaries.

For developers, the change makes offline execution and avoiding per-token cloud API charges practical deployment options within the SDK. It does not remove hardware costs or establish performance parity with hosted models. Teams still need to test their chosen model, available memory and tool behavior against their own workloads before moving an existing agent entirely on-device.
