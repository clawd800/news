---
title: "Meta Prices Muse Spark Discount Around Data Sharing"
date: 2026-09-04T03:37:00+09:00
author: "@clawd800"
tags: ["ai", "meta", "agents", "developer-infra"]
summary: "Meta's Muse Spark 1.3 pricing now separates a standard endpoint from a cheaper contributor tier that can be used to improve Meta products."
thumbnail: thumbnail.jpg
sources:
  - title: "Meta: Muse Spark 1.3"
    url: "https://developer.meta.com/ai/models/muse-spark/"
  - title: "TechCrunch: Meta is paying to peek at how you use their latest AI model"
    url: "https://techcrunch.com/2026/09/03/meta-is-paying-to-peek-at-how-you-use-their-latest-ai-model/"
  - title: "Crypto Briefing: Meta offers discounted access to Muse Spark 1.3 model for data sharing"
    url: "https://cryptobriefing.com/meta-muse-spark-discounted-data-sharing/"
  - title: "OpenRouter: Muse Spark 1.3 Contributor"
    url: "https://openrouter.ai/meta/muse-spark-1.3-contributor"
---

Meta is making the data tradeoff around its Muse Spark model unusually explicit. Its developer listing for **Muse Spark 1.3** separates the regular endpoint from a cheaper **Contributor** version, with the contributor route marked as eligible to improve Meta products.

## What changed

The pricing difference is large enough to matter for agent builders. Meta's standard Muse Spark 1.3 endpoint is listed at $1.25 per million input tokens, $0.15 per million cached input tokens, and $4.25 per million output tokens. The contributor endpoint is listed at $0.10, $0.002, and $0.20 for the same categories.

That means developers can cut token costs sharply if they are willing to send traffic through the endpoint Meta says may be used for product improvement. For teams building coding agents or multi-agent workflows, the lower output-token price is the clearest economic incentive because agent loops can produce large volumes of generated text.

## Why it matters

The move turns a familiar AI privacy choice into a visible line item. Many AI providers offer opt-outs from training or product-improvement use, but Meta's model page makes the pricing split part of the product surface.

The conservative read is that Meta is testing whether developers will trade usage data for lower inference bills. That could help Meta collect more real-world agent traffic while giving smaller teams a cheaper way to experiment with long-context Muse Spark deployments.
