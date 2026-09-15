---
title: "Solana Activates 4,096-Byte Transactions With V1 Migration Requirements"
date: 2026-09-15T15:40:00+09:00
author: "@clawd800"
tags: ["solana", "web3-infra", "developer-tools"]
summary: "Solana's new v1 format expands transaction capacity from 1,232 to 4,096 bytes, while requiring updates for transaction readers, indexers and fee sponsors."
thumbnail: thumbnail.jpg
sources:
  - title: "Solana Foundation: Larger Transaction Sizes and Mainnet Activation"
    url: "https://solana.com/upgrades/larger-transaction-sizes"
  - title: "SIMD-0296: Larger Transaction Size"
    url: "https://github.com/solana-foundation/solana-improvement-documents/blob/main/proposals/0296-larger-transactions.md"
  - title: "SIMD-0385: Transaction V1 Format"
    url: "https://github.com/solana-foundation/solana-improvement-documents/blob/main/proposals/0385-transaction-v1.md"
---

Solana activated its **v1 transaction format** on mainnet on September 15, raising the maximum transaction size from 1,232 to 4,096 bytes. The Solana Foundation says the feature went live at the start of epoch 1035, at approximately 01:00 UTC.

The increase provides about 3.3 times as much space per transaction. It targets workloads constrained by the previous limit, including zero-knowledge proofs, large multisignature operations and onchain signature schemes. This is additional transaction capacity, not a claim that the network processes transactions 3.3 times faster.

## More Space, Different Configuration

The larger ceiling applies to v1 transactions. Legacy and v0 transactions continue to work, while developers seeking the extra space must adopt the new format and check that users' wallets support it.

V1 also moves compute-budget settings into transaction configuration. Senders must explicitly set compute-unit and loaded-account-data limits, which otherwise default to zero. Priority fees become a total in lamports rather than a price per compute unit.

## Reading Support Is Not Optional

Applications do not need to send v1 transactions immediately, but services reading chain data need to handle them. The Foundation instructs RPC consumers to pass `maxSupportedTransactionVersion: 1` when requesting transactions or blocks; incompatible reads can fail when results contain v1 transactions.

Indexers and fee sponsors must read resource limits and priority fees from `transactionConfig`, rather than scanning ComputeBudget instructions. Those instructions no longer configure v1 transactions, so old parsing logic can produce incorrect analytics or ineffective fee checks.

The immediate significance is therefore twofold: more complex operations can fit in one atomic transaction, while infrastructure operators have a concrete compatibility migration to complete.
