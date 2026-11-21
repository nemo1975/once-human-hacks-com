import { defineMiddleware } from 'astro:middleware';
import { resolveCheckoutPathRedirect } from './config/checkout-redirects.mjs';

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);
  const destination = resolveCheckoutPathRedirect(url.pathname);
  if (destination) {
    return context.redirect(destination, 302);
  }

  const productRewrites: Array<[string, string]> = [
    ['/products/sand-hacks', '/products/once-human-hacks'],
    ['/products/csgo-cheats', '/products/once-human-hacks'],
    ['/products/battlefield-6-cheats', '/products/once-human-hacks'],
    ['/products/fortnite-cheats', '/products/once-human-hacks'],
    ['/products/dota-2-cheats', '/products/once-human-hacks'],
    ['/products/cs2-cheats', '/products/once-human-hacks'],
  ];

  for (const [from, to] of productRewrites) {
    if (url.pathname === from || url.pathname.startsWith(`${from}/`)) {
      const rest = url.pathname
        .replace(from, to)
        .replace('/esp-wallhack', '/complete')
        .replace('/esp-radar', '/complete')
        .replace('/aimbot', '/complete');
      return context.redirect(rest.endsWith('/') ? rest : `${rest}/`, 301);
    }
  }

  if (
    url.pathname.includes('/esp-wallhack') ||
    url.pathname === '/products/once-human-hacks/aimbot' ||
    url.pathname === '/products/once-human-hacks/aimbot/' ||
    url.pathname === '/products/once-human-hacks/esp-radar' ||
    url.pathname === '/products/once-human-hacks/esp-radar/'
  ) {
    const rest = url.pathname
      .replace('/esp-wallhack', '/complete')
      .replace('/esp-radar', '/complete')
      .replace('/aimbot', '/complete');
    return context.redirect(rest.endsWith('/') ? rest : `${rest}/`, 301);
  }

  return next();
});
