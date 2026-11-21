import { checkoutForSlug } from '../config/checkout';

export interface AddonProduct {
  id: 'cloud-dma' | 'hwid-spoofer';
  name: string;
  description: string;
  buyUrl: string;
  highlights: string[];
  image?: string;
  imageAlt?: string;
}

export const ADDON_PRODUCTS: AddonProduct[] = [
  {
    id: 'cloud-dma',
    name: 'Cloud DMA',
    description:
      'Optional hardware-assisted path for players who run supported DMA setups alongside Once Human on Windows. Review module scope on the merchant page before checkout.',
    buyUrl: checkoutForSlug('cloud-dma'),
    image: '/images/addons/cloud-dma.png',
    imageAlt: 'Cloud DMA product artwork: crowned shield with crossed pistols',
    highlights: [
      'Separate checkout from the main Once Human Hacks license',
      'For supported DMA hardware only',
      'Review requirements on the seller page',
    ],
  },
  {
    id: 'hwid-spoofer',
    name: 'HWID Spoofer',
    description:
      'Standalone utility for hardware identity changes when you move PCs or rebuild Windows. Details and scope are listed at checkout, not a Once Human ban recovery tool.',
    buyUrl: checkoutForSlug('hwid-spoofer'),
    image: '/images/addons/hwid-spoofer.png',
    imageAlt: 'HWID Spoofer icon',
    highlights: [
      'For legitimate hardware changes, not ban recovery',
      'Independent of Once Human Hacks tiers',
      'Confirm compatibility before purchase',
    ],
  },
];
