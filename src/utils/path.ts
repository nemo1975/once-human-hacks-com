import { PRODUCT_BASE } from '../config/site';

/** Normalize internal paths to match trailingSlash: 'always' and canonical URLs. */
export function withTrailingSlash(path: string): string {
  if (!path || path.startsWith('http') || path.startsWith('#') || path.startsWith('mailto:')) {
    return path;
  }
  const [pathname, hash = ''] = path.split('#');
  const normalized = pathname === '/' || pathname.endsWith('/') ? pathname : `${pathname}/`;
  return hash ? `${normalized}#${hash}` : normalized;
}

/** Legacy URL map → current Once Human Hacks routes. */
export const LEGACY_PATH_MAP: Record<string, string> = {
  '/cheats': PRODUCT_BASE,
  '/cheats/': PRODUCT_BASE,
  '/cheats/lite': PRODUCT_BASE,
  '/cheats/lite/': PRODUCT_BASE,
  '/cheats/pro': PRODUCT_BASE,
  '/cheats/pro/': PRODUCT_BASE,
  '/cheats/elite': `${PRODUCT_BASE}complete/`,
  '/cheats/elite/': `${PRODUCT_BASE}complete/`,
  '/cheats/compare': '/forum/',
  '/cheats/compare/': '/forum/',
  '/contact': '/support/',
  '/contact/': '/support/',
  '/products/csgo-cheats': PRODUCT_BASE,
  '/products/csgo-cheats/': PRODUCT_BASE,
  '/products/battlefield-6-cheats': PRODUCT_BASE,
  '/products/battlefield-6-cheats/': PRODUCT_BASE,
  '/products/sand-hacks': PRODUCT_BASE,
  '/products/sand-hacks/': PRODUCT_BASE,
  '/products/sand-hacks/complete': `${PRODUCT_BASE}complete/`,
  '/products/sand-hacks/complete/': `${PRODUCT_BASE}complete/`,
  '/products/sand-hacks/cloud-dma': `${PRODUCT_BASE}cloud-dma/`,
  '/products/sand-hacks/cloud-dma/': `${PRODUCT_BASE}cloud-dma/`,
  '/products/sand-hacks/hwid-spoofer': `${PRODUCT_BASE}hwid-spoofer/`,
  '/products/sand-hacks/hwid-spoofer/': `${PRODUCT_BASE}hwid-spoofer/`,
  '/products/sand-hacks/skin-changer': `${PRODUCT_BASE}skin-changer/`,
  '/products/sand-hacks/skin-changer/': `${PRODUCT_BASE}skin-changer/`,
  '/products/sand-hacks/esp-wallhack': `${PRODUCT_BASE}complete/`,
  '/products/sand-hacks/esp-wallhack/': `${PRODUCT_BASE}complete/`,
  '/products/sand-hacks/aimbot': `${PRODUCT_BASE}complete/`,
  '/products/sand-hacks/aimbot/': `${PRODUCT_BASE}complete/`,
  '/products/sand-hacks/esp-radar': `${PRODUCT_BASE}complete/`,
  '/products/sand-hacks/esp-radar/': `${PRODUCT_BASE}complete/`,
};

export function normalizeInternalPath(href: string): string {
  if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('/go/')) {
    return href;
  }

  const hashIndex = href.indexOf('#');
  const rawPath = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : '';

  let pathname = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
  pathname = LEGACY_PATH_MAP[pathname] ?? pathname;

  return withTrailingSlash(pathname) + hash;
}

export const ROUTES = {
  home: '/',
  blog: '/blog/',
  forum: '/forum/',
  reviews: '/reviews/',
  products: PRODUCT_BASE,
  productsComplete: `${PRODUCT_BASE}complete/`,
  faq: '/faq/',
  terms: '/terms/',
  about: '/about/',
  support: '/support/',
  privacy: '/privacy/',
} as const;

export function productPath(slug: string): string {
  return `${PRODUCT_BASE}${slug}/`;
}

/** @deprecated Use productPath — cheat tier pages live under products. */
export function cheatPath(slug: string): string {
  return productPath(slug);
}
