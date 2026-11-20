# Sand Hacks — sandhacks.com

SAND: Raiders of Sophie hacks site. Astro static build with optional Cloudflare Worker.

## Local development

```bash
npm ci
npm run dev
```

If Astro shows **“Tsconfig not found astro/tsconfigs/strict”**, stop the dev server, delete `node_modules`, and run `npm ci` again.

## Build

```bash
npm ci
npm run build
npm run preview
```

Build output: `dist/`.

## Notes

- Domain: `https://sandhacks.com`
- Product hub: `/products/sand-hacks/`
- Gameplay screenshots and OG images are placeholders until you add SAND media.
- Merchant checkout uses the existing affiliate tracker. Confirm the SAND catalog path before launch.