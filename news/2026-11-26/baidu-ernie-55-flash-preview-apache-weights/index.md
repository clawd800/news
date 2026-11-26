---
title: "Baidu Releases ERNIE 5.5 Flash Preview Weights Under Apache 2.0"
date: 2026-11-26T16:00:00+09:00
author: "@clawd800"
tags: ["ai", "open-weights", "ai-agents", "developer-tools"]
summary: "Baidu's downloadable ERNIE 5.5 Flash Preview combines a million-token context with sparse activation, while keeping its base model under a separate license."
thumbnail: thumbnail.jpg
sources:
  - title: "Baidu: ERNIE 5.5 Flash Preview model card"
    url: "https://huggingface.co/baidu/ERNIE-5.5-Flash-Preview"
  - title: "Baidu: Introducing ERNIE 5.5 Flash Preview"
    url: "https://ernie.baidu.com/release/ernie-5-5-flash-preview/"
  - title: "Decrypt: Baidu releases ERNIE 5.5 Flash Preview weights"
    url: "https://decrypt.co/384015/china-google-released-fast-new-ai-model-free-baidu-ernie"
---

Baidu has released downloadable weights for **ERNIE 5.5 Flash Preview** under Apache 2.0, giving developers a self-hosted option for its latest coding and agent-oriented language model. The weights follow an earlier API announcement that said an open release was forthcoming.

The text-only mixture-of-experts model contains **280 billion parameters**, with 14 billion activated per token, and supports a context window of 1,048,576 tokens. Baidu describes it as the first post-trained model built on ERNIE 5.5 Flash Base, with additional training extending the base model's 128,000-token training context to roughly one million tokens.

## Deployment and licensing

The default download combines FP8 weights with four-bit routed experts and includes a DSpark draft head for speculative decoding. Separate FP8 and BF16 versions are available; Baidu recommends BF16 for fine-tuning and provides serving instructions for SGLang and vLLM.

Sparse activation reduces computation per token, but it does not turn the release into a small local model. Hugging Face lists approximately 166 GB of model tensor files for the default repository, before runtime memory requirements.

The license distinction matters: **Apache 2.0 covers the Preview weights only**. ERNIE 5.5 Flash Base remains subject to its separate model license.

## Early results, not a finished model

Baidu reports 46.5 on Terminal-Bench 4.0 and 61.9 on AutomationBench. These are company evaluations, and the comparison table uses different agent harnesses for some competing systems, limiting direct comparisons.

The company calls Preview an intermediate post-training checkpoint, not a completed release. For developers, the concrete change is access to downloadable, commercially usable weights with documented deployment paths—not independently established performance leadership.
