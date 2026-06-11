// ── Certification Config Data ─────────────────────────────────────────────────
const CERTIFICATION_CONFIGS = [
  { certificate_id: 1, shortName: 'CCD-Tech',  duration: '7 Hours 10 Minutes',  price: '₹799', priceValue: 799,  color: '#3b82f6', icon: 'cloud'     },
  { certificate_id: 2, shortName: 'HC-LC',     duration: '9 Hours',             price: '₹899', priceValue: 899,  color: '#8b5cf6', icon: 'users'     },
  { certificate_id: 3, shortName: 'SDBPS',     duration: '8 Hours 37 Minutes',  price: '₹799', priceValue: 799,  color: '#10b981', icon: 'brain'     },
  { certificate_id: 4, shortName: 'WRWEI',     duration: '5 Hours 29 Minutes',  price: '₹599', priceValue: 599,  color: '#f59e0b', icon: 'heart'     },
  { certificate_id: 5, shortName: 'CSMBL',     duration: '10 Hours',            price: '₹899', priceValue: 899,  color: '#ec4899', icon: 'chart-bar' },
  { certificate_id: 6, shortName: 'CTLTE',     duration: '5 Hours 28 Minutes',  price: '₹599', priceValue: 599,  color: '#06b6d4', icon: 'award'     },
  { certificate_id: 7, shortName: 'CSFBA',     duration: '4.2 Hours',           price: '₹499', priceValue: 499,  color: '#ef4444', icon: 'coins'     },
];

// ── Embedded Certification Data (mirrors assets/data/certificationsPage.json) ─
const CERTIFICATIONS_DATA = [
  {
    certificate_id: 1,
    certificate_name: 'Certification in Cloud, Cybersecurity, and Digital Transformation (CCD-Tech Certification)',
    certificate_description: '<p>The CCD-Tech Certification equips professionals with foundational and advanced knowledge in Cloud Technologies, Cybersecurity, and Digital Transformation. Participants gain hands-on awareness, practical insights, and strategic understanding of modern enterprise technologies.</p>',
    price: '₹799', duration: '7 Hours 10 Minutes', total_courses: 27, total_learning_paths: 3,
    learning_paths: [
      { lp_id: 5, lp_name: 'Cloud Technology', lp_description: '<p>Understand cloud computing fundamentals, key platforms, and hybrid cloud strategies for business.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:840,course_name:'An Introduction to Amazon Web Services (AWS)'},{course_id:846,course_name:'Google Cloud for Businesses'},{course_id:849,course_name:'Introduction to Microsoft Azure'},{course_id:863,course_name:'Hybrid Cloud for Businesses'}] },
      { lp_id: 6, lp_name: 'Cybersecurity Essentials', lp_description: '<p>Build awareness and understanding of cybersecurity threats, defense mechanisms, privacy regulations, and IT security practices.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:804,course_name:'How to Protect Yourself from Cyber Security Threats'},{course_id:860,course_name:'The Cybersecurity Landscape'},{course_id:861,course_name:'Malware and Advanced Persistent Threats'},{course_id:862,course_name:'Network Cybersecurity Attacks – Management and Monitoring'},{course_id:867,course_name:'Computer Forensics'},{course_id:967,course_name:'Online Safety and Cyber Security'},{course_id:1008,course_name:'Relationship Between Data Protection and Privacy'},{course_id:1163,course_name:'Data Protection and Privacy'},{course_id:1166,course_name:'A Deep Dive Into Phishing'},{course_id:1170,course_name:'Cybersecurity Essentials'},{course_id:1171,course_name:'Security Awareness for IT Professionals'},{course_id:1172,course_name:'The Basics of GDPR'},{course_id:1814,course_name:'Managing Passwords'},{course_id:1839,course_name:'Social Engineering'},{course_id:1842,course_name:'Shadow IT'},{course_id:1846,course_name:'Malware'},{course_id:1847,course_name:'Cloud Security'},{course_id:1849,course_name:'Mobile Security'}] },
      { lp_id: 7, lp_name: 'Digital Transformation', lp_description: '<p>The CCD-Tech Certification equips professionals with foundational and advanced knowledge in Cloud Technologies, Cybersecurity, and Digital Transformation.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:720,course_name:'Transformation of Markets, Business Models, and Strategy'},{course_id:1093,course_name:'Transformation of Customer Needs, Workforce Needs, and Operations'},{course_id:1094,course_name:'Transformation of Technology, Security, and Enterprise Architecture'},{course_id:1137,course_name:'An Introduction to Digital Transformation'},{course_id:1139,course_name:'Organization Changes Needed For Internal Digital Transformation'}] }
    ]
  },
  {
    certificate_id: 2,
    certificate_name: 'Certification in Human-Centric Leadership and Inclusive Culture (HC-LC Certification)',
    certificate_description: '<p>The HC-LC Certification is designed to cultivate the mindset and skills needed to lead with empathy, inclusivity, and emotional intelligence in today\'s evolving workplace. This program integrates key human-centric competencies, from interpersonal effectiveness and creative problem-solving to diversity, equity, and inclusion (DEI) leadership.</p>',
    price: '₹899', duration: '9 Hours', total_courses: 38, total_learning_paths: 4,
    learning_paths: [
      { lp_id: 8, lp_name: 'Interpersonal Skills and Empathy', lp_description: '<p>The HC-LC Certification is designed to cultivate the mindset and skills needed to lead with empathy, inclusivity, and emotional intelligence in today\'s evolving workplace.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:692,course_name:'Interpersonal Relationships'},{course_id:746,course_name:'Enhancing Listening Skills'},{course_id:747,course_name:'Networking and Building Relationships'},{course_id:937,course_name:'Applying Interpersonal Skills at Work'},{course_id:988,course_name:'Influence of Interpersonal Skills on Business Culture'},{course_id:994,course_name:'Steps to Improve Interpersonal Communication Skills'},{course_id:1023,course_name:'Empathy-Building Exercises to Improve Communication and Relationships'},{course_id:1180,course_name:'Strategies to Improve Empathetic Skills'}] },
      { lp_id: 9, lp_name: 'Conflict Management and Collaboration', lp_description: '<p>Through structured modules, participants will learn how to foster trust, resolve conflicts, inspire collaboration, and build inclusive cultures.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:765,course_name:'Situational Conflict'},{course_id:770,course_name:'Small vs. Large Group Conflict'},{course_id:771,course_name:'The Role of the Facilitator'}] },
      { lp_id: 10, lp_name: 'Creative Thinking and Problem-Solving', lp_description: '<p>This program integrates key human-centric competencies from interpersonal effectiveness and creative problem-solving to DEI leadership.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:1178,course_name:'An Introduction to Creative Thinking'},{course_id:1197,course_name:'Exploring and Improving Creative Thinking Skills'}] },
      { lp_id: 11, lp_name: 'Diversity, Equity, and Inclusion at Workplace', lp_description: '<p>Build inclusive cultures that drive organizational performance and employee well-being through DEI leadership frameworks.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:813,course_name:'Diversity Hiring and Inclusion'},{course_id:822,course_name:'Dimensions of Diversity'},{course_id:824,course_name:'Employee Resource Groups'},{course_id:826,course_name:'Using Social Media Recruitment for DEI'},{course_id:828,course_name:'Understanding the Cultural Differences (U.S./India)'},{course_id:829,course_name:'Disability Awareness Full Circle Inclusion and Diversity'},{course_id:830,course_name:'English as a Second Language (ESL)'},{course_id:834,course_name:'Using Pronouns at Workplace'},{course_id:835,course_name:'Dealing with Customers who are Discriminatory'},{course_id:864,course_name:'Disability Law Full Circle Inclusion and Diversity'},{course_id:868,course_name:'Unconscious Bias – Bias in Talent Development and Recruitment'},{course_id:872,course_name:'Invisible Disabilities'},{course_id:873,course_name:'Web Design for User Accessibility'},{course_id:874,course_name:'Serving Customers With Disabilities'},{course_id:876,course_name:'Neurodiversity'},{course_id:877,course_name:'Affirmative Action for Businesses'},{course_id:1009,course_name:'Microaggressions in Gender-Based Discrimination'},{course_id:1021,course_name:'Understanding Gender Inequality'},{course_id:1022,course_name:'Creating an Inclusive Workplace Culture'},{course_id:1023,course_name:'Empathy-Building Exercises to Improve Communication and Relationships'},{course_id:1024,course_name:'Gender Stereotypes in the Workplace'},{course_id:1072,course_name:'An Introduction to DEI'},{course_id:1073,course_name:'Gender and Innovation'},{course_id:1086,course_name:'The Macro Effects of Microaggressions'},{course_id:1181,course_name:'Anti-Discrimination Commitment'}] }
    ]
  },
  {
    certificate_id: 3,
    certificate_name: 'Certification in Self-Development and Business Power Skills (SDBPS Certification)',
    certificate_description: '<p>This program provides practical tools for effective communication, performance management, presentations, business writing, and interpersonal effectiveness. Participants will gain actionable insights, hands-on skills, and frameworks to enhance personal and professional effectiveness.</p>',
    price: '₹799', duration: '8 Hours 37 Minutes', total_courses: 42, total_learning_paths: 6,
    learning_paths: [
      { lp_id: 12, lp_name: 'Self-Development', lp_description: '<p>The SDBPS Certification equips professionals with critical self-development, communication, leadership, and business skills to excel in the modern workplace.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:809,course_name:'Effective Resume Development'},{course_id:814,course_name:'Delivering Effective Presentations'},{course_id:821,course_name:'Technical Enhancements for Delivering Effective Presentations'},{course_id:823,course_name:'Principles of Lean Operations'},{course_id:878,course_name:'How to Give an Elevator Pitch?'},{course_id:933,course_name:'Interpersonal Communication in the Workplace'},{course_id:956,course_name:'How Leaders Create and Use Networks'},{course_id:976,course_name:'Definition, Techniques, and Tips for Virtual Selling'},{course_id:988,course_name:'Influence of Interpersonal Skills on Business Culture'}] },
      { lp_id: 13, lp_name: 'Effective Meetings', lp_description: '<p>Practical tools for conducting productive, time-efficient meetings with clear agendas and role assignments.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:738,course_name:'Assigning Roles and Responsibilities'},{course_id:739,course_name:'Defining the Right Agenda'},{course_id:740,course_name:"Understanding the Value of People's Time"}] },
      { lp_id: 14, lp_name: 'Effective Feedback', lp_description: '<p>Master the art of giving and receiving constructive feedback to drive performance and professional growth.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:684,course_name:'Giving Effective Feedback'},{course_id:735,course_name:'Resistant vs. Open to Change'},{course_id:736,course_name:'Sandwich Feedback'},{course_id:737,course_name:'Managing Your Reaction to Feedback'},{course_id:1304,course_name:'Understanding 360-Degree Feedback'},{course_id:1602,course_name:'Understanding 360-Degree Feedback Reports'},{course_id:1603,course_name:'360-Degree Feedback and Personal Development Plans'}] },
      { lp_id: 15, lp_name: 'Effective Communication', lp_description: '<p>Build communication skills that foster clarity, collaboration, and professional impact in the workplace.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:731,course_name:'Communicating Upward'},{course_id:732,course_name:'Creating Win-Win Scenarios'},{course_id:733,course_name:'Electronic Communications'},{course_id:734,course_name:'Using Open-Ended Questions'}] },
      { lp_id: 16, lp_name: 'Business Power Skills', lp_description: '<p>Gain actionable insights and frameworks to enhance personal and professional effectiveness in modern business.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:697,course_name:'Building Your Personal Brand'},{course_id:698,course_name:'Business Acumen'},{course_id:699,course_name:'Business Communication Skills'},{course_id:700,course_name:'Customer Service'},{course_id:701,course_name:'Effective Presentations'},{course_id:702,course_name:'Interpersonal Effectiveness'},{course_id:703,course_name:'Project Management'},{course_id:710,course_name:'Review of Grammatical Principles'},{course_id:991,course_name:'How to Keep the Brain Fit for Agile Leadership'},{course_id:992,course_name:'Improving Your Judgment and Complex Decision-Making Skills'},{course_id:993,course_name:'Examples and Process of Business Transformation'},{course_id:1000,course_name:'Soft Skills in Business and Their Importance'},{course_id:1005,course_name:'Ways to Apply Leadership Techniques at Work'},{course_id:1078,course_name:'Becoming a Good Business Writer'},{course_id:1203,course_name:'The Whys and Hows of a Growth Mindset at Work'}] },
      { lp_id: 17, lp_name: 'Managing Performance', lp_description: '<p>Learn proven frameworks for setting goals, managing performance, and developing individuals for success.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:773,course_name:'Individual Development Plans'},{course_id:774,course_name:'Setting SMART Goals'},{course_id:775,course_name:'Setting Stretch Goals'},{course_id:776,course_name:'The GROW Model'}] }
    ]
  },
  {
    certificate_id: 4,
    certificate_name: 'Certification in Workplace Resilience, Wellness, and Emotional Intelligence (WRWEI Certification)',
    certificate_description: '<p>The WRWEI Certification equips professionals with essential skills to build resilience, promote mental wellness, and develop emotional intelligence in the workplace. Participants will gain actionable insights and frameworks to improve workplace performance, relationships, and overall well-being.</p>',
    price: '₹599', duration: '5 Hours 29 Minutes', total_courses: 26, total_learning_paths: 4,
    learning_paths: [
      { lp_id: 18, lp_name: 'Resilience at Work', lp_description: '<p>Build resilience strategies to navigate workplace challenges and maintain peak performance under pressure.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:1218,course_name:'How to Boost Resilience at Work'}] },
      { lp_id: 19, lp_name: 'Workplace Politics', lp_description: '<p>Navigate workplace dynamics and politics with strategies for fostering psychologically safe work environments.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:869,course_name:'Workplace Politics: Debate'}] },
      { lp_id: 20, lp_name: 'Workplace Wellness', lp_description: '<p>Practical strategies for personal and team well-being, navigating workplace politics, and fostering psychologically safe work environments.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:845,course_name:'Managing Stress and Emotions'},{course_id:957,course_name:'Five Ways to Promote Employee Mental Wellness'},{course_id:960,course_name:'Importance of Self-Care and Staying Well at Work'},{course_id:962,course_name:'Impacts of Returning to the Workplace'},{course_id:963,course_name:'Tips to Create a Psychologically Safe Work Environment'},{course_id:964,course_name:'The 4 Stages of Psychological Safety'},{course_id:966,course_name:'Importance of Psychological Safety at Work'},{course_id:970,course_name:'Types and Elements of Empathy'},{course_id:971,course_name:'Mental Wellness at the Workplace and Its Benefits'},{course_id:981,course_name:'Strategies to Improve Staff Wellness'},{course_id:989,course_name:'An Introduction to Wellness'},{course_id:990,course_name:'10 Ways to Practice Self-Care at Work'},{course_id:994,course_name:'Steps to Improve Interpersonal Communication Skills'},{course_id:1004,course_name:'Advantages of Leading with Empathy and Authenticity'},{course_id:1015,course_name:'The Importance of Wellness in the Workplace'},{course_id:1016,course_name:'What Is Meant by Well-Being in the Workplace'},{course_id:1018,course_name:'Culture of Self-Care in the Workplace'},{course_id:1020,course_name:'How to Improve Workplace Wellness'},{course_id:1080,course_name:'Consequences of Actions-Impulsive Behavior at the Workplace'}] },
      { lp_id: 21, lp_name: 'Emotional Intelligence', lp_description: '<p>Develop emotional intelligence competencies to improve leadership, relationships, and organizational effectiveness.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:742,course_name:'Emotional Intelligence Strategies'},{course_id:743,course_name:'Introduction to Emotional Intelligence'},{course_id:744,course_name:'Personal Competence'},{course_id:745,course_name:'Social Competence'},{course_id:898,course_name:'Modern Day Workforce'}] }
    ]
  },
  {
    certificate_id: 5,
    certificate_name: 'Certification in Strategic Marketing and Brand Leadership (CSMBL Certification)',
    certificate_description: '<p>The CSMBL Certification is designed to provide a holistic understanding of modern marketing, customer behavior, branding, and innovation strategies that drive global business success. Participants will gain global perspectives through modules developed around Dr. Jagdish N. Sheth\'s marketing insights, ensuring real-world relevance and strategic application.</p>',
    price: '₹899', duration: '10 Hours', total_courses: 47, total_learning_paths: 6,
    learning_paths: [
      { lp_id: 22, lp_name: 'Marketing Foundations & Market Segmentation', lp_description: '<p>This program equips learners with strategic marketing frameworks, customer insight models, and leadership tools to effectively manage brands and enhance customer engagement.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:803,course_name:'Introduction to Digital Marketing'},{course_id:910,course_name:'Methods of Segmenting the Market'},{course_id:911,course_name:'Market Segmentation: Overview'},{course_id:912,course_name:'Market Psychographics'},{course_id:913,course_name:'What is Market Segmentation'},{course_id:916,course_name:'Market Buy-o-Graphics'},{course_id:920,course_name:'Awareness and Accessibility: Overview'}] },
      { lp_id: 23, lp_name: "The 4 A's of Marketing Framework", lp_description: "<p>Learn the 4 A's of Marketing framework — Acceptability, Affordability, Accessibility, and Awareness — for driving market success.</p>", lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:922,course_name:"Four A's of Marketing: Differentiating Factors"},{course_id:924,course_name:'4 As of Marketing Part 1'},{course_id:926,course_name:'Affordability and Acceptability'}] },
      { lp_id: 24, lp_name: 'Brand Management & Strategy', lp_description: '<p>Master brand loyalty, brand value, repositioning, and strategies for extending brand reach in competitive markets.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:879,course_name:'Brand Loyalty Overview'},{course_id:880,course_name:'Behavioral Theories of Brand Loyalty'},{course_id:881,course_name:'Institutional Theories of Brand Loyalty'},{course_id:882,course_name:'Socialization Theories of Brand Loyalty'},{course_id:903,course_name:'Do Brand Have Nine Lives'},{course_id:904,course_name:'Understanding Brand Value'},{course_id:905,course_name:'Expand the Brand Reach'},{course_id:906,course_name:'Brand Variation'},{course_id:907,course_name:'Extending the Brand Reach'},{course_id:908,course_name:'Brand Repositioning'},{course_id:909,course_name:'Getting More out of a Brand'}] },
      { lp_id: 25, lp_name: 'Customer Focus & Satisfaction', lp_description: '<p>Build strong customer relationships and satisfaction strategies that drive loyalty and business growth.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:700,course_name:'Customer Service'},{course_id:716,course_name:'Improving Customer Rapport'},{course_id:717,course_name:'Understanding Customer Motivation in Sales'},{course_id:718,course_name:'Managing Upset Customers'},{course_id:820,course_name:'Role of the Customer and Supplier'},{course_id:842,course_name:'Building Strategic Customer Alliances'},{course_id:854,course_name:'Improving Customer Satisfaction'},{course_id:923,course_name:'Customer Relationship Management'},{course_id:958,course_name:'An Overview of Customer Service'},{course_id:1859,course_name:'Handling Email Complaints'}] },
      { lp_id: 26, lp_name: 'Sales Effectiveness & Leadership', lp_description: '<p>Develop leadership tools to lead high-performing sales and marketing teams with strategic effectiveness.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:690,course_name:'Sales Effectiveness'},{course_id:691,course_name:'Sales Leadership'},{course_id:1096,course_name:'Effective Sales Presentation Skills for Small Groups'},{course_id:1097,course_name:'Mastering the Cold Calling Process'},{course_id:1192,course_name:'Sales and Procurement Practices'}] },
      { lp_id: 27, lp_name: 'Innovation & Market Trends', lp_description: '<p>Explore innovation frameworks and market trend analysis to stay ahead in dynamic global business environments.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:753,course_name:'Building Innovation Teams'},{course_id:754,course_name:'Leading Innovation Sessions'},{course_id:755,course_name:'Trystorming'},{course_id:884,course_name:'Food as a Necessity'},{course_id:886,course_name:'Time and Space as Dimensions of Varying Consumption'},{course_id:887,course_name:'Dramatic Difference of Clothing and Shelter'},{course_id:888,course_name:'Technology, Friendship and Agreement as Dimensions of Varying Consumption'},{course_id:889,course_name:'Other Dimensions of Varying Consumption'},{course_id:899,course_name:'Reality of the Declining Middle Class'},{course_id:900,course_name:'How Will the Declining Middle Class Impact the World Part 1'},{course_id:902,course_name:'How Will the Declining Middle Class Impact the World Part 2'}] }
    ]
  },
  {
    certificate_id: 6,
    certificate_name: 'Certification in Transformational Leadership and Team Excellence (CTLTE Certification)',
    certificate_description: '<p>This certification equips professionals with the knowledge and skills to lead teams effectively, manage people, drive innovation, and implement organizational change. Participants will learn proven leadership models, team dynamics strategies, and change management frameworks for modern workplaces.</p>',
    price: '₹599', duration: '5 Hours 28 Minutes', total_courses: 24, total_learning_paths: 5,
    learning_paths: [
      { lp_id: 28, lp_name: 'Leading Teams', lp_description: '<p>Learn proven leadership models and team dynamics strategies for leading high-performing diverse teams in modern workplaces.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:760,course_name:'Employee Motivation – Intrinsic vs. Extrinsic Motivation'},{course_id:761,course_name:'Leading and Motivating Call Center Teams'},{course_id:762,course_name:'Leading and Managing Effective Virtual Teams'},{course_id:763,course_name:'Leading Dynamic Teams'},{course_id:764,course_name:'Leading Generationally Diverse Teams'},{course_id:983,course_name:'Brain-Based Ways to Improve Team Performance'}] },
      { lp_id: 29, lp_name: 'Leading People', lp_description: '<p>Develop people management skills to motivate, hold accountable, and drive performance across teams.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:756,course_name:'Facilitating vs. Directing People'},{course_id:757,course_name:'Holding People Accountable'},{course_id:758,course_name:'Leading, Not Managing People'},{course_id:759,course_name:'Motivating People – Theory X vs. Theory Y'},{course_id:965,course_name:'Strategies and Skills for Effective Leadership and People Management'},{course_id:1002,course_name:'Importance of Leadership and People Management'},{course_id:1092,course_name:'Key Skills of Effective Virtual Leadership'}] },
      { lp_id: 30, lp_name: 'Sales Effectiveness', lp_description: '<p>Apply sales effectiveness techniques within a leadership context to drive team performance and business results.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:1097,course_name:'Mastering the Cold Calling Process'}] },
      { lp_id: 31, lp_name: 'Leading Innovation', lp_description: '<p>Build innovation capabilities and lead teams through creative problem-solving and innovation sessions.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:753,course_name:'Building Innovation Teams'},{course_id:754,course_name:'Leading Innovation Sessions'},{course_id:755,course_name:'Trystorming'}] },
      { lp_id: 32, lp_name: 'Leading Change', lp_description: '<p>Implement organizational change using proven change management frameworks like Kotter\'s 8-Step, Lewin\'s 3 Stages, and McKinsey\'s 7-S Model.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:750,course_name:"Kotter's 8-Step Change Model"},{course_id:751,course_name:"Kurt Lewin's 3 Stages of Change Model"},{course_id:752,course_name:"McKinsey's 7-S Model"},{course_id:943,course_name:'Change Management Strategy and Process'},{course_id:995,course_name:'Strategies to Embrace Change at Work'},{course_id:1194,course_name:'Five Key Elements of Successful Change Management'},{course_id:1202,course_name:'Dealing with Environmental Change and Uncertainty'}] }
    ]
  },
  {
    certificate_id: 7,
    certificate_name: 'Certification in Strategic Finance and Business Acumen (CSFBA Certification)',
    certificate_description: '<p>The CSFBA Certification is designed for professionals seeking a deep understanding of modern financial systems, strategic decision-making, and digital transformation in finance. This program bridges core accounting principles, financial analytics, and business acumen, equipping learners to navigate both traditional finance and emerging fintech landscapes.</p>',
    price: '₹499', duration: '4.2 Hours', total_courses: 18, total_learning_paths: 5,
    learning_paths: [
      { lp_id: 33, lp_name: 'Core Accounting and Finance', lp_description: '<p>Understand the foundational principles of financial accounting, deferred revenue, currency transactions, and subsidiary consolidation.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:938,course_name:'Basics of Financial Accounting'},{course_id:985,course_name:'Deferred Revenue'},{course_id:987,course_name:'Currency Transactions'},{course_id:1017,course_name:'Consolidating Subsidiaries'},{course_id:1182,course_name:'Intercompany Transactions'}] },
      { lp_id: 34, lp_name: 'Financial Analysis & Metrics', lp_description: '<p>Develop skills in balance sheet analysis, forecasting, budgeting, and financial performance metrics for strategic decision-making.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:694,course_name:'Examining the Balance Sheet'},{course_id:696,course_name:'Forecasting and Budgeting'},{course_id:951,course_name:'Intangible Assets'},{course_id:1665,course_name:'Understanding Financial Performance Metrics'}] },
      { lp_id: 35, lp_name: 'Advanced Finance Topics', lp_description: '<p>Explore advanced financial concepts including shareholder-driven business models and derivative instruments.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:925,course_name:'Shareholder Driven Companies'},{course_id:1198,course_name:'Derivatives'}] },
      { lp_id: 36, lp_name: 'Business Acumen', lp_description: '<p>Build business acumen skills bridging finance for non-finance managers with practical frameworks for business decision-making.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:682,course_name:'Business Acumen – Finance'},{course_id:694,course_name:'Examining the Balance Sheet'},{course_id:695,course_name:'Finance for Non-Finance Managers'},{course_id:696,course_name:'Forecasting and Budgeting'}] },
      { lp_id: 37, lp_name: 'Modern Finance & Technology', lp_description: '<p>Navigate the intersection of finance and technology through blockchain, cryptography, and data analytics for finance.</p>', lp_banner: 'https://dochek.com/assets/assets/img/default_learning_plan_banner.jpg', courses: [
        {course_id:996,course_name:'Cryptography'},{course_id:1079,course_name:'Blockchain Revolution for Enterprises'},{course_id:1081,course_name:'Data Analytics for Finance'}] }
    ]
  }
];

// ── Helpers ───────────────────────────────────────────────────────────────────
function getConfigById(id) {
  return CERTIFICATION_CONFIGS.find(c => c.certificate_id === id) || null;
}

function getTotalCourses(learningPaths) {
  return learningPaths.reduce((total, lp) => total + lp.courses.length, 0);
}

function getCertificationImage(shortName) {
  const map = {
    'CCD-Tech': 'Cloud, Cybersecurity and Digital Transformation.jpg',
    'HC-LC':    'Human-Centric Leadership and Inclusive Culture.jpg',
    'SDBPS':    'Self-Development and Business Power Skills.jpg',
    'WRWEI':    'Workplace Wellness.jpg',
    'CSMBL':    'Strategic Marketing and Brand Leadership.jpg',
    'CTLTE':    'Transformational Leadership.jpg',
    'CSFBA':    'Strategic Finance.jpg',
  };
  const filename = map[shortName];
  return filename ? `assets/images/${encodeURIComponent(filename)}` : '';
}

function stripHtml(html) {
  if (!html) return '';
  const div = document.createElement('div');
  div.innerHTML = html;
  return (div.textContent || div.innerText || '').replace(/\s+/g, ' ').trim();
}

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

// ── Data Loading (returns embedded data; also tries fetch for products) ────────
function loadCertifications() {
  return Promise.resolve(CERTIFICATIONS_DATA);
}

async function loadProducts() {
  try {
    const res = await fetch('../../assets/data/product-data.json');
    if (res.ok) {
      const data = await res.json();
      const map = new Map();
      for (const p of data) map.set(p.id, p);
      return map;
    }
  } catch (_) {}
  return new Map();
}

// ── SVG Icon Library ──────────────────────────────────────────────────────────
const ICONS = {
  cloud: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
  users: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  brain: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.44-4.66z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.44-4.66z"/></svg>`,
  heart: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  'chart-bar': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/><line x1="2" x2="22" y1="20" y2="20"/></svg>`,
  award: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  coins: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><line x1="9.27" x2="12" y1="8" y2="8"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  book: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>`,
  route: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg>`,
  'arrow-left': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`,
  'arrow-right': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  'list-check': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/></svg>`,
  'currency-rupee': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3"/><path d="M9 13c6.667 0 6.667-10 0-10"/></svg>`,
  'certificate-off': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="2" x2="22" y2="22"/><path d="M7 7H4a2 2 0 0 0-2 2v3a7 7 0 0 0 4.5 6.5L8 19.9"/><path d="M10.5 7H20a2 2 0 0 1 2 2v3a7 7 0 0 1-4.5 6.5L16 19.9"/></svg>`,
  image: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`,
};

function getIcon(name, size = 18) {
  const svg = ICONS[name] || ICONS['image'];
  return svg
    .replace(/width="24"/g, `width="${size}"`)
    .replace(/height="24"/g, `height="${size}"`);
}

// ── Shared loading/error states ───────────────────────────────────────────────
function showLoading(container, message) {
  container.innerHTML = `<div class="state-loading"><div class="spinner"></div><p>${message}</p></div>`;
}

function showError(container, message) {
  container.innerHTML = `
    <div class="not-found">
      ${getIcon('certificate-off', 56)}
      <h2>Something went wrong</h2>
      <p>${message}</p>
      <button onclick="history.back()" class="back-btn-dark">${getIcon('arrow-left', 16)} Go Back</button>
    </div>`;
}
