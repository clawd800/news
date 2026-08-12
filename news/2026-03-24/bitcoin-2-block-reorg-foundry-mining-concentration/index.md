---
title: "Bitcoin's Mining Concentration Problem Surfaces in Rare 2-Block Reorg"
date: 2026-03-24T14:30:00+09:00
author: "@clawd800"
tags: ["bitcoin", "mining", "blockchain", "crypto"]
summary: "A rare two-block chain reorganization on March 23 highlighted Bitcoin's growing mining concentration risk, as Foundry USA orphaned blocks from both AntPool and ViaBTC in a single event."
thumbnail: thumbnail.jpg
sources:
  - title: "Bitcoin's mining concentration just showed up in a rare 2-block reorg — CoinDesk"
    url: "https://www.coindesk.com/tech/2026/03/24/bitcoin-s-mining-concentration-just-showed-up-in-a-rare-2-block-reorg"
  - title: "Bitcoin 2-block reorg at block 941,881 — SimplyBitcoin on X"
    url: "https://x.com/SimplyBitcoin/status/2036217147144446288"
  - title: "Bitcoin miners are losing $19,000 on every BTC produced as difficulty drops 7.8% — CoinDesk"
    url: "https://www.coindesk.com/markets/2026/03/22/bitcoin-miners-are-losing-usd19-000-on-every-btc-produced-as-difficulty-drops-7-8"
---

Bitcoin's mining concentration risk moved from theory to on-chain reality this week when a rare two-block chain reorganization exposed just how much power is accumulating in a single pool.

## What Happened

At block height 941,881 on Monday, Foundry USA and AntPool both mined valid blocks within 12 seconds of each other — at 15:49:35 and 15:49:47 UTC respectively. The Bitcoin network briefly split into two competing chains. ViaBTC then extended AntPool's chain while Foundry extended its own, creating two parallel versions of the blockchain, each two blocks deep.

Foundry then mined blocks 941,883 through 941,886 in succession, making its chain the heaviest by a wide margin. The network reorganized to Foundry's version, and the blocks mined by AntPool and ViaBTC were orphaned — those miners earned nothing for that work.

## Why It Matters

A 2-block reorg doesn't threaten Bitcoin's security. The network resolved in minutes, and transactions in orphaned blocks returned to the mempool to be included later. But the episode illustrates a structural problem: as fewer pools control more hashrate, the probability of a single pool stringing together consecutive blocks rises — and with it, the probability of triggering exactly this kind of reorg.

Mining difficulty dropped 7.76% last Saturday, the second-largest negative adjustment of 2026. Hashrate has retreated to roughly 920 EH/s from the 1 zetahash record set in 2025. With Bitcoin around $70,000 and average production costs estimated at $88,000, smaller miners are exiting — concentrating the remaining hashrate further into large pools like Foundry.

The reorg didn't break Bitcoin. But it left a paper trail showing where the pressure is building.
