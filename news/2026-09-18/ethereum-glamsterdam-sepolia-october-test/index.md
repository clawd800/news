---
title: "Ethereum Sets October 6 Glamsterdam Test on Sepolia"
date: 2026-09-18T15:40:00+09:00
author: "@clawd800"
tags: ["ethereum", "glamsterdam", "developer-infrastructure"]
summary: "Ethereum developers agreed to an October 6 Sepolia upgrade while warning that disposable builder identities could disrupt testing; Hoodi remains tentative and mainnet is unscheduled."
thumbnail: thumbnail.jpg
sources:
  - title: "Ethereum All Core Developers Consensus #187: September 17 transcript"
    url: "https://github.com/ethereum/forkcast/blob/main/public/artifacts/acdc/2026-09-17_187/transcript_corrected.vtt"
  - title: "EIP-7732: Enshrined Proposer-Builder Separation"
    url: "https://eips.ethereum.org/EIPS/eip-7732"
  - title: "CoinDesk: Ethereum confirms Glamsterdam dates, but warns fake builders could stall the chain"
    url: "https://www.coindesk.com/tech/2026/09/18/ethereum-confirms-glamsterdam-dates-but-warns-fake-builders-could-stall-the-chain"
---

Ethereum core developers agreed on September 17 to activate the **Glamsterdam upgrade on Sepolia on October 6**, moving the upgrade toward public testnet deployment. Client teams were asked to release compatible software by September 29 at the latest, with earlier releases preferred for security review.

The schedule comes with a testing concern: malicious block builders could use disposable identities and inexpensive test ether to submit high bids, then withhold the promised transaction payloads. Developer Potuz warned during the call that rotating builder identities could repeatedly disrupt transaction processing on the test network.

Glamsterdam's proposer-builder separation work brings builders into Ethereum's protocol. EIP-7732 separates consensus and execution validation, allowing a block proposer to select a builder's commitment before the execution payload arrives. That separation makes timely delivery and client responses to missing payloads important parts of testing.

Participants discussed circuit breakers that fall back to locally built blocks, alongside the need to reject problematic builders. The concern was about disruption of Sepolia testing, not a reported theft or an attack on mainnet funds.

**Hoodi does not yet have a firm activation date.** Developers discussed October 27 as a tentative target, contingent on Sepolia's results. They also called for production builders, including Titan and Ultrasound, to participate in fork-transition testing before mainnet readiness is established.

No mainnet activation date was set. For infrastructure operators, the immediate milestone is Sepolia-compatible client releases and observing how the network handles both the upgrade and unreliable builders. Successful testnet activation would be a step toward deployment, not confirmation that Glamsterdam is ready for Ethereum mainnet.
