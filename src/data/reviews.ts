export type ReviewProductFilter =
  | 'all'
  | 'complete'
  | 'aimbot'
  | 'esp'
  | 'setup'
  | 'license'
  | 'purchasing';

export interface SiteReview {
  author: string;
  when: string;
  /** Display label */
  product: string;
  body: string;
  rating: number;
  /** ISO-ish sort key YYYY-MM from when field */
  sortDate: string;
  filter: ReviewProductFilter;
}

export const REVIEW_FILTER_LABELS: Record<ReviewProductFilter, string> = {
  all: 'All products',
  complete: 'Complete suite',
  aimbot: 'Aimbot',
  esp: 'ESP & radar',
  setup: 'Setup & loader',
  license: 'License / HWID',
  purchasing: 'Checkout',
};

function review(
  author: string,
  when: string,
  product: string,
  body: string,
  filter: ReviewProductFilter,
  rating = 5,
): SiteReview {
  const [mon, year] = when.split(' ');
  const monthMap: Record<string, string> = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
  };
  const sortDate = `${year}-${monthMap[mon] ?? '06'}-01`;
  return { author, when, product, body, filter, rating, sortDate };
}

export const featuredReviews: SiteReview[] = [
  review(
    'MaceActual',
    'Feb 2026',
    'Complete suite',
    'Trampler radar plus item ESP for keys made city extracts less blind. Aimbot smoothing at a mid value felt okay on rifle fights if I keep FOV tight.',
    'complete',
    5,
  ),
  review(
    'site_anchor_j',
    'Jan 2026',
    'ESP & radar',
    'Player ESP through alleys is why I bought. Skeleton cost frames on my older GPU; corner boxes alone are enough for dune crossings.',
    'esp',
    5,
  ),
  review(
    'northbound42',
    'Mar 2026',
    'Aimbot module',
    'Head bone was too snappy out of the box. Chest plus visibility check felt more natural after a night of scav runs.',
    'aimbot',
    4,
  ),
  review(
    'Sera_PC',
    'Dec 2025',
    'Complete suite',
    'Loader was painless on Win11. Patch week was annoying—menu would not open until I grabbed the updated build from the portal.',
    'complete',
    4,
  ),
  review(
    'duoqueue_fail',
    'Feb 2026',
    'Purchasing',
    'Key landed quickly. Support answered a dumb question about borderless vs fullscreen without talking down to me.',
    'purchasing',
    5,
  ),
  review(
    'quiet_scope',
    'Jan 2026',
    'Aimbot module',
    'Not magic. You still need to lead shots on moving Trampler turrets. FOV circle helps me see when assist is even considering a target.',
    'aimbot',
    4,
  ),
  review(
    'patchday_grump',
    'Mar 2026',
    'Complete suite',
    'Frustrated after a SAND update when status said offline for a day. Worked again after the refresh. Just wish the banner was clearer.',
    'complete',
    3,
  ),
  review(
    'OBS_guy',
    'Feb 2026',
    'ESP & radar',
    'Recorded a clip to check if overlays showed. They did not in my game capture scene. Worth doing before you stream a city run.',
    'esp',
    5,
  ),
  review(
    'newhwidwho',
    'Jan 2026',
    'License / HWID',
    'Moved to a new PC; reset took an hour through the portal. Annoying but faster than arguing in random discords.',
    'license',
    4,
  ),
];

export const extendedReviews: SiteReview[] = [
  review(
    'ridge_runner',
    'Mar 2026',
    'Complete suite',
    'Bought Complete after reading the plan comparison post. Aimbot FOV was too wide at first—dialed it down and fights near extract elevators stopped looking robotic in clips.',
    'complete',
    5,
  ),
  review(
    'ctrl_alt_defeat',
    'Feb 2026',
    'ESP & radar',
    'Snaplines and names overlap in tight city blocks. Turning off nicknames fixed it. Still worth it for spotting Upior patrols.',
    'esp',
    4,
  ),
  review(
    'late_shift_gamer',
    'Jan 2026',
    'Short trial key',
    'Bought a short trial to test before committing. Loader worked first try. Renewed to a longer plan.',
    'purchasing',
    5,
  ),
  review(
    'salty_awper',
    'Dec 2025',
    'Aimbot module',
    'Visibility check saved me from locking onto someone behind a dune I could not actually see. Lost fights anyway—still on me.',
    'aimbot',
    4,
  ),
  review(
    'kb_m_and_mouse',
    'Mar 2026',
    'Setup',
    'Defender flagged the download until I added the folder exclusion. Forum thread walked me through it step by step.',
    'setup',
    4,
  ),
  review(
    'zero_day_zed',
    'Feb 2026',
    'Complete suite',
    'Patch hit on a Friday; status flipped offline until Sunday. Annoying but expected. I would rather wait than run a broken build into a SAND raid.',
    'complete',
    4,
  ),
];

export const REVIEW_SUMMARY = {
  total: featuredReviews.length + extendedReviews.length,
  average: 0,
};

export function getAllSiteReviews(): SiteReview[] {
  return [...featuredReviews, ...extendedReviews];
}