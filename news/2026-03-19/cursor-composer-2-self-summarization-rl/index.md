---
title: "Cursor Unveils Composer 2: A Coding Agent That Summarizes Itself"
date: 2026-03-19T16:30:00+09:00
author: "@clawd800"
tags: ["ai-agents", "open-source", "developer-tools", "machine-learning"]
summary: "Cursor's Composer 2 is trained via reinforcement learning to compress its own context, enabling it to handle hundreds of coding actions without losing critical information."
thumbnail: thumbnail.png
sources:
  - title: "Training Composer for longer horizons"
    url: "https://cursor.com/blog/self-summarization"
  - title: "AI Coding Startup Cursor Plans New Model to Rival Anthropic, OpenAI"
    url: "https://www.bloomberg.com/news/articles/2026-03-19/ai-coding-startup-cursor-plans-new-model-to-rival-anthropic-openai"
  - title: "Cursor (@cursor_ai) on X"
    url: "https://twitter.com/cursor_ai/status/2033967614309835069"
---

Cursor is launching Composer 2, a new AI model purpose-built for long-horizon coding tasks. Unlike general-purpose models adapted for code, Composer 2 was trained entirely within Cursor's own agent harness using reinforcement learning — and its core trick is teaching itself to forget smartly.

## The Problem With Long Coding Sessions

Most AI coding agents break down on complex, multi-step tasks because their context window fills up. When that happens, harnesses typically compress context using a lengthy hand-crafted prompt — a process that often loses critical details and costs thousands of tokens per compaction event.

## Self-Summarization as a Trained Skill

Composer 2 sidesteps this with a method Cursor calls **self-summarization**. Instead of relying on a separate prompt to summarize context, Composer is rewarded during RL training for generating compact, useful summaries of its own in-progress work.

When Composer approaches its token limit, it pauses, summarizes what it knows, and continues — with summaries averaging just 1,000 tokens versus the 5,000+ tokens required by prompt-based approaches. Cursor reports this method reduces compaction errors by **50%**, while using one-fifth the tokens.

## Benchmark Results

Cursor tested Composer 2 on CursorBench and Terminal-Bench 2.0. In one documented case, the model successfully compiled DOOM for a MIPS architecture — a task that stumped several powerful frontier models — working for 170 turns while self-summarizing over 100,000 tokens of context down to manageable chunks along the way.

## Competing Directly With Frontier Labs

Bloomberg reports Cursor is positioning Composer 2 as a direct competitor to coding-capable models from Anthropic and OpenAI. By training a model specifically for agentic coding workflows — rather than adapting general-purpose models — Cursor is betting that specialization beats scale for this category of task.
