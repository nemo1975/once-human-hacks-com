# Search Console workflow (sandhacks.com)

You verify the domain at your DNS provider. No HTML meta tags in the repo.

## Setup (once)

1. Open [Google Search Console](https://search.google.com/search-console) and add the **domain** property for `sandhacks.com` if it is not already there.
2. Under **Sitemaps**, submit the index first:
   - `https://sandhacks.com/sitemap.xml`
3. Optional child sitemaps:
   - `https://sandhacks.com/sitemap-pages.xml`
   - `https://sandhacks.com/sitemap-0.xml` (or whatever Astro emits after build)
4. Repeat in [Bing Webmaster Tools](https://www.bing.com/webmasters) if you use Bing.

This file is a checklist. Pages are not submitted until you complete the steps in Search Console.

## Monthly tune (15 minutes)

1. Search Console → **Performance** → **Search results**.
2. Sort by **Impressions** (last 28 days).
3. For each query that already maps to a page, open the matching path in [`src/config/pageSeo.ts`](../src/config/pageSeo.ts).
4. Adjust `title` and `description` so the primary query appears naturally in the title (keep under ~60 characters where possible).
5. Deploy. Allow 1–2 weeks before judging click-through changes.

## Path cheat sheet

| Common query intent | Edit path in `pageSeo.ts` |
| ------------------- | ------------------------- |
| Sand Hacks | `/` |
| Sand Hacks Download | `/products/sand-hacks/` |
| Sand Hacks Features | `/products/sand-hacks/complete/` |
| Cloud DMA | `/products/sand-hacks/cloud-dma/` |
| HWID Spoofer | `/products/sand-hacks/hwid-spoofer/` |
| Skin Changer | `/products/sand-hacks/skin-changer/` |
| Sand Guides | `/blog/` |
| Sand Hacks FAQ | `/faq/` |