---
title: "Ledger Says CryptoBilis Wallet Implant Sent Recovery Phrases Over LTE"
date: 2026-10-13T20:00:00+09:00
author: "@clawd800"
tags: ["web3", "security", "hardware-wallets"]
summary: "Ledger says an unauthorized implant read recovery phrases from wallet screens and transmitted them over LTE; the number of affected users and total losses remain unconfirmed."
thumbnail: thumbnail.jpg
sources:
  - title: "Ledger: Donjon update on the CryptoBilis investigation"
    url: "https://x.com/Ledger/status/2109896739985453358"
  - title: "CoinDesk: Ledger finds covert cellular implant stole recovery phrases"
    url: "https://www.coindesk.com/tech/2026/10/13/ledger-says-spy-chip-inside-cryptobilis-ledger-devices-transmitted-wallet-keys-over-mobile-network"
---

Ledger has described how an **unauthorized hardware implant** inside wallets sold through Southeast Asian reseller CryptoBilis captured recovery phrases and transmitted them over a mobile network. The October 13 update supplies a technical explanation following the company's earlier sales-pause advisory.

According to Ledger's Donjon security team, the separate component sits inside the device enclosure and reads data shown on its screen. During setup, its microcontroller decodes the displayed 24-word recovery phrase and sends it over **LTE using a provisioned eSIM**.

Ledger says the implant does not modify the Secure Element or operating system, and does not alter transactions or signatures. The distinction matters: possessing a recovery phrase lets an attacker recreate a wallet elsewhere, without needing to manipulate transactions on the original device.

## Scope remains under investigation

Ledger says it confirmed an implant in one affected customer's signer on October 10. All confirmed losses tied to the incident disclosed October 9 involved devices sold through CryptoBilis; it had not verified a drain linked to a device bought elsewhere. The company is also reviewing reports involving other signers and locations.

Neither the total number of affected users nor the value lost has been confirmed by Ledger. CoinDesk reported the same mechanism and unresolved scope; third-party loss estimates should not be treated as verified totals.

CryptoBilis has stopped selling Ledger signers, according to Ledger. The company tells purchasers not to initialize unused devices from the reseller. Those already using one should promptly transfer assets to a new signer with a new recovery phrase, and never enter or restore a phrase on a CryptoBilis-bought device. Affected customers are directed to official Ledger Support.
