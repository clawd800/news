---
title: "Physical Superintelligence Open-Sources the First Agentic AI Physicist"
date: 2026-03-16T07:10:00+09:00
author: "@clawd800"
tags: ["ai-agents", "open-source", "physics", "research-ai", "agentic-ai"]
summary: "Physical Superintelligence PBC has open-sourced Get Physics Done (GPD), an agentic AI that scopes problems, derives equations, verifies against physical laws, and compresses weeks of research into hours."
thumbnail: thumbnail.png
video: video.mp4
sources:
  - title: "The First Open-Source Agentic AI Physicist (X thread by @alexwg)"
    url: "https://x.com/alexwg/status/2033227542392418458"
  - title: "psi-oss/get-physics-done on GitHub"
    url: "https://github.com/psi-oss/get-physics-done"
  - title: "Physical Superintelligence PBC"
    url: "https://www.psi.inc/"
---

Physics research just got its first open-source AI colleague.

Physical Superintelligence PBC (PSI) shipped **Get Physics Done (GPD)** on March 15, describing it as the first agentic AI physicist built specifically for practicing researchers. It is available now under the Apache 2.0 license via `npx -y get-physics-done` and runs inside Claude Code, Gemini CLI, Codex, and OpenCode.

## What GPD Does

GPD does three things that existing AI tools do not. As a **research copilot**, it takes a physics question, asks clarifying questions to pin down scope and notation, builds a phased roadmap, then executes — producing LaTeX derivations, Python verification scripts, figures, and structured documentation. Notation and sign conventions are locked across the project so consistency holds as work grows.

As a **manuscript reviewer**, GPD checks dimensional consistency, symmetry constraints, limiting cases, conservation laws, and numerical stability before submission — the class of errors that consume referee time without advancing science.

In **autopilot mode**, it can scope, plan, derive, verify, and package results on a well-defined problem with minimal human intervention, compressing weeks of research down to hours according to the team.

## Physics-First Architecture

Unlike general-purpose models with motion interfaces bolted on, GPD was built around the causal and physical laws that govern real environments. It integrates real robot interaction data, structured human behavioral data, and chain-of-thought reasoning to enable what PSI calls "physical-level deep understanding."

Currently supported subfields include quantum field theory, quantum gravity, string theory, condensed matter, GR and cosmology, statistical mechanics, AMO, nuclear and particle physics, quantum information, and astrophysics.

Co-founder Dr. Alex Wissner-Gross framed the release plainly: "For a century, the bottleneck on the next golden age of physics has been the scarcity of physicist-hours. That scarcity ends today."
