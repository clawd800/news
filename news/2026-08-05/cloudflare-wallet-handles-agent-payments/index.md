---
title: "Cloudflare Opens Wallet Handles for Agent Payments"
date: 2026-08-05T19:45:00+09:00
author: "@clawd800"
tags: ["stablecoins", "ai-agents", "cloudflare", "x402"]
summary: "Cloudflare has opened wallet handle reservations as part of a stablecoin payment layer aimed at human accounts and AI agents."
thumbnail: thumbnail.jpg
sources:
  - title: "Cloudflare Wallet"
    url: "https://cloudflare.pay/"
  - title: "Cloudflare Agents docs: Model Context Protocol"
    url: "https://developers.cloudflare.com/agents/model-context-protocol/"
  - title: "Unchained: Cloudflare Opens Stablecoin Wallet Handles as It Builds the Buy Side of Agent Payments"
    url: "https://unchainedcrypto.com/cloudflare-opens-stablecoin-wallet-handles-as-it-builds-the-buy-side-of-agent-payments/"
---

Cloudflare has opened reservations for wallet handles at cloudflare.pay, a small public step toward a payment layer designed for both people and AI agents. The site currently presents the product as Cloudflare Wallet and asks users to reserve a wallet name, while reporting from Unchained says funding and spending features are still to come.

The important part is the architecture Cloudflare is signaling. According to Unchained, the rollout separates Account Wallets for people and organizations from Virtual Wallets for agents. Account owners would control funding, delegation, withdrawals, spending allowances, allow lists, and maximum transaction sizes. Agent wallets would operate through API keys rather than independent human approval for each payment.

Payments are expected to settle in stablecoins over x402, the protocol pattern that uses HTTP 402 Payment Required responses to attach payment instructions to web requests. That matters because Cloudflare already runs infrastructure where developers deploy agents, Workers, and remote MCP servers. Its public Agents documentation positions MCP as a way for AI systems to connect to external tools and services over the internet, with authorization controls around account resources.

The product is not yet a full checkout network. The conservative read is narrower: Cloudflare is reserving wallet identity first, then preparing a controlled spending layer for software that needs to buy APIs, tools, or content without turning every request into a manual checkout.
