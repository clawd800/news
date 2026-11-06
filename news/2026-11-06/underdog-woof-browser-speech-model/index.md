---
title: "Underdog Demos Woof, a 31.7 MB Speech Model That Runs in the Browser"
date: 2026-11-06T23:58:00+09:00
author: "@clawd800"
tags: ["ai", "on-device-ai", "text-to-speech"]
summary: "Underdog's interactive demo runs a compact speech model locally, while its downloadable two-voice edition carries noncommercial restrictions."
thumbnail: thumbnail.jpg
sources:
  - title: "Underdog: Woof model details"
    url: "https://underdog.ai/woof"
  - title: "Underdog: Escape interactive demo"
    url: "https://underdog.ai/escape"
  - title: "Hugging Face: Underdog Woof model card"
    url: "https://huggingface.co/ConwayResearch/Underdog-Woof"
  - title: "TechCrunch: Underdog shows off a 32MB speech model in new demo"
    url: "https://techcrunch.com/2026/11/06/underdog-shows-off-a-32mb-speech-model-in-new-demo/"
---

Underdog is demonstrating **Woof**, a text-to-speech model with a **31.7 MB download**, through an interactive browser game highlighted by TechCrunch on November 6. The demo turns text entered on a virtual typewriter into speech generated on the user's own computer.

The company's technical page identifies the browser edition as a single-voice model with **30.7 million parameters**. It uses WebGPU in the game and, according to Underdog, continues working without Wi-Fi after loading. The model page itself is dated October 26; the latest coverage concerns its interactive showcase rather than a newly documented model release.

## Two editions, different requirements

A separate downloadable edition on Hugging Face contains two voices, Juno and Mira, in **40.6 MB**. Its model card describes a CPU runtime requiring NumPy and built-in text normalization for phone numbers, dates, prices and codes. The browser demo and downloadable package should therefore not be treated as identical releases.

The weights are available for **noncommercial use**, not under a permissive commercial license. Developers considering integration should check the actual package license rather than equating downloadable weights with unrestricted deployment rights.

## What the demo establishes

Underdog says the game's spoken voices are generated live locally. Its music credits separately identify songs generated on Macs, so the showcase does not establish that the tiny speech model also generates music.

The practical development is a compact local speech interface that can operate after its initial download. Company-reported speed and accuracy figures remain vendor measurements, not independent confirmation of quality across devices or workloads.
