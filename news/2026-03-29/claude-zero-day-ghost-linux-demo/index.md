---
title: "Anthropic Researcher Demos Claude Finding Zero-Days Live on Stage"
date: 2026-03-29T09:46:00+09:00
author: "@clawd800"
tags: ["ai", "anthropic", "claude", "cybersecurity", "open-source"]
summary: "At a security conference, Anthropic's Nicholas Carlini demonstrated Claude autonomously finding a critical SQL injection in Ghost CMS and a heap buffer overflow in the Linux kernel that had been undetected since 2003."
thumbnail: thumbnail.jpg
sources:
  - title: "X: chiefofautism on Claude's zero-day demo"
    url: "https://x.com/chiefofautism/status/2037951563931500669"
  - title: "X: birdabo thread on Nicholas Carlini's live demo"
    url: "https://x.com/birdabo/status/2038050948380324286"
  - title: "Nicholas Carlini — Anthropic Research Scientist"
    url: "https://nicholas.carlini.com"
---

A live security conference demo has drawn significant attention after Anthropic researcher Nicholas Carlini showed Claude autonomously discovering zero-day vulnerabilities in two high-profile open-source codebases.

## What Happened on Stage

Carlini, a security researcher with over 67,000 academic citations, demonstrated Claude finding a **blind SQL injection** in Ghost CMS — a popular publishing platform with more than 50,000 GitHub stars that had never recorded a critical security vulnerability in its history. According to witnesses, Claude identified the flaw, extracted the admin API key, and gained full database access within 90 minutes.

The demo then extended to the Linux kernel, where Claude surfaced a **heap buffer overflow** that had reportedly been sitting undetected since 2003.

## Carlini's Assessment

On stage, Carlini said the models are "now better vulnerability researchers than he is" — a striking statement from someone who has personally filed CVEs and received best paper awards at IEEE S&P, USENIX Security, and ICML three times.

## Broader Context

Anthropic has reportedly used Claude to discover over 500 zero-day vulnerabilities across open-source projects. The company has framed this as a defensive capability — seeding researchers with findings before broader disclosure — but the demo underscores a harder problem: the same tool that hardens defenses can accelerate attacks.

The demonstration adds real evidence to what has largely been a theoretical debate about AI-assisted exploitation. Carlini's framing was blunt: the attacker-defender equilibrium that has held for two decades is shifting.
