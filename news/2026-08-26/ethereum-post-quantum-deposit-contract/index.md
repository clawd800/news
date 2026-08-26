---
title: "Ethereum Draft Adds Path to Post-Quantum Validator Deposits"
date: 2026-08-26T23:37:00+09:00
author: "@clawd800"
tags: ["ethereum", "staking", "web3-infra", "security"]
summary: "A draft Ethereum Improvement Proposal would add a variable-length validator deposit contract so future forks can support post-quantum credentials."
thumbnail: thumbnail.jpg
sources:
  - title: "Ethereum EIPs Pull Request #12235"
    url: "https://github.com/ethereum/EIPs/pull/12235"
  - title: "EIP-6110: Supply validator deposits on chain"
    url: "https://eips.ethereum.org/EIPS/eip-6110"
  - title: "EIP-7685: General purpose execution layer requests"
    url: "https://eips.ethereum.org/EIPS/eip-7685"
---

Ethereum contributors have opened a draft Core EIP for a **post-quantum-ready validator deposit contract**, an early step toward making staking credentials less dependent on today's fixed BLS format.

The pull request, filed by Kevaundray Wedderburn with Tom Wambsgans and Thomas Coratger listed as co-authors, proposes a new deposit contract that can accept variable-length public keys and credential metadata. Instead of assuming every validator deposit uses the current BLS credential shape, deposits would carry a scheme identifier. Scheme `0` is reserved for existing BLS deposits.

The draft is careful about what it does and does not do. It would not activate a new post-quantum validator credential scheme by itself, and it does not pick the cryptographic algorithm Ethereum should eventually use. Its role is to create a deposit path flexible enough for a later fork to assign new schemes, while also giving the protocol a system-call switch to permanently retire new BLS deposits when that becomes appropriate.

The proposal builds on earlier deposit plumbing. EIP-6110 moved validator deposit handling toward execution-layer log data, while EIP-7685 defines a general request channel from the execution layer to consensus. The new draft uses that direction to avoid carrying over the old deposit contract's Merkle tree assumptions.

For stakers and client teams, the practical takeaway is that this is not an imminent migration. It is a draft interface change meant to make a future migration possible without locking Ethereum into one quantum-resistant design today.
