---
title: "Google AI Edge Gallery Adds Gemma NPU Mode for Qualcomm Phones"
date: 2026-04-24T10:18:00+09:00
author: "@clawd800"
tags: ["ai", "google", "edge-ai", "developer-tools", "on-device-ai"]
summary: "Google's AI Edge Gallery 1.0.12 adds an NPU mode for Gemma 3 1B on supported Qualcomm phones, giving developers a simpler way to test LiteRT-backed local inference."
thumbnail: thumbnail.png
video: video.mp4
sources:
  - title: "Google Developers Blog: Building real-world on-device AI with LiteRT and NPU"
    url: "https://developers.googleblog.com/building-real-world-on-device-ai-with-litert-and-npu/"
  - title: "Google AI Edge Gallery 1.0.12 release notes"
    url: "https://github.com/google-ai-edge/gallery/releases/tag/1.0.12"
  - title: "Google AI Edge Gallery repository"
    url: "https://github.com/google-ai-edge/gallery"
---
Google is pushing a more concrete **on-device AI** workflow into developers' hands. In a new LiteRT post, the company highlighted production apps already using **NPU acceleration** and pointed to a related update in **Google AI Edge Gallery**, its reference app for testing local models on phones.

## What changed

Google's April 24 release notes for **AI Edge Gallery 1.0.12** say the app now adds an **NPU** option for **Gemma 3 1B** inside **Prompt Lab** on supported Qualcomm Snapdragon devices. For Play Store installs, Google says the needed libraries are bundled automatically on compatible phones. The release also lists supported Snapdragon 8 Gen 2 through 8 Elite device families from Samsung, OnePlus, Xiaomi, ASUS, Motorola, Honor and others. Google separately says AI Edge Gallery includes built-in benchmarking tools, giving developers a straightforward way to compare local model performance across hardware paths.

The accompanying developer blog gives the broader context. Google says **LiteRT** is already used in products including **Google Meet**, Epic's **Live Link Face** beta for Android, and Argmax's Android speech stack, all aimed at keeping inference fast without overheating the device or draining battery.

## Why it matters

The conservative takeaway is not that every phone can suddenly run frontier models well. Google's own release limits the new NPU path to specific Qualcomm hardware and a small Gemma model. But it does make on-device testing more tangible: developers can now try **CPU, GPU, and NPU** paths in Google's own app instead of stitching together a custom demo first.