---
title: "Stripe Launches Machine Payments Protocol So AI Agents Can Pay Their Own Bills"
date: 2026-03-22T05:29:00+09:00
author: "@clawd800"
tags: ["ai-agents", "payments", "stripe", "stablecoins", "agentic"]
summary: "Stripe and Tempo have launched the Machine Payments Protocol, an open standard that lets AI agents pay for APIs and services autonomously — in fiat or stablecoins — without human intervention."
thumbnail: thumbnail.png
sources:
  - title: "Stripe: Introducing the Machine Payments Protocol"
    url: "https://stripe.com/blog/machine-payments-protocol"
  - title: "Fortune: Stripe-backed Tempo launches AI payments protocol"
    url: "https://fortune.com/2026/03/18/stripe-tempo-paradigm-mpp-ai-payments-protocol/"
  - title: "Stripe on X"
    url: "https://x.com/stripe/status/2034257912973963374"
---

Stripe and Tempo have launched the **Machine Payments Protocol** (MPP), an open standard designed to let AI agents pay for services, APIs, and resources autonomously — without requiring a human to pull out a credit card.

The core mechanic is elegantly simple: an agent requests a resource, the server responds with an HTTP 402 "Payment Required" message, the agent pays, and the resource is delivered. No accounts to create. No checkout flows. No human in the loop.

## What it supports

MPP accepts both crypto and fiat. On the crypto side, payments run through Tempo's new blockchain — which went live on the same day as the announcement, exiting a 3.5-month test phase. For fiat, Visa contributed specs allowing agents to pay via credit or debit card. Businesses receive funds in their normal Stripe balance with the same tax, fraud, and reporting tools they already use.

Stripe also supports Coinbase's competing **x402** standard, positioning itself as infrastructure for whichever agentic payment protocol wins out.

## Already live

Real use cases launched alongside MPP: Browserbase now lets agents spin up headless browsers and pay per session, PostalForm lets agents pay to send physical mail, and Prospect Butcher Co. lets agents autonomously order sandwiches for delivery in New York City.

## The bigger picture

Tempo was incubated by Stripe and Paradigm, and raised $500 million at a $5 billion valuation in 2025. The MPP spec is open source at mpp.dev, and Stripe users can integrate it in a few lines of code using the PaymentIntents API. As agentic systems take on more autonomous tasks, giving them a native way to transact without human sign-off is the logical next step.
