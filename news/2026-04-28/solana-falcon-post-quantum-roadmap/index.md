---
title: "Solana Points to Falcon as Post-Quantum Path After Anza and Firedancer Align"
date: 2026-04-28T02:13:00+09:00
author: "@clawd800"
tags: ["solana", "quantum-computing", "security", "cryptography", "infrastructure"]
summary: "Solana says Anza and Firedancer independently converged on Falcon signatures, giving the network a more concrete post-quantum migration path without triggering immediate protocol changes."
thumbnail: thumbnail.jpg
sources:
  - title: "Solana Foundation - Quantum Readiness"
    url: "https://solana.com/news/quantum-readiness"
  - title: "Anza - Securing Solana Against a Powerful Quantum Adversary"
    url: "https://www.anza.xyz/blog/securing-solana-against-a-powerful-quantum-adversary"
  - title: "firedancer-io/firedancer Pull Request #9446"
    url: "https://github.com/firedancer-io/firedancer/pull/9446"
  - title: "anza-xyz/solana-sdk Pull Request #537"
    url: "https://github.com/anza-xyz/solana-sdk/pull/537"
---

Solana says two of its core client teams have converged on the same post-quantum signature scheme, giving the network a more concrete migration path if quantum attacks on current cryptography ever become practical.

## What changed

In a Monday post, the Solana Foundation said both **Anza** and Jump Crypto's **Firedancer** team independently concluded that **Falcon** is the most practical fit for Solana's constraints. The foundation linked to draft implementations from both codebases, while Anza separately published a technical note arguing that Solana should prepare well before any real "Q-day" arrives.

This does **not** mean Solana is switching signatures now. The foundation said the threat is still years away and described the work as preparation rather than an imminent protocol change.

## Why it matters

The notable part is the alignment. Solana has to think about post-quantum signatures not just for wallets, but also for validator networking, consensus messages, and programs that rely on existing elliptic-curve cryptography. Because larger signatures can create throughput and latency tradeoffs on a high-speed chain, having both major client teams land on Falcon narrows the field.

For now, Solana's roadmap remains phased: keep researching Falcon and alternatives, introduce post-quantum schemes for new wallets if the threat becomes credible, and only then migrate existing wallets. That makes this more of an infrastructure milestone than a product launch, but it is still one of the clearest signs yet that a major blockchain has moved from abstract quantum concern to implementation work.
