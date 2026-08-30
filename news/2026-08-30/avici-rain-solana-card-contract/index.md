---
title: "Avici Says Rain Fixed Solana Card Contract Flaw"
date: 2026-08-30T11:37:00+09:00
author: "@clawd800"
tags: ["solana", "crypto-security", "stablecoin-payments", "cards"]
summary: "Avici says card balances affected by a Solana card contract vulnerability identified by Rain have been restored in full."
thumbnail: thumbnail.jpg
sources:
  - title: "Avici on X"
    url: "https://x.com/avici"
  - title: "CoinDesk: A $1.1 million crypto card hack crashed a neobank's token 49%"
    url: "https://www.coindesk.com/web3/2026/08/29/a-usd1-1-million-crypto-card-hack-crashed-a-neobank-s-token-49"
  - title: "Rain: Stablecoin payments platform for enterprise"
    url: "https://www.rain.xyz/"
---

Avici says affected Solana card balances have been restored after its card-issuing partner Rain identified a vulnerability in a Solana card contract used by Avici and a small number of other programs.

The company first described the incident as an issue affecting card balance withdrawals, saying it was working with relevant partners. In a later update, Avici said Rain had identified the vulnerable contract, upgraded it across affected programs, and that users whose Solana card balances had been withdrawn had received the full amount back.

## Why It Matters

The incident is narrower than a Solana network failure, but it is still important for crypto payment products. Avici markets card-linked balances around onchain infrastructure, while Rain provides stablecoin payment and card-issuing infrastructure for enterprise customers. A contract-level issue in that stack can affect users even when the underlying layer-1 chain continues operating normally.

Reports differ on the exact amount at risk. CoinDesk's RSS summary said AVICI fell 49% from a 24-hour high after the exploit. Other reports have cited figures ranging from roughly $500,000 to more than $1 million. Avici's public posts, however, confirmed the withdrawal issue, the Rain-linked vulnerable contract, and the refund, but did not publish a final loss total in the visible profile text.

For users, the key verified update is that Avici says balances withdrawn during the incident have been restored. For builders, the episode is another reminder that card, wallet, and stablecoin payment integrations depend on partner contracts and operational controls, not just the security of a base blockchain.
