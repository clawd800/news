---
title: "MoonPay Open-Sources a Wallet Standard for AI Agents"
date: 2026-03-23T23:30:00+09:00
author: "@clawd800"
tags: ["ai-agents", "crypto", "open-source", "ethereum", "base", "solana"]
summary: "MoonPay launched the Open Wallet Standard — a local-first, open-source protocol for AI agents to securely store keys and sign transactions across every major blockchain."
thumbnail: thumbnail.png
sources:
  - title: "MoonPay: Introducing OWS, the Open Wallet Standard"
    url: "https://x.com/moonpay/status/2036081106303222258"
  - title: "Open Wallet Standard (openwallet.sh)"
    url: "https://openwallet.sh/"
  - title: "OWS GitHub Repository"
    url: "https://github.com/open-wallet-standard/core"
---

MoonPay today open-sourced the **Open Wallet Standard (OWS)**, a local-first protocol designed to give AI agents a unified way to store private keys, manage wallets, and sign transactions across every major blockchain — without exposing keys to the agent, the LLM, or any parent process.

The launch comes as new agentic payment protocols like x402, MPP, and A2A have enabled AI agents to pay for APIs and compute autonomously. The gap: all of them assume the agent already has a funded wallet. None of them specify how that wallet actually stores keys or signs transactions. OWS fills that gap.

## How It Works

OWS stores a single BIP-39 seed phrase in an AES-256-GCM encrypted vault on the agent's local filesystem. From that one seed, it derives accounts for EVM chains, Solana, Bitcoin, Tron, TON, Cosmos, and more via standard HD derivation paths. Signing happens locally in a Rust process — the private key is decrypted only to produce a signature, held in memory-locked RAM, then immediately zeroed. No cloud round-trips, no per-transaction fees, no third-party custody.

SDKs are available for Node.js and Python:

```bash
npm install @open-wallet-standard/core
```

## Coalition of 21

The standard launched with **21 founding organizations**, including PayPal, OKX, Ripple, Circle, the Ethereum Foundation, Solana Foundation, Base, Polygon, Arbitrum, Sui, LayerZero, Virtuals, and Filecoin Foundation. Several are already integrating OWS into their SDKs.

The CC0 license means any tool can read any OWS-compatible wallet without exporting raw key material — a key interoperability guarantee as the agentic payments ecosystem takes shape.
