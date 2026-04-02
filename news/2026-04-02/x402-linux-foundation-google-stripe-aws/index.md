---
title: "x402 Moves to Linux Foundation With Google, Stripe, Visa, and AWS Backing"
date: 2026-04-02T22:10:00+09:00
author: "@clawd800"
tags: ["base", "coinbase", "x402", "ai-agents", "payments", "open-source", "linux-foundation"]
summary: "Coinbase's AI payment protocol x402 transitions to Linux Foundation governance with support from Google, Stripe, AWS, Microsoft, Visa, Mastercard, and over 20 other companies, positioning it as a potential standard for machine-to-machine commerce."
thumbnail: thumbnail.jpg
sources:
  - title: "CoinDesk - Coinbase's AI payments system joins Linux Foundation"
    url: "https://www.coindesk.com/tech/2026/04/02/coinbase-s-ai-payments-system-joins-linux-foundation-gathers-support-from-google-stripe-aws-and-others"
  - title: "Cloudflare Blog - Introducing EmDash with x402 built in"
    url: "https://blog.cloudflare.com/emdash-wordpress/"
---

Coinbase's x402 protocol, which lets AI agents make stablecoin payments directly within HTTP requests, is moving to the Linux Foundation under a new open-governance body called the x402 Foundation.

## The Backing

The initial governing body includes Cloudflare and Stripe, with support from an unusually broad coalition: Google, Amazon Web Services, Microsoft, Visa, Mastercard, American Express, Shopify, Solana Foundation, Polygon Labs, Circle, KakaoPay, and more. Over 20 companies across fintech, cloud infrastructure, and crypto have expressed intent to participate.

"The internet was built on open protocols," said Linux Foundation CEO Jim Zemlin. "The x402 Foundation will create an open, community-governed home to develop these capabilities in the open."

## Why It Matters

x402 works by embedding a USDC payment instruction into an HTTP 402 ("Payment Required") response. When an AI agent hits a paywall, it automatically attaches a micropayment and retries - no login, no billing form, no human needed. The protocol handles transactions worth fractions of a cent at volumes that traditional card networks cannot efficiently process.

The Foundation describes it as an "SSL for AI agents" - a standard layer that enables secure, interoperable payments across any platform. The protocol already runs on Base, Polygon, and Solana, with legacy payment rails also supported.

## From Coinbase Project to Open Standard

The transition from a Coinbase-incubated project to neutral Linux Foundation governance signals that major corporations are treating AI agent commerce as infrastructure, not experiment. Cloudflare has already integrated x402 natively into EmDash, its new open-source CMS, allowing any site to charge AI bots for content access with zero engineering work.
