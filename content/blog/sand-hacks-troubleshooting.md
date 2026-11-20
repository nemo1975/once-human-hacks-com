---
title: "Sand Hacks Troubleshooting: Loader, Menu, and Inject Fixes"
description: "Fix common Sand Hacks issues on SAND—waiting for game window, menu key dead, missing modules, Defender blocks, and patch-day build swaps."
slug: sand-hacks-troubleshooting
date: 2026-08-20
updated: 2026-10-28
category: Support
keywords: [sand hacks not working, sand hacks troubleshoot, sand loader fix, sand hacks menu]
heroImage: /images/blog/item-esp-radar.png
faq:
  - q: "Loader stuck on waiting for game window?"
    a: "Use borderless windowed and inject after the main menu loads."
  - q: "Menu key stopped working after a patch?"
    a: "Check status, download the latest portal build, rebind menu key."
  - q: "Defender deleted the loader?"
    a: "Exclude only the portal download folder and re-download from the portal."
---

Most Sand Hacks tickets are repetitive—which is good, because fixes are repetitive too. Work through this list before you open Discord.

## Loader: waiting for game window

1. Set SAND to borderless windowed.
2. Close overlays (Discord overlay, MSI Afterburner on-screen, etc.).
3. Launch game to main menu, then start loader.
4. Run loader as administrator only if portal docs say so—admin is not a universal fix.

Thread: [first loader setup](/forum/first-loader-setup-windows-11/).

## Menu key does nothing

Check in order:

1. Homepage and #status—are you offline after a patch?
2. Portal build version—download current file.
3. Rebind **custom menu key** in misc; keyboard locale can break defaults.
4. Panic key stuck? Toggle overlays off and on.

Patch thread: [menu not opening](/forum/patch-day-menu-not-opening/).

## Inject works but modules missing

Compare in-menu feature list to your Complete receipt. If modules look wrong, you likely imported someone else’s config. Load a blank preset and enable only merchant-listed modules.

## Defender / SmartScreen

1. Add exclusion for portal download folder only.
2. Re-download from portal.
3. Never unblock random zips from forums.

Thread: [Defender exclusion](/forum/defender-exclusion-for-loader/).

## Payment succeeded, portal empty

Wait a few minutes for card processing. If still empty, ticket with receipt ID—same as [payment pending thread](/forum/payment-pending-no-key-yet/).

## FPS collapse in cities

- Disable skeleton ESP
- Lower max ESP distance
- Shrink radar range

Thread: [1080 Ti skeleton FPS](/forum/skeleton-esp-fps-drop-1080ti/).

## Aim feels dead but ESP works

- Confirm visibility check is not blocking every angle
- Raise FOV slightly
- Verify aim hotkey is hold vs toggle as expected

Settings: [aimbot guide](/blog/sand-aimbot-settings/).

## Stream capture leaking overlays

Record local clip; adjust capture mode or disable ESP before going live.

Thread: [OBS capture](/forum/obs-game-capture-showing-overlay/).

## When to stop self-help

Contact [support](/support/) if:

- Loader crashes with a specific error code
- HWID reset greyed out with active time on key
- Modules mismatch checkout after a fresh blank config

Include order email, tier, Windows version, build hash if shown.

## Preventive habits

- Check status before every raid
- Export configs before patches
- Keep one conservative preset labeled `post-patch-test`

## Links

- [Setup guide](/blog/sand-hacks-setup-guide/)
- [HWID reset](/blog/sand-hwid-reset/)
- [Account risk](/blog/sand-hacks-account-risk/)
- [Product hub](/products/sand-hacks/)

## Error phrases and meaning

**“Waiting for game window”** — launch order or video mode.

**“Inject failed”** — often outdated build or blocker software.

**“Key invalid”** — HWID mismatch; reset or support.

**“Module init failed”** — half-updated build; download fresh portal file.

Write the exact string in tickets; paraphrasing slows fixes.

## Clean reinstall path

When chaos compounds: uninstall loader copy, delete folder, exclude in Defender, download newest portal zip, test with stock game settings before reimporting configs.