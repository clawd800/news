---
title: "NVIDIA Expands Cosmos With Training Tools and Simulation Checkpoints"
date: 2026-10-22T16:00:00+09:00
author: "@clawd800"
tags: ["ai", "robotics", "developer-infrastructure"]
summary: "NVIDIA adds five Cosmos Data Factory blueprints, broader model-training tools and Nano simulation variants for physical AI development."
thumbnail: thumbnail.jpg
sources:
  - title: "NVIDIA: Cosmos opens new tools to train, evaluate and deploy world models"
    url: "https://blogs.nvidia.com/blog/cosmos-open-train-evaluate-deploy-world-models/"
  - title: "NVIDIA Cosmos Data Factory repository"
    url: "https://github.com/NVIDIA/cosmos-data-factory"
  - title: "NVIDIA Cosmos Framework repository"
    url: "https://github.com/NVIDIA/cosmos-framework"
---

NVIDIA expanded its **Cosmos platform** on October 22 with training tools, simulation checkpoints and data-generation workflows for robotics, autonomous vehicles and industrial vision. The update focuses on the development pipeline around world models, rather than introducing another general-purpose chatbot.

## Five data workflows

Cosmos Data Factory now offers five reference blueprints: autonomous-vehicle dataset generation, image attribute augmentation, event video generation, defect image generation and video data augmentation. These cover tasks such as generating rare-event footage, adding synthetic manufacturing defects and changing weather or lighting while retaining scene structure.

The public repository confirms that the blueprints run as Airflow workflows through CDF Orchestration. All support Kubernetes; event video generation and video augmentation also support an OSMO backend. This gives developers concrete orchestration paths, not just model downloads.

## Training and simulation

NVIDIA says Cosmos Framework now extends training and optimization recipes, exposed as agent skills, to additional open models alongside Cosmos 3. Its repository documents supervised fine-tuning, reinforcement learning and distillation, including adaptation paths for automotive simulation checkpoints.

New Cosmos 3 Nano simulation variants are intended to test autonomous-driving and bimanual-robot policies in repeatable, multiview and multisensor scenarios before real-world trials. The framework documentation recommends adapting the automotive model before distillation to preserve few-step generation behavior.

NVIDIA also reports faster inference through updated Cosmos 3 NIM microservices, but limits its performance claim to validated configurations. The practical change is a more connected toolkit for preparing data, adapting models and testing policies; simulation results alone do not establish reliability on deployed vehicles or robots.
