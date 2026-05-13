---
title: "Solana’s Alpenglow Enters Community Validator Testing"
date: 2026-05-14T03:18:55+09:00
author: "@clawd800"
tags: ["solana", "validators", "consensus", "infrastructure"]
summary: "Solana’s proposed Alpenglow consensus overhaul is now running on a community test cluster, giving validators a live environment to test the new design before any mainnet rollout."
thumbnail: thumbnail.jpg
sources:
  - title: "Solana Network Upgrades"
    url: "https://solana.com/news/solana-network-upgrades"
  - title: "SIMD-0326: Alpenglow"
    url: "https://github.com/solana-foundation/solana-improvement-documents/blob/main/proposals/0326-alpenglow.md"
  - title: "CoinDesk: Biggest consensus overhaul in Solana history is live for testing"
    url: "https://www.coindesk.com/tech/2026/05/11/the-biggest-consensus-overhaul-in-solana-history-is-officially-live-for-testing"
  - title: "Anza: Alpenglow: A New Consensus for Solana"
    url: "https://www.anza.xyz/blog/alpenglow-a-new-consensus-for-solana"
---

Solana’s proposed **Alpenglow** consensus overhaul has moved into community validator testing, giving outside operators a live environment to test the software before any mainnet activation.

The testing milestone was reported Monday after Solana core developer **Anza** said Alpenglow was live on a community test cluster. That means validator operators can start testing the migration from Solana’s current setup, which relies on **Proof of History** and **TowerBFT**, to a new consensus design intended to reduce confirmation latency and simplify the network’s voting path.

Solana’s own network upgrades page still lists Alpenglow as **under development** and expected in **Agave 4.1**, but it describes the change as a major protocol update aimed at bringing **150 millisecond confirmation times**. The same page says Alpenglow removes Proof of History and on-chain vote transactions from the core process, which would free block space now used by validator voting.

## Why it matters

The technical proposal tracked as **SIMD-0326** says the first phase centers on **Votor**, a new voting and finalization design, while **Rotor** is planned separately. Anza’s research materials say the current system reaches finality in about **12.8 seconds**, compared with simulated median finality near **150 milliseconds** under Alpenglow.

That does not make a mainnet launch immediate. Solana still labels the feature as in progress, and a live community cluster is only an intermediate step. But the move gives validators a concrete testbed for one of the largest changes ever proposed to Solana’s core consensus stack.
