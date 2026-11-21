import { DISCORD_URL, PRODUCT_BASE, SUPPORT_EMAIL } from '../config/site';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import type { ExpansionCta, ExpansionFaq, ExpansionSection, ExpansionTable } from './pageExpansions.types';

const checkout = PRIMARY_CHECKOUT_PATH;

export const supportExpansion = {
  sections: [
    {
      heading: 'Support: who this page is for',
      paragraphs: [
        'This support hub is for PC players who already bought, or are about to buy, a Once Human Hacks plan and need help with the loader, license moves, or checkout. We answer tickets through email and Discord. Include details up front so staff can reproduce the issue without a long back-and-forth.',
        'If you have not purchased yet, read the product comparison on our plans hub, the pre-purchase FAQ, and live status on the homepage before you pay. Support cannot override Once Human downtime shown on the status banner.',
      ],
    },
    {
      heading: 'What support can help with',
      subheading: 'Loader and license issues',
      paragraphs: [
        'Common tickets cover loader startup errors, missing keys after payment, HWID resets when you replace a PC, and config imports from the operator portal. Attach your order email, Windows version (10 or 11), and how you launch Once Human.',
        'For patch-day problems, wait until the status banner shows online again before reinstalling. Support will link you to the current portal build. Never download loaders from random Discord DMs.',
      ],
    },
    {
      heading: 'Checkout and billing questions',
      paragraphs: [
        'Checkout runs on the seller’s secure page linked from our site. We do not store card numbers on oncehumanhacks.com. If payment succeeded but your portal is empty, open a ticket with the processor receipt ID and the email used at checkout.',
        'Refund rules are listed in our Terms & Conditions. Support may offer fixes or replacements when the product fails on a supported setup while the status banner showed online. Change-of-mind refunds are not offered.',
      ],
    },
    {
      heading: 'Response times and channels',
      paragraphs: [
        `Email ${SUPPORT_EMAIL} for account-specific issues that should stay on record. Discord is best for live loader walkthroughs during setup. Join via the invite linked from the homepage and open a ticket in the support channel rather than posting keys in public chat.`,
        'Include screenshots of loader errors (redact personal emails if you post publicly in the forum). Support is advertised as 24/7, but complex patch-day queues can add delay. Check #status before you escalate.',
      ],
    },
  ] satisfies ExpansionSection[],
  table: {
    caption: 'Support checklist: include in every ticket',
    headers: ['Item', 'Why it matters'],
    rows: [
      ['Order email', 'Matches your portal login and license key'],
      ['Plan tier (Complete, Aimbot, ESP & radar)', 'Determines which modules you should see'],
      ['Windows version + build', 'Loader builds differ between 10 and 11'],
      ['Launch path for Once Human', 'Loader waits for the correct game window'],
      ['Exact error text or screenshot', 'Avoids guesswork on generic “menu not opening” reports'],
      ['Last time status banner showed online', 'Shows whether you ignored an offline warning'],
    ],
  } satisfies ExpansionTable,
  faqs: [
    {
      id: 'support-response-time',
      q: 'How fast does support usually reply?',
      a: 'Simple loader questions often get a first reply within a few hours on Discord; email may take longer on patch days. Include the checklist items so your ticket is not bounced for missing info.',
    },
    {
      id: 'support-hwid',
      q: 'How do I request an HWID reset?',
      a: 'Start the reset from your operator portal when the option is available, or email support with your order email and reason for the hardware change. Limits depend on your plan and recent resets.',
    },
    {
      id: 'support-patch',
      q: 'The loader stopped working after a game update. What now?',
      a: 'Do not reuse old configs. Check the homepage status banner and Discord #status. Wait for an online signal, download the portal build support links you to, and test in a low-stakes low-stakes PvE run first.',
    },
    {
      id: 'support-payment',
      q: 'Which payment methods work at checkout?',
      a: 'Card, PayPal, mobile wallets, and crypto are listed on the seller checkout page linked from our plans hub. Pick your plan duration on that page before you pay.',
    },
    {
      id: 'support-refunds',
      q: 'Can support issue a refund?',
      a: 'Support follows the Terms & Conditions: sales are final for change-of-mind, bans, or ignoring setup guides. They may help with fixes or portal access when the product fails on a supported setup while status showed online.',
    },
    {
      id: 'support-discord-email',
      q: 'Should I use Discord or email?',
      a: 'Use Discord for interactive setup help; use email when you need a written record for billing or HWID issues. Never share license keys in public forum threads.',
    },
    {
      id: 'support-platform',
      q: 'Does support cover console or macOS?',
      a: 'No. Plans are for Once Human on Windows 10/11 only. Console and macOS are unsupported.',
    },
    {
      id: 'support-sharing',
      q: 'Can I share my loader with a friend?',
      a: 'No. Licenses are personal. Sharing keys or portal logins violates the Terms and can revoke access. Each player needs their own plan from checkout.',
    },
  ] satisfies ExpansionFaq[],
  trustHeading: 'Proof and community context',
  trustItems: [
    'Community reviews and player write-ups live on our reviews hub. They are not verified purchase ratings. Read them for setup anecdotes, not as proof of safety.',
    `Discord invite: ${DISCORD_URL}`,
    'Forum threads linked from product pages show how other players solved similar loader errors. Search there before duplicating a common question.',
  ],
  cta: {
    heading: 'Still stuck?',
    body: 'Gather the checklist items above, then reach out through Discord or email. For plan comparisons or module lists, visit the product hub or full FAQ first.',
    primaryLabel: 'Email support',
    primaryHref: `mailto:${SUPPORT_EMAIL}`,
    secondaryLabel: 'Browse setup FAQ',
    secondaryHref: '/faq/',
  } satisfies ExpansionCta,
};

export const aboutExpansion = {
  sections: [
    {
      heading: 'Once Human: what this site covers',
      paragraphs: [
        'Once Human Hacks on oncehumanhacks.com is an editorial and commerce front for PC players comparing the Complete Once Human Hacks suite and utilities before checkout. We publish module breakdowns, setup notes, forum links, and honest downtime reminders, not official Starry Studio support.',
        'Players landing here usually want a clear map from marketing claims to what the operator portal actually ships: what Complete includes, how keys deliver, and where to read patch-day Once Human status.',
      ],
    },
    {
      heading: 'Forums, checkout paths, and player resources',
      paragraphs: [
        `The forum hosts setup threads, OBS capture notes, and session tuning discussions from other buyers. Checkout paths start on our plans hub and finish on the seller page linked through ${checkout}. Plan tiers match the modules described on product detail pages.`,
        'Use the blog for long-form comparisons (plans, account risk, HWID resets) and the FAQ for quick filters by topic. The reviews page collects player write-ups without replacing your own due diligence on status and compatibility.',
      ],
    },
    {
      heading: 'How products are split on this site',
      subheading: 'Complete Once Human Hacks and utilities',
      paragraphs: [
        'Complete bundles merchant-listed aimbot, player ESP, creature tracking, item ESP, radar, object ESP, and misc modules on one key. That is the only main hacks product.',
        'Utilities are separate: Cloud DMA, HWID Spoofer, and Skin Changer. Each product page lists the modules, checkout steps, and system requirements (Windows 10/11).',
      ],
    },
    {
      heading: 'Updates, accuracy, and independence',
      paragraphs: [
        'When Once Human changes, we update product copy, blog posts, and status reminders. Module lists should match the portal; if they diverge, trust the portal download and ask support.',
        'We are not affiliated with Starry Studio. Game names are used for identification. Using third-party tools can violate game rules and carries ban risk. Read our account-risk article before purchase.',
      ],
    },
  ] satisfies ExpansionSection[],
  table: {
    caption: 'Once Human Hacks site map for new visitors',
    headers: ['Resource', 'Best for'],
    rows: [
      ['Plans hub', 'Complete Once Human Hacks plus Cloud DMA, HWID Spoofer, and Skin Changer'],
      ['Product detail pages', 'Module lists, screenshots, and how to get a key'],
      ['FAQ index', 'Filtered answers on setup, safety, and plans'],
      ['Forum', 'Player threads on configs and patch day'],
      ['Reviews', 'Community player reviews on modules and setup'],
      ['Blog', 'Long guides on plans, ESP layouts, and HWID resets'],
      ['Support', 'Loader errors, billing, and HWID resets'],
    ],
  } satisfies ExpansionTable,
  faqs: [
    {
      id: 'about-what-is',
      q: 'Is this the official Once Human website?',
      a: 'No. This is an independent resource and storefront front-end for third-party PC tools. Starry Studio does not operate or endorse this site.',
    },
    {
      id: 'about-buy',
      q: 'Where do I actually purchase a plan?',
      a: `Choose a tier on the plans hub, then checkout through the seller link (${checkout}). Your key and loader unlock in the operator portal after payment.`,
    },
    {
      id: 'about-forum-faq',
      q: 'Should I read the forum or the FAQ first?',
      a: 'Start with the FAQ for structured answers. Use the forum for anecdotal tuning tips and patch-day chatter linked from product pages.',
    },
    {
      id: 'about-updates',
      q: 'How often is content updated?',
      a: 'Product pages and blog posts are revised when modules or loader requirements change. Always check the live status banner before you play after a patch.',
    },
    {
      id: 'about-platforms',
      q: 'Which platforms do you cover?',
      a: 'Windows 10 and 11 for Once Human. Console and macOS are out of scope.',
    },
    {
      id: 'about-risk',
      q: 'Does buying here guarantee I will not be banned?',
      a: 'No. Third-party tools carry risk. We document status and setup honestly, but you accept account action risk when you use hacks.',
    },
    {
      id: 'about-modules',
      q: 'How do I know what is in Complete?',
      a: 'Complete lists aimbot, player ESP, creature, item ESP, radar, object ESP, and misc groups on the product page. That is the only main hacks product. Confirm the live list on checkout.',
    },
    {
      id: 'about-help',
      q: 'Where do I get human help?',
      a: `Visit the Support page for email (${SUPPORT_EMAIL}) and Discord linked from the homepage. Include order email and platform details in tickets.`,
    },
  ] satisfies ExpansionFaq[],
  trustHeading: 'What we can point to today',
  trustItems: [
    'Reviews on this site are community write-ups, not verified star ratings. Filter by product or setup topic before you buy.',
    'Live status on the homepage and Discord #status is the authority for online/offline. Do not queue if either shows downtime.',
    'Module lists on product pages should match the operator portal. If they do not, trust the portal.',
  ],
  cta: {
    heading: 'Ready to open Complete?',
    body: 'Move from this overview to the product hub, open Complete Once Human Hacks, and read the buy steps before checkout. Check status on the homepage first.',
    primaryLabel: 'View Once Human Hacks products',
    primaryHref: PRODUCT_BASE,
    secondaryLabel: 'Read community reviews',
    secondaryHref: '/reviews/',
  } satisfies ExpansionCta,
};

export const productHubExpansion = {
  sections: [
    {
      heading: 'Complete Once Human Hacks plus utilities',
      paragraphs: [
        'This hub is for PC players who want Once Human Hacks with a clear module list before checkout. The main product is Complete (the full merchant-listed suite). Utilities sit in the second row: Cloud DMA, HWID Spoofer, and Skin Changer.',
        'Every product includes portal delivery and Discord-assisted setup as advertised on product detail pages. Re-check the homepage status banner before each session, especially after Once Human patches.',
      ],
    },
    {
      heading: 'What each plan includes',
      subheading: 'Modules and focus',
      paragraphs: [
        'Complete adds aimbot controls, player and NPC ESP, creature tracking and loot visualization, item ESP for weapons keys and resources, 2D radar, object ESP for containers and turrets, plus compass, crosshair, config save/load, and panic key in one license.',
        'Utilities are separate keys: Cloud DMA is the single-PC Hyper-V layer; HWID Spoofer changes hardware IDs with a cleaner; Skin Changer is the listed cosmetic client.',
      ],
    },
    {
      heading: 'Checkout and delivery',
      paragraphs: [
        'Plan durations are chosen on the merchant checkout page linked from each Buy button. Keys appear in the operator portal after payment clears.',
        'Payment methods listed on the seller checkout include card, PayPal, mobile wallets, and crypto. Confirm on the live checkout page before you pay. HWID resets are handled through the portal or support when you change PCs.',
      ],
    },
    {
      heading: 'Setup path after purchase',
      paragraphs: [
        'Acquisition steps on each product page follow the same rhythm: verify status, pick a plan, pay, download the portal loader, test configs in a quiet low-stakes PvE run, then save presets for contested fights. Support and forum threads linked from detail pages expand each step.',
        'System requirements are Windows 10 or 11 64-bit and hardware that meets Once Human itself. External loader architecture means files are not dropped into game directories. Risk remains, but setup stays isolated.',
      ],
    },
  ] satisfies ExpansionSection[],
  table: {
    caption: 'Complete Once Human Hacks and utilities',
    headers: ['', 'Complete', 'Cloud DMA', 'HWID Spoofer', 'Skin Changer'],
    rows: [
      ['Role', 'Main Once Human Hacks suite', 'Delivery layer', 'Hardware IDs', 'Cosmetics'],
      ['Includes', 'Aimbot, ESP, creature, radar, objects, misc', 'Single-PC Hyper-V DMA layer', 'Spoofer plus cleaner', 'Weapon skins and outfits'],
      ['Best for', 'Once Human sessions on one key', 'The listed catalog stack', 'Once Human hardware IDs', 'Cosmetic control'],
      ['Cloud DMA', 'Confirm on checkout', 'This product', 'Listed as required', 'Listed as required'],
      ['License windows', 'Merchant checkout options', 'Merchant checkout options', 'Merchant checkout options', 'Merchant checkout options'],
    ],
  } satisfies ExpansionTable,
  faqs: [
    {
      id: 'hub-beginner',
      q: 'Which plan should a first-time buyer choose?',
      a: 'The main hacks product is Complete. It lists aimbot, ESP, creature, radar, and misc tools on one key. Add Cloud DMA, HWID Spoofer, or Skin Changer only if those utilities match your setup.',
    },
    {
      id: 'hub-updates',
      q: 'Are updates included?',
      a: 'Yes. Free updates during your active key are included. Still check status after Once Human patches before you launch.',
    },
    {
      id: 'hub-requirements',
      q: 'What PC setup is required?',
      a: 'Windows 10 or 11, Once Human installed, and a portal account after checkout. See each product page for the full requirement list.',
    },
    {
      id: 'hub-payment',
      q: 'How does checkout work from this hub?',
      a: `Open the Complete card or a utility card, click Buy, and finish on the seller checkout page. Return to the portal for the loader, not third-party download links.`,
    },
    {
      id: 'hub-ban-risk',
      q: 'What account risk should I expect?',
      a: 'Any third-party tool can trigger Once Human account action. Read our account-risk blog post and never queue while status shows offline or testing.',
    },
    {
      id: 'hub-hwid',
      q: 'Can I move my key to a new PC?',
      a: 'Use the HWID reset flow in the portal or contact support with your order email. Frequency limits depend on your plan. The HWID Spoofer utility is a separate product for Once Human hardware IDs. Confirm the live listing on checkout.',
    },
    {
      id: 'hub-utilities',
      q: 'What are Cloud DMA, HWID Spoofer, and Skin Changer?',
      a: 'They are utilities, not the Complete Once Human Hacks suite. Cloud DMA is the single-PC Hyper-V delivery layer. HWID Spoofer changes hardware IDs with a cleaner for Once Human. Skin Changer is the listed cosmetic client. Spoofer and skin changer listings require Cloud DMA for full functionality.',
    },
    {
      id: 'hub-stream',
      q: 'Will overlays show on stream?',
      a: 'Stream-capture modes are discussed in forum threads linked from the Complete product page. Test OBS or Discord capture locally before going live.',
    },
    {
      id: 'hub-support',
      q: 'Where do I get help after buying?',
      a: `Open the Support page for ${SUPPORT_EMAIL} and Discord, or search forum threads linked from your product detail page.`,
    },
  ] satisfies ExpansionFaq[],
  trustHeading: 'Before you buy',
  trustItems: [
    'Community reviews on our hub are written by players, not verified purchase star averages. Filter by Complete, loader, or ESP topics.',
    'Live status on the homepage and Discord #status is the authority for online/offline. Do not queue if either shows downtime.',
    'Confirm the module list on checkout matches the tier you chose. We do not advertise features that are not merchant-listed.',
  ],
  cta: {
    heading: 'Open Complete and checkout',
    body: 'Open the Complete page for the full module list, then return here when you are ready to pay on the merchant page.',
    primaryLabel: 'View Complete suite',
    primaryHref: `${PRODUCT_BASE}complete/`,
    secondaryLabel: 'Read plan comparison',
    secondaryHref: '/blog/once-human-hacks-plans/',
  } satisfies ExpansionCta,
};

export function expansionFaqsToSchema(faqs: ExpansionFaq[]) {
  return faqs.map((item) => ({ q: item.q, a: item.a }));
}