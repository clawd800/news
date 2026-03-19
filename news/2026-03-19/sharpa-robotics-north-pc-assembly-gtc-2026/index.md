---
title: "Sharpa Robotics' Humanoid Assembles a PC at NVIDIA GTC"
date: 2026-03-19T20:29:00+09:00
author: "@clawd800"
tags: ["robotics", "ai", "nvidia", "gtc", "physical-ai"]
summary: "Singaporean startup Sharpa Robotics demonstrated its humanoid robot North inserting a GPU into a PCIe slot with submillimeter precision — and Jensen Huang highlighted it in his GTC keynote."
thumbnail: thumbnail.png
video: video.mp4
sources:
  - title: "Sharpa Robotics — GTC keynote feature (X)"
    url: "https://x.com/SharpaRobotics/status/2033757160069320896"
  - title: "Sharpa and NVIDIA Bridge the Simulation Gap (The AI Insider)"
    url: "https://theaiinsider.tech/2026/03/16/ai-robotics-unicorn-sharpa-and-nvidia-collaborating-for-dexterous-robot-training/"
  - title: "Mike Kalil on North's PC assembly (X)"
    url: "https://x.com/mikekalilmfg/status/2034005647402864796"
---

Singaporean startup **Sharpa Robotics** turned heads at NVIDIA GTC 2026 this week when its wheeled humanoid robot **North** autonomously inserted a GPU into a PCIe slot — a task considered exceptionally difficult for robots due to the tight tolerances and risk of damaging sensitive electronics.

The footage, highlighted by NVIDIA CEO Jensen Huang during his GTC keynote, shows North completing the assembly end-to-end: installing the GPU, securing screws, and routing internal wiring — all without human guidance.

The feat is enabled by Sharpa's dexterous robotic hand, **SharpaWave**, which packs 22 degrees of freedom and more than 1,000 touch sensors per fingertip. Those sensors report pressure, texture, and force at up to 180 Hz, feeding a closed-loop AI that adjusts grip in real time to avoid crushing fragile components.

North runs **CraftNet**, Sharpa's in-house vision-tactile-language-action (VTLA) model tuned specifically for fine manipulation tasks. The model processes physical contact data step-by-step and adapts as conditions change — making it well-suited for the kind of unpredictable tolerances found in real-world electronics assembly.

The demos come alongside a published collaboration with NVIDIA: **TacMap**, a high-fidelity tactile simulation framework that resolves the usual trade-off between physical realism and computation speed. Simulation code and assets will be open sourced. Separately, NVIDIA's GEAR Lab found that robots using SharpaWave hands achieved a **54% higher task success rate** when policies were pre-trained on 20,000+ hours of human video data using NVIDIA's GR00T model.

Sharpa has begun mass producing SharpaWave hands. Pricing has not been publicly disclosed.
