---
title: "Sand Hacks Config Presets: City, Dunes, and Trampler Decks"
description: "Build Sand Hacks config presets for SAND—city extracts, open dunes, Trampler decks, and Dreadnaught runs with save/load and cloud backup."
slug: sand-hacks-config-presets
date: 2026-09-05
updated: 2026-11-01
category: Settings
keywords: [sand hacks config, sand hacks presets, sand config save, sand hacks profiles]
heroImage: /images/blog/aimbot-fov.png
faq:
  - q: "How many presets should I keep?"
    a: "Three baselines—city, dunes, Trampler deck—beats one mega config."
  - q: "Does cloud sync work across PCs?"
    a: "After HWID reset, cloud configs can follow your license; export files as backup."
  - q: "Should aim and ESP share one preset?"
    a: "Complete users often split aim on/off presets even on one license."
---

Config save/load is listed in Sand Hacks misc modules for a reason: Sophie is three games stitched together—tight cities, open dunes, and vertical Trampler decks. One preset across all of them is how you end up with desert FOV in a captain quarters hallway.

## Naming convention

Use boring names you will recognize after midnight:

- `city-extract-safe`
- `dune-ridge`
- `trampler-deck`
- `duo-support-esp-only`

Store them in the portal cloud slot and export a local `.cfg` backup monthly.

## City extract preset

Goals: readable HUD, short radar range, no flashy skeleton.

Suggested starting points (tune to taste):

- Player ESP: corner boxes, distance on, nicknames off
- Max ESP distance: low
- Item ESP: keys + valuables on, everything else off
- Radar: small size, medium-low range
- Object ESP: containers + captain quarters as needed
- Aimbot (if enabled): small FOV, high smoothing, visibility on, team filter on

Test on a contested extract stair fight, not in menu idle.

## Dune crossing preset

Goals: spot ridge fighters early, avoid clutter on horizons.

- Raise max ESP distance modestly
- Direction indicators on
- Trampler radar on if you cut through industrial shortcuts
- Aimbot distance cap higher than city profile
- Compass and smoothed heading on if you own Complete misc

Pair with routing advice in [extracts and Tramplers](/blog/sand-extracts-and-tramplers/).

## Trampler deck preset

Goals: deck angles, loot visualization, turret awareness.

- Trampler loot visualization on
- Player ESP skeleton optional; prefer boxes near ladders
- Object ESP: Trampler turrets + explosive barrels
- Aimbot: hold hotkey only, chest bone, tiny FOV
- Panic key confirmed

## Dreadnaught / naval preset

When running naval arcs:

- Object ESP toggles for Dreadnaught, mines, projectile shields
- Lower snapline usage—vertical lanes are busy enough
- Radar range medium; you still need deck callouts not minimap chaos

## Duo support preset

One player runs fuller ESP; the other runs minimal overlays and aim. Team filter on both. Share radar ranges so callouts match reality.

## Patch-day reset ritual

After SAND updates:

1. Duplicate last-known-good preset with date suffix (`city-extract-2026-11-01`).
2. Reset FOV and ESP distance to conservative defaults.
3. Raid once in scav before pushing valuables.

## Import etiquette

Do not paste unknown configs from random forums on a main account. Malicious configs can bind scam menu keys. Build from [setup guide](/blog/sand-hacks-setup-guide/) baselines.

## Hardware swap

Changing PC? [HWID reset](/blog/sand-hwid-reset/) first, then pull cloud configs. Forum: [two PC sync](/forum/save-config-profiles-between-pcs/).

## Product links

- [Complete](/products/sand-hacks/complete/) for all groups in one license
- [ESP and radar guide](/blog/sand-esp-and-radar/) for awareness-only presets
- [Aimbot settings](/blog/sand-aimbot-settings/) for aim-only slots

## See also

- [Aimbot settings](/blog/sand-aimbot-settings/)
- [ESP and radar](/blog/sand-esp-and-radar/)
- [Troubleshooting](/blog/sand-hacks-troubleshooting/)

## Weekly maintenance

Every Sunday (or your patch day): duplicate active presets with a date stamp, export to disk, and delete configs you have not opened in two weeks. Clutter breeds mistakes when panic key stops working because you loaded the wrong profile.

## Colorblind-friendly palettes

Use configurable colors for team ID and valuables. Default green/red may be unreadable on Sophie sand tones. Test presets at noon and night in-game before you save.

## Sharing presets with squad

Export files, not screenshots. Send the text config through Discord DMs you trust, not public channels. Remind partners to strip HWID-specific notes before import.