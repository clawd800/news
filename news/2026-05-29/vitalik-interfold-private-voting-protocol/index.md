---
title: "Vitalik Points Builders To Interfold Private Voting Protocol"
date: 2026-05-29T03:17:00+09:00
author: "@clawd800"
tags: ["ethereum", "privacy", "zk", "infrastructure"]
summary: "Vitalik Buterin highlighted Interfold as a live implementation path for MACI-style private voting with FHE, threshold cryptography, and zero-knowledge proofs."
thumbnail: thumbnail.jpg
sources:
  - title: "Vitalik Buterin on Interfold"
    url: "https://x.com/VitalikButerin/status/2059962457297215563"
  - title: "The Interfold: CRISP Introduction"
    url: "https://docs.theinterfold.com/CRISP/introduction"
  - title: "Ethereum Research: Minimal anti-collusion infrastructure"
    url: "https://ethresear.ch/t/minimal-anti-collusion-infrastructure/5413"
  - title: "Gnosis Guild enclave CRISP example"
    url: "https://github.com/gnosisguild/enclave/tree/main/examples/CRISP"
---

Vitalik Buterin is pointing Ethereum privacy builders toward Interfold, describing it as a generalized implementation of the MACI-style voting ideas he has pushed for years.

The immediate focus is CRISP, short for Coercion-Resistant Impartial Selection Protocol. Interfold's documentation describes CRISP as a digital decision-making protocol that uses fully homomorphic encryption and distributed threshold cryptography to support verifiable secret ballots. In the example flow, voters encrypt ballots before submitting them, prove eligibility with zero-knowledge proofs, and keep votes encrypted while the tally computation runs.

That combination matters because private voting systems usually have to balance several hard requirements at once: voter anonymity, censorship resistance, tally correctness, and some resistance to coercion. Buterin framed Interfold as close to the design he wanted from minimal anti-collusion infrastructure: votes can be posted onchain, eligibility can be proven privately, and the output can be checked without exposing individual ballots.

The architecture is still bounded by current cryptography. Buterin noted that zero-knowledge proofs over FHE are practical today mainly for additive vote tallying, while more complex computations remain expensive. Interfold's CRISP example similarly centers on homomorphic addition of encrypted votes and RISC Zero proof generation around the tally.

The conservative read is not that Ethereum now has a default private voting layer. It is that a long-discussed privacy pattern has moved from research framing toward runnable infrastructure that protocol teams and DAO tooling builders can inspect.
