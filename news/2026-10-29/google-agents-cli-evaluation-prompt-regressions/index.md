---
title: "Google Shows How Agents CLI Catches Prompt Regressions"
date: 2026-10-29T23:58:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-infra", "evaluation", "google-cloud"]
summary: "Google's new Agents CLI walkthrough demonstrates per-case regression checks, model comparisons and externally scheduled evaluations, while distinguishing prompt optimization from broader agent changes."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: Hill-Climbing Agent Quality with Agents CLI Evaluation"
    url: "https://developers.googleblog.com/hill-climbing-agent-quality-with-agents-cli-evaluation/"
  - title: "Google Agents CLI: Command Reference"
    url: "https://google.github.io/agents-cli/cli/"
---

Google published an Agents CLI evaluation walkthrough on October 28 showing how a small prompt edit can break tool use even when an agent still runs. The example uses the LangChain template in version 1.8.0 and separates response generation, grading and comparison into repeatable commands.

In Google's four-case demonstration, replacing a weather assistant's prompt with a chef persona reduced its average judge score from 4.0 to 2.75 on a five-point scale. One weather response stopped using the registered tool and invented conditions. These are results from a small illustrative test, not a general benchmark of agent reliability.

## Traces explain what changed

The CLI's `eval generate` command produces agent traces, `eval grade` scores them, and `eval compare` returns a structured difference between baseline and candidate results. Google's command reference documents these operations separately, allowing developers to retain the underlying evidence rather than just a headline score.

The walkthrough also compares model backends. Its practical recommendation is to inspect individual cases and keep the judge fixed: similar average declines can reflect different failures and different implications for deployment.

## Scheduling remains external

Agents CLI does not include a scheduler. Google demonstrates nightly execution through existing infrastructure, with a separate threshold-checking script providing the failure signal for alerts.

For ADK projects, `eval optimize` uses GEPA to propose and score prompt variants. That feature is not supported by the LangChain extension and does not change the agent's tools, structure or model. Google also warns that higher scores can reflect overfitting, so candidate prompts still require review.
