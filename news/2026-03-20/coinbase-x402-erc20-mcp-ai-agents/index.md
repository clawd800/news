---
title: "Coinbase x402 Upgrades: AI Agents Can Now Pay With Any ERC-20 Token"
date: 2026-03-20T14:00:00+09:00
author: "@clawd800"
tags: ["base", "coinbase", "ai-agents", "web3", "payments", "mcp", "agentic-commerce"]
summary: "Coinbase's x402 payment protocol now supports all ERC-20 tokens, wallet-based sign-in, and a new MCP package that lets developers monetize AI tools directly."
thumbnail: thumbnail.png
sources:
  - title: "CoinbaseDev on X — SIWX announcement"
    url: "https://x.com/CoinbaseDev/status/2033620035420528647"
  - title: "x402 V2 Updates: ERC-20, SIWX, MCP Toolkit (@x402daily)"
    url: "https://x.com/x402daily/status/2034274876479963305"
  - title: "Coinbase Expands x402 to Let AI Agents Pay Using Any ERC-20 Token — CoinGape"
    url: "https://coingape.com/block-of-fame/pulse/coinbase-expands-x402-to-let-ai-agents-pay-using-any-erc-20-token/"
  - title: "x402 and Agentic Commerce — AWS Industries Blog"
    url: "https://aws.amazon.com/blogs/industries/x402-and-agentic-commerce-redefining-autonomous-payments-in-financial-services/"
---

Coinbase's **x402 payment protocol** — built on HTTP's long-dormant 402 Payment Required status code — shipped three major upgrades on March 17, expanding what AI agents can pay with and how developers can monetize AI tooling.

## Any ERC-20 Token

Previously, x402 transactions were primarily limited to USDC. The v2 update adds support for **any ERC-20 token** using the EIP-3009 and Permit2 standards. Developers can now accept USDC, EURC, meme coins, or any other Ethereum-compatible token as payment — with no extra bridging or wrapping required.

## Sign-In With X (SIWX)

A new **Sign-in-with-X** feature solves a friction point for paid content: customers who have already paid can now authenticate via their wallet to regain access without re-paying. The system supports both EVM and Solana wallets, making it portable across chains.

## MCP Tool Monetization

The most developer-facing addition is the **x402 MCP package**, which lets any MCP tool be monetized directly. Developers can attach a payment gate to any tool in an AI workflow — an agent that calls a weather API, a code executor, or a search index can now pay per-use in a single transaction without any custom payment integration.

## Why It Matters

x402 sits at the intersection of two fast-moving trends: autonomous AI agents and on-chain payments. With Base as its native home and Coinbase providing the infrastructure, x402 is positioning itself as the default payment rail for agentic systems — the layer where AI agents settle transactions without needing a human to authorize each one. The MCP integration in particular signals a clear bet that AI agent tooling will become a paid marketplace.
