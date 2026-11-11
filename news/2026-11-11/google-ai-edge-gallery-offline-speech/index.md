---
title: "Google AI Edge Gallery Adds Offline Speech Recognition and Read-Aloud"
date: 2026-11-11T12:00:00+09:00
author: "@clawd800"
tags: ["google", "on-device-ai", "speech", "developer-tools"]
summary: "Google adds local speech input and output to AI Edge Gallery, with an open-source reference pipeline for voice chat and camera-based language tutoring."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: On-Device Speech Recognition and Text-to-Speech in Google AI Edge Gallery"
    url: "https://developers.googleblog.com/on-device-speech-recognition-and-text-to-speech-in-google-ai-edge-gallery/"
  - title: "Google AI Edge Gallery: Official GitHub README"
    url: "https://github.com/google-ai-edge/gallery/blob/main/README.md"
---

Google announced on November 10 that **AI Edge Gallery now supports on-device speech recognition and text-to-speech**, adding an offline voice interface to its local AI demonstrations. The release combines speech models with Gemini Nano or Gemma 4 so users can dictate questions and hear spoken responses without sending each interaction to a cloud service.

The app's AI Chat feature adds microphone input and read-aloud playback. Users can choose speech engines, voices, and languages, while sentence highlighting lets them follow a response or jump to a particular sentence. Google's public repository also documents the new speech controls and voice-enabled chat.

## A reference pipeline for local voice apps

Google is offering two integration paths. Android developers can use ML Kit's platform-integrated speech APIs. Cross-platform developers can use MediaPipe Tasks and LiteRT with open-weight speech models, including Parakeet for recognition and PocketTTS or Kokoro for synthesis.

The open-source implementation also handles practical presentation problems: removing Markdown syntax from spoken responses, skipping code and tables, and scheduling speech synthesis at sentence boundaries alongside language-model generation.

An **XR Language Teacher** showcase connects camera input, voice questions, spoken explanations, and vocabulary cards. Google's repository describes using it on a phone or with supported Android XR glasses.

For developers, the concrete addition is a reusable example of a complete local voice loop, not just another model download. The announcement's speed and power figures remain Google's own measurements; actual performance and feature availability depend on the chosen model, integration path, and device.
