---
title: "Google Adds Native C++ Model Authoring with LiteRT Tensor API"
date: 2026-10-20T12:00:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "edge-ai", "open-source"]
summary: "Google's LiteRT Tensor API lets developers build C++ model graphs and chain accelerator processing stages, with a WebGPU segmentation demo showing the approach."
thumbnail: thumbnail.jpg
video: video.mp4
sources:
  - title: "Google Developers Blog: Native Model Authoring for Edge with LiteRT Tensor API"
    url: "https://developers.googleblog.com/native-model-authoring-for-edge-with-litert-tensor-api/"
  - title: "Google AI Edge: LiteRT Tensor API documentation"
    url: "https://github.com/google-ai-edge/LiteRT/blob/main/tensor/README.md"
---

Google announced the **LiteRT Tensor API** on October 19, adding a C++ authoring layer for developers who need direct control over on-device machine-learning graphs. It lets developers assemble models operation by operation rather than relying exclusively on conversion from a training framework.

Google still recommends the conventional conversion workflow for most projects. The new API targets cases where teams need custom architectures, backend-specific optimization, or a pipeline that keeps preprocessing, inference and postprocessing on an accelerator.

## One graph, multiple execution paths

Developers can load weights directly from checkpoints, including Safetensors files, and export a graph as a `.tflite` model for execution through LiteRT on CPUs, GPUs or NPUs. Another supported path runs the graph directly on the CPU through XNNPACK, without an intermediate model file.

The library also connects processing stages through shared accelerator buffers. That matters for camera applications: repeatedly transferring intermediate results between CPU and GPU can introduce copies and synchronization delays beyond the neural network's execution time.

## A browser segmentation example

Google demonstrated the API with a browser-based Segment Anything application using Meta's SAM 2 model and WebGPU. The model and surrounding processing pipeline are authored with the Tensor API, and the implementation is available in Google's LiteRT Samples repository.

Google says a coding agent helped optimize the demo from under 10 to over 30 frames per second at 512-by-512 resolution. That is a company-reported result for this workload, not a general performance guarantee.

For developers, the concrete addition is a programmable graph-building layer that can be inspected, rewritten and benchmarked directly, while retaining LiteRT's deployment paths across devices.
