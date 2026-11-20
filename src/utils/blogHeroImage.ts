import { webpSrc } from './responsiveImage';

const PLACEHOLDER = '/images/placeholder.svg';

export function resolveBlogHeroSource(heroImage: string): string {
  if (!heroImage) return PLACEHOLDER;
  if (heroImage.includes('battlefield') || heroImage.includes('bf6') || heroImage.includes('csgo') || heroImage.includes('cs2')) {
    return PLACEHOLDER;
  }
  return heroImage;
}

export function blogCardImageSrc(heroImage: string, _slug: string, width = 640): string {
  const src = resolveBlogHeroSource(heroImage);
  if (src.endsWith('.svg')) return src;
  return webpSrc(src, width);
}
