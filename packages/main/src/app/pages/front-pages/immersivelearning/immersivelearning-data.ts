import { CtaSectionConfig, FinalCtaSectionConfig, HeroSectionConfig } from '../ads-landing/models/ads-landing.model';

export interface LandingPageConfig {
  campaignName: string;
  hero: HeroSectionConfig;
  intro: CtaSectionConfig;
  sectionsHeading: string;
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
  intro: {
    id: 'redefine-reality',
    heading: 'Redefine Reality with Cutting-Edge AR, VR, and XR Solutions',
    description:
      'Unlock the power of immersive learning with creative, interactive, and real-life simulations using state-of-the-art Augmented Reality (AR), Virtual Reality (VR), and Extended Reality (XR) solutions. Elevate your training to the next level with interactive learning that feels real.\n\nOur AR, VR, and XR Solutions offer hands-on experiences that help people learn faster and better. Whether you are training employees or engaging students, our innovative tools deliver impactful and engaging learning experiences.',
    videoUrl: 'assets/images/AdsPage/Immersive%20Learning%20Solutions.mp4',
    imageAlt: 'Preview of a video showing a learner using a VR headset',
    ctaLabel: 'Schedule a Demo',
    ctaFragment: 'immersive-lead-form-2',
    reverse: true,
  },
  sectionsHeading: 'All Your Needs. Perfectly Met',
  sections: [
    {
      id: 'realistic-scenarios',
      heading: 'Realistic Scenarios',
      description:
        "Training that simulates hands-on experience, making it easier to apply learning to real-life situations. Our solutions provide hyper-realistic learning technologies that bridge the gap between theory and practice, so learners gain confidence and ability applying knowledge in controlled yet realistic environments, ensuring they're prepared for real-world applications.",
      imageUrl: 'assets/images/AdsPage/01_Realistic-Scenario-1.png',
      imageAlt: 'First-person view from a train simulator cab used for realistic scenario training',
      reverse: true,
    },
    {
      id: 'scalable',
      heading: 'Scalable',
      description:
        "3D-modeled environments are accessible anywhere, anytime, across desktop, mobile, and AR/VR headsets, so every learner gets the same experience no matter where they are. This scalability ensures consistent training experiences for large teams or geographically dispersed workforces, all while optimizing resources effectively.",
      imageUrl: 'assets/images/AdsPage/02_Scalable-1.png',
      imageAlt: 'VR training environment with labeled equipment used to teach technical procedures',
      reverse: false,
    },
    {
      id: 'real-time-data',
      heading: 'Real-Time Data',
      description:
        'Receive real-time metrics and gather actionable insights as learners move through immersive training. These data-driven insights help you personalize learning paths, identify skill gaps, and make informed decisions that improve outcomes across the business.',
      imageUrl: 'assets/images/AdsPage/03_Real-time-Data-1.png',
      imageAlt: 'Augmented reality tablet view overlaying utility data onto a residential street',
      reverse: true,
    },
    {
      id: 'immersive-technology',
      heading: 'Immersive Technology',
      description:
        "High-quality 3D models and simulations that mirror real AR, VR, and XR platforms. Our technology creates engaging, hands-on experiences that boost knowledge retention. Whether it's a straightforward walkthrough or a complex hands-on task, our immersive tech makes even the hardest skills easier to learn.",
      imageUrl: 'assets/images/AdsPage/04_Immersive-Technology.png',
      imageAlt: 'Learner wearing a VR headset surrounded by data visualizations and AR overlays',
      reverse: false,
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
