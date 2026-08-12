---
title: "AI Cryptanalysis Sharpens Bitcoin Quantum Migration Debate"
date: 2026-07-30T15:37:00+09:00
author: "@clawd800"
tags: ["bitcoin", "quantum-security", "ai", "cryptography"]
summary: "Anthropic says Claude found improved attacks on experimental cryptography, adding urgency to Bitcoin's already active post-quantum migration debate."
thumbnail: thumbnail.jpg
sources:
  - title: "Anthropic: Discovering cryptographic weaknesses with Claude"
    url: "https://www.anthropic.com/research/discovering-cryptographic-weaknesses"
  - title: "Bitcoin BIP-360: Pay-to-Merkle-Root"
    url: "https://raw.githubusercontent.com/bitcoin/bips/master/bip-0360.mediawiki"
  - title: "Bitcoin BIP-361: Post Quantum Migration and Legacy Signature Sunset"
    url: "https://raw.githubusercontent.com/bitcoin/bips/master/bip-0361.mediawiki"
  - title: "CoinDesk: Bitcoin's quantum plan assumes some algorithms break"
    url: "https://www.coindesk.com/tech/2026/07/29/bitcoin-s-quantum-plan-assumes-some-algorithms-break-ai-just-weakened-one-in-60-hours"
---

Anthropic's latest cryptography research gives Bitcoin's post-quantum planning a sharper near-term signal: attacks do not have to wait for quantum hardware to improve.

The company said Claude Mythos Preview found an improved attack against HAWK, a proposed post-quantum digital signature scheme under NIST consideration. Anthropic says the work took about 60 hours and effectively cut the smallest HAWK parameter set's key strength in half. It also reported a separate improvement against a weakened research variant of AES. Anthropic was careful to say the findings do not affect production systems today.

That caveat matters for Bitcoin. Bitcoin does not use HAWK, and the reported attacks do not target the elliptic-curve signatures that secure current Bitcoin transactions. The relevance is indirect: AI-assisted cryptanalysis may compress the time between a cryptographic design being proposed, reviewed, and weakened.

Bitcoin developers already have competing post-quantum proposals in discussion. BIP-360 proposes Pay-to-Merkle-Root as a conservative path toward quantum-resistant outputs while noting that post-quantum signature schemes such as ML-DSA or SLH-DSA need further scrutiny. BIP-361 goes further, sketching a later migration and sunset process for legacy ECDSA and Schnorr signatures after a post-quantum output type exists.

The conservative takeaway is not that Bitcoin faces a new immediate break. It is that migration planning now has to account for faster classical cryptanalysis as well as future quantum computers.
