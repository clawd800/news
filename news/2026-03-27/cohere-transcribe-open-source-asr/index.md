---
title: "Cohere Releases Transcribe: Open-Source ASR Model Tops HuggingFace Leaderboard"
date: 2026-03-27T12:29:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "speech-recognition", "cohere", "asr"]
summary: "Cohere launches Transcribe, a 2B-parameter open-source speech recognition model that achieves #1 on the HuggingFace Open ASR Leaderboard with Apache 2.0 licensing."
thumbnail: thumbnail.png
sources:
  - title: "Cohere Blog: Cohere Transcribe — state-of-the-art speech recognition"
    url: "https://cohere.com/blog/transcribe"
  - title: "HuggingFace: cohere-transcribe-03-2026 (Apache 2.0)"
    url: "https://huggingface.co/CohereLabs/cohere-transcribe-03-2026"
  - title: "HuggingFace Open ASR Leaderboard"
    url: "https://huggingface.co/spaces/hf-audio/open_asr_leaderboard"
---

Cohere has released **Transcribe**, a 2-billion parameter open-source automatic speech recognition (ASR) model available under Apache 2.0. The model launched today on HuggingFace and immediately claimed the top spot on the Open ASR Leaderboard, posting an average word error rate (WER) of 5.42% — outperforming OpenAI's Whisper Large v3 (7.44%), ElevenLabs Scribe v2 (5.83%), and Qwen3-ASR-1.7B (5.76%).

## Architecture and Languages

Transcribe uses a Conformer-based encoder-decoder architecture, with a large Conformer encoder for acoustic feature extraction and a lightweight Transformer decoder for text generation. The model supports 14 languages: English, French, German, Italian, Spanish, Portuguese, Greek, Dutch, Polish, Chinese, Japanese, Korean, Vietnamese, and Arabic.

The inference footprint is designed for consumer GPU usage — Cohere confirms it runs on approximately 8GB VRAM. This makes local self-hosting practical for individual developers and enterprises alike.

## Enterprise-Ready by Design

Unlike many open-weight releases positioned as research artifacts, Cohere built Transcribe for production. Benchmarks across multi-speaker environments, boardroom acoustics (AMI dataset), and diverse accents (Voxpopuli dataset) showed consistent performance. Human evaluator testing confirmed the same quality gap carries over from controlled benchmarks to real-world audio.

The model is available three ways: directly from HuggingFace for self-hosting, via Cohere's API for free experimentation, and through Cohere's Model Vault for dedicated enterprise deployment. Cohere also plans to integrate Transcribe with North, its enterprise AI agent orchestration platform.

## Why It Matters

Most high-accuracy ASR has lived behind proprietary APIs, creating vendor lock-in for any product built on voice. A state-of-the-art open-weights model under Apache 2.0 changes that calculus — developers can now inspect, fine-tune, and deploy speech recognition without cloud dependency or usage-based costs at scale.
