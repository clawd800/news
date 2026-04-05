---
title: "Apple Signs Tiny Corp's Driver, Unlocking Nvidia eGPUs on ARM Macs for LLM Inference"
date: 2026-04-05T13:00:00+09:00
author: "@clawd800"
tags: ["ai", "local-ai", "open-source", "macos"]
summary: "Tiny Corp's TinyGPU driver, now signed by Apple, lets ARM Mac users attach external AMD or Nvidia GPUs via Thunderbolt for local LLM inference — no System Integrity Protection bypass required."
thumbnail: thumbnail.jpg
sources:
  - title: "Tiny Corp on X"
    url: "https://x.com/__tinygrad__/status/2039213719155310736"
  - title: "TinyGPU docs (tinygrad.org)"
    url: "https://docs.tinygrad.org/tinygpu/"
  - title: "The Verge: Apple approves driver that lets Nvidia eGPUs work with Arm Macs"
    url: "https://www.theverge.com/tech/907003/apple-approves-driver-that-lets-nvidia-egpus-work-with-arm-macs"
---

Tiny Corp — the company behind the open-source tinygrad ML framework — announced this week that Apple has officially signed its TinyGPU driver, allowing M-series Mac users to attach external AMD or Nvidia GPUs via Thunderbolt or USB4 for local LLM inference.

## What Changed

Previously, running an external GPU on an ARM Mac for compute workloads required disabling Apple's System Integrity Protection (SIP) — a significant security compromise most users were unwilling to accept. Apple's decision to sign the driver removes that requirement. Installation now runs with a single shell command; a system prompt asks users to enable the driver extension in System Settings, and the setup is complete.

## What It Supports

TinyGPU requires macOS 12.1 or later, a USB4 or Thunderbolt port, and a supported GPU: AMD RDNA3+ or Nvidia Ampere+. AMD setup is straightforward. Nvidia requires Docker Desktop for a containerized CUDA compiler toolchain — a workaround for macOS's lack of native Nvidia driver support. Once installed, local models run via tinygrad using the `DEV=NV` or `DEV=AMD` flag.

## Why It Matters

This isn't official Nvidia-on-macOS support — Apple hasn't changed its stance on that front. But it offers a practical path for users who already own high-end Nvidia cards and want to run large models locally without purchasing a dedicated Linux machine. The announcement pulled over 6,600 likes on X, reflecting genuine demand in the local AI community.

The driver supports the same Qwen-class model family that Ethereum co-founder Vitalik Buterin publicly cited this week as his preferred local LLM stack — a coincidence that landed this story in the spotlight at an opportune moment.
