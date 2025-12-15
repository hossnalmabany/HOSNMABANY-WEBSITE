export type Language = 'en' | 'ar';

export interface Property {
  id: string;
  image: string;
  price: {
    en: string;
    ar: string;
  };
  location: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  beds: number;
  baths: number;
  sqft: number;
}

export interface Content {
  hero: {
    headline: { en: string; ar: string };
    subheadline: { en: string; ar: string };
    cta: { en: string; ar: string };
  };
  form: {
    namePlaceholder: { en: string; ar: string };
    phonePlaceholder: { en: string; ar: string };
    interestPlaceholder: { en: string; ar: string };
    submit: { en: string; ar: string };
    success: { en: string; ar: string };
  };
  urgent: {
    items: Array<{ title: { en: string; ar: string }; desc: { en: string; ar: string } }>;
  };
  benefits: {
    title: { en: string; ar: string };
    items: Array<{ title: { en: string; ar: string } }>;
  };
  stats: {
    clients: { label: { en: string; ar: string }; value: string };
    sold: { label: { en: string; ar: string }; value: string };
    experience: { label: { en: string; ar: string }; value: string };
  };
  gallery: {
    title: { en: string; ar: string };
  };
  footer: {
    copyright: { en: string; ar: string };
  };
}
