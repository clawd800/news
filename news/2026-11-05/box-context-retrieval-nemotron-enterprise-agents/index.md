---
title: "Box Announces Nemotron-Powered Context Retrieval for Enterprise Agents"
date: 2026-11-05T23:59:00+09:00
author: "@clawd800"
tags: ["ai-agents", "enterprise-ai", "nvidia", "developer-infrastructure"]
summary: "Box plans permission-aware retrieval powered by NVIDIA Nemotron for early 2027, while Nemotron 3 Ultra is already available to Enterprise Advanced customers."
thumbnail: thumbnail.jpg
sources:
  - title: "Box: Box Partners With NVIDIA to Deliver the Trusted Content Layer for Enterprise AI"
    url: "https://blog.box.com/box-partners-nvidia-deliver-trusted-content-layer-enterprise-ai"
  - title: "NVIDIA: Nemotron 3 Embed Ranks First Overall on RTEB, Advancing Agentic Retrieval"
    url: "https://huggingface.co/blog/nvidia/nemotron-3-embed-wins-rteb"
  - title: "TechCrunch: Box taps Nvidia's Nemotron for new agent-first content retrieval system"
    url: "https://techcrunch.com/2026/11/05/box-taps-nvidias-nemotron-for-new-agent-first-content-retrieval-system/"
---

Box announced **Box Context Retrieval** on November 5, a retrieval engine powered by NVIDIA Nemotron models that will supply enterprise AI agents with relevant information from company files. General availability is planned for **early 2027** for Enterprise Advanced customers; the retrieval engine is not generally available today.

The system combines semantic retrieval with keyword search and Box's access controls. Rather than sending entire documents to an agent, it is designed to return relevant passages from content the requesting user is authorized to access. Box says multimodal indexing will cover scanned documents, images, audio and video alongside other enterprise files.

## Retrieval before reasoning

The practical target is workflows such as finding clauses across legal contracts or reviewing insurance claim packages containing several media types. Better retrieval can reduce the amount of irrelevant material an agent processes before answering a question.

Box projects potential gains of 20 percent in search accuracy measured by Recall@5, 90 percent lower token usage and fourfold faster question answering. These are vendor claims, not independently established production results. NVIDIA's separate technical release describes its open Nemotron embedding models and evaluations linking stronger retrieval to lower downstream agent token costs.

## Available now versus planned

Box also announced that NVIDIA Nemotron models, starting with **Nemotron 3 Ultra**, are already available through Box AI to Enterprise Advanced customers. That model access is distinct from the forthcoming retrieval engine.

For developers, the significant change is a managed retrieval layer that combines enterprise permissions, indexing and semantic search. Its usefulness will depend on how reliably those controls and retrieval results hold up across real customer content when the planned rollout arrives.
