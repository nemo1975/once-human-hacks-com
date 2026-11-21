import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

const HUB = '/products/once-human-hacks/';
const COMPLETE = '/products/once-human-hacks/complete/';
const BEST = '/blog/best-once-human-hacks/';
const AIMBOT = '/blog/once-human-aimbot-settings/';
const PLANS = '/blog/once-human-hacks-plans/';
const ESP = '/blog/once-human-esp-and-radar/';
const SETUP = '/blog/once-human-hacks-setup-guide/';
const RISK = '/blog/once-human-hacks-account-risk/';
const CHOOSE = '/blog/how-to-choose-once-human-hacks/';
const PRESETS = '/blog/once-human-hacks-config-presets/';
const HWID = '/blog/once-human-hwid-reset/';
const TROUBLE = '/blog/once-human-hacks-troubleshooting/';
const PVP = '/blog/once-human-pvp-and-pve/';
const FREE = '/blog/once-human-free-vs-paid-hacks/';

export default defineConfig({
  site: 'https://oncehumanhacks.com',
  trailingSlash: 'always',
  redirects: {
    '/cheats/': HUB,
    '/cheats/lite/': HUB,
    '/cheats/pro/': HUB,
    '/cheats/elite/': COMPLETE,
    '/cheats/compare/': '/forum/',
    '/products/sand-hacks/': HUB,
    '/products/sand-hacks/complete/': COMPLETE,
    '/products/sand-hacks/cloud-dma/': '/products/once-human-hacks/cloud-dma/',
    '/products/sand-hacks/hwid-spoofer/': '/products/once-human-hacks/hwid-spoofer/',
    '/products/sand-hacks/skin-changer/': '/products/once-human-hacks/skin-changer/',
    '/products/sand-hacks/aimbot/': COMPLETE,
    '/products/sand-hacks/esp-radar/': COMPLETE,
    '/products/sand-hacks/esp-wallhack/': COMPLETE,
    '/products/csgo-cheats/': HUB,
    '/products/csgo-cheats/complete/': COMPLETE,
    '/products/csgo-cheats/aimbot/': COMPLETE,
    '/products/csgo-cheats/esp-wallhack/': COMPLETE,
    '/products/battlefield-6-cheats/': HUB,
    '/products/battlefield-6-cheats/complete/': COMPLETE,
    '/products/battlefield-6-cheats/aimbot/': COMPLETE,
    '/products/battlefield-6-cheats/esp-wallhack/': COMPLETE,
    '/products/fortnite-cheats/': HUB,
    '/products/dota-2-cheats/': HUB,
    '/products/cs2-cheats/': HUB,
    '/products/cs2-cheats/complete/': COMPLETE,
    '/products/cs2-cheats/aimbot/': COMPLETE,
    '/products/cs2-cheats/esp-wallhack/': COMPLETE,
    '/contact/': '/support/',
    '/blog/best-sand-hacks/': BEST,
    '/blog/sand-aimbot-settings/': AIMBOT,
    '/blog/sand-hacks-plans/': PLANS,
    '/blog/sand-esp-and-radar/': ESP,
    '/blog/sand-hacks-setup-guide/': SETUP,
    '/blog/sand-hacks-account-risk/': RISK,
    '/blog/how-to-choose-sand-hacks/': CHOOSE,
    '/blog/sand-hacks-config-presets/': PRESETS,
    '/blog/sand-hwid-reset/': HWID,
    '/blog/sand-hacks-troubleshooting/': TROUBLE,
    '/blog/sand-extracts-and-tramplers/': PVP,
    '/blog/sand-free-vs-paid-hacks/': FREE,
    '/blog/best-csgo-cheats/': BEST,
    '/blog/csgo-aimbot-settings/': AIMBOT,
    '/blog/csgo-cheat-pricing/': PLANS,
    '/blog/csgo-wallhack-explained/': ESP,
    '/blog/csgo-cheat-setup-guide/': SETUP,
    '/blog/csgo-ban-risk/': RISK,
    '/blog/how-to-choose-a-csgo-cheat-provider/': CHOOSE,
    '/blog/csgo-config-presets/': PRESETS,
    '/blog/csgo-hwid-reset/': HWID,
    '/blog/csgo-cheat-troubleshooting/': TROUBLE,
    '/blog/csgo-deathmatch-and-casual/': PVP,
    '/blog/csgo-free-vs-paid-cheats/': FREE,
    '/blog/best-cs2-cheats/': BEST,
    '/blog/cs2-aimbot-settings/': AIMBOT,
    '/blog/cs2-cheat-pricing/': PLANS,
    '/blog/cs2-wallhack-explained/': ESP,
    '/blog/cs2-cheat-setup-guide/': SETUP,
    '/blog/cs2-ban-risk/': RISK,
    '/blog/how-to-choose-a-cs2-cheat-provider/': CHOOSE,
    '/blog/cs2-config-presets/': PRESETS,
    '/blog/cs2-hwid-reset/': HWID,
    '/blog/cs2-cheat-troubleshooting/': TROUBLE,
    '/blog/cs2-deathmatch-and-casual/': PVP,
    '/blog/cs2-free-vs-paid-cheats/': FREE,
    '/blog/best-battlefield-6-cheats/': BEST,
    '/blog/battlefield-6-aimbot-esp-features/': AIMBOT,
    '/blog/battlefield-6-cheat-pricing/': PLANS,
    '/blog/battlefield-6-esp-wallhack-explained/': ESP,
    '/blog/battlefield-6-cheat-setup-guide/': SETUP,
    '/blog/battlefield-6-ban-risk-explained/': RISK,
    '/blog/how-to-choose-a-battlefield-6-cheat-provider/': CHOOSE,
    '/blog/battlefield-6-config-presets/': PRESETS,
    '/blog/battlefield-6-hwid-reset-guide/': HWID,
    '/blog/battlefield-6-cheat-troubleshooting-faq/': TROUBLE,
    '/blog/battlefield-6-bot-lobbies-and-casual-play/': PVP,
    '/blog/battlefield-6-free-vs-paid-cheats/': FREE,
    '/forum/trampler-extract-esp-in-cities/': '/forum/world-esp-in-settlements/',
    '/forum/smoke-executes-and-esp-on-dust2/': '/forum/world-esp-in-settlements/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
