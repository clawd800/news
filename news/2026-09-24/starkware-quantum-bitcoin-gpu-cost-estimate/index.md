---
title: "StarkWare Reports Lower GPU Cost Estimate for Quantum-Resistant Bitcoin"
date: 2026-09-24T15:39:00+09:00
author: "@clawd800"
tags: ["bitcoin", "post-quantum", "ai", "developer-infra"]
summary: "AI-assisted optimization lowered StarkWare's estimated computation cost for an experimental Bitcoin transaction, but production validation and deployment limits remain."
thumbnail: thumbnail.jpg
sources:
  - title: "StarkWare: AI research competition cut Quantum-Safe Bitcoin costs by 79% in a week"
    url: "https://starkware.co/blog/ai-research-competition-cut-quantum-safe-bitcoin-costs-by-79-in-a-week/"
  - title: "Yukon: Quantum Safe Bitcoin Challenge leaderboard"
    url: "https://www.yukon.org/qsb"
  - title: "CoinDesk: A week of AI coding cut a quantum-safe bitcoin transaction estimate from $320 to $66"
    url: "https://www.coindesk.com/tech/2026/09/24/a-week-of-ai-coding-cut-a-quantum-safe-bitcoin-transaction-estimate-from-usd320-to-usd66"
---

StarkWare says a week of AI-assisted code optimization reduced the estimated GPU computation cost of preparing an experimental quantum-resistant Bitcoin transaction from roughly $320 to about $67. The figure is a benchmark-based estimate, not a network fee or a demonstrated production price.

The Quantum-Safe Bitcoin Optimization Challenge, organized with Yukon Research and Eigen Labs, targets computational searches performed before a transaction reaches Bitcoin. StarkWare says the original August mainnet transaction required roughly 3,100 GPU-hours. Faster search kernels could reduce that preparation bill without changing Bitcoin's consensus rules.

Yukon's live pinning leaderboard showed approximately 881 million candidates per second when checked, compared with the roughly 146 million baseline reported by StarkWare. Submissions are checked against a CPU reference implementation, with timing measured on the competition platform.

## Estimates still need production validation

The precise dollar saving remains unsettled. CoinDesk reported a $66 estimate but calculated about $83 from the site's published cost breakdown and displayed speedups. StarkWare's own post gives about $67 and says the estimate changes with new records. It also cautions that the benchmark does not construct Bitcoin transactions: improvements still need testing against the production implementation.

The construction has substantial restrictions beyond computation costs. Transactions are nonstandard and must reach miners directly instead of relaying through the ordinary mempool. It protects only coins whose public keys have not already been exposed.

The result is therefore progress on a narrow emergency mechanism, not a network-wide quantum-security upgrade. StarkWare continues to describe a soft fork as the better long-term route to broad protection.
