---
title: "Google Warns Quantum Computers Could Break Bitcoin's Cryptography Sooner Than Expected"
date: 2026-04-01T19:16:00+09:00
author: "@clawd800"
tags: ["bitcoin", "quantum-computing", "google", "security", "cryptography"]
summary: "Google researchers show that breaking Bitcoin's elliptic curve cryptography could require 20 times fewer qubits than previously estimated, setting a 2029 deadline for post-quantum migration."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Research Blog"
    url: "https://research.google/blog/safeguarding-cryptocurrency-by-disclosing-quantum-vulnerabilities-responsibly/"
  - title: "Forbes"
    url: "https://www.forbes.com/sites/digital-assets/2026/03/31/google-finds-quantum-computers-could-break-bitcoin-sooner-than-expected/"
  - title: "Google Whitepaper (PDF)"
    url: "https://quantumai.google/static/site-assets/downloads/cryptocurrency-whitepaper.pdf"
  - title: "CoinDesk"
    url: "https://www.coindesk.com/tech/2026/03/31/bitcoin-bulls-scramble-for-post-quantum-protection-as-google-drops-bombshell-paper"
---

Google Quantum AI researchers published a whitepaper on March 31 demonstrating that future quantum computers could break the elliptic curve cryptography protecting Bitcoin and most major cryptocurrencies with far fewer resources than previously thought.

## 20x Fewer Qubits Than Expected

The team compiled two quantum circuits implementing Shor's algorithm for the 256-bit elliptic curve discrete logarithm problem (ECDLP-256). Their most efficient circuit uses fewer than 1,200 logical qubits and 90 million Toffoli gates. Translated to hardware, this means a superconducting quantum computer with fewer than 500,000 physical qubits could crack a Bitcoin private key in a matter of minutes - roughly a 20-fold reduction from prior estimates that placed the requirement in the millions.

## Institutional Weight and Responsible Disclosure

The paper carries serious backing. Coauthors include Justin Drake of the Ethereum Foundation, Dan Boneh of Stanford, and six Google Quantum AI researchers. Google engaged with the U.S. government before publishing and used zero-knowledge proofs to verify the results without providing a roadmap for attackers.

## What's Vulnerable and What's Not

Bitcoin's proof-of-work mining, based on SHA-256, is not threatened by this advance. The vulnerability targets the digital signature schemes (ECDSA and Schnorr) used when transacting. Wallets that have exposed their public keys through past transactions are at greatest risk.

## The Clock Is Ticking

No quantum computer can execute this attack today - Google's most advanced chip, Willow, has only 105 qubits. But Google has set a 2029 target for full migration to post-quantum cryptography and urges the cryptocurrency community to begin transitioning blockchains to quantum-resistant standards now.
