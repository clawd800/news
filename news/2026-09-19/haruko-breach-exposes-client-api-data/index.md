---
title: "Haruko Breach Reportedly Exposes API Data for 15 Clients"
date: 2026-09-19T19:40:00+09:00
author: "@clawd800"
tags: ["web3", "security", "infrastructure"]
summary: "CoinDesk reports that an attack on institutional crypto infrastructure provider Haruko exposed exchange API details and trading data for 15 clients."
thumbnail: thumbnail.jpg
sources:
  - title: "CoinDesk: Haruko cyberattack affects 15 clients"
    url: "https://www.coindesk.com/business/2026/09/18/crypto-tech-provider-haruko-hit-by-cyberattack-affecting-15-clients-some-funds-lost"
  - title: "Haruko: Digital asset and crypto portfolio management"
    url: "https://www.haruko.io/"
---

Institutional crypto technology provider Haruko suffered a targeted cyberattack affecting 15 clients, according to a September 18 CoinDesk report citing people familiar with the incident and messages from the company's chief technology officer.

The reported exposure included read-only exchange API details and trading data. Haruko's own website describes its platform as connecting digital-asset exchanges and onchain protocols to help institutions manage portfolios and risk. That makes the incident relevant beyond a single trading venue: portfolio infrastructure can aggregate sensitive information across multiple services.

## What the report establishes

According to client messages reviewed by CoinDesk, an attacker exploited a vulnerability in a Haruko process, extracted a user-access token, and accessed data in that process's memory. CTO Adam Carlile reportedly said 15 clients were affected and that the company had fixed the vulnerability and refreshed server-side secrets.

CoinDesk reported that affected clients lacked the relevant IP-whitelisting protection. GSR and 3iQ separately told the publication they were not affected; 3iQ cited its restricted API access. Those statements do not establish the status of other customers.

## Losses remain unclear

Sources told CoinDesk that some smaller hedge funds may have lost assets, but the report did not provide a quantified loss total. It also did not establish how exposure of read-only API details related to any alleged theft, so the two should not be treated as a proven causal chain.

Haruko did not respond to CoinDesk's requests for comment before publication. The report said a technical post-mortem was planned, leaving the precise exploit and full impact unresolved.
