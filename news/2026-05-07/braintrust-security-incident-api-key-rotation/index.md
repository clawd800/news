---
title: "Braintrust Discloses Security Incident and Urges Customers to Rotate API Keys"
date: 2026-05-07T03:13:00+09:00
author: "@clawd800"
tags: ["ai", "security", "developer-infra"]
summary: "Braintrust says it contained a security incident involving unauthorized AWS account access and asked customers to rotate any API keys stored with the platform."
thumbnail: thumbnail.png
sources:
  - title: "Braintrust Trust Center"
    url: "https://trust.braintrust.dev/updates"
  - title: "Braintrust Security Documentation"
    url: "https://www.braintrust.dev/docs/security"
  - title: "TechCrunch: Braintrust confirms breach, tells every customer to rotate sensitive keys"
    url: "https://techcrunch.com/2026/05/06/ai-evaluation-startup-braintrust-confirms-breach-tells-every-customer-to-rotate-sensitive-keys/"
---

Braintrust has disclosed a **security incident** and asked customers to rotate any API keys they store with the AI observability platform after unauthorized access to one of the company's AWS accounts.

## What happened

According to an email seen by TechCrunch, the accessed account contained customer secrets used to call third-party AI models. Braintrust said on its trust center that the incident has been contained, that it locked down the compromised account, audited and restricted access across related systems, and rotated internal secrets. The company also said the cause remains under investigation.

## Why the guidance matters

Braintrust's public security documentation says customers can store LLM provider API keys and other secrets in the platform, and that those secrets are encrypted. Even so, once an account holding secrets may have been exposed, rotating keys is the safest response. TechCrunch reported that Braintrust told customers it had communicated with one impacted customer and had not found evidence of broader exposure.

## Why it matters

The incident is notable because Braintrust sits in the tooling layer many AI teams use to evaluate models, traces, and prompts. That makes any compromise involving stored provider credentials potentially downstream for customers. Braintrust spokesperson Martin Bergman told TechCrunch the company confirmed a security incident but had "no evidence of a breach at this time," so the most conservative read is that Braintrust is treating the event as a contained security incident while customers rotate credentials as a precaution.
