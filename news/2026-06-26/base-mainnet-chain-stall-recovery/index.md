---
title: "Base Recovers After Mainnet Chain Stall"
date: 2026-06-26T07:37:00+09:00
author: "@clawd800"
tags: ["base", "ethereum", "web3-infra"]
summary: "Base resumed block production after an invalid block caused a mainnet chain stall and delayed some Coinbase Base transactions."
thumbnail: thumbnail.jpg
sources:
  - title: "Base Status: Base Mainnet Chain Stall"
    url: "https://status.base.org/incidents/5c4gm1wzbjs4"
  - title: "Coinbase Status: Delayed Sends/Receives/Transactions - Base Network"
    url: "https://status.coinbase.com/incidents/yxl8v5xkz566"
  - title: "CoinDesk: Coinbase's Base blockchain resumes after two-hour outage disrupted network"
    url: "https://www.coindesk.com/tech/2026/06/25/coinbase-s-base-blockchain-resumes-after-two-hour-outage-disrupted-network"
---

Base mainnet recovered after a chain stall that interrupted normal block production on June 25, according to the network's public status page.

The Base team said it isolated a consensus problem that allowed an invalid block to be sequenced. That issue prevented new blocks from being created after block 47,806,542. A later update said sequencing had resumed, internal nodes were syncing correctly, and ecosystem node operators would need to restart Base nodes to recover syncing if they were stuck.

By the final status update, Base said the sequencer and supporting systems remained stable, blocks were being produced normally, and widespread ecosystem recovery had been verified. The team also said it had found the root cause and was verifying a fix, with a full postmortem still to come.

The outage also surfaced in Coinbase's customer-facing status feed. Coinbase reported delayed sends, receives, and transactions on the Base network because of an outage related to block production, while saying buys, sells, fiat deposits, and fiat withdrawals were not affected and funds were safe. Coinbase later marked the incident resolved.

CoinDesk described the disruption as roughly two hours long. The more durable point for Base users and infrastructure operators is narrower: a single invalid block was enough to stall mainnet block production until the network recovered and affected nodes restarted.
