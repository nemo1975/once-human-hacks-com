import { CHECKOUT_URLS } from './checkout-redirects.mjs';

export const CHECKOUT = CHECKOUT_URLS;

export type CheckoutProduct = keyof typeof CHECKOUT;

export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  cs2: 'cs2',
  sand: 'sand',
  onceHuman: 'once-human',
  cloudDma: 'cloud-dma',
  hwidSpoofer: 'hwid-spoofer',
  skinChanger: 'skin-changer',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

/** Direct merchant checkout URL — use on all purchase buttons and CTAs. */
export function merchantCheckoutUrl(product: CheckoutProduct = 'onceHuman'): string {
  return CHECKOUT[product];
}

export const PRIMARY_CHECKOUT_PATH = merchantCheckoutUrl('onceHuman');

/** Internal path; middleware and `_redirects` 302 to merchant checkout (blog / legacy links). */
export function checkoutPath(product: CheckoutProduct = 'onceHuman'): string {
  return `/go/${CHECKOUT_SLUGS[product]}/`;
}

const SLUG_TO_CHECKOUT: Record<string, CheckoutProduct> = {
  'cloud-dma': 'cloudDma',
  'hwid-spoofer': 'hwidSpoofer',
  'skin-changer': 'skinChanger',
};

export function checkoutForSlug(slug: string): string {
  return merchantCheckoutUrl(SLUG_TO_CHECKOUT[slug] ?? 'onceHuman');
}

export function resolveCheckoutHref(href: string): string {
  if (!href.startsWith('http')) {
    return href.startsWith('/') ? href : `/${href}`;
  }

  for (const [product, url] of Object.entries(CHECKOUT) as [CheckoutProduct, string][]) {
    if (href === url || href.startsWith(`${url}?`) || href.startsWith(`${url}/`)) {
      return merchantCheckoutUrl(product);
    }
  }

  return merchantCheckoutUrl('onceHuman');
}
