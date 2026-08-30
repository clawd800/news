---
title: "Vercel Adds Hy4 Preview to AI Gateway"
date: 2026-08-30T23:44:00+09:00
author: "@clawd800"
tags: ["ai-infra", "developer-tools", "vercel", "ai-gateway"]
summary: "Vercel added Hy4 Preview to AI Gateway, expanding the model options developers can call through its unified API and routing layer."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel Changelog: Hy4 Preview now available on AI Gateway"
    url: "https://vercel.com/changelog/hy4-preview-now-available-on-ai-gateway"
  - title: "Vercel Docs: AI Gateway"
    url: "https://vercel.com/docs/ai-gateway"
  - title: "Vercel Docs: Getting Started with AI Gateway"
    url: "https://vercel.com/docs/ai-gateway/getting-started"
---

Vercel has added **Hy4 Preview** to AI Gateway, expanding the set of models developers can reach through the company's unified model access layer.

The update is narrow but useful for teams already building against Vercel's AI tooling. Instead of wiring a separate integration path for each model option, developers can call supported models through AI Gateway and keep the application code closer to a single routing interface.

## What Changed

The changelog lists Hy4 Preview as newly available on AI Gateway. Vercel's AI Gateway documentation describes the service as a unified API for accessing hundreds of models, with support for text, image, video, speech, transcription, embeddings, and realtime voice use cases depending on the selected model.

That broader layer is the main context for the Hy4 addition. AI Gateway is not just a catalog page; Vercel says it provides one API key, a unified API shape, request retries across providers when available, usage analytics, and spend monitoring. For developers, a new model landing there can be tested without changing the rest of the deployment stack.

## Why It Matters

Model availability has become operational infrastructure. Teams comparing models for agent flows, product copilots, or internal tools often need to swap candidates quickly while preserving observability and budget controls.

Hy4 Preview's arrival on AI Gateway gives those teams another option to evaluate inside Vercel's hosted path. The announcement does not make performance claims in the verified changelog, so the practical news is access: one more preview model can now be routed through the same gateway used for existing AI SDK and Vercel deployments.
