---
title: "Electrum patches exploited fee-bump flaw that redirected Bitcoin payments"
date: 2026-10-26T16:00:00+09:00
author: "@clawd800"
tags: ["bitcoin", "wallets", "security"]
summary: "Electrum 4.8.3 adds signature checks after malicious servers tricked a user into signing a fee-bumped transaction that paid an attacker."
thumbnail: thumbnail.jpg
sources:
  - title: "Electrum security advisory GHSA-6jp4-8v48-cc5v"
    url: "https://github.com/spesmilo/electrum/security/advisories/GHSA-6jp4-8v48-cc5v"
  - title: "CoinDesk: Bitcoin wallet bug let rogue servers steal funds"
    url: "https://www.coindesk.com/tech/2026/10/26/bitcoin-wallet-bug-let-rogue-servers-steal-funds-when-users-tried-to-speed-up-payments"
---

Electrum has released version 4.8.3 to address an actively exploited attack in which malicious servers substituted fake pending Bitcoin transactions, then relied on users to authorize them while increasing transaction fees. The wallet's developers disclosed the issue on October 24 and confirmed one user reported losing funds.

## How the substitution worked

Electrum relies on servers for transaction history. According to its security advisory, a malicious server could withhold a newly broadcast payment and replace it in the wallet's history with a conflicting transaction directing funds to an attacker. The replacement had invalid signatures, but the wallet did not check them before displaying it as unconfirmed.

If the user manually increased that transaction's fee using Replace-by-Fee, the wallet would sign a valid replacement paying the attacker. Both reporting users said the attacker's address matched the last four characters of the intended destination. In the loss report, the substituted transaction had a zero fee, potentially encouraging a fee increase.

## What the update changes

Version 4.8.3 checks signatures on unconfirmed transaction inputs belonging to the wallet before adding those transactions to local history. Binaries were released October 24, six days after the report of stolen funds.

The protection is scoped: Electrum does not validate every incoming unconfirmed transaction as a full Bitcoin node would. Developers recommend upgrading and checking destination addresses and amounts whenever signing, including fee increases. They say clients connected only to trusted servers, such as their own, are not affected by this attack.
