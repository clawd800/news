---
title: "XRPL AMM proposal highlights flash-loan resistance"
date: 2026-05-31T15:20:00+09:00
author: "@clawd800"
tags: ["xrpl", "defi", "security"]
summary: "A draft XRPL AMM proposal adds swappable curve designs while underscoring why flash-loan attacks are structurally unavailable on the ledger."
thumbnail: thumbnail.jpg
sources:
  - title: "XRPL Standards Discussion #547: AMM Swappable Curves"
    url: "https://github.com/XRPLF/XRPL-Standards/discussions/547"
  - title: "XRP Ledger automated market maker documentation"
    url: "https://xrpl.org/docs/concepts/tokens/decentralized-exchange/automated-market-makers"
  - title: "CoinDesk: XRP Ledger's design blocks flash loan attacks"
    url: "https://www.coindesk.com/tech/2026/05/29/xrp-ledger-s-new-proposal-blocks-the-flash-loan-attacks-costing-defi-hundreds-of-millions"
---

## Draft upgrade

The XRP Ledger community is weighing a draft amendment that would expand the network's native automated market maker beyond its current single-curve design. The proposal, posted as XRPL Standards discussion #547, is titled "AMM Swappable Curves" and lists Denis Angell and Roman Thpt as authors.

The draft would let new AMM pools choose from multiple invariant functions at creation time. Its table includes constant product, concentrated liquidity, and StableSwap-style curves, with a programmable Smart AMM left for a later specification. Existing pools would remain on the current behavior rather than being forced through a migration.

## Security tradeoff

The security note getting attention is narrower but important: the proposal says XRPL transactions are atomic without composable intra-transaction calls, making flash-loan attacks structurally impossible. In practice, that means the borrow, manipulate, drain, and repay sequence common in Ethereum-style flash-loan exploits cannot be packed into one XRPL transaction.

That does not make XRPL DeFi risk-free. AMM math, pool configuration, oracle design, and future lending features still need review before any amendment reaches production. It does, however, show a clear architectural tradeoff. XRPL gives up some smart-contract composability, while avoiding one exploit class that has repeatedly hit more programmable DeFi systems.
