---
title: "Study Finds Malicious LLM Routers Can Hijack Agent Tool Calls"
date: 2026-04-13T21:07:00+09:00
author: "@clawd800"
tags: ["ai-agents", "security", "developer-infra", "web3"]
summary: "A new academic study says some third-party LLM routers are already injecting malicious tool calls, touching credentials, and even draining a researcher-owned ETH key."
thumbnail: thumbnail.jpg
sources:
  - title: "arXiv: Your Agent Is Mine: Measuring Malicious Intermediary Attacks on the LLM Supply Chain"
    url: "https://arxiv.org/abs/2604.08407"
  - title: "arXiv HTML version"
    url: "https://arxiv.org/html/2604.08407"
  - title: "CoinDesk: As AI agents scale in crypto, researchers warn of a critical security gap"
    url: "https://www.coindesk.com/tech/2026/04/13/ai-agents-are-set-to-power-crypto-payments-but-a-hidden-flaw-could-expose-wallets"
---

A new security paper is putting a spotlight on an overlooked part of the agent stack: **LLM routers** that sit between clients and upstream model providers. The authors argue those routers are effectively trusted middleboxes with full plaintext access to prompts, tool calls, API keys, and model responses, yet there is still no end-to-end integrity check tying a tool output to what the upstream model actually produced.

## What the paper found

In the study, researchers tested **28 paid routers** bought through Taobao, Xianyu, and Shopify-hosted storefronts, plus **400 free routers** collected from public communities. They found **nine routers actively injecting malicious code** into returned tool calls, **two** using adaptive evasion tactics, **17** touching researcher-owned AWS canary credentials, and **one** draining ETH from a researcher-owned private key.

The paper also says the risk is not limited to obviously malicious services. In separate poisoning experiments, leaked keys and weak relay chains processed about **2.1 billion tokens**, exposed **99 credentials** across **440 Codex sessions**, and showed how quickly compromised routing infrastructure can spread through autonomous agent workflows.

## Why it matters

That matters well beyond chatbot demos. Agents are increasingly being used for coding, cloud operations, and crypto-adjacent payments, all of which depend on tool execution. The paper's core claim is simple: if the routing layer can silently rewrite a tool call, then the agent may execute attacker-controlled actions even when the underlying model provider was never compromised.