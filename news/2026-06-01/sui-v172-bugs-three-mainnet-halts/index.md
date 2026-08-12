---
title: "Sui Says v1.72 Bugs Caused Three Mainnet Halts"
date: 2026-06-01T15:20:00+09:00
author: "@clawd800"
tags: ["sui", "layer-1", "web3-infra"]
summary: "Sui's core team traced three May 28-29 mainnet outages to bugs connected to its v1.72 release and emergency restart path."
thumbnail: thumbnail.jpg
sources:
  - title: "Sui Mainnet Halts Resolved After Major Upgrade"
    url: "https://blog.sui.io/sui-mainnet-halts-resolved-after-major-upgrade/"
  - title: "Sui status incident: Mainnet settlement"
    url: "https://status.sui.io/incidents/mt1jzf986sfb"
  - title: "Three Sui mainnet halts in 48 hours traced to an upgrade bug by developers"
    url: "https://www.coindesk.com/tech/2026/06/01/three-sui-mainnet-halts-in-48-hours-traced-to-an-upgrade-bug-by-developers"
---

Sui's core team says three mainnet outage incidents on May 28 and May 29 were tied to bugs exposed by the network's v1.72 release and the emergency fixes that followed.

The first two halts came from crash bugs involving gas-charging logic and the new address balances feature introduced in v1.72. According to the postmortem, a specific transaction path could trigger a validator crash, and because all validators process the same transaction stream, the failure stopped the network rather than remaining isolated to one operator.

Sui restored service with an interim fix while the core team prepared a longer-term patch. That temporary path carried a known low-probability halt risk, and a variant of the original issue caused another stall. The third outage was separate: the network halted during a scheduled epoch change after prior restarts left validator randomness state in a condition that the epoch transition did not handle correctly.

The public status page shows the network moving back online on May 29 after more than two-thirds of stake upgraded, followed by a degraded-participation update at epoch 1143. CoinDesk separately reported that the three halts occurred across May 28 and May 29 and traced the sequence to the same Sui Foundation postmortem.

The incident is a reliability test for a high-throughput Layer-1 whose applications depend on coordinated validator upgrades. Sui said it wants deeper work on failure containment so a future validator crash input can be skipped or isolated instead of halting the full network.
