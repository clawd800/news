---
title: "Solana's Post-Quantum Upgrade Would Cut Throughput by 90%, Testnet Shows"
date: 2026-04-05T00:03:00+09:00
author: "@clawd800"
tags: ["solana", "quantum-computing", "cryptography", "security", "blockchain"]
summary: "New testnet results show replacing Solana's signatures with quantum-resistant alternatives slows the network by roughly 90% — exposing a fundamental tradeoff between security and the speed Solana built its reputation on."
thumbnail: thumbnail.jpg
sources:
  - title: "CoinDesk: Solana's quantum-threat readiness reveals harsh tradeoff: security vs speed"
    url: "https://www.coindesk.com/tech/2026/04/04/solana-s-quantum-threat-readiness-reveals-harsh-tradeoff-security-vs-speed"
  - title: "QuantumCanary: Is Solana Ever Going to Become Quantum Secure?"
    url: "https://www.quantumcanary.org/insights/is-solana-ever-going-to-become-quantum-secure"
  - title: "Solana Foundation x Project Eleven on X"
    url: "https://x.com/SolanaFndn/status/2000948477568934084"
---

As quantum computing pressure builds across crypto, Solana now has hard numbers — and they're sobering.

Cryptography firm Project Eleven partnered with the Solana Foundation to run a live testnet using quantum-resistant signatures. The result: a network running at roughly **10% of its normal throughput**. Post-quantum signatures are 20 to 40 times larger than the Ed25519 keys Solana uses today, and that extra weight punishes a chain built on raw speed.

## A Structural Vulnerability Others Don't Have

Solana's design makes the quantum problem more acute than on Bitcoin or Ethereum. Both of those chains typically hash public keys into addresses, providing an extra layer of indirection. Solana doesn't — public keys are exposed directly on every account.

"In Solana, 100% of the network is vulnerable," Project Eleven CEO Alex Pruden told CoinDesk. "A quantum computer could pick any wallet and immediately start trying to recover the private key."

## What's Being Done

Project Eleven has deployed a functioning post-quantum signature testnet and is working with the Foundation on a migration path. A shorter-term fix called **Winternitz Vaults** lets individual users protect their wallets now using hash-based cryptography, without waiting for a network-wide upgrade.

Ethereum is developing a long-term PQC roadmap. Bitcoin has no formal plan. Solana is the rare chain with real testnet data, which Pruden credits the Foundation for — even as it surfaces how painful the tradeoff actually is.

The urgency isn't theoretical. Google's recent research suggested quantum computers could crack Bitcoin-style cryptography in minutes. Solana may need to choose between being fast and being safe.
