---
title: "Vercel Adds Baseten Decision Models for Classification and Routing"
date: 2026-10-22T08:00:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infrastructure", "ai-agents"]
summary: "Baseten’s Mammoth-1 and Elephant-1 reach Vercel AI Gateway with structured decision outputs and free access through October 27."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel: Baseten’s Mammoth-1 and Elephant-1 now available on AI Gateway"
    url: "https://vercel.com/changelog/basetens-mammoth-1-and-elephant-1-now-available-on-ai-gateway-for-free"
  - title: "Vercel AI Gateway: Decision model API documentation"
    url: "https://vercel.com/docs/ai-gateway/modalities/decision"
---

Vercel added Baseten’s **Mammoth-1 and Elephant-1** to AI Gateway on October 21, giving developers two more models for classification, request routing and rubric-based scoring. Access is free through October 27, a limited introductory window rather than a permanent pricing commitment.

According to Vercel’s announcement, Mammoth-1 has 27 billion parameters and Elephant-1 has 9 billion. Both support a 16,000-token context window and return structured choices, probabilities and scores rather than conversational responses.

## Decisions instead of chat

An application can submit several questions about the same input in one request. For a customer-support message, that could mean choosing a destination team, identifying whether a refund was requested and scoring urgency. The application sets the probability threshold for automatic action or human review.

Developers select `baseten/mammoth-1` or `baseten/elephant-1` through the AI SDK’s experimental decision function. Vercel also documents a dedicated HTTP endpoint and compatible decision interfaces for existing integrations.

There is an important integration distinction: these calls are **not supported through Chat Completions or Responses endpoints**. Vercel’s documentation says the AI SDK decision interface requires version 7.0.128 or later; earlier AI SDK 7 releases use the older experimental evaluation function.

## What changes for teams

Gateway decision calls appear in usage logs and count toward budgets alongside other model requests. This adds specialized classification and routing options to the same operational tooling teams use for other models.

The release gives developers a short evaluation window. It does not establish production accuracy for a particular workload; teams still need to test their own criteria and review thresholds before automating consequential decisions.
