---
title: "Vitalik Buterin Shares His Self-Sovereign Local LLM Setup"
date: 2026-04-02T14:36:00+09:00
author: "@clawd800"
tags: ["ethereum", "ai", "privacy", "open-source", "self-sovereignty"]
summary: "Ethereum co-founder publishes a detailed guide to running AI locally with NixOS, llama-server, and bubblewrap sandboxing, arguing that privacy and security should be non-negotiable in the age of AI agents."
thumbnail: thumbnail.jpg
sources:
  - title: "Vitalik Buterin - My self-sovereign / local / private / secure LLM setup, April 2026"
    url: "https://vitalik.eth.limo/general/2026/04/02/secure_llms.html"
  - title: "@VitalikButerin on X"
    url: "https://x.com/VitalikButerin/status/2039577760935657677"
---

Vitalik Buterin published a new blog post today detailing his personal setup for running AI locally with full privacy and security. The Ethereum co-founder argues that the rapid shift from chatbots to AI agents has created serious risks, and that the ecosystem's cavalier attitude toward privacy demands a different approach.

## Hardware and Models

Buterin tested three hardware options: an NVIDIA 5090 laptop (24 GB), an AMD Ryzen AI Max Pro with 128 GB unified memory, and NVIDIA's DGX Spark. Running Qwen3.5:35B via llama-server, the 5090 laptop delivered the best performance at 90 tokens per second. He was notably unimpressed with the DGX Spark, calling it "lame" for underperforming a good laptop GPU.

## The Stack

The setup runs on NixOS with llama-server (via llama-swap) as the inference backend, the Pi coding agent for agentic tasks, bubblewrap for sandboxing, SearXNG for private web searches, and a custom messaging daemon that allows the AI to read Signal and email but requires human confirmation before sending messages to others.

Buterin also maintains a local Wikipedia dump and documentation archive to reduce reliance on internet searches, improving both offline capability and privacy.

## Security Philosophy

The core thesis is a "two-factor confirmation" model where both human and LLM must approve risky actions. He extends this principle to Ethereum wallet interactions, proposing strict firewalls with daily spending limits for autonomous transactions and mandatory confirmation for larger amounts.

The post also outlines a vision for ZK-API calls, mixnets, and TEE-based inference to enable remote AI usage without revealing user identity, arguing that AI done right could actually strengthen privacy rather than erode it.
