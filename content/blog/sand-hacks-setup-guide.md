---
title: "Sand Hacks Setup Guide: Loader, Portal, and First Raid"
description: "Step-by-step Sand Hacks setup for SAND on Windows—checkout, portal loader, borderless video, first-run status check, and support when inject fails."
slug: sand-hacks-setup-guide
date: 2026-09-28
updated: 2026-11-10
category: Setup
keywords: [sand hacks setup, sand hacks loader, sand hacks guide, install sand hacks]
heroImage: /images/blog/player-esp.png
faq:
  - q: "Do I install files into the SAND folder?"
    a: "No. The external loader runs outside the game directory per product FAQ."
  - q: "What video mode should I use?"
    a: "Borderless windowed is the common fix when inject waits forever."
  - q: "When should I open the in-game menu?"
    a: "After the main menu loads, not at the splash screen."
---

This setup guide is for PC players who already chose a Sand Hacks tier on sandhacks.com and need a clean first session on Sophie without guessing launch order.

Third-party tools can conflict with SAND updates. Check live status before every step below.

## Before checkout

1. Confirm Windows 10 or 11 64-bit.
2. Read [account risk](/blog/sand-hacks-account-risk/) and accept that bans are possible.
3. Pick [Complete](/products/sand-hacks/complete/) on the [product hub](/products/sand-hacks/), then add Cloud DMA, HWID Spoofer, or Skin Changer only if those utilities match your setup.
4. Finish payment on the merchant checkout page linked from the site.

## Portal and download

After payment:

1. Log into the operator portal with your order email.
2. Download the loader only from the portal—never from Discord DMs.
3. Create a dedicated folder (for example `C:\SandHacks\`) and add it to Windows Defender exclusions if SmartScreen blocks the file. Forum thread: [Defender exclusion](/forum/defender-exclusion-for-loader/).
4. Read any pinned build notes in Discord #status.

## Video and launch order

Most “waiting for game window” tickets are solved with:

1. Set SAND to **borderless windowed** (not exclusive fullscreen).
2. Launch the game manually and wait for the **main menu**.
3. Start the loader **after** the menu is visible.
4. Use the merchant-listed **custom menu key** once inject succeeds.

Close RGB tools, FPS overlays, and random injectors that hook DirectX.

## First config pass

Do not import a random config from a forum post on day one.

1. Open the menu in a private test space or quiet scav run.
2. Set **panic key** and **menu key** first.
3. If you bought ESP, cap **max ESP distance** and disable skeleton if FPS drops ([performance thread](/forum/skeleton-esp-fps-drop-1080ti/)).
4. If you bought aimbot, set **visibility check** on and **smoothing** high before touching FOV ([settings guide](/blog/sand-aimbot-settings/)).
5. Save a baseline slot per [config presets](/blog/sand-hacks-config-presets/).

## Verify modules match your tier

Open the feature list inside the menu and compare it to your checkout receipt. Complete should list aimbot, ESP, trampler, radar, and misc groups. If something is missing, screenshot the portal build version and open [support](/support/).

## Patch-day discipline

When SAND updates:

1. Stop raiding immediately if status flips offline.
2. Download the portal build support links when #status says online.
3. Re-test menu key before you reuse old FOV or ESP range values.

Details: [troubleshooting](/blog/sand-hacks-troubleshooting/) and [patch wait thread](/forum/how-long-wait-after-game-update/).

## HWID and second PC

License keys bind to hardware. If you rebuild Windows or buy a new PC, use portal HWID reset or follow [HWID reset guide](/blog/sand-hwid-reset/). Optional [HWID Spoofer](https://zadeyo.com/go/AMAN?to=%2Fproducts%2Fhwid-spoofer) is a separate merchant product—not required for a normal PC swap if reset works.

## Stream and capture test

Before you broadcast a city run, record 20 seconds locally and confirm overlays do not leak. See [OBS thread](/forum/obs-game-capture-showing-overlay/).

## When to ask for help

Open Discord or email [support](/support/) with:

- Order email
- Tier name
- Windows version
- Exact loader error text
- Whether status showed online when you launched

## Next reads

- [Sand Hacks plans](/blog/sand-hacks-plans/)
- [ESP and radar layouts](/blog/sand-esp-and-radar/)
- [Extract and Trampler notes](/blog/sand-extracts-and-tramplers/)
- [Full FAQ](/faq/)

## Troubleshooting quick table

| Symptom | First fix |
| ------- | --------- |
| Waiting for game window | Borderless + inject after menu |
| Menu dead after patch | Status online → new portal build |
| Defender quarantine | Folder exclusion → re-download |
| Modules missing | Blank preset → tier list |
| FPS drop downtown | Skeleton off, distance down |

Full walkthrough: [troubleshooting](/blog/sand-hacks-troubleshooting/).

## Duo setup

If both squadmates run Sand Hacks, agree who runs wider item ESP and who runs combat presets. Duplicate Trampler radar callouts are noisy. One caller, one cleaner HUD.

## Account hygiene

Use a checkout email you control long-term. Enable portal 2FA if the merchant offers it. Store HWID reset confirmations in the same mailbox so support tickets stay short.