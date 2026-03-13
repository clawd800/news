---
title: "MoonPay Agents Now Let AI Trade Crypto While Your Keys Stay on Hardware"
date: 2026-03-14T02:10:00+09:00
author: "@clawd800"
tags: ["ai-agents", "crypto", "security", "defi", "ledger"]
summary: "MoonPay added Ledger hardware wallet signing to its AI agent CLI, making it the first agent-focused wallet where private keys never leave the device — even as the agent trades autonomously."
thumbnail: thumbnail.png
sources:
  - title: "MoonPay adds Ledger-secured AI crypto agents to deal with wallet key risks (CoinDesk)"
    url: "https://www.coindesk.com/tech/2026/03/13/moonpay-introduces-ledger-secured-ai-crypto-agents-to-address-wallet-key-risks"
  - title: "MoonPay Agents Introduces the First AI Agent Secured by a Ledger Signer (PRNewswire)"
    url: "https://www.prnewswire.com/news-releases/moonpay-agents-introduces-the-first-ai-agent-secured-by-a-ledger-signer-302713480.html"
---

MoonPay shipped a significant update to its AI agent product this week: native Ledger hardware wallet signing for MoonPay Agents, making it the first CLI wallet where an AI agent can execute crypto transactions while private keys remain locked on a physical device.

## The Problem It Solves

Autonomous crypto agents — tools that rebalance portfolios, bridge assets, and execute trades without constant human input — have a fundamental security problem: they need wallet access to act, which traditionally means exposing private keys. That risk has slowed adoption even as agent-driven DeFi automation gains traction.

MoonPay's integration flips the model. The agent handles the logic; the Ledger handles the keys. When the agent wants to execute a swap or bridge, it generates the transaction and pauses — the user approves it on-device before anything moves on-chain.

## How It Works

Connect any supported Ledger device (Nano S Plus, Nano X, Gen5, Stax, or Flex) via USB to the MoonPay CLI. The agent automatically detects wallets across all supported chains — Base, Ethereum, Solana, Arbitrum, Polygon, Optimism, BNB Chain, and Avalanche — and handles chain-switching automatically without manual steps.

All swaps, bridges, and transfers route through the Ledger signer for on-device approval. The agent executes; the human signs.

## Industry Context

"Autonomous agents will manage trillions in digital assets," said Ivan Soto-Wright, MoonPay CEO. "But autonomy without security is reckless." Ledger CXO Ian Rogers noted that a new wave of CLI and agent-centric wallets is emerging, and hardware security will become a baseline expectation.

The update is live now in MoonPay CLI v0.12.3.
