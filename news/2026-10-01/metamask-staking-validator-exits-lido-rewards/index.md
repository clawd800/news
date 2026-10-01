---
title: "MetaMask Exits Staking Validators After Incident, Lido Warns of Lost Rewards"
date: 2026-10-01T19:39:00+09:00
author: "@clawd800"
tags: ["ethereum", "staking", "security", "metamask", "lido"]
summary: "MetaMask is exiting affected staking validators after an infrastructure incident; Lido warns of missed rewards and a return-to-staking cycle of up to approximately 45 days."
thumbnail: thumbnail.png
sources:
  - title: "MetaMask: User update"
    url: "https://metamask.io/news/user-update"
  - title: "Lido: MetaMask Staking precautionary out-of-order exits"
    url: "https://research.lido.fi/t/security-disclosure-metamask-staking-precautionary-out-of-order-exits/11961"
  - title: "CoinDesk: MetaMask exits Ethereum validators after attacker diverts staking rewards"
    url: "https://www.coindesk.com/tech/2026/10/01/metamask-security-incident-forces-ethereum-staking-exits-with-lido-warning-of-lost-rewards"
---

MetaMask is exiting affected Ethereum validators as a precaution after a security incident involving part of its infrastructure. In a September 30 notice, the company said it was working with external partners and security advisers to remediate the issue and had identified **no immediate threat to MetaMask wallets**.

The response affects its non-custodial staking operations. MetaMask said it does not manage clients' withdrawal keys, distinguishing operation of validators from control over where staked assets can be withdrawn.

## Lido outlines the disruption

A disclosure on Lido's research forum said MetaMask-operated validators in the protocol had begun exiting, with the final validators expected to finish exiting by the end of October 7. That deadline does **not** mean all associated ETH will have been withdrawn.

Lido estimated that the full exit, withdrawal and re-entry cycle could take up to approximately 45 days because of Ethereum's extended staking entry queue. The process is expected to forgo rewards, with possible downtime penalties if validators are taken offline before their exits complete.

**No action is required from stETH holders**, according to the disclosure. It said ETH would return gradually as affected validators move through the process.

## Investigation remains open

The notices describe an ongoing investigation, not a completed assessment of the incident's cause or total impact. MetaMask's statement about wallet safety should not be read as a claim that staking operations face no disruption: Lido explicitly identifies potential reward losses and penalties while the precautionary exits proceed.
