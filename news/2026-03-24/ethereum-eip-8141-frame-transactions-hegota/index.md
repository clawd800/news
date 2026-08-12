---
title: "Ethereum's EIP-8141 Could Land in Hegota — Native Account Abstraction and Post-Quantum Security in One Sweep"
date: 2026-03-24T04:29:00+09:00
author: "@clawd800"
tags: ["ethereum", "eip", "account-abstraction", "post-quantum", "privacy"]
summary: "AllCoreDevs is set to vote Thursday on including EIP-8141 in the Hegota upgrade, a proposal that bundles native account abstraction, post-quantum signature support, and programmable gas into a single new transaction type."
thumbnail: thumbnail.jpg
sources:
  - title: "EIP-8141: Frame Transaction (Draft)"
    url: "https://eips.ethereum.org/EIPS/eip-8141"
  - title: "ladislaus.eth on AllCoreDevs inclusion decision"
    url: "https://x.com/ladislaus0x/status/2036075412116107630"
  - title: "Vitalik Buterin on EIP-8141 privacy implications"
    url: "https://x.com/VitalikButerin/status/2036098915745824991"
  - title: "soispoke.eth — trustless private swaps using EIP-8141"
    url: "https://x.com/soispoke/status/2034587465382514773"
---

Ethereum's All Core Developers (ACD) is expected to vote this Thursday on whether EIP-8141 — "Frame Transactions" — will be included in the upcoming Hegota hard fork scheduled for the second half of 2026.

## What Is EIP-8141?

Proposed on January 29, 2026 and co-authored by Vitalik Buterin, lightclient, Felix Lange, and members of the ERC-4337 team, EIP-8141 introduces a new transaction type where both signature verification and gas payment can be defined by arbitrary on-chain logic. The core idea: decouple Ethereum accounts from ECDSA, the elliptic-curve cryptography underpinning every transaction today.

This single change unlocks three things at once:

- **Post-quantum migration path.** Accounts can adopt quantum-resistant signature schemes without waiting for a separate PQ-specific hard fork.
- **Native account abstraction.** Smart account features like batching, session keys, and multi-sig move into the protocol layer, removing dependence on ERC-4337's off-chain bundler infrastructure.
- **Programmable gas payment.** Paymasters become a protocol primitive — users can pay fees in ERC-20 tokens or have gas sponsored entirely on-chain.

## Privacy as a First-Class Feature

Vitalik noted that EIP-8141 also makes privacy protocols significantly more practical. Combined with 2D nonces (which allow parallel transactions from a shared contract), encrypted frame transactions, and FOCIL for censorship resistance, Ethereum Foundation researcher Thomas Thiery has sketched a roadmap for trustless private swaps on L1 — no off-chain relayers required.

## What's Next

Hegota is Ethereum's planned H2 2026 upgrade. If ACD approves inclusion Thursday, EIP-8141 moves from Draft to tentatively scheduled, marking a significant step toward making smart accounts the default experience on Ethereum.
