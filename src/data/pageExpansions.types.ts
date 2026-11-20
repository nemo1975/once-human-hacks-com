export interface ExpansionSection {
  heading: string;
  subheading?: string;
  paragraphs: string[];
}

export interface ExpansionTable {
  caption: string;
  headers: string[];
  rows: string[][];
}

export interface ExpansionFaq {
  id: string;
  q: string;
  a: string;
}

export interface ExpansionCta {
  heading: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}
