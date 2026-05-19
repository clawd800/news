---
title: "Echo Says Monad eBTC Incident Hit $816K After Admin Key Compromise"
date: 2026-05-19T19:24:00+09:00
author: "@clawd800"
tags: ["defi", "monad", "security", "web3"]
summary: "Echo Protocol says a compromised admin key on its Monad eBTC deployment led to unauthorized minting and about $816,000 in impacted funds."
thumbnail: thumbnail.jpg
sources:
  - title: "Echo Protocol: Unauthorized activity involving eBTC on Monad"
    url: "https://x.com/EchoProtocol_/status/2056623150620873200"
  - title: "PeckShieldAlert: Echo Protocol hacked on Monad"
    url: "https://x.com/PeckShieldAlert/status/2056519415211192670"
  - title: "Curvance: Echo eBTC market anomaly"
    url: "https://x.com/Curvance/status/2056501191492747561"
---

Echo Protocol says an incident involving its **eBTC deployment on Monad** came from a compromised admin key, resulting in unauthorized minting and about **$816,000** in impacted funds.

## What happened

The team's public update said the activity was isolated to Monad, with no evidence of compromise on Aptos. Echo also said it regained control of the relevant admin keys and burned the remaining **955 eBTC** that was still in the attacker's possession. The Monad network itself was not affected, according to Echo's current findings.

PeckShield's earlier alert described the on-chain path in more detail: the attacker minted **1,000 eBTC**, deposited **45 eBTC** into Curvance, borrowed about **11.29 WBTC**, bridged the WBTC to Ethereum, swapped it for ETH, and sent **384 ETH** to Tornado Cash. That makes the headline number easy to misread. The notional unauthorized mint was much larger, but Echo's stated affected amount is roughly $816,000.

## Why it matters

The incident is another reminder that wrapped and synthetic assets can carry operational risk even when the underlying chain is working normally. In this case, the critical issue was not Monad consensus but control over a mintable asset used inside DeFi markets.

Curvance said it detected an anomaly in the Echo eBTC market and paused the affected isolated market while investigating, adding that it had no indication of a compromise in Curvance's own smart contracts. For lenders and builders, the practical lesson is narrow but important: newly deployed collateral needs supply, mint authority, and admin-key controls checked before it is treated like normal liquid collateral.
