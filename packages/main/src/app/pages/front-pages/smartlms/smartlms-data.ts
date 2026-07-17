import { CtaSectionConfig, FinalCtaSectionConfig, HeroSectionConfig } from '../ads-landing/models/ads-landing.model';
import { LEAD_FORM_FIELDS } from '../ads-landing/lead-form-fields';

export interface LandingPageConfig {
  campaignName: string;
  hero: HeroSectionConfig;
  sections: CtaSectionConfig[];
  finalCta: FinalCtaSectionConfig;
}

export const SMARTLMS_PAGE: LandingPageConfig = {
  campaignName: 'Smart LMS + Microlearning Bundle',
  hero: {
    id: 'smartlms-hero',
    eyebrow: 'DOCHEK + MICROLEARNING LIBRARY',
    headline: 'Get the best of both worlds.',
    description:
      'Most LMS platforms give you the system. DOCHEK gives you both — a lightweight, scalable LMS and instant access to a library of 500+ microlearning courses.',
    imageUrl: 'assets/images/SmartLMS/team-learning.png',
    imageAlt: 'Team collaborating and learning together around a laptop',
    form: {
      heading: 'See the full bundle in action.',
      subheading: "Tell us where to reach you and we'll show you exactly what DOCHEK + the microlearning library looks like for your team.",
      submitLabel: 'Get a walkthrough of the bundle →',
      successMessage: "Thanks! We'll be in touch shortly with your bundle walkthrough.",
      fields: LEAD_FORM_FIELDS,
    },
  },
  sections: [
    {
      id: 'two-systems-one-login',
      heading: 'Two Systems. One Login.',
      description:
        "No more juggling separate logins or clunky integrations. DOCHEK's LMS and its 500+ course microlearning library live in one place, so your team spends less time navigating tools and more time learning.",
      imageUrl: 'assets/images/SmartLMS/course-builder.png',
      imageAlt: 'Professional building a course on a laptop',
      reverse: false,
    },
    {
      id: 'ready-made-library',
      heading: '500+ Courses, Ready on Day One',
      description:
        "Skip the months of content creation. Deploy a full microlearning library spanning compliance, safety, technology, and soft skills the moment you go live, then layer in your own bespoke courses whenever you're ready.",
      imageUrl: 'assets/images/SmartLMS/bundle-review.png',
      imageAlt: 'Colleagues reviewing the course library on a tablet',
      reverse: true,
    },
    {
      id: 'scalable-by-design',
      heading: 'Built to Scale With You',
      description:
        "Whether you're training 10 people or 10,000, the bundle scales without lag, migrations, or starting over. One flexible platform that grows exactly as fast as your team does.",
      reverse: false,
      tinted: true,
    },
  ],
  finalCta: {
    id: 'smartlms-lead-form-2',
    heading: 'The Best of Both, Without the Complexity',
    description:
      "DOCHEK keeps your L&D running without the overhead — one login, one dashboard, and a course library that's always growing.\n\nSee exactly what the bundle looks like for your team before you commit to anything.",
    form: {
      heading: 'Ready to see it for yourself?',
      subheading: "Leave your details and we'll walk you through the full DOCHEK + microlearning bundle — no pressure, no pitch.",
      submitLabel: 'Schedule a demo →',
      successMessage: "Thanks! We'll be in touch shortly to schedule your demo.",
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
          description: '500+ microlearning courses plus AR/VR insights help you refine programs and boost retention.',
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
