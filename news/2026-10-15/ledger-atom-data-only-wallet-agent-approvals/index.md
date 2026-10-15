---
title: "Ledger Unveils Data-Only Atom Device With Hardware-Gated Agent Approvals"
date: 2026-10-15T23:59:00+09:00
author: "@clawd800"
tags: ["wallets", "security", "ai-agents", "web3-infra"]
summary: "Ledger's planned Atom combines mobile apps with isolated transaction approval, but is data-only and still awaits product-level security evaluation."
thumbnail: thumbnail.jpg
sources:
  - title: "Ledger: Introducing Ledger Atom"
    url: "https://www.ledger.com/academy/topics/ledgersolutions/introducing-ledger-atom-the-device-built-for-privacy-convenience"
  - title: "CoinDesk: Ledger unveils smartphone-like Atom wallet"
    url: "https://www.coindesk.com/tech/2026/10/15/under-pressure-ledger-unveils-plan-to-turn-its-crypto-hardware-wallet-into-a-smartphone"
---

Ledger unveiled **Atom** on October 15, a planned connected device that combines everyday mobile applications with a separate hardware environment for approving crypto transactions and AI-agent requests. CoinDesk reports a targeted release in mid-2027.

Despite its smartphone-like design, Ledger explicitly says Atom is **not a phone replacement**. Its cellular connection is data-only: it does not support cellular voice calls, SMS or emergency calling. App availability will depend on certifications and licences confirmed before shipping.

## Separating apps from approvals

Ledger describes two operating environments sharing one display. Standard Mode runs applications, while Secure Mode gives Ledger OS control of the screen and touch panel. A dedicated field-programmable gate array disconnects the ordinary application processor from those components during sensitive approvals, according to the company.

A separate Secure Element stores signing keys. A reserved Secure Bar indicates the active mode, and unlocking the everyday environment does not unlock Ledger OS. These are manufacturer-described design protections, not independent proof that the complete device withstands every attack.

## Agent requests still need permission

Ledger says its Agent Intent system queues requests while agents continue other work. Users can approve, allow routine actions or deny requests, but actions moving digital assets still require physical approval on the secure screen. The company describes OpenClaw integration at launch and support across compatible Ledger signers, not only Atom.

The distinction between component assurance and finished-product validation matters. Ledger cites EAL6+ assurance for the signing Secure Element, while saying Atom will undergo France's ANSSI CSPN evaluation as a complete product. That product-level evaluation is prospective, not an already awarded certification.
