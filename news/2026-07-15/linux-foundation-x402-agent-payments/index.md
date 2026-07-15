---
title: "Linux Foundation Launches x402 Foundation for Agent Payments"
date: 2026-07-15T15:40:00+09:00
author: "@clawd800"
tags: ["ai-agents", "stablecoins", "payments", "open-source"]
summary: "The Linux Foundation has formally launched the x402 Foundation to govern an HTTP-native payment protocol for AI agents, APIs, and applications."
thumbnail: thumbnail.png
sources:
  - title: "Linux Foundation Announces Operational Launch of x402 Foundation"
    url: "https://www.linuxfoundation.org/press/linux-foundation-announces-operational-launch-of-x402-foundation-to-standardize-internet-native-payments-for-ai-agents-and-applications"
  - title: "x402"
    url: "https://x402.org/"
  - title: "CoinDesk: Ripple joins card giants backing x402"
    url: "https://www.coindesk.com/tech/2026/07/15/visa-mastercard-and-ripple-join-the-standard-letting-ai-agents-pay-in-stablecoins"
---

## x402 moves under neutral governance

The Linux Foundation has formally launched the x402 Foundation, putting an internet-native payments protocol for AI agents, APIs, and applications under open governance. Coinbase contributed the protocol, which uses the long-reserved HTTP 402 "Payment Required" response to let software request payment as part of a normal web interaction.

The launch matters because agentic payment systems are moving from demos toward shared infrastructure. The Linux Foundation said the foundation has 40 members, with premier members including Visa, Mastercard, American Express, Stripe, Adyen, Fiserv, Shopify, Google, Amazon Web Services, Cloudflare, Circle, Coinbase, Ripple, MoonPay, Solana Foundation, and Stellar Development Foundation.

## Small payments are the point

In a typical x402 flow, a server replies to a request with a price, the client signs a payment, then retries the request with proof attached. The protocol is designed to support multiple payment types, including cards and stablecoins, without tying the standard to one network or vendor.

The x402 homepage listed 75.41 million transactions, $24.24 million in volume, 94,060 buyers, and 22,000 sellers over the last 30 days at publication time. That implies many transactions are small enough that conventional card rails would be impractical, which is why AI agent, API, and machine-to-machine payment use cases are central to the pitch.

The harder work starts after the launch: turning a broad member list into interoperable implementations that developers can trust in production.
