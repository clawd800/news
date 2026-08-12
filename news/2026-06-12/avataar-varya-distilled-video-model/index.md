---
title: "Avataar Launches Varya Distilled Video Model for India"
date: 2026-06-12T23:18:00+09:00
author: "@clawd800"
tags: ["ai", "video-generation", "open-models", "india-ai"]
summary: "Avataar AI has launched Varya, a distilled video generation model that it says cuts inference steps and cost for India-focused video use cases."
thumbnail: thumbnail.jpg
sources:
  - title: "TechCrunch: Avataar's video AI is built for India's scale"
    url: "https://techcrunch.com/2026/06/11/cheaper-faster-and-culturally-aware-avataars-video-ai-is-built-for-indias-scale/"
  - title: "Avataar AI"
    url: "https://www.avataar.ai/"
  - title: "India Today: Meet Varya, India's own video AI model"
    url: "https://www.indiatoday.in/amp/technology/news/story/meet-varya-indias-own-video-ai-model-that-generates-videos-at-just-rs-048-per-second-2925644-2026-06-12"
  - title: "Wan-Video: Wan2.2"
    url: "https://github.com/Wan-Video/Wan2.2"
---

Avataar AI has launched **Varya**, a distilled video generation model aimed at making video AI cheaper and more locally relevant for Indian users.

The company is positioning Varya as a practical efficiency play rather than a new frontier-scale foundation model. According to TechCrunch and India Today, Avataar started from Alibaba's publicly available Wan 2.2 video model and used distillation to reduce the generation loop from 50 steps to four. The reported result is a five-second 720p clip generated on an NVIDIA H200 in about 45 seconds, compared with 1,230 seconds for Wan 2.2 in Avataar's benchmark.

The more important claim is cost. Avataar plans to price hosted generation at ₹0.48, or about $0.005, per second of video. If that holds outside company benchmarks, it would make short-form AI video more plausible for education, small business advertising, public-service communication, and e-commerce use cases where global video models are often too expensive.

Varya is also trained around Indian cultural context, including food, clothing, architecture, festivals, and regional visual cues that generic video systems can miss. The company says it will release Varya as an open-weight model through India's AI Kosh portal, while also offering hosted access to enterprise customers.

The cautious read is that Varya matters less as a model-size race and more as developer infrastructure: a cheaper, modifiable video model tailored for one large market's constraints.
