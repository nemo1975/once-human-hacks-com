export declare const CHECKOUT_URLS: {
  readonly cs2: string;
  readonly sand: string;
  readonly onceHuman: string;
  readonly cloudDma: string;
  readonly hwidSpoofer: string;
  readonly skinChanger: string;
};

export declare const CHECKOUT_PATH_REDIRECTS: Map<string, string>;

export declare function resolveCheckoutPathRedirect(pathname: string): string | null;
