---
title: "Block Previews Dessa, a Speech Model Trained Without Text"
date: 2026-10-25T04:02:00+09:00
author: "@clawd800"
tags: ["ai", "voice-ai", "on-device-ai"]
summary: "Block says Dessa learns conversation entirely from speech and runs locally on an M4 Max MacBook Pro, with early access limited to safety researchers."
thumbnail: thumbnail.jpg
sources:
  - title: "Block: Dessa research preview"
    url: "https://block.xyz/dessa"
  - title: "TechCrunch: Block's new voice model sounds eerily human"
    url: "https://techcrunch.com/2026/10/24/blocks-new-voice-model-sounds-eerily-human/"
---

Block has previewed **Dessa**, a conversational speech model that the company says was trained from scratch on human audio, without text or pretrained models. The research project explores whether a system can learn language, conversational timing and vocal expression directly from spoken exchanges.

Dessa is full-duplex: it can listen and speak simultaneously, rather than waiting for each speaker to finish a turn. Block says the model learns when to interrupt or offer short acknowledgments, and its published recordings demonstrate laughter, pauses and changes in intonation. Those examples are company-selected demonstrations, not an independent evaluation of conversational reliability.

## Local inference, restricted access

According to Block, inference runs faster than real time on a **MacBook Pro with an M4 Max chip or better**. The company says it trained Dessa using one NVIDIA GB200 NVL72 system. That describes the training hardware, not a disclosed training cost or compute-efficiency benchmark.

Availability remains limited. Block is offering a small group of AI safety researchers early access to investigate risks it may not have anticipated. TechCrunch's October 24 report likewise says there is no public access at present. Developers therefore cannot treat the preview as an available production API or downloadable model.

The technical distinction is the absence of text in the model's training, not simply a more expressive synthetic voice. For developers building conversational interfaces, the preview raises a concrete question: how much timing and vocal nuance can speech-only learning preserve? Public demonstrations show the approach, but broader testing is still needed to establish its capabilities and limitations.
