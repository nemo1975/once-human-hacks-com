import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { DISCORD_URL, PRODUCT_BASE, SUPPORT_EMAIL } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'Once Human Hacks',
    domain: 'oncehumanhacks.com',
    title: 'Once Human Hacks for PC | Aimbot, ESP & Radar',
    description:
      'Once Human Hacks for Windows PC. Compare aimbot, player ESP, creature ESP, and radar, then check live status before you buy. Confirm modules on checkout.',
    discord: DISCORD_URL,
  },
  nav: [
    { href: `${productBase}`, label: 'Products', mobileLabel: 'View products' },
    { href: '/blog/', label: 'Guides', mobileLabel: 'Read setup guides' },
    { href: '/forum/', label: 'Discussions', mobileLabel: 'Join player discussions' },
    { href: '/reviews/', label: 'Reviews', mobileLabel: 'See player reviews' },
    { href: '/faq/', label: 'Q&A', mobileLabel: 'Open pre-purchase Q&A' },
  ],
  hero: {
    status: 'Check live status',
    eyebrow: 'Windows PC tools for Once Human',
    titleLine1: 'Once Human Hacks',
    titleLine2: 'for PC',
    subtitle:
      'Once Human Hacks is a Windows toolkit for PvP fights, PvE hunts, and open-world loot runs. Compare aimbot, player ESP, creature ESP, item ESP, and radar, then confirm the merchant module list before you buy.',
    ctaPrimary: 'Compare hacks plans',
    ctaDiscord: 'Join Discord',
    modesLabel: 'Play contexts',
    modes: ['PvP fights', 'PvE hunts', 'Settlement loot', 'Open-world farming'],
    metrics: [
      { label: 'Delivery', strong: 'Portal loader' },
      { label: 'After patches', strong: 'Recheck status' },
      { label: 'Support', strong: 'Discord + email' },
      { label: 'Platform', strong: 'Windows PC' },
    ],
  },
  features: {
    eyebrow: 'Feature set',
    title: 'Once Human Hacks modules',
    subtitle:
      'Modules follow how a session actually plays: aimbot for fights, ESP for players and creatures, loot markers, radar, and a small misc panel. Confirm every group on checkout.',
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
        tags: ['once human hacks', 'aimbot', 'fov'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Player ESP',
        subtitle: 'Players and NPCs',
        desc: 'Player and NPC ESP with enemy/team flags, nickname, health, shield, held item, kit, boxes, skeleton, snaplines, and distance caps.',
        bullets: [
          'Player and NPC identification',
          'Health, shield, kit, and held item',
          '2D boxes, corners, skeleton, snaplines',
        ],
        tags: ['player esp', 'npc esp', 'once human cheats'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Creature ESP',
        subtitle: 'Hostile wildlife and entities',
        desc: 'Track creatures and related NPCs, visualize entity loot, and keep a dedicated radar so a large threat is not a surprise on the horizon.',
        bullets: ['Creature tracking', 'NPC creature markers', 'Creature loot and radar'],
        tags: ['creature esp', 'radar', 'once human hacks'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
      {
        title: 'Item & object ESP',
        subtitle: 'Loot you came for',
        desc: 'Item ESP covers weapons, ammo, consumables, armor, backpacks, keys, resources, and explosives. Object ESP lists containers, medical loot, turrets, and more.',
        bullets: ['Weapons, keys, valuables, resources', 'Containers, turrets, medical loot', 'Resource nodes and corpse loot'],
        tags: ['item esp', 'object esp', 'wallhack'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: '2D radar',
        subtitle: 'Range you can actually read',
        desc: 'A 2D radar with smooth rotation, labels, and toggles for players, NPCs, creatures, items, and objects. Size and range are adjustable.',
        bullets: ['Smooth rotation and labels', 'Player, NPC, creature, item, object', 'Adjustable range and size'],
        tags: ['radar', 'once human cheats'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Misc panel',
        subtitle: 'Compass, keys, configs',
        desc: 'Compass, custom crosshair, FPS/time/resolution readouts, menu and panic keys, colors, and config save/load so a good PvP setup survives the next session.',
        bullets: ['Compass and smoothed heading', 'Menu key and panic key', 'Config save and load'],
        tags: ['config', 'compass', 'crosshair'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Loader updates',
        subtitle: 'After game patches',
        desc: 'Once Human patches move. Check the status banner and Discord before you queue. Grab the matching portal build when a patch lands.',
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
        desc: 'Cloud DMA, HWID Spoofer, and Skin Changer are separate merchant checkouts. Spoofer and skin changer listings treat Cloud DMA as required for full functionality. Confirm that on the seller page.',
        bullets: ['Single-PC Cloud DMA layer', 'HWID spoofer with included cleaner', 'Skin changer cosmetics'],
        tags: ['cloud dma', 'hwid', 'skin changer'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-5',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Once Human Hacks with a readable module list',
    subtitle:
      'Once Human patches break stale loaders. We keep plan pages tied to the merchant listing, remind you to check status, and answer on Discord instead of hiding behind a generic ticket form.',
    usLabel: 'Once Human Hacks',
    otherLabel: 'Typical shop',
    rows: [
      {
        title: 'Once Human-specific modules',
        desc: 'Creature ESP, creature radar, loot containers, and world objects are listed as their own groups, not buried under a generic wallhack label.',
        descAlt:
          'Feature groups follow the Once Human listing: creatures, loot, radar, and objects instead of a single catch-all overlay.',
      },
      {
        title: 'Status before you queue',
        desc: 'The homepage banner and Discord #status are the check you run after a Once Human update. We do not pretend a past “online” note lasts forever.',
        descAlt:
          'Recheck live status after Once Human updates. An older online note is not a guarantee for tonight’s session.',
      },
      {
        title: 'Discord and email support',
        desc: 'Real people help with loader setup, license moves, and checkout questions. Coverage is listed as 24/7 on Discord; patch-day queues can still add delay.',
        descAlt:
          'Loader, HWID, and checkout questions go to Discord or email. Coverage is listed 24/7; patch days can still stack the queue.',
      },
      {
        title: 'Portal delivery',
        desc: 'Keys and loader downloads come from the operator portal after merchant checkout. Do not grab files from random DMs.',
        descAlt:
          'After you pay, the operator portal is the only listed place for the key and loader. Skip unofficial Discord file drops.',
      },
      {
        title: 'Config save and load',
        desc: 'Save PvP, PvE, and loot-focused presets and load them on another PC through the listed config system.',
        descAlt:
          'Keep settlement, open-world, and PvP layouts, then restore them on a second Windows PC from the listed config tools.',
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
        desc: 'Confirm the banner before you queue after a Once Human update.',
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
      'Pick a Once Human Hacks plan, download the loader from your portal, load a conservative preset, then launch Once Human. Discord help is there if something looks off.',
    ctaPrimary: 'Open product hub',
    ctaSecondary: 'Once Human FAQ',
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
        desc: 'Run the loader, start with a tight FOV and a short ESP range, then raise them once the overlay is readable in a quiet area.',
      },
      {
        step: 'Step 3',
        title: 'Check status and play',
        desc: 'Confirm the status banner is online, launch Once Human, and use a saved config.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform',
    title: 'Windows PC',
    subtitle: 'Check the status banner after Once Human updates before you queue.',
    items: [
      'Windows 10 & 11',
      'Intel or AMD',
      'Once Human',
      'Portal updater',
      'Config save/load',
      'Discord support',
      'License reset',
      'Cloud DMA (listed)',
    ],
  },
  cheats: {
    eyebrow: 'Plans',
    title: 'Once Human Hacks plans',
    subtitle:
      'Complete Once Human Hacks is the main Once Human suite. Aimbot, player ESP, creature ESP, item ESP, radar, and object ESP ship on one key.',
    viewAll: 'Compare all plans',
    explore: 'Explore',
    items: [
      {
        badge: 'Most popular',
        tier: 'Full suite',
        name: 'Complete',
        title: 'Complete Once Human Hacks',
        desc: 'Full Once Human Hacks bundle: aimbot, player ESP, creature ESP, item ESP, radar, object ESP, and misc tools on one key.',
        features: [
          'Aimbot with FOV and smoothing',
          'Player, NPC, and creature ESP',
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
    title: 'Once Human Cheats',
    subtitle:
      'Complete Once Human Hacks plus utilities (Cloud DMA, HWID Spoofer, Skin Changer) for Windows PC. Durations are chosen on merchant checkout. Nothing is priced on this site.',
    hacksTitle: 'Main hacks',
    hacksSubtitle:
      'One Once Human Hacks suite: aimbot, player ESP, creature ESP, item ESP, radar, and object ESP on a single key.',
    utilitiesTitle: 'Addon utilities',
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
        subtitle: 'Aimbot, ESP, creature, radar',
        desc: 'Everything in one Once Human Hacks package: aimbot, player ESP, creature ESP, loot, radar, and misc tools.',
        features: ['Full aimbot suite', 'Player and creature ESP', 'Item ESP and radar', 'Config save/load'],
        more: 40,
        href: `${productBase}complete/`,
      },
    ],
  },
  forumHome: {
    eyebrow: 'Community',
    title: 'Once Human Hacks forum',
    subtitle: 'Loader setup, aimbot FOV, creature ESP, radar range, and patch-day notes from players running Once Human Hacks on Windows PC.',
    viewAll: 'Browse forum communities',
  },
  reviews: {
    totalLabel: 'Community reviews',
  },
  toolkit: {
    eyebrow: 'Menu layout',
    title: 'Once Human Hacks menu, organized',
    subtitle: 'Modules are grouped so you can tune aimbot, ESP, creatures, and radar between sessions without hunting through tabs.',
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
        title: 'Players through cover',
        desc: 'Boxes, skeleton, health, shield, kit, names, and distance for players and NPCs.',
      },
      {
        num: '03',
        label: 'Creatures',
        title: 'Threats before they see you',
        desc: 'Creature tracking, loot visualization, and creature radar.',
      },
      {
        num: '04',
        label: 'Loot',
        title: 'Items and objects worth the risk',
        desc: 'Weapons, keys, containers, medical crates, and resource markers.',
      },
      {
        num: '05',
        label: 'Radar',
        title: 'A 2D map you can resize',
        desc: 'Smooth rotation, labels, and range so open-world routes stay readable.',
      },
      {
        num: '06',
        label: 'Profiles',
        title: 'Configs for PvP and PvE',
        desc: 'Save and load presets instead of rebuilding FOV and ESP range every session.',
      },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 steps',
    titleBefore: 'From plan to',
    titleHighlight: 'in-game tools.',
    subtitle: 'Choose a Once Human Hacks plan, download the loader, enable modules, and save configs for your next Once Human session.',
    ctaLabel: 'View plans',
    ctaHref: productBase,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check status',
        desc: 'Read the live banner on oncehumanhacks.com before you buy or queue.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Pick Complete or a utility',
        desc: 'Open Complete Once Human Hacks, then add Cloud DMA, HWID Spoofer, or Skin Changer if those listings match your setup.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch and configure',
        desc: 'Download from the portal, enable modules, and test in a quiet area before a contested fight.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your config',
        desc: 'When settings feel right, save PvP and loot presets through the config system.',
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
        desc: 'Check Discord and the portal status before you queue after a Once Human update.',
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
    title: 'Once Human Hacks support: loader, checkout & help',
    subtitle: 'Loader, checkout, and account help for Once Human on Windows PC.',
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
      { title: 'Order email', desc: 'The email you used at checkout on oncehumanhacks.com.' },
      { title: 'Platform', desc: 'Windows 10 or 11, and your Once Human build.' },
      { title: 'Error detail', desc: 'Screenshot or exact text from the loader or game client.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Once Human Cheat FAQ',
    subtitle: 'Compatibility, risk, plans, and setup. Straight answers before you checkout.',
    items: [
      {
        num: '01',
        q: 'Where do I check if Once Human Hacks is online?',
        a: 'The live status banner is on oncehumanhacks.com and in the Discord #status channel. Always check after a Once Human update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Your portal unlocks the loader, setup guide, and config library via merchant checkout. Follow the guide before launching Once Human.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party Once Human Hacks tools?',
        a: 'Yes. Any modification carries risk. Once Human reports and rule enforcement can lead to account action. Read current status and accept the risk before use.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Once Human on Windows 10/11. Console and macOS are not supported. Confirm CPU, HVCI, and Cloud DMA notes on the merchant page.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes. Use the license reset in your portal or open a Discord ticket. Limits depend on your plan.',
      },
      {
        num: '06',
        q: 'Where are products listed?',
        a: 'Complete Once Human Hacks plus Cloud DMA, HWID Spoofer, and Skin Changer live on the Once Human Cheats product hub with feature lists and checkout when you are ready.',
      },
    ],
  },
  footer: {
    tagline: 'Once Human Hacks for PC: aimbot, ESP, creature tracking, and radar.',
    explore: 'Explore',
    exploreLinks: [
      { href: '/#features', label: 'Feature overview', ariaLabel: 'Feature modules' },
      { href: `${productBase}complete/#product-features`, label: 'Complete suite', ariaLabel: 'Complete plan modules' },
      { href: `${productBase}#hacks`, label: 'All products', ariaLabel: 'Product hub hacks' },
      { href: '/blog/#blog-list-heading', label: 'Once Human guides', ariaLabel: 'Blog index' },
      { href: '/#forum', label: 'Community forums', ariaLabel: 'Homepage forum' },
      { href: '/reviews/#reviews-list-title', label: 'Player reviews', ariaLabel: 'Reviews list' },
      { href: '/#faq', label: 'Pre-purchase FAQ', ariaLabel: 'Homepage FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About Once Human Hacks: plans, forums, checkout',
      description:
        'We publish plan comparisons, setup notes, and live status for PC players comparing aimbot, ESP, creature, and radar modules before checkout.',
      sections: [
        {
          heading: 'Once Human Hacks: who we are',
          paragraphs: [
            'Once Human Hacks is an independent PC resource for Once Human cheat software. We explain what each plan includes, how the loader works, and where to check live status before you queue.',
            'Product and game names on this site are for identification only. We do not represent Starry Studio, NetEase, or the Once Human team.',
          ],
        },
        {
          heading: 'What we offer',
          paragraphs: [
            'Complete Once Human Hacks covers aimbot, ESP, creature tracking, radar, and misc tools on Windows 10 and 11. The forums and FAQ walk through configs, patch-day checks, and conservative presets for PvP, PvE, and loot runs.',
            'Pages refresh when the loader or Once Human updates change. Always read the homepage status banner and Discord #status before you launch a session.',
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
        'Your privacy matters when you browse product pages. This overview explains how oncehumanhacks.com handles analytics, cookies, contact messages, and secure checkout.',
      sections: [
        {
          heading: 'Privacy: information we collect',
          paragraphs: [
            'We may collect basic analytics such as page views, device type, browser, and approximate region through Google Analytics when it is enabled. Checkout runs on external pages operated by the seller. We do not store payment card numbers on oncehumanhacks.com.',
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
      title: 'Terms for Once Human Hacks | License & Refunds',
      description:
        'Terms for buying Once Human Hacks on oncehumanhacks.com: license use, delivery, refunds, and account risk on Once Human.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: November 2026. By using oncehumanhacks.com or buying a product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell Complete Once Human Hacks plus Cloud DMA, HWID Spoofer, and Skin Changer utilities through a portal and Windows loader for Once Human.',
            'Product pages list what is included when you buy. Features can change when Once Human updates.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. oncehumanhacks.com does not process or store payment card numbers.',
            'After purchase, use the operator portal linked from your order flow to download the current loader and setup guide before launching Once Human.',
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
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, Once Human account action, or issues caused by ignoring setup guides or running modules while the status banner shows offline.',
            'If the product does not work as described on a supported setup (Once Human on Windows 10/11, current loader from the portal, and the live status banner showing online when you started), contact us through the Support page. Include your order email, Windows version, game build, and screenshots or exact error text from the loader.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for Once Human can conflict with game updates. You use this software at your own risk, including possible account action.',
            'Check the homepage status banner before every session. Do not queue while modules are offline or misaligned after a patch.',
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
      title: 'Once Human Hacks Support | Loader & Checkout',
      description: 'Once Human Hacks support for loader setup, license moves, and checkout help at oncehumanhacks.com.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Shop Once Human Hacks',
    browseCheatsMobile: 'Shop plans',
    homeAria: 'Once Human Hacks home',
    checkoutAria: 'Start checkout',
    discordAria: 'Join Once Human Hacks on Discord',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
