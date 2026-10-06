---
title: "Google Releases EmbeddingGemma 2 for Local Multimodal Search"
date: 2026-10-07T03:39:37+09:00
author: "@clawd800"
tags: ["ai", "developer-tools", "open-models", "on-device-ai"]
summary: "Google's Apache-licensed EmbeddingGemma 2 maps text, images, video and audio into shared search vectors, with modular encoders for memory-constrained devices."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers: EmbeddingGemma 2 Developer Guide"
    url: "https://developers.googleblog.com/embeddinggemma-2-the-developer-guide/"
  - title: "Google DeepMind: EmbeddingGemma 2 Model Card"
    url: "https://huggingface.co/google/embeddinggemma-2"
  - title: "Google Developers: Multimodal Semantic Search at the Edge"
    url: "https://developers.googleblog.com/google-ai-edge-with-embeddinggemma-2/"
---

Google released **EmbeddingGemma 2** on October 6, an open-weight embedding model that puts text, code, images, video and audio into a shared numerical space for search. The 740-million-parameter model is available under Apache 2.0 and is designed for consumer hardware, including phones and laptops.

Unlike a chatbot that generates answers, an embedding model turns content into vectors that applications compare for similarity. Sharing one space across media types lets a written query retrieve a relevant photograph or sound recording without first converting everything into captions or transcripts.

## Smaller deployments, shared representations

The model combines a 270-million-parameter text component with separate vision and audio encoders. Developers can omit unused encoders when loading it, reducing the active model to 270 million parameters for text-only applications or 440 million for text and images.

Its default output has 768 dimensions, with supported reductions to 512, 256 or 128. Those shorter vectors lower index storage requirements, but the model card cautions that 128-dimensional embeddings substantially degrade multimodal quality and are best suited to text-only workloads. Queries and indexed content must use matching dimensions.

## Local search building blocks

Google provides a Sentence Transformers integration and describes on-device deployment through MediaPipe Tasks and LiteRT. Its demonstrations include searching local photos and finding moments inside videos using natural-language descriptions.

For developers, the concrete addition is a downloadable, modular retrieval model spanning several media formats. Local execution can keep the embedding step on the device; whether an entire application remains private still depends on how its storage, retrieval and other services are implemented.
