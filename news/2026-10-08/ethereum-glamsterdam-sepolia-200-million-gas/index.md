---
title: "Ethereum Sepolia Tests Near 200 Million Gas After Glamsterdam"
date: 2026-10-08T15:40:00+09:00
author: "@clawd800"
tags: ["ethereum", "glamsterdam", "scaling", "developer-infrastructure"]
summary: "Sepolia blocks show gas limits near 200 million after Glamsterdam, but light utilization leaves full-capacity performance unproven and mainnet timing unconfirmed."
thumbnail: thumbnail.jpg
sources:
  - title: "Etherscan: Sepolia blocks"
    url: "https://sepolia.etherscan.io/blocks"
  - title: "Etherscan: Sepolia block 11868418"
    url: "https://sepolia.etherscan.io/block/11868418"
  - title: "Ethereum.org: Glamsterdam roadmap"
    url: "https://ethereum.org/roadmap/glamsterdam/"
  - title: "CoinDesk: Ethereum's Glamsterdam test runs near 200 million gas per block after upgrade"
    url: "https://www.coindesk.com/tech/2026/10/08/ethereum-s-glamsterdam-test-runs-near-200-million-gas-per-block-after-upgrade"
---

Ethereum's Sepolia test network is producing blocks with **gas limits near 200 million** following Glamsterdam's October 6 activation, a concrete testing milestone for the upgrade's proposed expansion of layer-one capacity.

Sepolia's Etherscan explorer showed limits between roughly 199.6 million and 200 million across 25 consecutive blocks (11,868,396–11,868,420) observed on October 8. Those blocks used approximately 26% to 39% of their available gas. CoinDesk separately reported that the pre-upgrade limit was about 60 million.

Gas measures computational work, not a fixed number of transactions. Because Glamsterdam also changes the prices assigned to particular operations, the larger limit does not establish a proportional increase in transaction throughput.

**The sample is not a full-capacity stress test.** It demonstrates block production under the higher allowance, but leaves open how clients perform when blocks consistently approach that ceiling. These are testnet results, not a mainnet capacity increase or evidence of lower production fees.

Ethereum's roadmap identifies two central mechanisms: enshrined proposer-builder separation, which brings the handoff between block builders and proposers into the protocol, and block-level access lists, which describe the data touched by transactions. The latter let clients prepare database reads and support parallel processing of independent work.

The upgrade also adjusts charges for creating and accessing stored data, making application gas assumptions worth retesting rather than carrying forward unchanged.

CoinDesk reports that Hoodi testing is tentatively targeted for October 27, contingent on Sepolia results. Ethereum's roadmap still lists the mainnet date as unconfirmed. The next meaningful evidence is sustained testing under heavier load, not the headline gas limit alone.
