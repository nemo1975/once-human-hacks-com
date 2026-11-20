import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { DISCORD_URL, PRODUCT_BASE, SUPPORT_EMAIL } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'Sand Hacks',
    domain: 'sandhacks.com',
    title: 'Sand Hacks | SAND: Raiders of Sophie',
    description:
      'Sand Hacks covers SAND: Raiders of Sophie on Windows PC. Compare aimbot, player ESP, trampler ESP, and radar, then check live status before checkout.',
    discord: DISCORD_URL,
  },
  nav: [
    { href: '/', label: 'Home', mobileLabel: 'Return to homepage' },
    { href: `${productBase}`, label: 'Products', mobileLabel: 'View products' },
    { href: '/blog/', label: 'Guides', mobileLabel: 'Read setup guides' },
    { href: '/forum/', label: 'Discussions', mobileLabel: 'Join player discussions' },
    { href: '/reviews/', label: 'Reviews', mobileLabel: 'See player reviews' },
    { href: '/faq/', label: 'Q&A', mobileLabel: 'Open pre-purchase Q&A' },
  ],
  hero: {
    status: 'Check live status',
    eyebrow: 'Windows PC tools for Sophie',
    titleLine1: 'Sand Hacks',
    titleLine2: 'for SAND: Raiders of Sophie',
    subtitle:
      'Sand Hacks is a SAND: Raiders of Sophie toolkit for extracts on foot and aboard Tramplers. Compare aimbot, player ESP, trampler ESP, item ESP, and radar, then confirm the merchant module list before you buy.',
    ctaPrimary: 'Compare hacks plans',
    ctaDiscord: 'Join Discord',
    modesLabel: 'Play contexts',
    modes: ['On-foot extracts', 'Trampler raids', 'City loot runs', 'Dune crossings'],
    metrics: [
      { label: 'Delivery', strong: 'Portal loader' },
      { label: 'After patches', strong: 'Recheck status' },
      { label: 'Support', strong: 'Discord + email' },
      { label: 'Platform', strong: 'Windows PC' },
    ],
  },
  features: {
    eyebrow: 'Feature set',
    title: 'Sand Hacks modules',
    subtitle:
      'Modules are grouped the way a Sophie raid actually works: aimbot for fights, ESP for players and NPCs, trampler tracking, loot, radar, and a small misc panel. Confirm every group on checkout.',
    items: [
      {
        title: 'Aimbot',
        subtitle: 'Hotkey, FOV, and smoothing',
        desc: 'Merchant-listed aimbot options include a customizable hotkey, FOV, bone selection, smoothing, prediction, visibility checks, team filters, and max distance.',
        bullets: [
          'Customizable aim hotkey and FOV',
          'Bone selection and smoothing',
          'Aim prediction and visibility checks',
          'Team filtering and max target distance',
        ],
        tags: ['sand hacks', 'aimbot', 'fov'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Player ESP',
        subtitle: 'Raiders and NPCs',
        desc: 'Player and NPC ESP with enemy/team flags, nickname, health, shield, held item, kit, boxes, skeleton, snaplines, and distance caps.',
        bullets: [
          'Player and NPC identification',
          'Health, shield, kit, and held item',
          '2D boxes, corners, skeleton, snaplines',
        ],
        tags: ['player esp', 'npc esp', 'sand raiders hacks'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Trampler ESP',
        subtitle: 'Walkers on the dunes',
        desc: 'Track player and NPC Tramplers, visualize trampler loot, and keep a trampler radar so a walking fortress is not a surprise on the horizon.',
        bullets: ['Player Trampler tracking', 'NPC Trampler tracking', 'Trampler loot and radar'],
        tags: ['trampler', 'radar', 'sand hacks'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
      {
        title: 'Item & object ESP',
        subtitle: 'Loot you came for',
        desc: 'Item ESP covers weapons, ammo, consumables, armor, backpacks, keys, resources, and explosives. Object ESP lists containers, Aurogen, Dreadnaught, captain’s quarters, and more.',
        bullets: ['Weapons, keys, valuables, resources', 'Containers, turrets, buried treasure', 'Aurogen crystals and corpse loot'],
        tags: ['item esp', 'object esp', 'aurogen'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: '2D radar',
        subtitle: 'Range you can actually read',
        desc: 'A 2D radar with smooth rotation, labels, and toggles for players, NPCs, Tramplers, items, and objects. Size and range are adjustable.',
        bullets: ['Smooth rotation and labels', 'Player, NPC, trampler, item, object', 'Adjustable range and size'],
        tags: ['radar', 'sand raiders hacks'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Misc panel',
        subtitle: 'Compass, keys, configs',
        desc: 'Compass, custom crosshair, FPS/time/resolution readouts, menu and panic keys, colors, and config save/load so a good extract setup survives the next session.',
        bullets: ['Compass and smoothed heading', 'Menu key and panic key', 'Config save and load'],
        tags: ['config', 'compass', 'crosshair'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Loader updates',
        subtitle: 'After game patches',
        desc: 'SAND: Raiders of Sophie patches move. Check the status banner and Discord before you extract. Grab the matching portal build when a patch lands.',
        bullets: ['Portal downloads for current builds', 'Discord #status for patch windows', 'Config library stays versioned'],
        tags: ['patch updates', 'loader', 'status'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Support channel',
        subtitle: 'Setup help',
        desc: 'Discord and email cover loader steps, HWID moves, and checkout questions. Include your order email and Windows version so staff are not guessing.',
        bullets: ['Discord walkthroughs', 'Ticket checklist on Support', 'FAQ for common errors'],
        tags: ['support', 'discord', 'setup'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-5',
      },
      {
        title: 'Utilities',
        subtitle: 'Cloud DMA, spoofer, skins',
        desc: 'Cloud DMA, HWID Spoofer, and Skin Changer are separate merchant checkouts. Spoofer and skin changer listings treat Cloud DMA as required for full functionality—confirm that on the seller page.',
        bullets: ['Single-PC Cloud DMA layer', 'HWID spoofer with included cleaner', 'Skin changer cosmetics'],
        tags: ['cloud dma', 'hwid', 'skin changer'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-5',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Sand Hacks with a readable module list',
    subtitle:
      'Sophie patches break stale loaders. We keep plan pages tied to the merchant listing, remind you to check status, and answer on Discord instead of hiding behind a generic ticket form.',
    usLabel: 'Sand Hacks',
    otherLabel: 'Typical shop',
    rows: [
      {
        title: 'Sophie-specific modules',
        desc: 'Trampler ESP, trampler radar, Aurogen, Dreadnaught, and captain’s quarters are listed as their own groups, not buried under a generic “wallhack” label.',
        descAlt:
          'Feature groups follow the SAND: Raiders of Sophie listing: tramplers, loot, radar, and objects instead of a single catch-all overlay.',
      },
      {
        title: 'Status before extract',
        desc: 'The homepage banner and Discord #status are the check you run after a SAND update. We do not pretend a past “online” note lasts forever.',
        descAlt:
          'Recheck live status after SAND updates. An older online note is not a guarantee for tonight’s raid.',
      },
      {
        title: 'Discord and email support',
        desc: 'Real people help with loader setup, license moves, and checkout questions. Coverage is listed as 24/7 on Discord; patch-day queues can still add delay.',
      },
      {
        title: 'Portal delivery',
        desc: 'Keys and loader downloads come from the operator portal after merchant checkout. Do not grab files from random DMs.',
      },
      {
        title: 'Config save and load',
        desc: 'Save city, dune, and trampler-focused presets and load them on another PC through the listed config system.',
      },
      {
        title: 'License moves',
        desc: 'Hardware resets and PC changes go through Discord or the portal instead of locking you to one machine forever.',
        descAlt:
          'Need a new rig or fresh Windows install? HWID resets and license transfers run through the portal or Discord.',
      },
    ],
    metrics: [
      {
        value: 'Status',
        title: 'Patch-day check',
        desc: 'Confirm the banner before you extract after a SAND update.',
      },
      {
        value: 'Discord',
        title: 'Support',
        desc: 'Loader, config, and checkout questions for Windows PC.',
      },
      {
        value: 'Portal',
        title: 'Delivery',
        desc: 'Loader and setup notes unlock after merchant checkout.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup',
    titleLead: 'Get running in',
    titleHighlight: 'three steps',
    intro:
      'Pick a Sand Hacks plan, download the loader from your portal, load a conservative preset, then launch SAND: Raiders of Sophie. Discord help is there if something looks off.',
    ctaPrimary: 'Open product hub',
    ctaSecondary: 'Sand Hacks FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Choose a plan and download',
        desc: 'Finish checkout, open the portal, and download the latest Windows loader.',
      },
      {
        step: 'Step 2',
        title: 'Load a preset',
        desc: 'Run the loader, start with a tight FOV and a short ESP range, then raise them once the overlay is readable on a dune crossing.',
      },
      {
        step: 'Step 3',
        title: 'Check status and extract',
        desc: 'Confirm the status banner is online, launch SAND: Raiders of Sophie, and use a saved config.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform',
    title: 'Windows PC',
    subtitle: 'Check the status banner after SAND: Raiders of Sophie updates before you extract.',
    items: [
      'Windows 10 & 11',
      'Intel or AMD',
      'SAND: Raiders of Sophie',
      'Portal updater',
      'Config save/load',
      'Discord support',
      'License reset',
      'Cloud DMA (listed)',
    ],
  },
  cheats: {
    eyebrow: 'Plans',
    title: 'Sand Hacks plans',
    subtitle:
      'Complete Sand Hacks is the main SAND: Raiders of Sophie suite. Aimbot, player ESP, trampler ESP, item ESP, radar, and object ESP ship on one key.',
    viewAll: 'Compare all plans',
    explore: 'Explore',
    items: [
      {
        badge: 'Most popular',
        tier: 'Full suite',
        name: 'Complete',
        title: 'Complete Sand Hacks',
        desc: 'Full SAND: Raiders of Sophie Hacks bundle: aimbot, player ESP, trampler ESP, item ESP, radar, object ESP, and misc tools on one key.',
        features: [
          'Aimbot with FOV and smoothing',
          'Player, NPC, and trampler ESP',
          'Item ESP and 2D radar',
          'Object ESP and config save/load',
        ],
        more: 40,
        href: `${productBase}complete/`,
        variant: 'popular',
      },
    ],
  },
  products: {
    eyebrow: 'Shop',
    title: 'SAND: Raiders of Sophie Hacks',
    subtitle:
      'Complete Sand Hacks plus utilities (Cloud DMA, HWID Spoofer, Skin Changer) for Windows PC. Durations are chosen on merchant checkout—nothing is priced on this site.',
    hacksTitle: 'Main hacks',
    hacksSubtitle:
      'One Sand Hacks suite for SAND: Raiders of Sophie: aimbot, player ESP, trampler ESP, item ESP, radar, and object ESP on a single key.',
    utilitiesTitle: 'Utilities',
    utilitiesSubtitle:
      'Cloud DMA, HWID Spoofer, and Skin Changer. Features follow the merchant listings. Cloud DMA is listed as required for full spoofer and skin-changer functionality.',
    viewAll: 'View all plans',
    get: 'View plan',
    explore: 'Explore',
    items: [
      {
        badge: 'Most popular',
        category: 'Full suite',
        title: 'Complete',
        subtitle: 'Aimbot, ESP, trampler, radar',
        desc: 'Everything in one Sand Hacks package: aimbot, player ESP, trampler ESP, loot, radar, and misc tools.',
        features: ['Full aimbot suite', 'Player and trampler ESP', 'Item ESP and radar', 'Config save/load'],
        more: 40,
        href: `${productBase}complete/`,
      },
    ],
  },
  forumHome: {
    eyebrow: 'Community',
    title: 'Sand Hacks forum',
    subtitle: 'Loader setup, aimbot FOV, trampler ESP, radar range, and patch-day notes from players running Sand Hacks on Windows PC.',
    viewAll: 'Browse forums',
  },
  reviews: {
    totalLabel: 'Community reviews',
  },
  toolkit: {
    eyebrow: 'Menu layout',
    title: 'Sand Hacks menu, organized',
    subtitle: 'Modules are grouped so you can tune aimbot, ESP, tramplers, and radar between extracts without hunting through tabs.',
    items: [
      {
        num: '01',
        label: 'Aimbot',
        title: 'Tracking with FOV you can see',
        desc: 'Hotkey, FOV, bones, smoothing, prediction, and visibility checks in one aimbot panel.',
      },
      {
        num: '02',
        label: 'Player ESP',
        title: 'Raiders through cover',
        desc: 'Boxes, skeleton, health, shield, kit, names, and distance for players and NPCs.',
      },
      {
        num: '03',
        label: 'Trampler',
        title: 'Walkers before they see you',
        desc: 'Player and NPC Trampler tracking, loot visualization, and trampler radar.',
      },
      {
        num: '04',
        label: 'Loot',
        title: 'Items and objects worth the risk',
        desc: 'Weapons, keys, Aurogen, containers, Dreadnaught, and captain’s quarters markers.',
      },
      {
        num: '05',
        label: 'Radar',
        title: 'A 2D map you can resize',
        desc: 'Smooth rotation, labels, and range so dune crossings stay readable.',
      },
      {
        num: '06',
        label: 'Profiles',
        title: 'Configs for cities and dunes',
        desc: 'Save and load presets instead of rebuilding FOV and ESP range every raid.',
      },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 steps',
    titleBefore: 'From plan to',
    titleHighlight: 'in-raid tools.',
    subtitle: 'Choose a Sand Hacks tier, download the loader, enable modules, and save configs for your next SAND: Raiders of Sophie extract.',
    ctaLabel: 'View plans',
    ctaHref: productBase,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check status',
        desc: 'Read the live banner on sandhacks.com before you buy or extract.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Pick Complete or a utility',
        desc: 'Open Complete Sand Hacks, then add Cloud DMA, HWID Spoofer, or Skin Changer if those listings match your setup.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch and configure',
        desc: 'Download from the portal, enable modules, and test on a quiet dune before a contested city.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your config',
        desc: 'When settings feel right, save city and trampler presets through the config system.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Tips',
    title: 'Quick tips',
    items: [
      {
        num: '01',
        title: 'After patches',
        desc: 'Check Discord and the portal status before you extract after a SAND: Raiders of Sophie update.',
      },
      {
        num: '02',
        title: 'Start conservative',
        desc: 'Use a tight aimbot FOV and a short ESP range first, then raise them if the overlay stays readable.',
      },
      {
        num: '03',
        title: 'Discord help',
        desc: 'Stuck on the loader or Cloud DMA notes? Ask in Discord and staff will walk you through it.',
      },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Sand Hacks support: loader, checkout & help',
    subtitle: 'Loader, checkout, and account help for SAND: Raiders of Sophie on Windows PC.',
    channels: [
      {
        icon: 'users',
        title: 'Before you buy',
        desc: 'Ask about tiers and what each plan includes.',
        linkLabel: 'Start checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Email support',
        desc: 'Loader errors, license moves, and account issues.',
        linkLabel: SUPPORT_EMAIL,
        href: `mailto:${SUPPORT_EMAIL}`,
      },
      {
        icon: 'navFaq',
        title: 'FAQ',
        desc: 'Compatibility, risk, and setup answers.',
        linkLabel: 'View FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Discord',
        desc: 'Live loader walkthroughs and status notes.',
        linkLabel: 'Contact page',
        href: '/support/',
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The email you used at checkout on sandhacks.com.' },
      { title: 'Platform', desc: 'Windows 10 or 11, and your SAND: Raiders of Sophie build.' },
      { title: 'Error detail', desc: 'Screenshot or exact text from the loader or game client.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Sand Hacks FAQ',
    subtitle: 'Compatibility, risk, plans, and setup. Straight answers before you checkout.',
    items: [
      {
        num: '01',
        q: 'Where do I check if Sand Hacks is online?',
        a: 'The live status banner is on sandhacks.com and in the Discord #status channel. Always check after a SAND: Raiders of Sophie update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Your portal unlocks the loader, setup guide, and config library via merchant checkout. Follow the guide before launching SAND: Raiders of Sophie.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party Sand Hacks tools?',
        a: 'Yes. Any modification carries risk. SAND reports and rule enforcement can lead to account action. Read current status and accept the risk before use.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'SAND: Raiders of Sophie on Windows 10/11. Console and macOS are not supported. Confirm CPU, HVCI, and Cloud DMA notes on the merchant page.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes. Use the license reset in your portal or open a Discord ticket. Limits depend on your plan.',
      },
      {
        num: '06',
        q: 'Where are products listed?',
        a: 'Complete Sand Hacks plus Cloud DMA, HWID Spoofer, and Skin Changer live on the SAND: Raiders of Sophie Hacks product hub with feature lists and checkout when you are ready.',
      },
    ],
  },
  footer: {
    tagline: 'Sand Hacks for SAND: Raiders of Sophie: aimbot, ESP, trampler tracking, and radar.',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: `${productBase}complete/`, label: 'Complete suite', ariaLabel: 'Complete plan' },
      { href: `${productBase}`, label: 'All products', ariaLabel: 'Products' },
      { href: '/blog/', label: 'Sand Hacks guides', ariaLabel: 'Blog' },
      { href: '/forum/', label: 'Community forums', ariaLabel: 'Forums' },
      { href: '/reviews/', label: 'Reviews', ariaLabel: 'Reviews' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About Sand Hacks: SAND: Raiders of Sophie plans, forums, checkout',
      description:
        'We publish plan comparisons, setup notes, and live status for PC players comparing aimbot, ESP, trampler, and radar modules before checkout.',
      sections: [
        {
          heading: 'Sand Hacks: who we are',
          paragraphs: [
            'Sand Hacks is an independent PC resource for SAND: Raiders of Sophie Hacks. We explain what each plan includes, how the loader works, and where to check live status before you extract.',
            'Product and game names on this site are for identification only. We do not represent Hologryph, TowerHaus, tinyBuild, or the SAND: Raiders of Sophie team.',
          ],
        },
        {
          heading: 'What we offer',
          paragraphs: [
            'Complete Sand Hacks covers aimbot, ESP, trampler, radar, and misc tools on Windows 10 and 11. The forums and FAQ walk through configs, patch-day checks, and conservative presets for cities, dunes, and Trampler raids.',
            'Pages refresh when the loader or SAND updates change. Always read the homepage status banner and Discord #status before you launch a session.',
          ],
        },
        {
          heading: 'How we stay accurate',
          paragraphs: [
            'Module lists on each product page follow the merchant listing, not outdated forum screenshots. When a patch lands, we update compatibility notes and link to setup threads that match the current build.',
            'If something on the site disagrees with your portal download, treat the portal as source of truth and open a support ticket with your order email.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Use Discord or email for loader errors, compatibility, and checkout questions. Include your order email, Windows version, and exact loader text so staff can reproduce the issue quickly.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy: cookies and contact data when you browse',
      description:
        'Your privacy matters when you browse product pages. This overview explains how sandhacks.com handles analytics, cookies, contact messages, and secure checkout.',
      sections: [
        {
          heading: 'Privacy: information we collect',
          paragraphs: [
            'We may collect basic analytics such as page views, device type, browser, and approximate region through Google Analytics when it is enabled. Checkout runs on external pages operated by the seller. We do not store payment card numbers on sandhacks.com.',
            'If you email support, we keep the address and message content until your ticket is resolved. Data-related requests should mention the email you used so we can locate prior threads.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics show which product pages people use so we can fix broken links and improve content. We do not sell personal data or share it with ad networks beyond standard analytics processors configured in our account settings.',
            'Support tickets are used only to answer loader, license, and checkout questions. Delete requests are handled manually. See the section below on retention.',
          ],
        },
        {
          heading: 'Cookies and similar tech',
          paragraphs: [
            'We use basic analytics cookies to understand traffic patterns. You can block cookies in your browser; core pages remain readable without them.',
            'Third-party checkout pages may set their own cookies when you leave this site to complete a purchase. Review the seller’s notices before paying.',
          ],
        },
        {
          heading: 'Your choices and retention',
          paragraphs: [
            'You can opt out of analytics by using private browsing modes or blocking Google Analytics. For questions about data we hold, contact us through the Support page with the subject line “Data request”.',
            'Analytics logs rotate on the provider’s schedule. Support emails are kept for a reasonable period after closure, then archived or deleted unless law requires longer retention.',
          ],
        },
        {
          heading: 'Policy updates',
          paragraphs: [
            'We may revise this policy when tooling or checkout partners change. Material updates will be reflected on this page; continued use of the site after changes means you accept the revised terms.',
            'Purchase and refund rules remain in Terms & Conditions. For billing disputes, use Support rather than this page.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms for Sand Hacks | License & Refunds',
      description:
        'Terms for buying Sand Hacks on sandhacks.com: license use, delivery, refunds, and account risk on SAND: Raiders of Sophie.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: November 2026. By using sandhacks.com or buying a product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell Complete Sand Hacks plus Cloud DMA, HWID Spoofer, and Skin Changer utilities through a portal and Windows loader for SAND: Raiders of Sophie.',
            'Product pages list what is included when you buy. Features can change when SAND: Raiders of Sophie updates.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. sandhacks.com does not process or store payment card numbers.',
            'After purchase, use the operator portal linked from your order flow to download the current loader and setup guide before launching SAND: Raiders of Sophie.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. Device limits depend on your plan and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, SAND account action, or issues caused by ignoring setup guides or running modules while the status banner shows offline.',
            'If the product does not work as described on a supported setup (SAND: Raiders of Sophie on Windows 10/11, current loader from the portal, and the live status banner showing online when you started), contact us through the Support page. Include your order email, Windows version, game build, and screenshots or exact error text from the loader.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for SAND: Raiders of Sophie can conflict with game updates. You use this software at your own risk, including possible account action.',
            'Check the homepage status banner before every session. Do not extract while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or loader questions, use the buttons on the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'Sand Hacks Support | Loader & Checkout',
      description: 'Sand Hacks support for loader setup, license moves, and checkout help at sandhacks.com.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Shop Sand Hacks',
    browseCheatsMobile: 'Shop plans',
    homeAria: 'Sand Hacks home',
    checkoutAria: 'Start checkout',
    discordAria: 'Join Sand Hacks on Discord',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
