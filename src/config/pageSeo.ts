export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Once Human Hacks for PC | Aimbot, ESP & Radar',
    description:
      'Once Human Hacks for Windows PC. Compare aimbot, player ESP, creature ESP, and radar, then check live status before you buy. Confirm modules on checkout.',
  },
  '/products/once-human-hacks/': {
    title: 'Once Human Cheats | Complete Suite & Utilities',
    description:
      'Once Human Cheats for Windows PC. Open the Complete suite, then Cloud DMA, HWID Spoofer, and Skin Changer utilities before merchant checkout.',
  },
  '/products/once-human-hacks/complete/': {
    title: 'Once Human Hacks for PC | Complete Aimbot & ESP',
    description:
      'The complete Once Human Hacks suite lists aimbot, player ESP, creature ESP, item ESP, radar, and object ESP on one key. Confirm the live module list before you buy.',
  },
  '/products/once-human-hacks/cloud-dma/': {
    title: 'Cloud DMA | Single-PC Hyper-V Layer for Once Human',
    description:
      'Cloud DMA is the single-PC Hyper-V delivery layer for Once Human Hacks. DMA path, kernel bypass, automatic setup, plus GREENWARD, Static Server, and AWS listed separately.',
  },
  '/products/once-human-hacks/hwid-spoofer/': {
    title: 'HWID Spoofer | Cleaner for Once Human on PC',
    description:
      'HWID Spoofer lists hardware ID changes with a cleaner for Once Human. Confirm the live listing on checkout. Cloud DMA required for full use.',
  },
  '/products/once-human-hacks/skin-changer/': {
    title: 'Skin Changer | Weapon Skins & In-Game Cosmetics',
    description:
      'Skin Changer is listed as a lightweight cosmetic client for weapon skins and outfits. Windows 10/11, HVCI stack, Cloud DMA required. Confirm the live list on checkout.',
  },
  '/blog/': {
    title: 'Once Human Cheat Guides | Setup, Aimbot, ESP & Risk',
    description:
      'Once Human cheat guides for Windows PC: loader setup, aimbot tuning, ESP and radar layouts, account risk, and what to check after a game patch.',
  },
  '/reviews/': {
    title: 'Once Human Hacks Reviews | Aimbot, ESP & Loader',
    description:
      'Community reviews on Once Human Hacks covering loader setup, ESP clutter in settlements, creature tracking, and how keys arrived after checkout.',
  },
  '/forum/': {
    title: 'Once Human Hacks Forum | Loader, Aimbot, ESP & Patches',
    description:
      'Once Human Hacks forum: loader setup, aimbot FOV, world ESP, radar range, and patch-day notes from Windows PC players.',
  },
  '/faq/': {
    title: 'Once Human Cheat FAQ | Setup, Plans & Account Risk',
    description:
      'Once Human cheat FAQ: Windows requirements, aimbot vs ESP vs radar, Cloud DMA notes, HWID resets, and what to check after a Once Human update.',
  },
  '/terms/': {
    title: 'Terms | Once Human Hacks License, Delivery & Refunds',
    description:
      'Terms for buying Once Human Hacks on oncehumanhacks.com: license use, delivery, refunds, and account risk on Once Human for Windows PC.',
  },
  '/privacy/': {
    title: 'Privacy | Cookies & Contact Data on Once Human Hacks',
    description:
      'How oncehumanhacks.com uses analytics, cookies, and support messages when you browse Once Human Hacks pages. Checkout runs on the merchant site.',
  },
  '/about/': {
    title: 'About Once Human Hacks | Plans, Forums & Checkout',
    description:
      'About Once Human Hacks: independent Once Human cheat comparisons, forum threads, checkout paths, and FAQs for Windows PC players.',
  },
  '/support/': {
    title: 'Once Human Hacks Support | Loader, Keys & Checkout',
    description:
      'Support for Once Human Hacks: loader setup, HWID resets, billing questions, ticket checklist, email, and Discord help after you buy.',
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
