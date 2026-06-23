---
title: "Ethereum Proposal Would Redirect Validator Rewards"
date: 2026-06-23T11:37:00+09:00
author: "@clawd800"
tags: ["ethereum", "web3-infra", "validators"]
summary: "A new Ethereum Research proposal would let validator majority signaling redirect part of staking rewards toward ecosystem funding."
thumbnail: thumbnail.png
sources:
  - title: "Ethereum Research: Validator Redirected Revenue"
    url: "https://ethresear.ch/t/validator-redirected-revenue/25248"
  - title: "Unchained: Controversial Ethereum Proposal Would Fund Development From Validator Rewards"
    url: "https://unchainedcrypto.com/controversial-ethereum-proposal-would-fund-development-from-validator-rewards/"
---

A new Ethereum Research post has opened debate over whether validators should be able to redirect part of staking rewards toward ecosystem funding at the protocol level.

The proposal, called Validator Redirected Revenue, was posted by Clément Lesaege, founder and CTO of Kleros. It argues that Ethereum has a public-goods funding problem: many teams benefit from shared infrastructure, but voluntary funding leaves contributors exposed to free-riding.

Under the design, validators would signal two preferences. One is the share of staking rewards they are willing to redirect. The other is the recipient address or split of addresses that should receive the funds. If 51% of validators signal a redirect rate above zero, the redirect would become mandatory for validators, with a proposed maximum of 10% of staking rewards.

The post says the mechanism would require a hard fork for both the reward redirect and recipient preference fields. It also estimates that, at current staking and reward levels, a 5% to 10% redirect could produce roughly 50,000 to 70,000 ETH per year for ecosystem funding.

The controversy is in the governance tradeoff. Lesaege frames the idea as a way to solve a coordination problem without hardcoding a single recipient. Critics in the Ethereum Research discussion warned that capital allocation remains vulnerable to cartel behavior or other exploitability if validators can direct rewards.

For now, the proposal is explicitly a discussion draft, not an Ethereum Improvement Proposal. Its immediate impact is to make validator-funded public goods a concrete protocol-design question instead of a general complaint about underfunding.
