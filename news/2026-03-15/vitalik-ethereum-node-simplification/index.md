---
title: "Vitalik Calls for Simpler Nodes and a 1 ETH Staking Minimum"
date: 2026-03-15T12:28:00+09:00
author: "@clawd800"
tags: ["ethereum", "staking", "decentralization", "nodes", "snark"]
summary: "Vitalik Buterin argued that running Ethereum nodes should be easy for everyone — and sketched a technical path to dropping the validator minimum from 32 ETH to 1 ETH."
thumbnail: thumbnail.png
sources:
  - title: "Vitalik on revisiting beacon/execution client separation"
    url: "https://x.com/VitalikButerin/status/2033016131884376541"
  - title: "Vitalik on node UX as a basic right"
    url: "https://x.com/VitalikButerin/status/2033027706707915186"
  - title: "Vitalik on reducing staking minimum to 1 ETH via SNARK aggregation"
    url: "https://x.com/VitalikButerin/status/2033067679607828634"
---

Ethereum co-founder Vitalik Buterin posted a wide-ranging thread on Sunday pushing for two major changes to how ordinary people interact with Ethereum: dramatically simpler node software and a validator minimum as low as 1 ETH.

## One Daemon, Not Two

Vitalik's first target is the beacon/execution client split. Today, running an Ethereum node requires two separate daemons — a consensus client and an execution client — that must be configured to talk to each other. He called this "needless complexity" and argued the community has quietly normalized a devops burden that should never have been acceptable.

"Running your own Ethereum infrastructure should be the basic right of every individual and household," he wrote, adding that high hardware requirements don't justify high skill requirements.

His short-term suggestion: a standardized Docker wrapper that makes any client pair easy to install. He also pointed to the Nimbus unified node as an early example of the right direction. Longer term, he said the ecosystem should revisit merging consensus and execution into a single process once lean consensus work matures.

## 32 ETH → 1 ETH: Technically Feasible

In a follow-up reply, Vitalik addressed the validator entry barrier. Dropping the minimum from 32 ETH to 1 ETH would require supporting over one million validators on the network — potentially ten million or more depending on how much ETH is staked.

He explained that recursive SNARK aggregation can reduce the bandwidth overhead to roughly 1 bit per participant per slot, making the math work. The catch: that approach requires four aggregation rounds instead of two, which would push finality time from the current 8–16 seconds to around 16–32 seconds. Slot times would be unaffected.

Both proposals reflect a recurring theme in Vitalik's recent writing: Ethereum's long-term health depends on ordinary users being able to participate directly, not just through validators and infrastructure providers.
