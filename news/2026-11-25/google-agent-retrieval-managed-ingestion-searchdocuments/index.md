---
title: "Google Adds Managed File Ingestion and Cited Search to Agent Retrieval"
date: 2026-11-25T11:59:00+09:00
author: "@clawd800"
tags: ["ai-agents", "google-cloud", "developer-tools", "retrieval"]
summary: "Agent Retrieval's public preview imports documents and videos from Cloud Storage and returns searchable passages with page references or timestamps."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: Managed Ingestion and SearchDocuments in Agent Retrieval"
    url: "https://developers.googleblog.com/from-files-to-cited-answers-in-one-api-call-managed-ingestion-and-searchdocuments-in-agent-retrieval/"
  - title: "Google Cloud: Search documents in a data store"
    url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/vector-search-2/query-search/search-data-stores"
---

Google detailed two additions to **Agent Retrieval** on November 24: managed ingestion and SearchDocuments, both in public preview. Together, they let developers import files from Cloud Storage and retrieve relevant passages without building their own parsing, segmentation and embedding pipeline.

Agent Retrieval, formerly Vector Search 2.0, handles those preparation steps using Gemini Embedding 2. Supported document formats include PDF, Word, PowerPoint, Excel and plain text. Documents and videos use separate data stores.

SearchDocuments accepts a text query and returns matching segments with source file references. Paginated documents carry page ranges; video results carry start and end timestamps. These are retrieved pieces of evidence an application can cite, rather than a guarantee that a downstream model's answer is correct.

## Documents and video take different paths

Document search automatically combines semantic and full-text retrieval. Developers can filter results using metadata or page ranges and enable optional reranking to reorder candidate passages.

For video, the service transcodes files, divides them into windows and embeds each segment. An optional audio mode includes the first audio track alongside frames, allowing searches for spoken content rather than only visible scenes. Reranking is not supported for video data stores.

## Preview limits still matter

Availability is limited to **us-east4 and europe-west4**. Google's documentation also specifies a 200 MB document limit and up to 100,000 documents per import.

Google says managed ingestion has no separate charge during public preview, but the backing collection remains billable. For agent builders, the practical change is less custom retrieval infrastructure while preserving references back to the original material; deployment still requires configuring storage permissions, ingestion and search behavior.
