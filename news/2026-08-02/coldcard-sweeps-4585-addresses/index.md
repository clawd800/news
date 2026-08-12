---
title: "Coldcard Sweeps Reach 4,585 Bitcoin Addresses"
date: 2026-08-02T07:45:00+09:00
author: "@clawd800"
tags: ["bitcoin", "security", "hardware-wallets", "web3-infra"]
summary: "Reported losses tied to weak Coldcard-generated seeds have grown to 1,367 BTC across 4,585 addresses after a third wave of sweeps."
thumbnail: thumbnail.jpg
sources:
  - title: "CoinDesk: Bitcoin cold-wallet attack spreads to 4,500 addresses as losses near $89 million"
    url: "https://www.coindesk.com/tech/2026/08/02/bitcoin-cold-wallet-attack-spreads-to-4-500-addresses-as-losses-near-usd89-million"
  - title: "Block Engineering: Predictable RNG Fallback and 32-Bit Reseed in COLDCARD Firmware"
    url: "https://engineering.block.xyz/blog/predictable-rng-fallback-and-32-bit-reseed-in-coldcard-firmware"
  - title: "Coinkite: Coldcard Security Advisory"
    url: "https://blog.coinkite.com/coldcard-mk3-seed-generation-warning/"
---

## Coldcard Sweeps Spread

Losses tied to weak Coldcard-generated Bitcoin seeds have widened again, according to updated reporting that cites Galaxy Research's on-chain mapping.

CoinDesk reported that three waves of sweeps have now drained about 1,367 BTC, worth nearly $89 million at recent prices, from 4,585 addresses. The newest wave covered roughly 208 BTC from 1,912 addresses between Friday midday and Saturday morning UTC, after an earlier July 30 wave took about 1,083 BTC from 1,196 addresses in 41 minutes.

The newer activity appears to target smaller balances. CoinDesk said the third wave averaged just over a tenth of a bitcoin per affected address, used separate destinations for each victim and batched several victims into each sweep. Galaxy Research was reported as confident that each wave was internally one operator, while not linking all three waves to the same actor.

The underlying issue is the same seed-generation problem disclosed last week. Block Engineering said affected Coldcard firmware could route key generation through MicroPython's deterministic Yasmarang fallback instead of the STM32 hardware random-number generator. For newer devices, Block described a reduced-entropy fallback path that retained only a 32-bit reseed.

Coinkite's advisory says funds from affected seeds are at risk unless users added sufficient independent dice entropy or a strong unique BIP-39 passphrase. It also warns that updating firmware cannot repair a seed that was already generated under affected conditions, so exposed wallets need migration to a newly generated seed.
