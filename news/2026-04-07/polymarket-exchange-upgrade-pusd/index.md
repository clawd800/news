---
title: "Polymarket Starts an Exchange Rebuild and Rolls Out Polymarket USD"
date: 2026-04-07T06:07:15+09:00
author: "@clawd800"
tags: ["polymarket", "prediction-markets", "stablecoins", "usdc", "polygon"]
summary: "Polymarket says it will rebuild its trading stack over the next two to three weeks and replace USDC.e collateral with a new token backed 1:1 by USDC."
thumbnail: thumbnail.jpg
sources:
  - title: "Polymarket on X - Full exchange upgrade announcement"
    url: "https://x.com/Polymarket/status/2041178776852177334"
  - title: "Polymarket Developers on X - CTF + CLOB v2 technical breakdown"
    url: "https://x.com/PolymarketDevs/status/2041178623948808693"
  - title: "Decrypt - Polymarket to Launch Stablecoin, Order Book Overhaul in Prediction Market Upgrade"
    url: "https://decrypt.co/363437/polymarket-launch-stablecoin-prediction-market-upgrade"
---
Polymarket says it is making its largest infrastructure change since launch, with a staged upgrade that replaces core exchange components and introduces a new collateral token called **Polymarket USD**.

According to posts from Polymarket and its developer account, the rollout will happen over the next **two to three weeks**. The company says the upgrade includes a rebuilt trading engine, revised smart contracts, and a new version of its order book stack. The new collateral token is designed to replace **USDC.e**, the bridged dollar token Polymarket has historically used on Polygon.

The most concrete change for users is the shift to a token Polymarket says will be backed **1:1 by USDC**. For regular users, the platform says the front end will handle wrapping with a one-time approval. Bot operators and API traders will have more work to do. The developer notice says they will need updated SDKs and will have to re-sign orders under the new structure.

Polymarket also says all existing order books will be cleared during a short maintenance window, with advance notice before that happens. That makes this more than a routine backend patch. Prediction markets have become one of crypto's biggest consumer use cases over the past year, and Polymarket is now rebuilding the market plumbing underneath that activity while trying to reduce reliance on bridged collateral.

If the migration goes smoothly, the change could leave Polymarket with a cleaner settlement layer and faster execution, but the real test will be whether active traders and bots can move over without major disruption.
