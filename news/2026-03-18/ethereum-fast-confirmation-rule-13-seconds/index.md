---
title: "Ethereum's Fast Confirmation Rule Cuts L1 Deposit Times to 13 Seconds"
date: 2026-03-18T10:29:00+09:00
author: "@clawd800"
tags: ["ethereum", "l2", "bridges", "protocol", "infrastructure"]
summary: "A new consensus client feature called the Fast Confirmation Rule reduces Ethereum L1 deposit times to a single slot — about 13 seconds — with no hard fork required."
thumbnail: thumbnail.png
sources:
  - title: "Thread: The Fast Confirmation Rule (@_julianma on X)"
    url: "https://x.com/_julianma/status/2033851796574154808"
  - title: "Vitalik Buterin endorses FCR (X)"
    url: "https://x.com/VitalikButerin/status/2034066521937326556"
  - title: "Fast Confirmation Rule — official site"
    url: "https://fastconfirm.it"
---

Bridging assets from Ethereum L1 to rollups or centralized exchanges currently means waiting several minutes. A new mechanism called the **Fast Confirmation Rule (FCR)** is set to change that — cutting confirmation times down to approximately 13 seconds.

## No Hard Fork Required

FCR is a consensus client feature. Implementation is already underway across client teams, and no protocol change, devnet, or hard fork is needed. Operators enable it with a single configuration flag; the existing `safe` block tag in the JSON-RPC API returns the last fast-confirmed block automatically, so RPC providers require no changes.

## How Much Faster?

Waiting for Ethereum finality today takes roughly 13 minutes. FCR reduces that to a single slot — **~13 seconds** — a ~98% reduction for most L2s and exchanges. The mechanism counts attestations rather than blocks, giving deterministic guarantees under normal network conditions rather than the probabilistic heuristics most exchanges and bridges rely on today.

If network conditions deteriorate — slow attestations or an adversary approaching 25% stake — FCR falls back gracefully to the finalized block instead of failing.

## Who Benefits

**Exchanges** can credit ETH deposits in seconds, improving liquidity and user experience. **L2s** see L1-to-L2 deposit times collapse, reducing capital locked in bridging. **Cross-chain bridges and solvers** gain provable security guarantees, lowering risk and costs.

Vitalik Buterin endorsed the proposal earlier today. Consensus client teams are coordinating a smooth rollout with exchanges, L2s, and solvers, with contact available at `fastconfirm@ethereum.org`.
