interface cardimgs {
  id: number;
  time: string;
  imgSrc: string;
  user: string;
  title: string;
  subtitle?: string;
  description?: string;
  views: string;
  category: string;
  comments: number;
  date: string;
}

interface productcards {
  id: number;
  imgSrc: string;
  title: string;
  price: string;
  rprice: string;
  date: string;
}

interface Framework {
  src: string;
  alt: string;
  tooltip: string;
}

interface followercards {
  id: number;
  imgSrc: string;
  title: string;
}

interface setupCards {
  id: number;
  img: string;
  color: string;
  title: string;
  subtitle: string;
  imgMain?:string;
}
import { baseUrlPath, baseUrlPathslash} from "../../config";
export const cardimgs: cardimgs[] = [
  {
    id: 100,
    time: '5 mins Read',
    imgSrc: '/assets/images/blog/dochek.jpg',
    user: '/assets/images/front-pages/user1.jpg',
    title: 'Smart Learning with DOCHEK',
    subtitle: 'Learning in the Flow of Work',
    description: 'Modern work demands learning that happens seamlessly within workflows, not outside them.',
    views: '4,200',
    category: 'Learning & Development',
    comments: 5,
    date: 'Tue, Apr 22',
  },
  {
    id: 1,
    time: '2 mins Read',
    imgSrc: `${baseUrlPathslash}/assets/images/blog/blog-img1.jpg`,
    user: `${baseUrlPathslash}/assets/images/profile/user-1.jpg`,
    title: 'As yen tumbles, gadget-loving Japan goes for secondhand iPhones',
    views: '9,125',
    category: 'Social',
    comments: 3,
    date: 'Mon, Dec 23',
  },
  {
    id: 2,
    time: '3 mins Read',
    imgSrc: `${baseUrlPathslash}/assets/images/blog/blog-img2.jpg`,
    user: `${baseUrlPathslash}/assets/images/profile/user-2.jpg`,
    title:
      'Intel loses bid to revive antitrust case against patent foe Fortress',
    views: '9,125',
    category: 'Gadget',
    comments: 3,
    date: 'Sun, Dec 23',
  },
  {
    id: 3,
    time: '4 mins Read',
    imgSrc: `${baseUrlPathslash}/assets/images/blog/blog-img3.jpg`,
    user: `${baseUrlPathslash}/assets/images/profile/user-3.jpg`,
    title: 'COVID outbreak deepens as more lockdowns loom in China',
    views: '9,125',
    category: 'Health',
    comments: 12,
    date: 'Sat, Dec 23',
  },
  {
    id: 4,
    time: '2 mins Read',
    imgSrc: `${baseUrlPathslash}/assets/images/blog/blog-img4.jpg`,
    user: `${baseUrlPathslash}/assets/images/profile/user-1.jpg`,
    title: 'As yen tumbles, gadget-loving Japan goes for secondhand iPhones',
    views: '9,125',
    category: 'Social',
    comments: 3,
    date: 'Mon, Dec 23',
  },
  {
    id: 5,
    time: '3 mins Read',
    imgSrc: `${baseUrlPathslash}/assets/images/blog/blog-img5.jpg`,
    user: `${baseUrlPathslash}/assets/images/profile/user-2.jpg`,
    title:
      'Intel loses bid to revive antitrust case against patent foe Fortress',
    views: '9,125',
    category: 'Gadget',
    comments: 3,
    date: 'Sun, Dec 23',
  },
  {
    id: 6,
    time: '4 mins Read',
    imgSrc: `${baseUrlPathslash}/assets/images/blog/blog-img6.jpg`,
    user: `${baseUrlPathslash}/assets/images/profile/user-3.jpg`,
    title: 'COVID outbreak deepens as more lockdowns loom in China',
    views: '9,125',
    category: 'Health',
    comments: 12,
    date: 'Sat, Dec 23',
  },
  {
    id: 7,
    time: '2 mins Read',
    imgSrc: `${baseUrlPathslash}/assets/images/blog/blog-img10.jpg`,
    user: `${baseUrlPathslash}/assets/images/profile/user-1.jpg`,
    title: 'As yen tumbles, gadget-loving Japan goes for secondhand iPhones',
    views: '9,125',
    category: 'Social',
    comments: 3,
    date: 'Mon, Dec 23',
  },
  {
    id: 8,
    time: '3 mins Read',
    imgSrc: `${baseUrlPathslash}/assets/images/blog/blog-img8.jpg`,
    user: `${baseUrlPathslash}/assets/images/profile/user-2.jpg`,
    title:
      'Intel loses bid to revive antitrust case against patent foe Fortress',
    views: '9,125',
    category: 'Gadget',
    comments: 3,
    date: 'Sun, Dec 23',
  },
  {
    id: 9,
    time: '4 mins Read',
    imgSrc: `${baseUrlPathslash}/assets/images/blog/blog-img9.jpg`,
    user: `${baseUrlPathslash}/assets/images/profile/user-3.jpg`,
    title: 'COVID outbreak deepens as more lockdowns loom in China',
    views: '9,125',
    category: 'Health',
    comments: 12,
    date: 'Sat, Dec 23',
  },
];

export const productcards: productcards[] = [
  {
    id: 1,
    imgSrc: `${baseUrlPath}assets/images/products/s4.jpg`,
    title: 'Boat Headphone',
    price: '285',
    rprice: '375',
    date: 'Tue, Apr 03, 2025',
  },
  {
    id: 2,
    imgSrc: `${baseUrlPath}assets/images/products/s5.jpg`,
    title: 'MacBook Air Pro',
    price: '285',
    rprice: '375',
    date: 'Tue, Apr 10, 2025',
  },
  {
    id: 3,
    imgSrc: `${baseUrlPath}assets/images/products/s7.jpg`,
    title: 'Red Velvet Dress',
    price: '285',
    rprice: '375',
    date: 'Tue, Apr 15, 2025',
  },
  {
    id: 4,
    imgSrc: `${baseUrlPath}assets/images/products/s11.jpg`,
    title: 'Soft Plush Teddy',
    price: '285',
    rprice: '375',
    date: 'Tue, Apr 12, 2025',
  },
  {
    id: 5,
    imgSrc: `${baseUrlPath}assets/images/products/s2.jpg`,
    title: 'Boat Bass Booster',
    price: '285',
    rprice: '375',
    date: 'Tue, Apr 14, 2025',
  },
  {
    id: 6,
    imgSrc: `${baseUrlPath}assets/images/products/s6.jpg`,
    title: 'MacBook Ultra Slim',
    price: '285',
    rprice: '375',
    date: 'Tue, Apr 18, 2025',
  },
  {
    id: 7,
    imgSrc: `${baseUrlPath}assets/images/products/s8.jpg`,
    title: 'Crimson Party Dress',
    price: '285',
    rprice: '375',
    date: 'Tue, Apr 20, 2025',
  },
  {
    id: 8,
    imgSrc: `${baseUrlPath}assets/images/products/s12.jpg`,
    title: 'Cuddly Teddy Gift',
    price: '285',
    rprice: '375',
    date: 'Tue, Apr 22, 2025',
  },
  {
    id: 9,
    imgSrc: `${baseUrlPath}assets/images/products/s4.jpg`,
    title: 'Boat Sonic Headset',
    price: '285',
    rprice: '375',
    date: 'Tue, Apr 25, 2025',
  },
  {
    id: 10,
    imgSrc: `${baseUrlPath}assets/images/products/s5.jpg`,
    title: 'MacBook Pro 2025',
    price: '285',
    rprice: '375',
    date: 'Tue, Apr 27, 2025',
  },
  {
    id: 11,
    imgSrc: `${baseUrlPath}assets/images/products/s7.jpg`,
    title: 'Evening Gown - Red',
    price: '285',
    rprice: '375',
    date: 'Tue, Apr 29, 2025',
  },
  {
    id: 12,
    imgSrc: `${baseUrlPath}assets/images/products/s11.jpg`,
    title: 'Fluffy Bear Surprise',
    price: '285',
    rprice: '375',
    date: 'Tue, Apr 30, 2025',
  },
];

export const frameworks: Framework[] = [
  {
    src: `${baseUrlPath}assets/images/landingpage/frameworks/angular.svg`,
    alt: 'Angular',
    tooltip: 'Angular',
  },
  {
    src: `${baseUrlPath}assets/images/landingpage/frameworks/material.svg`,
    alt: 'Angular Material',
    tooltip: 'Angular Material',
  },
  {
    src: `${baseUrlPath}assets/images/landingpage/frameworks/logo-ts.svg`,
    alt: 'Typescript',
    tooltip: 'Typescript',
  },
  {
    src: `${baseUrlPath}assets/images/landingpage/frameworks/icon-tabler.svg`,
    alt: 'Tabler Icon',
    tooltip: 'Tabler Icon',
  },
];

export const tiles = [
  {
    id: 1,
    text: 'Light & Dark Color Schemes',
    cols: 1,
    rows: 1,
    color: '#FFF6E5',
    icon: 'svgs/icon-briefcase.svg',
    subtitle: 'Choose your preferred visual style effortlessly.',
  },
  {
    id: 2,
    text: 'New Demos',
    cols: 2,
    rows: 2,
    color: '#E9F1FF',
    icon: 'logos/logoIcon.svg',
    img: 'landingpage/background/screen1.png',
    subtitle:
      'Brand new demos to help you build the perfect dashboard:<br><strong>Dark and Right-to-Left.</strong>',
  },
  {
    id: 3,
    text: 'Code Improvements',
    cols: 1,
    rows: 1,
    color: '#E7FFF2',
    icon: 'logos/icon-speech-bubble.svg',
    subtitle: 'Benefit from continuous improvements and optimizations.',
  },
  {
    id: 4,
    text: '12+ Ready to Use Application Designs',
    cols: 1,
    rows: 1,
    color: '#E4F4FF',
    icon: 'icon-layer.svg',
    img: 'landingpage/background/feature-apps.png',
    subtitle: 'Instantly deployable designs for your applications.',
  },
  {
    id: 5,
    text: '50+ UI Components',
    cols: 1,
    rows: 1,
    color: '#FFECEC',
    icon: 'logos/icon-favorites.svg',
    subtitle: 'A rich collection for seamless user experiences.',
  },
];
export const pricingPlans = {
  monthly: [
    {
      title: 'Single Course',
      price: '$1',
      period: 'Per Month',
      description: 'Best for one-off learners',
      features: [
        'Access to 1 course',
        'Certification with every course',
        'Mobile & desktop access',
        'Easy course upload',
        'AR/VR insights',
        'Email support'
      ],
      button: 'Get Started',
    },
    {
      title: '10-Course Bundle',
      price: '$8',
      period: 'Per Month',
      description: 'Perfect for small teams',
      features: [
        'Access to 10 courses each month',
        'Certification with every course',
        'Mobile & desktop access',
        'Easy course upload',
        'AR/VR insights',
        'Email support'
      ],
      button: 'Get Started',
    },
    {
      title: '50-Course Bundle',
      price: '$30',
      period: 'Per Month',
      description: 'Best for fast-growing businesses',
      features: [
        'Access to 50 courses each month',
        'Certification with every course',
        'Mobile & desktop access',
        'Easy course upload',
        'AR/VR insights',
        'Priority email assistance'
      ],
      button: 'Get Started',
    },
  ],
  yearly: [
    {
      title: 'Single Course',
      price: '$10',
      period: 'Per Year',
      description: 'Best for one-off learners',
      features: [
        'Access to 1 course',
        'Certification with every course',
        'Mobile & desktop access',
        'Easy course upload',
        'AR/VR insights',
        'Email support'
      ],
      button: 'Get Started',
    },
    {
      title: '10-Course Bundle',
      price: '$77',
      period: 'Per Year',
      description: 'Perfect for small teams',
      features: [
        'Access to 10 courses each month',
        'Certification with every course',
        'Mobile & desktop access',
        'Easy course upload',
        'AR/VR insights',
        'Email support'
      ],
      button: 'Get Started',
    },
    {
      title: '50-Course Bundle',
      price: '$480',
      period: 'Per Year',
      description: 'Best for fast-growing businesses',
      features: [
        'Access to 50 courses each month',
        'Certification with every course',
        'Mobile & desktop access',
        'Easy course upload',
        'AR/VR insights',
        'Priority email assistance'
      ],
      button: 'Get Started',
    },
  ],
};

export const pricingBanner = {
  title: 'Flexible Pricing for Every Learning Need',
  subtitle:
    'Enjoy premium features with a plan that suits your business\'s pace and budget',
  cta: 'Choose the Right Plan for Your Team',
};

export const users = [
  { name: 'Jenny Wilson', img: `${baseUrlPathslash}/assets/images/profile/user-1.jpg` },
  { name: 'Robert Fox', img: `${baseUrlPathslash}/assets/images/profile/user-2.jpg` },
  { name: 'Kristin Watson', img: `${baseUrlPathslash}/assets/images/profile/user-3.jpg` },
  { name: 'Darlene Robertson', img: `${baseUrlPathslash}/assets/images/profile/user-4.jpg` },
  { name: 'Jacob Jones', img: `${baseUrlPathslash}/assets/images/profile/user-5.jpg` },
];

export const plans = [
  {
    title: 'Single Use',
    description:
      'Use for single end product which end users can’t be charged for.',
    price: 49,
    period: 'one time pay',
    features: [
      { text: 'Full source code', included: true },
      { text: 'Documentation', included: true },
      { text: 'Use in SaaS app', included: false },
      { text: 'One Project', included: true, bold: true },
      { text: 'One Year Technical Support', included: true },
      { text: 'One Year Free Updates', included: true },
    ],
  },
  {
    title: 'Multiple Use',
    description:
      'Use for unlimited end products end users can’t be charged for.',
    price: 89,
    period: 'one time pay',
    features: [
      { text: 'Full source code', included: true },
      { text: 'Documentation', included: true },
      { text: 'Use in SaaS app', included: false },
      { text: 'Unlimited Project', included: true, bold: true },
      { text: 'One Year Technical Support', included: true },
      { text: 'One Year Free Updates', included: true },
    ],
  },
  {
    title: 'Extended Use',
    description:
      'Use for single end product which end users can be charged for.',
    price: 299,
    period: 'one time pay',
    popular: true,
    features: [
      { text: 'Full source code', included: true },
      { text: 'Documentation', included: true },
      { text: 'Use in SaaS app', included: true },
      { text: 'One Project', included: true, bold: true },
      { text: 'One Year Technical Support', included: true },
      { text: 'One Year Free Updates', included: true },
    ],
  },
  {
    title: 'Unlimited Use',
    description:
      'Use in unlimited end products end users can be charged for.',
    price: 499,
    period: 'one time pay',
    features: [
      { text: 'Full source code', included: true },
      { text: 'Documentation', included: true },
      { text: 'Use in SaaS app', included: true },
      { text: 'Unlimited Project', included: true, bold: true },
      { text: 'One Year Technical Support', included: true },
      { text: 'One Year Free Updates', included: true },
    ],
  },
];
export const clientLogo = [
 
  {
    src: `${baseUrlPath}assets/images/clientlogo/Bata.png`,
    alt: 'Bata',
    tooltip: 'Bata',
  },
  {
    src: `${baseUrlPath}assets/images/clientlogo/Britannia.png`,
    alt: 'Britannia',
    tooltip: 'Britannia',
  }, 
  {
    src: `${baseUrlPath}assets/images/clientlogo/Daimler.png`,
    alt: 'Daimler',
    tooltip: 'Daimler',
  }, 
  {
    src: `${baseUrlPath}assets/images/clientlogo/Dairy-Farm.png`,
    alt: 'Dairy-Farm',
    tooltip: 'Dairy-Farm',
  }, 
  {
    src: `${baseUrlPath}assets/images/clientlogo/DFI.png`,
    alt: 'DFI',
    tooltip: 'DFI',
  }, 
  {
    src: `${baseUrlPath}assets/images/clientlogo/Fulcrum-Labs.png`,
    alt: 'Fulcrum-Labs',
    tooltip: 'Fulcrum-Labs',
  }, 
  {
    src: `${baseUrlPath}assets/images/clientlogo/Morrison-Products.png`,
    alt: 'Morrison-Products',
    tooltip: 'Morrison-Products',
  }, 
  {
    src: `${baseUrlPath}assets/images/clientlogo/Nestle.png`,
    alt: 'Nestle',
    tooltip: 'Nestle',
  }, 
  {
    src: `${baseUrlPath}assets/images/clientlogo/Novartis.png`,
    alt: 'Novartis',
    tooltip: 'Novartis',
  }, 
  {
    src: `${baseUrlPath}assets/images/clientlogo/Transperfect.png`,
    alt: 'Transperfect',
    tooltip: 'Transperfect',
  },
  
];
export const paymentLogos = [
  { src: `${baseUrlPath}assets/images/front-pages/icon-visa.svg`, alt: 'visa', tooltip: 'Visa' },
  {
    src: `${baseUrlPath}assets/images/front-pages/icon-mastercard.svg`,
    alt: 'mastercard',
    tooltip: 'Master Card',
  },
  {
    src: `${baseUrlPath}assets/images/front-pages/icon-american-express.svg`,
    alt: 'american express',
    tooltip: 'American Express',
  },
  {
    src: `${baseUrlPath}assets/images/front-pages/icon-discover.svg`,
    alt: 'discover',
    tooltip: 'Discover',
  },
  {
    src: `${baseUrlPath}assets/images/front-pages/icon-paypal.svg`,
    alt: 'paypal',
    tooltip: 'Paypal',
  },
  {
    src: `${baseUrlPath}assets/images/front-pages/icon-masetro.svg`,
    alt: 'maestro',
    tooltip: 'Maestro',
  },
  { src: `${baseUrlPath}assets/images/front-pages/icon-jcb.svg`, alt: 'jcb', tooltip: 'JCB' },
  {
    src: `${baseUrlPath}assets/images/front-pages/icon-diners.svg`,
    alt: 'diners',
    tooltip: 'Diners',
  },
];

export const faqList = [
  {
    question: 'What makes DOCHEK different from other LMS platforms?',
    answer:
      'Unlike complex learning platforms, that overwhelm users, DOCHEK focuses on simplicity. Learners just attend courses, while admins can manage, assign, and track training in a few clicks. It’s built to be powerful but uncluttered.',
  },
  {
    question: 'Can DOCHEK handle large numbers of users? ',
    answer:
      'Yes. DOCHEK is designed to scale. It manages multiple clients and partners from a single platform, and ensures smooth performance without slowdowns. ',
  },
  {
    question: 'Can we build my own courses in DOCHEK?  ',
    answer:
      'Yes. With the course builder, you can create and customize training modules, add assessments (MCQs, SCQs, simulations), and even export them as SCORM packages to use in other LMS platforms. ',
  },
  {
    question:
      'What kind of pre-built courses are available? ',
    answer:
      'Through the DOCHEK Marketplace, you get access to 500+ ready-to-use courses covering compliance, communication, leadership, workplace safety, and more. You can deploy them immediately or customize them to fit your needs. ',
  },
  {
    question:
      'Can we migrate from our existing learning platform without losing data? ',
    answer:
      'Yes. DOCHEK supports industry standards like SCORM 1.2 and makes migration seamless. Your courses, learner data, and progress can be transferred smoothly, allowing your teams to pick up right where they left off. ',
  },
  {
    question:
      'How does DOCHEK keep learners engaged? ',
    answer:
      'DOCHEK offers gamification, discussion forums, and scenario-based simulations to make learning interactive. This leads to higher participation, better completion rates, and stronger knowledge retention.',
  },
  {
    question:
      'Can I track more than just course completions in the DOCHEK learning platform?',
    answer:
      'Yes. DOCHEK’s analytics go beyond “completed/not completed.” In our eLearning platform, you can view time spent per module, learner behavior patterns, drop-off points, and assessment performance. This can help you improve your training strategy. ',
  },
  {
    question:
      'Does DOCHEK work on mobile devices? ',
    answer:
      'Yes. DOCHEK is fully responsive and mobile-first, so learners can access training anytime, anywhere, whether they’re in the office, at home, or on the go. ',
  },
];

export const followercardsFirst: followercards[] = [
  {
    id: 1,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-color.svg`,
    title: '6 Themes Colors',
  },
  {
    id: 2,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-sidebar.svg`,
    title: 'Dard & Light Sidebar',
  },
  {
    id: 3,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-components.svg`,
    title: '50+ UI Components',
  },
  {
    id: 4,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-pages.svg`,
    title: '65+ pages Templates',
  },
  {
    id: 5,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-color.svg`,
    title: '6 Themes Colors',
  },
  {
    id: 6,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-sidebar.svg`,
    title: 'Dard & Light Sidebar',
  },
  {
    id: 7,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-components.svg`,
    title: '50+ UI Components',
  },
  {
    id: 8,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-pages.svg`,
    title: '65+ pages Templates',
  },
  {
    id: 9,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-color.svg`,
    title: '6 Themes Colors',
  },
  {
    id: 10,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-sidebar.svg`,
    title: 'Dard & Light Sidebar',
  },
  {
    id: 11,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-components.svg`,
    title: '50+ UI Components',
  },
  {
    id: 12,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-pages.svg`,
    title: '65+ pages Templates',
  },
];

export const followercardSecond: followercards[] = [
  {
    id: 1,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-framework.svg`,
    title: 'Material UI',
  },
  {
    id: 2,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-icons.svg`,
    title: '3400+ icons',
  },
  {
    id: 3,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-responsive.svg`,
    title: 'Fully responsive',
  },
  {
    id: 4,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-sass.svg`,
    title: 'Sassbase css',
  },
  {
    id: 5,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-framework.svg`,
    title: 'Material UI',
  },
  {
    id: 6,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-icons.svg`,
    title: '3400+ icons',
  },
  {
    id: 7,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-responsive.svg`,
    title: 'Fully responsive',
  },
  {
    id: 8,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-sass.svg`,
    title: 'Sassbase css',
  },
  {
    id: 9,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-framework.svg`,
    title: 'Material UI',
  },
  {
    id: 10,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-icons.svg`,
    title: '3400+ icons',
  },
  {
    id: 11,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-responsive.svg`,
    title: 'Fully responsive',
  },
  {
    id: 12,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-sass.svg`,
    title: 'Sassbase css',
  },
];
export const followercardThird: followercards[] = [
  {
    id: 1,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-customize.svg`,
    title: 'Easy to Customize',
  },
  {
    id: 2,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-chart.svg`,
    title: 'Lots of Chart Options',
  },
  {
    id: 3,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-table.svg`,
    title: 'Lots of Table Examples',
  },
  {
    id: 4,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-update.svg`,
    title: 'Regular Updates',
  },
  {
    id: 5,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-support.svg`,
    title: 'Dedicated Support',
  },
  {
    id: 6,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-framework.svg`,
    title: 'Easy to Customize',
  },
  {
    id: 7,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-icons.svg`,
    title: 'Lots of Chart Options',
  },
  {
    id: 8,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-responsive.svg`,
    title: 'Lots of Table Examples',
  },
  {
    id: 9,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-sass.svg`,
    title: 'Regular Updates',
  },
  {
    id: 10,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-framework.svg`,
    title: 'Dedicated Support',
  },
  {
    id: 11,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-framework.svg`,
    title: 'Easy to Customize',
  },
  {
    id: 12,
    imgSrc: `${baseUrlPathslash}/assets/images/front-pages/icon-icons.svg`,
    title: 'Lots of Chart Options',
  },
 
];

export const topcardsGrid = [
  { title: 'Stress-free Switch', subtitle: 'DOCHEK makes migration simple by supporting industry standards (SCORM 1.2) and seamless data transfer from your existing LMS.',
     img: `assets/images/svgs/home/stress-free-switch-icon.svg`, color: 'warning' },
  { title: 'Build Courses within 24 Hours', subtitle: 'Our course builder feature enables you to create modules inside the platform and export them as SCORM packages.',
    img: `assets/images/svgs/home/build-24-hours.svg`, color: 'secondary',imgMain: `assets/images/svgs/home/build-24-hours.svg`, },
  { title: 'Fast. Reliable. Scalable.', subtitle: 'A single platform that stays smooth, even as your learners grow from dozens to thousands.', 
    img: `assets/images/front-pages/logoIcon.svg`, color: 'primary',imgMain: `assets/images/landingpage/background/screen1.png` },
  { title: 'Track What Matters', subtitle: 'Get to know the time spent per module, learner behavior patterns, assessment performance, and drop-off points.', 
    img: `assets/images/svgs/home/track-what-matters.svg`, color: 'success' },
  { title: 'Manage Feedback, Better', subtitle: 'Reviewers can leave timestamped comments right inside your courses, so developers can course correct instantly. No confusion, just continuous improvement.', 
    img: `assets/images/svgs/home/manage-feedback.svg`, color: 'error' },
];

export const  setupCards:setupCards[] = [
  {
    id: 1,
    color: 'warning',
    img: `${baseUrlPathslash}/assets/images/svgs/icon-briefcase.svg`,
    title: 'Light & Dark Color Schemes',
    subtitle: 'Choose your preferred visual style effortlessly.',
  },
  {
    id: 2,
    color: 'secondary',
    img: `${baseUrlPathslash}/assets/images/svgs/icon-connect.svg`,
    title: '12+ Ready to Use Application Designs',
    subtitle: 'Instantly deployable designs for your applications.',
    imgMain: `${baseUrlPathslash}/assets/images/landingpage/background/feature-apps.png`
  },

  {
    id: 3,
    color: 'success',
    img: `${baseUrlPathslash}/assets/images/svgs/icon-speech-bubble.svg`,
    title: 'Code Improvements',
    subtitle: 'Benefit from continuous improvements and optimizations.',
  },
  {
    id: 4,
    color: 'error',
    img: `${baseUrlPathslash}/assets/images/svgs/icon-favorites.svg`,
    title: '50+ UI Components',
    subtitle: 'A rich collection for seamless user experiences.',
  },

];

export const stats = [
  {
    label: '',
    value: '2016',
    description: 'Online Review Tool Launched',
  },
  {
    label: ' ',
    value: '2019',
    description: 'AR/VR Tracking Integrated',
  },
  {
    label: ' ',
    value: '2020',
    description: 'Course Builder Introduced',
  },
  {
    label: ' ',
    value: '2022',
    description: '50+ Courses Released',
  },
  {
    label: ' ',
    value: '2023',
    description: 'Global Translation Support Enabled',
  },
  {
    label: ' ',
    value: '2025',
    description: 'SCORM, Assessment Builder & Course Builder V4 Rolled Out',
  },
  {
    label: ' ',
    value: 'Present Day',
    description: '500+ Courses and Expanding',
  },
];
export const tclients = [
  {
    label: '',
    value: '40%',
    description: 'Increase in Employee Engagement',
  },
  {
    label: ' ',
    value: '25%',
    description: 'Decrease in Employee Turnover',
  },
  {
    label: ' ',
    value: '40%',
    description: 'Savings on Your Current HR Spend',
  },
  {
    label: ' ',
    value: '100%',
    description: 'Better Understanding of Your Talent',
  },
];

export const team = [
  {id: 1,
    name: 'Frank M. Merritt, Ph.D.',
    position: 'CEO',
    image: `${baseUrlPath}assets/images/front-pages/1.jpeg`
  },
  {
    id: 2,
    name: 'Pramod Chandran',
    position: 'COO',
    image: `${baseUrlPath}assets/images/front-pages/2.jpg`
  },
  {
    id: 3,
    name: 'Vinod Chithambaram',
    position: 'EVP – LEARNING PRODUCTS AND APAC SALES',
    image: `${baseUrlPath}assets/images/front-pages/3.png`
  }
];