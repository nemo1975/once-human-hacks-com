# Once Human Hacks — oncehumanhacks.com

Once Human hacks site. Astro static build with optional Cloudflare Worker.

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

- Domain: `https://oncehumanhacks.com`
- Product hub: `/products/once-human-hacks/`
- Gameplay and blog images use the Once Human overlay captures in `scripts/assets/gameplay/`.
- Merchant checkout uses the existing affiliate tracker. Confirm the Once Human catalog path before launch.
