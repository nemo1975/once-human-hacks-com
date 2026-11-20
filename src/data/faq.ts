import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const completeTier = (label: string) => link(label, productPath('complete'));
const productsIndex = (label: string) => link(label, ROUTES.products);
const faqIndex = (label: string) => link(label, ROUTES.faq);
const forumHub = (label: string) => link(label, ROUTES.forum);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if Sand Hacks are online?',
    a: a(
      'Use the live status banner on sandhacks.com and the Discord #status channel. Always confirm after a SAND client patch before you launch into an extract.',
    ),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a(
      'Checkout unlocks your operator portal with the loader, setup guide, and config library. Follow the portal steps before opening SAND: Raiders of Sophie on your PC.',
    ),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using Sand Hacks?',
    a: a(
      'Yes. Third-party tools can violate SAND game rules. Player reports can lead to account action. Read live status and accept the risk before use.',
    ),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a(
      'SAND on Windows 10 or Windows 11 64-bit only. Console, macOS, and Linux are not supported.',
    ),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a(
      'Yes. Start an HWID reset from your operator portal or Discord with your order email. How often you can move a key depends on your plan tier and recent resets.',
    ),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are Sand Hacks plans listed?',
    a: `${link('Sand Hacks product hub', `${ROUTES.products}#utilities`)} lists the ${link('Complete suite', `${productPath('complete')}#product-experience`)} plus Cloud DMA, HWID Spoofer, and Skin Changer utilities with module breakdowns and checkout links.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is player ESP and radar in SAND?',
    a: `Player ESP and the 2D radar show raiders, NPCs, Tramplers, loot, and extract context through dunes and city blocks. The ${completeTier('Complete suite')} lists those visuals plus aimbot and misc tools on the same key.`,
    scopes: ['esp-radar', 'complete'],
  },
  {
    id: 'esp-vs-scripts',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What is the difference between ESP / radar and aimbot?',
    a: `ESP and radar are information overlays. They do not move your crosshair. Aimbot modules on the ${completeTier('Complete suite')} handle smooth tracking, FOV, and bone priority. Both groups ship on the same key.`,
  },
  {
    id: 'which-tier-esp',
    topic: 'plans',
    icon: 'faqWhichTierEsp',
    q: 'Which plan do I need for ESP and radar?',
    a: `The ${completeTier('Complete suite')} includes player and NPC ESP, boxes, skeletons, snaplines, health and shield, Trampler tracking, item ESP, adjustable radar, and the full aimbot stack plus compass and config tools.`,
    scopes: ['esp-radar'],
  },
  {
    id: 'which-tier-scripts',
    topic: 'scripts',
    icon: 'faqWhichTierScripts',
    q: 'Which plan includes aimbot?',
    a: `The ${completeTier('Complete suite')} ships aimbot modules: hotkey, FOV, bone selection, humanized trajectories, prediction, visibility checks, dynamic FOV, smoothing, team filtering, and max target distance, plus the full ESP suite.`,
    scopes: ['aimbot'],
  },
  {
    id: 'rank-plans',
    topic: 'plans',
    icon: 'faqRankTiers',
    q: 'What does the Complete suite include?',
    a: `The ${completeTier('Complete suite')} is the one Sand Hacks product: aimbot, player ESP, trampler ESP, item ESP, radar, object ESP, and misc tools on one key. Utilities (Cloud DMA, HWID Spoofer, Skin Changer) are separate. See the ${faqIndex('FAQ index')} for setup questions.`,
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'faqStreamProof',
    q: 'Can OBS or Discord capture my overlay?',
    a: a(
      'Stream-capture modes hide overlays from OBS Game Capture and Discord screen share on supported builds. Record a local test clip before you stream or share your desktop.',
    ),
  },
  {
    id: 'live-status',
    topic: 'safety',
    icon: 'faqEacUpdate',
    q: 'What does the live status banner mean?',
    a: a(
      'Status reflects the current build against recent SAND patches. It is not a permanent guarantee. Do not launch while the banner shows updating, testing, or offline.',
    ),
  },
  {
    id: 'esp-safer',
    topic: 'safety',
    icon: 'faqEspSafer',
    q: 'Is ESP / radar lower profile than aimbot?',
    a: a(
      'ESP can look quieter in a clip than obvious snap aim, but it is still third-party software. SAND does not ignore overlays because you left aimbot disabled.',
    ),
  },
  {
    id: 'external-loader',
    topic: 'products',
    icon: 'faqExternalLoader',
    q: 'Does the loader install into my SAND game folder?',
    a: `The loader runs external with cloud config sync. Nothing is dropped into the game directory. Risk still applies. See ${productsIndex('product requirements')} for specs.`,
  },
  {
    id: 'compare-plans',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'Where do I compare plans side by side?',
    a: `Each product page includes a feature list and compare context. The ${faqIndex('setup FAQ')} collects setup, safety, and plan answers, or browse ${forumHub('SAND player forum')} for extract and Trampler tips.`,
  },
  {
    id: 'who-esp',
    topic: 'plans',
    icon: 'faqWhoLite',
    q: 'Who should use ESP / radar?',
    a: `Raiders who want city and dune awareness (players, NPCs, loot, Tramplers, extract timing). ESP and radar ship on the ${completeTier('Complete suite')} with the rest of the Sand Hacks modules. Toggle aim off in the menu if you only want overlays.`,
    scopes: ['esp-radar'],
  },
  {
    id: 'who-aimbot',
    topic: 'plans',
    icon: 'faqWhoPro',
    q: 'Who should use aimbot?',
    a: `PC players who want smooth tracking, FOV limits, bone priority, and visibility checks during extract fights. Aimbot ships on the ${completeTier('Complete suite')} with ESP, trampler, radar, and misc tools on the same key.`,
    scopes: ['aimbot'],
  },
  {
    id: 'who-complete',
    topic: 'plans',
    icon: 'faqWhoElite',
    q: 'Who should buy Complete?',
    a: `Players who want aimbot, ESP, Trampler tracking, item ESP, radar, compass tools, and cloud configs on one license for city runs, dune crossings, and Trampler hijacks.`,
    scopes: ['complete'],
  },
  {
    id: 'javelin-update',
    topic: 'safety',
    icon: 'faqEacUpdate',
    q: 'What should I do after a SAND update?',
    a: a(
      'Check sandhacks.com status and Discord #status. Wait until the banner shows online, then reload portal presets instead of reusing old smoothing or ESP range values from before the patch.',
    ),
  },
  {
    id: 'discord-help',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'How do I get install help?',
    a: a(
      'Open Discord after purchase with your order email, Windows version, and how you launch SAND. Staff walk through loader setup and conservative presets live.',
    ),
  },
  {
    id: 'modes-ranked',
    topic: 'plans',
    icon: 'faqZoomRanked',
    q: 'Do plans work for extracts and PvPvE raids?',
    a: `Yes. ${completeTier('Complete')} includes portal config slots for aimbot, ESP, trampler, and radar. Tune ESP max distance and aimbot smoothing in safer zones before you push a contested extract or Trampler deck.`,
  },
  {
    id: 'radar-context',
    topic: 'esp',
    icon: 'faqZoomHack',
    q: 'Does ESP show Tramplers and captain quarters loot?',
    a: `Trampler tracking, loot visualization, and radar indicators are listed on ${completeTier('Complete Sand Hacks')}. Object ESP modules cover containers, Dreadnaught areas, captain quarters, Aurogen crystals, and buried treasure where the merchant lists them—confirm on checkout.`,
    scopes: ['complete', 'esp-radar'],
  },
  {
    id: 'aimbot-modules',
    topic: 'scripts',
    icon: 'faqAutoFarm',
    q: 'Which aimbot options ship on Complete?',
    a: `Customizable aim hotkey, adjustable FOV, bone selection, humanized trajectories, aim prediction, visibility checks, dynamic FOV, aim smoothing, team filtering, and maximum target distance—all on the ${completeTier('Complete Sand Hacks')} listing.`,
    scopes: ['aimbot', 'complete'],
  },
  {
    id: 'private-hacks',
    topic: 'safety',
    icon: 'faqPrivateCheats',
    q: 'What are private Sand Hacks?',
    a: a(
      'Private means per-user keys and maintained builds delivered through the portal, not public zip packs. Complete Sand Hacks covers aimbot, ESP, trampler, radar, and misc tools for Windows PC.',
    ),
  },
  {
    id: 'checkout-portal',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'Where do I download the loader?',
    a: a(
      'Only from your operator portal after checkout completes. Never from random Discord DMs or comment links. The portal also hosts HWID reset and config backup.',
    ),
  },
  {
    id: 'forum-guides',
    topic: 'products',
    icon: 'faqMore',
    q: 'Where are setup and extract guides?',
    a: `${forumHub('Forum guides')} hosts patch-day notes, OBS capture threads, and city extract tuning tips. Product pages remain authoritative for checkout and module lists.`,
  },
  {
    id: 'upgrade-path',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'Is there a smaller plan than Complete?',
    a: `No. ${completeTier('Complete Sand Hacks')} is the only main hacks product. Aimbot, ESP, trampler, radar, and misc tools ship on that one key. Cloud DMA, HWID Spoofer, and Skin Changer stay on the ${productsIndex('utilities row')}.`,
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `Landing pages show quick answers; the ${faqIndex('full FAQ list')} lists every topic. For long-form threads on smoothing, Tramplers, and stream capture, visit the ${forumHub('community discussions')}.`,
  },
  {
    id: 'cloud-dma-what',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'What is Cloud DMA on this site?',
    a: a(
      'Cloud DMA is listed as a single-PC Hyper-V delivery layer with an encrypted activation link. It is not a second tower or a USB/PCIe DMA box. GREENWARD, Static Server, and AWS are listed as separate required purchases.',
    ),
    scopes: ['cloud-dma'],
  },
  {
    id: 'cloud-dma-required',
    topic: 'setup',
    icon: 'faqProductsPage',
    q: 'Do I need Cloud DMA for Sand Hacks?',
    a: a(
      'The merchant bundles catalog access around the Cloud DMA delivery model. HWID Spoofer and Skin Changer listings also say Cloud DMA is required for full functionality. Confirm on checkout before you pay.',
    ),
    scopes: ['cloud-dma', 'hwid-spoofer', 'skin-changer'],
  },
  {
    id: 'hwid-what',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'What does the HWID Spoofer list?',
    a: a(
      'Hardware identifier changes (disk serials, MAC addresses, GPU IDs, and related IDs) with a cleaner for SAND: Raiders of Sophie. Confirm the live listing on checkout. Administrator rights and Cloud DMA are listed as required.',
    ),
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'skin-changer-what',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'What does Skin Changer include?',
    a: a(
      'The merchant lists a lightweight cosmetic client for weapon skins and in-game cosmetics. The public module grid is thin, so confirm the live cosmetic list on checkout. Cloud DMA is required for full functionality.',
    ),
    scopes: ['skin-changer'],
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'platforms', 'license-move', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

/** Shared FAQ block copy + filters (home, /faq/, products). */
export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'FAQ: Sand Hacks',
  subtitle: 'Filter by plans, ESP & radar, aimbot, products, setup, and safety.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'scripts',
  'safety',
  'products',
  'setup',
];

/** Section copy when FAQ list is scoped to the current page (not /faq/). */
export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'Hacks FAQ',
  title: 'SAND questions',
  subtitle: 'Straight answers on aimbot, ESP, account risk, and setup. See the full FAQ for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) =>
      !f.scopes &&
      ['setup', 'safety', 'plans', 'esp', 'scripts'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const tierCompare = siteFaqs.filter((f) =>
    ['rank-plans', 'compare-plans', 'live-status', 'javelin-update'].includes(f.id),
  );

  const combined =
    kind === 'tier'
      ? [...scoped, ...tierCompare, ...general.slice(0, 8)]
      : [...scoped, ...general.filter((f) => ['setup', 'safety'].includes(f.topic)).slice(0, 4)];

  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

export const compareRows = [
  {
    feature: 'Player & NPC ESP (box, name, distance)',
    icon: 'comparePlayerEsp' as const,
    complete: true,
    aimbot: false,
    'esp-radar': true,
  },
  {
    feature: 'Trampler tracking & radar indicators',
    icon: 'compareRadarHack' as const,
    complete: true,
    aimbot: false,
    'esp-radar': true,
  },
  {
    feature: 'Item ESP (weapons, keys, Aurogen, valuables)',
    icon: 'compareWardLocator' as const,
    complete: true,
    aimbot: false,
    'esp-radar': true,
  },
  {
    feature: '2D radar with adjustable range',
    icon: 'compareStreamproof' as const,
    complete: true,
    aimbot: false,
    'esp-radar': true,
  },
  {
    feature: 'Custom aim hotkey & bone selection',
    icon: 'compareAutoCombo' as const,
    complete: true,
    aimbot: true,
    'esp-radar': false,
  },
  {
    feature: 'Humanized trajectories, prediction & smoothing',
    icon: 'compareSmoothAim' as const,
    complete: true,
    aimbot: true,
    'esp-radar': false,
  },
  {
    feature: 'Visibility checks & team filtering',
    icon: 'compareTargetSelector' as const,
    complete: true,
    aimbot: true,
    'esp-radar': false,
  },
  {
    feature: 'Dynamic FOV & max target distance',
    icon: 'compareAbilityRadius' as const,
    complete: true,
    aimbot: true,
    'esp-radar': false,
  },
  {
    feature: 'Compass & custom crosshair styles',
    icon: 'compareHotkeyMacros' as const,
    complete: true,
    aimbot: false,
    'esp-radar': false,
  },
  {
    feature: 'Config save, load & share',
    icon: 'compareCloudBackup' as const,
    complete: true,
    aimbot: false,
    'esp-radar': false,
  },
  {
    feature: 'Panic key & configurable colors',
    icon: 'comparePriorityPatch' as const,
    complete: true,
    aimbot: false,
    'esp-radar': false,
  },
  {
    feature: 'Full merchant-listed module suite',
    icon: 'compareFullMapHack' as const,
    complete: true,
    aimbot: false,
    'esp-radar': false,
  },
];