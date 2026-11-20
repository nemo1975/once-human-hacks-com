export function initBlogSearch() {
  const input = document.querySelector<HTMLInputElement>('[data-blog-search]');
  const grid = document.querySelector('[data-blog-grid]');
  const empty = document.querySelector<HTMLElement>('[data-blog-empty]');
  if (!input || !grid) return;

  const cards = [...grid.querySelectorAll<HTMLElement>('[data-blog-card]')];

  const apply = () => {
    const q = input.value.trim().toLowerCase();
    const tokens = q.split(/\s+/).filter(Boolean);
    let visible = 0;

    cards.forEach((card) => {
      const haystack = card.dataset.search ?? '';
      const match =
        tokens.length === 0 || tokens.every((token) => haystack.includes(token));
      card.hidden = !match;
      if (match) visible += 1;
    });

    if (empty) {
      const showEmpty = tokens.length > 0 && visible === 0;
      empty.classList.toggle('hidden', !showEmpty);
    }
  };

  if (!input.dataset.searchBound) {
    input.dataset.searchBound = '1';
    input.addEventListener('input', apply);
    input.addEventListener('search', apply);
  }

  apply();
}
