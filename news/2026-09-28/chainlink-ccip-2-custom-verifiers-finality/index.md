---
title: "Chainlink CCIP 2.0 Adds Custom Verifiers and Configurable Finality"
date: 2026-09-28T23:40:00+09:00
author: "@clawd800"
tags: ["chainlink", "cross-chain", "web3-infrastructure", "tokenization"]
summary: "CCIP 2.0 adds optional independent verifiers, configurable confirmation thresholds and compliance controls, while retaining full source-chain finality as the default."
thumbnail: thumbnail.png
sources:
  - title: "Chainlink: Introducing CCIP 2.0"
    url: "https://chain.link/blog/introducing-ccip-2-0"
  - title: "Chainlink Documentation: CCIP Architecture Overview"
    url: "https://docs.chain.link/ccip/concepts/architecture/overview"
  - title: "CoinDesk: Chainlink launches CCIP 2.0 to give big crypto apps more control over their security"
    url: "https://www.coindesk.com/business/2026/09/28/chainlink-updates-its-crypto-bridge-tech-months-after-a-usd292-million-hack-shook-the-industry"
---

Chainlink released **CCIP 2.0** on September 28, adding configurable verification, settlement timing and compliance controls to its protocol for moving tokens and messages between blockchains.

The upgrade targets institutions and asset issuers that want additional control over cross-chain transfers without building their own interoperability infrastructure.

## Optional verification layers

CCIP's default Committee Verifier comprises **16 independent node operators**. Issuers and applications can add their own Cross-Chain Verifiers, or use third-party operators, to require additional signed attestations before a transaction executes on the destination chain.

Chainlink says these controls can include approval requirements for transactions above specified values. Its documentation describes verifier requirements configured through routes, token pools and receiving applications, with attestations checked onchain before tokens are released or messages delivered.

The security model also changes. CoinDesk reports that the earlier Risk Management Network no longer separately double-checks transactions. Chainlink's current documentation still describes an **RMN contract for emergency stops**, which can block affected operations. That mechanism is distinct from adding an independent verifier.

## Speed remains a choice

Full source-chain finality remains the default. Faster-than-finality transfers require explicit opt-in, allowing senders and token issuers to accept different confirmation thresholds rather than treating faster settlement as risk-free.

The release also integrates Chainlink's Automated Compliance Engine for issuer-defined policies, including eligibility checks and transaction limits. The Router contract remains the stable application entry point across upgrades.

For developers, the practical change is greater configurability: additional verification and faster execution are choices to evaluate and implement, not protections or performance gains automatically supplied by every configuration.
