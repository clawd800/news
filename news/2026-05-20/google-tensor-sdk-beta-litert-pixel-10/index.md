---
title: "Google Tensor SDK Beta Brings LiteRT Workflow to Pixel 10"
date: 2026-05-20T07:15:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "on-device-ai", "google"]
summary: "Google moved its Tensor ML SDK into beta, tying Pixel 10 TPU deployment to LiteRT and a model garden for on-device AI apps."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: Google Tensor SDK Beta with LiteRT"
    url: "https://developers.googleblog.com/google-tensor-sdk-beta-with-litert/"
  - title: "Google AI Edge: Google Tensor SDK"
    url: "https://ai.google.dev/edge/tensor-sdk/"
  - title: "Google AI Edge: Tensor SDK Model Garden"
    url: "https://ai.google.dev/edge/tensor-sdk/model-garden"
---

Google has moved its Tensor ML SDK from experimental access into beta, giving developers a more formal path to run machine learning and generative AI models on the TPU inside Pixel 10 devices.

The practical change is the SDK's integration with LiteRT, Google's on-device deployment framework. Google says developers can use LiteRT tooling to convert and compile PyTorch or TFLite models, distribute runtime and compiler pieces through Play Feature Delivery, and run inference on the Tensor TPU with CPU or GPU fallback when the TPU is unavailable.

The beta also comes with a model garden aimed at reducing the amount of setup needed before testing on Pixel hardware. Google's announcement says the garden includes more than 100 classic machine learning models plus generative AI models, including Gemma 3 1B. The separate model garden page lists categories across depth estimation, image classification, image segmentation, object detection, pose estimation, speech recognition, text classification, and other common mobile AI tasks.

This is developer infrastructure, not a new consumer app. The notable point is that Google is trying to make Pixel's custom TPU accessible through the same LiteRT stack it is already promoting for broader edge deployment. If the beta works as described, app developers get a more consistent route from model conversion to device-side inference, while users get features that can stay lower-latency and more private because the model runs locally.
