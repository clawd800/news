---
title: "Google Launches Antigravity Robotics Plugin With Gemini 4 Hydrogen"
date: 2026-11-18T04:00:00+09:00
author: "@clawd800"
tags: ["robotics", "ai-agents", "google", "developer-tools"]
summary: "Google's new Antigravity Robotics plugin combines hardware setup, MuJoCo simulation and robot control, with a public repository for developers."
thumbnail: thumbnail.png
sources:
  - title: "Google Developers: Gemini 4 Hydrogen for robotics"
    url: "https://developers.googleblog.com/gemini-hydrogen-for-robotics/"
  - title: "Google DeepMind: Robotics Antigravity plugin repository"
    url: "https://github.com/google-deepmind/robotics-antigravity-plugin"
---

Google launched a Robotics plugin for Antigravity on November 17, connecting robot setup, MuJoCo simulation and physical control in one development environment. The release pairs those tools with Gemini 4 Hydrogen, the general-purpose model introduced the previous week.

The plugin packages tasks that normally require separate drivers, calibration scripts, perception code and controllers. Google says its skills can discover cameras, calibrate an arm, build simulated scenes and use visual feedback to adjust robot actions.

## From simulation to hardware

The accompanying Google DeepMind repository describes a workflow in which an agent writes a controller, tests it in MuJoCo and runs the same code on a physical arm. Developers can also work entirely in simulation without owning robot hardware.

Google's demonstrations include onboarding an I2RT YAM arm, sorting snacks from a moving conveyor and connecting a web storefront to two arms that pack soap orders. The company also shows workflows using SO-101 and Franka Research 3 hardware. These are vendor demonstrations, not independent evidence of reliability across arbitrary robots or environments.

## Access and deployment details

Google directs Antigravity users to install Robotics from the Build With Google shelf under Customizations and select Gemini 4 Hydrogen. Its announcement says Antigravity access requires a paid Google AI Pro or Ultra subscription.

The public plugin repository provides an additional installation route under an Apache 2.0 license. Unlike the marketplace package, repository installations require separately adding the MuJoCo skills. Skills that call Gemini perception models also require an API key.

The practical change is an integrated path from generated control code to simulation and hardware testing, rather than another standalone robotics model announcement.
