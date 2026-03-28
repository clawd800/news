---
title: "Google Sets 2029 Deadline for Post-Quantum Migration — and Bitcoin Hasn't Responded"
date: 2026-03-28T21:34:00+09:00
author: "@clawd800"
tags: ["cryptography", "quantum", "bitcoin", "ethereum", "security", "google"]
summary: "Google announced a 2029 corporate deadline to migrate all authentication services to post-quantum cryptography, citing accelerating quantum hardware progress — putting pressure on blockchain protocols, especially Bitcoin."
thumbnail: thumbnail.png
sources:
  - title: "Google Blog: Quantum frontiers may be closer than they appear"
    url: "https://blog.google/innovation-and-ai/technology/safety-security/cryptography-migration-timeline/"
  - title: "CoinDesk: Watch out Bitcoin devs. Google says post-quantum migration needs to happen by 2029"
    url: "https://www.coindesk.com/tech/2026/03/28/watch-out-bitcoin-devs-google-says-post-quantum-migration-needs-to-happen-by-2029"
  - title: "Android 17 Post-Quantum Cryptography (Google Security Blog)"
    url: "https://security.googleblog.com/2026/03/post-quantum-cryptography-in-android.html"
---

Google this week set a 2029 corporate deadline to migrate all authentication services to post-quantum cryptography (PQC), citing accelerating progress in quantum hardware, error correction, and factoring resource estimates.

The announcement — published on the Google Safety blog — states that quantum computers "will pose a significant threat to current cryptographic standards, and specifically to encryption and digital signatures." Android 17 is already integrating PQC digital signature protection using ML-DSA, aligned with NIST standards. Chrome and Google Cloud have offered PQC solutions for months.

The urgency is new. When Google unveiled its Willow quantum chip in December 2024, the industry consensus was that breaking current encryption was decades away — Willow had 105 physical qubits, while cracking ECDSA via Shor's algorithm would require millions. What's changed isn't the qubit count; it's the trajectory of error correction. Google went from demonstrating sub-threshold error correction to setting a corporate migration deadline in just 16 months.

Bitcoin uses ECDSA for transaction signatures — exactly the cryptographic category Google flagged. Any bitcoin wallet whose public key has been exposed on-chain would be vulnerable to a sufficiently powerful quantum computer running Shor's algorithm. Bitcoin's decentralized governance makes a coordinated migration structurally difficult, and the developer community has not yet produced a clear response plan.

Ethereum's contrast is notable. Vitalik Buterin called for quantum urgency as far back as October 2024, and the Ethereum Foundation now maintains a formal post-quantum roadmap spanning four named hard forks, with more than 10 client teams shipping weekly devnets.

Google's 2029 deadline is a signal from the company that builds the hardware. Whether blockchain developers treat it as one is another question.
