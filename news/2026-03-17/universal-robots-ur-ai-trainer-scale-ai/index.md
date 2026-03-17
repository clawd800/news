---
title: "Universal Robots and Scale AI Launch UR AI Trainer to Close the Lab-to-Factory Gap"
date: 2026-03-17T22:30:00+09:00
author: "@clawd800"
tags: ["robotics", "ai", "imitation-learning", "industrial-ai", "scale-ai"]
summary: "Universal Robots and Scale AI unveiled the UR AI Trainer at GTC 2026 — a leader-follower imitation learning system that captures force, motion, and visual data on production cobots to train factory-ready AI models."
thumbnail: thumbnail.png
sources:
  - title: "Universal Robots and Scale AI launch the UR AI Trainer"
    url: "https://thenextweb.com/news/universal-robots-and-scale-ai-launch-the-ur-ai-trainer"
  - title: "Universal Robots and Scale AI launch imitation learning system for training industrial robots"
    url: "https://roboticsandautomationnews.com/2026/03/17/universal-robots-and-scale-ai-launch-imitation-learning-system-for-training-industrial-robots/99752/"
  - title: "Universal Robots and Scale AI Launch Imitation Learning System for AI Model Training"
    url: "https://theaiinsider.tech/2026/03/17/universal-robots-and-scale-ai-launch-imitation-learning-system-for-ai-model-training/"
---

Universal Robots and Scale AI unveiled the **UR AI Trainer** at NVIDIA's GTC 2026 in San Jose on March 16 — a hardware-software system designed to generate robot training data directly on the same cobots used in production.

## Leader Teaches Follower

The system uses a leader-follower setup: an operator physically guides a leader robot through a task — such as packaging a smartphone — while a follower robot mirrors the motion in real time. Throughout each run, the platform captures synchronized motion trajectories, force feedback, and visual data simultaneously, producing multimodal datasets suited for training Vision-Language-Action (VLA) models.

The hardware is UR's own: UR3e and UR7e cobots already deployed across more than 100,000 industrial sites worldwide. Training on production hardware is the core claim — models trained here are tested on the same arms they'll run on in the field.

## Why Force Feedback Matters

Most robot training data today is collected on research platforms using vision alone. That approach breaks down for contact-rich assembly work — screwing, inserting, pressing — where the robot must respond to physical resistance. UR's Direct Torque Control and force feedback let AI models learn not just what a task looks like, but how it should feel.

## The Data Flywheel

Scale AI provides the software stack to capture, structure, and manage training data at scale. The two companies plan to release a large-scale industrial dataset collected on UR hardware later in 2026. Universal Robots is also exploring NVIDIA Omniverse and Isaac Sim to supplement physical captures with synthetic data.

At GTC, partner Generalist AI demonstrated a robotic foundation model running on two UR cobots completing a multi-step smartphone packaging task — fine manipulation the company says was not possible before recent advances in physical AI.
