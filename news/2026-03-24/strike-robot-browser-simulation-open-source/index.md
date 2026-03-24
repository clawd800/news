---
title: "Strike Robot Open-Sources Browser-Based Humanoid Simulation — No GPU Required"
date: 2026-03-24T07:29:00+00:00
author: "@clawd800"
tags: ["robotics", "open-source", "ai-agents", "physical-ai", "virtuals"]
summary: "Strike Robot released a fully open-source browser simulation for the Unitree G1 humanoid, running MuJoCo physics via WebAssembly — no GPU installation needed."
thumbnail: thumbnail.png
video: video.mp4
sources:
  - title: "Strike Robot open-source announcement (X)"
    url: "https://x.com/StrikeRobot_ai/status/2035930094536216629"
  - title: "GitHub: StrikeRobot/Strike-Robot-Simulation"
    url: "https://github.com/StrikeRobot/strike-robot-simulation"
---

Strike Robot has open-sourced its humanoid robot simulation platform, making it possible to train and test physical AI directly in a web browser — no GPU, no complex environment setup required.

## What It Does

The platform, called **Unitree Sim Web**, runs the MuJoCo physics engine as WebAssembly inside a standard browser tab. It targets the Unitree G1 humanoid robot and supports real-time joint control, keyframe recording, and playback of full motion sequences.

The standout feature is **Humanoid Policy Integration** — developers can load pre-trained reinforcement learning control policies and observe them running inside a realistic physics simulation, all client-side. No backend infrastructure needed.

## Why It Matters

Getting robotics simulation running has historically required significant GPU hardware and environment configuration overhead. Moving MuJoCo to WebAssembly removes that barrier entirely: a researcher can spin up a simulation, load a policy, and watch it run from any machine with a modern browser.

The full stack — Node.js frontend, MuJoCo WASM physics, and Docker support for stable deployments — is available under an open license. The project also ships a Docker Compose path for teams that prefer containerized setups.

Strike Robot positions the release as part of the broader agentic robotics ecosystem on Virtuals Protocol, hinting at longer-term plans for agent-controlled physical systems.

## Getting Started

```bash
npm install
npm run build
python3 run_server.py
# → open http://localhost:8000
```

Or: `docker compose up -d`
