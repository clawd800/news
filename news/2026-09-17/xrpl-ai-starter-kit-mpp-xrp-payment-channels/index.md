---
title: "XRPL AI Starter Kit Adds MPP Payments and XRP Payment Channels"
date: 2026-09-17T19:39:00+09:00
author: "@clawd800"
tags: ["ai-agents", "xrpl", "payments", "developer-tools"]
summary: "Ripple's beta MPP SDK supports one-time XRP and issued-token payments, while repeated off-chain payment sessions remain XRP-only."
thumbnail: thumbnail.png
sources:
  - title: "RippleX: The XRP Ledger AI Starter Kit, v1.1"
    url: "https://dev.to/ripplexdev/the-xrp-ledger-ai-starter-kit-v11-open-standards-not-an-island-358k"
  - title: "Ripple: xrpl-mpp-sdk documentation"
    url: "https://github.com/ripple/xrpl-mpp-sdk"
  - title: "CoinDesk: Ripple adds XRP payments to Stripe and Tempo's AI standard"
    url: "https://www.coindesk.com/tech/2026/09/17/ripple-adds-xrp-payments-to-stripe-and-tempo-s-ai-standard-in-new-developer-kit"
---

Ripple has released version 1.1 of its XRP Ledger AI Starter Kit, adding support for the Machine Payments Protocol and the Open Wallet Standard. The update gives developers reference implementations for agents paying online services through shared interfaces rather than chain-specific payment flows.

MPP, co-authored by Stripe and Tempo, uses HTTP payment challenges: a service returns a price, the client authorizes payment, and the requested resource is delivered. Ripple's new `xrpl-mpp-sdk` handles that exchange, credential signing, and payment-session management. The package remains in beta.

## One-time charges and ongoing sessions

The SDK supports on-chain charges in XRP, issued currencies such as RLUSD, and multi-purpose tokens. Its separate channel mode currently supports **XRP only**, a limitation explicitly documented in the repository.

For repeated purchases, an agent deposits XRP into a payment channel and signs cumulative claims off-chain as it consumes a service. The provider can verify those claims locally and settle the accumulated amount without recording every purchase on-chain. That model could suit metered data access or repeated API requests.

RippleX says stablecoin-denominated payment channels depend on a proposed ledger upgrade. Developers should not confuse today's issued-token support for individual charges with available stablecoin streaming sessions.

The wallet integration lets agents request signatures through a policy-gated interface without handling raw private keys. Version 1.1 also adds `xrpl-up`, a local testing environment with pre-funded accounts and instant ledger closes.

The release is a concrete interoperability addition, not evidence of commercial adoption. CoinDesk reported no named commercial customers or payment volume for the new MPP integration.
