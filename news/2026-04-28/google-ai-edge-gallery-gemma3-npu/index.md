---
title: "Google Adds Gemma 3 1B NPU Mode to AI Edge Gallery on Qualcomm Android Devices"
date: 2026-04-28T22:13:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "google", "android", "on-device-ai"]
summary: "Google's latest AI Edge Gallery release adds Gemma 3 1B NPU support on supported Qualcomm Android phones, extending its LiteRT push for faster local inference."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: Building real-world on-device AI with LiteRT and NPU"
    url: "https://developers.googleblog.com/building-real-world-on-device-ai-with-litert-and-npu/"
  - title: "GitHub Releases: google-ai-edge/gallery"
    url: "https://github.com/google-ai-edge/gallery/releases"
  - title: "LiteRT GitHub README"
    url: "https://github.com/google-ai-edge/LiteRT"
---

Google is turning its experimental **AI Edge Gallery** app into a more concrete testbed for local model performance. In the project's **April 24** release notes, Google added **Gemma 3 1B NPU support** for supported Qualcomm Android devices, exposing a new **NPU** option inside **Prompt Lab** when compatible hardware is detected.

## What shipped

The release notes say Play Store installs bundle the required libraries automatically for supported chips, while manual APK downloads are split by Qualcomm platform families. Google paired that rollout with a developer blog post explaining the broader **LiteRT** strategy: use a single runtime layer to target **CPU, GPU, and NPU** execution without forcing app teams to wire up vendor-specific acceleration paths themselves.

Google's write-up frames AI Edge Gallery as the public-facing demo for that stack. The company says the app now supports NPU execution for select **Gemma** models, while LiteRT itself is already being used in production examples such as **Google Meet** background effects, **Epic's** Android facial animation workflow, and **Argmax's** on-device speech stack.

## Why it matters

The conservative takeaway is not that every Android phone can suddenly run large models well. This release is still limited to specific Qualcomm hardware and a small set of model paths. But it does give developers a clearer, reproducible way to test what local inference looks like when it is pushed onto the handset's dedicated AI silicon instead of the CPU alone.
