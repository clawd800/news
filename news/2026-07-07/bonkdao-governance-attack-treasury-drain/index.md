---
title: "BonkDAO Treasury Drained in Governance Attack"
date: 2026-07-07T15:37:00+09:00
author: "@clawd800"
tags: ["solana", "governance", "security", "web3-infra"]
summary: "BonkDAO said a malicious governance proposal drained an estimated $20 million worth of BONK from its treasury, with recovery efforts now involving exchanges, bridges, the Solana Foundation and law enforcement."
thumbnail: thumbnail.jpg
sources:
  - title: "BONK on X"
    url: "https://x.com/bonk_inu/status/2074191403781906800"
  - title: "Chainalysis on X"
    url: "https://x.com/chainalysis/status/2074315255317155987"
  - title: "CoinDesk: BONK faces $20 million treasury drain"
    url: "https://www.coindesk.com/markets/2026/07/07/bonk-faces-usd20-million-treasury-drain-after-attacker-spends-usd4-million-to-pass-malicious-proposal"
---

BonkDAO said it was hit by a malicious governance proposal that drained an estimated $20 million worth of BONK tokens from the DAO's treasury.

The project said it had identified exchange wallets used to purchase BONK ahead of the vote and was working with exchanges, bridges and the Solana Foundation to manage the response. It also said law enforcement had been notified while the DAO tries to recover funds and identify the parties responsible.

The incident appears to be a governance failure rather than a conventional smart-contract exploit. CoinDesk, citing Chainalysis, reported that an anonymous wallet submitted a proposal on June 30 to move the treasury to a wallet it controlled. The proposal needed yes votes equal to 1% of BONK's supply, and the attacker allegedly spent about $4 million acquiring enough voting power to pass it.

That detail matters for other token-governed projects. Voting systems that treat temporary token accumulation as sufficient legitimacy can be vulnerable when the cost of buying control is lower than the value of the assets controlled by the vote.

The conservative takeaway is that recovery details remain unresolved. BonkDAO has confirmed the estimated treasury drain and its coordination with counterparties, but has not yet published a full post-mortem, recovery amount or governance fix.

For DAOs, the episode is a direct test of quorum design, timelocks, treasury controls and emergency veto mechanisms. On-chain votes are transparent, but transparency alone does not prevent a motivated attacker from using the rules as written.
