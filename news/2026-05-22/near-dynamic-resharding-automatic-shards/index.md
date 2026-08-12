---
title: "NEAR Plans Automatic Shard Scaling in Upcoming Upgrade"
date: 2026-05-22T19:20:00+09:00
author: "@clawd800"
tags: ["near", "web3-infra", "blockchain-scaling"]
summary: "NEAR says an upcoming network upgrade will add dynamic resharding, letting the protocol add shards automatically as demand grows."
thumbnail: thumbnail.jpg
sources:
  - title: "NEAR Protocol on X"
    url: "https://x.com/NEARProtocol/status/2057198817242448118"
  - title: "CoinDesk"
    url: "https://www.coindesk.com/markets/2026/05/22/near-protocol-to-automate-its-own-growth-and-its-token-is-skyrocketing"
  - title: "NEAR Blockchain"
    url: "https://www.near.org/blockchain"
---

NEAR Protocol says its next network upgrade will introduce dynamic resharding, a scaling change designed to let the chain add shards automatically as demand grows. The project framed the feature as a step toward a network that can adjust capacity without manual intervention from operators.

The change matters because sharding is already central to NEAR's architecture. Instead of asking every validator to process the whole network, NEAR splits work across shards, then coordinates those shards through its consensus system. Dynamic resharding would make that capacity model more elastic, adding room when usage rises rather than relying only on scheduled or manually coordinated changes.

CoinDesk reported that the market reaction was immediate, with NEAR's token up more than 27% over 24 hours at the time of publication. Token moves can reverse quickly, so the more durable claim is technical: NEAR is trying to make scaling a protocol behavior rather than an operations event.

The upgrade is still best read as an announced rollout, not a completed production milestone. NEAR's own blockchain materials already emphasize stateless validation, fast block times, and sharded infrastructure; dynamic resharding would extend that direction by making shard expansion more responsive to demand.

For developers and apps, the practical question is whether automatic shard growth can keep latency and transaction costs stable during traffic spikes. That will depend on implementation details, validator coordination, and how smoothly applications handle cross-shard activity once the upgrade lands.
