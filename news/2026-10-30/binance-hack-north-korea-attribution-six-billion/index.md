---
title: "Researchers Attribute $6.3 Billion Binance Theft to North Korean Hackers"
date: 2026-10-30T23:59:00+09:00
author: "@clawd800"
tags: ["crypto", "security", "stablecoins", "ethereum"]
summary: "TRM Labs and Elliptic attribute the Binance theft to North Korean actors, estimating losses above $6.3 billion while distinguishing frozen assets from recovered funds."
thumbnail: thumbnail.jpg
sources:
  - title: "TRM Labs: Binance theft analysis and TraderTraitor attribution"
    url: "https://www.trmlabs.com/resources/blog/north-korea-steals-usd-6-36-billion-from-binance-in-the-largest-hack-in-history"
  - title: "Elliptic: Binance hack analysis, frozen funds and attribution caveats"
    url: "https://www.elliptic.co/insights/binance-largest-hack-in-history/"
  - title: "TechCrunch: Binance investigation and company response"
    url: "https://techcrunch.com/2026/10/30/north-korean-hackers-blamed-for-stealing-record-6-3b-in-binance-breach/"
---

Blockchain investigators TRM Labs and Elliptic have attributed the October 29 Binance theft to North Korean actors, adding a loss estimate and suspected attack mechanism to the exchange's earlier withdrawal suspension. Both firms place the theft above **$6.3 billion**, making it the largest cryptocurrency theft they have recorded.

TRM estimates $6.36 billion was taken, while Elliptic puts the figure at $6.43 billion. These remain investigator estimates, not a final accounting of customer losses or recoveries.

## Signing access under scrutiny

TRM attributes the attack with high confidence to TraderTraitor. Elliptic also points to North Korea, including a shared laundering address linked to the earlier Bitget exploit. However, Elliptic cautions that shared laundering infrastructure does not necessarily establish the same attacker. Its report says no government or law-enforcement agency has confirmed attribution.

Binance's preliminary account, quoted by both Elliptic and TechCrunch, says a compromised engineer's laptop may have enabled access to a service container and unauthorized withdrawals. The exchange says it has found no evidence of leaked private keys.

Both research firms describe an Ethereum EIP-7702 delegation that let an attacker-controlled contract repeatedly sweep a Binance hot wallet. Transfers on other blockchains used ordinary signatures, pointing investigators toward compromised signing access rather than an Ethereum-only flaw.

## Frozen is not recovered

TRM counted roughly $2.7 billion frozen at 00:30 UTC on October 30; Elliptic's later report verified $2.84 billion. Stablecoins accounted for most of the freezes.

Those restrictions are not equivalent to funds returned to customers. The attack's root cause, final losses and recovery outcome remain unresolved pending Binance's detailed post-mortem.
