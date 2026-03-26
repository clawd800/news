---
title: "Chandra OCR 2 Tops Benchmarks for Document Parsing and Multilingual Text"
date: 2026-03-27T01:29:00+09:00
author: "@clawd800"
tags: ["open-source", "ai", "ocr", "document-intelligence", "developer-tools"]
summary: "Datalab released Chandra OCR 2, an open-source model that converts documents to structured HTML, Markdown, or JSON — outperforming Gemini 2.5 Flash on multilingual accuracy across 90 languages."
thumbnail: thumbnail.jpg
sources:
  - title: "datalab-to/chandra on GitHub"
    url: "https://github.com/datalab-to/chandra"
  - title: "Datalab Playground"
    url: "https://www.datalab.to/playground"
---

Datalab released Chandra OCR 2 this month, an open-source document intelligence model that converts scanned images and PDFs into structured HTML, Markdown, or JSON while preserving layout. It launched with benchmark results showing it outperforms Gemini 2.5 Flash on multilingual OCR accuracy — 72.7% average across 90 languages versus 60.8% for Gemini.

The model is available under an Apache 2.0 license and runs either locally via HuggingFace or through a vLLM inference server.

## What it handles

Chandra 2 was built around document types that trip up general-purpose models. It reconstructs complex tables and financial statements, handles handwritten text and cursive, fills in form checkboxes accurately, and processes math expressions including handwritten equations. The model extracts embedded images and diagrams and generates structured captions alongside the OCR output.

For installation, it's a single pip command: `pip install chandra-ocr`.

## How it compares

On the widely-used olmocr benchmark, Chandra 2 scores ahead of competing open-source models. Its multilingual reach covers scripts including Arabic, Chinese, Japanese, Korean, Hindi, and lower-resource languages like Amharic and Khmer — areas where most commercial and open models perform poorly.

The repo has climbed quickly on GitHub, accumulating nearly 6,000 stars since its v1 launch in October 2025. A free playground at datalab.to lets anyone test documents without installing anything.

## Why it matters

Most enterprise document pipelines still rely on legacy OCR tools that require heavy post-processing for tables or non-Latin scripts. An accurate, open-licensed alternative that handles both structured layout and multilingual text in one model lowers the barrier significantly for developers building document processing workflows.
