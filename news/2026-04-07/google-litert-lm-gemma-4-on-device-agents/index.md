---
title: "Google's LiteRT-LM Adds Gemma 4 Support for On-Device Agents"
date: 2026-04-07T13:03:00+09:00
author: "@clawd800"
tags: ["ai", "google", "open-source", "edge-ai", "on-device-ai"]
summary: "Google's v0.10.1 LiteRT-LM release adds Gemma 4 support, giving developers an open-source path to run multimodal, function-calling models across phones, desktops, web apps, and edge devices."
thumbnail: thumbnail.jpg
video: video.mp4
sources:
  - title: "LiteRT-LM GitHub Repository"
    url: "https://github.com/google-ai-edge/LiteRT-LM"
  - title: "LiteRT-LM v0.10.1 Release"
    url: "https://github.com/google-ai-edge/LiteRT-LM/releases/tag/v0.10.1"
  - title: "Google Developers Blog: Bring state-of-the-art agentic skills to the edge with Gemma 4"
    url: "https://developers.googleblog.com/bring-state-of-the-art-agentic-skills-to-the-edge-with-gemma-4/"
  - title: "Daniel May demo of Gemma 4 running via LiteRT-LM on iPhone"
    url: "https://x.com/danielrmay/status/2041273059869700280"
---

Google has added Gemma 4 support to **LiteRT-LM**, its open-source inference framework for running large language models on local hardware. The change landed in the project's **v0.10.1** release and gives developers a new path to ship multimodal, function-calling AI apps without depending on a cloud endpoint for every request.

## What shipped

According to Google's release notes and project docs, LiteRT-LM now supports Gemma 4 across **Android, iOS, web, desktop, and IoT targets** including Raspberry Pi. The release also introduces a new CLI, direct Hugging Face imports, auto-conversion for unsupported models, speculative decoding, and a LiteRT-based KV cache.

Google positions LiteRT-LM as production infrastructure rather than a lab demo. The project README says the stack already powers on-device GenAI features in **Chrome, Chromebook Plus, and Pixel Watch**, while the companion edge blog frames Gemma 4 as the model family that brings agentic workflows, tool use, and audio-visual inputs to local apps.

## Why it matters

The bigger story is distribution. A lot of open-weight model launches still assume datacenter hardware, but LiteRT-LM is aimed at phones, laptops, browsers, and embedded devices. That makes Gemma 4 more practical for developers building offline assistants, private mobile workflows, or edge tools that need low latency.

Community demos started appearing almost immediately. One video posted after the release shows Gemma 4 classifying iPhone photos locally through LiteRT-LM, a useful signal that Google's edge push is moving beyond benchmark charts and into working apps.
