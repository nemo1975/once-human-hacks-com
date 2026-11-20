export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
}

export const forumCategories = [
  { name: 'Setup & Loader', tone: 'blue', icon: 'settings' },
  { name: 'Aimbot', tone: 'orange', icon: 'featureAimbot' },
  { name: 'ESP & Radar', tone: 'green', icon: 'featureEsp' },
  { name: 'Purchasing', tone: 'purple', icon: 'instantDelivery' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'General', tone: 'purple', icon: 'users' },
] as const;

export const forumPosts: ForumPost[] = [
  {
    slug: 'first-loader-setup-windows-11',
    category: 'Setup & Loader',
    categoryTone: 'blue',
    title: 'First-time loader setup on Windows 11. What am I missing?',
    excerpt: 'Clean install, ran as admin, still stuck at “waiting for game window”. Anyone got a checklist?',
    author: 'sand_rookie_09',
    age: '3 hours ago',
    commentsCount: 5,
    upvotes: 94,
    flair: 'Setup help',
    body: [
      'Picked up a plan for SAND and I cannot get past the loader screen. Game launches fine, but the client just sits on waiting for game window.',
      'I disabled overlay apps, ran the loader as administrator, and rebooted twice. Do I need borderless before inject?',
    ],
    comments: [
      {
        author: 'dune_grind',
        age: '2 hours ago',
        score: 31,
        body: 'Switch to borderless windowed first. Fullscreen exclusive blocked inject for me until I changed video settings.',
      },
      {
        author: 'loader_wizard',
        age: '2 hours ago',
        score: 22,
        body: 'Start loader AFTER the main menu loads, not at the splash. Also close RGB software if it hooks the game.',
        replies: [
          {
            author: 'sand_rookie_09',
            age: '1 hour ago',
            score: 8,
            body: 'Borderless + launch order fixed it. Thanks, menu inject worked on second try.',
          },
          {
            author: 'loader_wizard',
            age: '58 min. ago',
            score: 5,
            body: 'Nice. Save that profile so you do not tweak twelve things next session.',
          },
        ],
      },
      {
        author: 'still_stuck_x',
        age: '1 hour ago',
        score: -2,
        body: 'Did all that and still nothing. Support ticket open 24h with no reply which is annoying.',
      },
    ],
  },
  {
    slug: 'aimbot-smoothness-and-fov-sweet-spot',
    category: 'Aimbot',
    categoryTone: 'orange',
    title: 'Smoothness vs FOV. What actually looks natural in city fights?',
    excerpt: 'Higher smooth feels lazy, lower smooth snaps on clips. Looking for a sane starting point near extract zones.',
    author: 'soft_aim_dad',
    age: '5 hours ago',
    commentsCount: 5,
    upvotes: 118,
    flair: 'Tuning',
    body: [
      'Running Complete with aim assist in urban blocks and Trampler decks. I keep changing smoothness every raid because killcam moments look either robotic or like I forgot how to aim.',
      'What FOV circle and smooth values do you leave alone for hours? Mostly rifle fights at mid range before an extract timer.',
    ],
    comments: [
      {
        author: 'rifle_only',
        age: '4 hours ago',
        score: 41,
        body: 'Start FOV modest and smoothness high enough that it does not snap on a flick. Raise FOV later if you miss close fights in alleys.',
      },
      {
        author: 'deck_pocket',
        age: '3 hours ago',
        score: 19,
        body: 'Trampler turret angles want a smaller FOV than open dunes. Save a separate profile or you will look silly on deck ladders.',
      },
      {
        author: 'soft_aim_dad',
        age: '2 hours ago',
        score: 6,
        body: 'Dropped FOV and it already looks less stupid in my last clip. Thanks.',
      },
    ],
  },
  {
    slug: 'esp-boxes-too-bright-at-night-maps',
    category: 'ESP & Radar',
    categoryTone: 'green',
    title: 'ESP boxes too loud in night cities. Any color tips?',
    excerpt: 'Boxes glow like a beacon in downtown. Need a layout that still works for Upior patrols.',
    author: 'box_painter',
    age: '8 hours ago',
    commentsCount: 4,
    upvotes: 76,
    flair: 'Visuals',
    body: [
      'Default box color is fine on bright dunes. In shadowed streets it is just noise. Health and shield bars stack on names and I cannot tell who is actually peeking a corner.',
      'Do you run skeleton only, or corner boxes with names off?',
    ],
    comments: [
      {
        author: 'city_main',
        age: '7 hours ago',
        score: 22,
        body: 'Names off, distance on, skeleton for tight blocks. Boxes only when I am routing loot.',
      },
      {
        author: 'lowspec_ivan',
        age: '6 hours ago',
        score: 14,
        body: 'Cap max distance. You do not need tags from three blocks away when you are already on the extract elevator.',
      },
    ],
  },
  {
    slug: 'trampler-extract-esp-in-cities',
    category: 'ESP & Radar',
    categoryTone: 'green',
    title: 'Is ESP worth it for city extracts when Tramplers dominate the skyline?',
    excerpt: 'Trying to figure out if radar pays off when every block has a walking mech silhouette.',
    author: 'long_rifle',
    age: '11 hours ago',
    commentsCount: 4,
    upvotes: 88,
    flair: 'Extracts',
    body: [
      'I bought ESP for contested extract stairs and captain quarters runs. Half the time I already hear a Trampler lumbering in. The other half I still get swung on by a player who used the deck shadow.',
      'Do you leave Trampler radar on during every pull, or only when you are hijacking?',
    ],
    comments: [
      {
        author: 'cat_control',
        age: '9 hours ago',
        score: 27,
        body: 'Trampler ESP is for the loot box someone already cracked on the far deck—not the one you hear from a mile away.',
      },
      {
        author: 'short_stop',
        age: '8 hours ago',
        score: 11,
        body: 'Turn down opacity. Full bright boxes on extract rooftops is how you get clipped in a report.',
      },
    ],
  },
  {
    slug: 'weekly-vs-monthly-key-value',
    category: 'Purchasing',
    categoryTone: 'purple',
    title: 'Short trial vs longer key. Is the trial worth it?',
    excerpt: 'Do not want to commit if the loader hates my PC.',
    author: 'budget_queue',
    age: '1 day ago',
    commentsCount: 4,
    upvotes: 63,
    flair: 'Keys',
    body: [
      'First time buying anything on this site. A short license window looks like a cheap way to test Win11. A longer window is the obvious value if it works.',
      'Anyone buy a trial, hate setup, and just walk away?',
    ],
    comments: [
      {
        author: 'late_shift_gamer',
        age: '22 hours ago',
        score: 18,
        body: 'Trial key, loader worked first try, renewed. That is the whole story.',
      },
      {
        author: 'patchday_grump',
        age: '20 hours ago',
        score: 9,
        body: 'If you buy during a patch weekend, the trial can vanish while status is offline. Check the banner first.',
      },
    ],
  },
  {
    slug: 'payment-pending-no-key-yet',
    category: 'Purchasing',
    categoryTone: 'purple',
    title: 'Payment pending, portal still empty',
    excerpt: 'Card went through, no key after 20 minutes.',
    author: 'receipt_hunter',
    age: '1 day ago',
    commentsCount: 3,
    upvotes: 41,
    flair: 'Billing',
    body: [
      'Checkout said success. Portal still says I have no products. Used the same email as the order.',
      'Do I wait or open a ticket with the receipt ID?',
    ],
    comments: [
      {
        author: 'support_lurker',
        age: '23 hours ago',
        score: 16,
        body: 'Ticket with receipt ID. Crypto is usually instant; cards sometimes sit in pending.',
      },
    ],
  },
  {
    slug: 'patch-day-menu-not-opening',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'After today’s SAND patch, menu key does nothing',
    excerpt: 'Game updated this morning, loader says compatible but menu bind is dead in raid.',
    author: 'insert_dead',
    age: '6 hours ago',
    commentsCount: 5,
    upvotes: 132,
    flair: 'Patch',
    body: [
      'Client updated SAND. Loader still shows online. In-game the menu bind does nothing. Scav and PvP lobbies, same thing.',
      'Is this a “wait for portal build” situation or did I need to rebind?',
    ],
    comments: [
      {
        author: 'status_reader',
        age: '5 hours ago',
        score: 38,
        body: 'Banner was still green for me too, then Discord #status flipped to updating. Wait it out.',
      },
      {
        author: 'Sera_PC',
        age: '4 hours ago',
        score: 21,
        body: 'Grab the portal build even if the old loader launches. Menu bind came back after I replaced the file.',
      },
    ],
  },
  {
    slug: 'how-long-wait-after-game-update',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'How long do you actually wait after a SAND update?',
    excerpt: 'Some people queue immediately. That feels dumb after a SAND patch.',
    author: 'patience_meter',
    age: '2 days ago',
    commentsCount: 4,
    upvotes: 57,
    flair: 'Status',
    body: [
      'I know the FAQ says wait for online. In practice, how long has it been after the last few SAND drops?',
      'Not looking for a guarantee. Just a reality check so I do not burn a short key.',
    ],
    comments: [
      {
        author: 'zero_day_zed',
        age: '2 days ago',
        score: 24,
        body: 'Friday patch sat offline until Sunday last time. I would rather wait.',
      },
    ],
  },
  {
    slug: 'save-config-profiles-between-pcs',
    category: 'General',
    categoryTone: 'purple',
    title: 'Saving config profiles between two PCs',
    excerpt: 'Desktop and a travel laptop. Cloud sync actually work?',
    author: 'two_rigs',
    age: '3 days ago',
    commentsCount: 4,
    upvotes: 49,
    flair: 'Configs',
    body: [
      'Want city presets on the main PC and a lower ESP range on the travel laptop. Cloud save/load is in the misc list.',
      'Does export/import still work if HWID is different, or do I need a reset first?',
    ],
    comments: [
      {
        author: 'cloud_ok',
        age: '3 days ago',
        score: 15,
        body: 'Cloud configs followed the license after HWID reset. Export file also works if you do not want to wait.',
      },
    ],
  },
  {
    slug: 'obs-game-capture-showing-overlay',
    category: 'ESP & Radar',
    categoryTone: 'green',
    title: 'OBS Game Capture is showing the overlay',
    excerpt: 'Thought stream-safe meant Game Capture was clean. It is not.',
    author: 'OBS_guy',
    age: '4 days ago',
    commentsCount: 5,
    upvotes: 91,
    flair: 'Capture',
    body: [
      'Game Capture on SAND is picking up boxes. Display capture is worse. Discord share is also leaking.',
      'Is there a capture mode I am missing, or do I need to test a local recording first every patch?',
    ],
    comments: [
      {
        author: 'capture_lab',
        age: '4 days ago',
        score: 29,
        body: 'Record a 20-second local clip before you go live. Settings that were fine last month can leak after a SAND update.',
      },
      {
        author: 'quiet_scope',
        age: '3 days ago',
        score: 8,
        body: 'I just disable ESP if I stream. Not worth the report.',
      },
    ],
  },
  {
    slug: 'defender-exclusion-for-loader',
    category: 'Setup & Loader',
    categoryTone: 'blue',
    title: 'Defender flagged the loader. Exclusion path?',
    excerpt: 'Windows ate the download. Need the folder people actually exclude.',
    author: 'kb_m_and_mouse',
    age: '5 days ago',
    commentsCount: 3,
    upvotes: 54,
    flair: 'Windows',
    body: [
      'SmartScreen and Defender both yelled. Portal says add an exclusion. I do not want to exclude my whole user folder.',
      'Which path did you add that actually stuck?',
    ],
    comments: [
      {
        author: 'loader_wizard',
        age: '5 days ago',
        score: 20,
        body: 'Exclude the portal download folder only, not the game install. Then re-download from the portal, not a Discord DM.',
      },
    ],
  },
  {
    slug: 'triggerbot-vs-full-aim-sniper',
    category: 'Aimbot',
    categoryTone: 'orange',
    title: 'Hold aim vs full tracking on deck sniper fights',
    excerpt: 'Full aim on long lanes looks awful. Is hold + visible check enough?',
    author: 'deck_pocket',
    age: '5 days ago',
    commentsCount: 4,
    upvotes: 72,
    flair: 'Decks',
    body: [
      'The aimbot plan has hotkey hold and always-on. Always-on across a dune ridge is a meme. Hold with a small FOV is closer to how I already play.',
      'Anyone keeping a dedicated profile with chest bone and visible check only?',
    ],
    comments: [
      {
        author: 'long_rifle',
        age: '4 days ago',
        score: 17,
        body: 'Chest + tiny FOV + visible check. Head priority on moving targets is how you get the ugly flick.',
      },
    ],
  },
  {
    slug: 'skeleton-esp-fps-drop-1080ti',
    category: 'ESP & Radar',
    categoryTone: 'green',
    title: 'Skeleton ESP dropping FPS on a 1080 Ti',
    excerpt: 'Boxes are fine. Skeleton tanks frames in dense cities.',
    author: 'lowspec_ivan',
    age: '6 days ago',
    commentsCount: 4,
    upvotes: 38,
    flair: 'Performance',
    body: [
      'SAND already is not kind to this GPU. Skeleton ESP downtown is the extra hit. Corner boxes stay playable.',
      'Is skeleton just heavier, or did I leave max distance at default?',
    ],
    comments: [
      {
        author: 'box_painter',
        age: '6 days ago',
        score: 12,
        body: 'Cap distance and drop skeleton. Boxes plus health is enough on that card.',
      },
    ],
  },
  {
    slug: 'head-vs-chest-bone-priority',
    category: 'Aimbot',
    categoryTone: 'orange',
    title: 'Head vs chest bone priority for rifles',
    excerpt: 'Head looks cracked in open dunes. Chest feels more honest in PvP.',
    author: 'northbound42',
    age: '1 week ago',
    commentsCount: 4,
    upvotes: 81,
    flair: 'Bones',
    body: [
      'Head priority was too snappy out of the box. Chest + visible check felt better after a night of scav runs.',
      'Do you swap bones per weapon or leave one setting for everything?',
    ],
    comments: [
      {
        author: 'rifle_only',
        age: '6 days ago',
        score: 23,
        body: 'Chest for rifles, head only if FOV is tiny. Closest bone is a mess in a 2v1 on extract stairs.',
      },
    ],
  },
  {
    slug: 'new-pc-license-transfer-hwid',
    category: 'Setup & Loader',
    categoryTone: 'blue',
    title: 'New PC, HWID reset greyed out',
    excerpt: 'Built a new box. Portal reset button is dead.',
    author: 'newhwidwho',
    age: '1 week ago',
    commentsCount: 4,
    upvotes: 44,
    flair: 'HWID',
    body: [
      'Moved to a new PC. Portal HWID reset is greyed out. My key still has time left.',
      'Do I email support or is there a cooldown I missed?',
    ],
    comments: [
      {
        author: 'hwid_once',
        age: '6 days ago',
        score: 14,
        body: 'There is a cooldown after a recent reset. Email with order email. Do not spam the button.',
      },
      {
        author: 'unlucky_reset',
        age: '5 days ago',
        score: -1,
        body: 'Support took 2 days for me. Self reset button was greyed out, no idea why.',
      },
    ],
  },
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}

export function getFeaturedForumPosts(limit: number): ForumPost[] {
  return [...forumPosts].sort((a, b) => b.upvotes - a.upvotes).slice(0, limit);
}

export function getRelatedForumPosts(slugs: string[], limit = 6): ForumPost[] {
  const picked: ForumPost[] = [];
  for (const slug of slugs) {
    const post = getForumPost(slug);
    if (post) picked.push(post);
    if (picked.length >= limit) break;
  }
  return picked;
}