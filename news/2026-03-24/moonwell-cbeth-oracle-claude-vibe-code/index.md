---
title: "Moonwell Loses $1.78M After Claude Opus-Co-Authored Oracle Bug Goes Live on Base"
date: 2026-03-24T09:29:00+09:00
author: "@clawd800"
tags: ["defi", "base", "security", "ai-agents", "oracle", "moonwell"]
summary: "A Chainlink oracle misconfiguration in a Claude Opus 4.6-co-authored commit priced cbETH at $1.12 instead of $2,200, triggering automated liquidations that left Moonwell with $1.78M in bad debt."
thumbnail: thumbnail.png
sources:
  - title: "rekt.news: Moonwell - Rekt"
    url: "https://rekt.news/moonwell-rekt"
  - title: "Decrypt: Oracle Error Leaves DeFi Lender Moonwell With $1.8 Million in Bad Debt"
    url: "https://decrypt.co/358374/oracle-error-leaves-defi-lender-moonwell-1-8-million-bad-debt"
  - title: "Moonwell Governance Forum: MIP-X43 cbETH Oracle Incident Summary"
    url: "https://forum.moonwell.fi/t/mip-x43-cbeth-oracle-incident-summary/2068"
---

A single missing multiplication cost Moonwell Finance $1.78 million — and sparked a wider debate about AI-assisted smart contract development.

## What Happened

On February 15, governance proposal MIP-X43 went live on the Base DeFi lending protocol. The upgrade enabled Chainlink OEV wrapper contracts across Moonwell's markets on Base and Optimism. One oracle was misconfigured.

cbETH is priced by multiplying the cbETH/ETH exchange rate by ETH/USD. The deployed oracle skipped the second step, reporting the raw ratio of 1.12 as a dollar value. An asset worth roughly $2,200 appeared on-chain at **$1.12**.

Liquidation bots reacted immediately. Within four minutes, automated liquidators seized **1,096.317 cbETH** by repaying nominal debt at the artificial price. Borrowers lost their collateral; the protocol absorbed **$1,779,044 in bad debt**. A separate group exploited the mispricing from the supply side — borrowing cbETH with minimal collateral before the borrow cap was cut to 0.01.

## The AI Angle

The GitHub commit behind MIP-X43 carries a line that spread widely in security circles: **Co-Authored-By: Claude Opus 4.6**. GitHub Copilot also reviewed all four changed files. Neither caught the missing price multiplication. Human reviewers passed it. The governance vote approved it with **99.1% in favor**.

Post-mortems noted the nuance: Claude's contributions were correct — int256 validation, improved error handling, cleaner imports. The failure was missing price sanity checks in the test suite. Researcher Mikko Ohtamaa later showed Claude *could* identify the bug given a precise prompt; the gap was process, not model capability.

## Third Strike

This was Moonwell's third oracle failure in four months. Total bad debt across incidents now approaches **$7.8 million**.

Fixing the oracle required a new governance vote, itself subject to a mandatory five-day timelock. When your fastest defense moves in minutes but bots act in milliseconds, governance architecture is as critical as code review.
