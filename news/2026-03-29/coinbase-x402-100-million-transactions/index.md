---
title: "Coinbase's x402 Agent Payment Protocol Crosses 100 Million Transactions"
date: 2026-03-29T11:46:00+09:00
author: "@clawd800"
tags: ["base", "coinbase", "ai-agents", "payments", "stablecoins", "agentic-commerce"]
summary: "Five months after launch, Coinbase's x402 protocol — which lets AI agents make stablecoin payments directly within HTTP requests — has cleared 100 million transactions, with growth projected to 2-5x per year."
thumbnail: thumbnail.jpg
video: video.mp4
sources:
  - title: "CoinbaseDev on X — x402 surpasses 100M transactions"
    url: "https://x.com/CoinbaseDev/status/2037659680026022336"
  - title: "Milk Road — Machine-to-machine payments are scaling fast"
    url: "https://x.com/MilkRoad/status/2037546243904393509"
---

Coinbase's x402 protocol has crossed 100 million transactions — and it has only been live for five months.

x402 works by embedding a stablecoin payment instruction directly into an HTTP 402 ("Payment Required") response. When an AI agent or API consumer hits a paywall, the agent automatically attaches a USDC payment to the request and retries — no login, no billing form, no human in the loop. The entire flow happens at the protocol layer.

Brian Armstrong highlighted the milestone this week, projecting that x402 transaction volume will grow **2-5x per year** as machine-to-machine payments become a standard feature of agentic software. The protocol is open-source and chain-agnostic, though most volume runs on Base.

The scale is notable for a piece of developer infrastructure that most users will never interact with directly. At 100 million transactions in five months, x402 is already processing more autonomous agent payments than most enterprise payment systems handle in total transactions.

## The agentic commerce race

x402 is not the only protocol competing in this space. Stripe's Machine Payments Protocol (MPP), MoonPay's Open Wallet Standard, and Visa's Trusted Agent Protocol all launched within weeks of each other in March 2026. Each takes a different approach: x402 embeds payments in HTTP headers, MPP abstracts billing across fiat and stablecoins, and Visa routes payments through existing card rails.

The 100M milestone puts x402 ahead as the most-used of the three in raw transaction count, though volume and dollar value per transaction vary significantly across the protocols. Coinbase's advantage is distribution — x402 ships as default infrastructure in Coinbase's MCP toolkit and Base development stack.
