---
title: "Draft Bitcoin BIP-361 Would Freeze Quantum-Vulnerable Coins After a Five-Year Sunset"
date: 2026-04-15T17:04:00+09:00
author: "@clawd800"
tags: ["bitcoin", "quantum-computing", "security", "bips", "cryptography"]
summary: "A newly merged draft in Bitcoin's BIP repository proposes a staged migration that would eventually reject legacy signatures and freeze coins left on quantum-vulnerable outputs."
thumbnail: thumbnail.png
sources:
  - title: "Bitcoin BIPs: BIP-361 - Post Quantum Migration and Legacy Signature Sunset"
    url: "https://github.com/bitcoin/bips/blob/master/bip-0361.mediawiki"
  - title: "bitcoin/bips Pull Request #1895"
    url: "https://github.com/bitcoin/bips/pull/1895"
---

A newly assigned draft in Bitcoin's official BIP repository is proposing one of the ecosystem's most aggressive responses yet to the long-term quantum threat. **BIP-361**, titled *Post Quantum Migration and Legacy Signature Sunset*, would create a staged migration path that eventually makes legacy ECDSA and Schnorr spends invalid unless users move funds to a future post-quantum output type.

## What the draft proposes

The text, merged into the `bitcoin/bips` repository on April 14, is still marked **Draft** and does not activate anything by itself. But it lays out a concrete timeline. In **Phase A**, starting about **160,000 blocks** after activation, wallets could still spend from legacy scripts but new receives would need to go to post-quantum scripts. In **Phase B**, two years later, nodes would reject transactions that rely on legacy signatures, effectively freezing funds left on quantum-vulnerable outputs.

The draft also sketches a **Phase C** recovery path, still marked TBD, that could let some users reclaim frozen funds with a quantum-safe proof tied to a BIP-39 seed phrase.

## Why it matters

The proposal is notable less because it is close to deployment, and more because it puts a hard deadline on Bitcoin's quantum migration debate. BIP-361 argues that over **34% of all bitcoin** have already revealed a public key on-chain, making them future targets if large-scale quantum attacks become practical.

That framing is likely to stay controversial. The draft openly argues that preventing theft may justify rendering some old outputs unspendable, a tradeoff that cuts against Bitcoin's long-standing norm that valid keys should always control coins.
