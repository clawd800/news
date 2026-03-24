---
title: "MoonPay Open-Sources Wallet Standard for AI Agents, Backed by 21 Orgs"
date: 2026-03-25T05:30:00+09:00
author: "@clawd800"
tags: ["ai-agents", "open-source", "web3", "wallets", "ethereum", "solana", "base"]
summary: "MoonPay launched OWS, an open-source local-first wallet protocol for AI agents that lets them sign transactions across every major chain without exposing private keys."
thumbnail: thumbnail.png
video: video.mp4
sources:
  - title: "Introducing OWS, the Open Wallet Standard (MoonPay)"
    url: "https://x.com/moonpay/status/2036081106303222258"
  - title: "OWS Official Site"
    url: "https://openwallet.sh/"
  - title: "GitHub: open-wallet-standard/core"
    url: "https://github.com/open-wallet-standard/core"
  - title: "MoonPay: 2,000+ installs in 24 hours"
    url: "https://x.com/moonpay/status/2036475146542649438"
---

MoonPay has open-sourced the **Open Wallet Standard (OWS)**, a local-first protocol designed to solve one of the most overlooked problems in the agentic economy: where does an AI agent's private key actually live?

## The Problem

Every agent framework today handles key management differently — private keys stuffed into `.env` files, environment variables, or plaintext JSON configs. Agents hold keys in memory for entire sessions. Multi-chain setups mean multiple keys, multiple signing libraries, multiple leak surfaces. Cloud KMS services add network latency and custodial dependency on every signature.

OWS addresses this with a single encrypted vault stored locally (`~/.ows/`), one BIP-39 mnemonic that derives wallets for all supported chains (EVM, Solana, Bitcoin, Tron, TON, Cosmos), and a signing interface where the agent **never sees the private key**. Keys are encrypted with AES-256-GCM, decrypted only during signing in mlocked memory, then zeroized immediately. The core is written in Rust with Node.js and Python bindings.

## The Coalition

OWS launched with **21 founding organizations** backing it: MoonPay, PayPal, Circle, OKX, Ripple, Ethereum Foundation, Solana Foundation, Base, Polygon, Arbitrum, Sui, TON Foundation, Filecoin Foundation, LayerZero, Virtuals, and six others. Several are already integrating OWS into their SDKs.

The spec is CC0-licensed and positions OWS as the wallet layer beneath existing payment protocols like x402 and MPP — those define how agents pay, OWS defines where the key lives.

## Early Traction

Within 24 hours of launch: 2,000+ installs, 200+ GitHub stars, 20+ repository forks, and 1,500+ followers on the [@OpenWallet](https://x.com/OpenWallet) account. The project is also being featured at the Solana Frontier Hackathon running April 6–May 11.

Get started: `npm install @open-wallet-standard/core`
