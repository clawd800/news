---
title: "Cornelis Raises $205M to Expand Programmable AI Networking"
date: 2026-09-15T07:40:00+09:00
author: "@clawd800"
tags: ["ai-infrastructure", "networking", "hardware"]
summary: "Cornelis announced $205 million in funding and an Active Compute Fabric architecture, with CN6000 sampling ahead of expected Q4 availability."
thumbnail: thumbnail.jpg
sources:
  - title: "Cornelis: Active Compute Fabric and $205M Funding Announcement"
    url: "https://www.cornelis.com/stories/cornelis-expands-into-scaleup-networking-with-active-compute-fabric"
  - title: "TechCrunch: AI infrastructure company Cornelis raises $205M"
    url: "https://techcrunch.com/2026/09/14/ai-infrastructure-company-cornelis-raises-205m-to-chip-away-at-nvidias-dominance/"
---

Cornelis announced **$205 million in funding** on September 14 alongside Active Compute Fabric, an architecture intended to move some AI communication work from accelerators into the network. TechCrunch reported that IAG Capital Partners led the financing.

The announcement marks Cornelis' expansion into scale-up networking, connecting accelerators more closely within rack-scale systems, alongside its existing scale-out technology for larger clusters. The company says the funding will support next-generation products, production expansion and customer deployments.

## Computing inside the network

Active Compute Fabric combines lossless transport, in-fabric acceleration and programmable compute. Cornelis says it can offload collective operations—the coordinated exchanges of data among processors—and operate on data while it travels through the system.

The target is accelerator idle time caused by communication overhead and synchronization. Rather than treating the network solely as a transport layer, the architecture is designed to handle work that would otherwise interrupt GPU computation.

Cornelis describes an open-standards approach spanning UALink and ESUN for scale-up and Ultra Ethernet specifications for scale-out. Its pitch is infrastructure that preserves a choice of accelerators instead of tying the cluster to one vendor's complete stack.

## Shipping hardware versus roadmap

**CN5000 is shipping today**, according to the company. CN6000 is sampling with customers, with expanded availability expected in the fourth quarter of 2026. That schedule remains a forecast, not confirmation of general availability.

Cornelis also cautions that next-generation performance figures rely on pre-production simulation and modeling. The concrete development is new financing and a broader networking roadmap; the announcement does not establish independently measured efficiency gains for production deployments of the full architecture.
