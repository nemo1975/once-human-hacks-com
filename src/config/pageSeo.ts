export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Sand Hacks | SAND: Raiders of Sophie',
    description:
      'Sand Hacks covers SAND: Raiders of Sophie on Windows PC. Compare aimbot, player ESP, trampler ESP, and radar, then check live status before checkout.',
  },
  '/products/sand-hacks/': {
    title: 'SAND: Raiders of Sophie Hacks | Complete Suite & Utilities',
    description:
      'SAND: Raiders of Sophie Hacks for Windows PC. Open the Complete suite, then Cloud DMA, HWID Spoofer, and Skin Changer utilities before merchant checkout.',
  },
  '/products/sand-hacks/complete/': {
    title: 'Complete Sand Hacks Suite | Aimbot, ESP, Trampler & Radar',
    description:
      'The complete Sand Hacks suite lists aimbot, player ESP, trampler ESP, item ESP, radar, and object ESP on one key. Confirm the live module list before you buy.',
  },
  '/products/sand-hacks/cloud-dma/': {
    title: 'Cloud DMA | Single-PC Hyper-V Layer for Sand Hacks',
    description:
      'Cloud DMA is the single-PC Hyper-V delivery layer for Sand Hacks. DMA path, kernel bypass, automatic setup, plus GREENWARD, Static Server, and AWS listed separately.',
  },
  '/products/sand-hacks/hwid-spoofer/': {
    title: 'HWID Spoofer | Cleaner for SAND: Raiders of Sophie',
    description:
      'HWID Spoofer lists hardware ID changes with a cleaner for SAND: Raiders of Sophie. Confirm the live listing on checkout. Cloud DMA required for full use.',
  },
  '/products/sand-hacks/skin-changer/': {
    title: 'Skin Changer | Weapon Skins & In-Game Cosmetics',
    description:
      'Skin Changer is listed as a lightweight cosmetic client for weapon skins and outfits. Windows 10/11, HVCI stack, Cloud DMA required. Confirm the live list on checkout.',
  },
  '/blog/': {
    title: 'Sand Hacks Guides | Setup, Aimbot, ESP & Extracts',
    description:
      'Sand Hacks guides for SAND: Raiders of Sophie: loader setup, aimbot tuning, ESP and radar layouts, account risk, and what to check after a game patch.',
  },
  '/reviews/': {
    title: 'Sand Hacks Reviews | Aimbot, ESP & Loader',
    description:
      'Community reviews on Sand Hacks for SAND: Raiders of Sophie covering loader setup, ESP clutter on extracts, trampler tracking, and how keys arrived after checkout.',
  },
  '/forum/': {
    title: 'Sand Hacks Forum | Loader, Aimbot, ESP & Patch Talk',
    description:
      'Sand Hacks forum for SAND: Raiders of Sophie: loader setup, aimbot FOV, trampler ESP, radar range, and patch-day notes from Windows PC players.',
  },
  '/faq/': {
    title: 'Sand Hacks FAQ | Setup, Plans & Account Risk',
    description:
      'Sand Hacks FAQ: Windows requirements, aimbot vs ESP vs radar, Cloud DMA notes, HWID resets, and what to check after a SAND: Raiders of Sophie update.',
  },
  '/terms/': {
    title: 'Terms | Sand Hacks License, Delivery & Refunds',
    description:
      'Terms for buying Sand Hacks on sandhacks.com: license use, delivery, refunds, and account risk on SAND: Raiders of Sophie for Windows PC.',
  },
  '/privacy/': {
    title: 'Privacy | Cookies & Contact Data on Sand Hacks',
    description:
      'How sandhacks.com uses analytics, cookies, and support messages when you browse Sand Hacks pages. Checkout runs on the merchant site.',
  },
  '/about/': {
    title: 'About Sand Hacks | SAND: Raiders of Sophie Plans',
    description:
      'About Sand Hacks: independent SAND: Raiders of Sophie Hacks comparisons, forum threads, checkout paths, and FAQs for Windows PC players.',
  },
  '/support/': {
    title: 'Sand Hacks Support | Loader, Keys & Checkout Help',
    description:
      'Support for Sand Hacks: loader setup, HWID resets, billing questions, ticket checklist, email, and Discord help after you buy SAND: Raiders of Sophie Hacks.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
