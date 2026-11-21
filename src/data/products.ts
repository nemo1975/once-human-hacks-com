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
    'world-esp-in-settlements',
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
    'world-esp-in-settlements',
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
    desc: 'Confirm Once Human Hacks is online on our status banner before you buy, especially right after a Once Human update.',
  },
  {
    num: '02',
    title: 'Pick a plan',
    desc: 'Open Complete Once Human Hacks on this site, then pick a duration on the merchant checkout page. We do not show prices here.',
  },
  {
    num: '03',
    title: 'Pay securely',
    desc: 'Checkout runs on the merchant site. Your key unlocks in the portal with updates during your license window.',
  },
  {
    num: '04',
    title: 'Install & play',
    desc: 'Download the loader from your portal, load a conservative preset, and launch Once Human. Discord support is there if setup looks off.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'Once Human receives frequent client updates. Confirm module availability on the live status panel before you purchase or launch. Overlay density and aim settings that work in open terrain may need retuning for dense settlements after patches.';

const sharedLimitations =
  'Third-party software in Once Human can violate the game rules and can lead to kicks, matchmaking penalties, or account action. You use this software at your own risk. Compatibility and availability can change after Once Human or Windows updates without notice. No seller can guarantee a permanent undetected status.';

const onceHumanSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Windows 10 or Windows 11 (64-bit), as listed on the merchant page.' },
  { icon: 'reqEpic', text: 'Once Human on PC. Apply the latest game patch before launch.' },
  { icon: 'reqCpu', text: 'Intel or AMD CPU, as listed on the merchant product page.' },
  { icon: 'reqWifi', text: 'Stable internet for key delivery, portal access, and loader updates.' },
  { icon: 'reqSettings', text: 'Merchant listing also notes HVCI, Core Isolation, TPM, and Secure Boot ON. Confirm on checkout.' },
];

const utilityLimitations =
  'Third-party software can violate Once Human game rules and can lead to kicks or account action. You use this software at your own risk. Compatibility and availability can change after Once Human or Windows updates. Feature lists follow the merchant product pages. No seller can guarantee a permanent undetected status.';

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
  'GREENWARD (separate purchase, required)',
  'Static Server (separate purchase, required)',
  'AWS (separate purchase, required)',
  'Static Server and AWS are two different products; both are required',
] as const;

const hwidCoreModules = [
  'Hardware spoofer (cleaner included)',
  'Changes disk serials, MAC addresses, GPU IDs, and related IDs',
  'Cleanup steps before you launch Once Human',
  'Cloud DMA required for full functionality',
] as const;

const hwidOnceHumanModules = [
  'Once Human',
  'Confirm the live listing on merchant checkout',
  'This site covers Once Human only',
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
  { icon: 'reqShieldGuide', text: 'Single-PC setup. Not listed as compatible with a second physical tower or external DMA box.' },
  { icon: 'reqMailOrder', text: 'GREENWARD, Static Server, and AWS are listed as separate required purchases. Static Server and AWS are two different products; you need both.' },
];

const hwidSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Windows 10 / 11 (64-bit).' },
  { icon: 'reqSettings', text: 'Administrator rights for spoof and cleanup steps.' },
  { icon: 'reqWifi', text: 'Stable internet for activation and updates.' },
  { icon: 'reqShieldGuide', text: 'Follow the merchant guide before launching Once Human.' },
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

/** Merchant-listed aimbot options. */
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

const creatureModules = [
  'Creature tracking',
  'NPC creature tracking',
  'Creature loot visualization',
  'Creature radar',
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
  'Creature indicators',
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
  'Ammo crates',
  'Explosive barrels',
  'Auto turrets',
  'Corpse loot',
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

const visualModules = [...playerEspModules, ...creatureModules, ...itemEspModules, ...radarModules, ...objectEspModules];

type GalleryKey = keyof typeof galleryRaw;

const gameplay = '/images/gameplay';

const galleryRaw = {
  gpEsp: {
    src: `${gameplay}/player-esp.png`,
    alt: 'Once Human creature ESP box and distance on a large monster',
    caption: 'Creature ESP',
    captionDesc: 'White box and distance on a large creature, with nearby monster labels.',
  },
  gpAimbot: {
    src: `${gameplay}/aimbot-fov.png`,
    alt: 'Once Human aimbot FOV circle on a loot crate with monster and storage box ESP',
    caption: 'Aimbot FOV',
    captionDesc: 'FOV circle on a marked crate, with monster and storage box distance labels.',
  },
  gpSkeleton: {
    src: `${gameplay}/settlement-esp.png`,
    alt: 'Once Human storage box ESP labels through a window across nearby buildings',
    caption: 'ESP at range',
    captionDesc: 'Storage box and box labels through a window, with a FOV circle in the frame.',
  },
  gpBox: {
    src: `${gameplay}/item-esp-radar.png`,
    alt: 'Once Human item ESP and monster ESP labels on a street',
    caption: 'Item ESP',
    captionDesc: 'Storage box, box, and monster distance labels across a street.',
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
  return segment || 'once-human-hacks';
}

const featureVerificationNote =
  'Feature lists on this page follow the merchant product listing for Once Human. Confirm the live module list on checkout. We do not treat competitor shop copy as independent lab verification.';

const tierAbout: Record<string, ProductPage['about']> = {
  complete: [
    {
      type: 'p',
      text: 'Complete Once Human Hacks is the full Once Human listing: aimbot, player ESP, creature ESP, item ESP, radar, object ESP, and misc tools on one license. Use it for PvP fights, PvE hunts, and loot runs on the same key.',
    },
    { type: 'h2', text: 'Built for Once Human sessions' },
    {
      type: 'p',
      text: 'Settlements, open terrain, and PvP zones need different ranges than a tight indoor fight. Save a tight settlement config and a longer-range open-world config. Start with portal defaults before you raise FOV or ESP distance.',
    },
  ],
  aimbot: [
    {
      type: 'p',
      text: 'Aimbot modules on Complete cover the tracking options listed by the merchant: hotkey, FOV, bones, humanized trajectories, prediction, visibility checks, dynamic FOV, smoothing, team filters, and max distance.',
    },
    { type: 'h2', text: 'Tune before a contested fight' },
    {
      type: 'p',
      text: 'Keep FOV modest and visibility checks on until you understand how the pull looks in a clip. Complete already includes player ESP, creature tracking, and loot markers on the same key.',
    },
  ],
  'esp-radar': [
    {
      type: 'p',
      text: 'Complete includes player ESP, NPC ESP, creature tracking, item ESP, object ESP, and the 2D radar. Use those overlays when map awareness in Once Human matters as much as aim assist.',
    },
    { type: 'h2', text: 'Readable overlays at range' },
    {
      type: 'p',
      text: 'Cap ESP distance in dense settlements. Use creature radar in open terrain. Test skeleton vs box layouts before you rely on them next to turrets or crowded loot spots.',
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
      text: 'Aimbot options cover hotkey, FOV, bones, smoothing, prediction, visibility, team filters, and distance. Visual groups add players, NPCs, creatures, items, objects, and radar. Misc tools include compass, crosshair, FPS/time/resolution, menu and panic keys, colors, and config save/load.',
    },
    { type: 'h2', text: 'Utilities sold separately' },
    {
      type: 'p',
      text: 'Cloud DMA, HWID Spoofer, and Skin Changer are separate merchant checkouts. Spoofer and skin changer listings treat Cloud DMA as required for full functionality. Confirm each of those products on the seller page before you add them.',
    },
  ],
  aimbot: [
    { type: 'h2', text: 'Aimbot module breakdown' },
    {
      type: 'p',
      text: 'Enable aim with a custom hotkey, set FOV, pick bones, and use smoothing so the reticle does not slam. Prediction and visibility checks matter in settlements and open-world fights. Team filters keep squadmates out of the pull. Distance caps stop long-range snaps across empty terrain.',
    },
    { type: 'h2', text: 'Recommended pairing' },
    {
      type: 'p',
      text: 'Many players pair this with forum threads on smoothness and FOV before their first contested fight. Player boxes, creatures, and loot ship on Complete with the aimbot modules.',
    },
  ],
  'esp-radar': [
    { type: 'h2', text: 'Visual module breakdown' },
    {
      type: 'p',
      text: 'Player and NPC ESP share boxes, skeleton, health, shield, kit, names, and distance. Creature ESP and radar cover hostile entities. Item and object ESP mark weapons, keys, containers, medical loot, turrets, and corpse loot. The 2D radar ties those layers together.',
    },
    { type: 'h2', text: 'Layout tips' },
    {
      type: 'p',
      text: 'Snaplines help orientation in vertical interiors; boxes stay cleaner for capture tests. Save a settlement preset and an open-world preset through the config system on Complete.',
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
    systemRequirements: onceHumanSystemRequirements,
    fullFeatures: [...aimbotModules, ...visualModules, ...miscModules],
    overview: {
      title: 'Overview',
      paragraphs: [
        'Once Human is an open-world survival game with PvP and PvE. Complete Once Human Hacks lists aimbot, player ESP, creature ESP, item ESP, radar, and object ESP so you read a fight instead of guessing behind cover.',
        'This plan follows the merchant listing for the full suite. Instant delivery and updates during your key are handled on the seller portal. Always re-check live status before launch, especially after a Once Human update.',
        featureVerificationNote,
      ],
    },
  },
  aimbot: {
    images: slide('gpAimbot', 'gpEsp'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: onceHumanSystemRequirements,
    fullFeatures: [...aimbotModules],
    overview: {
      title: 'Once Human aimbot',
      paragraphs: [
        'Complete delivers the tracking modules listed by the merchant: hotkey, FOV, bones, humanized trajectories, prediction, visibility checks, dynamic FOV, smoothing, team filters, and max distance.',
        'Use FOV limits and visibility checks to keep locks readable in settlements and open terrain. Boxes, creatures, and loot markers ship on the same Complete key.',
      ],
    },
  },
  'esp-radar': {
    images: slide('gpEsp', 'gpSkeleton', 'gpBox'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: onceHumanSystemRequirements,
    fullFeatures: [...visualModules],
    overview: {
      title: 'Once Human ESP and radar',
      paragraphs: [
        'Complete includes player and NPC overlays, creature tracking, item ESP, object ESP, and a 2D radar with adjustable range and size.',
        'Tune colors and distance before a contested fight. The gallery uses in-game captures: FOV, creature ESP, and storage box labels.',
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
    alt: 'Cloud DMA product artwork: crowned shield with crossed pistols',
    caption: 'Cloud DMA layer',
    captionDesc: 'Single-PC Hyper-V Cloud DMA layer. Required for full spoofer and skin-changer functionality.',
  },
  spoofer: {
    src: '/images/addons/hwid-spoofer.png',
    alt: 'HWID Spoofer, hardware identifier change with included cleaner',
    caption: 'Hardware IDs',
    captionDesc: 'Listed hardware spoofer with cleaner. Cloud DMA required.',
  },
  skins: {
    src: '/images/addons/skin-changer.png',
    alt: 'Skin Changer, weapon skins and in-game cosmetics client',
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
          'Cloud DMA is listed as the infrastructure layer that powers the Once Human Hacks stack on a single gaming PC. The installer provisions a Hyper-V virtual environment on that machine and uses an encrypted service link for activation.',
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
          text: 'Use Cloud DMA when the merchant stack for Once Human Hacks is delivered through a single-PC Hyper-V layer instead of a second box. If you are unsure whether your Windows edition supports Hyper-V, confirm before you purchase.',
        },
        { type: 'h2', text: 'What this key does not include' },
        {
          type: 'p',
          text: 'Aimbot, ESP, and radar live on the Once Human Hacks plans. Cloud DMA is the delivery layer. GREENWARD, Static Server, and AWS stay on their own checkout items.',
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
        'Hardware identifier spoofer with cleaner for Once Human. Included cleaner, Cloud DMA required.',
      desc: 'Hardware spoofer with cleaner for Once Human. Confirm the live listing on checkout. Cloud DMA is required for full functionality.',
      features: [
        'Hardware spoofer (cleaner included)',
        'Once Human',
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
          'This site covers Once Human only. Confirm the live listing on checkout before you pay.',
          'Cloud DMA is listed as required for full functionality. Run spoof and cleanup before launching Once Human, and follow the current portal guide for step order.',
        ],
      },
      acquisition: utilityAcquisition('HWID Spoofer'),
      goodToKnow:
        'A cleaner is included in the hardware spoofer listing. Administrator rights are required. This is not a substitute for confirming the Once Human listing on checkout before you pay.',
      limitations: utilityLimitations,
      fullFeatures: [
        ...hwidCoreModules,
        ...hwidOnceHumanModules,
      ],
      systemRequirements: hwidSystemRequirements,
      about: [
        {
          type: 'p',
          text: 'Use the spoofer when you need a hardware identifier change after a listed HWID restriction, or when moving machines. It is a separate utility from Complete Once Human Hacks.',
        },
        { type: 'h2', text: 'When to run it' },
        {
          type: 'p',
          text: 'Merchant notes say to run spoof and cleanup before launching Once Human, then follow the current guide in your account or ticket channel.',
        },
      ],
      body: [
        { type: 'h2', text: 'Once Human only' },
        {
          type: 'p',
          text: 'This listing is for Once Human. Confirm the live notes on the merchant checkout page. This site does not cover other games.',
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
          'The listing is thin compared with Once Human Hacks aimbot and ESP pages. Confirm the live cosmetic list on checkout. Cloud DMA is required for full functionality on supported builds.',
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
          text: 'Pick Skin Changer when you want listed cosmetic control without the Once Human Hacks aimbot or ESP suite. It does not replace Cloud DMA or the main hacks plans.',
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
      { heading: 'Player ESP', desc: 'Players and NPCs through cover, with distance and kit readouts.', features: playerEspModules },
      { heading: 'Creature ESP and radar', desc: 'Hostile creatures, entity loot, and a dedicated creature radar.', features: creatureModules },
      { heading: 'Item ESP', desc: 'Weapons, ammo, kits, keys, and valuables on the ground or in reach.', features: itemEspModules },
      { heading: 'Radar features', desc: '2D radar with labels, rotation, and adjustable range.', features: radarModules },
      { heading: 'Object ESP', desc: 'Containers, POIs, turrets, and loot-relevant world objects.', features: objectEspModules },
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
      { heading: 'Once Human', desc: 'This site covers Once Human only. Confirm the live listing on checkout.', features: hwidOnceHumanModules },
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
    { heading: 'Creature ESP and radar', desc: 'Creature tracking, loot visualization, and creature radar.', features: creatureModules },
    { heading: 'Item ESP', desc: 'Weapons, ammo, consumables, armor, backpacks, keys, resources, explosives.', features: itemEspModules },
    { heading: 'Radar features', desc: '2D radar with player, NPC, creature, item, and object indicators.', features: radarModules },
    { heading: 'Object ESP', desc: 'Containers, medical loot, turrets, resources, and more.', features: objectEspModules },
    { heading: 'Miscellaneous settings', desc: 'Compass, crosshair, displays, menu/panic keys, colors, and configs.', features: miscModules },
  ];
}

export const productHub = {
  path: PRODUCT_BASE,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description:
    'Once Human Cheats for Windows PC: the Complete suite plus Cloud DMA, HWID Spoofer, and Skin Changer utilities.',
  buyUrl: checkoutForSlug('once-human-hacks'),
};
