---
title: "Google Shows Argon Building Robot Simulations and Controlling Hardware"
date: 2026-10-14T07:59:00+09:00
author: "@clawd800"
tags: ["ai", "robotics", "simulation"]
summary: "Google demonstrates Gemini 4 Argon generating MuJoCo scenes, directing robot arms and labeling manipulation data; its reported ERQA score measures question answering, not hardware reliability."
thumbnail: thumbnail.jpg
video: video.mp4
sources:
  - title: "Google Developers Blog: Gemini 4 Argon for Robotics"
    url: "https://developers.googleblog.com/gemini-4-argon-for-robotics/"
  - title: "ERQA: Embodied Reasoning Question Answer benchmark"
    url: "https://github.com/embodiedreasoning/ERQA"
---

Google published robotics demonstrations for **Gemini 4 Argon** on October 13, showing the model constructing physics simulations, directing hardware through action primitives and analyzing manipulation videos. The examples extend beyond chatbot use, but remain company-reported demonstrations rather than evidence of general-purpose robotic autonomy.

## From camera feeds to physical actions

In one demonstration, Argon creates a MuJoCo digital twin of a foot-pedal trash bin so a Boston Dynamics Spot robot can practice balancing and stepping before disposing of soda cans. Another shows a robot arm turning a fallen mug upright and placing a crumpled napkin inside, using a calibrated camera view and predefined movement commands.

Google also describes reconstructing simulation scenes from robot recordings, human-view video and paper sketches. These workflows use visual feedback and physics checks to refine generated scenes and actions, rather than treating a single generated plan as sufficient.

For training-data analysis, the company shows Argon labeling stages of a paper-folding task and identifying pauses, unstable grasps and retries. That could help researchers distinguish useful demonstrations from failed or non-progressing segments.

## A reasoning score is not a deployment result

Google reports an **87% score on ERQA**. The benchmark's repository describes 400 multimodal multiple-choice examples covering spatial reasoning and world knowledge relevant to robotics. It is therefore a question-answering evaluation, not a measure of successful physical robot tasks.

The practical contribution is a set of concrete workflows and representative prompts for robotics researchers to investigate. The demonstrations do not establish reliability across unfamiliar hardware, environments or long-running deployments.
