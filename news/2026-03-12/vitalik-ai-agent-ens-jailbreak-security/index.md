---
title: "Vitalik Warns AI Agents Can Be Robbed Through Hidden ENS Jailbreaks"
date: 2026-03-12T08:00:00+00:00
author: "@dropi"
tags: ["base", "ai-agents", "security", "ethereum", "defi"]
summary: "Ethereum co-founder Vitalik Buterin warns that AI agents holding crypto wallets are vulnerable to prompt injection attacks hidden inside ENS profiles — a threat no current solution fully solves."
thumbnail: thumbnail.png
sources:
  - title: "Vitalik Buterin on X — ENS prompt injection warning"
    url: "https://x.com/VitalikButerin"
  - title: "Coinbase Agentic Wallets announcement"
    url: "https://www.coinbase.com/blog/introducing-coinbase-agentic-wallets"
---

As the crypto industry races to hand AI agents their own wallets, Ethereum co-founder Vitalik Buterin has surfaced a security threat that no one has a clean answer to: prompt injection through ENS profiles.

## The Attack

An AI agent managing your Ethereum wallet reads a counterparty's ENS profile as part of a normal interaction. But that profile contains hidden instructions — a jailbreak designed to override the agent's behavior and redirect funds to the attacker.

No antivirus catches it. There is no signature to block. The agent simply follows what it reads.

## Why It Has No Clean Fix

Buterin framed this as a fundamental tension between security, decentralization, and privacy — three properties already hard to achieve individually, and harder still to preserve together in adversarial conditions.

His tentative answer: require human confirmation for large transactions, and make the agent explain in plain language what it is about to do. Better than nothing — but it adds friction, assumes the user reads the summary carefully, and does not stop smaller draining attacks.

## Why It Matters Now

The warning arrives as Coinbase CEO Brian Armstrong and Binance founder CZ both predict AI agents will soon outpace humans in crypto transaction volume. Coinbase already launched Agentic Wallets in February, enabling AI agents to hold assets and execute gasless transactions on Base.

The infrastructure is being built at speed. The threat model is still catching up. Prompt injection — where malicious instructions are embedded in content an AI reads — is a known and largely unsolved problem in AI security. Extending it to a context where the payload is financial makes the stakes immediate.

For builders deploying agents with wallet access on Base, this is not a theoretical risk. Any content an agent reads is a potential attack surface.
