---
title: "OpenAI Tightens Reasoning-Extraction Defenses and API History Controls"
date: 2026-11-21T07:58:00+09:00
author: "@clawd800"
tags: ["ai", "ai-security", "developer-infrastructure"]
summary: "OpenAI reports lower reasoning-extraction success in internal tests and ties protected reasoning to the conversation history that produced it."
thumbnail: thumbnail.jpg
sources:
  - title: "OpenAI: Combatting adversarial distillation"
    url: "https://openai.com/index/combatting-adversarial-distillation/"
  - title: "OpenAI API documentation: Keep the prefix unchanged"
    url: "https://developers.openai.com/api/docs/guides/keep-prefix-unchanged"
---

OpenAI has detailed stronger defenses against adversarial distillation, including protections against extracting private reasoning from GPT-6.2 Astra and GPT-6.2 Sol. The changes also affect how developers maintain conversation history in agent applications.

Distillation trains one model on another model's outputs. OpenAI argues that unauthorized extraction can transfer capabilities without transferring equivalent safeguards, particularly in cybersecurity and biology. Its defenses combine model training, input and output classifiers, API restrictions, and investigations into coordinated account networks.

## Internal tests show lower extraction rates

In an adaptive black-box evaluation aggregated across six attacker models, OpenAI reported that successful extraction of reasoning from an earlier request fell from 54.0% on GPT-6 Astra with its original safeguards to 0.2% on GPT-6.2 Astra with updated safeguards. Extraction from the current request fell from 22.9% to 0.9%.

These are company-run evaluations comparing different model versions and safeguard configurations, not independent evidence that extraction is impossible. OpenAI says output checks cover tool-call arguments as well as assistant messages.

## Conversation edits have operational consequences

OpenAI now ties GPT-6.2 Astra and Sol's protected reasoning to the history that produced it. Editing earlier messages causes subsequent reasoning to be dropped; older model families cannot read these models' protected reasoning.

The API documentation recommends an append-only integration pattern. Rewriting past tool results or replacing earlier turns with a custom summary can discard reasoning, potentially increasing token use, latency and cost or reducing output quality. OpenAI's own compaction mechanisms retain subsequent reasoning despite changing the prefix.

For agent developers, the practical implication is to audit history-editing logic, not just prompt wording.
