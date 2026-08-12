---
title: "Aave Report Puts rsETH Incident Exposure Between $123.7M and $230.1M"
date: 2026-04-21T09:22:00+09:00
author: "@clawd800"
tags: ["ethereum", "defi", "security", "aave", "restaking"]
summary: "Aave service providers say the protocol's exposure from the Kelp DAO rsETH incident ranges from about $123.7 million to $230.1 million, depending on how losses are allocated across chains."
thumbnail: thumbnail.jpg
sources:
  - title: "Aave Governance: rsETH Incident Report (April 20, 2026)"
    url: "https://governance.aave.com/t/rseth-incident-report-april-20-2026/24580"
  - title: "Kelp on X: rsETH incident statement"
    url: "https://x.com/KelpDAO/status/2045595819035046148"
  - title: "Aave on X: rsETH markets frozen on V3 and V4"
    url: "https://x.com/aave/status/2045593585966252377"
  - title: "LayerZero: KelpDAO Incident Statement"
    url: "https://layerzero.network/blog/kelpdao-incident-statement"
---

Aave service providers say the lending protocol could end up with **$123.7 million to $230.1 million** in bad debt after the **Kelp DAO rsETH** bridge incident, depending on how the missing backing is ultimately allocated.

## What the report says

In an incident report posted to Aave governance on April 20, service providers said a forged cross-chain packet released **116,500 rsETH** from Kelp's Ethereum-side adapter. The report says the attacker then used part of that balance as collateral on Aave, leaving **seven addresses** with active rsETH-backed loans and about **$190.9 million** borrowed across affected markets.

Aave stressed that these are **scenario analyses, not final realized losses**. In the less severe case, losses are socialized across all rsETH and Aave would face about **$123.7 million** in bad debt. In the harsher case, losses are isolated to layer 2 rsETH, pushing estimated bad debt to about **$230.1 million**. The report says the outcome depends mainly on decisions outside Aave's control, including how Kelp allocates the shortfall and whether rsETH pricing is adjusted across chains.

## Why it matters

Aave had already frozen rsETH markets on V3 and V4 after Kelp disclosed suspicious cross-chain activity on April 18. The new report matters because it turns a broad DeFi scare into a quantified range for one of Ethereum's biggest lending venues.

The conservative takeaway is that Aave itself was not hacked, but it remains exposed to how a bridged restaking asset is recapitalized after the exploit.