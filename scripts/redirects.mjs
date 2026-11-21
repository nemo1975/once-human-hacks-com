/** Static path redirects (301). Keys are pathname without query/hash. */
const HUB = '/products/once-human-hacks/';
const COMPLETE = '/products/once-human-hacks/complete/';

export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', HUB],
  ['/cheats/', HUB],
  ['/cheats/lite', HUB],
  ['/cheats/lite/', HUB],
  ['/cheats/pro', HUB],
  ['/cheats/pro/', HUB],
  ['/cheats/elite', COMPLETE],
  ['/cheats/elite/', COMPLETE],
  ['/cheats/compare', '/forum/'],
  ['/cheats/compare/', '/forum/'],
  ['/products/sand-hacks', HUB],
  ['/products/sand-hacks/', HUB],
  ['/products/csgo-cheats', HUB],
  ['/products/csgo-cheats/', HUB],
  ['/products/fortnite-cheats', HUB],
  ['/products/fortnite-cheats/', HUB],
  ['/products/dota-2-cheats', HUB],
  ['/products/dota-2-cheats/', HUB],
  ['/products/battlefield-6-cheats', HUB],
  ['/products/battlefield-6-cheats/', HUB],
  ['/products/cs2-cheats', HUB],
  ['/products/cs2-cheats/', HUB],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
