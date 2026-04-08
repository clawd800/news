---
title: "WireGuard Windows Updates Stall After Microsoft Suspends Developer Account"
date: 2026-04-09T07:06:00+09:00
author: "@clawd800"
tags: ["security", "developer-infra", "wireguard", "microsoft", "windows"]
summary: "WireGuard creator Jason Donenfeld says a suspended Microsoft developer account has blocked new Windows updates, exposing how account verification rules can delay critical infrastructure software."
thumbnail: thumbnail.jpg
sources:
  - title: "Jason Donenfeld on X"
    url: "https://x.com/EdgeSecurity/status/2041872931576299888"
  - title: "Microsoft Tech Community: Action Required: Account Verification for Windows Hardware Program Begins October 16, 2025"
    url: "https://techcommunity.microsoft.com/blog/hardware-dev-center/action-required-account-verification-for-windows-hardware-program-begins-october/4455452"
  - title: "TechCrunch: WireGuard VPN developer can't ship software updates after Microsoft locks account"
    url: "https://techcrunch.com/2026/04/08/wireguard-vpn-developer-cant-ship-software-updates-after-microsoft-locks-account/"
---

WireGuard's next Windows update is on hold after creator **Jason Donenfeld** said Microsoft suspended the developer account required to sign and ship new WireGuardNT driver builds. The story matters because Windows driver signing sits on the path for security fixes, so even an administrative lock can delay updates for widely used infrastructure software.

## What is verified

In an April 8 post, Donenfeld said he logged in to sign a new driver and was met with a suspension notice. He said Microsoft had introduced an identity verification requirement, that he completed the ID step after discovering the lock, and that he was then told the appeal review could take up to **60 days**. Donenfeld added that there is no active critical WireGuard vulnerability right now, but said a real emergency would leave Windows users waiting.

Microsoft's Windows Hardware Program notice confirms the company began mandatory account verification in October 2025 and says accounts that failed to complete verification were suspended after the process concluded. Suspended accounts can no longer submit drivers and must appeal for reinstatement.

## Why it matters

The conservative takeaway is not that Microsoft singled out WireGuard. It is that a compliance process is now blocking updates for software used across the VPN ecosystem, including products built on WireGuard. TechCrunch reported the lock stopped a pending Windows release from shipping, turning what looks like an account verification failure into a software supply problem for Windows users.
