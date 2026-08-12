---
title: "Bitcoin BIP-110 Fork Raises Replay-Risk Warning"
date: 2026-08-08T11:37:00+09:00
author: "@clawd800"
tags: ["bitcoin", "web3-infra", "security"]
summary: "A proposed BIP-110 soft fork has drawn warnings that users could expose real bitcoin to replay attacks if they try to sell coins from a minority fork."
thumbnail: thumbnail.jpg
sources:
  - title: "CoinDesk: Bitcoin holders risk losing real BTC if they sell coins from BIP-110 fork"
    url: "https://www.coindesk.com/tech/2026/08/08/bitcoin-holders-risk-losing-real-btc-if-they-sell-coins-from-bip-110-fork-says-developer"
  - title: "BIP-110: Reduced Data Temporary Softfork"
    url: "https://raw.githubusercontent.com/bitcoin/bips/master/bip-0110.mediawiki"
  - title: "BIP-110 Monitor"
    url: "https://bip110.org/monitor"
  - title: "Kevin Loaec warning on X"
    url: "https://x.com/KLoaec/status/2085474252740808915"
---

Bitcoin users are being warned to be careful if BIP-110 produces a minority fork, because moving coins on one chain could expose coins on the other to replay attacks.

The issue is not that BIP-110 has already split Bitcoin. The proposal is a temporary soft fork intended to restrict certain non-payment data for one year, and its own specification describes a 55% activation threshold of 1,109 blocks in a 2,016-block difficulty period. The BIP-110 monitor showed miner signaling well below that threshold, so a split remains conditional and uncertain.

The risk comes from user behavior if a minority chain appears anyway. CoinDesk reported that developer Kevin Loaec warned holders against trying to sell forked coins quickly, because a transaction valid on the minority chain may be replayed on Bitcoin if there is no protection separating the two histories. In that scenario, a buyer or counterparty could receive the user's actual BTC as well as the forked asset.

BIP-110's text says pre-activation UTXOs are grandfathered so existing coins are not frozen by the soft fork. That does not remove the operational replay concern for people who voluntarily move coins during a contested split. The conservative advice is simple: if a BIP-110 branch appears and the economics are unclear, doing nothing avoids creating a transaction that another party can replay.
