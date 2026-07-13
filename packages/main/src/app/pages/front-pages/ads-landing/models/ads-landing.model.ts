export type LeadFormFieldType = 'text' | 'email' | 'select';

export interface LeadFormFieldOption {
  label: string;
  value: string;
}

export interface LeadFormFieldConfig {
  name: string;
  label: string;
  type: LeadFormFieldType;
  placeholder?: string;
  required?: boolean;
  options?: LeadFormFieldOption[];
}

export interface LeadFormConfig {
  heading: string;
  subheading?: string;
  fields: LeadFormFieldConfig[];
  submitLabel: string;
  successMessage: string;
}

export interface FeatureCardItem {
  icon: string;
  title: string;
  description: string;
}

export interface FeatureCardsConfig {
  heading?: string;
  items: FeatureCardItem[];
}

export interface CtaSectionConfig {
  id: string;
  eyebrow?: string;
  heading: string;
  description: string;
  ctaLabel?: string;
  ctaFragment?: string;
  imageUrl?: string;
  imageAlt?: string;
  videoUrl?: string;
  reverse?: boolean;
  tinted?: boolean;
  featureCards?: FeatureCardsConfig;
}

export interface HeroSectionConfig {
  id: string;
  eyebrow?: string;
  headline: string;
  description: string;
  ctaLabel?: string;
  ctaFragment?: string;
  imageUrl: string;
  imageAlt: string;
  form: LeadFormConfig;
}

export interface FinalCtaSectionConfig {
  id: string;
  heading: string;
  description?: string;
  form: LeadFormConfig;
  featureCards?: FeatureCardsConfig;
}

export interface AdsLandingSeoConfig {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
}

export interface AdsLandingPageConfig {
  slug: string;
  campaignName: string;
  seo: AdsLandingSeoConfig;
  hero: HeroSectionConfig;
  sections: CtaSectionConfig[];
  finalCta: FinalCtaSectionConfig;
}
