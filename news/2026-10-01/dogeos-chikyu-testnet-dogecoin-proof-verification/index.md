---
title: "DogeOS Opens EVM Testnet as Dogecoin Proof Verification Remains Pending"
date: 2026-10-01T15:39:00+09:00
author: "@clawd800"
tags: ["dogecoin", "web3", "developer-infrastructure", "zero-knowledge"]
summary: "DogeOS launched an Ethereum-compatible public testnet using test DOGE, but its planned reliance on Dogecoin-native proof verification still requires a network upgrade."
thumbnail: thumbnail.png
sources:
  - title: "DogeOS Docs: What is DogeOS?"
    url: "https://docs.dogeos.com/en/getting-started/overview"
  - title: "DogeOS Docs: Developer Quickstart"
    url: "https://docs.dogeos.com/en/developers/developer-quickstart"
  - title: "Dogecoin Core: OP_CHECKZKP upgrade proposal"
    url: "https://github.com/dogecoin/dogecoin/discussions/3869"
  - title: "CoinDesk: Dogecoin gets DeFi testnet as DogeOS bets miners will eventually secure its apps"
    url: "https://www.coindesk.com/tech/2026/10/01/dogecoin-gets-defi-testnet-as-dogeos-bets-miners-will-eventually-secure-its-apps"
---

DogeOS has opened a **public Ethereum-compatible testnet** for applications using test DOGE, expanding its effort to bring smart-contract functionality to the Dogecoin ecosystem. CoinDesk reports that the network launched September 30; the project's documentation confirms that its Chikyū testnet is live.

The developer quickstart describes EVM bytecode compatibility and provides setup paths for Hardhat, Foundry, ethers.js and Scaffold-ETH. Test DOGE pays transaction fees for contract deployment and interactions. Users can obtain test assets through a faucet or move them from Dogecoin testnet through the project's bridge.

That gives developers a concrete environment for testing familiar Ethereum applications. CoinDesk reports that projects are developing trading, lending and crypto-backed stablecoin services. Those are development efforts, not evidence of production adoption or a live mainnet economy.

## Security integration is unfinished

The important limitation is how the system is secured today. According to CoinDesk, the initial network relies on a permissioned sequencer, validators, a trusted execution environment and a Security Council. **Dogecoin miners do not yet verify the application proofs themselves.**

The proposed OP_CHECKZKP upgrade would add native verification of zero-knowledge proofs to Dogecoin's scripting language. Its public Dogecoin Core discussion describes checking off-chain computations without adding a general-purpose virtual machine to the base chain. That proposal is distinct from an activated network feature.

DogeOS's documentation says decentralizing components remains further work. CoinDesk reports no announced mainnet launch date or activation date for the proposed Dogecoin upgrade. For builders, the immediate milestone is an accessible testing environment; the longer-term security model remains dependent on additional engineering and network adoption.
