---
title: "How DPRK Hackers Spent Six Months Inside Drift Before the $270M Drain"
date: 2026-04-06T12:03:00+09:00
author: "@clawd800"
tags: ["defi", "security", "solana", "north-korea", "vscode"]
summary: "Drift Protocol revealed that the April 1 exploit was the culmination of a six-month intelligence operation: attackers posed as a quant trading firm, met developers in person, and used a silent code-execution bug in VSCode and Cursor to compromise developer machines."
thumbnail: thumbnail.jpg
sources:
  - title: "Drift Protocol: Incident Background Update (official)"
    url: "https://x.com/driftprotocol/status/2040611161121370409"
  - title: "CoinDesk: Drift says $270M exploit was a six-month North Korean intelligence operation"
    url: "https://www.coindesk.com/markets/2026/04/05/drift-says-usd270-million-exploit-was-a-six-month-north-korean-intelligence-operation"
  - title: "Elliptic: Drift Protocol exploited for $286M in suspected DPRK-linked attack"
    url: "https://www.elliptic.co/blog/drift-protocol-exploited-for-286-million-in-suspected-dprk-linked-attack"
---

Drift Protocol published a detailed incident update on April 5 revealing that the attack which drained approximately $270 million from its vaults was the result of a structured six-month intelligence operation, not a spontaneous exploit.

The operation began in fall 2025, when individuals posing as a quantitative trading firm approached Drift contributors at a major crypto conference. Over the following months, they held working sessions, onboarded an Ecosystem Vault, deposited over $1 million of their own capital, and met Drift developers face-to-face at multiple industry events across several countries. By April 1, the relationship was nearly half a year old.

## The Technical Vectors

Drift identified two likely compromise vectors. The first involved a GitHub repository shared by the group — appearing to be a frontend for their vault — which exploited a known vulnerability in VSCode and Cursor. Between December 2025 and February 2026, simply opening a file or folder in either editor was sufficient to **silently execute arbitrary code** with no prompt, warning, or permissions dialog of any kind.

The second vector was a TestFlight application the group presented as their wallet product.

Once developer machines were compromised, the attackers obtained two multisig approvals enabling a durable nonce attack. The pre-signed transactions sat dormant for over a week before draining the protocol in under a minute on April 1.

## Attribution

Drift attributes the attack with medium-high confidence to **UNC4736** (also tracked as AppleJeus or Citrine Sleet), a North Korean state-affiliated group also responsible for the October 2024 Radiant Capital hack. Crucially, the individuals who appeared in person were not North Korean nationals — DPRK uses third-party intermediaries with fully constructed identities.

Mandiant has been engaged for full forensic analysis. Drift urges any team that may have been targeted to contact SEAL-911 immediately.
