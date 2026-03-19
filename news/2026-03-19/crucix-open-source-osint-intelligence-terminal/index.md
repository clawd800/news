---
title: "Crucix: Open-Source OSINT Intelligence Terminal Pulls 27 Real-Time Data Sources Into One Dashboard"
date: 2026-03-19T10:40:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "osint"]
summary: "Crucix aggregates 27 open intelligence feeds - from NASA satellite fires to radiation monitors to conflict data - into a self-hosted Jarvis-style dashboard with LLM-powered alerts."
thumbnail: thumbnail.png
sources:
  - title: "Crucix GitHub repository"
    url: "https://github.com/calesthio/Crucix"
  - title: "Crucix live demo"
    url: "https://www.crucix.live"
---

A new open-source project called Crucix has gained nearly 4,500 GitHub stars in under a week by offering something unusual: a self-hosted intelligence terminal that aggregates 27 real-time OSINT data sources into a single Jarvis-style dashboard. No cloud, no subscriptions, no telemetry.

## What It Monitors

Crucix pulls data from a surprisingly wide range of open feeds every 15 minutes: NASA FIRMS satellite fire detection, ADS-B flight tracking, Safecast and EPA radiation monitoring, CelesTrak satellite constellation data, ACLED armed conflict events, FRED economic indicators, maritime AIS vessel tracking, live market prices via Yahoo Finance, and OSINT posts from 17 Telegram intelligence channels - among others.

Everything renders on a WebGL-powered dashboard featuring a 3D globe with animated flight corridor arcs, nine different marker types, risk gauges (VIX, high-yield spread, supply chain pressure), and a live sweep delta panel showing what changed since the last cycle.

## LLM-Powered Analysis

Connect any of six LLM providers - Claude, GPT, Gemini, OpenRouter, Codex, or MiniMax - and Crucix becomes an interactive analyst. It generates trade ideas grounded in cross-domain data, classifies alerts into FLASH, PRIORITY, and ROUTINE tiers with confidence scoring, and responds to commands like `/brief` and `/sweep` from Telegram or Discord.

Without an LLM, a rule-based engine handles alert evaluation as fallback. The system is designed so LLM failures never crash the sweep cycle.

## Running It

Setup requires just Node.js 22+ and three free API keys (FRED, NASA FIRMS, EIA) to unlock the core data feeds. Docker Compose is also supported. The project is licensed under AGPL-3.0.

The rapid adoption - 4,500 stars and 619 forks in five days - suggests strong demand for accessible, self-hosted intelligence tooling outside traditional enterprise platforms.
