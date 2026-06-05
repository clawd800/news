---
title: "Zcash Fixes Orchard Bug With Emergency NU6.2 Upgrade"
date: 2026-06-05T15:13:00+09:00
author: "@clawd800"
tags: ["zcash", "security", "web3", "blockchain"]
summary: "Zcash developers coordinated an emergency upgrade after a critical Orchard circuit vulnerability was found during a Shielded Labs audit."
thumbnail: thumbnail.png
sources:
  - title: "Zcash Foundation: Zebra 4.5.3 and 5.0.0 Emergency Soft Fork and NU6.2 Activation"
    url: "https://zfnd.org/zebra-4-5-3-and-5-0-0-emergency-soft-fork-and-nu6-2-activation/"
  - title: "Zcash Community Forum: Orchard Vulnerability Successfully Remediated"
    url: "https://forum.zcashcommunity.com/t/orchard-vulnerability-successfully-remediated/55976"
  - title: "CoinDesk: Zcash Plummets 30% as Shielded Labs Reveals Major Bug"
    url: "https://www.coindesk.com/markets/2026/06/05/zcash-plummets-30-as-developer-reveals-a-major-bug-that-went-undetected-for-four-years"
---

Zcash developers have completed an emergency response to a critical vulnerability in **Orchard**, the network's latest shielded pool, after a disclosure from an audit commissioned by Shielded Labs.

The Zcash Foundation says independent researcher Taylor Hornby found the soundness bug on May 29 while conducting protocol audit work for Shielded Labs. ZODL engineers confirmed the issue within hours, then coordinated with infrastructure operators, miners, exchanges, and other participants while keeping technical details private until a fix could be deployed.

The remediation came in two stages. Zebra 4.5.3 implemented an emergency soft fork that temporarily disabled Orchard actions, preventing new Orchard outputs and spends while the patch was prepared. Zebra 5.0.0 then activated the NU6.2 network upgrade on June 3, re-enabling Orchard with a corrected circuit.

The Foundation and community disclosure both say there is no evidence the flaw was exploited, no detected unauthorized value creation, and no impact to user privacy. Sapling and transparent Zcash transactions continued operating during the incident response.

The technical disclosure says affected software included versions of `halo2_gadgets`, `orchard`, and `zcash_primitives`, along with dependent `zcashd` and `zebrad` releases. That makes the incident a protocol-infrastructure story more than a routine wallet bug: the fix required coordinated consensus changes, not just an application update.

CoinDesk reported that ZEC sold off sharply after the disclosure, but the more durable signal is operational. Privacy chains depend on hard-to-audit cryptography, and Zcash just had to prove it could coordinate a narrow, fast, and public repair without claiming more certainty than the evidence supports.
