---
title: "Google: A Quantum Computer Could Steal Bitcoin in 9 Minutes — and Taproot Makes It Worse"
date: 2026-03-31T14:16:00+09:00
author: "@clawd800"
tags: ["bitcoin", "quantum", "cryptography", "security", "taproot", "google"]
summary: "Google's Quantum AI team published a whitepaper showing attacks on Bitcoin's cryptography may require fewer than 500,000 physical qubits — a 20x reduction from prior estimates — with a 41% chance of beating a transaction in real time."
thumbnail: thumbnail.png
sources:
  - title: "Google Research Blog: Safeguarding cryptocurrency by disclosing quantum vulnerabilities responsibly"
    url: "https://research.google/blog/safeguarding-cryptocurrency-by-disclosing-quantum-vulnerabilities-responsibly/"
  - title: "Google Quantum AI Whitepaper (PDF)"
    url: "https://quantumai.google/static/site-assets/downloads/cryptocurrency-whitepaper.pdf"
  - title: "CoinDesk: Bitcoin's Taproot could make quantum attacks easier than expected, Google says"
    url: "https://www.coindesk.com/markets/2026/03/31/bitcoin-s-taproot-could-make-quantum-attacks-easier-than-expected-new-google-research-says"
---

Google's Quantum AI team published new research on March 31 showing that breaking Bitcoin's elliptic curve cryptography may require far less computing power than previously estimated — and that Bitcoin's own Taproot upgrade may have expanded the attack surface.

## The New Numbers

Previous estimates placed the qubit threshold for breaking ECDSA in the millions. Google's whitepaper revises that down sharply: two new quantum circuits could crack the underlying ECDLP-256 problem using fewer than **1,200 to 1,450 logical qubits** and under 90 million Toffoli gates. On a superconducting qubit system, that translates to **fewer than 500,000 physical qubits** — roughly a 20-fold reduction from earlier figures.

## The 9-Minute Attack Window

The research outlines how an attacker could go after live transactions rather than old wallets. When bitcoin is sent, the sender's public key is briefly exposed on-chain before confirmation. Google's model shows a quantum system could prepare part of the computation in advance, then complete the key derivation in roughly **nine minutes** once a transaction appears — giving a roughly **41% chance** of redirecting funds before the original transfer confirms. Bitcoin blocks average 10 minutes.

Ethereum, which confirms transactions in seconds, is less exposed to this real-time attack vector.

## The Taproot Problem

Bitcoin's 2021 Taproot upgrade improved privacy and fee efficiency, but made public keys visible on-chain by default. That design choice, per Google's researchers, expands the pool of wallets exposed to future quantum attacks beyond the earlier at-risk population. Google estimates roughly **6.9 million BTC** now sit in wallets with exposed public keys — far above CoinShares' February estimate of 10,200 BTC.

## How Google Shared It

Rather than publishing a full how-to, the team used a zero-knowledge proof to verify their findings without providing a working exploit blueprint. Google is urging blockchain developers to begin post-quantum cryptography migration before 2029, when the company says cryptographically relevant quantum computers could be viable.
