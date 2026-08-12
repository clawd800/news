---
title: "Ethereum Sandwich Bot Drained in $7.5M Approval Trap"
date: 2026-06-21T19:45:00+09:00
author: "@clawd800"
tags: ["ethereum", "mev", "crypto-security"]
summary: "Blockaid says JaredFromSubway's MEV bot was drained after fake trading routes led it to grant token approvals later used to pull WETH, USDC and USDT."
thumbnail: thumbnail.jpg
sources:
  - title: "Blockaid: JaredFromSubway MEV bot exploit posts"
    url: "https://x.com/blockaid_"
  - title: "CoinDesk: Ethereum's biggest sandwich bot drained of $7.5 million"
    url: "https://www.coindesk.com/tech/2026/06/21/ethereum-s-biggest-sandwich-bot-drained-of-usd7-5-million-in-ironic-exploit"
  - title: "crypto.news: JaredFromSubway MEV bot gets drained in $7.5m approval trap"
    url: "https://crypto.news/jaredfromsubway-mev-bot-gets-drained-in-7-5m-approval-trap/"
---

JaredFromSubway, one of Ethereum's best-known sandwich-trading bots, was drained for about $7.5 million after an attacker turned its automated execution logic into the attack path.

Blockaid said the incident was not a classic phishing case or a direct bug in the victim contract. Its public posts described attacker-controlled contracts that made the MEV system grant token approvals, which were later used to pull funds from the bot's contracts. The final sweep involved WETH, USDC and USDT moving through `transferFrom`, according to Blockaid and reporting that reviewed on-chain records.

The setup matters because sandwich bots depend on speed and pattern recognition. They monitor pending transactions, attempt to trade before and after a target swap, and capture the price difference. In this case, the attacker reportedly built fake token and pool routes that looked like profitable opportunities, prompting the bot to approve helper contracts as part of what appeared to be normal execution.

CoinDesk reported that the attacker spent weeks deploying fake tokens and liquidity pools, including assets designed to mimic WETH, USDC and USDT. Crypto.news separately cited Blockaid's explanation that some approvals were left open, creating the permission path for the later drain.

There are higher public loss claims from the bot operator, but the more conservative verified figure across Blockaid-linked reporting is about $7.5 million. The incident is a reminder that highly automated MEV infrastructure can become a target when its own trading rules are predictable enough to bait.
