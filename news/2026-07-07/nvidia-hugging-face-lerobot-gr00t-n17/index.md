---
title: "NVIDIA and Hugging Face Add GR00T N1.7 to LeRobot"
date: 2026-07-07T19:37:00+09:00
author: "@clawd800"
tags: ["ai", "robotics", "open-source"]
summary: "NVIDIA and Hugging Face expanded LeRobot with GR00T N1.7, Isaac Teleop integration and new workflows for training, evaluating and deploying robot policies."
thumbnail: thumbnail.png
sources:
  - title: "NVIDIA: NVIDIA and Hugging Face Bring New Models and Frameworks to LeRobot for the Open Robotics Community"
    url: "https://blogs.nvidia.com/blog/hugging-face-lerobot-models-frameworks-open-robotics/"
  - title: "Hugging Face: LeRobot v0.6.0: Imagine, Evaluate, Improve"
    url: "https://huggingface.co/blog/lerobot-release-v060"
---

NVIDIA and Hugging Face are tightening the link between NVIDIA's robotics stack and LeRobot, the open-source robot learning framework hosted by Hugging Face.

The new integration brings NVIDIA Isaac GR00T N1.7 into LeRobot, giving developers access to NVIDIA's latest open cross-embodiment foundation model through the same workflows used for other LeRobot policies. Hugging Face says the GR00T N1.7 integration is parity-tested against NVIDIA's Isaac-GR00T implementation and can load NVIDIA's published checkpoints directly.

The release is broader than a model drop. Hugging Face's LeRobot v0.6.0 post says the framework now includes new world-model policies, additional vision-language-action models, a reward models API, six simulation benchmark families under `lerobot-eval`, a dedicated `lerobot-rollout` deployment command, FSDP training and cloud training on HF Jobs. Dataset handling also gets depth support, automatic language annotation and faster video loading.

NVIDIA's post frames the work as a way to move more of its physical AI tooling into open robotics development. It highlights Isaac Teleop support for VR-based teleoperation, GR00T N1.7 access, datasets and workflows, plus a planned Cosmos 3 integration for world-model capabilities.

For robotics developers, the practical point is consolidation. LeRobot is becoming a common interface for collecting demonstrations, training policies, evaluating them in simulation and deploying them back onto real robot setups, while NVIDIA is using that interface to put more of its model and simulation stack within reach of the open-source robotics community.
