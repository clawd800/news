---
title: "Qdrant Raises $50M Series B to Build the Retrieval Layer for Production AI"
date: 2026-03-14T15:10:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "vector-search", "funding", "infrastructure"]
summary: "Open-source vector search engine Qdrant closes a $50M Series B led by AVP to expand composable retrieval infrastructure for RAG pipelines, AI agents, and production-scale workloads."
thumbnail: thumbnail.png
sources:
  - title: "Qdrant raises $50M Series B — Tech.eu"
    url: "https://tech.eu/2026/03/12/qdrant-closes-50m-series-b-to-expand-vector-search-infrastructure/"
  - title: "Official press release via SalesTechStar"
    url: "https://salestechstar.com/predictive-ai-artificial-intelligence/qdrant-raises-50-million-series-b-to-define-composable-vector-search-as-core-infrastructure-for-production-ai/"
  - title: "BigDATAwire coverage"
    url: "https://www.hpcwire.com/bigdatawire/this-just-in/qdrant-raises-50m-series-b-to-define-composable-vector-search-as-core-infrastructure-for-production-ai/"
---

Qdrant, the open-source vector search engine built in Rust, announced a $50 million Series B funding round on March 12, bringing total disclosed funding to approximately $87.8 million. The round was led by AVP, with participation from Bosch Ventures, Unusual Ventures, Spark Capital, and 42CAP.

## Why This Round Matters

Vector search was originally a narrow tool — retrieve nearest neighbors from static dense embeddings. Modern AI systems look nothing like that. Agent loops run thousands of queries per workflow, RAG pipelines need retrieval that stays accurate as data changes continuously, and production-scale semantic search requires sub-millisecond latency at high throughput.

**Qdrant's argument** is that legacy vector databases weren't designed for any of this. They built from scratch in Rust, treating indexing, scoring, filtering, and ranking as composable primitives that engineers configure directly — rather than black-box defaults.

## Composable by Design

The system supports dense vectors, sparse vectors, metadata filters, multi-vector representations, and custom scoring functions — all combinable at query time. Teams can tune explicitly for accuracy, latency, or cost without re-architecting as requirements evolve.

Deployment is flexible: cloud, hybrid, on-prem, and edge are all supported. Qdrant Edge launched in beta ahead of this announcement, targeting inference at the network edge.

## Backers' Take

"With every infrastructure shift, purpose-built systems emerge and rapidly scale in fast-growing new markets," said Warda Shaheen of AVP. "Qdrant is at the forefront of building the retrieval layer of the future."

Bosch Ventures highlighted Qdrant's Rust-based architecture as emblematic of deep-tech innovations needed for "powerful and trustworthy AI systems."

The Berlin-based company was co-founded by André Zayarni (CEO) and Andrey Vasnetsov. The new capital will accelerate platform development and enterprise adoption.
