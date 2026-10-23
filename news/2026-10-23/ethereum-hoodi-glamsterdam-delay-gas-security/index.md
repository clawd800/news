---
title: "Ethereum Delays Hoodi Glamsterdam Test After Gas-Safety Concerns"
date: 2026-10-23T16:00:00+09:00
author: "@clawd800"
tags: ["ethereum", "glamsterdam", "security", "developer-infrastructure"]
summary: "Ethereum developers postponed Hoodi's Glamsterdam rehearsal while investigating gas-accounting changes that could alter existing contracts' failure handling."
thumbnail: thumbnail.jpg
sources:
  - title: "ChainSecurity: Glamsterdam Hard Fork — When Spent Gas Comes Back"
    url: "https://www.chainsecurity.com/blog/glamsterdam-gas/"
  - title: "CoinDesk: Ethereum delays Glamsterdam test after security devs flag risk to existing contracts"
    url: "https://www.coindesk.com/tech/2026/10/23/ethereum-delays-glamsterdam-test-after-security-devs-flag-risk-to-existing-contracts"
---

Ethereum developers have postponed the **Glamsterdam upgrade on the Hoodi test network**, previously scheduled for October 26, according to CoinDesk's reporting on Thursday's All Core Devs Execution meeting. The planned increase to a 200 million gas limit is also delayed, with no replacement date announced.

The concern is backward compatibility: proposed gas-accounting changes could make existing smart contracts behave differently when an external call fails, even without changes to their code.

## Why failure handling can change

ChainSecurity's technical analysis examines **EIP-8037 and EIP-8038**, which change state-creation accounting and state-access costs. Some contracts catch failed calls and continue, recording a failed attempt or disabling retries. Their safety can depend on having too little remaining gas to finish that failure handler, forcing the entire operation to revert.

Under the proposed rules, a separate state-gas reservoir and immediate refills can leave enough resources for that handler to complete. An operation that previously reverted could instead commit a permanent failure.

The reverse problem also matters. ChainSecurity calculates that creating a cold storage slot can require 110,020 execution gas when reservoir funding is unavailable, versus 22,100 under the older rules. Previously sufficient gas budgets may therefore become inadequate.

## A testnet pause, not a confirmed exploit

CoinDesk reports that the findings have not publicly established an exploitable major production protocol. Ethereum's mainnet activation date remains unconfirmed.

ChainSecurity recommends reviewing calls that continue after failure, revalidating gas budgets and testing whether failure handlers remove recovery options. For application developers, the practical issue is preserving safe retry and rollback behavior before the new accounting reaches production.
