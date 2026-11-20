export type ProductPlanId = 'weekly' | 'monthly' | 'lifetime' | 'onetime';

export interface ProductPlan {
  id: ProductPlanId;
  label: string;
  priceUsd: number;
  priceNote: string;
  popular?: boolean;
}

const standardPlans: ProductPlan[] = [
  { id: 'weekly', label: '1 Week', priceUsd: 15, priceNote: 'USD / 7 days' },
  { id: 'monthly', label: '1 Month', priceUsd: 35, priceNote: 'USD / 30 days', popular: true },
  { id: 'lifetime', label: 'Lifetime', priceUsd: 150, priceNote: 'USD · one-time' },
];

const ugcPlans: ProductPlan[] = [
  { id: 'onetime', label: 'One-time access', priceUsd: 50, priceNote: 'USD · one-time' },
];

export function getProductPlans(productSlug: string): ProductPlan[] {
  if (productSlug === 'ugc') return ugcPlans;
  return standardPlans;
}

export function formatPlanPrice(usd: number): string {
  return `$${usd.toFixed(usd % 1 === 0 ? 0 : 2)}`;
}

export function checkoutUrlWithPlan(baseUrl: string, _planId: ProductPlanId): string {
  return baseUrl;
}
