---
title: "Stratum V2 Group Adds Major Pools Behind Roughly 75% of Bitcoin Hashrate"
date: 2026-05-11T15:13:00+09:00
author: "@clawd800"
tags: ["bitcoin", "mining", "infrastructure", "protocols"]
summary: "The Stratum V2 working group added seven new members, and five of the newly participating operators currently account for about three quarters of recent Bitcoin mining pool share."
thumbnail: thumbnail.jpg
sources:
  - title: "Stratum V2: Welcoming ANTPOOL, Block, DMND, F2Pool, Foundry, MARA Foundation and SpiderPool to the Stratum V2 Working Group"
    url: "https://stratumprotocol.org/blog/new-members/"
  - title: "Stratum V2 Specification: Protocol Overview"
    url: "https://stratumprotocol.org/specification/03-protocol-overview/"
  - title: "Hashrate Index: Bitcoin Mining Pool Data"
    url: "https://hashrateindex.com/hashrate/pools"
---

Stratum V2's push into mainstream bitcoin mining just got a lot more credible.

## What changed

The working group behind the open mining protocol said last week that **ANTPOOL, Block, DMND, F2Pool, Foundry, MARA Foundation, and SpiderPool** have joined the project. That does not mean seven mining pools suddenly switched their production stack to Stratum V2, but it does mean several of the industry's largest operators are now participating directly in the standard's development.

Using Hashrate Index's May 11 pool-share data, the five newly participating operators with visible pool share — **Foundry USA, AntPool, F2Pool, SpiderPool, and MARA Pool** — add up to **roughly 75%** of recent network share. That makes this a meaningful governance and deployment signal even before broad rollout is complete.

## Why it matters

Stratum V2 is designed to replace the aging Stratum V1 mining protocol. Its specification includes a **Job Declaration Protocol** that lets miners declare their own block templates to pools instead of relying only on pool-selected transaction sets.

That distinction matters. The announcement does **not** reduce bitcoin's underlying hashrate concentration by itself. But if the larger pools actually deploy miner-side template selection, it could shift some transaction-selection power away from pool operators and back toward miners running their own infrastructure. For Bitcoin, that is the more important decentralization question this announcement starts to move.
