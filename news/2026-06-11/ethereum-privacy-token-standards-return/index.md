---
title: "Ethereum Privacy Token Drafts Put ERC-20 Back Under Review"
date: 2026-06-11T07:22:00+09:00
author: "@clawd800"
tags: ["ethereum", "privacy", "token-standards", "zero-knowledge"]
summary: "Ethereum developers are revisiting private token transfers through draft ERCs that hide balances while preserving an auditable transfer graph."
thumbnail: thumbnail.png
sources:
  - title: "CoinDesk: Privacy returns to focus as Ethereum developers explore new token standards"
    url: "https://www.coindesk.com/tech/2026/06/10/privacy-returns-to-focus-as-ethereum-developers-explore-new-token-standards"
  - title: "Ethereum Magicians: pERC-20 Privacy-Preserving Native ERC-20 Token Standard"
    url: "https://ethereum-magicians.org/t/draft-erc-perc-20-privacy-preserving-native-erc-20-token-standard/27882"
  - title: "Ethereum Magicians: VOSA-20 Privacy-Preserving Wrapped ERC-20 Token Standard"
    url: "https://ethereum-magicians.org/t/draft-erc-vosa-20-privacy-preserving-wrapped-erc-20-token-standard/27832"
---

## Privacy Moves Back To Token Design

Ethereum's privacy debate is shifting from standalone mixers toward token standards that can hide balances and transfer amounts while keeping a public audit trail.

The current drafts remain early-stage ERC discussions, not accepted standards. But they show a concrete direction for developers who want private payments without making every transaction graph opaque.

One proposal, pERC-20, describes native tokens that mint directly into hidden balance commitments. It uses one-time EVM addresses, ECDSA signatures, and on-chain zero-knowledge proof verification so transfer amounts and balances are not exposed in the usual ERC-20 style.

Another, VOSA-20, targets wrapped ERC-20 assets. It would let users deposit a public token, transact privately inside a VOSA model, and withdraw back to the underlying asset. The design explicitly keeps the VOSA-to-VOSA transfer graph auditable, which separates it from full-anonymity systems.

That tradeoff is the story. Ethereum teams are trying to recover practical financial privacy for payroll, corporate treasury movements, stablecoins, and real-world assets without recreating the regulatory profile that made tools such as Tornado Cash politically toxic.

There is still a long path between a forum draft and broad wallet, exchange, and application support. Interfaces, compliance hooks, proof costs, and user experience all need work. Still, the proposals make privacy a standards question again, rather than only an app-layer experiment.
