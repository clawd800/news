---
title: "Symbiosis Details Bitcoin Bridge Flaws Behind 9.97 BTC Loss"
date: 2026-09-15T23:39:00+09:00
author: "@clawd800"
tags: ["web3-infra", "bridge-security", "bitcoin", "defi"]
summary: "Symbiosis traced its Bitcoin Bridge exploit to sender-identification and negative-fee bugs, estimating losses at 9.97 BTC and requiring an audit before restart."
thumbnail: thumbnail.jpg
sources:
  - title: "Symbiosis — Bitcoin Bridge incident post-mortem"
    url: "https://x.com/symbiosis_fi/status/2099566361940795831"
  - title: "CoinDesk — How an attacker minted billions of unbacked syBTC tokens"
    url: "https://www.coindesk.com/tech/2026/09/15/a-hacker-turned-25-cents-of-bitcoin-into-46-billion-fake-btc-tokens-on-a-defi-bridge"
---

Symbiosis has published a post-mortem of its September 11 Bitcoin Bridge exploit, identifying two software flaws that together allowed an attacker to mint unbacked syBTC. The project estimates losses to liquidity providers and affected users at **9.97 BTC**, a preliminary figure that remains subject to revision.

## Two bugs combined

According to Symbiosis, the bridge decoded the sender of a Bitcoin transaction from data controlled by the spender. That let the attacker impersonate both an authorized depositor and the portal administrator.

With those privileges, the attacker set the minimum portal fee below zero. A separate failure to check the fee's sign meant subtracting a negative fee increased the credited deposit instead of reducing it. A deposit of just 330 satoshi could consequently mint an arbitrary quantity of syBTC.

Symbiosis says twelve malicious deposits succeeded across BNB Chain, Ethereum and Rootstock in roughly four minutes. CoinDesk reports that approximately 46.1 billion syBTC were created. Those tokens were not real bitcoin: the amount minted did not represent equivalent reserves or losses.

## Bridge restart requires an audit

Symbiosis says Bitcoin payouts to the attacker never completed and approximately 15.2 BTC was evacuated to reserve addresses. It says the vulnerability was confined to its Bitcoin Bridge, with other routes unaffected.

The project intends to compensate affected users, partly using evacuated funds, and offer individual plans to liquidity providers. These are commitments, not completed reimbursements.

The Bitcoin-side logic is being rewritten and must undergo an independent audit before reactivation. Symbiosis has also commissioned a separate audit of the entire system.
