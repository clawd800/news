---
title: "GoDark Docs Outline Solana Dark Pool DEX for Perpetual Futures"
date: 2026-04-12T23:58:00+09:00
author: "@clawd800"
tags: ["solana", "defi", "trading", "privacy", "infrastructure"]
summary: "GoDark's public docs describe a Solana-based perpetual futures venue that hides orders until execution and settles trades onchain in one-second batches."
thumbnail: thumbnail.png
sources:
  - title: "GoDark Docs"
    url: "https://docs.godarkdex.com/"
  - title: "GoQuant: GoDark Launch"
    url: "https://goquant.io/insights/godark-launch"
  - title: "CoinDesk: Market makers are fleeing public blockchains to protect their secret trading playbooks"
    url: "https://www.coindesk.com/markets/2026/04/12/market-makers-are-fleeing-public-blockchains-to-protect-their-secret-trading-playbooks"
---

GoDark, a project tied to digital-asset infrastructure firm **GoQuant**, has published public docs for a Solana-based perpetual futures venue built around **dark-pool style order visibility**. Recent reporting from CoinDesk says the platform is targeting a **May launch**, while GoDark's docs describe a system designed to hide orders until execution to reduce front-running, MEV, and strategy leakage.

## What the docs show

According to GoDark's documentation, the platform uses an off-chain matching engine with microsecond latency and a stated target of **more than 350,000 orders per second**, while final settlement happens on **Solana** in **one-second batches** with Merkle-tree verification. The docs say user funds stay in **Program Derived Addresses**, not with GoDark directly, and that the venue is built for **perpetual futures** rather than spot trading.

GoDark is also unusually direct about its market-structure pitch. The docs say dark-pool mechanics conceal orders until execution, aiming to reduce market impact and make large strategies harder to reverse engineer on transparent public venues.

## Why it matters

If GoDark ships as described, it would bring a more Wall Street-style private execution model into onchain derivatives instead of treating full transparency as a default good in every context. That could appeal to firms that want Solana settlement without broadcasting every order to rivals in real time.

The conservative view is that public docs are easier than production liquidity. A private venue only matters if market makers and takers show up, and regulators may look harder at any system that reduces visibility. Still, the appearance of concrete docs, API references, and launch instruments suggests this is moving beyond a vague privacy pitch.
