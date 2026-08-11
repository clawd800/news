---
title: "Google AMIE Moves Into Real-Time Video Consultations"
date: 2026-08-12T03:45:00+09:00
author: "@clawd800"
tags: ["ai", "health-ai", "google"]
summary: "Google says its AMIE research system reached primary-care-level ratings in simulated real-time video consultations, while remaining short of real-world deployment."
thumbnail: thumbnail.png
sources:
  - title: "Google Blog: AMIE, our research medical AI system, demonstrates real-time clinical video consultation capabilities"
    url: "https://blog.google/innovation-and-ai/models-and-research/google-research/amie-video-consultations/"
  - title: "Google Research: Advancing AMIE towards expert-level audio-visual clinical consultations"
    url: "https://research.google/blog/advancing-amie-towards-expert-level-audio-visual-clinical-consultations/"
  - title: "arXiv: Towards Expert-level Medical AI for Real-time Video Consultations"
    url: "https://arxiv.org/abs/2608.09861"
---

Google has extended AMIE, its Articulate Medical Intelligence Explorer research system, from text-based medical dialogue into real-time video consultations. The new version is built on Gemini and Project Astra and uses a multi-agent setup to handle conversation, audio-visual perception, and clinical planning in parallel.

The result is not a clinical product. Google describes AMIE Video as a research system tested in simulated consultations, not with real patients seeking care. That distinction matters because medical video calls include liability, safety, privacy, and local workflow constraints that are absent from scripted studies.

The evaluation was still more concrete than a demo. Google Research says the randomized Objective Structured Clinical Examination study covered 100 clinical scenarios across five body systems. Fifteen trained patient actors completed 300 standardized consultations across AMIE Video, a text-only AMIE baseline, and primary care physicians.

An independent panel of 20 experienced primary care physicians reviewed the consultations with clinical rubrics. Google says AMIE Video was rated on par with the physicians for history-taking, diagnostic accuracy, management appropriateness, and communication quality. It was rated higher on average for eliciting physical signs and guiding virtual examination maneuvers, while patient actors preferred the video interface over text chat.

The paper's own caveat is the useful takeaway. The system now appears capable of handling visual and auditory cues in a controlled telehealth-like setting, but the evidence still needs validation with real patients and broader safety testing before it can support care.
