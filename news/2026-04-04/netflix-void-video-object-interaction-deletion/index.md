---
title: "Netflix Open-Sources VOID, a Model That Erases Objects and Their Physical Interactions From Video"
date: 2026-04-04T03:00:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "video", "netflix", "computer-vision"]
summary: "Netflix's first public AI model removes objects from video while fixing the physics - if you erase a person holding a guitar, VOID makes the guitar fall naturally."
thumbnail: thumbnail.png
video: video.mp4
sources:
  - title: "Netflix/void-model - GitHub"
    url: "https://github.com/Netflix/void-model"
  - title: "VOID Model - Hugging Face"
    url: "https://huggingface.co/netflix/void-model"
  - title: "VOID: Video Object and Interaction Deletion - arXiv"
    url: "https://arxiv.org/abs/2604.02296"
---

Netflix just released its first-ever public AI model, and it tackles one of the hardest problems in video editing: what happens to the rest of the scene when you remove something from it.

VOID (Video Object and Interaction Deletion) goes beyond standard object removal. Current tools can paint over an object and clean up its shadow, but they fall apart when physics is involved. Remove a person holding a guitar, and existing models leave the guitar floating in mid-air. VOID makes the guitar fall.

The system works in two passes. First, a vision-language model scans the video to identify every region affected by the object being removed, including secondary interactions like collisions and displacement. Then a fine-tuned CogVideoX transformer generates physically plausible replacements for those regions, using what Netflix calls "quadmask conditioning" to distinguish between the primary object, overlap zones, affected areas, and background.

The training data is clever: the team built paired counterfactual videos using HUMOTO (human-object interactions rendered in Blender with physics simulation) and Google's Kubric dataset, giving the model ground truth for "what would this scene look like if this object was never there?"

VOID is a 5-billion parameter model requiring a beefy A100 GPU with 40GB+ VRAM, so this is not running on laptops. But the full pipeline is open-source under the Netflix GitHub org, with a Colab notebook, HuggingFace weights, and a live demo available now.

For filmmakers and VFX studios, the implications are significant. Object removal is one of the most tedious post-production tasks, and VOID's physics-aware approach could save hours of manual work per shot.
