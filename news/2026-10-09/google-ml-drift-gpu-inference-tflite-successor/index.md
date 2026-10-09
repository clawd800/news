---
title: "Google Open-Sources ML Drift, Successor to TFLite's GPU Delegate"
date: 2026-10-09T20:00:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "edge-ai", "open-source"]
summary: "Google released ML Drift for cross-platform GPU inference and said the legacy TensorFlow Lite GPU delegate will no longer receive new features."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: ML Drift — Next-Gen GPU AI/ML Inference at the Edge"
    url: "https://developers.googleblog.com/ml-drift-next-gen-gpu-aiml-inference-at-the-edge/"
  - title: "Google AI Edge: ML Drift source repository"
    url: "https://github.com/google-ai-edge/ml-drift"
---

Google has open-sourced **ML Drift**, a GPU compute engine for on-device machine-learning inference, under the Apache 2.0 license. The October 8 announcement also sets a migration direction: the legacy TensorFlow Lite GPU delegate will no longer receive new feature updates.

ML Drift serves as LiteRT's core GPU acceleration engine and can also be used as a standalone C++ library. Its backends cover OpenCL, Metal, WebGPU through Dawn, and OpenGL ES, giving developers a shared foundation across otherwise different graphics APIs.

The technical changes address both conventional vision models and generative AI. Tensor virtualization separates logical tensors from their physical GPU storage, while a unified shader abstraction reduces the need for separate backend implementations. Google also describes five-dimensional tensor support and stage-aware optimizations that distinguish an LLM's prompt-processing phase from token-by-token decoding.

The release is not solely experimental infrastructure. Google says ML Drift already powers features in products including YouTube Shorts, Photos, Meet, and Chrome. It reports up to a 40% reduction in average frame latency for Shorts segmentation effects on Android and iOS. That is a workload-specific company result, not a general speedup guarantee.

**Desktop support needs a narrower reading:** Google presents Windows and Linux workstation results as early previews, while keeping mobile and edge inference its primary focus.

For application developers, the recommended route is the LiteRT ML Drift GPU accelerator; systems engineers can build custom compute graphs through the standalone APIs. Google says existing models remain backward compatible. Acceleration is available in standalone LiteRT packages, with integration into LiteRT in Google Play Services still described as coming soon.
