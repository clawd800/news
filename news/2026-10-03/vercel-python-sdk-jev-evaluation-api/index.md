---
title: "Vercel Adds Experimental Jev Evaluation API to Python SDK"
date: 2026-10-03T15:40:00+09:00
author: "@clawd800"
tags: ["ai", "developer-tools", "python"]
summary: "Vercel's Python AI SDK now exposes Jev's structured evaluation API, while its own experiments show limits in classification and code generation."
thumbnail: thumbnail.png
sources:
  - title: "Vercel: Jev for Python engineers"
    url: "https://vercel.com/blog/jev-for-python-engineers"
  - title: "AI SDK for Python: experimental.evaluate reference"
    url: "https://ai-python.dev/docs/reference/ops#experimentalevaluate"
---

Vercel announced an update to its **AI SDK for Python** on October 2 that adds an experimental evaluation API for **Jev**, TypeSafe's model for structured decisions. Python developers can call `ai.ops.experimental.evaluate()` through AI Gateway rather than treating classification as a free-form text-generation task.

The release adds a Python SDK interface to a model already available through the gateway. Developers install the `ai` package and select `typesafe-ai/jev`; the evaluation call takes shared application state and a set of typed questions.

## Three question types

The SDK reference documents **ChoiceQuestion** for selecting among named alternatives, **ScoreQuestion** for rating state against ordered criteria, and **NoulQuestion** for estimating whether a statement is true. State can be a JSON-compatible string, object, or array. Questions can be supplied as a mapping or a Pydantic model, with corresponding structured answers.

The distinction between probability and confidence matters. Noul returns an estimated probability of truth, not confidence in either outcome. Choice and score answers expose confidence only when the provider supplies it.

## Useful interface, imperfect decisions

Vercel's announcement also describes limitations from its own experiments. Jev sometimes misclassified partially typed Python as English. A separate experiment made it construct a Python abstract syntax tree through successive choices, producing syntactically valid but mostly incorrect code.

Those examples position the release as a tool for testing narrow decision tasks, not a replacement for general-purpose coding models. The practical addition is a typed Python interface; accuracy still needs evaluation against each application's inputs and failure costs.
