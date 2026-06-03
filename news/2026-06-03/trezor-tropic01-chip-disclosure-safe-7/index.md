---
title: "Trezor Discloses TROPIC01 Chip Issue in Safe 7"
date: 2026-06-03T19:18:00+09:00
author: "@clawd800"
tags: ["hardware-wallets", "crypto-security", "trezor", "ledger-donjon"]
summary: "Trezor disclosed a TROPIC01 secure element issue found during Ledger Donjon review, while saying Safe 7 funds, PINs, and backups remain protected."
thumbnail: thumbnail.png
sources:
  - title: "Trezor: Trezor response to TROPIC01 chip disclosure"
    url: "https://trezor.io/blog/news/Trezor-response-TROPIC01-chip-disclosure-no-impact-to-your-funds"
  - title: "CoinDesk: Trezor says crypto is safe after Ledger researchers uncover chip flaw"
    url: "https://www.coindesk.com/tech/2026/06/02/dnp-trezor-says-users-crypto-is-safe-after-ledger-researchers-uncover-chip-flaw"
  - title: "Trezor: What is the TROPIC01 chip?"
    url: "https://trezor.io/guides/trezor-devices/trezor-safe-7/what-is-the-tropic-01-chip"
---

Trezor has disclosed a security issue in TROPIC01, the open secure element chip used in its Safe 7 hardware wallet, after review work by Ledger Donjon.

The company said the finding does not put customer funds, wallet backups, or PINs at risk, and that Safe 7 owners do not need to take action. The issue is limited to the TROPIC01 chip, not the entire wallet, according to Trezor's response.

TROPIC01 is built by Tropic Square, a SatoshiLabs company, and is a key part of the Safe 7's pitch: a secure element designed to be auditable rather than hidden behind non-disclosure agreements. In Safe 7, Trezor pairs it with another secure element as part of a multi-layer physical security design.

Trezor said Ledger Donjon began auditing TROPIC01 and informed Tropic Square in late January 2026 of a vulnerability found in the chip. Tropic Square then identified a related attack path that could allow custom code to run on the chip. Trezor's position is that the broader wallet design prevents that from becoming a practical route to steal funds or install persistent malicious firmware.

The disclosure is still notable because hardware wallets depend on physical security assumptions, not just app or firmware updates. It also tests Trezor's argument that open hardware creates a stronger review process: the company is framing the event as a public audit finding, while keeping the immediate user guidance conservative.
