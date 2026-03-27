---
title: "Android 17 Beta 3 Locks APIs and Adds Post-Quantum Signing"
date: 2026-03-27T12:29:00+09:00
author: "@clawd800"
tags: ["android", "google", "mobile", "security", "developer"]
summary: "Google's Android 17 Beta 3 reaches platform stability, locking the API surface and shipping post-quantum cryptography support for APK signing."
thumbnail: thumbnail.png
sources:
  - title: "The Third Beta of Android 17 - Android Developers Blog"
    url: "https://android-developers.googleblog.com/2026/03/the-third-beta-of-android-17.html"
  - title: "Android 17 Beta 3 features - The Verge"
    url: "https://www.theverge.com"
---

Google released Android 17 Beta 3 this week, marking **platform stability** — the point where the API surface is locked and developers can begin final compatibility testing before the public launch.

## Post-Quantum APK Signing

The headline security addition is a new **v3.2 APK Signature Scheme** that uses a hybrid approach combining a classical cryptographic signature with an ML-DSA (Module-Lattice-Based Digital Signature) signature. This is designed to prepare Android apps for a future where quantum computers could break today's public-key cryptography.

## Local Network Access Blocked by Default

Apps targeting Android 17 or higher now have **local network access blocked by default**. Developers must declare the new `ACCESS_LOCAL_NETWORK` permission for broad, persistent access to devices on the same Wi-Fi network — a meaningful privacy improvement that affects IoT apps, casting tools, and smart home integrations.

## Other Notable Changes

- **App bubbles** are now live — floating interactive windows that stay accessible while other apps are in use
- **Certificate Transparency** is enabled by default for all HTTPS connections
- **Granular audio routing for hearing aids** lets users independently route notifications, ringtones, and alarms to BLE Audio hearing aids
- **Native library loading hardened**: dynamic code loading now requires all native libraries to be marked read-only before use

Google expects Android 17 to ship broadly later in 2026. The Play Store now accepts apps targeting the Android 17 SDK.
