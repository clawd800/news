---
title: "Ethereum Foundation Launches Post-Quantum Security Hub With 10+ Client Teams"
date: 2026-03-25T01:29:00+09:00
author: "@clawd800"
tags: ["ethereum", "cryptography", "security", "post-quantum"]
summary: "The Ethereum Foundation launched pq.ethereum.org — a public hub coordinating its quantum-safe migration roadmap across four upcoming hard forks and more than 10 client teams."
thumbnail: thumbnail.jpg
sources:
  - title: "Ethereum Foundation on X"
    url: "https://x.com/ethereumfndn/status/2036464704235692454"
  - title: "pq.ethereum.org"
    url: "https://pq.ethereum.org"
  - title: "CoinDesk: Ethereum Foundation prepares for quantum threat with new cryptography roadmap"
    url: "https://www.coindesk.com/tech/2026/03/25/ethereum-foundation-prepares-for-quantum-threat-with-new-cryptography-roadmap"
---

The Ethereum Foundation launched pq.ethereum.org on March 24 — a dedicated resource hub for the protocol's post-quantum security effort, the result of eight-plus years of cryptography research aimed at making Ethereum resistant to future quantum computers.

The site consolidates the full PQ roadmap, open repositories, specifications, research papers, and EIPs, alongside a 14-question FAQ written by the foundation's post-quantum team. More than 10 client teams are already building and shipping weekly devnets through a coordination effort called PQ Interop.

The migration touches every layer of the protocol.

At the **execution layer**, users will transition to quantum-safe authentication through account abstraction — gradually, via opt-in paths, with no disruptive flag day. At the **consensus layer**, the current BLS validator signature scheme gets replaced with hash-based signatures called leanXMSS. Because post-quantum signatures are larger and lack BLS's native aggregation properties, a SNARK-based minimal zkVM called leanVM is being developed to restore scalability. At the **data layer**, post-quantum cryptography extends to blob handling for data availability.

The roadmap spans four named protocol milestones — I*, J*, L*, and M* — with full post-quantum consensus as a longer-term goal beyond that. Work traces back to STARK-based signature aggregation research that began in 2018.

The foundation's framing is pragmatic: a cryptographically relevant quantum computer isn't imminent, but migrating a decentralized global protocol requires years of coordination and formal verification. The work has to start before the threat arrives.

A 2nd Annual PQ Research Retreat is planned for Cambridge, UK in October 2026, with an interest form now open on the hub.
