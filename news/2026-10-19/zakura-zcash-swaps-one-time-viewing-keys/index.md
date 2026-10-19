---
title: "Zakura Proposes One-Time Viewing Keys to Protect Zcash Swap Privacy"
date: 2026-10-19T16:00:00+09:00
author: "@clawd800"
tags: ["zcash", "privacy", "post-quantum", "web3-infra"]
summary: "Zakura proposes separate viewing keys for Zcash swaps through NEAR Intents, limiting what a future quantum attacker could learn from publicly exposed addresses."
thumbnail: thumbnail.jpg
sources:
  - title: "Zakura: Quantum Unlinkability for Zcash Swaps"
    url: "https://zakura.com/engineering/quantum-unlinkability/"
  - title: "CoinDesk: Zcash developers plan a fix to keep ZEC swaps private from future quantum computers"
    url: "https://www.coindesk.com/tech/2026/10/19/zcash-developers-plan-a-fix-to-keep-zec-swaps-private-from-future-quantum-computers"
---

Zakura has outlined a wallet-level design to limit the payment history a future quantum attacker could uncover from Zcash addresses exposed during NEAR Intents swaps. The proposal assigns each swap its own incoming viewing key while preserving the account's existing spending authority.

The issue is address exposure, not a demonstrated quantum attack. According to Zakura, swaps out of ZEC publish a shielded refund address on NEAR's public chain when the deposit registers, even if no refund occurs. Swaps into ZEC similarly expose the recipient address.

## Isolating each swap

Normally, an account's different shielded addresses share one incoming viewing key. A sufficiently powerful quantum computer could recover that key from a published address and use it to identify incoming payments across the account, including amounts and memos. Recovering a viewing key does not itself grant spending authority.

Zakura's proposed derivation gives each exposed address a separate viewing key without splitting funds across independently managed accounts. Breaking one address would therefore reveal payments associated with that swap rather than the account's wider incoming history.

## Recovery without repeated full-chain scans

More viewing keys complicate wallet restoration. Zakura proposes public filters and an indexed database of NEAR bridge payouts to locate relevant transactions. Private information retrieval would let wallets query that database without disclosing the addresses they are checking to its server.

The team says software wallets using its open-source libraries, including Vizor, could integrate the feature in the coming weeks. Hardware-wallet support depends on firmware changes. This is a targeted privacy mitigation awaiting integration, not a completed network-wide quantum-security upgrade.
