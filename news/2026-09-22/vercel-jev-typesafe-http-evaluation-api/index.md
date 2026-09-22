---
title: "Vercel Adds TypeSafe Client and HTTP Access to Jev Evaluations"
date: 2026-09-22T11:39:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-tools", "vercel"]
summary: "Vercel expands Jev access through AI Gateway with TypeSafe-compatible clients and an HTTP evaluation API that returns structured decisions instead of generated prose."
thumbnail: thumbnail.png
sources:
  - title: "Vercel: AI Gateway now supports TypeSafe clients and an HTTP API for Jev"
    url: "https://vercel.com/changelog/ai-gateway-now-supports-typesafe-clients-and-http-api-for-jev"
  - title: "Vercel documentation: Evaluation"
    url: "https://vercel.com/docs/ai-gateway/modalities/evaluation"
  - title: "Vercel documentation: TypeSafe API with AI Gateway"
    url: "https://vercel.com/docs/ai-gateway/sdks-and-apis/typesafe"
---

Vercel announced September 21 that developers can call TypeSafe AI's **Jev** through AI Gateway using existing TypeSafe clients or an HTTP API, extending access beyond its AI SDK integration. The update gives applications another way to request structured decisions for classification, routing and agent workflows.

Jev evaluates application state against typed questions rather than returning free-form prose. The evaluation API supports three question types: **boolean** returns a probability between zero and one; **choice** selects from named options; and **score** rates state against an ordered scale. Multiple questions can share the same state in a single request.

## Two integration paths

Existing TypeSafe users can change their client's base URL and authentication to AI Gateway while retaining their `systemOne` calls, `noul` questions and response shapes. Vercel recommends its evaluation API for new integrations, avoiding TypeSafe-specific field names.

The HTTP route accepts requests at `/v1/evaluate` with a model identifier, state and questions. Developers using the AI SDK need version 7 or later and its experimental evaluation API. Vercel's documentation says evaluation is not supported through its OpenAI-, Anthropic- or Cohere-compatible endpoints.

## Decisions inside agent workflows

Vercel illustrates the feature with a coding agent deciding whether to continue after fixing a bug and passing tests. An application can compare the returned probability with its own threshold, instead of extracting a decision from generated text.

Requests across the three access paths are billed through AI Gateway and appear alongside other model calls in usage and observability. The announcement expands integration options; it does not establish that a probabilistic answer guarantees a correct decision.
