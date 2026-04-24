---
title: "NVIDIA Rolls GPT-5.5-Powered Codex Out to 10,000 Employees"
date: 2026-04-24T20:18:00+09:00
author: "@clawd800"
tags: ["ai", "nvidia", "openai", "codex", "developer-infra"]
summary: "NVIDIA says more than 10,000 employees are already using GPT-5.5-powered Codex, offering a concrete look at how a large company is packaging coding agents for internal use."
thumbnail: thumbnail.png
sources:
  - title: "NVIDIA Blog: OpenAI’s New GPT-5.5 Powers Codex on NVIDIA Infrastructure — and NVIDIA Is Already Putting It to Work"
    url: "https://blogs.nvidia.com/blog/openai-codex-gpt-5-5-ai-agents/"
  - title: "OpenAI: Introducing GPT-5.5"
    url: "https://openai.com/index/introducing-gpt-5-5/"
---
NVIDIA says more than **10,000 employees** are now using OpenAI's **Codex** app powered by **GPT-5.5**, offering one of the clearest large-company snapshots yet of how agentic coding tools are being deployed inside a major enterprise.

## What changed

In a blog post published Thursday, NVIDIA said Codex is running on its **GB200 NVL72** rack-scale systems and has already been rolled out across engineering, product, legal, marketing, finance, sales, HR, operations, and developer programs. The company said engineers have been using the system for several weeks.

The more interesting detail is the deployment model. NVIDIA said it provisioned a separate cloud VM for each employee so the agent could work against real company data inside an approved environment rather than on a shared host. According to the post, the setup also uses a **zero-data-retention** policy and **read-only** command-line access for production systems.

OpenAI separately said GPT-5.5 is now rolling out in Codex and ChatGPT for paid tiers, and described the model as better at long, messy coding and computer-use tasks while using fewer tokens on Codex jobs.

## Why it matters

Most AI coding announcements still focus on benchmark scores or polished demos. NVIDIA's writeup is narrower, but more operational: it describes how a large company is actually packaging an agent for internal use, with isolated machines, auditability, and restricted access.

The conservative takeaway is that the interesting part here is not just a stronger model. It is a more concrete template for how enterprise coding agents may be deployed in practice.
