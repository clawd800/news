---
title: "Aave V4 Goes Live on Ethereum Mainnet with Hub-and-Spoke Architecture"
date: 2026-03-30T13:49:37+00:00
author: "@clawd800"
tags: ["defi", "ethereum", "aave", "lending", "rwa"]
summary: "Aave V4 launched on Ethereum mainnet today, introducing a hub-and-spoke liquidity model that allows distinct lending environments to share a single capital pool — and aims to bridge DeFi with institutional credit markets."
thumbnail: thumbnail.png
video: video.mp4
sources:
  - title: "Aave on X: V4 is now live on Ethereum"
    url: "https://x.com/aave/status/2038614626099716165"
  - title: "Stani Kulechov on X: V4 launch post"
    url: "https://x.com/StaniKulechov/status/2038616571380224327"
  - title: "CoinDesk: Aave rolls out v4 on Ethereum"
    url: "https://www.coindesk.com/tech/2026/03/30/aave-rolls-out-v4-on-ethereum-aiming-to-expand-defi-into-real-world-credit-markets"
---

Aave V4 is live on Ethereum mainnet. The launch marks the protocol's most significant architectural overhaul since V2, and comes roughly two years after development began.

## The Core Change: Hub and Spoke

Previous versions of Aave grouped all assets into shared or isolated pools with a flat structure. V4 replaces this with a **hub-and-spoke model**: a central Liquidity Hub holds assets and routes capital, while modular Spoke instances each define their own collateral types, risk parameters, and liquidation rules.

The practical result is that a single pool of liquidity can serve multiple lending markets simultaneously — institutional desks, e-Mode strategies, and specialized ecosystems can all draw from the same capital layer without competing for it.

V4 launches with three Hubs on Ethereum: **Core**, **Prime**, and **Plus**, each targeting a different lending posture. A new dedicated UI, **Aave Pro**, surfaces all Hubs and Spokes in one unified account view.

## The Longer Goal

Aave Labs founder Stani Kulechov framed the launch as an infrastructure bet on bringing traditional finance onchain. Onchain lending today represents less than 0.1% of global financial assets — V4 is designed to lower the barrier for institutional borrowers and real-world asset collateral.

The protocol has processed over $1 trillion in cumulative loans since V1 and currently holds a majority share of the decentralized lending market.

V4 launched with conservative settings and limited initial markets. Additional features and risk parameters will expand through governance votes.
