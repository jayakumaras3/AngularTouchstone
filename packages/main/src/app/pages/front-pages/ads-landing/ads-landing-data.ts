import { AdsLandingPageConfig } from './models/ads-landing.model';
import { LEAD_FORM_FIELDS } from './lead-form-fields';

export const ADS_LANDING_PAGES: Record<string, AdsLandingPageConfig> = {
  'dochek-awareness': {
    slug: 'dochek-awareness',
    campaignName: 'DOCHEK awareness',
    seo: {
      title: 'DOCHEK | The LMS Built for Companies That Take Learning Seriously',
      description:
        "Whether you're training 10 people or 10,000, DOCHEK keeps your L&D running without the complexity.",
      canonicalPath: '/Dochek_awareness_207',
    },
    hero: {
      id: 'ads-hero',
      headline: 'The LMS built for companies that take learning seriously.',
      description: "Whether you're training 10 people or 10,000, DOCHEK keeps your L&D running without the complexity.",
      imageUrl: 'assets/images/AdsPage/Untitled-4.png',
      imageAlt: 'Business people meeting and reviewing training content on a tablet',
      form: {
        heading: 'Want to see how it works?',
        subheading: "Leave your details and we'll walk you through DOCHEK.",
        submitLabel: 'Learn more about DOCHEK →',
        successMessage: "Thanks! We'll be in touch shortly to walk you through DOCHEK.",
        fields: LEAD_FORM_FIELDS,
      },
    },
    sections: [
      {
        id: 'build-courses',
        heading: 'Build Courses, Faster',
        description:
          'Create and launch engaging training in a day, not weeks. Our course builder lets you design modules, add quizzes, and apply your brand colors effortlessly. Export your content as SCORM-ready packages for seamless LMS integration.',
        imageUrl: 'assets/images/AdsPage/Untitled-2.png',
        imageAlt: 'Professional building a course on a laptop',
        reverse: false,
      },
      {
        id: 'track-interaction',
        heading: 'Track Every Interaction',
        description:
          "Traditional systems only tell you if a course is completed. DOCHEK's AR/VR tracking captures every learner activity during immersive training sessions. Richer data helps you understand not just if training was done, but how it was experienced.",
        imageUrl: 'assets/images/AdsPage/Untitled-3.png',
        imageAlt: 'Learners using VR headsets during immersive training',
        reverse: true,
      },
      {
        id: 'keep-engaged',
        heading: 'Keep Learners Engaged',
        description:
          'Motivate employees and retain learners with leaderboards, and gamified elements that foster healthy competition. Built-in discussion forums make it easy to share ideas, reviews, and updates, just like a social feed, but for learning.',
        imageUrl: 'assets/images/AdsPage/Untitled-1.png',
        imageAlt: 'Team collaborating and discussing learning progress together',
        reverse: false,
      },
    ],
    finalCta: {
      id: 'ads-lead-form-2',
      heading: 'Scale Without Limits',
      description:
        "DOCHEK is lightweight by design, easy to configure, fast to launch, and built to scale without breaking. Whether you're onboarding a new cohort or rolling out a company-wide programme, the platform handles it without friction.\n\nAnd as your organizations grows, DOCHEK grows with it. From 10 learners to 10,000, the experience stays consistent, no lag, no migration, no starting over. Training shouldn't be complicated. DOCHEK makes sure it isn't.",
      form: {
        heading: 'Want to see how it works?',
        subheading: "Leave your details and we'll walk you through DOCHEK.",
        submitLabel: 'Learn more about DOCHEK →',
        successMessage: "Thanks! We'll be in touch shortly to walk you through DOCHEK.",
        fields: LEAD_FORM_FIELDS,
      },
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
            description: 'Utilize AR/VR insights in our learning platform to refine programs and enhance user retention.',
          },
          {
            icon: 'wallet',
            title: 'Flexible Pricing',
            description: 'A pay-as-you-go model with no hidden fees, no heavy contracts, and complete control over your budget.',
          },
        ],
      },
    },
  },
};
