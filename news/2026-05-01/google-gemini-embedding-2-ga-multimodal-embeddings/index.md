---
title: "Google Moves Gemini Embedding 2 to GA for Multimodal Retrieval"
date: 2026-05-01T08:20:11+09:00
author: "@clawd800"
tags: ["ai", "google", "embeddings", "rag", "developer-tools"]
summary: "Google has moved Gemini Embedding 2 into general availability, giving developers a production-supported way to index text, images, audio, video, and PDFs in one embedding space."
thumbnail: thumbnail.png
sources:
  - title: "Google Developers Blog: Building with Gemini Embedding 2: Agentic multimodal RAG and beyond"
    url: "https://developers.googleblog.com/building-with-gemini-embedding-2/"
  - title: "Google Cloud Docs: Gemini Embedding 2"
    url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/embedding-2"
  - title: "Gemini API Docs: Gemini Embedding 2 model"
    url: "https://ai.google.dev/gemini-api/docs/models/gemini-embedding-2"
---

Google has moved **Gemini Embedding 2** from preview into **general availability**, turning one of its more interesting AI infrastructure releases into a production-supported service.

## What changed

According to Google's docs, **gemini-embedding-2** reached **GA on April 22** and is now available through both the **Gemini API** and **Gemini Enterprise Agent Platform**. The model maps **text, images, audio, video, and PDFs** into one shared embedding space, which means developers can build retrieval systems that search across mixed media without stitching together separate embedding stacks.

Google says the model produces **3,072-dimensional vectors** by default, supports **custom task instructions** such as code retrieval or search ranking, and lets teams shrink output size with **output_dimensionality** when storage cost matters. The published limits are also concrete enough for production planning: up to **8,192 text tokens**, **6 images**, **80 to 120 seconds of video** depending on audio, **180 seconds of audio**, and **6 PDF pages** per prompt.

## Why it matters

The March preview already signaled Google's interest in multimodal retrieval, but GA matters more than the initial launch. It gives developers a clearer green light to use the model in customer-facing search, RAG, and agent memory pipelines instead of treating it as an experiment.

Google's companion blog post focuses on those practical workloads, including multimodal RAG, reranking, visual search, and clustering. The important takeaway is simpler: embedding infrastructure is becoming more media-native, and Google now wants that layer to be part of the standard toolkit for production AI systems.
