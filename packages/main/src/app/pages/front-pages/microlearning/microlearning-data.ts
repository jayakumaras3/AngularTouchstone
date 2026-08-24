import {
  CtaSectionConfig,
  FinalCtaSectionConfig,
  HeroSectionConfig,
  LeadFormConfig,
} from '../ads-landing/models/ads-landing.model';
import { LEAD_FORM_FIELDS } from '../ads-landing/lead-form-fields';
import { StatsConfig } from './components/stats/stats.component';

export interface MicrolearningPageConfig {
  campaignName: string;
  hero: HeroSectionConfig;
  stats: StatsConfig;
  sections: CtaSectionConfig[];
  finalCta: FinalCtaSectionConfig;
}

// Both forms on the page ask for the same details and share the same CTA,
// matching the "Get access to the full library" card in the design. Uses the
// shared Contact-style field set (all fields mandatory).
const LIBRARY_ACCESS_FORM: LeadFormConfig = {
  heading: 'Get access to the full library.',
  subheading:
    "Tell us where to reach you and we'll show you what's inside — and how to get your team learning within days.",
  submitLabel: 'Explore the full library →',
  successMessage: "Thanks! We'll be in touch shortly with your access to the full library.",
  fields: LEAD_FORM_FIELDS,
};

export const MICROLEARNING_PAGE: MicrolearningPageConfig = {
  campaignName: 'Microlearning Library',
  hero: {
    id: 'microlearning-hero',
    eyebrow: 'MICROLEARNING LIBRARY',
    headline: 'The courses the best professionals in the world are taking. Now available to your team.',
    description:
      '500+ courses across leadership, communication, compliance, and tech — the same library trusted by 50,000+ professionals at the world’s leading organizations.',
    imageUrl: 'assets/images/Microlearning/hero-professionals.png',
    imageAlt: 'Professional learning on a laptop in a modern office alongside colleagues',
    form: LIBRARY_ACCESS_FORM,
  },
  stats: {
    id: 'microlearning-stats',
    eyebrow: 'TRUSTED AT SCALE',
    heading: 'The library trusted by the world’s leading organizations.',
    items: [
      {
        value: '500+',
        label: 'Courses',
        description: 'Across leadership, communication, compliance, tech, and more.',
      },
      {
        value: '50,000+',
        label: 'Professionals',
        description: 'Already learning through the Touchstone network.',
      },
      {
        value: 'Fortune 500',
        label: 'Companies',
        description: "The library trusted by professionals at the world's leading organizations.",
      },
    ],
    cta: {
      label: 'Explore the library',
      link: '/catalog',
    },
  },
  sections: [
    {
      id: 'build-courses-faster',
      eyebrow: 'BUILD',
      heading: 'Build Courses, Faster',
      description:
        'Create and launch engaging training in a day, not weeks. Our course builder lets you design modules, add quizzes, and apply your brand colours effortlessly. Export your content as SCORM-ready packages for seamless LMS integration.',
      imageUrl: 'assets/images/Microlearning/build-courses.png',
      imageAlt: 'Course builder interface used to assemble a new microlearning module',
      reverse: false,
    },
    {
      id: 'track-every-interaction',
      eyebrow: 'TRACK',
      heading: 'Track Every Interaction',
      description:
        "Traditional systems only tell you if a course is completed. DOCHEK's AR/VR tracking captures every learner activity during immersive training sessions. Richer data helps you understand not just if training was done, but how it was experienced.",
      imageUrl: 'assets/images/Microlearning/track-interaction.png',
      imageAlt: 'Learner reports dashboard showing detailed engagement data',
      reverse: true,
    },
    {
      id: 'keep-learners-engaged',
      eyebrow: 'ENGAGE',
      heading: 'Keep Learners Engaged',
      description:
        'Motivate employees and retain learners with leaderboards and gamified elements that foster healthy competition. Built-in discussion forums make it easy to share ideas, reviews, and updates — just like a social feed, but for learning.',
      imageUrl: 'assets/images/Microlearning/engage-learners.png',
      imageAlt: 'Team celebrating progress on a gamified learning leaderboard',
      reverse: false,
    },
  ],
  finalCta: {
    id: 'microlearning-lead-form-2',
    heading: 'Get your team learning within days.',
    description:
      '500+ courses. 50,000+ professionals. One library trusted by the world’s leading organizations — now available to your team.\n\nTell us where to reach you and we’ll show you exactly what’s inside.',
    form: LIBRARY_ACCESS_FORM,
    featureCards: {
      heading: 'The DOCHEK Edge',
      items: [
        {
          icon: 'stack-2',
          title: 'Scalable by Design',
          description: 'Train from 10 to 10,000 learners with no slowdown, lag, or disruption.',
        },
        {
          icon: 'brain',
          title: 'Impact-driven',
          description: 'Utilise AR/VR insights in our learning platform to refine programs and enhance user retention.',
        },
        {
          icon: 'wallet',
          title: 'Flexible Pricing',
          description: 'A pay-as-you-go model with no hidden fees, no heavy contracts, and complete control over your budget.',
        },
      ],
    },
  },
};
