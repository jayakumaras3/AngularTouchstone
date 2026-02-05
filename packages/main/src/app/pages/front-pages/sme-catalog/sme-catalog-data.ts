/**
 * SME Course Catalog Data Configuration
 * Contains all category definitions and course mappings for SME-focused learning
 */

export interface SmeCourse {
  title: string;
  level: 'foundational' | 'intermediate' | 'advanced';
  group?: string; // Optional sub-grouping within a category
}

export interface SmeCategory {
  id: string;
  title: string;
  focus: string;
  icon: string;
  color: string;
  courses: SmeCourse[];
}

export const SME_CATEGORIES: SmeCategory[] = [
  {
    id: 'business-strategy-operations',
    title: 'Business Strategy & Operations',
    focus: 'Running the business efficiently and planning for growth.',
    icon: 'briefcase',
    color: '#3b82f6',
    courses: [
      // Foundational (The Basics)
      { title: 'Business Acumen', level: 'foundational', group: 'Foundational' },
      { title: 'Six Core Organization Functions', level: 'foundational', group: 'Foundational' },
      { title: 'Principles of Lean Operations', level: 'foundational', group: 'Foundational' },
      { title: 'Introduction to Supply Chain Management', level: 'foundational', group: 'Foundational' },
      { title: 'Inventory Control & Demand Planning', level: 'foundational', group: 'Foundational' },
      { title: 'Order Management & Procurement', level: 'foundational', group: 'Foundational' },
      // Intermediate (Growth & Planning)
      { title: 'Competition vs. Differentiation (SWOT Analysis)', level: 'intermediate', group: 'Intermediate (Growth & Planning)' },
      { title: 'Creating a Competitive Edge', level: 'intermediate', group: 'Intermediate' },
      { title: 'How to Create and Present a Business Growth Plan', level: 'intermediate', group: 'Intermediate' },
      { title: 'Fostering a Culture of Risk Taking', level: 'intermediate', group: 'Intermediate' },
      { title: 'Operationalize Business Strategies', level: 'intermediate', group: 'Intermediate' },
      { title: 'Building Strategic Customer Alliances', level: 'intermediate', group: 'Intermediate' },
      // Advanced (Transformation)
      { title: 'An Introduction to Business Transformation', level: 'advanced', group: 'Advanced' },
      { title: 'Examples and Process of Business Transformation', level: 'advanced', group: 'Advanced' },
      { title: 'Managing Change: Five Key Elements of Successful Change Management', level: 'advanced', group: 'Advanced' },
      { title: 'Change Management Strategy and Process', level: 'advanced', group: 'Advanced' },
      { title: "Kotter's 8 Step Change Model", level: 'advanced', group: 'Advanced' },      
      { title: " McKinsey's 7-S Model", level: 'advanced', group: 'Advanced' },
    ]
  },
  {
    id: 'finance-accounting',
    title: 'Finance & Accounting',
    focus: 'Cash flow and financial health.',
    icon: 'calculator',
    color: '#10b981',
    courses: [
      // Foundational
      { title: 'Finance for Non-Finance Managers', level: 'foundational', group: 'Foundational' },
      { title: 'Basics of Financial Accounting', level: 'foundational', group: 'Foundational' },
      { title: 'Examining the Balance Sheet', level: 'foundational', group: 'Foundational' },
      { title: 'Intangible Assets', level: 'foundational', group: 'Foundational' },
      { title: 'Deferred Revenue', level: 'foundational', group: 'Foundational' },
      // Intermediate
      { title: 'Forecasting and Budgeting', level: 'intermediate', group: 'Intermediate' },
      { title: 'Currency Transactions', level: 'intermediate', group: 'Intermediate' },
      { title: 'Taxation', level: 'intermediate', group: 'Intermediate' },
      { title: 'Project Scheduling and Budgeting', level: 'intermediate', group: 'Intermediate' },
      { title: 'Data Analytics for Finance', level: 'intermediate', group: 'Intermediate' },
    ]
  },
  {
    id: 'sales-marketing-customer-service',
    title: 'Sales, Marketing & Customer Service',
    focus: 'Generating revenue and retaining clients.',
    icon: 'chart-line',
    color: '#f59e0b',
    courses: [
      // Marketing
      { title: 'Introduction to Digital Marketing', level: 'foundational', group: 'Marketing' },
      { title: "Four A's of Marketing: Differentiating Factors", level: 'foundational', group: 'Marketing' },
      { title: 'Brand Loyalty Overview', level: 'intermediate', group: 'Marketing' },
      { title: 'Understanding Brand Value', level: 'intermediate', group: 'Marketing' },
      { title: 'Market Segmentation Overview', level: 'intermediate', group: 'Marketing' },
      { title: 'Brand Repositioning', level: 'advanced', group: 'Marketing' },      
      { title: 'Extend Brand Reach', level: 'advanced', group: 'Marketing' },
      // Sales
      { title: 'Definition, Techniques, and Tips for Virtual Selling', level: 'foundational', group: 'Sales' },
      { title: 'Mastering the Cold Calling Process', level: 'foundational', group: 'Sales' },
      { title: 'Understanding Customers Motivations in Sales', level: 'intermediate', group: 'Sales' },
      { title: 'Effective Sales Presentation Skills', level: 'intermediate', group: 'Sales' },
      { title: 'Aligning Sales Strategy to Organizational Goals', level: 'advanced', group: 'Sales' },
      { title: 'Transitioning to Sales Management', level: 'advanced', group: 'Sales' },
      // Customer Service
      { title: 'An Overview of Customer Service', level: 'foundational', group: 'Customer Service' },
      { title: 'Improving Customer Satisfaction & Rapport', level: 'intermediate', group: 'Customer Service' },
      { title: 'Managing Upset Customers', level: 'intermediate', group: 'Customer Service' },
      { title: 'Prevent and Manage Violence in Customer Facing Roles', level: 'advanced', group: 'Customer Service' },
    ]
  },
  {
    id: 'leadership-management',
    title: 'Leadership & Management',
    focus: 'Transitioning from "Doer" to "Leader."',
    icon: 'users',
    color: '#8b5cf6',
    courses: [
      // New Managers
      { title: 'What is Leadership?', level: 'foundational', group: 'New Managers' },
      { title: 'Transitioning from Peer to Boss (Implied via "Leading, Not Managing People")', level: 'foundational', group: 'New Managers' },
      { title: 'Facilitating vs Directing People', level: 'foundational', group: 'New Managers' },
      { title: 'Motivating People (Theory X vs Theory Y)', level: 'foundational', group: 'New Managers' },
      { title: 'Holding People Accountable', level: 'foundational', group: 'New Managers' },
      { title: 'Assigning Roles and Responsibilities', level: 'foundational', group: 'New Managers' },
      // Team Management
      { title: 'Leading Effective Teams', level: 'intermediate', group: 'Team Management' },
      { title: 'Leading and Managing Effective Virtual Teams', level: 'intermediate', group: 'Team Management' },
      { title: 'Managing Performance', level: 'intermediate', group: 'Team Management' },      
      { title: 'Developing Cascading Goals', level: 'intermediate', group: 'Team Management' },
      { title: 'Giving Effective Feedback', level: 'intermediate', group: 'Team Management' },
      { title: 'Sandwich Feedback', level: 'intermediate', group: 'Team Management' },      
      { title: 'Situational Conflict', level: 'intermediate', group: 'Team Management' },
      { title: 'Small vs. Large Group Conflict', level: 'intermediate', group: 'Team Management' },
      { title: 'Leading Generationally Diverse Teams', level: 'intermediate', group: 'Team Management' },
      // Executive Leadership
      { title: 'Situational Leadership Theory', level: 'advanced', group: 'Executive Leadership' },
      { title: 'Building an Effective Leadership Succession Plan', level: 'advanced', group: 'Executive Leadership' },
      { title: 'Authentic Leadership and Empathy', level: 'advanced', group: 'Executive Leadership' },
      { title: 'Strategy: Shareholder Driven OR Stakeholder Centric?', level: 'advanced', group: 'Executive Leadership' },
      { title: 'Evolving Organizational Leadership: Part 1', level: 'advanced', group: 'Executive Leadership' },
      { title: 'Evolving Organizational Leadership: Part 2', level: 'advanced', group: 'Executive Leadership' },
    ]
  },
  {
    id: 'hr-hiring-talent-development',
    title: 'HR, Hiring & Talent Development',
    focus: 'Building the team and keeping it legal.',
    icon: 'user-plus',
    color: '#ec4899',
    courses: [
      // Talent Acquisition
      { title: 'Creating a Successful Hiring Process', level: 'foundational', group: 'Talent Acquisition' },      
      { title: 'Recruiting', level: 'foundational', group: 'Talent Acquisition' },
      { title: 'Interviewing Candidates for Employment', level: 'foundational', group: 'Talent Acquisition' },
      { title: 'Behavioral Interviewing', level: 'foundational', group: 'Talent Acquisition' },      
      { title: 'The Right Hire', level: 'foundational', group: 'Talent Acquisition' },
      { title: 'Ten Tips for Successful Employee Recruitment', level: 'foundational', group: 'Talent Acquisition' },
      { title: 'Selection & Onboarding', level: 'foundational', group: 'Talent Acquisition' },
      // Talent Development
      { title: 'Importance of Training and Development', level: 'intermediate', group: 'Talent Development' },      
      { title: 'Setting SMART Goals', level: 'intermediate', group: 'Talent Development' },
      { title: 'Setting Stretch Goals', level: 'intermediate', group: 'Talent Development' },
      { title: 'Individual Development Plans', level: 'intermediate', group: 'Talent Development' },
      { title: 'Coaching vs. Mentoring', level: 'intermediate', group: 'Talent Development' },
      { title: 'The GROW Model (Coaching)', level: 'intermediate', group: 'Talent Development' },
      { title: 'Becoming a Continuous Learning Organization', level: 'intermediate', group: 'Talent Development' },
      // Diversity, Equity & Inclusion (DEI)
      { title: 'An Introduction to DEI', level: 'intermediate', group: 'Diversity, Equity & Inclusion (DEI)' },
      { title: 'Unconscious Bias in Recruitment', level: 'intermediate', group: 'Diversity, Equity & Inclusion (DEI)' },
      { title: 'Respectful Workplace', level: 'intermediate', group: 'Diversity, Equity & Inclusion (DEI)' },
      { title: 'Sexual Harassment Prevention (California Specific & General)', level: 'intermediate', group: 'Diversity, Equity & Inclusion (DEI)' },
      { title: 'Managing Diversity', level: 'advanced', group: 'Diversity, Equity & Inclusion (DEI)' },
    ]
  },
  {
    id: 'personal-development-soft-skills',
    title: 'Personal Development & Soft Skills',
    focus: 'Individual contributor efficiency.',
    icon: 'brain',
    color: '#06b6d4',
    courses: [
      // Communication
      { title: 'Business Communication Skills & Writing', level: 'foundational', group: 'Communication' },
      { title: 'Effective Resume Development & LinkedIn (Building Personal Brand)', level: 'foundational', group: 'Communication' },
      { title: 'Interpersonal Communication in the Workplace', level: 'foundational', group: 'Communication' },
      { title: 'Enhancing Listening Skills', level: 'foundational', group: 'Communication' },
      { title: 'Delivering Effective Presentations & Elevator Pitches', level: 'intermediate', group: 'Communication' },
      // Productivity & Mindset
      { title: 'Time Management: Myths and Mistakes', level: 'foundational', group: 'Productivity & Mindset' },
      { title: 'Getting Rid of Distractions at Work', level: 'foundational', group: 'Productivity & Mindset' },
      { title: 'The Whys and Hows of a Growth Mindset', level: 'intermediate', group: 'Productivity & Mindset' },
      { title: 'Resilience in Business', level: 'intermediate', group: 'Productivity & Mindset' },
      { title: 'Adaptability and Continuous Learning', level: 'intermediate', group: 'Productivity & Mindset' },
      // Critical Thinking
      { title: 'Importance of Critical Thinking', level: 'foundational', group: 'Critical Thinking' },
      { title: 'Judgment and Complex Decision-Making', level: 'intermediate', group: 'Critical Thinking' },
      { title: 'Design Thinking for Creativity and Innovation', level: 'advanced', group: 'Critical Thinking' },
      { title: 'Problem Solving Strategies', level: 'intermediate', group: 'Critical Thinking' },
    ]
  },
  {
    id: 'workplace-compliance-safety-wellness',
    title: 'Workplace Compliance, Safety & Wellness',
    focus: 'Risk mitigation.',
    icon: 'shield-check',
    color: '#ef4444',
    courses: [
      // Compliance & Ethics
      { title: 'Importance of Ethics and Code of Conduct', level: 'foundational', group: 'Compliance & Ethics' },
      { title: 'Anti-Bribery and Anti-Corruption Policies', level: 'foundational', group: 'Compliance & Ethics' },
      { title: 'POSH (Prevention of Sexual Harassment)', level: 'foundational', group: 'Compliance & Ethics' },
      { title: 'Workplace Politics & Ethics', level: 'intermediate', group: 'Compliance & Ethics' },
      { title: 'Data Protection and Privacy (GDPR Basics)', level: 'intermediate', group: 'Compliance & Ethics' },
      // Safety (EHS)
      { title: 'Workplace Safety Responsibilities (OSHA Basics)', level: 'foundational', group: 'Safety (EHS)' },
      { title: 'Health and Safety Manager Role in Emergency Response and Fire Safety', level: 'foundational', group: 'Safety (EHS)' },
      { title: 'Ergonomics (Implied in Equipment Safety)', level: 'foundational', group: 'Safety (EHS)' },
      { title: 'Workplace Violence Prevention (Active Shooter, Robbery)', level: 'intermediate', group: 'Safety (EHS)' },
      // Wellness
      { title: 'Managing Stress and Emotions', level: 'foundational', group: 'Wellness' },
      { title: 'Importance of Self-Care and Staying Well at Work', level: 'foundational', group: 'Wellness' },
      { title: 'Psychological Safety at Work', level: 'intermediate', group: 'Wellness' },
      { title: 'Burnout Prevention (Implied in Mental Wellness)', level: 'intermediate', group: 'Wellness' },
    ]
  },
  {
    id: 'technology-digital-skills',
    title: 'Technology & Digital Skills',
    focus: 'Modernizing the SME.',
    icon: 'cpu',
    color: '#6366f1',
    courses: [
      // Digital Literacy
      { title: 'Basic Digital Skills', level: 'foundational', group: 'Digital Literacy' },
      { title: 'Introduction to Emotional Intelligence (Note: Often grouped with Soft Skills, but "EQ in Tech" is a trend)', level: 'foundational', group: 'Digital Literacy' },
      { title: 'Collaboration Tools (Zoom/Teams implied via "Virtual Teams")', level: 'foundational', group: 'Digital Literacy' },
      // Infrastructure & Cloud
      { title: 'Cloud Technology: Intro to AWS, Azure, Google Cloud (Good for decision makers)', level: 'intermediate', group: 'Infrastructure & Cloud' },
      { title: 'Hybrid Cloud for Businesses', level: 'intermediate', group: 'Infrastructure & Cloud' },
      { title: 'Importance of Data Backup and Retention', level: 'foundational', group: 'Infrastructure & Cloud' },
      // Cybersecurity
      { title: 'The Cybersecurity Landscape', level: 'foundational', group: 'Cybersecurity' },
      { title: 'How to Protect Yourself from Cyber Security Threats (Phishing, Malware)', level: 'foundational', group: 'Cybersecurity' },
      { title: 'Online Safety and Cyber Security', level: 'foundational', group: 'Cybersecurity' },
      { title: 'Managing Passwords', level: 'foundational', group: 'Cybersecurity' },
      { title: 'Security Awareness for IT Professionals', level: 'intermediate', group: 'Cybersecurity' },
    ]
  }
];

/**
 * Get category by ID
 */
export function getSmeCategoryById(id: string): SmeCategory | undefined {
  return SME_CATEGORIES.find(cat => cat.id === id);
}

/**
 * Get all unique groups within a category
 */
export function getCategoryGroups(category: SmeCategory): string[] {
  const groups = new Set<string>();
  category.courses.forEach(course => {
    if (course.group) {
      groups.add(course.group);
    }
  });
  return Array.from(groups);
}

/**
 * Get courses by group within a category
 */
export function getCoursesByGroup(category: SmeCategory, group: string): SmeCourse[] {
  return category.courses.filter(course => course.group === group);
}
