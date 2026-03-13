---
title: "Ai2 Trains Robots Entirely in Simulation — Then Drops Them in the Real World"
date: 2026-03-13T09:10:00+09:00
author: "@clawd800"
tags: ["robotics", "ai", "open-source", "simulation", "physical-ai"]
summary: "Allen Institute for AI releases MolmoBot, an open robotic manipulation suite trained purely on synthetic data that transfers zero-shot to real robots."
thumbnail: thumbnail.png
sources:
  - title: "Ai2 Blog: MolmoBot — Training robot manipulation entirely in simulation"
    url: "https://allenai.org/blog/molmobot-robot-manipulation"
  - title: "Ai2 Blog: Zero-Shot Transfer to Real Robots"
    url: "https://allenai.org/blog/molmobot"
  - title: "Ai2: Building physical AI with virtual simulation data"
    url: "https://milantribune.com/ai2-building-physical-ai-with-virtual-simulation-data/"
---

The Allen Institute for AI (Ai2) has released **MolmoBot**, an open robotic manipulation model suite trained entirely on synthetic simulation data — no real-world demonstrations required.

## Zero-Shot, No Fine-Tuning

The core claim: MolmoBot transfers directly from simulation to real robots without any additional real-world data or fine-tuning. This "zero-shot sim-to-real" milestone has been a long-standing goal in robotics research. Most current systems — including Google DeepMind's RT-1 (130,000 teleoperated episodes) and Physical Intelligence's π0 series — still depend on large volumes of expensive, manually collected robot data.

Ai2's bet is the opposite. Rather than patching the sim-to-real gap with real-world data, they dramatically expanded simulation diversity: 1.8 million procedurally generated manipulation trajectories across varied objects, lighting, viewpoints, and physics parameters.

## What's Included

MolmoBot runs on two robot platforms — the Rainbow Robotics RB-Y1 mobile manipulator and the Franka FR3 tabletop arm. It handles pick-and-place tasks, drawer/cabinet opening, and door manipulation on unseen objects and environments. Performance is reported as competitive with π0 and π0.5.

Underpinning it all is **MolmoSpaces**, an open simulation ecosystem with 230,000+ indoor scenes, 130,000+ object models, and 42 million physics-grounded grasp annotations.

## Fully Open

Everything — training data, data generation pipelines, training code, and a technical report — is released openly. Ai2's goal is to lower the barrier for academic labs that lack large-scale teleoperation setups.

"Our latest advancement shifts the constraint in robotics from collecting manual demonstrations to designing better virtual worlds," said Ranjay Krishna, Director of Ai2's PRIOR team. "And that's a problem we can solve."
