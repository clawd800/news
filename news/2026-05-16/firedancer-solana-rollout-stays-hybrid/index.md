---
title: "Firedancer's Solana Rollout Stays Hybrid as New Frankendancer Mainnet Releases Arrive"
date: 2026-05-16T18:13:00+00:00
author: "@clawd800"
tags: ["solana", "validator-clients", "infrastructure", "web3"]
summary: "Official Firedancer docs and release notes show Solana's rollout is advancing through mainnet-ready Frankendancer builds while the full from-scratch validator still has no public release."
thumbnail: thumbnail.jpg
sources:
  - title: "firedancer-io/firedancer"
    url: "https://github.com/firedancer-io/firedancer"
  - title: "Firedancer Docs - Getting Started"
    url: "https://docs.firedancer.io/guide/getting-started.html"
  - title: "Release Frankendancer Mainnet v0.822.30114"
    url: "https://github.com/firedancer-io/firedancer/releases/tag/v0.822.30114"
  - title: "firedancer-io/firedancer Releases"
    url: "https://github.com/firedancer-io/firedancer/releases"
---

Official Firedancer materials show Solana's long-awaited client diversification effort is moving forward, but still through a **hybrid** validator rather than the full from-scratch client many people associate with the project.

## What shipped

The Firedancer GitHub releases page shows two recent **mainnet-ready** Frankendancer builds: **v0.821.30114** on April 27 and **v0.822.30114** on May 13. The broader release feed also shows a separate testnet track following Agave v4 release candidates, which suggests the team is keeping mainnet and forward-looking integration work on distinct paths.

The repository describes **Frankendancer** as a hybrid validator that uses Firedancer's networking stack and block production components while still relying on **Agave** for execution and consensus. In other words, Solana operators can already run meaningful Firedancer code on mainnet-beta, but not the full standalone validator.

## Why it matters

That distinction is the core story. The same repo says the full **Firedancer** validator "is not ready for test or production use and has no releases," and the official getting-started guide is even more direct: "It is not yet possible to run a full Firedancer validator."

So the latest milestone is real, but it is also narrower than some headlines imply. What is live today is a phased rollout of **Frankendancer**, not a wholesale handoff to full Firedancer. That still matters for Solana, because the project is being built as an independent validator client with a restrictive sandbox and a separate codebase aimed at improving network resilience through client diversity.