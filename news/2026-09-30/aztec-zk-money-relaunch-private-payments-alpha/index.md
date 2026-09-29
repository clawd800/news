---
title: "Aztec Brings Back zk.money With Private Payments and Alpha Limits"
date: 2026-09-30T03:40:00+09:00
author: "@clawd800"
tags: ["ethereum", "privacy", "stablecoins", "aztec"]
summary: "Aztec Labs is relaunching zk.money for private DAI payments, with transaction caps, publicly visible Ethereum deposits and unresolved alpha-network security risks."
thumbnail: thumbnail.png
sources:
  - title: "CoinDesk: Ethereum users get another way to pay privately as zk.money returns"
    url: "https://www.coindesk.com/tech/2026/09/29/embargo-12-et-ethereum-users-get-another-way-to-pay-privately-as-zk-money-returns-after-three-years"
  - title: "Aztec documentation: Bridging Between Ethereum and Aztec"
    url: "https://docs.aztec.network/participate/basics/bridging"
  - title: "Aztec documentation: Alpha Network"
    url: "https://docs.aztec.network/participate/alpha"
  - title: "Aztec: Alpha V5 Proving System Vulnerability"
    url: "https://aztec.network/blog/alpha-v5-proving-system-vulnerability"
---

Aztec Labs is relaunching **zk.money**, a self-custodial wallet designed to conceal payment amounts, balances and recipients on the Aztec Network, according to CoinDesk's September 29 report. Users can send payments through readable names or payment links instead of exchanging long wallet addresses.

The firm told CoinDesk that users can fund the wallet with DAI, USDC or USDT from Ethereum. USDC and USDT are converted into DAI, leaving DAI as the currency used inside the application. Each deposit, payment and withdrawal must be below $2,500, with a shared daily deposit allowance of $50,000 that replenishes over time.

**Private payments do not make the entry transaction invisible.** Aztec's bridging documentation confirms that the original sender and deposit amount remain visible on Ethereum, even when the recipient on Aztec can stay private. The wallet also screens Ethereum deposit and withdrawal addresses against a sanctions policy, CoinDesk reported.

The relaunch arrives on an experimental network. Aztec's Alpha documentation warns that the stack has not been fully audited and that some privacy features remain incomplete. A separate disclosure identifies a critical V5 proving-system vulnerability that could allow an invalid transaction to pass verification, placing funds and application state at risk.

Aztec Labs CEO Joe Andrews told CoinDesk that zk.money would launch before that flaw is fixed, using a separate system called Oxide to check payments for software-induced errors. Contributors say the findings will inform V6.

The result is another route to private stablecoin transfers, but the alpha limits and unresolved protocol vulnerability remain material constraints on its use.
