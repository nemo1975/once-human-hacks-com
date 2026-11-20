import { t } from '../i18n';
import { checkoutForSlug } from '../config/checkout';
import { PRODUCT_BASE } from '../config/site';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedForumSlugs: string[];
}

/** Forum threads paired with each product detail page */
export const productRelatedForumSlugs: Record<string, string[]> = {
  complete: [
    'aimbot-smoothness-and-fov-sweet-spot',
    'esp-boxes-too-bright-at-night-maps',
    'save-config-profiles-between-pcs',
    'patch-day-menu-not-opening',
    'trampler-extract-esp-in-cities',
  ],
  aimbot: [
    'aimbot-smoothness-and-fov-sweet-spot',
    'head-vs-chest-bone-priority',
    'triggerbot-vs-full-aim-sniper',
    'first-loader-setup-windows-11',
    'patch-day-menu-not-opening',
  ],
  'esp-radar': [
    'esp-boxes-too-bright-at-night-maps',
    'skeleton-esp-fps-drop-1080ti',
    'trampler-extract-esp-in-cities',
    'obs-game-capture-showing-overlay',
    'head-vs-chest-bone-priority',
    'how-long-wait-after-game-update',
  ],
  'cloud-dma': [
    'first-loader-setup-windows-11',
    'patch-day-menu-not-opening',
    'defender-exclusion-for-loader',
  ],
  'hwid-spoofer': [
    'new-pc-license-transfer-hwid',
    'first-loader-setup-windows-11',
    'payment-pending-no-key-yet',
  ],
  'skin-changer': [
    'first-loader-setup-windows-11',
    'obs-game-capture-showing-overlay',
    'patch-day-menu-not-opening',
  ],
};

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Check status',
    desc: 'Confirm Sand Hacks is online on our status banner before you buy, especially right after a SAND: Raiders of Sophie update.',
  },
  {
    num: '02',
    title: 'Pick a plan',
    desc: 'Open Complete Sand Hacks on this site, then pick a duration on the merchant checkout page. We do not show prices here.',
  },
  {
    num: '03',
    title: 'Pay securely',
    desc: 'Checkout runs on the merchant site. Your key unlocks in the portal with updates during your license window.',
  },
  {
    num: '04',
    title: 'Install & extract',
    desc: 'Download the loader from your portal, load a conservative preset, and launch SAND: Raiders of Sophie. Discord support is there if setup looks off.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'SAND: Raiders of Sophie receives frequent Early Access updates. Confirm module availability on the live status panel before you purchase or launch. Overlay density and aim settings that work on empty dunes may need retuning for contested cities after patches.';

const sharedLimitations =
  'Third-party software in SAND: Raiders of Sophie can violate the game rules and can lead to kicks, matchmaking penalties, or account action. You use this software at your own risk. Compatibility and availability can change after SAND or Windows updates without notice. No seller can guarantee a permanent undetected status.';

const sandSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Windows 10 or Windows 11 (64-bit), as listed on the merchant page.' },
  { icon: 'reqEpic', text: 'SAND: Raiders of Sophie on PC. Apply the latest game patch before launch.' },
  { icon: 'reqCpu', text: 'Intel or AMD CPU, as listed on the merchant product page.' },
  { icon: 'reqWifi', text: 'Stable internet for key delivery, portal access, and loader updates.' },
  { icon: 'reqSettings', text: 'Merchant listing also notes HVCI, Core Isolation, TPM, and Secure Boot ON. Confirm on checkout.' },
];

const utilityLimitations =
  'Third-party software can violate SAND game rules and can lead to kicks or account action. You use this software at your own risk. Compatibility and availability can change after SAND or Windows updates. Feature lists follow the merchant product pages. No seller can guarantee a permanent undetected status.';

const utilityVerificationNote =
  'Feature lists on this page follow the merchant listing. Confirm the live module list, extra required products, and Windows notes on checkout. We do not treat shop copy as independent lab verification.';

const cloudDmaModules = [
  'Single-PC Cloud DMA layer',
  'Hyper-V virtual environment',
  'Encrypted activation link',
  'DMA memory layer',
  'Kernel-bypass path',
  'Automatic installer setup',
  'No second physical tower',
  'No USB DMA bridge or PCIe DMA card',
] as const;

const cloudDmaRequiredAddons = [
  'GREENWARD — separate purchase (required)',
  'Static Server — separate purchase (required)',
  'AWS — separate purchase (required)',
  'Static Server and AWS are two different products; both are required',
] as const;

const hwidCoreModules = [
  'Hardware spoofer (cleaner included)',
  'Changes disk serials, MAC addresses, GPU IDs, and related IDs',
  'Cleanup steps before you launch SAND: Raiders of Sophie',
  'Cloud DMA required for full functionality',
] as const;

const hwidSandModules = [
  'SAND: Raiders of Sophie',
  'Confirm the live listing on merchant checkout',
  'This site covers SAND: Raiders of Sophie only',
] as const;

const skinChangerModules = [
  'Lightweight cosmetic client',
  'Weapon skins',
  'In-game cosmetics and outfits',
  'Windows 10 and Windows 11',
  'HVCI, Core Isolation, TPM, and Secure Boot ON',
  'Cloud DMA required for full functionality',
] as const;

const cloudDmaSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Windows 10 / 11 (64-bit).' },
  { icon: 'reqCpu', text: 'CPU virtualization (Intel VT-x or AMD-V) enabled in firmware for Hyper-V.' },
  { icon: 'reqSettings', text: 'Ability to enable the Hyper-V role during guided setup. Windows Pro/Enterprise/Education recommended; follow installer notes for your edition.' },
  { icon: 'reqRestorePoint', text: 'Minimum 8 GB system RAM (16 GB recommended).' },
  { icon: 'reqWifi', text: 'Stable broadband for activation and ongoing service connectivity.' },
  { icon: 'reqShieldGuide', text: 'Single-PC setup — not listed as compatible with a second physical tower or external DMA box.' },
  { icon: 'reqMailOrder', text: 'GREENWARD, Static Server, and AWS are listed as separate required purchases. Static Server and AWS are two different products; you need both.' },
];

const hwidSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Windows 10 / 11 (64-bit).' },
  { icon: 'reqSettings', text: 'Administrator rights for spoof and cleanup steps.' },
  { icon: 'reqWifi', text: 'Stable internet for activation and updates.' },
  { icon: 'reqShieldGuide', text: 'Follow the merchant guide before launching SAND: Raiders of Sophie.' },
  { icon: 'reqShieldAccount', text: 'Cloud DMA is listed as required for full functionality on supported builds.' },
];

const skinChangerSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Windows 10 and Windows 11 both supported.' },
  { icon: 'reqSettings', text: 'Merchant listing notes HVCI ON, Core Isolation ON, TPM ON, and Secure Boot ON.' },
  { icon: 'reqShieldAccount', text: 'Cloud DMA is listed as required for full functionality. Features on supported builds run through Cloud DMA.' },
];

function utilityAcquisition(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: [
      {
        num: '01',
        title: 'Read the listing',
        desc: `Confirm ${productName} matches your Windows setup and that any required extras (especially Cloud DMA) are listed on checkout.`,
      },
      {
        num: '02',
        title: 'Choose a duration',
        desc: 'Pick a license window on the merchant checkout page. We do not show prices here.',
      },
      {
        num: '03',
        title: 'Pay securely',
        desc: 'Checkout runs on the merchant site. Your key unlocks in the portal after payment clears.',
      },
      {
        num: '04',
        title: 'Install from the portal',
        desc: 'Download only from your account portal, follow the current setup guide, and open a ticket if Hyper-V, spoof order, or loader steps look off.',
      },
    ],
  };
}

/** Merchant-listed aimbot options (zadeyo SAND: Raiders of Sophie product page). */
const aimbotModules = [
  'Customizable aim hotkey',
  'Adjustable FOV',
  'Bone selection',
  'Humanized aiming trajectories',
  'Aim prediction',
  'Visibility checks',
  'Dynamic FOV',
  'Aim smoothing',
  'Team filtering',
  'Maximum target distance',
] as const;

const playerEspModules = [
  'Player ESP',
  'NPC ESP',
  'Enemy identification',
  'Team identification',
  'Player nickname',
  'Account ID',
  'Distance display',
  'Health display',
  'Shield display',
  'Held item display',
  'Player kit information',
  '2D boxes',
  'Corner boxes',
  'Skeleton ESP',
  'Head indicators',
  'Direction indicators',
  'Snaplines',
  'Maximum ESP distance',
] as const;

const tramplerModules = [
  'Player Trampler tracking',
  'NPC Trampler tracking',
  'Trampler loot visualization',
  'Trampler radar',
] as const;

const itemEspModules = [
  'Item ESP',
  'Weapons',
  'Ammunition',
  'Consumables',
  'Armor',
  'Backpacks',
  'Valuable items',
  'Keys',
  'Resources',
  'Explosives',
] as const;

const radarModules = [
  '2D radar',
  'Smooth radar rotation',
  'Radar labels',
  'Player indicators',
  'NPC indicators',
  'Trampler indicators',
  'Item indicators',
  'Object indicators',
  'Adjustable radar range',
  'Customizable radar size',
] as const;

const objectEspModules = [
  'Containers',
  'Lock and alarm boxes',
  'Weapon loot',
  'Medical loot',
  'Food loot',
  'Resource loot',
  'Valuable loot',
  'Shell loot',
  'Explosive barrels',
  'Naval mines',
  'Aurogen crystals',
  'Ladders',
  'Buried treasure',
  'Auto turrets',
  'Dreadnaught',
  'Trampler turrets',
  "Captain's quarters",
  'Corpse loot',
  'Projectile shields',
] as const;

const miscModules = [
  'Compass',
  'Smoothed compass heading',
  'Custom crosshair styles',
  'FPS display',
  'Time display',
  'Resolution display',
  'Custom menu key',
  'Panic key',
  'Configurable interface colors',
  'Configuration save and load',
] as const;

const visualModules = [...playerEspModules, ...tramplerModules, ...itemEspModules, ...radarModules, ...objectEspModules];

type GalleryKey = keyof typeof galleryRaw;

const gameplay = '/images/gameplay';

const galleryRaw = {
  gpEsp: {
    src: `${gameplay}/player-esp.png`,
    alt: 'SAND: Raiders of Sophie player ESP with a 2D box, skeleton, health bar, name, and distance',
    caption: 'Player ESP',
    captionDesc: 'Box, skeleton, health, name, and distance on a close-range raider.',
  },
  gpAimbot: {
    src: `${gameplay}/aimbot-fov.png`,
    alt: 'SAND: Raiders of Sophie aimbot FOV circle on a raider with skeleton ESP and held-weapon readout',
    caption: 'Aimbot FOV',
    captionDesc: 'FOV circle with skeleton ESP and weapon name on a ridge fight.',
  },
  gpSkeleton: {
    src: `${gameplay}/settlement-esp.png`,
    alt: 'SAND: Raiders of Sophie ESP labels, player box, and 2D radar over a desert settlement',
    caption: 'ESP at range',
    captionDesc: 'Player boxes, names, distances, and a 2D radar over a settlement.',
  },
  gpBox: {
    src: `${gameplay}/item-esp-radar.png`,
    alt: 'SAND: Raiders of Sophie item ESP, loot labels, and 2D radar on the dunes',
    caption: 'Radar & loot',
    captionDesc: 'Item ESP on crates and valuables with a 2D radar in the corner.',
  },
};

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
    };
  });
}

function slugFromHref(href: string): string {
  const segment = href.replace(PRODUCT_BASE, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'sand-hacks';
}

const featureVerificationNote =
  'Feature lists on this page follow the merchant product listing for SAND: Raiders of Sophie. Confirm the live module list on checkout. We do not treat competitor shop copy as independent lab verification.';

const tierAbout: Record<string, ProductPage['about']> = {
  complete: [
    {
      type: 'p',
      text: 'Complete Sand Hacks is the full SAND: Raiders of Sophie Hacks listing: aimbot, player ESP, trampler ESP, item ESP, radar, object ESP, and misc tools on one license. Use it when you extract on foot and aboard Tramplers instead of splitting aim and visuals across two keys.',
    },
    { type: 'h2', text: 'Built for Sophie extracts' },
    {
      type: 'p',
      text: 'Cities, dunes, wrecks, and walking fortresses need different ranges than a tight indoor fight. Save a tight city config and a longer-range dune config. Start with portal defaults before you raise FOV or ESP distance.',
    },
  ],
  aimbot: [
    {
      type: 'p',
      text: 'Aimbot modules on Complete cover the tracking options listed by the merchant: hotkey, FOV, bones, humanized trajectories, prediction, visibility checks, dynamic FOV, smoothing, team filters, and max distance.',
    },
    { type: 'h2', text: 'Tune before a contested extract' },
    {
      type: 'p',
      text: 'Keep FOV modest and visibility checks on until you understand how the pull looks in a clip. Pair this plan with ESP & Radar or Complete if you also need boxes, tramplers, and loot markers.',
    },
  ],
  'esp-radar': [
    {
      type: 'p',
      text: 'ESP & Radar covers player ESP, NPC ESP, trampler tracking, item ESP, object ESP, and the 2D radar. Pick this when map awareness on Sophie matters more than aim automation.',
    },
    { type: 'h2', text: 'Readable overlays at range' },
    {
      type: 'p',
      text: 'Cap ESP distance in dense cities. Use trampler radar on dunes. Test skeleton vs box layouts before you rely on them next to a Dreadnaught or auto turret nest.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  complete: [
    { type: 'h2', text: 'What Complete includes' },
    {
      type: 'p',
      text: featureVerificationNote,
    },
    { type: 'h2', text: 'Aimbot, visuals, and misc on one key' },
    {
      type: 'p',
      text: 'Aimbot options cover hotkey, FOV, bones, smoothing, prediction, visibility, team filters, and distance. Visual groups add players, NPCs, Tramplers, items, objects, and radar. Misc tools include compass, crosshair, FPS/time/resolution, menu and panic keys, colors, and config save/load.',
    },
    { type: 'h2', text: 'Upgrade path' },
    {
      type: 'p',
      text: 'If you start on Aimbot or ESP & Radar and want the full suite later, compare module lists on each product page and move to Complete through checkout when you are ready for every category on one key.',
    },
  ],
  aimbot: [
    { type: 'h2', text: 'Aimbot module breakdown' },
    {
      type: 'p',
      text: 'Enable aim with a custom hotkey, set FOV, pick bones, and use smoothing so the reticle does not slam. Prediction and visibility checks matter on Trampler decks and city alleys. Team filters keep squadmates out of the pull. Distance caps stop long-range snaps across empty dunes.',
    },
    { type: 'h2', text: 'Recommended pairing' },
    {
      type: 'p',
      text: 'Many players pair this plan with forum threads on smoothness and FOV before their first contested extract. If you need player boxes, tramplers, and loot, compare ESP & Radar or step up to Complete.',
    },
  ],
  'esp-radar': [
    { type: 'h2', text: 'Visual module breakdown' },
    {
      type: 'p',
      text: 'Player and NPC ESP share boxes, skeleton, health, shield, kit, names, and distance. Trampler ESP and radar cover walking bases. Item and object ESP mark weapons, keys, Aurogen, containers, Dreadnaught, captain’s quarters, and corpse loot. The 2D radar ties those layers together.',
    },
    { type: 'h2', text: 'Layout tips' },
    {
      type: 'p',
      text: 'Snaplines help orientation on vertical trampler interiors; boxes stay cleaner for capture tests. Save a city preset and a dune preset through the config system when you buy Complete, or add misc tools later if you only need visuals today.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  complete: {
    images: slide('gpEsp', 'gpAimbot', 'gpSkeleton', 'gpBox'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: sandSystemRequirements,
    fullFeatures: [...aimbotModules, ...visualModules, ...miscModules],
    overview: {
      title: 'Overview',
      paragraphs: [
        'SAND: Raiders of Sophie is an open-world PvPvE extraction shooter. Complete Sand Hacks lists aimbot, player ESP, trampler ESP, item ESP, radar, and object ESP so you read a raid instead of guessing behind a dune or a trampler hull.',
        'This plan follows the merchant listing for the full suite. Instant delivery and updates during your key are handled on the seller portal. Always re-check live status before launch, especially after a SAND update.',
        featureVerificationNote,
      ],
    },
  },
  aimbot: {
    images: slide('gpAimbot', 'gpEsp'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: sandSystemRequirements,
    fullFeatures: [...aimbotModules],
    overview: {
      title: 'SAND: Raiders of Sophie aimbot',
      paragraphs: [
        'Complete delivers the tracking modules listed by the merchant: hotkey, FOV, bones, humanized trajectories, prediction, visibility checks, dynamic FOV, smoothing, team filters, and max distance.',
        'Use FOV limits and visibility checks to keep locks readable on trampler decks and in city alleys. Pair with ESP & Radar or Complete if you want boxes, tramplers, and loot on the same key.',
      ],
    },
  },
  'esp-radar': {
    images: slide('gpEsp', 'gpSkeleton', 'gpBox'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: sandSystemRequirements,
    fullFeatures: [...visualModules],
    overview: {
      title: 'Sand Raiders Hacks ESP and radar',
      paragraphs: [
        'ESP & Radar includes player and NPC overlays, trampler tracking, item ESP, object ESP, and a 2D radar with adjustable range and size.',
        'Tune colors and distance before a contested extract. The gallery shows player boxes, skeleton ESP, loot labels, and the 2D radar from SAND: Raiders of Sophie raids.',
      ],
    },
  },
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    if (!content) {
      throw new Error(`Missing product content for cheat slug "${slug}"`);
    }
    const displayName = cheat.title;
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(displayName),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedForumSlugs: productRelatedForumSlugs[slug] ?? [],
    };
  });
}

const utilityGallery = {
  dma: {
    src: '/images/addons/cloud-dma.png',
    alt: 'Cloud DMA — single-PC Hyper-V delivery layer',
    caption: 'Cloud DMA layer',
    captionDesc: 'Single-PC Hyper-V Cloud DMA layer. Required for full spoofer and skin-changer functionality.',
  },
  spoofer: {
    src: '/images/addons/hwid-spoofer.png',
    alt: 'HWID Spoofer — hardware identifier change with included cleaner',
    caption: 'Hardware IDs',
    captionDesc: 'Listed hardware spoofer with cleaner. Cloud DMA required.',
  },
  skins: {
    src: '/images/addons/skin-changer.png',
    alt: 'Skin Changer — weapon skins and in-game cosmetics client',
    caption: 'Cosmetics',
    captionDesc: 'Listed cosmetic client for weapon skins and outfits. Cloud DMA required.',
  },
} as const;

function utilitySlide(key: keyof typeof utilityGallery): ProductSlide[] {
  const item = utilityGallery[key];
  return [{ src: item.src, alt: item.alt, caption: item.caption, captionDesc: item.captionDesc }];
}

function buildUtilityPages(): ProductPage[] {
  return [
    {
      slug: 'cloud-dma',
      kind: 'utility',
      badge: 'Required layer',
      category: 'DMA hardware',
      name: 'Cloud DMA',
      title: 'Cloud DMA',
      subtitle:
        'Single-PC Cloud DMA layer: Hyper-V on this machine, encrypted activation, and a DMA / kernel-bypass path. Not a second tower or USB/PCIe DMA box.',
      desc: 'Single-PC Cloud DMA layer with Hyper-V, encrypted activation, and a DMA / kernel-bypass path. GREENWARD, Static Server, and AWS are listed as separate required purchases.',
      features: [
        'Single-PC Hyper-V layer',
        'DMA and kernel-bypass path',
        'Encrypted activation link',
        'Automatic installer setup',
        'No second PC or DMA box',
      ],
      more: 7,
      variant: 'essential',
      buyUrl: checkoutForSlug('cloud-dma'),
      images: utilitySlide('dma'),
      overview: {
        title: 'Cloud DMA overview',
        paragraphs: [
          'Cloud DMA is listed as the infrastructure layer that powers the Sand Hacks stack on a single gaming PC. The installer provisions a Hyper-V virtual environment on that machine and uses an encrypted service link for activation.',
          'This product is only the Cloud DMA layer. It is not listed as a second physical tower, USB DMA bridge, or PCIe DMA card. Catalog access is bundled around this delivery model.',
          utilityVerificationNote,
        ],
      },
      acquisition: utilityAcquisition('Cloud DMA'),
      goodToKnow:
        'Merchant listing also requires GREENWARD, Static Server, and AWS as separate purchases. Static Server and AWS are two different products; both are required. None of those are included in the Cloud DMA checkout.',
      limitations: utilityLimitations,
      fullFeatures: [...cloudDmaModules, ...cloudDmaRequiredAddons],
      systemRequirements: cloudDmaSystemRequirements,
      about: [
        {
          type: 'p',
          text: 'Use Cloud DMA when the merchant stack for Sand Hacks is delivered through a single-PC Hyper-V layer instead of a second box. If you are unsure whether your Windows edition supports Hyper-V, confirm before you purchase.',
        },
        { type: 'h2', text: 'What this key does not include' },
        {
          type: 'p',
          text: 'Aimbot, ESP, and radar live on the Sand Hacks plans. Cloud DMA is the delivery layer. GREENWARD, Static Server, and AWS stay on their own checkout items.',
        },
      ],
      body: [
        { type: 'h2', text: 'Delivery model' },
        {
          type: 'p',
          text: 'One Windows PC, an automatic Hyper-V layer on that machine, and a service link. The merchant lists DMA and kernel-bypass chips plus automatic setup. Confirm the live chips on checkout.',
        },
        { type: 'h2', text: 'Separate required products' },
        {
          type: 'p',
          text: 'GREENWARD, Static Server, and AWS are listed as required and sold separately. Static Server and AWS are not the same product. Keys are personal and must not be shared.',
        },
      ],
      relatedForumSlugs: productRelatedForumSlugs['cloud-dma'] ?? [],
    },
    {
      slug: 'hwid-spoofer',
      kind: 'utility',
      badge: 'Cleaner included',
      category: 'System utility',
      name: 'HWID Spoofer',
      title: 'HWID Spoofer',
      subtitle:
        'Hardware identifier spoofer with cleaner for SAND: Raiders of Sophie. Included cleaner, Cloud DMA required.',
      desc: 'Hardware spoofer with cleaner for SAND: Raiders of Sophie. Confirm the live listing on checkout. Cloud DMA is required for full functionality.',
      features: [
        'Hardware spoofer (cleaner included)',
        'SAND: Raiders of Sophie',
        'Identifier cleanup',
        'Cloud DMA required',
      ],
      more: 8,
      variant: 'essential',
      buyUrl: checkoutForSlug('hwid-spoofer'),
      images: utilitySlide('spoofer'),
      overview: {
        title: 'HWID Spoofer overview',
        paragraphs: [
          'The merchant lists this as a hardware spoofer for HWID identifier changes, including disk serials, MAC addresses, GPU IDs, and related IDs, with cleanup steps included.',
          'This site covers SAND: Raiders of Sophie only. Confirm the live listing on checkout before you pay.',
          'Cloud DMA is listed as required for full functionality. Run spoof and cleanup before launching SAND: Raiders of Sophie, and follow the current portal guide for step order.',
        ],
      },
      acquisition: utilityAcquisition('HWID Spoofer'),
      goodToKnow:
        'A cleaner is included in the hardware spoofer listing. Administrator rights are required. This is not a substitute for confirming the SAND: Raiders of Sophie listing on checkout before you pay.',
      limitations: utilityLimitations,
      fullFeatures: [
        ...hwidCoreModules,
        ...hwidSandModules,
      ],
      systemRequirements: hwidSystemRequirements,
      about: [
        {
          type: 'p',
          text: 'Use the spoofer when you need a hardware identifier change after a listed HWID restriction, or when moving machines. It is a separate utility from Complete Sand Hacks.',
        },
        { type: 'h2', text: 'When to run it' },
        {
          type: 'p',
          text: 'Merchant notes say to run spoof and cleanup before launching SAND: Raiders of Sophie, then follow the current guide in your account or ticket channel.',
        },
      ],
      body: [
        { type: 'h2', text: 'SAND only' },
        {
          type: 'p',
          text: 'This listing is for SAND: Raiders of Sophie. Confirm the live notes on the merchant checkout page. This site does not cover other games.',
        },
        { type: 'h2', text: 'Cleaner' },
        {
          type: 'p',
          text: 'Hardware spoofing includes cleanup so leftover traces are cleared before you launch again. Confirm the live cleaner notes on checkout.',
        },
      ],
      relatedForumSlugs: productRelatedForumSlugs['hwid-spoofer'] ?? [],
    },
    {
      slug: 'skin-changer',
      kind: 'utility',
      badge: 'Cosmetics',
      category: 'Cosmetic',
      name: 'Skin Changer',
      title: 'Skin Changer',
      subtitle:
        'Lightweight cosmetic client for weapon skins and in-game outfits. Windows 10/11. Cloud DMA required for full functionality.',
      desc: 'Lightweight cosmetic client listed for weapon skins and in-game cosmetics. Windows 10/11, HVCI stack, Cloud DMA required.',
      features: [
        'Weapon skins',
        'In-game cosmetics and outfits',
        'Lightweight client',
        'Windows 10 and 11',
        'Cloud DMA required',
      ],
      more: 1,
      variant: 'essential',
      buyUrl: checkoutForSlug('skin-changer'),
      images: utilitySlide('skins'),
      overview: {
        title: 'Skin Changer overview',
        paragraphs: [
          'The merchant lists Skin Changer as a simple, lightweight tool for in-game cosmetics, including weapon skins and outfits, instead of buying each cosmetic in-store.',
          'The listing is thin compared with Sand Hacks aimbot and ESP pages. Confirm the live cosmetic list on checkout. Cloud DMA is required for full functionality on supported builds.',
          utilityVerificationNote,
        ],
      },
      acquisition: utilityAcquisition('Skin Changer'),
      goodToKnow:
        'Merchant system notes: Windows 10 and 11, HVCI ON, Core Isolation ON, TPM ON, Secure Boot ON, and Cloud DMA required. Cosmetic availability can change; trust the portal list.',
      limitations: utilityLimitations,
      fullFeatures: [...skinChangerModules],
      systemRequirements: skinChangerSystemRequirements,
      about: [
        {
          type: 'p',
          text: 'Pick Skin Changer when you want listed cosmetic control without the Sand Hacks aimbot or ESP suite. It does not replace Cloud DMA or the main hacks plans.',
        },
      ],
      body: [
        { type: 'h2', text: 'Listed cosmetics' },
        {
          type: 'p',
          text: 'Merchant copy describes control over weapon skins and in-game cosmetics. There is no separate public module grid on that listing, so we do not invent extra skin categories here.',
        },
        { type: 'h2', text: 'Cloud DMA' },
        {
          type: 'p',
          text: 'All features on supported builds are listed as running through Cloud DMA. Add that utility if you do not already have it.',
        },
      ],
      relatedForumSlugs: productRelatedForumSlugs['skin-changer'] ?? [],
    },
  ];
}

export const hackPages = buildTierPages().filter((page) => page.slug === 'complete');
export const utilityPages = buildUtilityPages();
export const productPages: ProductPage[] = [...hackPages, ...utilityPages];

export const cheatPages = hackPages;

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

export const heroSlides = slide('gpEsp', 'gpSkeleton', 'gpBox', 'gpAimbot');

export function getProductFeatureGroups(slug: string): { heading: string; desc?: string; features: readonly string[] }[] {
  if (slug === 'aimbot') {
    return [
      {
        heading: 'Aimbot features',
        desc: 'Merchant-listed tracking options. Confirm each toggle on checkout.',
        features: aimbotModules,
      },
    ];
  }
  if (slug === 'esp-radar') {
    return [
      { heading: 'Player ESP', desc: 'Raiders and NPCs through cover, with distance and kit readouts.', features: playerEspModules },
      { heading: 'Trampler ESP and radar', desc: 'Walking bases, trampler loot, and a dedicated trampler radar.', features: tramplerModules },
      { heading: 'Item ESP', desc: 'Weapons, ammo, kits, keys, and valuables on the ground or in reach.', features: itemEspModules },
      { heading: 'Radar features', desc: '2D radar with labels, rotation, and adjustable range.', features: radarModules },
      { heading: 'Object ESP', desc: 'Containers, POIs, naval threats, and extract-relevant world objects.', features: objectEspModules },
    ];
  }
  if (slug === 'cloud-dma') {
    return [
      {
        heading: 'Cloud DMA layer',
        desc: 'Single-PC Hyper-V delivery. Confirm each chip on checkout.',
        features: cloudDmaModules,
      },
      {
        heading: 'Separate required products',
        desc: 'Listed as required and sold separately from this Cloud DMA key.',
        features: cloudDmaRequiredAddons,
      },
    ];
  }
  if (slug === 'hwid-spoofer') {
    return [
      { heading: 'Hardware spoofer', desc: 'Identifier change plus included cleaner. Cloud DMA required.', features: hwidCoreModules },
      { heading: 'SAND: Raiders of Sophie', desc: 'This site covers SAND only. Confirm the live listing on checkout.', features: hwidSandModules },
    ];
  }
  if (slug === 'skin-changer') {
    return [
      {
        heading: 'Cosmetic features',
        desc: 'Thin merchant listing. Confirm the live cosmetic set on checkout.',
        features: skinChangerModules,
      },
    ];
  }
  return [
    { heading: 'Aimbot features', desc: 'Hotkey, FOV, bones, smoothing, prediction, and visibility checks.', features: aimbotModules },
    { heading: 'Player ESP', desc: 'Players and NPCs: boxes, skeleton, health, shield, kit, and distance.', features: playerEspModules },
    { heading: 'Trampler ESP and radar', desc: 'Player and NPC Tramplers, loot visualization, and trampler radar.', features: tramplerModules },
    { heading: 'Item ESP', desc: 'Weapons, ammo, consumables, armor, backpacks, keys, resources, explosives.', features: itemEspModules },
    { heading: 'Radar features', desc: '2D radar with player, NPC, trampler, item, and object indicators.', features: radarModules },
    { heading: 'Object ESP', desc: 'Containers, Aurogen, Dreadnaught, captain’s quarters, turrets, and more.', features: objectEspModules },
    { heading: 'Miscellaneous settings', desc: 'Compass, crosshair, displays, menu/panic keys, colors, and configs.', features: miscModules },
  ];
}

export const productHub = {
  path: PRODUCT_BASE,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description:
    'SAND: Raiders of Sophie Hacks for Windows PC: the Complete suite plus Cloud DMA, HWID Spoofer, and Skin Changer utilities.',
  buyUrl: checkoutForSlug('sand-hacks'),
};
