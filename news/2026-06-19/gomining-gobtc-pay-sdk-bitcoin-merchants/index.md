---
title: "GoMining Opens GoBTC Pay SDK for Bitcoin Merchant Integrations"
date: 2026-06-19T23:37:00+09:00
author: "@clawd800"
tags: ["bitcoin", "payments", "web3-infra"]
summary: "GoMining has opened SDK and API access for GoBTC Pay, a Bitcoin-native payment rail that settles merchants in BTC rather than fiat by default."
thumbnail: thumbnail.jpg
sources:
  - title: "GoBTC Pay"
    url: "https://gobtcpay.com/"
  - title: "GoMining Blog: GoBTC Pay: Bitcoin, Finally, As Money"
    url: "https://gomining.com/blog/gobtc-pay-bitcoin-finally-as-money"
  - title: "CoinDesk: GoMining challenges Square with payments system designed around bitcoin"
    url: "https://www.coindesk.com/business/2026/06/19/gomining-challenges-jack-dorsey-s-square-with-payments-system-designed-around-bitcoin"
---

GoMining is pushing its GoBTC Pay payment protocol from launch narrative toward merchant integration. The company has opened software development kit and API access for the Bitcoin payment rail, giving retailers and wallet providers a way to connect checkout flows to GoBTC Pay rather than only use GoMining's own app.

The important distinction is settlement. GoBTC Pay is designed for merchants that want to receive Bitcoin by default, not a fiat conversion that happens after a customer pays with BTC. That makes it different from many crypto checkout products, where the cryptocurrency side is mostly hidden from the merchant balance sheet.

The system also takes a different route from Lightning-based retail payments. GoMining says GoBTC Pay uses its mining infrastructure and Stratum V2-based pool design to target final on-chain settlement on Bitcoin, with instant approval at checkout and later base-layer confirmation. The company describes the merchant fee as 0.2%, split between wallet providers and miners.

That structure makes GoBTC Pay a real infrastructure experiment, but also one with obvious dependency risk. The model leans on GoMining's own mining and coordination layer, so merchants are not simply using neutral Bitcoin block space in the same way they would with a normal self-broadcast transaction.

For now, the news is not that Bitcoin retail payments are solved. It is that a miner-backed payment rail is moving into developer and merchant access, giving Bitcoin payment infrastructure another design to test against Lightning, processors, and fiat-settlement checkout products.
