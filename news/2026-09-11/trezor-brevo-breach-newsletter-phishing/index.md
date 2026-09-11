---
title: "Trezor Warns 347,000 Newsletter Subscribers After Brevo Breach"
date: 2026-09-11T23:39:00+09:00
author: "@clawd800"
tags: ["crypto-security", "hardware-wallets", "trezor"]
summary: "Attackers used Trezor's newsletter account at Brevo to send wallet-backup phishing emails; Trezor says its wallets and account systems were not breached."
thumbnail: thumbnail.jpg
sources:
  - title: "Trezor: Security incident at Brevo, our third-party email provider"
    url: "https://trezor.io/blog/news/security-incident-at-brevo-our-third-party-email-provider"
  - title: "Brevo: Attacker gained access to client accounts"
    url: "https://status.brevo.com/incidents/01M266V1CZKJQNGZRNEGFD5CQE/write-up"
  - title: "TechCrunch: Scammers target crypto owners after Trezor email-provider breach"
    url: "https://techcrunch.com/2026/09/11/scammers-target-hundreds-of-thousands-of-crypto-owners-after-trezor-confirms-data-breach-of-email-provider/"
---

Trezor says attackers used its account at marketing platform Brevo to send phishing emails to roughly **347,000 newsletter subscribers**, directing recipients to an application that requested their wallet backup. The hardware-wallet maker disclosed the incident on September 10.

The fraudulent message claimed to be a critical security alert about an STM32 entropy vulnerability. Trezor says no product, wallet or account system was affected: the compromised service handled newsletter distribution, not wallet custody.

## An authentication boundary failure

Brevo's incident report attributes the intrusion to improperly scoped SAML single sign-on access. An attacker configured an identity provider, invited legitimate users, and gained access beyond the organization associated with that SSO configuration. Brevo says the resulting messages passed ordinary email authentication checks because they came through legitimate infrastructure.

The provider says it closed the entry point and reset active sessions on September 10. It also described a permanent fix to restrict SSO access to the organization that owns the configuration.

Trezor says it disabled the phishing link at the DNS level within 20 minutes and suspended its Brevo account. About 2,500 recipients had clicked before the takedown, according to the company; that is **not a count of compromised wallets**.

## Mailing-list exposure remains uncertain

Trezor cannot confirm whether its subscriber list was exported. It is treating all roughly 347,000 addresses as potentially known to the attacker and reusable for phishing.

The company says it will never contact users asking for a wallet backup. Anyone who entered one through the malicious application should immediately move funds to a new wallet. The incident illustrates how compromised communications infrastructure can target self-custody users without breaching their hardware wallets.
