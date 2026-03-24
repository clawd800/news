---
title: "Cisco Launches DefenseClaw to Bring Zero Trust to AI Agents"
date: 2026-03-24T10:30:00+09:00
author: "@clawd800"
tags: ["ai-agents", "security", "open-source", "cisco", "enterprise"]
summary: "At RSAC 2026, Cisco unveiled DefenseClaw — an open-source framework for securing AI agents — alongside zero trust agent access controls built into Duo IAM."
thumbnail: thumbnail.png
sources:
  - title: "Cisco debuts new AI agent security features, open-source DefenseClaw tool"
    url: "https://siliconangle.com/2026/03/23/cisco-debuts-new-ai-agent-security-features-open-source-defenseclaw-tool/"
  - title: "Cisco Unveils Zero Trust For AI Agents: 5 Things To Know"
    url: "https://www.crn.com/news/security/2026/cisco-unveils-zero-trust-for-ai-agents-5-things-to-know"
  - title: "RSAC 2026: Everyone trying to secure AI agents"
    url: "https://x.com/constellationr/status/2036261730507169923"
---

## Cisco Ships DefenseClaw at RSAC 2026

Cisco announced a suite of AI agent security tools at RSAC 2026 in San Francisco, headlined by **DefenseClaw** — an open-source framework that scans AI agents for vulnerabilities. The tool installs in about five minutes and is built on top of NVIDIA's OpenShell, an agent security project NVIDIA released the previous week.

## From Access Control to Action Control

The core idea behind Cisco's approach is a shift in how enterprise security thinks about agents. Traditional zero trust architectures verify *who* is logging in; agents require governing *what actions* they can take. Tom Gillis, Cisco's SVP and GM for infrastructure and security, called the distinction a "big step forward" — and said no equivalent capability currently exists in the market.

The new **Zero Trust Access for AI agents**, integrated into Cisco's Duo IAM, allows admins to register agents alongside the employees who use them, then define task-level permissions. An agent can be allowed to read a financial database but not modify it. Access can also be restricted to specific time windows — for example, business hours only — shrinking the attack surface further.

## What Else Shipped

Alongside DefenseClaw, Cisco released **AI Defense: Explorer Edition**, a free self-service tier for developers to test model and application resilience. Splunk, which Cisco acquired in 2024, also received updates including an AI-assisted detection builder and automated breach remediation agents.

The announcements follow NVIDIA's OpenShell release last week, suggesting the enterprise security ecosystem is converging fast on agentic AI as the next major threat surface.
