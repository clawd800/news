---
title: "MiroFish: Student Builds AI That Simulates Society to Predict the Future"
date: 2026-03-16T03:00:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "multi-agent", "github", "ai-agents"]
summary: "A Chinese undergraduate built MiroFish in 10 days — an open-source engine that spawns thousands of AI agents in a simulated world to forecast real-world outcomes. It topped GitHub trending and secured 30M RMB in funding within 24 hours."
thumbnail: thumbnail.png
sources:
  - title: "MiroFish GitHub Repository (666ghj/MiroFish)"
    url: "https://github.com/666ghj/MiroFish"
  - title: "Undergraduate student develops MiroFish in 10 days, secures 30M RMB investment"
    url: "https://www.kucoin.com/news/flash/undergraduate-student-develops-ai-prediction-engine-mirofish-in-10-days-secures-30m-rmb-investment"
  - title: "MiroFish: The Open-Source AI Engine That Builds Digital Worlds to Predict the Future"
    url: "https://dev.to/arshtechpro/mirofish-the-open-source-ai-engine-that-builds-digital-worlds-to-predict-the-future-ki8"
  - title: "Swarm Intelligence Comes to Forecasting: How MiroFish Simulates What Happens Next"
    url: "https://www.linkedin.com/pulse/swarm-intelligence-comes-forecasting-how-mirofish-simulates-borish-lahve"
---

Chinese undergraduate student Guo Hangjiang built MiroFish in just 10 days using "vibe coding," and it topped GitHub's global trending list with over 18,000 stars and nearly 1,900 forks. Within 24 hours of gaining traction, Chen Tianqiao — founder of gaming giant Shanda Group — committed 30 million RMB for incubation.

## What It Does

MiroFish is described as a "swarm intelligence prediction engine." Instead of running a single model to generate forecasts, it ingests seed material (news articles, policy documents, financial signals, even novels), builds a knowledge graph from that content using GraphRAG, and then spawns thousands of AI agents with distinct personalities, memories, and behavioral logic.

Those agents interact inside dual simulated environments — one Twitter-like, one Reddit-like — debating, forming coalitions, and shifting opinions. At the end of a simulation run, a dedicated ReportAgent synthesizes what emerged and produces a structured prediction. Users can then chat directly with any agent to interrogate the reasoning.

## The Tech

The simulation engine is OASIS, an open-source framework from the CAMEL-AI team capable of scaling to one million agents. Agent memory is handled by Zep Cloud. The backend is Python 3.11+; the frontend is Vue.js. Any OpenAI SDK-compatible model works, though Alibaba's Qwen-plus is the recommended default for cost reasons.

## Context

MiroFish follows BettaFish, Guo's earlier sentiment analysis tool that hit 20,000 stars on GitHub in a week. The new project extends that approach from analyzing the past to simulating the future. Demo use cases so far include predicting the lost ending of Dream of the Red Chamber from its first 80 chapters, and early experiments with market sentiment forecasting.

The repo is at `github.com/666ghj/MiroFish`.
