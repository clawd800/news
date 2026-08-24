---
title: "Solana Validators Vote on Fee Burn and Disinflation Changes"
date: 2026-08-24T23:37:00+09:00
author: "@clawd800"
tags: ["solana", "governance", "tokenomics", "web3-infra"]
summary: "Solana validators are voting on governance proposals that would alter fee burns and speed the network's disinflation path if they clear the required thresholds."
thumbnail: thumbnail.jpg
sources:
  - title: "Solana Improvement Documents: SIMD-0553 Resource and Inclusion Fee"
    url: "https://github.com/solana-foundation/solana-improvement-documents/pull/553"
  - title: "Solana Improvement Documents: SIMD-0550 Double Disinflation"
    url: "https://github.com/solana-foundation/solana-improvement-documents/pull/550"
  - title: "Crypto.news: Solana validators vote on 3 major network reforms"
    url: "https://crypto.news/solana-validators-vote-on-3-major-network-reforms/"
  - title: "Solana Company announces positions on first governance proposals"
    url: "https://www.globenewswire.com/news-release/2026/08/21/3349201/0/en/solana-company-announces-positions-and-votes-on-first-solana-governance-proposals.html"
---

Solana validators and delegators are voting on three governance proposals, including two changes that would affect the network's token economics if they pass.

The technical pieces are **SGP-0002**, tied to SIMD-0550, and **SGP-0003**, tied to SIMD-0553. Crypto.news reported that voting remains open through epoch 1023, currently expected to end around 15:30 UTC on August 27, though epoch timing can shift.

SIMD-0550 proposes doubling Solana's annual disinflation rate from 15% to 30%. The change would not remove SOL immediately; it would make inflation fall faster toward the existing terminal floor. That makes the proposal a supply-schedule change rather than a one-time token burn.

SIMD-0553 is the more direct fee proposal. Its GitHub text says it would split today's 5,000-lamport per-signature fee, now divided between burn and leader payment, into a 2,500-lamport inclusion fee paid to the leader and a separate resource fee that is fully burned. The proposal estimates rough daily burns of about 7,500 to 9,000 SOL, compared with about 648 SOL today, depending on network usage.

The vote is not unanimous across large ecosystem participants. Solana Company said it would support the governance framework proposal, SGP-0001, but vote against SGP-0002 and SGP-0003 on timing grounds while calling their long-term goals reasonable.

That makes this a substantive governance test rather than a simple parameter tweak. If the proposals clear quorum and approval requirements, they would give Solana a mandate to move forward on faster disinflation and resource-priced fee burns.
