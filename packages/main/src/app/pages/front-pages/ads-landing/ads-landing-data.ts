import { AdsLandingPageConfig } from './models/ads-landing.model';

const teamSizeOptions = [
  { label: '1 - 49 learners', value: '1-49' },
  { label: '50 - 199 learners', value: '50-199' },
  { label: '200 - 999 learners', value: '200-999' },
  { label: '1,000+ learners', value: '1000+' },
];

export const ADS_LANDING_PAGES: Record<string, AdsLandingPageConfig> = {
  'dochek-awareness': {
    slug: 'dochek-awareness',
    campaignName: 'Dochek awareness',
    seo: {
      title: 'Dochek | The LMS Built for Companies That Take Learning Seriously',
      description:
        "Whether you're training 10 people or 10,000, Dochek keeps your L&D running without the complexity. See how Dochek + 500 microlearning courses work for your team.",
      canonicalPath: '/landing',
    },
    hero: {
      id: 'ads-hero',
      eyebrow: 'Dochek LMS',
      headline: 'The LMS built for companies that take learning seriously.',
      description:
        "Whether you're training 10 people or 10,000, Dochek keeps your L&D running without the complexity.",
      ctaLabel: 'See it in action',
      ctaFragment: 'ads-lead-form',
      imageUrl: 'assets/images/front-pages/main banner_image 3.png',
      imageAlt: 'Two professionals reviewing training content on tablets',
      form: {
        heading: 'Want to see how it works?',
        subheading: "Leave your details and we'll walk you through Dochek — no pressure, no pitch.",
        submitLabel: 'Learn more about Dochek',
        successMessage: "Thanks! We'll be in touch shortly to walk you through Dochek.",
        fields: [
          { name: 'fullName', label: 'Full name', type: 'text', placeholder: 'Priya Sharma', required: true },
          { name: 'workEmail', label: 'Work email', type: 'email', placeholder: 'priya@company.com', required: true },
          { name: 'companyName', label: 'Company name', type: 'text', placeholder: 'Acme Corp', required: true },
        ],
      },
    },
    sections: [
      {
        id: 'lms-section',
        eyebrow: 'Dochek + Microlearning',
        heading: 'Get the best of both worlds.',
        description:
          'Most LMS platforms give you the system. Dochek gives you both — a lightweight, scalable LMS and instant access to a library of 500+ microlearning courses.',
        ctaLabel: 'Schedule a demo',
        ctaFragment: 'ads-lead-form',
        imageUrl: 'assets/images/front-pages/design-collection.png',
        imageAlt: 'Dochek learning platform dashboard preview',
      },
      {
        id: 'microlearning',
        eyebrow: 'Microlearning library',
        heading: 'The courses the best professionals in the world are taking. Now available to your team.',
        description:
          "500+ courses across leadership, communication, compliance, tech, and more — trusted by 50,000+ professionals and Fortune 500 companies.",
        ctaLabel: 'Explore the full library',
        ctaFragment: 'ads-final-cta-form',
        tinted: true,
        featureCards: {
          items: [
            {
              icon: 'books',
              title: '500+ Courses',
              description: 'Across leadership, communication, compliance, tech, and more.',
            },
            {
              icon: 'users',
              title: '50,000+ Professionals',
              description: 'Already learning through the Touchstone network.',
            },
            {
              icon: 'building-skyscraper',
              title: 'Fortune 500 Companies',
              description: "The library trusted by professionals at the world's leading organisations.",
            },
          ],
        },
      },
      {
        id: 'bespoke-learning',
        eyebrow: 'Bespoke learning',
        heading: 'Better learning. Better performance. Stronger business.',
        description: "Let's build learning experiences that create lasting impact.",
        ctaLabel: 'Get access to the full library',
        ctaFragment: 'ads-final-cta-form',
        imageUrl: 'assets/images/Feature/Seamless-Migration.png',
        imageAlt: 'Team collaborating on a bespoke learning programme',
        reverse: true,
      },
      {
        id: 'ar-vr-training',
        eyebrow: 'Bespoke + AR/VR',
        heading: 'Training that works because it feels real.',
        description:
          "We build training that simulates the real situations your people face, so they're not just informed when it matters, they're prepared.",
        ctaLabel: 'See AR/VR training in action',
        ctaFragment: 'ads-lead-form',
        tinted: true,
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
    ],
    finalCta: {
      id: 'ads-final-cta-form',
      heading: 'Book a consultation.',
      description:
        "Tell us about your organisation and we'll show you exactly what a Touchstone bespoke programme looks like — built around your world.",
      form: {
        heading: 'Book a consultation.',
        subheading:
          "Tell us about your organisation and we'll show you exactly what a Touchstone bespoke programme looks like — built around your world.",
        submitLabel: 'Book a consultation',
        successMessage: "Thanks! Our team will reach out to schedule your consultation.",
        fields: [
          { name: 'fullName', label: 'Full name', type: 'text', placeholder: 'Priya Sharma', required: true },
          { name: 'workEmail', label: 'Work email', type: 'email', placeholder: 'priya@company.com', required: true },
          { name: 'companyName', label: 'Company name', type: 'text', placeholder: 'Acme Corp', required: true },
          {
            name: 'teamSize',
            label: 'Team size',
            type: 'select',
            placeholder: 'Select team size',
            required: true,
            options: teamSizeOptions,
          },
          {
            name: 'primaryNeed',
            label: 'What are you looking to build?',
            type: 'select',
            placeholder: 'Select your primary need',
            required: true,
            options: [
              { label: 'A scalable LMS', value: 'lms' },
              { label: 'Microlearning content library', value: 'microlearning' },
              { label: 'Bespoke training programme', value: 'bespoke' },
              { label: 'AR/VR immersive training', value: 'ar-vr' },
              { label: 'Not sure yet', value: 'not-sure' },
            ],
          },
        ],
      },
      featureCards: {
        heading: 'Solutions Built Around Your Needs',
        items: [
          {
            icon: 'world',
            title: 'Relevant to Your Audience',
            description: 'Localized learning content in 60+ languages that resonates with diverse global teams.',
          },
          {
            icon: 'users',
            title: 'Expert Consulting',
            description: 'Partner with experts in leadership and talent strategy to build high-performing teams.',
          },
          {
            icon: 'click',
            title: 'Exceptional User Experience',
            description: 'Interactive learning that keeps users engaged and focused on what matters.',
          },
          {
            icon: 'bulb',
            title: 'Competency-driven Learning',
            description: 'Focused training aligned with your business objectives and performance goals.',
          },
          {
            icon: 'device-gamepad-2',
            title: 'Immersive Learning',
            description: 'Tech-driven AR/VR/XR learning for faster and enhanced understanding.',
          },
          {
            icon: 'devices',
            title: 'LMS Compatible',
            description: 'Smooth integration with your existing Learning Management System.',
          },
        ],
      },
    },
  },
};
