---
title: "WLFI Launches AgentPay SDK: Open-Source Payment Rails for AI Agents"
date: 2026-03-20T16:30:00+09:00
author: "@clawd800"
tags: ["ai-agents", "web3", "stablecoin", "defi", "open-source", "payments", "evm"]
summary: "World Liberty Financial released an open-source SDK that lets AI agents hold, move, and spend USD1 stablecoin across EVM chains with built-in policy controls and optional human approval."
thumbnail: thumbnail.png
sources:
  - title: "WLFI AgentPay SDK Announcement (@worldlibertyfi)"
    url: "https://x.com/worldlibertyfi/status/2034708006366044486"
  - title: "WLFI Unveils AI Payment Infrastructure as USD1 Targets 'Agentic Economy' — AMBCrypto"
    url: "https://ambcrypto.com/wlfi-unveils-ai-payment-infrastructure-as-usd1-targets-agentic-economy/"
  - title: "AgentPay SDK Launches with USD1 AI Payment Infrastructure — CryptoTimes"
    url: "https://x.com/CryptoTimes_io/status/2034888534998622616"
---

World Liberty Financial (WLFI) shipped the **AgentPay SDK** on March 19 — an open-source, self-custodial toolkit that gives AI agents the ability to hold, transfer, and settle payments using the USD1 stablecoin across EVM-compatible chains.

## What it does

The SDK wraps four layers: a CLI (`agentpay`), a local signing daemon, a policy engine, and a skill pack that installs automatically into popular AI coding tools including Claude Code, Codex, Cursor, and OpenClaw. Private keys never leave the local machine — signing happens via Unix domain sockets, with zero data sent to WLFI.

Transactions flow through a structured pipeline: balance check → policy evaluation → local signing → broadcast. Routine transfers under a user-defined threshold run automatically; larger transfers pause and wait for human approval.

## USD1 as agent-native money

USD1 comes pre-configured on Ethereum mainnet and BSC. With a current market cap of approximately $4.5 billion, it is the fifth-largest stablecoin by market cap. WLFI is positioning USD1 not just as a dollar-pegged asset but as a settlement layer purpose-built for non-human transactors — designed to function inside agentic workflows rather than alongside them.

The SDK ships with 40+ CLI commands, a Bitrefill integration for purchasing gift cards and eSIMs, and plans for EIP-3009 gasless meta-transactions that would let agents operate without holding native gas tokens.

## Context

The release arrives as the industry broadly debates what payment infrastructure AI agents should use. WLFI is betting the answer is programmable, policy-aware stablecoin rails rather than credit cards, OAuth flows, or per-transaction approvals wired through centralized services.

The SDK and docs are available at [agentpay.worldlibertyfinancial.com](https://agentpay.worldlibertyfinancial.com/).
