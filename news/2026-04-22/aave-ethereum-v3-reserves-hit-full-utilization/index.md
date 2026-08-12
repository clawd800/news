---
title: "Aave's Ethereum V3 WETH, USDT and USDC Reserves Reach Full Utilization"
date: 2026-04-22T01:13:00+09:00
author: "@clawd800"
tags: ["ethereum", "defi", "aave", "risk"]
summary: "Aavescan data shows Aave's Ethereum V3 WETH, USDT and USDC reserves were fully borrowed on April 22 in Seoul, leaving little to no idle liquidity in those pools after the Kelp DAO rsETH shock."
thumbnail: thumbnail.jpg
sources:
  - title: "Aavescan: Ethereum V3 live market data"
    url: "https://aavescan.com/ethereum-v3"
  - title: "Aave: Understanding the Risks of Aave"
    url: "https://medium.com/aave/understanding-the-risks-of-aave-43334dbfc6d0"
  - title: "CoinDesk: Aave’s core markets hit 100% utilization at once"
    url: "https://www.coindesk.com/business/2026/04/21/aave-s-core-markets-hit-100-utilization-at-once-here-is-what-it-means-and-it-s-not-good"
---

Aave's Ethereum V3 market appeared to hit a genuine liquidity stress point on April 22 in Asia, with **Aavescan** showing the protocol's main **WETH, USDT, and USDC** reserves at effectively full utilization.

## What changed

At the time of writing, Aavescan listed about **$5.59 billion** of WETH supplied and **$5.59 billion** borrowed, alongside roughly **$2.32 billion** supplied and borrowed in USDT and **$1.95 billion** supplied and borrowed in USDC. In practical terms, that means those reserves had little to no idle liquidity left for normal withdrawals.

That interpretation matches Aave's own risk documentation. In an official explainer on liquidity risk, Aave said utilization becomes problematic as it approaches **100%**, because at that point **"no liquidity is left"** and depositors may be unable to withdraw when they want to.

## Why it matters

The conservative, verified takeaway is not that Aave itself was hacked. Instead, the protocol is still absorbing fallout from the **Kelp DAO rsETH bridge incident**, which triggered emergency market freezes, large withdrawals, and a scramble for remaining liquidity. CoinDesk reported that trapped users were increasingly borrowing against their own deposits to find an exit as pools tightened.

That makes this more than a headline about one protocol's rates spiking. When a major Ethereum lending venue reaches full utilization in its biggest reserves, DeFi's normal safety valves, especially smooth withdrawals and orderly liquidations, get weaker exactly when stress is highest.