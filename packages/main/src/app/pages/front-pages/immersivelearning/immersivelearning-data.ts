import { CtaSectionConfig, FinalCtaSectionConfig, HeroSectionConfig } from '../ads-landing/models/ads-landing.model';

export interface LandingPageConfig {
  campaignName: string;
  hero: HeroSectionConfig;
  sections: CtaSectionConfig[];
  finalCta: FinalCtaSectionConfig;
}

const primaryNeedOptions = [
  { label: 'Compliance & Safety Training', value: 'compliance-safety' },
  { label: 'Onboarding & Skills Development', value: 'onboarding-skills' },
  { label: 'Soft Skills & Leadership', value: 'soft-skills-leadership' },
  { label: 'Technical / Equipment Training', value: 'technical-equipment' },
  { label: 'Other', value: 'other' },
];

export const IMMERSIVE_LEARNING_PAGE: LandingPageConfig = {
  campaignName: 'Bespoke Immersive Learning (AR/VR/XR)',
  hero: {
    id: 'immersive-hero',
    eyebrow: 'BESPOKE + AR/VR',
    headline: 'Training that works because it feels real.',
    description:
      "We build training that simulates the real situations your people face, so they're not just informed when it matters, they're prepared.",
    imageUrl: 'assets/images/ImmersiveLearning/vr-headsets-training.png',
    imageAlt: 'Learners wearing VR headsets and using motion controllers during an immersive training session',
    form: {
      heading: "Let's build something for your team.",
      subheading: "Tell us about your organisation and we'll show you what a bespoke Touchstone solution looks like — built around your people, your challenges, and your goals.",
      submitLabel: "Let's talk about your training →",
      successMessage: "Thanks! We'll be in touch shortly to talk through your training.",
      fields: [
        { name: 'fullName', label: 'Full name', type: 'text', required: true },
        { name: 'workEmail', label: 'Work email', type: 'email', required: true },
        { name: 'companyName', label: 'Company name', type: 'text', required: true },
        {
          name: 'primaryNeed',
          label: 'What are you looking to solve?',
          type: 'select',
          required: true,
          options: primaryNeedOptions,
        },
      ],
    },
  },
  sections: [
    {
      id: 'redefine-reality',
      heading: 'Redefine Reality with Cutting-Edge AR, VR, and XR Solutions',
      description:
        "Unlock the power of immersive learning with creative, interactive, real-life simulations using state-of-the-art Augmented Reality (AR), Virtual Reality (VR), and Extended Reality (XR) solutions. Our AR, VR, and XR solutions offer hands-on experiences that help people learn faster and better, whether you're training employees or engaging students.",
      imageUrl: 'assets/images/ImmersiveLearning/gamified-leaderboard.png',
      imageAlt: 'Learners in VR headsets viewing a gamified leaderboard dashboard',
      ctaLabel: 'Schedule a Demo',
      ctaFragment: 'immersive-lead-form-2',
      reverse: false,
    },
    {
      id: 'real-time-data',
      heading: 'Real-Time Data You Can Act On',
      description:
        "Receive real-time metrics as learners move through immersive training. These data-driven insights help you personalize learning paths, identify skill gaps, and make informed decisions that improve outcomes across the business.",
      imageUrl: 'assets/images/ImmersiveLearning/learner-tracking.png',
      imageAlt: 'VR headset training session with a live learner-tracking and reporting dashboard',
      reverse: true,
    },
    {
      id: 'realistic-scenarios',
      heading: 'Realistic Scenarios, Built to Scale',
      description:
        "Training that simulates hands-on experience, making it easier to apply learning to real-life situations. 3D-modeled environments are accessible anywhere, anytime, across desktop, mobile, and AR/VR headsets, so every learner gets the same experience, no matter where they are.",
      reverse: false,
      tinted: true,
    },
  ],
  finalCta: {
    id: 'immersive-lead-form-2',
    heading: "Yes, It's That Simple",
    description:
      'Immersive. Impactful. Affordable.\n\nThree steps stand between where your training is today and where it could be — realistic, hands-on, and built entirely around your people.',
    form: {
      heading: 'Ready to get started?',
      subheading: "Tell us where to reach you and we'll show you what an immersive training experience looks like for your team.",
      submitLabel: "Let's talk about your training →",
      successMessage: "Thanks! We'll be in touch shortly to talk through your training.",
      fields: [
        { name: 'fullName', label: 'Full name', type: 'text', required: true },
        { name: 'workEmail', label: 'Work email', type: 'email', required: true },
        { name: 'companyName', label: 'Company name', type: 'text', required: true },
        {
          name: 'primaryNeed',
          label: 'What are you looking to solve?',
          type: 'select',
          required: true,
          options: primaryNeedOptions,
        },
      ],
    },
    featureCards: {
      heading: 'What Do You Have to Do?',
      items: [
        {
          icon: 'target-arrow',
          title: 'Share Your Vision',
          description: "Tell us your goals — we'll help you choose the right AR/VR/XR technology for the job.",
        },
        {
          icon: 'settings',
          title: 'We Build Your Environment',
          description: 'Our team configures a custom 3D training environment tailored to your exact scenarios.',
        },
        {
          icon: 'augmented-reality',
          title: 'Your Team Gets Immersed',
          description: 'Learners engage in hands-on, immersive training that sharpens real, on-the-job skills.',
        },
      ],
    },
  },
};
