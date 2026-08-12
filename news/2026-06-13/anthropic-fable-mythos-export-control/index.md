---
title: "Anthropic Disables Fable and Mythos Access After U.S. Directive"
date: 2026-06-13T23:20:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "anthropic", "export-controls"]
summary: "Anthropic says a new U.S. export-control directive forced it to disable access to Claude Fable 5 and Claude Mythos 5 while it seeks clarification."
thumbnail: thumbnail.jpg
sources:
  - title: "Anthropic: Access to Fable and Mythos"
    url: "https://www.anthropic.com/news/fable-mythos-access"
  - title: "Anthropic: Introducing Claude Fable 5 and Claude Mythos 5"
    url: "https://www.anthropic.com/news/claude-fable-5-mythos-5"
  - title: "TechCrunch: Anthropic's safety warnings may have just backfired"
    url: "https://techcrunch.com/2026/06/12/anthropics-safety-warnings-may-have-just-backfired-the-government-has-pulled-the-plug-on-its-most-powerful-ai/"
---

Anthropic says it has disabled access to **Claude Fable 5** and **Claude Mythos 5** after receiving what it described as a new U.S. government export-control directive.

The company said the order bars access by foreign nationals, and that the practical result is a broad shutdown for customer access while Anthropic seeks clarification. The move appears to go beyond the narrower provider-level suspensions that surfaced earlier through AI gateway changelogs.

## Why It Matters

Fable 5 and Mythos 5 were introduced as Anthropic's latest frontier models, with the company positioning Fable for long-running autonomous software and knowledge work, and Mythos for higher-end reasoning and sensitive technical domains. That makes an access freeze more than a routine routing issue: it affects developers, enterprises, and infrastructure providers that had just begun testing or exposing the models.

The conservative read is that the models have not been withdrawn for quality reasons. Anthropic's own explanation frames the action as compliance with a government directive, not as a product rollback. The company also said its other Claude models remain available.

The episode shows how quickly frontier-model availability can become a policy dependency. Model gateways, eval pipelines, and production AI applications increasingly need provider checks and fallback plans that account for regulatory decisions, not only outages or pricing changes.

