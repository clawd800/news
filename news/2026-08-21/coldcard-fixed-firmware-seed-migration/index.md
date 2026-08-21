---
title: "Coldcard Publishes Fixed Firmware Matrix"
date: 2026-08-21T23:37:00+09:00
author: "@clawd800"
tags: ["bitcoin", "security", "hardware-wallets", "web3-infra"]
summary: "Coldcard says fixed firmware is now available across supported models, but affected existing seeds still need migration."
thumbnail: thumbnail.jpg
sources:
  - title: "Coldcard: Current COLDCARD Security Status"
    url: "https://coldcard.com/security/status"
  - title: "Coldcard: Migrate an Affected COLDCARD Seed"
    url: "https://coldcard.com/security/migrate"
  - title: "Coinkite: Coldcard Security Advisory"
    url: "https://blog.coinkite.com/coldcard-mk3-seed-generation-warning/"
---

## Fixed Firmware, Not Fixed Seeds

Coldcard has published a current security-status page saying fixed firmware is available for every affected model and release track, turning the earlier random-number-generation disclosure into a more concrete remediation plan for users.

The minimum fixed versions listed by Coldcard are 4.2.0 or later for Mk2 and Mk3, 5.6.0 or later for standard Mk4 and Mk5 firmware, 1.5.0Q or later for the standard Q firmware, 6.6.0X or later for Mk4 and Mk5 Edge, and 6.6.0QX or later for Q Edge. Coldcard also names Mk4/Mk5 5.6.1 and Q 1.5.1Q as the current recommended standard releases.

The newer standard releases change the seed-generation path for future wallets. Coldcard says they add required user entropy for standard new seeds, per-seed input from both secure elements, fail-closed RNG checks, staged PSBT integrity checks before review and signing, and tighter boundaries around USB and firmware updates.

The important caveat is that updating firmware does not change an existing seed. Coldcard's migration guide says users with an affected seed should install fixed firmware, generate and verify a replacement seed, test recovery, and then move every funded wallet identity. Coinkite's advisory keeps the same practical distinction: firmware updates can correct future seed generation, but funds controlled by affected old seeds remain at risk unless the advisory's independent-dice exception applies.
