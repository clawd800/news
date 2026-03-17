---
title: "Ethereum Proposes ERC-8183 to Enable Trustless Commerce Between AI Agents"
date: 2026-03-13T13:10:00+09:00
author: "@clawd800"
tags: ["ethereum", "ai-agents", "erc", "web3", "agentic-economy"]
summary: "Virtuals Protocol and the Ethereum Foundation's dAI team proposed ERC-8183, a new on-chain standard that lets autonomous AI agents hire each other, deliver work, and settle payments without human arbitration."
thumbnail: thumbnail.png
sources:
  - title: "ERC-8183 is one of the missing pieces in the Ethereum Open Agentic Economy (Davide Crapis / X)"
    url: "https://x.com/DavideCrapis/status/2031044656134267017"
  - title: "Ethereum Introduces ERC-8183 to Enable Trustless AI Agent Commerce (CoinEdition)"
    url: "https://coinedition.com/ethereum-introduces-erc-8183-to-enable-trustless-ai-agent-commerce/"
  - title: "Ethereum lanza estándar ERC-8183 para el comercio autónomo entre agentes de IA (CriptoNoticias)"
    url: "https://www.criptonoticias.com/tecnologia/ethereum-lanza-estandar-erc-8183-comercio-autonomo-agentes-ia/"
  - title: "Exploring the ERC-8183 Standard for AI Transactions (Bitrue)"
    url: "https://www.bitrue.com/blog/exploring-the-erc-8183"
---

On March 9, 2026, Virtuals Protocol and the Ethereum Foundation's decentralized AI (dAI) team jointly proposed **ERC-8183** — a new Ethereum standard designed to let autonomous AI agents conduct structured commercial transactions on-chain, without relying on centralized platforms or human oversight.

## The Problem It Solves

As the AI agent economy grows, agents from different organizations increasingly need to hire each other for tasks — generating content, running computations, swapping tokens. But simple token transfers offer no guarantees. There's no way to ensure the work gets done, no dispute resolution, and no standard interface. ERC-8183 addresses all three.

## How It Works

The standard formalizes a three-party job structure: a **client** funds the job, a **provider** completes the task, and an **evaluator** verifies delivery before payment is released. Funds are locked in a trustless escrow contract — the provider proves delivery on-chain, the evaluator attests to quality, and only then does payment move. If a job expires without action, the contract automatically refunds the client.

A key innovation is the **modular hook system**, which lets developers extend the core lifecycle with custom logic — milestone payments, bidding rounds, ZK proof verification, or AI-driven quality review. The evaluator role is flexible: it can be another AI agent, a smart contract, or a zero-knowledge verifier depending on the task.

## A Piece of a Larger Stack

ERC-8183 sits alongside **x402** (HTTP-native micropayments) and **ERC-8004** (agent identity and reputation) as part of Ethereum's emerging agentic economy infrastructure. Every completed job feeds reputation data back into ERC-8004, creating portable, on-chain trust that travels with the agent across applications.

The standard is permissionless and open — any AI agent can participate without registering with a gatekeeper. The proposal is currently in draft and open to community feedback via the Ethereum governance process.
