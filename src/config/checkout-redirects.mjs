/** Checkout destinations keyed by internal product id. */
export const CHECKOUT_URLS = {
  cs2: 'https://zadeyo.com/go/AMAN?to=%2Fproducts%2Fonce-human',
  sand: 'https://zadeyo.com/go/AMAN?to=%2Fproducts%2Fonce-human',
  onceHuman: 'https://zadeyo.com/go/AMAN?to=%2Fproducts%2Fonce-human',
  cloudDma: 'https://zadeyo.com/go/AMAN?to=%2Fproducts%2Fcloud-dma',
  hwidSpoofer: 'https://zadeyo.com/go/AMAN?to=%2Fproducts%2Fhwid-spoofer',
  skinChanger: 'https://zadeyo.com/go/AMAN?to=%2Fproducts%2Fskin-changer',
};

export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/cs2', CHECKOUT_URLS.onceHuman],
  ['/go/cs2/', CHECKOUT_URLS.onceHuman],
  ['/go/sand', CHECKOUT_URLS.onceHuman],
  ['/go/sand/', CHECKOUT_URLS.onceHuman],
  ['/go/once-human', CHECKOUT_URLS.onceHuman],
  ['/go/once-human/', CHECKOUT_URLS.onceHuman],
  ['/go/csgo', CHECKOUT_URLS.onceHuman],
  ['/go/csgo/', CHECKOUT_URLS.onceHuman],
  ['/go/battlefield-6', CHECKOUT_URLS.onceHuman],
  ['/go/battlefield-6/', CHECKOUT_URLS.onceHuman],
  ['/go/fortnite', CHECKOUT_URLS.onceHuman],
  ['/go/fortnite/', CHECKOUT_URLS.onceHuman],
  ['/go/skin-changer', CHECKOUT_URLS.skinChanger],
  ['/go/skin-changer/', CHECKOUT_URLS.skinChanger],
  ['/go/cloud-dma', CHECKOUT_URLS.cloudDma],
  ['/go/cloud-dma/', CHECKOUT_URLS.cloudDma],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/ugc', CHECKOUT_URLS.onceHuman],
  ['/go/ugc/', CHECKOUT_URLS.onceHuman],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
