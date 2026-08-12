---
title: "XRPL 3.3.0 Moves Confidential Transfers Toward Vote"
date: 2026-08-08T19:37:00+09:00
author: "@clawd800"
tags: ["xrp-ledger", "tokenization", "web3-infra"]
summary: "XRPL's 3.3.0 server release adds amendment-gated confidential transfers and batch transactions, but validators still need to approve the changes before they activate."
thumbnail: thumbnail.jpg
sources:
  - title: "XRPLF rippled 3.3.0 Release"
    url: "https://github.com/XRPLF/rippled/releases/tag/3.3.0"
  - title: "XRP Ledger Operations Announcement"
    url: "https://x.com/XRPLOperations/status/2085496294399992186"
  - title: "XRPL Amendments Documentation"
    url: "https://xrpl.org/docs/concepts/networks-and-servers/amendments"
  - title: "RWA.xyz XRP Ledger Network"
    url: "https://app.rwa.xyz/networks/xrp-ledger"
---

XRP Ledger's 3.3.0 server release moves a new set of institution-facing features into the amendment process, led by confidential transfers and batch transactions.

The XRPLF `rippled` release notes show that 3.3.0 enables amendment-gated code for `ConfidentialTransfer` and `BatchV1_1`, while also adding Batch XLS-56 work and a lending 1.1 amendment. XRP Ledger Operations said the release is now available and described batch transactions as a way to wrap up to eight transactions that execute atomically.

That does not mean the features are live on mainnet. XRPL's amendment system requires validators to support protocol changes before activation. The public documentation describes amendments as protocol-level changes that become enabled only after the network reaches the required validator support threshold for the required period.

The confidential-transfer work is notable because XRPL is already used for tokenized asset issuance and stablecoin activity. RWA.xyz tracks XRP Ledger as a real-world-asset network, and the new release aims at the plumbing those issuers care about: transaction privacy, batched execution, and server performance.

Version 3.3.0 also includes operational fixes. XRP Ledger Operations said the release lowers memory usage by at least 10% to 15% in some configurations and improves catch-up behavior for nodes.

For builders, the takeaway is practical rather than speculative. XRPL has shipped the server code, but the network still has to vote the amendments in. Until then, exchanges, validators, and tokenization platforms can test the upgrade path without treating these features as active production rails.
