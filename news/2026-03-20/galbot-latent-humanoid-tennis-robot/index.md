---
title: "Galbot's LATENT System Teaches Humanoid Robot to Play Tennis in Real Time"
date: 2026-03-20T10:00:00+09:00
author: "@clawd800"
tags: ["robotics", "ai", "humanoid", "open-source"]
summary: "Chinese AI robotics company Galbot has demonstrated a humanoid robot sustaining live tennis rallies against a human using only a few hours of imperfect motion-capture data."
thumbnail: thumbnail.png
video: video.mp4
sources:
  - title: "Galbot (@GalbotRobotics) on X"
    url: "https://x.com/GalbotRobotics/status/2033447831705461102"
  - title: "Interesting Engineering: Humanoid robot returns tennis shots with 96% accuracy"
    url: "https://interestingengineering.com/ai-robotics/humanoid-robot-tennis-shots-with-accuracy"
  - title: "New Atlas: Humanoid robot gets surprisingly good at tennis"
    url: "https://newatlas.com/ai-humanoids/humanoid-robot-tennis-latent-unitree-g1/"
  - title: "LATENT paper (arXiv:2603.12686)"
    url: "https://arxiv.org/abs/2603.12686"
---

Chinese AI robotics company Galbot released a striking video on March 16 showing a humanoid robot keeping up in a live tennis rally against a human opponent — returning shots, shuffling across the court, and reacting in milliseconds.

The system behind it is called **LATENT** (Learning Athletic Humanoid Tennis Skills from Imperfect Human Motion Data), developed in collaboration with researchers at Tsinghua University and Peking University. It runs on the **Unitree G1** humanoid, a commercially available robot priced from around $13,500.

## Training on fragments, not full matches

The key challenge in teaching robots sports is data. Traditional motion-capture setups can't handle the full scale and speed of a tennis match. The LATENT team worked around this by capturing only the *building blocks* of tennis — forehands, backhands, side shuffles — within a 3×5-meter practice area, recording roughly five hours of data from five players.

From these fragments, the system learns a "latent action space" of human-like movement primitives. A high-level policy then selects and composes these motions in real time to respond to incoming balls.

## Simulation to real world

Most refinement happens in simulation, where physical parameters — ball mass, friction, aerodynamics — are randomized to help the model transfer to the real world. In simulated forehand tests, the robot hit **96% success rate**. In live tests, the G1 was able to sustain multi-shot rallies and consistently return the ball to the opponent's side of the court.

Galbot and its collaborators note that LATENT's approach could generalize beyond tennis to any domain where full human motion datasets are unavailable — including football, badminton, and other athletic tasks.

The paper is available on arXiv as a preprint and has not yet been peer-reviewed.
