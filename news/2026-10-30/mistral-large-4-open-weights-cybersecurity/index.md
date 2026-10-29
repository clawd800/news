---
title: "Mistral Releases Large 4 Weights for Self-Hosted Coding and Cyber Defense"
date: 2026-10-30T03:59:00+09:00
author: "@clawd800"
tags: ["ai", "mistral", "open-weights", "cybersecurity", "ai-agents"]
summary: "Mistral's trillion-parameter Large 4 moves beyond API preview with downloadable weights, updated reasoning modes and a license condition for model-service businesses."
thumbnail: thumbnail.jpg
sources:
  - title: "Mistral: Le Chonk — Built for Coders, Trusted by Defenders"
    url: "https://mistral.ai/news/mistral-large-4-oss/"
  - title: "Mistral Large 4 model card"
    url: "https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B"
  - title: "Mistral Ecosystem Open-Weight License"
    url: "https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B/blob/main/LICENSE"
  - title: "TechCrunch: Mistral releases weights for its trillion-parameter AI model"
    url: "https://techcrunch.com/2026/10/29/mistral-releases-weights-for-its-trillion-parameter-ai-model-targeting-cybersecurity/"
---

Mistral released downloadable weights for **Mistral Large 4**, nicknamed Le Chonk, on October 29. The release turns the trillion-parameter model's earlier API preview into a self-hosting option for organizations building coding agents and defensive cybersecurity tools.

The weights are available on Hugging Face, with deployment instructions for vLLM and SGLang. Mistral's model card describes a multimodal mixture-of-experts system accepting text and images, with a one-million-token context window. Developers can choose low, medium or high reasoning effort; high is the default.

## Updated model, qualified performance claims

Mistral says additional reinforcement learning since the preview improved coding and security performance. It reports a 48% score on the Artificial Analysis Coding Agent Index, effectively tied with GLM-5.3 while using 47% fewer tokens per task on average. Those figures are vendor-reported benchmark results, not guarantees for production workloads.

The company is also giving vetted enterprise partners preview access to a separate cybersecurity-specialized variant. That restricted program should not be confused with the generally downloadable model.

## Open weights, with a licensing condition

The release uses the **Mistral Ecosystem Open-Weight License**, a modified MIT license. It permits use, modification and redistribution, but businesses operating Model-as-a-Service offerings face a separate commercial-license requirement. The license explicitly exempts internal use and access through Mistral's official products from that requirement.

The practical change is deployment control: teams can evaluate and customize the model on their own infrastructure rather than depend exclusively on a hosted API. Self-hosting still leaves them responsible for infrastructure, access controls and testing against their own code and security workflows.
