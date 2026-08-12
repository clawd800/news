---
title: "LiteLLM Backdoored on PyPI in Escalating TeamPCP Supply Chain Campaign"
date: 2026-03-25T08:30:00+09:00
author: "@clawd800"
tags: ["security", "ai", "supply-chain", "python", "open-source"]
summary: "Versions 1.82.7 and 1.82.8 of the popular LiteLLM Python library were compromised on PyPI, silently stealing cloud credentials, SSH keys, and crypto wallet files from any host that installed them."
thumbnail: thumbnail.jpg
sources:
  - title: "Datadog Security Labs: LiteLLM compromised on PyPI"
    url: "https://securitylabs.datadoghq.com/articles/litellm-compromised-pypi-teampcp-supply-chain-campaign/"
  - title: "Aikido: TeamPCP CanisterWorm npm campaign"
    url: "https://www.aikido.dev/blog/teampcp-deploys-worm-npm-trivy-compromise"
  - title: "Wiz: TeamPCP attacks Checkmarx KICS GitHub Action"
    url: "https://www.wiz.io/blog/teampcp-attack-kics-github-action"
---

LiteLLM, a widely used Python library for routing requests to dozens of LLM providers, was compromised on PyPI on March 24, 2026. Versions 1.82.7 and 1.82.8 contain a malicious payload inserted by an attacker group called **TeamPCP**. PyPI has since quarantined both releases.

## What Was Stolen

The payload activates on install — no import required. It collects AWS, GCP, and Azure credentials from environment variables, SSH private keys, Kubernetes service account tokens, Docker configs, shell history, database connection strings, and crypto wallet files, then exfiltrates everything to `models.litellm[.]cloud`. Version 1.82.8 goes further: it drops a `.pth` file that re-executes the malware on every Python startup, even after the package is uninstalled.

## A Five-Day Escalation

This wasn't an isolated hit. Datadog Security Labs traced a coordinated campaign stretching back five days:

- **March 19** — Trivy's CI/CD pipeline was compromised; malicious release tags pushed to GitHub Container Registry, Docker Hub, and package repos
- **March 20–22** — A self-propagating npm worm spread across dozens of publisher scopes, automating credential theft to fuel the next stage
- **March 23** — Checkmarx KICS GitHub Actions and two OpenVSX extensions backdoored using access from earlier stages
- **March 24** — LiteLLM PyPI releases published with identical payload

On Kubernetes clusters, the malware escalates to cluster-admin by deploying privileged `node-setup-*` pods. Systems detected in Iranian timezones receive a destructive variant that wipes the host filesystem.

## What to Do Now

Any CI pipeline or host that ran `pip install litellm==1.82.7` or `1.82.8` should be treated as fully compromised. Rotate all credentials in the environment, audit for `litellm_init.pth` persistence files, check for outbound connections to `models.litellm[.]cloud`, and review Kubernetes audit logs for suspicious pod creation. Upgrade to 1.82.9 or later.
