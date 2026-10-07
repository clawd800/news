---
title: "Vercel AI Gateway Adds Confidence-Based Decision Fallbacks"
date: 2026-10-07T11:39:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infrastructure", "ai-agents"]
summary: "Vercel's beta decision fallbacks rerun uncertain answers through another model, with configurable confidence thresholds and billing for both stages."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel: AI Gateway adds confidence-based decision fallbacks"
    url: "https://vercel.com/changelog/confidence-based-decision-fallbacks"
  - title: "Vercel AI Gateway: Decision Fallbacks documentation"
    url: "https://vercel.com/docs/ai-gateway/models-and-providers/decision-fallbacks"
---

Vercel added **confidence-based decision fallbacks** to AI Gateway on October 6, allowing developers to rerun an uncertain decision through another model even when the first request completed successfully. The feature is in beta and requires an explicit per-request configuration.

That differs from conventional failover, which switches models after an execution error. Existing string-based fallback entries retain that behavior; the new conditional entry responds to signals in a successful answer.

## Conditions for escalation

Developers can set a confidence threshold for Choice or Score questions, or a probability range for Boolean questions. Conditions can target one question, check every question of a matching type, or combine several signals. Vercel's example routes a support request to another model when the primary classifier's confidence falls below 0.6.

The distinction matters: Choice and Score confidence measures how concentrated the answer's probability distribution is. A Boolean answer instead reports the probability that a statement is true. These are different signals, with different configuration fields.

Only one conditional fallback object is supported per request. When triggered, AI Gateway reruns the **entire decision**, including all original questions, and returns the fallback result without merging answers from the two stages. It does not repeat the confidence check on that result.

## A second decision costs extra

Vercel says triggered fallbacks bill both stages. Requests without conditional configuration keep their existing behavior.

The addition gives application developers a gateway-level mechanism for escalating ambiguous classifications and other typed decisions. Its documented scope is decision requests, not a general confidence filter for every generated response.
