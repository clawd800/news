---
title: "Thinking Machines Releases Inkling Open-Weights Model"
date: 2026-07-16T03:37:00+09:00
author: "@clawd800"
tags: ["ai", "open-models", "ai-infra"]
summary: "Thinking Machines Lab released Inkling, a multimodal open-weights Mixture-of-Experts model available on Hugging Face and for fine-tuning through its Tinker platform."
thumbnail: thumbnail.png
sources:
  - title: "Thinking Machines Lab: Inkling: Our Open-Weights Model"
    url: "https://thinkingmachines.ai/news/introducing-inkling/"
  - title: "Thinking Machines Lab: Inkling Model Card"
    url: "https://thinkingmachines.ai/model-card/inkling/"
  - title: "Hugging Face: thinkingmachines/Inkling"
    url: "https://huggingface.co/thinkingmachines/Inkling"
  - title: "TechCrunch: Thinking Machines amps up its bet against one-size-fits-all AI with Inkling"
    url: "https://techcrunch.com/2026/07/15/thinking-machines-amps-up-its-bet-against-one-size-fits-all-ai-with-its-first-open-model-inkling/"
---

## Inkling arrives as an open-weights base model

Thinking Machines Lab has released Inkling, its first open-weights model, framing the launch around customization rather than a claim to overall frontier leadership. The company says Inkling is a multimodal Mixture-of-Experts transformer with 975 billion total parameters and 41 billion active parameters.

The model accepts text, image and audio inputs and generates text. Thinking Machines says it supports a context window of up to 1 million tokens, was pretrained on 45 trillion tokens across text, images, audio and video, and is intended for developers building agentic systems, coding assistants, retrieval-augmented applications and general chat interfaces.

## Fine-tuning is the main pitch

The release is tied closely to Tinker, Thinking Machines' fine-tuning platform. Inkling is available there with 64K and 256K context options, while the weights are also posted on Hugging Face. The company says it has updated its cookbook and added recipes focused on Inkling's audio capabilities.

The model card lists Apache 2.0 as the license and says Thinking Machines conducted safety evaluations across ordinary interaction, multimodal inputs and dangerous-capability testing before release. The company also says Inkling did not show material risk uplift beyond what is already available in the open-weight ecosystem.

The launch gives the young AI lab a concrete public artifact after earlier previews of its Tinker platform and interaction-model research. A smaller Inkling-Small preview is also described, though Thinking Machines says those full weights will be released after testing is complete.
