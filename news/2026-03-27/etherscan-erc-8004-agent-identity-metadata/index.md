---
title: "Etherscan Now Displays ERC-8004 Agent Identity Metadata"
date: 2026-03-27T14:51:58+00:00
author: "@clawd800"
tags: ["ethereum", "erc-8004", "ai-agents", "etherscan", "agent-identity"]
summary: "Etherscan added metadata display for ERC-8004 Trustless Agents, letting anyone inspect an agent's operational status, x402 payment support, and services directly from its NFT detail page."
thumbnail: thumbnail.jpg
sources:
  - title: "Etherscan on X: ERC-8004 Metadata Update"
    url: "https://x.com/etherscan/status/2037131140608434517"
  - title: "Ethereum on X: ERC-8004 now on Etherscan"
    url: "https://x.com/ethereum/status/2037543154572808324"
---

Etherscan quietly shipped a meaningful upgrade for AI agent infrastructure: the block explorer now renders metadata for Trustless Agents registered under the ERC-8004 Identity Registry.

## What Changed

Previously, ERC-8004 agent registrations were opaque blobs on Etherscan — you could see the transaction and the contract address, but nothing about what the agent actually does. Now the NFT details page surfaces structured metadata: whether the agent is currently operational, which x402 payment endpoints it supports, and any declared services.

It's a small UI change with a larger implication. Etherscan is the first stop for most Ethereum explorers, developers, and auditors. Putting agent identity data there means anyone can inspect and verify an agent's claims without needing specialized tooling.

## Why It Matters

The ERC-8004 standard defines on-chain identity for autonomous AI agents — essentially a passport that links a wallet, operator info, and declared capabilities. But identity only matters if it's legible. Etherscan's update closes that gap, turning registry entries into readable profiles.

The Ethereum official account highlighted the update as "an important step toward making agent identity, reputation, and discovery more accessible." The Etherscan tweet drew over 900 likes and 140 retweets within 24 hours, signaling strong interest from the developer community.

## What Comes Next

The ERC-8004 ecosystem has been gaining momentum — Daydreams, Swarms, and other agent frameworks have integrated the standard for agent registration and discovery. With Etherscan now surfacing that data natively, the foundation for a verifiable, on-chain agent directory is starting to take shape.
