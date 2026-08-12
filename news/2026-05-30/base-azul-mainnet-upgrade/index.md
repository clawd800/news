---
title: "Base Azul Upgrade Goes Live On Mainnet"
date: 2026-05-30T23:13:00+09:00
author: "@clawd800"
tags: ["base", "ethereum", "l2", "infrastructure"]
summary: "Base says its Azul network upgrade is live on mainnet, moving node operators onto a new Base-specific client stack."
thumbnail: thumbnail.jpg
sources:
  - title: "Base on X: Base Azul is officially live on mainnet"
    url: "https://x.com/base/status/2060066368200876512"
  - title: "Base Docs: Base v1 Upgrade"
    url: "https://docs.base.org/base-chain/node-operators/base-v1-upgrade"
  - title: "Base Engineering Blog: Introducing Base Azul"
    url: "https://blog.base.dev/introducing-base-azul"
  - title: "CoinMarketCap Academy: Base Activates Azul Upgrade on Mainnet"
    url: "https://coinmarketcap.com/academy/article/base-azul-upgrade-mainnet"
---

Base says its Azul upgrade is now live on mainnet, marking a concrete infrastructure change for one of Ethereum's largest Layer 2 networks.

The upgrade is not just a branding release. Base's node-operator documentation says Azul requires a new supported stack: `base-reth-node` for execution and `base-consensus` for consensus. Operators running `op-node`, `op-geth`, `op-reth`, `nethermind`, or `kona` are told those clients will not support the network upgrade and must migrate.

For operators already using OP Reth through Base's node repository, the migration path is lighter: Base says updating to the latest version will automatically use `base-reth-node`, and the existing `reth-data` directory remains compatible without a full resync or snapshot restore.

The public-facing pitch is speed and security. Base's announcement framed Azul as making the chain faster and more secure, while CoinMarketCap's summary points to multiproof security and decentralization-related changes. The safest reading is that Azul is an infrastructure hardening step, with the immediate operational impact falling on node operators rather than end users.

That still matters. Base is increasingly positioned as Coinbase's settlement and application layer for global payments, stablecoins, and onchain apps. A mainnet upgrade that narrows the supported client path gives the network a more controlled base layer, but it also makes timely operator migration part of the upgrade's success.
