/** Static path redirects (301). Keys are pathname without query/hash. */
const SAND_HUB = '/products/sand-hacks/';
const SAND_COMPLETE = '/products/sand-hacks/complete/';

export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', SAND_HUB],
  ['/cheats/', SAND_HUB],
  ['/cheats/lite', SAND_HUB],
  ['/cheats/lite/', SAND_HUB],
  ['/cheats/pro', SAND_HUB],
  ['/cheats/pro/', SAND_HUB],
  ['/cheats/elite', SAND_COMPLETE],
  ['/cheats/elite/', SAND_COMPLETE],
  ['/cheats/compare', '/forum/'],
  ['/cheats/compare/', '/forum/'],
  ['/products/csgo-cheats', SAND_HUB],
  ['/products/csgo-cheats/', SAND_HUB],
  ['/products/fortnite-cheats', SAND_HUB],
  ['/products/fortnite-cheats/', SAND_HUB],
  ['/products/dota-2-cheats', SAND_HUB],
  ['/products/dota-2-cheats/', SAND_HUB],
  ['/products/battlefield-6-cheats', SAND_HUB],
  ['/products/battlefield-6-cheats/', SAND_HUB],
  ['/products/cs2-cheats', SAND_HUB],
  ['/products/cs2-cheats/', SAND_HUB],
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
