---
title: "Signal Adds Mobile Screen-Capture Protections Against OS-Level AI Agents"
date: 2026-11-22T08:02:00+09:00
author: "@clawd800"
tags: ["ai-agents", "privacy", "security"]
summary: "Signal is restricting screen capture on iOS 27 and supported Android devices to limit AI-agent access, while warning that the protections remain incomplete."
thumbnail: thumbnail.jpg
sources:
  - title: "Signal: Signal is Serious About Protecting Your Privacy"
    url: "https://signal.org/blog/protecting-your-privacy/"
  - title: "TechCrunch: Signal restricts mobile screenshots as it confronts AI surveillance"
    url: "https://techcrunch.com/2026/11/21/signal-restricts-mobile-screenshots-as-it-confronts-existential-threat-of-ai-surveillance/"
---

Signal is extending screen-capture restrictions to mobile devices to limit operating-system AI agents' access to private conversations. Its announcement describes protections for **iOS 27** and Android versions where the app can detect an AI assistant attempting to capture screen data. TechCrunch separately reported the changes on November 21.

The move follows Signal's earlier use of screenshot blocking on Windows to prevent Microsoft Recall from recording messages by default. Signal says screen-reading assistants create a similar risk on phones: message content can leave the app's privacy boundary after an operating-system service captures it.

## Different protections across platforms

On iOS 27, Signal says it is preventing screenshots inside the app. On supported Android devices, its approach focuses on detecting an AI assistant's attempt to access the screen and enabling the app's Screen security setting.

That distinction matters: this is not a uniform guarantee across every Android device. Signal also says it cannot reliably block screenshots on macOS, leaving that platform outside these protections.

Users can disable the restrictions in Signal's settings to restore screenshot functionality. Signal warns that doing so could expose their conversations, including other participants' messages, to AI agents.

## Screenshot blocking is not complete isolation

Signal acknowledges that blocking screenshots does not close every route by which agents might access application data. It is asking operating-system providers for documented controls that let developers exclude apps from AI processing across screen reading, filesystem access, notifications and other interfaces.

The announcement highlights a concrete integration problem for agent developers: protecting encrypted communications also requires controls over what privileged software can read after messages reach a device.
