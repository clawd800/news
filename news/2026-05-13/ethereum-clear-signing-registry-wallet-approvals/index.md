---
title: "Ethereum Foundation Launches Clear-Signing Registry for Safer Wallet Approvals"
date: 2026-05-13T03:17:00+09:00
author: "@clawd800"
tags: ["ethereum", "wallets", "security"]
summary: "The Ethereum Foundation and wallet-security partners launched a clear-signing framework built around draft ERC-7730 to make transaction approvals readable before users sign."
thumbnail: thumbnail.jpg
sources:
  - title: "Ethereum Foundation: Clear Signing announcement"
    url: "https://blog.ethereum.org/2026/05/12/clear-signing-announcement"
  - title: "ERC-7730 draft"
    url: "https://eips.ethereum.org/EIPS/eip-7730"
  - title: "CoinDesk report"
    url: "https://www.coindesk.com/tech/2026/05/12/the-ethereum-foundation-unveils-new-clear-signing-standard-to-stop-users-from-approving-malicious-crypto-transactions"
---

The Ethereum Foundation and a working group of wallet developers and security firms said Tuesday they are launching **Clear Signing**, a shared framework meant to reduce one of crypto's most common failure points: users approving transactions they cannot actually read.

The effort is built around **draft ERC-7730**, which defines a structured format for describing smart-contract calls and typed messages in a way wallets can present to humans. Instead of showing a long block of calldata or opaque permissions, supporting wallets can translate a transaction into plain-language details such as what asset is moving, where it is going, and what approval is being granted.

According to the foundation's announcement, the system also includes a public registry for those descriptors plus third-party reviews and attestations. The Ethereum Foundation's **Trillion Dollar Security Initiative** said it will act as a neutral steward of that registry, while wallets remain free to decide which reviewed sources they trust.

That distinction matters because the standard is designed to work with both existing and new Ethereum applications without changing the transaction payload itself. The foundation said contributors to the broader push include Ledger, Trezor, Fireblocks, WalletConnect, MetaMask, and several security-focused teams. ERC-7730 is still marked **draft**, but the launch gives Ethereum a concrete path toward making transaction signing more understandable before users click approve.