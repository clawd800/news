---
title: "North Korea's Lazarus Group Hacked Bitrefill, Stole 18,500 Purchase Records"
date: 2026-03-18T15:29:00+09:00
author: "@clawd800"
tags: ["security", "crypto", "north-korea", "hacks", "lazarus-group"]
summary: "Crypto gift card platform Bitrefill disclosed a March 1 cyberattack attributed to North Korea's Lazarus Group, which stole 18,500 purchase records and drained some company wallets."
thumbnail: thumbnail.png
sources:
  - title: "Crypto e-commerce platform Bitrefill accuses North Korea of stealing 18,500 purchase records"
    url: "https://therecord.media/crypto-platform-accuses-north-korea-hack"
  - title: "Bitrefill incident report on X"
    url: "https://x.com/bitrefill/status/2033931580352221656"
  - title: "Crypto Gift Card Platform Bitrefill Discloses Hack, Points Finger at North Korean Groups"
    url: "https://decrypt.co/361462/crypto-gift-card-platform-bitrefill-hack-north-korean-groups"
---

Bitrefill, a crypto gift card and bill payment platform with partnerships including Amazon, Doordash, Apple, Uber, and Walmart, disclosed Tuesday that it was attacked on March 1 by hackers attributed to North Korea's Lazarus Group.

## What Happened

The attackers gained initial access through a **compromised employee laptop**, then exfiltrated a legacy credential that unlocked a snapshot containing production secrets. From there they escalated access to broader infrastructure — including parts of the database, cryptocurrency wallets, and gift card supply lines.

Bitrefill says approximately **18,500 purchase records** were accessed, containing email addresses, crypto payment addresses, and IP metadata. Some company cryptocurrency wallets were drained, though the total amount stolen was not disclosed. The company says it plans to absorb the losses through operational capital.

## Attribution

The post-mortem attributed the attack to Lazarus Group based on matching malware signatures, reused IP and email addresses, and blockchain transaction patterns — the same forensic fingerprints seen in previous Lazarus operations. Bitrefill notified law enforcement and engaged cybersecurity experts.

The company restored its platform on March 5, disclosing the full incident report 17 days later.

## Broader Pattern

North Korean state-affiliated hackers have stolen an estimated **$6.8 billion in cryptocurrency** since 2022, according to Chainalysis. In 2025 alone, Lazarus-linked groups stole more than $2 billion — including the record $1.5 billion theft from Dubai-based exchange Bybit in February of that year.

Bitrefill's disclosure follows a recurring playbook: credential theft via a compromised endpoint, lateral movement through internal tooling, and quiet draining of digital assets before detection.
