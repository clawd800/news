---
title: "Firedancer Requires a 1 SOL Burn for Bug Bounty Submissions"
date: 2026-10-27T20:00:00+09:00
author: "@clawd800"
tags: ["solana", "security", "ai", "developer-infra"]
summary: "Firedancer's updated bounty terms require a nonrefundable 1 SOL burn per report as AI-assisted submissions strain security review capacity."
thumbnail: thumbnail.jpg
sources:
  - title: "Firedancer: Bug Bounty Terms and Conditions"
    url: "https://bounty.firedancer.io/terms"
  - title: "Jump Crypto: Hardening Firedancer"
    url: "https://jumpcrypto.com/resources/hardening-firedancer"
  - title: "CoinDesk: Solana bug reports now cost 1 SOL as AI floods security teams with spam"
    url: "https://www.coindesk.com/tech/2026/10/27/solana-bug-reports-now-cost-1-sol-as-ai-floods-security-teams-with-spam"
---

Firedancer, Jump Crypto's Solana validator client, now requires researchers to **burn 1 SOL for each bug bounty submission**. Terms effective October 26 make the cost nonrefundable, including for duplicate, invalid or out-of-scope reports.

The requirement applies to Firedancer's program, not every Solana security report. Its terms explicitly exclude protocol-level Solana bugs and direct those reports to Agave's bounty program. Reports without the required burn may still be reviewed, but cannot earn a Firedancer bounty.

## Review capacity is the bottleneck

Jump's October audit review describes the pressure behind submission charges. A month-long competition earlier this year attracted **809 reports from 162 researchers**, yielding 127 unique security findings excluding informational observations. Nearly half of valid submissions were duplicates.

That competition already imposed a $100 submission fee and a one-report-per-day limit. Jump linked the broader surge in reports to AI-assisted research and writing, illustrating a distinction between generating potential vulnerabilities and establishing whether they are exploitable.

The current rules require a reproducible, self-contained proof of concept demonstrating an end-to-end attack against an eligible validator configuration. A standalone unit test is insufficient. Researchers must complete identity checks before receiving payouts, which are made in USDC.

## Higher rewards alongside the fee

Eligible findings receive twice the standard payout through November 20, 2026, or three times for Alpenglow-specific bugs. The published critical-severity range for Alpenglow findings reaches $300,000, with actual awards remaining discretionary.

The policy puts an upfront cost on submissions while increasing potential rewards. Whether that reduces speculative reports without deterring useful research remains unproven; the immediate change is a financial gate on access to bounty eligibility.
