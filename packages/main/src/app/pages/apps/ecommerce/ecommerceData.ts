export interface Element {
  id: number;
  imagePath: string;
  product_name: string;
  categories: string[];
  date: string;
  status: boolean;
  base_price: number;
  dealPrice: number;
  description: string;

  // Optional fields
  skill?: string;
  language?: string;
  duration?: string | number;

  discountPercent?: number;
  rating?: number;
  media?: any;
  gender?: string;
}


interface productcards {
  id: number;
  imgSrc: string;
  title: string;
  price: string;
  rprice: string;
  date: string;

}

export const PRODUCT_DATA: Element[] =[
    {
        "id": 677,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/677\/Track_13_L3_thumbnail_518x309.jpg",
        "product_name": "Building an Effective Leadership Succession Plan",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>How much time do you spend developing your leadership succession plan? As older leaders begin to retire at greater rates, the 2018 Deloitte Millennial Survey discovered that 65% of potential millennial leaders feel unprepared to take their places. Forbes reports that by 2025, 75% of the workforce will be made up of millennials. These statistics suggest that there&rsquo;s a leadership crisis on the horizon. Designing a strategy and framework to direct leadership development is mission critical for every organization. Training&mdash;and retaining&mdash;emerging leaders in your company should be a top priority. Understanding what team members want and expect from an employer will help you develop the right programs and systems to keep your talent engaged in learning, growing, and contributing to your organization.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 678,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/678\/Track_13_L4_thumbnail_518x309.jpg",
        "product_name": "Creative Thinking and Problem Solving",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Problems come in all shapes and sizes, and they are an inevitable part of business life. Instead of trying to avoid or ignore them, it&rsquo;s better to accept them, find ways to solve them and learn from them. With the right perspective, problems can even be gateways to innovation. There are a variety of models and methods that can be used to identify, analyze, and implement effective solutions. In this lesson, we will look at a hybrid of the A3 model, 5 Whys, and Divergent\/Convergent methods.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 679,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/679\/Track_13_L1_thumbnail_518x309.jpg",
        "product_name": "Leadership Development",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader",
            "Leadership"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Very few leaders are born with the qualities required to inspire and lead others. Most leaders are built&mdash;through personal effort, lots of introspection, and assistance from mentors and other leaders. In this course, you&rsquo;ll learn the six characteristics that set effective leaders apart. You&rsquo;ll discover the differences between managing and leading, and when to do each. And you&rsquo;ll find out how to create a plan that will help you move from simply managing results to setting vision and leading others.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 680,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/680\/Track_13_L2_thumbnail_518x309.jpg",
        "product_name": "Leading Effective Teams",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>All teams need coaches. That&#39;s how they get better. Your role as the leader of a high-performing team is to provide the training, resources, coaching, and support they need&mdash;as individuals and as a team&mdash;so that they can grow in their abilities, and perform as efficiently and dynamically as possible. Because of today&rsquo;s constantly evolving business environment, every individual, regardless of position or experience, needs ongoing training and coaching. Knowing which tools, training opportunities, and coaching methods work for each individual is critical. Research by Accenture found that 31% of employees left their jobs because they don&rsquo;t like their boss; another 31% cited lack of empowerment as their reason for leaving. This lesson will help you build robust coaching connections and a toolkit that will help you develop your team&rsquo;s skills, coach them to personal and professional success, and build a culture of growth and continuous improvement.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 681,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/681\/Track_11_L2_thumbnail_518x309.jpg",
        "product_name": "Building Emotional Intelligence",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Your success as a leader isn&rsquo;t dependent upon how much technical knowledge, business expertise, or years of industry experience you have. If you want to achieve goals consistently, build strong, collaborative teams, and establish solid relationships with colleagues, superiors, and clients, then you need Emotional Intelligence (EQ). Emotional Intelligence, also known as Emotional Quotient (EQ) is the ability to properly gauge your emotions as well as the emotions of others in all situations, use proper judgment and behave appropriately for the desired outcome. In other words, EQ is the ability to identify your emotions, and those of others, and use that knowledge to make the best decisions, regardless of the circumstances.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 682,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/682\/Track_11_L7_thumbnail_518x309.jpg",
        "product_name": "Business Acumen \u2013 Finance",
        "skill": "Business Skills",
        "categories": [
            "Business Acumen Finance"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>There are three business languages managers need to understand in order to make the best decisions. These languages are accounting, finance, and economics. Leaders use these languages to see how their company has performed in the past (accounting), plan how the company should move forward (finance), and predict how outside influences will affect their plan (economics). The benefits of having a working knowledge of these three languages include being able to understand and communicate with others in the organization about financial issues, making decisions that align with overall corporate goals and strengthening your value to the company.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 683,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/683\/Track_11_L3_thumbnail_518x309.jpg",
        "product_name": "Conflict Resolution",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>It is a law of nature, if you work with people, you&rsquo;re going to have conflict. When people with different viewpoints, backgrounds, personalities, work ethics, and industry experience come together, discord and differences of opinion are inevitable. Wise leaders accept that conflict is a part of work, they anticipate it, and they have a plan to address it. Effective conflict resolution takes practice. You may want to ask an experienced colleague, your HR department, or your manager for suggestions on dealing with this issue. Just realize that while you can&rsquo;t avoid conflict entirely, you can establish an environment and a process that minimize the damage conflict can cause. If managed well, conflict can lead to innovation, stronger teams, and greater personal development&mdash;for you and your employees.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 684,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/684\/Track_11_L6_thumbnail_518x309.jpg",
        "product_name": "Giving Effective Feedback",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader",
            "Effective Feedback"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Constructive feedback has the ability to help your employees do their jobs better. It helps strengthen your team and improve the overall performance. Many managers are unable to give constructive feedback; hence, they do not get the expected results and sometimes have an adverse effect on their relationship with their employees. To avoid this, many managers are reluctant to provide feedback. Constructive feedback is an opportunity to coach your team members on how to grow into more productive and independent contributors. When giving and receiving positive and negative feedback becomes a routine part of everyone&rsquo;s workday, you and your team will be on your way to personal and organizational success.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 685,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/685\/Track_11_L4_thumbnail_518x309.jpg",
        "product_name": "Managing a Cross-Functional Team",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Teams are the backbone of contemporary business life. Executive teams, work teams, cross-functional teams, high-performance teams, and project teams serve a variety of purposes, but they all have the same goal: to solidify the organization&rsquo;s competitive advantage in the marketplace. Cross-functional team leaders draw individuals from departments across the organization to address a particular problem. They might select development engineers, marketing professionals, sales people, legal experts, customer service managers, accountants, and HR executives to apply their various talents to accomplish the goal. The concept is powerful. But this mix of diverse skill sets, professional experience, and personalities also comes with challenges&mdash;and you need to manage the team carefully in order to maximize its potential for success.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 686,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/686\/Track_11_L5_thumbnail_518x309.jpg",
        "product_name": "Managing Performance",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In today&rsquo;s competitive world, businesses move faster and faster to stay ahead of the competition, develop new offerings, and keep up with client demands.&nbsp;Employees need constant feedback, support, and direction in order to achieve those objectives. The era of the annual performance review is long gone, with managers now meeting with team members frequently to set goals, coach, provide training, and review performance. Performance dashboards that automate company-wide goals, metrics, customer feedback, and other performance-related data keep leaders and team members aware of their progress. Instead of looking backward, the new model for managing and motivating employee performance is fast-paced and feedback focused.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 687,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/687\/Track_11_L1_thumbnail_518x309.jpg",
        "product_name": "Operations Management",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Today&rsquo;s marketplace is fast-paced and ultra-competitive. Operations departments should be the same. They can&rsquo;t afford to be wasteful, slow, or out of touch with their customers&rsquo; needs if they hope to compete and thrive. In order to achieve and maintain a competitive edge in the global economy and maximize corporate profits, successful operations management systems need to be engineered to quickly respond to customer&rsquo;s requests, promptly adapt to new processes and product requirements, and rapidly embrace new technologies. No wonder Forbes magazine reports that 75% of CEOs come from an operations background. Having a comprehensive understanding of how an organization works is a leadership advantage.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 688,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/688\/Track_11_L8_thumbnail_518x309.jpg",
        "product_name": "Reducing Rater Bias",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>One of the key responsibilities of a leader is to assess team members on a regular basis. These might include post-project reviews, annual or quarterly performance evaluations, and in-the-moment feedback. Organizations use different parameters and tools to assess their employees. The assessments used are based on functional goals, developmental goals, innovation goals, stretch goals, or any other goals customized to the organizational needs. Irrespective of the tools you use, when it is time to assess your employees, do you rely on the data or by your perception of the person? As fair and factual as you believe your assessments are, you might actually be guilty of some &ldquo;rater biases&rdquo; that can skew your evaluations.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 690,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/690\/Track_14_L2_thumbnail_518x309.jpg",
        "product_name": "Sales Effectiveness",
        "skill": "Business Skills",
        "categories": [
            "Building a Strong Sales Team"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Sales effectiveness is the process of identifying and utilizing the right sales activities to generate the best sales outcomes. Your definition of a successful sale will depend upon your product, service, corporate goals, and objectives. Companies measure their effectiveness in a variety of ways: increased profit, new product sales, or shortened sales cycle. Successful sales organizations share a commitment to defining, measuring, and optimizing all of the components of their sales process in order to consistently achieve strategic goals.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 691,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/691\/Track_14_L1_thumbnail_518x309.jpg",
        "product_name": "Sales Leadership",
        "skill": "Business Skills",
        "categories": [
            "Building a Strong Sales Team"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Leaders of successful sales organizations focus on strategic planning, intentional hiring, and effective coaching. They build a solid and well-defined sales framework that undergirds their sales team&rsquo;s efforts. They prioritize hiring people who have the right skills, energy, and outlook. And they develop work environments that are highly structured, purposefully challenging, and appropriately supportive. When sales leaders achieve a good balance of these three factors, the sales process is streamlined, organized, and successful.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 692,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/692\/Track_16_L1_thumbnail_518x309.jpg",
        "product_name": "Interpersonal Relationships",
        "skill": "Business Skills",
        "categories": [
            "Building Relationships",
            "Interpersonal Skills and Empathy"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Why do we often say that it is important to effectively network and build strong business partnerships? It is because your success as a businessperson will be greatly affected by the professional relationships you cultivate. Whether leading employees, working on a cross-functional team, or meeting with colleagues at an industry conference, your ability to successfully network and build productive and authentic business relationships is important. Strong business relationships drive productivity and business success. Smart leaders spend time developing their interpersonal skills in order to build solid bonds with their employees, work productively and positively with peers and superiors, and generate business relationships that can contribute to personal and organizational success.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 693,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/693\/Track_19_L2_thumbnail_518x309.jpg",
        "product_name": "Becoming a Continuous Learning Organization",
        "skill": "Business Skills",
        "categories": [
            "Adaptability and Continuous Learning"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In this lesson, you will learn how a culture of learning leads to success. Establishing a culture of continuous learning in your organization takes time and effort, but the results are worth the investment. Begin with gaining the support of executives, and then start to incorporate learning into your overall mission, your strategic goals, and value statements. Work to get &ldquo;buy-in&rdquo; from everyone in your company, and include them in finding ways to learn, teach, and share knowledge. Establish easy-to-use systems and processes that make learning an expected part of your corporate behavior. Your organization and employees will benefit not only through increased productivity and higher profits, but in personal development and job satisfaction as well.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 694,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/694\/Track_20_L1_thumbnail_518x309.jpg",
        "product_name": "Examining the Balance Sheet",
        "skill": "Business Skills",
        "categories": [
            "Business Acumen Finance"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The balance sheet is one of several financial reports that organizations use for monitoring and planning purposes. It is a snapshot of a company&rsquo;s financials on a specific date. All balance sheets include three components: assets, liabilities, and owner&rsquo;s (or shareholder&rsquo;s) equity. The report shows the resources an organization owns (assets), how much money it owes (liabilities), and how much equity the owners (or shareholders) have after liabilities are subtracted from the assets. This is also called the net worth of the company. Some of the benefits of being able to read and understand a balance sheet include making better management decisions, identifying potential financial issues before they cause bigger problems, and improving your company&rsquo;s organizational efficiency.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 695,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/695\/Track_20_L2_thumbnail_518x309.jpg",
        "product_name": "Finance for Non-Finance Managers",
        "skill": "Business Skills",
        "categories": [
            "Business Acumen Finance"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>As a leader of a small or big team, you all are responsible for the budget allocated to your projects, which in turn is nothing but finance. Thus, knowingly or unknowingly you are involved in financial management too. You must evaluate the investment decisions, such as return on investment analysis after you deliver the product or service that you are responsible for. As a non-financial manager, you cannot avoid financial information, profitability statements, rates of return, budgets, variances, asset management, and project analysis. In this lesson, you will get an overview of financial management, roles within the financial department, and the four financial objectives of any organization.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 696,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/696\/Track_20_L3_thumbnail_518x309.jpg",
        "product_name": "Forecasting and Budgeting ",
        "skill": "Business Skills",
        "categories": [
            "Business Acumen Finance"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Managers are expected to achieve strategic goals by making the best business judgments possible using limited resources. To do this successfully, they need to be able to budget and forecast. Forecasting is the process of analyzing historical data along with market, economic, and industry trends to make good financial and business decisions. We&rsquo;ll review the role forecasting plays in constructing different kinds of budgets, avoiding common budget pitfalls, and planning for &ldquo;what-if&rdquo; scenarios.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 697,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/697\/Track_22_L1_thumbnail_518x309.jpg",
        "product_name": "Building Your Personal Brand",
        "skill": "Business Skills",
        "categories": [
            "Business Communication Skills"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>People generally do business with people they like or look up to, and not just with a company. This means that successful leaders build their personal brand, resulting in the achievement of organizational goals. A personal brand can elevate you above the crowd and help you achieve your personal and professional goals. It is a constant and ever-changing process of identifying your goals, setting up a plan, and monitoring it consistently. Your brand is a combination of the skills you develop and the behavior you display. In this course, you will look at the traits of building a successful personal brand.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 698,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/698\/Track_12_L2_thumbnail_518x309.jpg",
        "product_name": "Business Acumen",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader",
            "Business Power Skills"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Business acumen is gaining an understanding of how business works as well as the behaviors business professionals should possess. This important skill is critical not only to corporate leaders, but to aspiring leaders, managers, and employees as well. The organization that prioritizes business acumen as a core competency promotes the growth of its workforce and strengthens its competitive edge. Some use the analogy of a quarterback who can &ldquo;see&rdquo; the entire field to describe business acumen. It&rsquo;s simply understanding how your company operates, and then using that knowledge to develop the best business strategy. Regardless of your role in the organization, it&rsquo;s an important skill to develop.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 699,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/699\/Track_12_L1_thumbnail_518x309.jpg",
        "product_name": "Business Communication Skills",
        "skill": "Business Skills",
        "categories": [
            "Business Communication Skills",
            "Business Power Skills"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In today&rsquo;s corporate world, it is important for a leader to develop writing skills and create a personal brand. When you are able to write crisply and relevantly about topics you understand well, you will influence not only those in your organization but customers, industry peers, and potential clients too. Whether writing emails, business letters, online articles, or posting on social media, you have the ability to set yourself apart from other leaders if you can convey ideas in a way that clearly and powerfully persuades, motivates, or informs. In this lesson, you will learn how to plan, organize, and write business communications as well as create and manage your personal brand.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 700,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/700\/Track_12_L3_thumbnail_518x309.jpg",
        "product_name": "Customer Service ",
        "skill": "Business Skills",
        "categories": [
            "Business Power Skills",
            "Customer Focus"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Studies have shown that it costs five times as much to attract a new customer as it does to keep an existing one. In a survey of customer retention, 44% of companies said that they focus their efforts on acquiring new customers, but only 18% surveyed focus on retaining existing customers. Another survey revealed that companies who increase their customer retention rates by 5%, increase their profits by at least 25% and often more. These statistics make it clear that loyal customers help drive a company&rsquo;s growth and profitability. The key to keeping your customers satisfied and loyal to your organization is excellent customer service. In this lesson, you will learn how to build relationships of trust and appreciation.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 701,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/701\/Track_12_L4_thumbnail_518x309.jpg",
        "product_name": "Effective Presentations",
        "skill": "Business Skills",
        "categories": [
            "Business Power Skills",
            "Effective Presentations"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Managers are often called to present to the groups of customers, cross-departmental teams, or in-house decision-makers. The process of crafting and delivering a presentation requires organizational skills, insight, technical abilities, and courage. Public speaking can be intimidating. But, by taking the time to methodically plan and execute the necessary details, you can be prepared and confident to deliver an effective presentation. This course will walk you through the steps you&rsquo;ll need to plan and organize your topic, choose visual aids, consider technology tools, and practice delivering your speech.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 702,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/702\/Track_12_L5_thumbnail_518x309.jpg",
        "product_name": "Interpersonal Effectiveness",
        "skill": "Business Skills",
        "categories": [
            "Business Power Skills"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Your day-to-day ability to genuinely connect and work well with others is the key to long-term career success. Especially in today&rsquo;s work environment, where cross-unit, cross-functional, and even cross-organizational teams abound, those with strong interpersonal skills have a decided advantage. And you don&rsquo;t have to be the stereotypical extroverted salesperson to possess these kinds of skills. Anyone can learn and practice how to interact with others in positive and productive ways. Whether you are collaborating with colleagues, attending a conference of industry peers, or chatting with a team member one-on-one, well-developed people skills give you the opportunity to build stronger relationships, foster goodwill, and cultivate influence with others.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 703,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/703\/Track_12_L6_thumbnail_518x309.jpg",
        "product_name": "Project Management",
        "skill": "Business Skills",
        "categories": [
            "Business Power Skills",
            "Project Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>A project is a sequence of tasks completed in a specific order with the goal of achieving a certain outcome. Projects are overseen by managers but are executed by project teams according to detailed plans, budgets, and timelines. The investment of an organization&rsquo;s time, labor, materials, equipment, and capital require that each detail be monitored and managed carefully to ensure that the scope of the project doesn&rsquo;t spiral out of control and that the project&rsquo;s profitability is maximized rather than jeopardized. Effective project managers demonstrate well-developed technical and interpersonal skills, attention-to-detail, business acumen, and exceptional follow-through.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 704,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/704\/Track_23_L1_thumbnail_518x309.jpg",
        "product_name": "Creating a Competitive Edge",
        "skill": "Business Skills",
        "categories": [
            "Business Strategy"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Defining your competitive edge, target market, and competition is just the first step to gaining more market share in your industry or niche. This is an ongoing process. You must continuously research, review, and revise these three factors in order to maintain your edge. Use your research alongside a competitive strategy to drive internal and external efforts through marketing, corporate culture, training, hiring, research, operations, customer service, messaging, leadership, and more. Defining and leveraging your unique competitive edge is the key to market success.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 705,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/705\/Track_23_L2_thumbnail_518x309.jpg",
        "product_name": "Fostering a Culture of Risk Taking",
        "skill": "Business Skills",
        "categories": [
            "Business Strategy"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Whether you&rsquo;re publicly challenging long-held beliefs or experimenting with a new idea, it&rsquo;s normal to experience fear or discomfort. You can reduce these emotions by creating a workplace that openly promotes change, welcomes honest and productive discussions, sees failure as a necessary part of business success, and rewards and supports risk taking on a daily basis. It may seem ironic, but when you instill a continuous learning culture and growth mindset in your organization, failure can actually lead to success.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 706,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/706\/Track_23_L3_thumbnail_518x309.jpg",
        "product_name": "Operationalize Business Strategies \u2013 Organizational Strategy Element",
        "skill": "Business Skills",
        "categories": [
            "Business Strategy"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In today&rsquo;s dynamic business environment, it has become of utmost importance for any organization to have a strategic plan in place. A strategic plan is a powerful instrument that helps a company commit to a future goal, motivate its organization through vision, clearly see its strengths and weaknesses, and move forward with a well-thought-out and measurable action plan. Thus, we can say that strategic planning sets direction, outlines measurable goals, and aids in changing approaches when moving forward. To develop an effective strategic plan, you must understand both where your business stands today and where it wants to be in the future.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 707,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/707\/Track_23_L4_thumbnail_518x309.jpg",
        "product_name": "Workplace Ethics",
        "skill": "Business Skills",
        "categories": [
            "Business Strategy"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The principles that determine how a person reacts in a certain situation define that person&rsquo;s workplace ethics. It is also defined as the belief that states hard work and integrity showing moral benefit adds strength to human character. It is a set of values centered on the importance of work and manifested by determination or desire to work hard. Workplace ethics ensures honesty, respecting the code of conduct, exhibiting good conduct, and strong moral principles.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 710,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/710\/Track_21_L2_thumbnail_518x309.jpg",
        "product_name": "Review of Grammatical Principles",
        "skill": "Business Skills",
        "categories": [
            "Business Communication Skills"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>When writing business emails, letters, memos, and other communications, it&rsquo;s important to check for any grammar or spelling errors that can distract from your message. Misspelled words and grammatical errors are easy to fix if you make a habit of using the spellcheck and grammar features on your computer. In this course, we will review basic punctuation rules. We will examine some common sentence structure mistakes. And we&rsquo;ll study some common word choice errors. Finally, we&rsquo;ll provide a list of online resources and books. Don&rsquo;t let grammar and word choice errors blur your message or damage your credibility.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "17"
    },
    {
        "id": 715,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/715\/Track_25_L1_thumbnail_518x309.jpg",
        "product_name": "Benefits of Creative Thinking",
        "skill": "Business Skills",
        "categories": [
            "Creative Thinking & Problem Solving"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Leaders in a World Economic Forum study listed creativity as the third most important work skill they seek in employees. And as organizations face increasingly complex business issues, they are training their employees to be smart risk-takers and creative thinkers. They are hiring for these competencies, too. As you apply the recommendations provided in this course, your skills will increase, your employees will grow more confident and competent in their abilities, and together, you will create a powerful culture of innovation.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 716,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/716\/Track_26_L1_thumbnail_518x309.jpg",
        "product_name": "Improving Customer Rapport",
        "skill": "Business Skills",
        "categories": [
            "Customer Focus"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>When you make developing customer rapport a priority, you will experience many benefits. From the very first interaction, there are things you can do to begin earning customer trust and loyalty. Be friendly and genuine as you communicate. Always be honest and work hard to solidify your reputation as a trustworthy professional. As your relationships grow, find ways to help your customers outside of your role as their sales consultant. These opportunities to assist them in their successes will cement your rapport even more. And don&rsquo;t forget that relationships with your colleagues and co-workers need as much attention and care as your customer connections. It takes hard work and teamwork to be successful. Taking the time to build rapport with both your customers and colleagues is the key that unlocks this reality.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 717,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/717\/Track_26_L2_thumbnail_518x309.jpg",
        "product_name": "Understanding Customer Motivation in Sales",
        "skill": "Business Skills",
        "categories": [
            "Customer Focus",
            "Customer-Centric Marketing"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Understanding customer motivation is both a science and an art. Purchasing decisions are based on a wide variety of rational and emotional factors. Besides becoming familiar with motivational models&mdash;the sales process and typical purchasing behaviors&mdash;you should also practice ongoing customer research. This research will help you identify changes in markets, competitors, products, and customer motivations. The more you understand the underlying principles that determine buying decisions, the more you will be able to satisfy existing customers, attract new ones, and develop the products and services they want.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "18"
    },
    {
        "id": 718,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/718\/Track_26_L3_thumbnail_518x309.jpg",
        "product_name": "Managing Upset Customers",
        "skill": "Business Skills",
        "categories": [
            "Customer Focus"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Learning how to manage conflict successfully is a critical business skill that&rsquo;s worth the time and effort to practice. Daniel Goleman&rsquo;s Emotional Intelligence and Mark Gouston&rsquo;s Just Listen are two resources among many that can help you strengthen your conflict management aptitude. Relationships can be messy, but with the right skills, attitude, and mindset, you will be able to address issues calmly, ensure that your customer feels heard and valued, and arrive at a solution that satisfies you both.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 720,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/720\/DT02_thumbnail_518x309.jpg",
        "product_name": "Transformation of Markets, Business Models, and Strategy",
        "skill": "Technology",
        "categories": [
            "Digital Transformation"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Changing demographics, technology innovation, and global competition are driving enterprise-wide business transformation. Digital natives&mdash;two new generations of buyers and corporate talent&mdash;are wired to connect, communicate, and operate in this environment. How they instinctively navigate this digital age is redefining how organizations are responding to customer expectations, continuous business innovation, and competition. A recent Wall Street Journal article said, &ldquo;We are in an era of extraordinary change in core business models. Technology is usually the cause.&rdquo; As organizations shift from pre-digital age business models to more agile platform-based models, their strategies are changing too. Digital technologies are the tools that organizations are using to meet the demands of a new breed of the buyer and a competitive global economy. It&rsquo;s clear that today&mdash;and going forward&mdash;every business is now a digital business.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 724,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/724\/Track_24_L1_thumbnail_518x309.jpg",
        "product_name": "Competition vs. Differentiation (SWOT Analysis)",
        "skill": "Business Skills",
        "categories": [
            "Business Strategy"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Consistent business analysis is critical to a company&rsquo;s short- and long-term success. Because the SWOT framework is such a simple, flexible, and powerful tool, organizations can use it to examine, plan, and implement business decisions and plans that range from incremental to comprehensive. By gathering a range of input from inside and outside the organization, your analysis will provide substantial, relevant, and objective data to guide your decision-making. Whether you&rsquo;re planning new corporate-wide strategic goals or reviewing departmental processes, a well-executed SWOT analysis will enable you to focus on your strengths, diminish threats, and take advantage of identified business and market opportunities as you move forward.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 725,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/725\/Track_24_L2_thumbnail_518x309.jpg",
        "product_name": "Six Core Organization Functions",
        "skill": "Business Skills",
        "categories": [
            "Business Strategy"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>A business is a living organism that depends on the strategic coordination of systems, activities, and information to build customer-satisfying products and services and ensure profitability and future growth. A company&rsquo;s success is determined by the ability of each core function to effectively perform its specific purposes and responsibilities and, at the same time, proactively cooperate and communicate with the other departments. It is this combination of business-unit excellence and cross-functional collaboration that acts as a key to organizational success.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 726,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/726\/Track_08_L5_thumbnail_518x309.jpg",
        "product_name": "Coaching Conversations",
        "skill": "Business Skills",
        "categories": [
            "Effective Coaching"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Your talent is your most important resource. Deploying it to implement different methods of coaching will not only help you to strengthen your team&rsquo;s abilities, but also your own leadership skills. No matter where you are, no matter how many people you put together on a team, you will always experience the same phenomenon. Some team members will perform above expectations while others will perform at an average or standard level, and some will perform at substandard levels. Coaching is a performance process with lots of actions and steps. Let&rsquo;s take a look at some of the ways to coach your team and how you can make the most of these opportunities.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 727,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/727\/Track_08_L3_thumbnail_518x309.jpg",
        "product_name": "Coaching Skills Check-up",
        "skill": "Business Skills",
        "categories": [
            "Effective Coaching"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>As a person at a leading position, have you ever assessed your effectiveness as a coach? Although, coaching your team is the most underrated roles you play, it is the most important role too. This course addresses the five strategies used by effective coaches. Assess your skills against these five strategies and enhance your abilities to sharpen your coaching skills.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 728,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/728\/Track_08_L1_thumbnail_518x309.jpg",
        "product_name": "Coaching vs. Mentoring",
        "skill": "Business Skills",
        "categories": [
            "Effective Coaching"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Mentoring is a process that follows coaching. Coaching makes a person equipped with the skills required for a job whereas mentoring is on-the-job process. It helps a person practice the skills learned, enhance the skills, and learn new skills to be future ready. Hence, coaching is a short-term relationship whereas mentoring is a long-term. Coaching is always task oriented whereas mentoring is relationship oriented. It is all about reaching a stage where the mentor can easily share the real issues influencing the trainee. On the other hand, coaching can be implemented immediately on any particular topic. This course will help you acknowledge the difference between coaching and mentoring and make you learn when to use them.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 729,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/729\/Track_08_L2_thumbnail_518x309.jpg",
        "product_name": "Components of the Coaching Process",
        "skill": "Business Skills",
        "categories": [
            "Effective Coaching"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Coaching is a process that can be customized to meet the needs of the trainee. This process seeks to raise the workforce awareness toward their current style of work and behavior. It helps them strengthen their uniqueness optimally. It provides with different tools and strategies that help them achieve their individual goals faster. Coaching is the process that guides an individual to maximize the productivity seamlessly so as to achieve more in less. This helps them reach their personal and professional goals at the earliest.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 730,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/730\/Track_08_L4_thumbnail_518x309.jpg",
        "product_name": "The Coaching Model",
        "skill": "Business Skills",
        "categories": [
            "Effective Coaching"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Coaching is a process&nbsp;which the leaders use to help employees become more independent. There are many coaching programs available to managers these days. But the good leaders implement The COACH Model in coordination with a coaching philosophy that includes mentoring, constant two-way communication, and continuous feedback. The COACH Model is a five-step program that walks a leader through the process of coaching an associate from setting a goal to measuring their success at the end of the process.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 731,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/731\/Track_05_L4_thumbnail_518x309.jpg",
        "product_name": "Communicating Upward",
        "skill": "Business Skills",
        "categories": [
            "Effective Communications"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Upward communication flows from the lower level to the upper level of a hierarchy. For example, employees communicating with their immediate manager, the immediate manager communicating with their reporting manager, and so on up to the board of directors or owner of the company. This form of communication helps employees express their requirements, ideas, or goals. Managing upward communication is an art to be acquired if you are looking for a long-term career in your organization and wish to get ample opportunities to learn and grow. This course will help you communicate upward effectively.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "12"
    },
    {
        "id": 732,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/732\/Track_05_L2_thumbnail_518x309.jpg",
        "product_name": "Creating Win-Win Scenarios",
        "skill": "Business Skills",
        "categories": [
            "Effective Communications"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Organizations deal with both major and minor conflicts day-in and day-out. The important thing is one cannot ignore these conflicts as they can have a far-reaching negative effect on the teams involved. This may inevitably affect their day-to-day work and eventually the performance of the company. This course helps you reach consensus amongst employees by resolving workforce conflicts. It introduces strategies to create a win-win situation for all the stakeholders. It is important to gauge how the stakeholders feel before and after settling the conflict. You will learn about the four win-win conflict solution techniques that will help you maintain harmony in the work place.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 733,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/733\/Track_05_L3_thumbnail_518x309.jpg",
        "product_name": "Electronic Communications",
        "skill": "Business Skills",
        "categories": [
            "Effective Communications"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Thanks to technology, we now have numerous ways to communicate with one another. Organizations depend on social media, texting, and tweeting in addition to emails to present themselves to all the stakeholders. These rapid-fire methods of communicating have changed how we speak, how we receive information, and how we interpret the information we&rsquo;ve received. Sometimes, these speed-of-light methods of connecting can affect our communication skills. Have you ever wondered if the receiver received your communication correctly or not? Do you evaluate the messages you send? This course will help you with tricks to communicate effectively using electronic media.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 734,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/734\/Track_05_L1_thumbnail_518x309.jpg",
        "product_name": "Using Open-Ended Questions",
        "skill": "Business Skills",
        "categories": [
            "Effective Communications"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Asking open-ended questions is a powerful tool to not only spark new ideas and discussions but also developing strategic thinking, collaboration and innovative business solutions. Leaders who demonstrate curiosity and active listening skills are ideally qualified for asking open-ended questions and helping their teams discover original answers to corporate challenges.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 735,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/735\/Track_06_L2_thumbnail_518x309.jpg",
        "product_name": "Resistant vs. Open to Change",
        "skill": "Business Skills",
        "categories": [
            "Effective Feedback"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>As a leader, you&rsquo;re responsible for leading your team to achieve organizational goals. Sometimes that involves changing processes, adopting new technologies, or learning new skills. What do you do when one or more of your employees refuse to change and grow with the rest of the team? People tend to approach change in one of the two ways. They either embrace change and are excited about the possibilities and opportunities inherent in a new adventure. Or they resist change because they fear the unknown. As a leader, you probably have employees in both camps. In this course, we will discuss how to influence the change resisters.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 736,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/736\/Track_06_L1_thumbnail_518x309.jpg",
        "product_name": "Sandwich Feedback",
        "skill": "Business Skills",
        "categories": [
            "Effective Feedback"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Feedback is an essential part of any manager-employee relationship. However, a lot of managers are reluctant giving corrective feedback. They either fear offending the employees or damaging the good rapport built over a course of time. But feedback is essential and beneficial for the manager, the employee, and the organization as a whole. So, how do you give negative feedback? This lesson will introduce you to the technique of sharing negative feedback using the sandwich feedback approach.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 737,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/737\/Track_06_L3_thumbnail_518x309.jpg",
        "product_name": "Managing Your Reaction to Feedback",
        "skill": "Business Skills",
        "categories": [
            "Effective Feedback"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>As it&rsquo;s important for leaders to give constructive feedback, in order to help their employees grow, develop their skills, confidence, etc.&nbsp;which results in organizational growth. Similarly, it&rsquo;s important for an individual to ask for feedback instead of waiting to receive it. Start thinking of feedback as the fuel for your professional growth. In fact, set a goal to solicit feedback regularly instead of waiting for it to come to you. When you begin to see the value in regular feedback, your manager will find it easier to deliver, and&nbsp;using these strategies you&rsquo;ll find it easier to receive, assess, and apply. Let&rsquo;s take a look at how you can ensure that your future performance conversations are positive and productive.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 738,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/738\/Track_04_L2_thumbnail_518x309.jpg",
        "product_name": "Assigning Roles and Responsibilities",
        "skill": "Business Skills",
        "categories": [
            "Effective Meetings"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>An important part of planning a successful meeting is deciding who should attend the meeting. In the previous course, we have learned that less is more. Invite only those persons who are necessary to achieve the vision and are committed to getting the work completed. Similarly, it is equally important to define and assign specific roles and responsibilities to the team members attending the meeting. This is a critical part of pre-planning. Careful planning ahead of time will result in less resentment, less time wasted, better decisions, and greater ownership of the process by each member of the team.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 739,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/739\/Track_04_L1_thumbnail_518x309.jpg",
        "product_name": "Defining the Right Agenda",
        "skill": "Business Skills",
        "categories": [
            "Effective Meetings"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Did you know that average American professionals attend over 60 meetings a month? About 39 percent of the meeting attendees doze off during these meetings. Another source claims that 50 percent of meeting time is wasted. These statistics probably don&rsquo;t surprise you. In fact, they might even confirm some of the reasons you dread meetings. You may also have been a part of meetings that have discussions on unrelated topics. This course will help you learn how to make meetings productive.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 740,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/740\/Track_04_L3_thumbnail_518x309.jpg",
        "product_name": "Understanding the Value of People's Time",
        "skill": "Business Skills",
        "categories": [
            "Effective Meetings"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Meetings are necessary, but they become intolerable when they drag on and on, start late, or the discussion goes off the track. It&rsquo;s annoying when you feel that your time has been hijacked&mdash;especially when other projects and responsibilities are in the pipeline. Poor time management is often the cause of this distress. Meetings would be more productive&mdash;and less irritating&mdash;if all activities started on time, ended on time, and stayed on the topic. As a leader, it is your responsibility to ensure that meetings are of benefit to the participants and satisfy the meeting objectives. Running a successful meeting can be boiled down to three things: be purposeful, be engaged, and be respectful of the attendees&rsquo; time.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 741,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/741\/Track_28_L2_thumbnail_518x309.jpg",
        "product_name": "Engagement Practices",
        "skill": "Business Skills",
        "categories": [
            "Effective Presentations"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Presenting to groups is a regular part of many leaders&rsquo; responsibilities. You may speak at industry gatherings, leadership retreats, conferences, or staff meetings. Regardless of whether you&rsquo;re presenting to large or small groups, your goal should be to deliver your message in a way that is engaging and interactive. Studies say that you have less than one minute to engage your audience before they begin to lose interest. And once you&rsquo;ve captured their attention, you must continue to purposefully interact with them throughout the presentation. This course will enable you to enhance your engagement techniques which can be the difference makers that determine how focused, connected, and engaged your audience will be throughout your presentation.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 742,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/742\/Track_09_L4_thumbnail_518x309.jpg",
        "product_name": "Emotional Intelligence Strategies",
        "skill": "Wellness",
        "categories": [
            "Emotional Intelligence"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In the previous lessons, you have learned the four skills of self-awareness, self-management, social awareness, and relationship management to increase your EQ and strengthen your ability to manage yourself and influence others. Boosting your emotional intelligence will leverage your existing skills, IQ, personality, education, and experience even more. This should align with the benefits of increasing your EQ as a leader in terms of how they deal with their people and increase their leadership skills. Consider that you may have the best plan and strategy, but it will not matter unless you communicate this strategy to your team, persuade them to work on it, listen to their inputs, and guide them through the hurdles. You will be able to do this through an exhibition of strong EQ. In this lesson, we will outline some strategies, exercises, and ideas you can use to become an emotionally intelligent leader. You need people skills to execute and succeed in your plan. Developing your EQ will supercharge your leadership arsenal.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 743,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/743\/Track_09_L4_thumbnail_518x309%20%281%29.jpg",
        "product_name": "Introduction to Emotional Intelligence ",
        "skill": "Wellness",
        "categories": [
            "Emotional Intelligence"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>You&rsquo;ve leveraged your education, professional experience, hard work, and business abilities to get to this point in your career. Now you&rsquo;re responsible for leading a team in achieving your firm&rsquo;s target goals and objectives. Did you know that there&rsquo;s another skill that will be critical to your continued success and advancement? It&rsquo;s called Emotional Intelligence (EQ), and it&rsquo;s a big business topic these days.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 744,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/744\/Track_09_L2_thumbnail_518x309.jpg",
        "product_name": "Personal Competence",
        "skill": "Wellness",
        "categories": [
            "Emotional Intelligence"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In this lesson, we will study the first two steps of Goleman&rsquo;s four components of emotional intelligence, self-awareness, and self-management. As per Goleman, self-awareness is the building block of all other competencies. Without recognizing what you are feeling, you cannot proceed to other competencies. It helps you to handle your emotions in order to avoid its interference in work and use these emotions to facilitate and recover from emotional distress. Self-management flows from self-awareness. It helps to understand situations from others&rsquo; perspective and to cultivate relationships.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 745,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/745\/Track_09_L3_thumbnail_518x309.jpg",
        "product_name": "Social Competence",
        "skill": "Wellness",
        "categories": [
            "Emotional Intelligence"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In this lesson, we will study social awareness and relationship management that fall under the heading of &ldquo;Social Competence&rdquo; in Bradberry and Greaves&rsquo; model of emotional intelligence. Social awareness is the ability to use empathy and active listening to understand others better. Leaders with strong social awareness are not only able to read their own emotions precisely but are also able to interpret others emotions accurately. Relationship management is using all of your EQ skills to establish solid relationships and manage your interactions with others.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 746,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/746\/Track_29_L1_thumbnail_518x309.jpg",
        "product_name": "Enhancing Listening Skills",
        "skill": "Business Skills",
        "categories": [
            "Interpersonal Effectiveness",
            "Interpersonal Skills and Empathy"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>You want to develop a team that feels comfortable approaching you with new ideas, suggestions for improvements, and even their own personal challenges. You want your clients to know that you are genuinely interested in hearing their concerns and ideas. And you want your superiors and peers to see you as someone who encourages innovation and open communication in your department. Working to improve your active listening will take patience and practice. But if you learn how to put this powerful communication skill to work for you, you&rsquo;ll discover that the benefits are well worth the effort.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 747,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/747\/Track_29_L2_thumbnail_518x309.jpg",
        "product_name": "Networking and Building Relationships",
        "skill": "Business Skills",
        "categories": [
            "Interpersonal Effectiveness",
            "Interpersonal Skills and Empathy"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Your success as a businessperson will be greatly affected by the professional relationships you cultivate. Interpersonal skills are the cornerstone of developing these associations, so it is important to assess your abilities to communicate clearly and empathetically and to listen well. The most effective and satisfying relationships are based on a genuine and mutual desire to get to know and help others. When you focus on adding value to your business connections, you will build a network that is both personally satisfying and professionally beneficial.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 748,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/748\/Track_30_L1_thumbnail_518x309%20%281%29.jpg",
        "product_name": "Leading Small vs. Large Groups",
        "skill": "Business Skills",
        "categories": [
            "Leadership"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Leadership education is an ongoing process. Your success will increase when you invest time in studying leadership models and characteristics, reading about great leaders, putting your knowledge into practice, and then evaluating the results. It takes different skills and abilities to successfully lead small and large teams. In this course, you will get familiarized with many advantages and disadvantages, as well as the best practices to be adopted to lead small and large teams successfully.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 749,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/749\/Track_30_L2_thumbnail_518x309.jpg",
        "product_name": "The Components of Effective Leadership",
        "skill": "Business Skills",
        "categories": [
            "Leadership"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The journey of a successful leader begins with both personal and professional development. Leaders stay on top of their industry and economy. They are future-focused, positive, and strong communicators. Leaders spend time in self-reflection and education, learning how to maximize their strengths and improve their weaknesses. They study best practices for working with others and know how to get the most out of their employees. They combine these knowledges to guide their organization. Leaders pursue goals persistently. They are open-minded and flexible in their approaches, encourage team members to embrace innovative thinking, and cultivate an environment of positive work culture. They develop team members through coaching, delegating, and mentoring. They also model and inculcate behaviors they want their employees to have, such as integrity, strong communication skills, innovation, emotional intelligence, strategic decision-making, confidence, and vision. Above all, a successful leader provides clarity of purpose, direction, and support, so that everyone succeeds as they work to achieve common goals.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 750,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/750\/Track_01_L3_thumbnail_518x309.jpg",
        "product_name": "Kotter's 8-Step Change Model",
        "skill": "Business Skills",
        "categories": [
            "Leading Change"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Kotter&#39;s 8-Step Change Model was created by Harvard University Professor, John Kotter. He perceived the change process as having 8 essential steps. The 8 Essential Steps in this model are: Create a sense of urgency for change, Build a coalition for change, Form a vision for change, Communicate the vision for change, Remove barriers to change, Generate quick wins for the change, Stay persistent with the change, and Make the change permanent.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "19"
    },
    {
        "id": 751,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/751\/Track_01_L1_thumbnail_518x309.jpg",
        "product_name": "Kurt Lewin\u2019s 3 Stages of Change Model",
        "skill": "Business Skills",
        "categories": [
            "Leading Change"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>This model breaks into three-stages: Unfreeze, Transition, and Refreeze. In the &quot;Unfreeze&quot; stage, an organization prepares for the change. In the &quot;Transition&quot; stage, the change takes place and in the &quot;Refreeze&quot; stage, the change becomes solidified as the new norm.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 752,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/752\/Track_01_L2_thumbnail_518x309.jpg",
        "product_name": "McKinsey's 7-S Model",
        "skill": "Business Skills",
        "categories": [
            "Leading Change"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>McKinsey&rsquo;s 7-S model was created by McKinsey consultants Robert Waterman, Tom Peters, Richard Pascale, and Anthony Athos. It provides a framework to plan and execute mid-term organizational change. It is based on the premise that organizations perform properly when seven key elements are aligned. The seven key elements are structure, strategy, systems, skills, style, staff, and shared values. The model is most often used as an organizational analysis tool to assess and monitor changes in the internal situation of an organization.&nbsp;<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 753,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/753\/Track_03_L1_thumbnail_518x309.jpg",
        "product_name": "Building Innovation Teams",
        "skill": "Business Skills",
        "categories": [
            "Leading Innovation"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Innovation by itself is a challenging and draining process. The unpredictability of the results of innovation adds to the stress of the innovator or innovation teams. Combining the task of innovation with a predictable process helps ease out the difficulties. This lesson focuses on the six areas which can be included in your innovation plan framework that will help you conduct the innovative team building activities in a constructive manner. You will also be in a position to identify the innovation roles and appoint the right persons to promote a flawless innovation process. Organizations that innovate new concepts using the correct framework and processes can ensure consistent industry growth. Take this lesson to learn about building innovation teams.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 754,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/754\/Track_03_L2_thumbnail_518x309.jpg",
        "product_name": "Leading Innovation Sessions",
        "skill": "Business Skills",
        "categories": [
            "Leading Innovation"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Do you want to mentor an environment of innovative thinking in your organization? A leader needs to have some qualities to promote innovative thinking among their team members. The leader also needs to know the techniques of exercising innovation. This lesson outlines the qualities and techniques as well as the four-step process of leading innovation sessions. You can also learn various strategies to maintain the environment of innovation in your organization. It encourages you to challenge your processes and think out of the box. This is a must-learn lesson for persons who want to lead innovation teams effectively.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 755,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/755\/Track_03_L3_thumbnail_518x309.jpg",
        "product_name": "Trystorming",
        "skill": "Business Skills",
        "categories": [
            "Leading Innovation"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>A new methodology for innovation, &ldquo;Trystorming&rdquo; is a combination of &ldquo;Brainstorming&rdquo; and &ldquo;Trying&rdquo; something practically. This lesson highlights the difference between brainstorming and trystorming, and provides the guidelines for where and when it can be used. Trystorming is a practical approach to innovating by focusing on practically trying or experimenting within reasonable limits to understand the efficacy of an idea before implementing it fully. Take this lesson to pick up the basics of trystorming and lead innovations in your organization.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "12"
    },
    {
        "id": 756,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/756\/Track_02_L2_thumbnail_518x309.jpg",
        "product_name": "Facilitating vs. Directing People",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader",
            "Leading People"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>A leader is a person who can influence people to follow them without exercising authority. To be an effective leader, one requires to have the right behavior and skills to manage people. Good leaders are predominantly facilitators. They don&rsquo;t solve every organizational problem that comes across their desks, and they don&rsquo;t spend all their time telling employees what to do. These leaders teach their people how to work effectively and how to solve problems. In this course, you will learn to concentrate on influencing, motivating, and enabling your team members to work toward accomplishing more than just their performance targets. The result is more empowered and capable teams.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 757,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/757\/Track_02_L4_thumbnail_518x309.jpg",
        "product_name": "Holding People Accountable",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader",
            "Leading People"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Accountability is an individual&rsquo;s acceptance of responsibility for the outcome of a job, project, or program. There are five steps that you can use to engineer accountability into both, your work processes and your employees, to achieve performance goals.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 758,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/758\/Track_02_L1_thumbnail_518x309.jpg",
        "product_name": "Leading, Not Managing People",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader",
            "Leading People"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Leaders, who spend more time managing their employees than leading them are less likely to achieve the top performance they seek because they focus on controlling employees and their tasks to accomplish a goal.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 759,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/759\/Track_02_L3_thumbnail_518x309.jpg",
        "product_name": "Motivating People \u2013 Theory X vs. Theory Y",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader",
            "Leading People"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Over 50 years ago, a social psychologist Douglas McGregor of MIT published a book outlining his research of two contrasting management styles: Theory X and Theory Y. He argued that Theory X, based on hierarchy and power, was an outdated authoritarian &ldquo;top-down&rdquo; way of managing people. Theory Y, he proposed, was an improved, alternative method of management, one that was more participative and synergistic.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 760,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/760\/Track_10_L1_thumbnail_518x309.jpg",
        "product_name": "Employee Motivation \u2013 Intrinsic vs. Extrinsic Motivation",
        "skill": "Business Skills",
        "categories": [
            "Leading Teams"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Employees working in an organization bring a level of enthusiasm and energy to the work they do in the organization. They are committed and creative in their approach. This energy is crucial for any organizational success, and it is termed as emotional motivation. The factors influencing this energy level can be either intrinsic or extrinsic. In this lesson, you will learn about both intrinsic motivation and extrinsic motivation and how to leverage them. How do you motivate your team to do their best? You give them the tools, trust, and time to make their jobs personal. You provide enough challenge for them to work at facilitating better, but not so hard that they become discouraged. Help them connect with their work and give them a reason to work, which is beyond the paycheck.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 761,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/761\/Track_10_L2_thumbnail_518x309.jpg",
        "product_name": "Leading and Motivating Call Center Teams",
        "skill": "Business Skills",
        "categories": [
            "Leading Teams"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The focus of your call center may be to generate sales or to handle customer service, either way, your department has an important role in the organization. The call center team is the face of the company for the customer, hence plays a crucial role in customer handling. Call centers generate a high turnover, which makes it even more important to exhibit consistent management and strong leadership to avoid attrition and to increase productivity and response time. In this lesson, let&rsquo;s look at some ways that you can develop and maintain a happy, productive, and motivated call center team.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "18"
    },
    {
        "id": 762,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/762\/Track_10_L3_thumbnail_518x309.jpg",
        "product_name": "Leading and Managing Effective Virtual Teams",
        "skill": "Business Skills",
        "categories": [
            "Leading Teams"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Organizations are changing, and so are our offices. The new age millennials are shifting toward the virtual world. More and more organizations use virtual teams to meet corporate goals. This has created the need to determine how best to manage and lead these virtual groups. Traditional methods of managing on-site groups don&rsquo;t work with remote workers, because virtual teams are most often composed of workers who are spread over a varied geographic and cultural expanse and communicate, for the most part, electronically. Future Workforce Report states that 63 percent of companies utilize virtual workers, but only 57 percent have standards in place to manage the process. In this lesson, you will learn to effectively guide teams that they rarely see face-to-face.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 763,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/763\/Track_10_L4_thumbnail_518x309.jpg",
        "product_name": "Leading Dynamic Teams",
        "skill": "Business Skills",
        "categories": [
            "Leading Teams"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>By definition, dynamic teams are composed of self-directed, goal-focused individuals, each with specific expertise and skills, who work together to create innovative solutions that consistently result in superior outcomes. But truly dynamic teams don&rsquo;t just happen. They are the result of purposeful selection, a motivating vision, and strong leadership. In this course, you will learn how to identify potential team members, how much supervision and oversight to provide, and how best to motivate your people.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 764,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/764\/Track_10_L5_thumbnail_518x309.jpg",
        "product_name": "Leading Generationally Diverse Teams",
        "skill": "Business Skills",
        "categories": [
            "Leading Teams"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The workforce in most of the organizations has a mix of four generations. Individuals from the Baby Boom era are moving closer to retirement, while a new generation of workers, Generation Z, are entering the business world. Different cultural events and forces have so distinctly molded the Baby Boomers, Generation X, Millennials, and Generation Z that their approaches to work vary greatly. In this lesson, you will learn that strategic leaders seize the opportunity to leverage the wisdom and experience of the oldest generation and the entrepreneurial, technological, and ideological strengths of the younger generations to prepare their organizations for the future.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 765,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/765\/Track_17_L1_thumbnail_518x309.jpg",
        "product_name": "Situational Conflict",
        "skill": "Business Skills",
        "categories": [
            "Managing Conflict"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Conflict always creates uneasiness in the minds of employees and organizations. Conflict can involve sore emotions and impend relationships. Leaders experience the same emotional distress while handling a conflict situation. The most difficult situation a leader deals with is conflict management. It is observed that ill-managed conflict creates huge costs in the form of time expenditure, higher attrition, legal implications, etc. It also lowers productivity. When people are involved in conflict, they begin to recoil, stop sharing information, and take fewer risks. The result can be poor decision making. Low morale and strained working relationships can cause stress and drain employees&rsquo; energy to focus on being creative and productive. In this lesson, you will learn to deal with situational conflict.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 770,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/770\/Track_17_L2_thumbnail_518x309.jpg",
        "product_name": "Small vs. Large Group Conflict",
        "skill": "Business Skills",
        "categories": [
            "Managing Conflict"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Leaders face conflict situations regularly as they manage team members, departmental issues, and organizational challenges. While there are core principles for solving these problems, they can&rsquo;t all be solved using one strategy. Personality conflict between co-workers requires one approach, while an interdepartmental conflict requires another. In this lesson, we&rsquo;ll look at several incidents and discuss how to resolve them. We&rsquo;ll also suggest other strategies you can employ to address and minimize conflict in your workplace.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 771,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/771\/Track_17_L3_thumbnail_518x309.jpg",
        "product_name": "The Role of the Facilitator",
        "skill": "Business Skills",
        "categories": [
            "Managing Conflict"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Conflict management is a major hurdle in any organizational growth and has to be resolved on priority to reduce the negative effect it may cause. The role of the facilitator is complex. A leader&rsquo;s job is to guide conflicting individuals through a process without using their influence to determine the outcome of the negotiations. They must model calmness, respect, and open-mindedness in situations that can be emotionally charged. They must encourage full participation of all group members from defining the cause of the conflict to agreeing on a resolution. In task-based situations, facilitators need to push team members strongly but respectfully question, challenge, and argue decisions, suggestions, and processes recommended by other team members. Leaders who know how to anticipate conflict and address it proactively with the right tools, techniques, and a well-managed process create healthy work environments that use differences to grow and move forward positively. In this course, you will explore the various tools available to the facilitator to manage conflicts.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 772,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/772\/Track_07_L1_thumbnail_518x309.jpg",
        "product_name": "Developing Cascading Goals",
        "skill": "Business Skills",
        "categories": [
            "Managing Performance"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In this course, we will explore cascading goals. Organizations have used cascading goals in its performance management process for decades. The purpose of cascading goals is to ensure that individual goals align with organizational objectives. We will examine some approaches used by organizations to cascade goals. We will also explore why some organizations are now turning this process upside down.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 773,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/773\/Track_07_L3_thumbnail_518x309.jpg",
        "product_name": "Individual Development Plans",
        "skill": "Business Skills",
        "categories": [
            "Managing Performance"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>As a leader, one of your main responsibilities is to find good talent, cultivate that talent, and inspire loyalty and motivation in those talented individuals. Providing employee development is a great way to mature your staff and ensure that they stay with the organization. In this course, you will learn to provide the employees with the development they seek, using an Individual Development Plan, which is also beneficial for your enterprise.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 774,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/774\/Track_33_L1_thumbnail_518x309.jpg",
        "product_name": "Setting SMART Goals",
        "skill": "Business Skills",
        "categories": [
            "Managing Performance"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Performance management ensures that the day-to-day activities are focused towards achieving organizational goals. In this lesson, you will learn about setting SMART goals by implementing the SMART model. Whether you are using the SMART model to define the specifics of a small business goal or to manage an enterprise-wide project, you will find that this system lends clarity, focus, and flexibility to the art of goal setting.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 775,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/775\/Track_07_L4_thumbnail_518x309.jpg",
        "product_name": "Setting Stretch Goals",
        "skill": "Business Skills",
        "categories": [
            "Managing Performance"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Faced with the increasing pace and pressures of today&rsquo;s business environment, organizations are constantly seeking ways to be more efficient and effective. Because companies are often asked to do more with less&mdash;including time&mdash;they must use their resources wisely to stay ahead of the competition. A talented and skilled workforce is the key to achieving the required results. When you align your workforce with your company&rsquo;s goals, your organization&rsquo;s energies will be appropriately focused. And if you set reasonable, measurable, and attainable goals, you will be able to link performance to rewards and motivate your employees to do even more. Most organizations don&rsquo;t understand the power of incorporating the correct timing and frequency of goals into their plan. For example: goals that are set at the beginning of the year and audited 12 months later are not going to motivate your people. It&rsquo;s difficult to stay committed a business goal over such a long time. When you learn how to set strong, timely, and measurable goals, your team will clearly understand their purpose, see their importance, and know how they will be measured. In this course, you will learn the usage of stretch goals to motivate your team.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "12"
    },
    {
        "id": 776,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/776\/Track_07_L2_thumbnail_518x309.jpg",
        "product_name": "The GROW Model",
        "skill": "Business Skills",
        "categories": [
            "Managing Performance"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>One of the most important leadership roles is a mentor. You are responsible for teaching your employees how to achieve goals, make better decisions, solve problems, and advance their careers. Without formal training in this area, how do you coach or mentor these skills? This course will introduce you to employ a model, built on four simple techniques. By employing these techniques, you will strengthen your coaching skills and develop your team members&rsquo; potential.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 778,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/778\/Track_31_L3_thumbnail_518x309.jpg",
        "product_name": "Choosing A Leadership Theory",
        "skill": "Business Skills",
        "categories": [
            "Situational Leadership"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Social scientists have studied and designed leadership theories for decades to understand and explain how great leaders are made. They have compiled lists of leadership traits and constructed frameworks and models to illustrate the leadership phenomenon. And while these theories are detailed, thoroughly researched, and insightful, none provide &ldquo;the&rdquo; singular leadership model that works for every high-level manager aspiring to lead their team effectively and successfully. What they do provide is an abundant source of leadership data that can be used to create your own flexible brand of leadership. Leaders face a wide range of tasks, responsibilities, and challenges &ndash; both anticipated and unexpected &ndash; every day. Assembling a toolkit of leadership options that can address them is something smart leaders do. Let&rsquo;s study the specifics of some core leadership theories and how you might use them in different business scenarios.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 779,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/779\/Track_31_L4_thumbnail_518x309%20%282%29.jpg",
        "product_name": "Executive Presence",
        "skill": "Business Skills",
        "categories": [
            "Situational Leadership"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Executive presence isn&rsquo;t something you&rsquo;re born with, it&rsquo;s a combination of learned behaviors and characteristics that can be developed. Depending upon your personality, industry, business goals and challenges, executive presence can be manifested in different ways. Having great presentation skills and making a strong first impression based on your clothing and demeanor is not executive presence. You need more substantive abilities to face daily business challenges, speak your mind while maintaining your composure, or inspire your team to commit to a demanding new goal. Executive presence is a purposefully developed hybrid of internal character and external presentation. Let&rsquo;s look at the qualities that distinguish great leaders from mediocre ones.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 780,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/780\/Track_31_L1_thumbnail_518x309.jpg",
        "product_name": "Roles of Leadership",
        "skill": "Business Skills",
        "categories": [
            "Situational Leadership"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Many managers are promoted to leadership positions by virtue of their technical skills or subject-matter knowledge. Their proficiency and expertise set them apart from other candidates. These abilities are important, but they are just one aspect of being an effective leader. Leadership expert, Stephen Covey, says that due to the speed and constant change that define our world today, leaders need to be able to face new and different problems as they arise, make strategic decisions quickly, and guide their organizations with competence and character. He has identified four roles a leader must master in order to succeed in this ever-changing environment.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 781,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/781\/Track_31_L2_thumbnail_518x309.jpg",
        "product_name": "Situational Leadership Theory",
        "skill": "Business Skills",
        "categories": [
            "Situational Leadership"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Today&rsquo;s business environment is global, generationally diverse, collaborative, cross-functional, and constantly changing. Leaders who believe that they can achieve organizational goals using just one leadership style will not succeed. The most effective leaders learn how to flexibly adapt multiple leadership styles to guide their employees, achieve their goals, and build strong teams. A popular management theory called Situational Leadership, first developed in 1969 by Dr. Paul Hersey and Kenneth Blanchard, remains especially relevant in today&rsquo;s business environment. This theory is based on the premise that because organizations are not made up of workers who are equally skilled and motivated, leaders should manage team members according to their individual abilities and developmental readiness. We&rsquo;ll review their method, and then suggest some ways you can use it to manage today&rsquo;s business challenges.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 782,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/782\/Track_31_L4_thumbnail_518x309%20%281%29.jpg",
        "product_name": "Skills of a Situational Leader",
        "skill": "Business Skills",
        "categories": [
            "Situational Leadership"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>There is no &ldquo;one-size-fits-all&rdquo; leadership style or approach for today&rsquo;s managers. Each day brings new situations and challenges to be navigated. Depending upon the circumstances, effective leaders modify how they lead others and how they manage outcomes. They build collaborative partnerships with their team members. They develop and apply multiple leadership styles. As they know that change is inevitable, they plan for the future &ndash; for themselves and their team members. Let&rsquo;s take a look at the skills situational leaders need to succeed.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 783,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/783\/Track_15_L5_thumbnail_518x309.jpg",
        "product_name": "Behavioral Interviewing",
        "skill": "Business Skills",
        "categories": [
            "Talent Acquisition"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Making your hires successful requires a lot of work. There is a science to identify talent that matches the needs and culture of your organization. The process of interviewing candidates based on behavioral questions is a proven way of pinpointing the best-qualified applicants. In this course, we will review the whys and hows of using this popular interviewing practice so that you can make the most of its benefits.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 784,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/784\/Track_15_L3_thumbnail_518x309.jpg",
        "product_name": "Interviewing Skills",
        "skill": "Business Skills",
        "categories": [
            "Talent Acquisition"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>As with many business practices, hiring techniques have been affected dramatically by the Internet. &ldquo;Surprise&rdquo; interview questions are now available on hiring websites, such as Glassdoor.com and Indeed.com. Candidates can practice their responses via video coaching until they are tweaked to perfection. And in the current job environment, the competition for great employees is strong. You have to move quickly and analyze swiftly to capture the best candidates for your organization. This video discusses some pre-interview, interview, and post-interview guidelines that will help you design and develop a winning hiring process. We begin with what to do before you&rsquo;ve even met your ideal candidate and progress all the way to planning for their successful post-hire on-boarding and retention.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 785,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/785\/Track_15_L1_thumbnail_518x309.jpg",
        "product_name": "Recruiting",
        "skill": "Business Skills",
        "categories": [
            "Talent Acquisition"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>These days, organizations are making the most of available tools to locate, screen, and attract the most qualified candidates available. The recruiting process has been enhanced, streamlined, and accelerated by technology, behavioral science, pre-employment assessments, and social media. The key is to know how to position your business to attract the best talent pool using social recruiting. Using social media to present your organization dynamically, positively, and effectively to your audiences of active or potential applicants is also vital. It is important to recognize the candidates who have the right competencies and cultural fit to your organization is another skill worth developing. We&rsquo;ll look at ways that you can establish your company as an employer of choice, use social media to locate and draw the right applicants for recruitment, and assess cultural fit to guarantee the best possible talent choices.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 786,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/786\/Track_15_L2_thumbnail_518x309.jpg",
        "product_name": "Selection",
        "skill": "Business Skills",
        "categories": [
            "Talent Acquisition"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The impact of social media has dramatically changed the recruiting strategies. Evaluating and screening candidates for job openings also significantly changed. Today&rsquo;s organizational hiring processes consist of software programs, technology, and behavioral science. Once applicants have responded to your company&rsquo;s recruiting efforts via LinkedIn, corporate websites, or other social platforms, what are the most efficient and cost-effective ways that hiring managers can decide to pursue suitable candidates? The answer lies in a variety of methods from old-fashioned reference checking, software programs that manage hiring efforts, pre-employment assessments, and so on. Let&rsquo;s look at some of the ways you can use these tools to streamline your efforts and quickly identify the most qualified candidates for your organization.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 789,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/789\/Track_32_L1_thumbnail_518x309.jpg",
        "product_name": "Managing Diversity",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "Managing a Diverse Workplace"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>If you want to unleash the power of your diverse team, you must also foster inclusivity. Your team members are more likely to contribute their unique perspectives and experiences when they feel welcomed and respected within the group. Inclusion is a team-wide endeavor, and you must be the leader. Helping team members find common ground and at the same time learning about and respecting each other&rsquo;s differences is the key to creating an inclusive work environment that will leverage both talents and abilities of your diverse team.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 790,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/790\/Track_12_L6_thumbnail_518x309.jpg",
        "product_name": "Project Management Lifecycle",
        "skill": "Business Skills",
        "categories": [
            "Project Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The application of project management methodology is an efficient, time-bound and cost-effective way of working with a team on tasks that have a definite start and end date. By following a clear plan, an organization can reach its goals faster and with better results. In this course, we will explore each phase of the project management lifecycle.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 791,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/791\/C4U06_thumbnail_518x309.jpg",
        "product_name": "Role of the Project Manager",
        "skill": "Business Skills",
        "categories": [
            "Project Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In project management, the role of the project manager is critical to ensuring the success of a project. This is because a project manager must wear many hats. An ideal project manager is a seasoned communicator, a leader with team building skills, a mentor with a strong sense of ownership, while maintaining a strong hold of timelines, costs, schedule and resources throughout the project lifecycle. A project manager needs to have a combination of the right skills as well as develop the above qualities in order to be effective. In this course, we will touch upon both &ndash; the skills and capabilities to become an effective project manager.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 792,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/792\/C4U07_thumbnail_518x309.jpg",
        "product_name": "Project Scheduling and Budgeting",
        "skill": "Business Skills",
        "categories": [
            "Project Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In this course, you will discover the steps to schedule a project, the key factors that comprise a project schedule and the various steps and tools you can use to schedule a project. Then we will move on to project budgeting. We all know that budgeting for expenses must be done carefully and as accurately as possible. In this course, we will explore all the different methods and tools used for budgeting in project management.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "16"
    },
    {
        "id": 793,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/793\/C4U01_thumbnail_518x309.jpg",
        "product_name": "Introduction to Supply Chain Management",
        "skill": "Business Skills",
        "categories": [
            "Supply Chain"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Essentially, SCM is managing everything it takes to get a product or service to your consumer. Since every step along the way has a cost, supply chain leaders should focus on capitalizing on opportunities, reducing risks, and maximizing supply chain capabilities. For instance, the success of a sales team is directly tied to the success of the supply chain. If the inventory isn&rsquo;t available, the sale isn&rsquo;t made or it is delayed. If an excess of inventory is carried, the product must be discounted or worse yet left unsold. Supply chain leaders have the arduous task of having everything in the right place, in the right quantities, at the right time.&nbsp;&nbsp;<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 794,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/794\/C4U02_thumbnail_518x309.jpg",
        "product_name": "Inventory Control ",
        "skill": "Business Skills",
        "categories": [
            "Supply Chain"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Inventory control means you know what you have and where it is. This is where inventory control measures come into play. These measures help validate the physical quantities in inventory match system records. Typically a planning or procurement team is responsible for ordering new inventory to replenish inventory after it has been utilized. Warehouses are responsible for receiving the inventory, storing, counting, and distributing. Each step throughout the warehouse has the potential of negatively impacting inventory accuracy if it is not done properly. There are so many moving pieces throughout a warehouse that can cause inaccuracies which is why it is so important to have inventory control measures in place.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "12"
    },
    {
        "id": 795,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/795\/C4U04_thumbnail_518x309.jpg",
        "product_name": "Demand Planning ",
        "skill": "Business Skills",
        "categories": [
            "Supply Chain"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>There is a significant amount of planning that goes into ensuring goods are readily available for consumers. How does the store know to have a certain item, in a certain place, at a certain time allowing a customer to make a purchase? These are the questions demand planning looks to answer. Not only that, demand planning looks to do this as accurately as possible. Not too much and not too little, as each variance from demand negatively impacts costs. Communication from various departments with demand knowledge or consumer insights is critical for the accuracy of the plan. They are each reliant on supporting each other to formulate a demand plan that will match consumer demand and meet the organization&#39;s financial objectives.&nbsp;&nbsp;<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 796,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/796\/C4U03_thumbnail_518x309.jpg",
        "product_name": "Order Management",
        "skill": "Business Skills",
        "categories": [
            "Supply Chain"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Successful order management allows organizations to work within capacity, deliver to meet customer needs, maintain accurate records, and meet financial objectives. Order management isn&rsquo;t having someone standing over all the material handlers making sure they are selecting the right product in the right quantities. There is some level of inspection or quality control but for this exercise, we are referring to order management as the tools and processes in place a company utilizes to deliver their products to a customer. When these systems are running properly and disruption-free, processes for order management maintain operational efficiency. However, things often change during the order process. Components are late, customer needs change, and other exceptions require intervention.&nbsp;&nbsp;<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 797,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/797\/C4U08_thumbnail_518x309.jpg",
        "product_name": "Procurement",
        "skill": "Business Skills",
        "categories": [
            "Supply Chain"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The function of procurement is to manage the whole process of purchasing products. A procurement department is responsible for activities such as receiving bids, evaluating prices and terms, negotiating deals, placing orders with suppliers, receiving deliveries, conducting quality reviews, and more. A unique aspect of the procurement process is that it is not limited to buying goods and services for an organization. It also covers the acquisition of necessary resources, such as office supplies or raw materials, when needed. Procurement involves buying anything that is required to maintain operations.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 798,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/798\/C4U09_thumbnail_518x309.jpg",
        "product_name": "Legal Contracting",
        "skill": "Business Skills",
        "categories": [
            "Supply Chain"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Legal contracting in supply chain is used when an organization&#39;s needs exceed their capacity and they need to outsource a certain task. For example, a company may have a complex demand forecast system that has traditionally been completed by an expert on staff, but due to lack of resources or time, they instead subcontract this work to a specialist. This is a form of legal contracting in supply chain because it involves the exchange of goods, services, or money at an agreed-upon price and within a certain time frame. Legal contracts are used throughout the four major areas of supply chain: supplier relationship management, customer relationship management, transportation and logistics management, and procurement and operations management.&nbsp;<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 799,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/799\/C4U10_thumbnail_518x309.jpg",
        "product_name": "Supply Planning",
        "skill": "Business Skills",
        "categories": [
            "Supply Chain"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The goal of a supply plan is to match the demand plan. When done effectively, supply and demand planning can greatly reduce costs for organizations. When supply and demand do not match, organizational costs rise. If the supply plan does not deliver enough inventory to match the demand plan, sales are lost, labor hours rise, and transportation costs increase. A supply plan that delivers too much inventory increases handling costs, storage costs, lower margins, and obsolescence. These costs are exactly why effective demand planning and supply planning are so critical for an organization to meet its financial goals.&nbsp;&nbsp;<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 800,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/800\/C4U11_thumbnail_518x309.jpg",
        "product_name": "Warehousing",
        "skill": "Business Skills",
        "categories": [
            "Supply Chain"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The primary needs of a warehouse are; means of storage (building, space), material handling equipment (pallet racking, forklifts, loading docks), and people (material handlers, leadership, administrative). These are just the basic needs. There are thousands of material handling alternatives, warehouse configurations, and pallet racking options. Warehouses are outfitted to suit the needs of the business. The primary goal of the warehouse is to safely and efficiently handle the flow of goods for an organization. Warehouses store all different types of goods that require different space, temperature, and material storage requirements. Floor storage, vertical pallet racking, and cold storage are different types of storage. Warehousing functions, equipment, and people should add value to the products through efficiency. Optimizing warehouse operations is a primary objective and goal for any warehouse leader.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 801,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/801\/C4U12_thumbnail_518x309.jpg",
        "product_name": "Downstream and Upstream Procurement",
        "skill": "Business Skills",
        "categories": [
            "Supply Chain"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>To understand how downstream and upstream procurement works in the supply chain, it is important to understand the makeup of a typical procurement organization. Procurement organizations are made up of sourcing and purchasing departments. A sourcing team is primarily focused on finding suppliers and negotiating terms such as price and quantity. Sourcing also involves contract negotiation with suppliers of services and goods. Once the contract is awarded and signed, the purchasing teams take over. This is the point where procurement switches from upstream (sourcing) to downstream (purchasing) in an organization&#39;s supply chain.&nbsp;<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 802,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/802\/C4U13_thumbnail_518x309.jpg",
        "product_name": "Negotiating\/Purchasing",
        "skill": "Business Skills",
        "categories": [
            "Supply Chain"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Negotiating goes well beyond price. Organizations negotiating solely on price will find they end up paying in other areas or will only establish short-term business relationships. Organizations and suppliers negotiating for value put both of their respective entities in a favorable position. There are so many terms to be negotiated, it&rsquo;s best for an organization to prioritize what conditions hold the most value. This preparation allows for giving and taking in the negotiation process. For example, a supplier may push for minimum order quantities from a customer. Minimum order quantities may be an easy concession for a large organization with ample space but for a small business, this could be unacceptable. In this case, the small business could pay a higher price for a smaller quantity.&nbsp;&nbsp;<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 803,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/803\/C4U14_thumbnail_518x309.jpg",
        "product_name": "Introduction to Digital Marketing",
        "skill": "Business Skills",
        "categories": [
            "Digital Marketing",
            "Marketing"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Are you a business owner? Do you work in traditional advertising? Are you involved in sales and&nbsp;marketing, or do you manage public relations for a brand? It is becoming increasingly important for brands to become visible on digital platforms. Digital Marketing helps you build a two-way communication channel with your customers. In many cases, brands have created memorable campaigns on the digital platform leading to sustained success and greater brand retention in the minds of their audiences. This course will help you understand and navigate through the different types of digital marketing for your brand.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 804,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/804\/C4U15_thumbnail_518x309.jpg",
        "product_name": "How to Protect Yourself from Cyber Security Threats",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In today&rsquo;s world, each one of us is digitally connected at all times. Whether we are working from our laptops, or browsing the internet from our phones, we are constantly creating and leaving behind a digital footprint. Cyber criminals often seek our digital footprint on the internet and launch attacks on individuals and organizations in different ways. Such attacks have so far caused billions of dollars lost to cyber attackers responsible for stealing proprietary data from organizations. Since the pandemic, as most of us started working from home, the incidence of cyber-attacks have only increased. This is because attacks take longer to be detected and fixed in a remote working model. This is why, it is really important to understand the different types of cyber security threats and what you can do to ensure that you or your organization don&rsquo;t fall victim to a cyber-crime.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 805,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/805\/C4U16_thumbnail_518x309.jpg",
        "product_name": "Anti-Sexual Harassment Training",
        "skill": "Compliance",
        "categories": [
            "Workplace Harassment"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The objective of this course is to create awareness about what sexual harassment is and isn&rsquo;t and to empower individuals to speak up against sexual harassment in the workplace. By identifying unacceptable behaviors deemed as sexual harassment, we can create better workplaces for all. In this course, we will also briefly touch upon gender issues, which is where most sexual harassment issues originate.<\/p>\r\n\r\n<p>This training is meant for:&nbsp;<\/p>\r\n\r\n<ul>\r\n\t<li>All individuals who work in an organization&nbsp;<\/li>\r\n\t<li>Individuals who need help identifying whether they are being sexually harassed and what steps can they take to seek redressal&nbsp;<\/li>\r\n\t<li>Individuals may be unknowingly engaging in behavior that is considered as sexual harassment<\/li>\r\n\t<li>Individuals who play a key role in curbing sexual harassment through timely reporting such as: a supervisor or a designated single point of contact for reporting such issues<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "12"
    },
    {
        "id": 806,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/806\/C4U17_thumbnail_518x309.jpg",
        "product_name": "Effects of Workplace Politics",
        "skill": "Compliance",
        "categories": [
            "Workplace Harassment"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Workplace is a place where individuals from diverse backgrounds, varied educational qualifications and different interests come together to strive and work towards a greater goal. This also means that organizational dynamics can be complex and could sometimes be difficult to interpret for the employees. Workplace politics is one such phenomenon that tends to creep in when the workplace dynamics are complex. In this course, you will learn about what workplace politics is, its effects and the ways to avoid it.&nbsp;<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 807,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/807\/C4U18_thumbnail_518x309.jpg",
        "product_name": "Anti-Workplace Harassment Training",
        "skill": "Compliance",
        "categories": [
            "Workplace Harassment"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The objective of this course is to create awareness about what a hostile work environment is and to identify behaviors that can be defined as workplace harassment, to empower individuals to speak up against hostile and aggressive conduct at the workplace.<\/p>\r\n\r\n<p>This training is meant for:&nbsp;<\/p>\r\n\r\n<ul>\r\n\t<li>All individuals who work in an organization&nbsp;<\/li>\r\n\t<li>Individuals who are victims of workplace harassment and the steps can they take to stop this behavior&nbsp;<\/li>\r\n\t<li>Individuals who may be unknowingly engaging in behavior that is considered as harassment or bullying<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 808,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/808\/C4U19_thumbnail_518x309.jpg",
        "product_name": "Anti-Workplace Harassment Training Part 2",
        "skill": "Compliance",
        "categories": [
            "Workplace Harassment"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Let&rsquo;s continue this course by putting on our thinking caps as we walk through a detailed scenario.<\/p>\r\n\r\n<p>This training is meant for:&nbsp;<\/p>\r\n\r\n<ul>\r\n\t<li>All individuals who work in an organization&nbsp;<\/li>\r\n\t<li>Individuals who are victims of workplace harassment and the steps can they take to stop this behavior&nbsp;<\/li>\r\n\t<li>Individuals who may be unknowingly engaging in behavior that is considered as harassment or bullying<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 809,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/809\/C4U20_thumbnail_518x309.jpg",
        "product_name": "Effective Resume Development",
        "skill": "Business Skills",
        "categories": [
            "Self Development"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The evolving landscape of recruitment and talent acquisition, driven by advancements in technology, is reshaping how candidates are identified for new opportunities within organizations. Your revised resume should align with these changes to ensure it remains relevant and impactful.<\/p>\r\n\r\n<p>This training is meant for:&nbsp;<\/p>\r\n\r\n<ul>\r\n\t<li>Experienced working professionals who want their resume to reflect their experience and skills acquired&nbsp;<\/li>\r\n\t<li>Individuals who want to switch their role within an organization or apply to higher positions to grow within their company&nbsp;<\/li>\r\n\t<li>Professionals who want to articulate their growth journey and take stock of the skills and experience needed to grow further<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "12"
    },
    {
        "id": 810,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/810\/C4U21_thumbnail_518x309.jpg",
        "product_name": "Accounting ",
        "skill": "Business Skills",
        "categories": [
            "Small Business"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Accounting is the process of recording, classifying, and summarizing financial transactions to provide information that is useful in making sound business decisions. Accounting information is used by a variety of users, including investors, creditors, managers, and regulators. Accounting helps small business owners track their expenses, understand their financial situation, and make informed decisions about where to allocate their resources. While accounting may seem like a daunting task, there are a number of simple tools and resources that can help small business owners get started.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 811,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/811\/C4U22_thumbnail_518x309.jpg",
        "product_name": "HR Practices ",
        "skill": "Business Skills",
        "categories": [
            "Small Business"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>A few key considerations are essential to success in HR practices for small business management. Hiring and managing employees, compensation, benefits, and remaining legally compliant are crucial factors that need to be addressed. Understanding these areas is critical for any small business owner who wants to create a high-performing, cohesive team that can help the business succeed. Small businesses often have to be more creative and innovative when attracting and retaining top talent. They may not have the same resources as larger businesses. Still, they can make up for it in other ways. For example, small businesses can offer a more collaborative and intimate work environment, appealing to employees looking for more than just a paycheck.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 812,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/812\/C4U23_thumbnail_518x309.jpg",
        "product_name": "Taxation ",
        "skill": "Business Skills",
        "categories": [
            "Small Business"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>One of the first things you need to understand as a small business owner is how taxation works in your particular industry. Each industry has nuances and regulations when it comes to taxes, so it&#39;s essential to be familiar with the specific requirements for your business. Once you have a solid understanding of the tax landscape, you can develop a tax strategy for your business. There are many different types of taxes that small businesses need to pay, including income taxes, sales taxes, and payroll taxes. Depending on the size and structure of your business, you may also be required to pay other taxes, such as property taxes or self-employment taxes. Understanding the different taxes and how they apply to your business helps you budget and plan accordingly.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 813,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/813\/C4U88_thumbnail_518x309.jpg",
        "product_name": "Diversity Hiring and Inclusion ",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI at Workplace"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Diversity Hiring is the key: Diversity hiring is one of the first steps an organization should take towards building an inclusive and diverse workplace culture. Diversity &amp; Inclusion matter in both personal and professional lives: Every one of us knows and realizes the importance of diversity and inclusion in our lives. The same thing extends to our workplaces.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 814,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/814\/C4U25_thumbnail_518x309.jpg",
        "product_name": "Delivering Effective Presentations ",
        "skill": "Business Skills",
        "categories": [
            "Effective Presentations",
            "Self Development"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>This course will focus on practical tips and ways to prepare yourself to deliver an impactful presentation. There are many aspects of delivering a presentation ranging from logistical &amp; technical aspects to the actual presentation and the impact that it needs to create. It is simply a matter of developing the right skills, asking the right questions and practice!<\/p>\r\n\r\n<p>This training is meant for:&nbsp;<\/p>\r\n\r\n<ul>\r\n\t<li>Beginners preparing to deliver their first presentation&nbsp;<\/li>\r\n\t<li>Experienced professionals\/presenters who want to further develop their presentation skills&nbsp;<\/li>\r\n\t<li>Entrepreneurs who want to deliver impactful presentations&nbsp;<\/li>\r\n\t<li>Business leaders, managers, professionals looking to improve their presentation skills&nbsp;<\/li>\r\n\t<li>Anyone looking to create an impact with an upcoming speech or presentation<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 815,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/815\/C4U26_thumbnail_518x309.jpg",
        "product_name": "Identifying Types of Violence in the Workplace  ",
        "skill": "Safety",
        "categories": [
            "Workplace Violence"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The purpose of this scenario-based training is to build awareness of various types of threats in the workplace so that they can be anticipated and diffused. This training focuses on the role of HR and company culture in identifying and preventing workplace violence. In a crisis situation however, any employee may have to step up and act showing good judgement.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>HR professionals&nbsp;<\/li>\r\n\t<li>Compliance professionals&nbsp;<\/li>\r\n\t<li>Employees who work on a company campus full time or part-time&nbsp;<\/li>\r\n\t<li>Small business owners<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 816,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/816\/C4U27_thumbnail_518x309.jpg",
        "product_name": "Recognizing Warning Signs of a Risky Situation to Prevent Workplace Violence",
        "skill": "Safety",
        "categories": [
            "Workplace Violence"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Violent incidents often arise from uncontained and escalating situations. By learning to manage potential workplace conflicts, we can redirect the course of an argument and defuse tension before it escalates beyond control. This approach is crucial in various scenarios, such as calming angry customers or preventing disputes between coworkers from escalating into physical altercations.<\/p>\r\n\r\n<p>This training is meant for:&nbsp;<\/p>\r\n\r\n<ul>\r\n\t<li>HR professionals&nbsp;<\/li>\r\n\t<li>Compliance professionals&nbsp;<\/li>\r\n\t<li>Business owners&nbsp;<\/li>\r\n\t<li>Top management<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 817,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/817\/C4U28_thumbnail_518x309.jpg",
        "product_name": "Creating an Effective Workplace Violence Prevention Plan",
        "skill": "Safety",
        "categories": [
            "Workplace Violence"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>This course will take you through the various steps that you must consider for your organization or business to create an effective plan to mitigate workplace violence risks. Each year, 400 people are the victims of workplace homicides across America. 2 million people have reported being victims of workplace violence. Assault is the second leading cause of workplace death and resulted in over 20,000 injuries in 2019 alone. These numbers point towards the need for having greater preparedness in tackling workplace violence with proper security measures in place for the safety of employees.<\/p>\r\n\r\n<p>This training is meant for:&nbsp;<\/p>\r\n\r\n<ul>\r\n\t<li>HR professionals&nbsp;<\/li>\r\n\t<li>Compliance professionals&nbsp;<\/li>\r\n\t<li>Business owners&nbsp;<\/li>\r\n\t<li>Top management<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 818,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/818\/C4U29_thumbnail_518x309.jpg",
        "product_name": "Dealing with Active Shooters ",
        "skill": "Safety",
        "categories": [
            "Workplace Violence"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>While this training is a part of the series on managing workplace violence, the threat posed by an active shooter can be in any setting and is therefore, a useful training for just about everyone. Mass shootings have become a growing cause for concern across the United States. According to the Gun Violence Archive, there have been 230 incidents of mass shootings in 2022 alone, where 4 or more people were shot at or killed (excluding the shooter). This alarming trend only underscores the need for all-round preparedness to tackle such situations. According to the U.S. Department of Homeland Security website, situations involving active shooters usually get over in 10 or 15 minutes. This means that authorities may not reach in time, making training for everyone, critical.<\/p>\r\n\r\n<p>This training is meant for:&nbsp;<\/p>\r\n\r\n<ul>\r\n\t<li>HR professionals&nbsp;<\/li>\r\n\t<li>Facilities management&nbsp;<\/li>\r\n\t<li>Compliance professionals&nbsp;<\/li>\r\n\t<li>Business owners&nbsp;<\/li>\r\n\t<li>Top management&nbsp;<\/li>\r\n\t<li>All employees<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "18"
    },
    {
        "id": 819,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/819\/C4U30_thumbnail_518x309.jpg",
        "product_name": "Dealing With Employees Who are Suicidal and Victims of Domestic Violence",
        "skill": "Safety",
        "categories": [
            "Workplace Violence"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Conventionally, the issues of employees who are victims of domestic violence or those prone to suicide were considered to be in the realm of &lsquo;personal matters&rsquo;, however, given the seriousness of these issues, the post-COVID world is reemerging with a greater sense of care. Across surveys on the best places to work, it was found that organizations that maintained a culture of care and trust maintained a stellar growth track with higher employee loyalty and performance. In the long run, organizations that care also offset costs from absenteeism and employee turnover.<\/p>\r\n\r\n<p>This training is meant for:&nbsp;<\/p>\r\n\r\n<ul>\r\n\t<li>HR professionals<\/li>\r\n\t<li>Business owners\/leaders<\/li>\r\n\t<li>Top management<\/li>\r\n\t<li>All employees<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "16"
    },
    {
        "id": 820,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/820\/C4U31_thumbnail_518x309.jpg",
        "product_name": "Role of the Customer and Supplier ",
        "skill": "Business Skills",
        "categories": [
            "Customer Focus",
            "Supply Chain"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The relationship between supplier and their customers is symbiotic. Businesses need customers to survive, and customers need small businesses to meet their needs. By working together, businesses and their customers can ensure that both parties are happy. The customer may not always be right, but customers are the ones with the money, and they have the power to choose where to spend it. This power gives them a lot of influence over businesses that need their customers to stay afloat. Customers don&#39;t always hold back when they&#39;re unhappy, and their complaints can be loud and damaging to a small business&#39;s reputation.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 821,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/821\/C4U32_thumbnail_518x309.jpg",
        "product_name": "Technical Enhancements for Delivering Effective Presentations  ",
        "skill": "Business Skills",
        "categories": [
            "Effective Presentations",
            "Self Development"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Whether it&rsquo;s an in-person speech or an online event, public speaking and presenting is an integral part of a person&rsquo;s growth story. Delivering presentations&nbsp;simply and impactfully can accelerate your career and boost your confidence. In the post-pandemic world, the importance of creating an impact over Zoom meetings cannot be overstated. This course will prepare you for both offline and online presentation scenarios and will focus on the technical checkpoints that help you present effectively.<\/p>\r\n\r\n<p>This training is meant for:&nbsp;<\/p>\r\n\r\n<ul>\r\n\t<li>Beginners preparing to deliver their first presentation&nbsp;<\/li>\r\n\t<li>Experienced professionals\/presenters who want to refine their presentation skills<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 822,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/822\/C4U88_thumbnail_518x309%20%281%29.jpg",
        "product_name": "Dimensions of Diversity",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI at Workplace"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>What does diversity mean? The concept of diversity is a blend of both acceptance and respect. It is act of recognizing individual differences and uniqueness. If you had to list the characteristics of a group of people, the chances of having a good number with the same characteristics will be almost close to nil. This individuality of each one is the root of diversity. It is imperative to accept diversity because it brings real benefits to businesses. Hiring a diverse group of employees enables the use of a wider range of talents and skills.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 823,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/823\/C4U34_thumbnail_518x309.jpg",
        "product_name": "Principles of Lean Operations",
        "skill": "Business Skills",
        "categories": [
            "Self Development"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Lean operations seek perfection within the value stream by eliminating waste and maximizing efficiency. Businesses can provide their customers with the highest quality product or service in the shortest amount of time possible.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 824,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/824\/C4U35_thumbnail_518x309.jpg",
        "product_name": "Employee Resource Groups",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI at Workplace"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Diversity and Inclusion (D&amp;I) in workplace generally involve a set of strategies and policies adopted by an organization to create an inclusive workplace that is able to attracts a diverse talent pool with talents belonging to various cultural backgrounds. Other than being a business advantage, companies with good D&amp;I policies and practices in place, tend to be more creative and supportive. They are also known to be popular among the people looking for jobs.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 825,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/825\/C4U36_thumbnail_518x309.jpg",
        "product_name": "Dealing with Bomb and Arson Threats in the Workplace",
        "skill": "Safety",
        "categories": [
            "Workplace Violence"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Since 2015, there has been a steady increase in explosion incidents across the U.S., as reported by BATS (Bombs Arson Tracking System) till 2019. Preparedness training is the best way to ensure safety and survival.<\/p>\r\n\r\n<p>This training will cover key areas of:&nbsp;<\/p>\r\n\r\n<ul>\r\n\t<li>Emergency preparedness for handling bomb and arson threats<\/li>\r\n\t<li>Key points related to handling a threat call &nbsp;<\/li>\r\n\t<li>Safety procedures<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 826,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/826\/C4U37_thumbnail_518x309.jpg",
        "product_name": "Using Social Media Recruitment for DEI",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI at Workplace"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>There is a plethora of tools available to navigate the vast ocean of social media ranging from rudimentary to advanced. Some tools only help employers discover the candidate&#39;s contact information, email, and phone number. Then there are a few others that have incorporated artificial intelligence and machine learning to narrow searches and generate leads.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 827,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/827\/C4U38_thumbnail_518x309.jpg",
        "product_name": "Prevent and Manage Violence in Customer Facing Roles",
        "skill": "Safety",
        "categories": [
            "Workplace Violence"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Welcome to the training on ways of Preventing &amp; Managing Violence in Customer Facing Roles Such as Healthcare, Retail, Social Services and others. Research shows that healthcare workers are at the highest risk for workplace violence. This is followed by roles that involve handling cash such as standalone retail outlets with single cashiers. Further studies and analysis of workplace violence by OSHA and ILO show that workplace violence incidents are preventable. To put this in perspective, 50% of the overall 2 million reported cases each year involve healthcare workers.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 828,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/828\/C4U39_thumbnail_518x309.jpg",
        "product_name": "Understanding the Cultural Differences (U.S.\/India)",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI at Workplace"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>India and the U.S. are such vast and populous geographies that drawing comparison points of cultural differences between the two can result in people making sweeping generalizations. A young, ambitious software engineer from New Delhi may have a lot in common with his or her counterpart in Silicon Valley. It could be certainly a lot more than a farmer from any part of India would with a construction worker from Seattle.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 829,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/829\/C4U40_thumbnail_518x309.jpg",
        "product_name": "Disability Awareness Full Circle Inclusion and Diversity",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI at Workplace"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Bobby Dodd Institute (BDI) is an Atlanta-based non-profit with origins dating back to the 1960s, giving it almost 60 years of experience in the disability community. BDI aims to help people of all abilities reach their full potential by ensuring economic self-sufficiency, independence, and participation in their communities. BDI has emerged as a pioneer in workforce innovation, providing individuals with skills and linking them with employment. The merger with AADD in 2018 resulted in unified services for individuals, providing them with an unbroken path to programs and support as they strive to live more independent and purposeful lives.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 830,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/830\/C4U41_thumbnail_518x309.jpg",
        "product_name": "English as a Second Language (ESL)",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI at Workplace"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>English as a Second Language (ESL) is a traditional term for the use or study of the English dialect by non-native speakers in an English-talking surrounding. Those surroundings can be a country in which English is a native language or one in which English has an accepted role. English as a Second Language further refers to dialect education designed for those whose dominant language is not English. It is also known as English for speakers of different languages. A contributor to the Harvard Business Review, Tsedal Neeley, noted that &ldquo;English is now the global language of business.&rdquo; Many global firms are now requiring their employees to know English to standardize communication between departments and improve efficiency. Speaking English allows some businesses to extend their global reach. Additionally, company offices in diversified parts of the world can easily correspond with each other for all business activities.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 831,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/831\/C4U42_thumbnail_518x309.jpg",
        "product_name": "Epidemic and Pandemic Leadership",
        "skill": "Safety",
        "categories": [
            "Pandemic Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>When a disease spreads and affects mass i.e. a large number of people within a community, region or population of a country it is termed as an Epidemic. An Epidemic can outgrow and lead to Pandemic status. Yellow fever, smallpox, measles, and polio are few examples of epidemics. Whereas pandemic is an epidemic which has spread from one place to another and over multiple countries or continents. As the pandemics are large scale and have a wide geographical reach it leads to huge loss in terms of social disruption, economic growth and loss, and suffering caused to the public in general. Before COVID 19, the world had witnessed many other pandemics like The Black Death (1346 - 1353), American Plagues (16th Century), The Flu Pandemic (1889-1890), Spanish Flu (1918-1920), The Asian Flu (1957-1958) and AIDS Pandemic and Epidemic (1981-present). The leaders across the world faced immense challenges during the outbreak of the COVID 19 pandemic emergency. The pandemic highlighted the importance of health and wellbeing of people across globe and at the same time also acknowledged the measures of preparedness and the response to any future events by the leaders of various organisations and across different countries. Leaders not only need a predefined plan but also need to have the right frame of mind to analyse the day to day developments during the crisis and plan a response based on its requirements. Due to unpredictable and unprecedented demands during the time of crisis such as COVID 19, the epidemic and pandemic leaderships have evolved over a period of time.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "12"
    },
    {
        "id": 832,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/832\/C4U43_thumbnail_518x309.jpg",
        "product_name": "Mass Gatherings at Work",
        "skill": "Safety",
        "categories": [
            "Pandemic Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Mass gathering is defined as an event characterized by a group of people coming together at a specific location for a common purpose and that has the potential to strain the host&rsquo;s planning and resources. Mass gatherings usually take place as single events, but they may be a combination of multiple events at different venues. The gatherings may be public or private, planned or spontaneous, recurrent or be of varying size and duration. Mass gatherings may also include any high-visibility event that are often associated with huge participation of people. In the context of a pandemic, mass gatherings that have a high density of people in a low mobility can be associated with increased risk of disease transmission. An analysis that studied mass gatherings has indicated that the topmost factors associated with increased risk of disease transmission are:<\/p>\r\n\r\n<ul>\r\n\t<li>Duration of the gathering: The transmission risk increases with the duration of the gathering, especially if the concerned event is spread across multiple days.<\/li>\r\n\t<li>Location of the gathering: The transmission risk is higher when an event is conducted in indoor venues as compared to the outdoor venues.<\/li>\r\n\t<li>Compliance of precautionary measures: The transmission risk is a lot higher when preventive and precautionary measures are not applied, poorly implemented, or are not followed by attendees. Although there is no set threshold of the number of people attending an event to qualify as a mass gathering, the risk of transmission generally grows with the number.<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 833,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/833\/C4U44_thumbnail_518x309.jpg",
        "product_name": "Infodemic Management ",
        "skill": "Safety",
        "categories": [
            "Pandemic Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>With the growing digitization around the world, the relevance of social media and internet has increased manifold. This also means that the information can be spread rapidly, without much delay. While this is useful in many cases, it also fuels the fire of misinformation when it comes to a pandemic or any disease outbreak. Infodemic refers to an information overload that often includes rumours or misleading information circulating in both the digital as well as the physical environments during a disease outbreak. It causes huge confusion and an abnormally high risk-taking behaviour that can be harmful to the health. It also leads to a situation of mistrust in the company authorities and undermines their health response. An infodemic can intensify or worst, increase the outbreak duration, when people aren&rsquo;t aware of what measures they should take to protect themselves from the disease. Therefore, it becomes imperative that an infodemic be managed with due diligence. Infodemic management is the systematic use of facts and data-based analysis to manage an infodemic with an aim to reduce its impact on the people&rsquo;s health.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 834,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/834\/C4U45_thumbnail_518x309.jpg",
        "product_name": "Using Pronouns at Workplace",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI at Workplace"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>A pronoun is a word that refers to either the person who is talking (like &ldquo;I&rdquo; or &ldquo;you&rdquo;) or someone or something that they are talking about (like &ldquo;she&rdquo; &ldquo;it&rdquo;, or &ldquo;them&rdquo;). Gender pronouns are the ways to refer to someone&rsquo;s gender identity &ndash; except for the fact that we often don&rsquo;t think a whole lot about them. We usually interpret a person&rsquo;s gender based on their external appearance and expressions and assign them a pronoun. We may however be completely wrong in making such an assumption. The concept of gender identity is an internal sense of one&rsquo;s own gender which cannot and should not be judged by looking at them. Additionally, a person may be identified as genderfluid or genderqueer and may not identify along the binary of either male or female. Also, some people identify as both masculine and feminine, or neither. A genderqueer or non-binary identified people generally prefer a gender-neutral pronoun such as the &ldquo;they&rdquo;. For instance, &ldquo;I know Sam. They work in the Finance Department&rdquo;). Proper use of gender identity terms, including pronouns, is an important way of signaling courtesy and acceptance.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 835,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/835\/C4U46_thumbnail_518x309.jpg",
        "product_name": "Dealing with Customers Who Discriminate",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI at Workplace"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Discrimination is seen and felt in almost every aspect of life, it is an act of making unfair distinctions between people based on race, gender, age, religion, disability, or sexual orientation, as well as other categories. Customer&rsquo;s decision of doing business with a particular set of group or people often restricts opportunities to the other group irrespective of whether they deserve it or not. In this course, you will learn, to identify discriminatory behavior by customers, dealing with it and examples at workplace and employers responsibility towards it.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 836,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/836\/C4U47_thumbnail_518x309.jpg",
        "product_name": "COVID-19 and the Workplace",
        "skill": "Safety",
        "categories": [
            "Pandemic Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The COVID-19 pandemic has had a powerful impact on many aspects of our lives and will continue to do so for years to come. While the impact of COVID-19&nbsp;can be seen worldwide, in this module we will learn how it impacted the workplace.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 837,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/837\/C4U82_thumbnail_518x309.jpg",
        "product_name": "Design Thinking for Creativity and Innovation",
        "skill": "Business Skills",
        "categories": [
            "Innovation"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Design Thinking has been in use since a long time by many brands. It is a way of finding solutions that lead to creative and innovative answers. Companies such as Apple, Netflix, Airbnb, Nike, Toyota, Microsoft, Bank of America use design thinking to find ways to put their customers at the center of their products and solutions and have consistently outperformed their competitors through their innovative offerings. If you lead or work in a product-driven environment, this course will help you understand the various stages of design thinking and implement it within your teams.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "21"
    },
    {
        "id": 838,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/838\/C4U82_thumbnail_518x309.jpg",
        "product_name": "Types of Innovation in Design Thinking",
        "skill": "Business Skills",
        "categories": [
            "Innovation"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>This course dives deeper into Design Thinking and attempts to classify the various innovations that are the outcomes of Design Thinking.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 839,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/839\/C4U50_thumbnail_518x309.jpg",
        "product_name": "Hand Hygiene",
        "skill": "Safety",
        "categories": [
            "Pandemic Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Hand hygiene is one of the simplest and most effective ways to prevent infection. Scientists have found that many diseases can be stopped by simply washing your hands with soap and water. Practicing hand hygiene in medical environments, where exposure to illness is common, will ensure that disease spread slows down.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 840,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/840\/C4U51_thumbnail_518x309.jpg",
        "product_name": "An Introduction to Amazon Web Services (AWS)",
        "skill": "Technology",
        "categories": [
            "Cloud Technology"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In your work or personal life, it has been difficult not to have heard of cloud computing and more particularly AWS (Amazon Web Services). Understanding the basics of cloud computing and how it could help you transform your operations and grow your business has become vital in today&rsquo;s world. The way you handle your IT services impacts every aspect of your business operations, from how much it costs you financially to how fast you can innovate. With the proper knowledge and resources, you can successfully navigate the complex world of cloud computing and stay on top of the technological curve and beat your competitors.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 841,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/841\/C4U82_thumbnail_518x309.jpg",
        "product_name": "Aligning Sales Strategy to Organizational Goals",
        "skill": "Business Skills",
        "categories": [
            "Business Skills"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In the modern-day sales landscape, it is imperative that the sales leadership should create a defined sales strategy with clear and achievable goals. Not just this, the designed sales strategies should be aligned to the overall organizational goal. In this course, you will learn about the importance of a defined sales strategy and certain tips to help you align sales strategy to organizational goals. You will also learn about how aligned sales strategies benefit you in the long run.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 842,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/842\/C4U82_thumbnail_518x309.jpg",
        "product_name": "Building Strategic Customer Alliances",
        "skill": "Business Skills",
        "categories": [
            "Business Skills",
            "Customer Focus"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Strategic alliances, not just partnerships between two companies, are required to meet the competitive edge in the market today, but there are lot of important factors to consider. In this course, you will learn what the integral aspects to consider are to build a successful strategic alliance.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 843,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/843\/C4U54_thumbnail_518x309.jpg",
        "product_name": "Safe Injection Practices",
        "skill": "Healthcare",
        "categories": [
            "Healthcare"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Safe injection practices are guidelines created to ensure injections are performed in a way that prioritizes patient and healthcare personnel safety. Safe injections practices also ensure that waste is disposed of in a way that minimizes dangerous waste. Any organization that deals with injections for medicine administration should clearly outline safe injection practices to prevent the transmission of bloodborne disease.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 844,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/844\/C4U82_thumbnail_518x309.jpg",
        "product_name": "Productivity in the Post Pandemic Workplace",
        "skill": "Safety",
        "categories": [
            "Pandemic Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Since 2020, the global workforce has undergone a sea change largely due to remote working, work-from-home and hybrid working models that forced many &lsquo;traditional&rsquo; companies to re-evaluate their working style.<\/p>\r\n\r\n<p>Many companies across the world have adopted a hybrid model of working for the foreseeable future. How does this translate into staying motivated, productive and engaged with your work?&nbsp;This course enables you to stay productive and motivated as it explores tools and techniques to help you deliver your best, day after day at your job.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 845,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/845\/C4U82_thumbnail_518x309%20%281%29.jpg",
        "product_name": "Managing Stress and Emotions",
        "skill": "Wellness",
        "categories": [
            "Workplace Wellness"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Each one of us, in today&rsquo;s fast-paced world has experienced the emotions of anxiety, stress, depression. Since 2020, the pandemic accelerated the feeling of loneliness caused by a lack of human interaction and soon, the mental health and wellness of employees became a prime area of concern for organizations around the world. Each year, mental health costs the global economy a loss of USD 1 Tn per year in lost productivity. The need of the hour is to have work-life balance and more sustainable ways of working that don&rsquo;t burn you out in the long run. Stress and anxiety are usually caused by a lack of boundaries that lead to feelings of being overwhelmed, which can quickly spiral out of control for an already anxious person. The objective of this course is to enable individuals to find ways to cope with stressful situations at work or in personal life through a combination of techniques, tools and healthy boundaries.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "18"
    },
    {
        "id": 846,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/846\/C4U57_thumbnail_518x309.jpg",
        "product_name": "Google Cloud for Businesses",
        "skill": "Technology",
        "categories": [
            "Cloud Technology"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>This course takes a high-level tour of the Google Cloud Platform, discusses the core concepts and relevant terminologies, and introduces some of the numerous services that form the foundation for all data processes on Google&#39;s Cloud.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 847,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/847\/C4U58_thumbnail_518x309.jpg",
        "product_name": "Sterile Instruments and Devices",
        "skill": "Healthcare",
        "categories": [
            "Healthcare"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Sterilization is a process by which microorganisms present on instruments and devices are destroyed to prevent transmission of disease on that instrument. Items that must be sterilized are those that have contact with body tissues or bodily fluids and have the potential to transmit disease to a second patient. Health organizations must sterilize instruments and devices prior to patient use. This course is intended for medical professionals who interact with patients and provide immediate sterilization of instruments and devices.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 848,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/848\/C4U59_thumbnail_518x309.jpg",
        "product_name": "Cleaning and Disinfecting Environmental Surfaces",
        "skill": "Healthcare",
        "categories": [
            "Healthcare"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Cleaning and disinfecting are two key aspects of environmental cleansing in any healthcare setting. While they can be used alone to remove most pathogens, it is important to note that cleaning and disinfecting are not intended to remove all pathogens in the same way that sterilization does. However, routine cleaning of environmental surfaces can prevent the spread of some disease and serves as a first step in patient safety. This course is designed for anyone who works in a healthcare setting and may come into contact with the environmental setting, including health care works, office staff, and janitorial staff.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 849,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/849\/C4U60_thumbnail_518x309.jpg",
        "product_name": "Introduction to Microsoft Azure",
        "skill": "Technology",
        "categories": [
            "Cloud Technology"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>This course lets you grasp everything there is to know about Microsoft&#39;s Azure platform. It covers: the basic information, core concepts, and terms related to Azure, as well as exposing all of the services that are part of the foundation for online data processing.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 850,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/850\/C4U61_thumbnail_518x309.jpg",
        "product_name": "Overview of ESG (Environmental, Social and Governance)",
        "skill": "Compliance",
        "categories": [
            "ESG"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Short for Environmental, Social, Governance, the concept of ESG is to re-imagine the role of corporates in today&rsquo;s world in a manner that brings meaningful impact in the areas of climate change, sustainable business practices, responsible consumerism, diversity and inclusion and more. In short, the application of the ESG framework is related to businesses &lsquo;doing the right thing&rsquo; for people, for business and the planet.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Business leaders&nbsp;<\/li>\r\n\t<li>Compliance professionals<\/li>\r\n\t<li>Business consultants<\/li>\r\n\t<li>HR leaders&nbsp;<\/li>\r\n\t<li>If you lead sustainability, DE&amp;I initiatives in your organization<\/li>\r\n\t<li>Anyone who is interested in learning about ESG<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 851,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/851\/C4U62_thumbnail_518x309.jpg",
        "product_name": "Reverse Engineering",
        "skill": "Technology",
        "categories": [
            "Technology"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>While the idea of reverse engineering is not new, it is a skill that all engineers, developers, and product designers should have. It is a fundamental skill that will make you an extremely valuable asset in any work environment.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 852,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/852\/C4U63_thumbnail_518x309.jpg",
        "product_name": "ESG and Sustainable Investing",
        "skill": "Compliance",
        "categories": [
            "ESG"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>ESG has become a trending buzzword in the financial world. Short for Environmental, Social and Governance, ESG criteria are increasingly being used as a way to measure the broader impact of a business on the world. In recent years, ESG investments have been on the rise. However, due to a lack of standardization, it can be tricky to decipher the ESG ratings of a company. Between different rating agencies, variable weightage is given to different aspects of a business which could make one company highly ESG compliant according to one agency and award a low rating to the same company. This course takes a look at the ways in which an investor can decode the ESG ratings of a company and make an informed decision while investing.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "20"
    },
    {
        "id": 853,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/853\/C4U64_thumbnail_518x309.jpg",
        "product_name": "Waste Management",
        "skill": "Compliance",
        "categories": [
            "ESG"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Waste management in a healthcare setting encompasses several types of waste, including medical, chemical, biohazardous, radioactive, and household wastes. Understanding types of waste and proper storage and disposal is important to both patient and staff safety and to cost management. Disposal of biohazardous, radioactive, and chemical wastes often comes at a higher cost. For this reason, it is important to be able to distinguish types of waste and properly dispose of them. This course is designed for anyone who works in a healthcare setting and who comes into contact with any type of waste.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 854,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/854\/C4U65_thumbnail_518x309.jpg",
        "product_name": "Improving Customer Satisfaction",
        "skill": "Business Skills",
        "categories": [
            "Customer Focus",
            "Customer Satisfaction"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In today&rsquo;s world of cut-throat competition, wooing the customers is the key. Regardless of what industry is a company in or what sort of products and services it sells, its customers are the most important part of the business growth. There would be no sales if you don&rsquo;t have a customer base. Customer satisfaction and customer experience are the 2 most important aspects of any sales and marketing strategy.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 855,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/855\/C4U66_thumbnail_518x309.jpg",
        "product_name": "How ESG Can Impact Climate Change",
        "skill": "Compliance",
        "categories": [
            "ESG"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Climate change is a natural process. However, due to the burning of fossil fuels at an unprecedented rate, humans have caused accelerated climate change. This is evident from the fact that the Earth is now warmer by nearly 2 Degree Centigrade&nbsp;as compared to pre-industrial times. Also, by looking at the C02 levels, we can see that emissions were in the range of 280 ppm in the 18th century as compared to 440 ppm today. So why is climate change important for ESG investing? Climate change causes billions of dollars in losses each year. Ever heard of billion-dollar storms? Billion-dollar storms are extreme weather events that cause at least 1 billion dollars in damage. Hurricane Harvey that hit Houston in 2017 caused damages amounting to 1.2 billion U.S. dollars. Hurricane Maria in Puerto Rico caused 90 million in damages. Each year, over 90 such events are experienced across the world. ESG investing has the power to systemically slow down climate change while making profits.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 856,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/856\/C4U67_thumbnail_518x309.jpg",
        "product_name": "Investing in ESG Stocks",
        "skill": "Compliance",
        "categories": [
            "ESG"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>According to Harvard Business Review, globally, a third of all professionally managed assets, roughly worth USD 30 Tn are subject to ESG criteria. Since 2016, a 30% rise in ESG funds has been noted. By 2020, investors poured more than USD 70 Bn into ESG Equity Funds. These numbers reflect the broadened focus in the investor community around the growing awareness around sustainable business practices. It underscores the rising consciousness around long-term impact created by businesses in society and the planet. However, the metrics around ESG can be narrow and may fail to capture the complexity of driving social and environmental changes in the way business is done. In this course, we will look at how ESG impact for a business is measured. We will also learn how to ask the right questions to build a broader understanding of a business&rsquo; adherence to the spirit and intent of ESG.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "20"
    },
    {
        "id": 857,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/857\/C4U68_thumbnail_518x309.jpg",
        "product_name": "ESG and Social Activism",
        "skill": "Compliance",
        "categories": [
            "ESG"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Social activism has long been used as a means of bringing about social issues to light while working toward the reform of institutions, behaviors, relations, and expectations in society. Common social movements for activists include racial equality, gender equality, immigration reform, human rights, LGBTQ+ rights, and religious freedom. ESG on the other hand, refers to a broad set of considerations that could impact a company&rsquo;s performance and its ability to execute its business strategy and create long-term value. Socially conscious stakeholders use ESG to measure the sustainability and societal impact of a company and its business activities. While ESG factors can affect a company&rsquo;s bottom line directly, they can also affect a company&rsquo;s reputation, and investors and business leaders are increasingly applying these non-financial factors in their analysis to identify the material risks and growth opportunities of a company.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 858,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/858\/C4U69_thumbnail_518x309.jpg",
        "product_name": "Respiratory Hygiene and Cough Etiquette",
        "skill": "Healthcare",
        "categories": [
            "Healthcare"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Respiratory hygiene and cough etiquette are always important to prevent the spread of respiratory infections. However, they become increasingly important during seasons when viral respiratory tract infections easily spread. Infections, including influenza, RSV, adenovirus, and parainfluenza virus, spread easily through coughs and droplets. For this reason, health care professionals should be educated to help contain respiratory secretions. This course is designed for anyone who works in a health care setting and who works directly with patients in any setting.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 859,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/859\/C4U70_thumbnail_518x309.jpg",
        "product_name": "Sharps Safety",
        "skill": "Healthcare",
        "categories": [
            "Healthcare"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Sharps safety affects anyone who handles scalpels, sutures, hypodermic needles, or blood collection tools. This includes nurses, public safety officers, emergency medical technicians, and anyone who works in the vicinity of medical procedures. Injury via sharp can spread blood borne pathogens and cause severe health issues and medical costs. This course is designed for anyone who works in a health care setting or who works with or around medical procedures using sharps.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 860,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/860\/C4U71_thumbnail_518x309.jpg",
        "product_name": "The Cybersecurity Landscape",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The cyberscape is a constantly changing landscape. As technologies advance, so do the threats to online security. As the world becomes more digitized, companies and management teams must become more security-savvy to protect their enterprises from cyber attacks.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 861,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/861\/C4U72_thumbnail_518x309.jpg",
        "product_name": "Malware and Advanced Persistent Threats",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>As the world turns more digital, individuals, companies and even countries become more susceptible to threats such as malware and advanced persistent threats that can include data theft, destruction of files, and spying on users. If you want to protect yourself and your organization from these kinds of attacks, it&#39;s important that you understand what they are and how they work.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 862,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/862\/C4U73_thumbnail_518x309.jpg",
        "product_name": "Network Cybersecurity Attacks \u2013 Management and Monitoring",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Network security is becoming a key focus area in an era of increased cyber-attacks. Network security is not just about protecting your network from outside threats, but being aware of the vulnerabilities within the network.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 863,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/863\/C4U74_thumbnail_518x309.jpg",
        "product_name": "Hybrid Cloud for Businesses",
        "skill": "Technology",
        "categories": [
            "Cloud Technology"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>This course exposes all of the services that constitute the Hybrid Cloud framework for online data processing, covering the following topics: fundamental knowledge, essential ideas, and terminology linked to Hybrid.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 864,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/864\/C4U75_thumbnail_518x309.jpg",
        "product_name": "Disability Law Full Circle Inclusion and Diversity",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI at Workplace"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>We learned that the Bobby Dodd Institute (BDI) strives to help people of all abilities realize their full potential by promoting economic self-sufficiency, independence, and community participation. We learned to distinguish between fact and fiction and reviewed the myths, misconceptions, and facts around disability. In this lesson, you will learn the basics of disability law including the Americans with Disabilities Act (ADA) and what its key elements cover, as well as define some important terms like &ldquo;disability&rdquo; and &ldquo;reasonable accommodations and modifications&rdquo; according to the law.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 865,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/865\/C4U76_thumbnail_518x309.jpg",
        "product_name": "Know Your Health and Safety Responsibilities",
        "skill": "Safety",
        "categories": [
            "Safety"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In the 21st century&rsquo;s post-pandemic world, the best companies are going beyond their legal duties of meeting OSHA compliance requirements. Many organizations are striving to create a culture of safety. By going above and beyond legal requirements, companies are communicating that the health and safety of employees is paramount. Effective workplace programs, policies, and environments that are health-focused and worker-centered have the potential to significantly benefit employers, employees, their families, and communities. As Health and Safety Managers and Supervisors, you play a critical role in ensuring that the organization&rsquo;s health and safety programs are being followed at all times. You also play a critical role in bridging the communication on health and safety issues from employees to the organization&rsquo;s senior management.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "12"
    },
    {
        "id": 866,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/866\/C4U77_thumbnail_518x309.jpg",
        "product_name": "Occupation Health and Safety Best Practices for Managers",
        "skill": "Safety",
        "categories": [
            "Safety"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>According to the International Labor Organization, each year, 2.78 million workers die from occupational accidents and work-related diseases and an additional 374 million workers suffer from non-fatal occupational accidents. Occupational accidents and diseases result in a 4% loss of global GDP annually. In the U.S., there are 13 worker deaths each day. In 2020, 4764 worker deaths were reported across the United States. The occupations of transportation and material moving, construction and extraction roles accounted for nearly half of all fatal occupational injuries. As managers and supervisors in high-risk industries, you play an important role in ensuring that health and safety rules are being followed at all times. This involves a number of pre-incident checks and procedures that must be followed.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "17"
    },
    {
        "id": 867,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/867\/C4U78_thumbnail_518x309.jpg",
        "product_name": "Computer Forensics",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>With technology&#39;s rapid advancement, connectivity has become a vital part of modern life. However, it has also created several avenues for cybercrime. Computer forensics helps analyze electronic devices and uncover digital evidence that might otherwise be overlooked. It offers potential benefits in litigation, criminal investigation, and public safety.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 868,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/868\/C4U79_thumbnail_518x309.jpg",
        "product_name": "Unconscious Bias \u2013 Bias in Talent Development and Recruitment",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI at Workplace"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Bias is a conscious or sub-conscious preference that the mind gives to a particular person, group or anyone for a reason. During the recruitment process, most of the times an individual is preferred over the other because of various reasons, and one of them can be due to unconscious bias. So what is this unconscious bias and how does it impact the workplace? In this module we will be gleaning on the topic of unconscious bias at workplace.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 869,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/869\/C4U80_thumbnail_518x309.jpg",
        "product_name": "Workplace Politics: Debate",
        "skill": "Wellness",
        "categories": [
            "Workplace Politics"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In every aspect of one&rsquo;s life, competition exists. A workplace is no different. Competition comes hand in hand with workplace politics. Quite simply, workplace politics is an indication of power dynamics among employees. Like anything else, workplace politics, too, can be positive or negative. Positive politics includes using influence to work towards a common goal of helping the organization as well as the individual playing politics. Negative politics, on the other hand, includes spreading malicious gossip, sabotaging the image of other employees, and working towards solely fulfilling individual interests.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 870,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/870\/C4U81_thumbnail_518x309.jpg",
        "product_name": "Understand the Role of Safe Work Practices",
        "skill": "Safety",
        "categories": [
            "Workplace Violence"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Workplace safety is very important for each and every employee in the industry because all the workers desire to work in a safe and protected atmosphere. Health and safety is the key factor for all the industries in order to promote the wellness of both employees and employers. It is not just the duty but a moral responsibility of the company to look after the employee&rsquo;s protection. Safe work practices consist of all the processes, protocols, and guidance put in place to help mitigate risks on-site and reduce injury and illness rates. All employees must be fully invested and committed to these and help create a safer work environment. When the workforce shows a dedication to safety, different risks and hazards on-site can be quickly identified and corrective actions can be set. Safe work practices have resulted in increased efficiency and productivity with less Days Away, Restricted, or Transferred (DART) rates and Lost Time Injury (LTI) rates. They also result in reduction in injury and illness costs and insurance claims with less workers injured on the job. The resultant boost in employee morale and less employee turnover is a win-win situation for everyone involved. Organizations must constantly work towards educating their employees on safe work practices to create a healthy and fulfilling workplace.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "16"
    },
    {
        "id": 871,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/871\/C4U82_thumbnail_518x309.jpg",
        "product_name": "Health and Safety Manager Role in Emergency Response and Fire Safety",
        "skill": "Safety",
        "categories": [
            "Safety"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Most working adults in the U.S. spend 30% of their waking hours at work. It is the legal and moral responsibility of organizations to ensure employee safety and preparedness in times of emergencies. Workplace related emergencies include fires or explosions, medical emergencies, severe weather conditions such as earthquakes, storms or hurricanes, active shooters, bomb threats, major power failures and\/or hazardous material spills. According to the results of an online poll, conducted by Cintas Corporation, it was found that less than a third of employed U.S. adults (31%) consider their workplace proactive about emergency preparedness. Each year, fire hazards cost US businesses 1 Bn dollars in losses. Health and Safety Managers need to ensure preventative measures to minimize the impact from emergencies. They also need to ensure that at the time of an emergency, people know their roles well and are equipped to take the steps to secure themselves. While having robust Health and Safety procedures in place cannot prevent risks, it can strongly reduce the negative impact of emergencies on human life.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "20"
    },
    {
        "id": 872,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/872\/C4U83_thumbnail_518x309.jpg",
        "product_name": "Invisible Disabilities",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI at Workplace"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Most of us have seen people using wheelchair ramps or hearing aids and canes for walking. We are quick to change our mannerisms around them, offer them help and comfort. Many of us also have encountered people suffering from fatigue, dizziness, or poor mental health and are quick to judge them without enquiring their well-being. Often people think the term, disability, only refers to people using a wheelchair, crutch, cane or walker. On the contrary, the 1994-1995 Survey of Income and Program Participation (SIPP) found that 26 million Americans (almost 1 in 10) have a severe disability, while only 1.8 million used a wheelchair and 5.2 million used a cane, crutches or walker (Americans with Disabilities 94-95). In other words, 74% of Americans who live with a severe disability do not use any assistive devices. So, is there a way we can learn about these &ldquo;invisible&rdquo; challenges and become better colleagues, citizens and people? An invisible disability is a physical, mental or neurological condition that is not visible externally, yet can limit or challenge a person&rsquo;s movements, senses, or activities. Unfortunately, this invisibility more often than not leads to misunderstandings, false perceptions, and judgments.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "20"
    },
    {
        "id": 873,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/873\/C4U84_thumbnail_518x309.jpg",
        "product_name": "Web Design for User Accessibility ",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI at Workplace"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Whether you are a content writer for the web, a web designer, product manager, content strategist, information architect, developer building an accessible website or online product is your job, accessibility in web or product design needs to be a core part of the product development strategy contrary to being treated as an afterthought. According to global estimates, roughly a billion people suffer from some form of disability. Accessible design is all about crafting websites that enable users with cognitive or motor impairments to experience the website in the way it was intended to be experienced.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "20"
    },
    {
        "id": 874,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/874\/C4U85_thumbnail_518x309.jpg",
        "product_name": "Serving Customers With Disabilities",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI at Workplace"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Customers with disabilities represent a large percentage of today&#39;s consumer population. According to the Americans with Disabilities Act (ADA), over 50 million Americans have a disability, which means that approximately 18% of the population are suffering and navigating the effects of some form of disability. The U.S. Department of Labor has estimated that this population segment has around $175 billion in discretionary spending power, hence it&#39;s a market your business cannot and ideally should not overlook. Working diligently to serve these customers is not only good business, it&rsquo;s your company&rsquo;s legal obligation under the ADA. When you begin focusing on how to better serve customers with disabilities, making your business more accessible and inclusive, it can actually help you service all customers.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "20"
    },
    {
        "id": 875,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/875\/C4U86_thumbnail_518x309.jpg",
        "product_name": "How to Create and Present a Business Growth Plan",
        "skill": "Business Skills",
        "categories": [
            "Business Skills"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>A business growth plan is a tool that incorporates business objectives and&nbsp;strategic plans to achieve revenue growth and goals of a business whether it is a startup or any business big or small. These growth plans extend to a period of one to two years and are reviewed on a need basis. The targeted audience for these plans are entrepreneurs, business development managers, company executives and other stakeholders including the employees of the company. In today&rsquo;s competitive market, companies demand each department to have a startup mentality and tools like a business growth plan can enhance their mind-set to create and present ideas in a structured format and in line with the business goals.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "20"
    },
    {
        "id": 876,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/876\/C4U87_thumbnail_518x309.jpg",
        "product_name": "Neurodiversity",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI at Workplace"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Despite the fact that 1 in 7 people are neurodivergent, half of people managers and leaders are against hiring a neurodivergent employee. Unfortunately, there are still many misconceptions about neurodivergent people in the workplace. Employers worry that they&rsquo;ll require too much support, won&rsquo;t be an ideal culture fit, or won&rsquo;t have the necessary skill sets to work efficiently. On the contrary, a national report from Drexel University says 51% of workers on the spectrum have higher skills than needed to do their job. JP Morgan &amp; Chase&rsquo;s &#39;Autism at Work&#39; program found that the autistic employees are &ldquo;48% faster and up to 92% more productive than their non-autistic counterparts &ndash; with common factors including strong visual acuity, attention to detail, and a superior ability to focus.&rdquo; They also made fewer errors and were 90% to 140% more productive than neurotypical employees. In addition, research from a 2018 Deloitte report found that companies with inclusive cultures were six times more likely to be innovative and agile. Creating an inclusive and diverse workplace culture is fundamental for success. An employer should strive for a workplace made up of employees from different backgrounds, with a range of characteristics and life experiences, who all feel respected, included, valued and comfortable at work.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 877,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/877\/C4U88_thumbnail_518x309.jpg",
        "product_name": "Affirmative Action for Businesses",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI at Workplace"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Historically, in the United States, affirmative action came into play to protect the rights of minority groups. Today, affirmative action policies are not compulsory in every workplace, however, companies whose work is contracted by federal governments in the United States are required to have affirmative action policies in place. There are many conflicting views on affirmative action however, diversity, inclusion, and equality play a similar role in creating balanced workplaces. Diversity is extremely important in today&rsquo;s world, ensuring that needs of all ethnic and minority groups are represented and met.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 878,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/878\/C4U89_thumbnail_518x309.jpg",
        "product_name": "How to Give an Elevator Pitch",
        "skill": "Business Skills",
        "categories": [
            "Self Development"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>You are at an elevator, and suddenly meet someone, all you want is a quick introduction, but there is a time constraint, what do you do? You can&rsquo;t be giving a long speech, instead a short and brief persuasive speech of 20 to 30 seconds should meet the brief. The idea is to develop interest in the person listening to it and explain who you are, your organization, idea or product you want to sell, or your project. An &lsquo;elevator pitch&rsquo; is a short and concise , pre-prepared speech that can used to introduce yourself in any given situation, whether it is an interview, a sales pitch, or to establish new connections.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 879,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/879\/JSA%2001_thumbnail_518x309.jpg",
        "product_name": "Brand Loyalty Overview",
        "skill": "Business Skills",
        "categories": [
            "Brand Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Brand loyalty is the positive association consumers attach to a particular product or brand. Customers who exhibit brand loyalty are devoted to a product or service, which is demonstrated by their repeat purchases despite competitors&#39; efforts to lure them away. In this course Dr. Jagdish Sheth provides an overview on Brand Loyalty and and the theories associated with it.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 880,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/880\/JSA%2002_thumbnail_518x309.jpg",
        "product_name": "Behavioral Theories of Brand Loyalty",
        "skill": "Business Skills",
        "categories": [
            "Brand Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Brand loyalty means that consumers have a special interest in a particular brand, so when they continue to purchase such products, they only recognize the brand, thus giving up the attempt of other brands. Brands can exceed the product life cycle and are an intangible asset. In this course Dr. Jagdish Sheth explains Behavioural Theory&nbsp;and&nbsp;Brand Loyalty amongst many others.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 881,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/881\/JSA%2003_thumbnail_518x309.jpg",
        "product_name": "Institutional Theories of Brand Loyalty",
        "skill": "Business Skills",
        "categories": [
            "Brand Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Brand loyalty means that consumers have a special interest in a particular brand, so when they continue to purchase such products, they only recognize the brand, thus giving up the attempt of other brands. Brands can exceed the product life cycle and are an intangible asset. In this course Dr. Jagdish Sheth explains how institutions can play a major role in developing brand loyalty in their people.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "9"
    },
    {
        "id": 882,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/882\/JSA%2001_thumbnail_518x309%20%281%29.jpg",
        "product_name": "Socialization Theories of Brand Loyalty",
        "skill": "Business Skills",
        "categories": [
            "Brand Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Brand loyalty means that consumers have a special interest in a particular brand, so when they continue to purchase such products, they only recognize the brand, thus giving up the attempt of other brands. Brands can exceed the product life cycle and are an intangible asset. In this course Dr. Jagdish Sheth provides an explanation on how social environments such as family, friends, and society can play a major role in developing brand loyalty.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "12"
    },
    {
        "id": 883,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/883\/JSA%2005_thumbnail_518x309.jpg",
        "product_name": "Climate, Consumption and Culture Overview",
        "skill": "Compliance",
        "categories": [
            "ESG"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>People all over the world have different consumption habits. Also, the behaviour of people can largely be attributed to the cultures they belong to. In this course, Dr Jagdish Sheth describes how consumption and cultural behaviour of people majorly depends on the climate they come from and how one can understand their consumers better by studying these aspects.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 884,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/884\/JSA%2001_thumbnail_518x309%20%282%29.jpg",
        "product_name": "Food as a Necessity",
        "skill": "Business Skills",
        "categories": [
            "Customer Focus"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>People all over the world have different consumption habits. Also, the behaviour of people can largely be attributed to the cultures they belong to. In this course, Dr Jagdish Sheth describes how both consumption and culture majorly depends on the climate people come from and how one can understand their consumers better by studying these aspects.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 885,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/885\/JSA%2007_thumbnail_518x309.jpg",
        "product_name": "Modernization and Food as a Necessity",
        "skill": "Technology",
        "categories": [
            "Technology"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Across the world, there has been a movement from traditional to modern eating, including a movement of traditional eating patterns from their origin culture to new cultures, and the emergence of new foods and eating behaviors. In this course, Dr Sheth explores how consumption habits of people changes with regards to food and how one can understand their consumers better by studying these aspects.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "12"
    },
    {
        "id": 886,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/886\/JSA%2008_thumbnail_518x309.jpg",
        "product_name": "Time and Space as Dimensions of Varying Consumption",
        "skill": "Business Skills",
        "categories": [
            "Customer Focus"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>People all over the world have different consumption habits. Also, the behaviour of people can largely be attributed to the cultures they belong to. In this course, Dr Jagdish Sheth explains how climate plays a major role in defining the consumption of space and value of time in certain cultures and how one can understand their consumers better by studying these aspects.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 887,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/887\/JSA%2009_thumbnail_518x309.jpg",
        "product_name": "Dramatic Difference of Clothing and Shelter",
        "skill": "Business Skills",
        "categories": [
            "Customer Focus"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>People all over the world have different consumption habits. Also, the behaviour of people can largely be attributed to the cultures they belong to. In this course, Dr Jagdish Sheth explores how climate affects the consumption with regards to clothing and shelter and how one can understand their consumers better by studying these aspects.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 888,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/888\/JSA%2010_thumbnail_518x309.jpg",
        "product_name": "Technology, Friendship and Agreement as Dimensions of Varying Consumption",
        "skill": "Business Skills",
        "categories": [
            "Customer Focus"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Purchase and consumption behaviors in daily life often are dependent on various factors. In this course, Dr. Jagdish Sheth discusses technology, friendship and agreement as dimensions that affect the consumption behavior.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 889,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/889\/JSA%2011_thumbnail_518x309.jpg",
        "product_name": "Other Dimensions of Varying Consumption",
        "skill": "Business Skills",
        "categories": [
            "Customer Focus"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Purchase and consumption behaviors in daily life often are dependent on various factors. In this course, Dr. Jagdish Sheth various dimensions that affect the consumption behavior.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 890,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/890\/JSA%2012_thumbnail_518x309.jpg",
        "product_name": "Aging of Affluent Nations: Overview",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "Generational Diversity"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Over the next several decades the populations of the major industrial countries will grow considerably older. In this course, Dr. Jagdish Sheth discusses how the aging of affluent nations can bring about major changes in the markets and what should businesses do to be prepared for such a change.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 891,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/891\/JSA%2013_thumbnail_518x309.jpg",
        "product_name": "Non-Sustainability \u2013 An Aging factor",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "Generational Diversity"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Over the next several decades the populations of the major industrial countries will grow considerably older. In this course, Dr. Jagdish Sheth discusses how the aging of affluent nations can bring about major changes in the markets and what should businesses do to be prepared for such a change from a sustainability point of view.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 892,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/892\/JSA%2014_thumbnail_518x309.jpg",
        "product_name": "Non-Sustainability \u2013 An Aging factor Part 2",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "Generational Diversity"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Over the next several decades the populations of the major industrial countries will grow considerably older. In this course, Dr. Jagdish Sheth discusses how the aging of affluent nations can bring about major changes in the markets and what should businesses do to be prepared for such a change from a sustainability point of view.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "12"
    },
    {
        "id": 893,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/893\/JSA%2015_thumbnail_518x309.jpg",
        "product_name": "Intergenerational Conflicts of Wealth & Values",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "Family Status",
            "Generational Diversity"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Intergenerational conflict refers to the collective tension, strain, and antagonism between older and younger generations due to difference in ideologies and way of living. In this course, Dr. Jagdish Sheth discusses the conflicts that arise due to the differing values and inherited wealth.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "12"
    },
    {
        "id": 894,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/894\/JSA%2016_thumbnail_518x309.jpg",
        "product_name": "Major Medical Breakthroughs",
        "skill": "Healthcare",
        "categories": [
            "Healthcare"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Technology is having a major contribution in the way healthcare is evolving. In this course Dr. Jagdish Sheth discusses the major medical breakthroughs that have happened due to modernization.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 895,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/895\/JSA%2017_thumbnail_518x309.jpg",
        "product_name": "Understanding the Rise of Roommate Family",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "Generational Diversity"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Modernization is the transformation from a traditional, rural, agrarian society to a secular, urban, industrial society. With newer generations exploring this phenomena further there has been many changes in the way people live as compared to the traditional ways. in this course, Dr. Jagdish Sheth discusses the way of life of people in the cities and their consumtion behaviors.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "8"
    },
    {
        "id": 896,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/896\/JSA%2018_thumbnail_518x309.jpg",
        "product_name": "Redefinition of Society ",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "Generational Diversity"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>With the changing times traditional concepts are fading and newer concepts are emerging. This will have a major impact in the demographics of the consumers. In this course, Dr. Jagdish Sheth explains why it is important to understand the modern ideas in order to understand your consumers.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "8"
    },
    {
        "id": 897,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/897\/JSA%2019_thumbnail_518x309.jpg",
        "product_name": "Kitchen of the Future",
        "skill": "Technology",
        "categories": [
            "Assistive Technology"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>With the changing times traditional concepts are fading and newer concepts are emerging. This will have a major impact in the demographics of the consumers. In this course, Dr. Jagdish Sheth explains why it is important to understand the modern ideas in order to understand your consumers and discusses the consumption behavior with regards to the way kitchen is redesigned.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 898,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/898\/JSA%2020_thumbnail_518x309.jpg",
        "product_name": "Modern Day Workforce",
        "skill": "Wellness",
        "categories": [
            "Emotional Intelligence"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>With the changing times traditional concepts are fading and newer concepts are emerging. This will have a major impact in the demographics of the consumers. In this course Dr. Jagdish Sheth explains why it is important to understand the modern workforce in order to understand your consumers.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "5"
    },
    {
        "id": 899,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/899\/JSA%2021_thumbnail_518x309.jpg",
        "product_name": "Reality of the Declining Middle Class",
        "skill": "Business Skills",
        "categories": [
            "Customer Focus"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Middle class refers to the social group between the upper and working classes, including professional and business people and their families. In this course Dr. Jagdish Sheth discusses their role in the economy as a consumer segment.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 900,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/900\/JSA%2001_thumbnail_518x309.JPG.jpg",
        "product_name": "How Will the Declining Middle Class Impact the World Part 1",
        "skill": "Business Skills",
        "categories": [
            "Customer Focus"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Middle class refers to the social group between the upper and working classes, including professional and business people and their families. In this course Dr. Jagdish Sheth discusses their role in the economy as a consumer segment.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 901,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/901\/JSA%2001_thumbnail_518x309.jpg",
        "product_name": "Living Alone by Choice",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "Family Status",
            "Generational Diversity"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>With the changing times traditional concepts are fading and newer concepts are emerging. this will have a major impact in the demographics of the consumers. In this course, Dr. Jagdish Sheth discusses how he phenomenon of living alone and its implications on the consumer world.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 902,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/902\/JSA%2001_thumbnail_518x309.jpg.jpg",
        "product_name": "How Will the Declining Middle Class Impact the World Part 2",
        "skill": "Business Skills",
        "categories": [
            "Customer Focus"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Middle class refers to the social group between the upper and working classes, including professional and business people and their families. In this course Dr. Jagdish Sheth discusses their role in the economy as a consumer segment.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "12"
    },
    {
        "id": 903,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/903\/JSA%2001_thumbnail_518x309.jpg",
        "product_name": "Do Brand Have Nine Lives",
        "skill": "Business Skills",
        "categories": [
            "Brand Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Brand Revitalization is the marketing strategy adopted when the product reaches the maturity stage of product life cycle, and profits reach to their lowest. It is an attempt to bring the product back in the market and secure the customers. In this course Dr. Jagdish Sheth discusses the strateges for brand revitalization.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 904,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/904\/JSA%2026_thumbnail_518x309.jpg",
        "product_name": "Understanding Brand Value",
        "skill": "Business Skills",
        "categories": [
            "Brand Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Brand Revitalization is the marketing strategy adopted when the product reaches the maturity stage of product life cycle, and profits reach to their lowest. It is an attempt to bring the product back in the market and secure the customers. In this course Dr. Jagdish Sheth discusses the strateges for brand revitalization by understading brand value.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 905,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/905\/JSA%2001_thumbnail_518x309.jpg",
        "product_name": "Expand the Brand Reach",
        "skill": "Business Skills",
        "categories": [
            "Brand Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Brand Revitalization is the marketing strategy adopted when the product reaches the maturity stage of product life cycle, and profits reach to their lowest. It is an attempt to bring the product back in the market and secure the customers. In this course Dr. Jagdish Sheth discusses the strateges for brand revitalization by expanding brand reach.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 906,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/906\/JSA%2028_thumbnail_518x309.jpg",
        "product_name": "Brand Variation",
        "skill": "Business Skills",
        "categories": [
            "Brand Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Brand Revitalization is the marketing strategy adopted when the product reaches the maturity stage of product life cycle, and profits reach to their lowest. It is an attempt to bring the product back in the market and secure the customers. In this course Dr. Jagdish Sheth discusses the strateges for brand revitalization through brand variation.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 907,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/907\/JSA%2029_thumbnail_518x309.jpg",
        "product_name": "Extending the Brand Reach",
        "skill": "Business Skills",
        "categories": [
            "Brand Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Brand Revitalization is the marketing strategy adopted when the product reaches the maturity stage of product life cycle, and profits reach to their lowest. It is an attempt to bring the product back in the market and secure the customers. In this course Dr. Jagdish Sheth discusses the strateges for brand revitalization by extending the brand reach.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 908,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/908\/JSA%2001_thumbnail_518x309.jpg",
        "product_name": "Brand Repositioning",
        "skill": "Business Skills",
        "categories": [
            "Brand Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Brand Revitalization is the marketing strategy adopted when the product reaches the maturity stage of product life cycle, and profits reach to their lowest. It is an attempt to bring the product back in the market and secure the customers. In this course Dr. Jagdish Sheth discusses the strateges for brand revitalization through brand repositioning.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 909,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/909\/JSA%2001_thumbnail_518x309.jpg",
        "product_name": "Getting More out of a Brand",
        "skill": "Business Skills",
        "categories": [
            "Brand Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Brand Revitalization is the marketing strategy adopted when the product reaches the maturity stage of product life cycle, and profits reach to their lowest. It is an attempt to bring the product back in the market and secure the customers. In this course Dr. Jagdish Sheth discusses the strategies for brand revitalization.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "12"
    },
    {
        "id": 910,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/910\/JSA%2032_thumbnail_518x309.jpg",
        "product_name": "Methods of Segmenting the Market",
        "skill": "Business Skills",
        "categories": [
            "Marketing"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Market segmentation is the practice of dividing your target market into approachable groups. Market segmentation creates subsets of a market based on demographics, needs, priorities, common interests, and other psychographic or behavioural criteria used to better understand the target audience. In this course Dr. Jagdish Sheth discusses the various methods of segmenting the market.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 911,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/911\/JSA%2033_thumbnail_518x309.jpg",
        "product_name": "Market Segmentation: Overview",
        "skill": "Business Skills",
        "categories": [
            "Marketing"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Market segmentation is the practice of dividing your target market into approachable groups. Market segmentation creates subsets of a market based on demographics, needs, priorities, common interests, and other psychographic or behavioural criteria used to better understand the target audience. In this course Dr. Jagdish Sheth gives an overview of the various methods of segmenting the market.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 912,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/912\/JSA%2001_thumbnail_518x309.jpg",
        "product_name": "Market Psychographics",
        "skill": "Business Skills",
        "categories": [
            "Marketing"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Market segmentation is the practice of dividing your target market into approachable groups. Market segmentation creates subsets of a market based on demographics, needs, priorities, common interests, and other psychographic or behavioural criteria used to better understand the target audience. In this course Dr. Jagdish Sheth discusses methods of segmenting the market through market psychographics.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "9"
    },
    {
        "id": 913,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/913\/JSA%2001_thumbnail_518x309.jpg",
        "product_name": "What is Market Segmentation",
        "skill": "Business Skills",
        "categories": [
            "Marketing"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Market segmentation is the practice of dividing your target market into approachable groups. Market segmentation creates subsets of a market based on demographics, needs, priorities, common interests, and other psychographic or behavioural criteria used to better understand the target audience. In this course Dr. Jagdish Sheth discusses why segmenting is important.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 914,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/914\/JSA%2036_thumbnail_518x309.jpg",
        "product_name": "What is Leadership",
        "skill": "Business Skills",
        "categories": [
            "Leadership"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>With the changing markets and customer needs, there has been a lot of change in the companies&#39; missions and hence the leadership styles. Modern leaders don&#39;t only tell people what to do, but they now also listen, collaborate, and encourage growth among their team members. In this course Dr. Jagdish Sheth discusses what it takes to be a good leader.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 915,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/915\/JSA%2001_thumbnail_518x309.jpg.jpg",
        "product_name": "Evolving Organizational Leadership: Part 2 ",
        "skill": "Business Skills",
        "categories": [
            "Leadership"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>With the changing markets and customer needs, there has been a lot of change in the companies&#39; missions and hence the leadership styles. Modern leaders don&#39;t only tell people what to do, but they now also listen, collaborate, and encourage growth among their team members. In this course Dr. Jagdish Sheth discusses how a good leader is ever evolving.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "8"
    },
    {
        "id": 916,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/916\/JSA%2001_thumbnail_518x309.jpg",
        "product_name": "Market Buy-o-Graphics",
        "skill": "Business Skills",
        "categories": [
            "Marketing"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Market segmentation is the practice of dividing your target market into approachable groups. Market segmentation creates subsets of a market based on demographics, needs, priorities, common interests, and other psychographic or behavioural criteria used to better understand the target audience. In this course Dr. Jagdish Sheth discusses method of segmenting the market through market Buy-o-graphics or by studying the purchasing data.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 917,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/917\/JSA%2001_thumbnail_518x309.jpg.jpg",
        "product_name": "Evolving Organizational Leadership: Part 1",
        "skill": "Business Skills",
        "categories": [
            "Leadership"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>With the changing markets and customer needs, there has been a lot of change in the companies&#39; missions and hence the leadership styles. Modern leaders don&#39;t only tell people what to do, but they now also listen, collaborate, and encourage growth among their team members. In this course Dr. Jagdish Sheth discusses how a good leader is ever evolving.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 918,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/918\/JSA%2001_thumbnail_518x309.jpg.jpg",
        "product_name": "7 Good Habits of Successful Organizational Leaders: Part 1",
        "skill": "Business Skills",
        "categories": [
            "Leadership"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>With the changing markets and customer needs, there has been a lot of change in the companies&#39; missions and hence the leadership styles. Modern leaders don&#39;t only tell people what to do, but they now also listen, collaborate, and encourage growth among their team members. In this course Dr. Jagdish Sheth discusses some of the key habits of sucessful leaders.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 919,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/919\/JSA%2001_thumbnail_518x309.jpg.jpg",
        "product_name": "7 Good Habits of Successful Organizational Leaders: Part 2",
        "skill": "Business Skills",
        "categories": [
            "Leadership"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>With the changing markets and customer needs, there has been a lot of change in the companies&#39; missions and hence the leadership styles. Modern leaders don&#39;t only tell people what to do, but they now also listen, collaborate, and encourage growth among their team members. In this course Dr. Jagdish Sheth discusses some of the key habits of sucessful leaders.<\/p>\r\n\r\n<p>n this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 920,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/920\/JSA%2001_thumbnail_518x309.jpg",
        "product_name": "Awareness and Accessibility: Overview ",
        "skill": "Business Skills",
        "categories": [
            "Marketing"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Marketing is the process of getting potential clients or customers interested in your products and services. In this course Dr. Jagdish Sheth discusses how Awareness and Accessibility play an important role in marketing.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 921,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/921\/JSA%2001_thumbnail_518x309.jpg.jpg",
        "product_name": "Leadership: Shareholder Driven OR Stakeholder Centric",
        "skill": "Business Skills",
        "categories": [
            "Leadership"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>With the changing markets and customer needs, there has been a lot of change in the companies&#39; missions and hence the leadership styles. Modern leaders don&#39;t only tell people what to do, but they now also listen, collaborate, and encourage growth among their team members. In this course Dr. Jagdish Sheth discusses a key aspect of leadership by discussing what should businesses focus on.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 922,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/922\/JSA%2001_thumbnail_518x309.jpg.jpg",
        "product_name": "Four A's of Marketing: Differentiating Factors",
        "skill": "Business Skills",
        "categories": [
            "4 \u2018A\u2019s of Marketing Awareness and Accessibility",
            "Marketing"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Marketing is the process of getting potential clients or customers interested in your products and services. In this course Dr. Jagdish Sheth discusses the 4 A&#39;s of marketing.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "12"
    },
    {
        "id": 923,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/923\/JSA%2001_thumbnail_518x309.jpg",
        "product_name": "Customer Relationship Management ",
        "skill": "Business Skills",
        "categories": [
            "Customer Focus"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Customer Relationship Management (CRM) is a technology for managing all your company&#39;s relationships and interactions with customers and potential customers. In this course Dr. Jagdish Sheth explians the importance of good CRM and how it can do wonders for your business.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "9"
    },
    {
        "id": 924,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/924\/JSA%2046_thumbnail_518x309%20%281%29.jpg",
        "product_name": "4 As of Marketing Part 1",
        "skill": "Business Skills",
        "categories": [
            "4 \u2018A\u2019s of Marketing Awareness and Accessibility"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Marketing is the process of getting potential clients or customers interested in your products and services. In this course Dr. Jagdish Sheth discusses the 4 A&#39;s of marketing.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 925,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/925\/JSA%2047_thumbnail_518x309.jpg",
        "product_name": "Shareholder Driven Companies",
        "skill": "Business Skills",
        "categories": [
            "Shareholder Driven Companies"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>With the changing markets and customer needs, there has been a lot of change in the companies&#39; missions and hence the leadership styles. Modern leaders don&#39;t only tell people what to do, but they now also listen, collaborate, and encourage growth among their team members. In this course Dr. Jagdish Sheth discusses a key aspect of leadership by discussing what should businesses focus on.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 926,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/926\/JSA%2001_thumbnail_518x309.jpg",
        "product_name": "Affordability and Acceptability",
        "skill": "Business Skills",
        "categories": [
            "4 \u2018A\u2019s of Marketing Awareness and Accessibility"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Marketing is the process of getting potential clients or customers interested in your products and services. In this course Dr. Jagdish Sheth discusses affordability and accessibility.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 927,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/927\/C4U90_thumbnail_518x309.jpg.crdownload",
        "product_name": "Skills for Effective Decision-Making",
        "skill": "Business Skills",
        "categories": [
            "Critical Thinking and Decision Making"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Effective decision-making is one of the primary functions of management. Any decision that must be made must first be assessed to see if it can be implemented on both a personal and organizational level. Effective decision-making methods have been developed in a variety of ways, ranging from simple rules of thumb to more complex systems. The decision&#39;s complexity and character influence the approach taken.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Business leaders<\/li>\r\n\t<li>Business consultants<\/li>\r\n\t<li>HR leaders<\/li>\r\n\t<li>Anyone who is interested in learning about decision-making skills<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 928,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/928\/C4U91_thumbnail_518x309.jpg",
        "product_name": "Importance of Critical Thinking",
        "skill": "Business Skills",
        "categories": [
            "Critical Thinking and Decision Making"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>According to Stanford Research Institute International, just 25% of an employee&#39;s performance is attributable to technical skills, whereas nearly 75% of an employee&#39;s success is attributable to soft skills. Soft skills aren&rsquo;t a replacement for hard skills, but they sure are an enviable asset. Soft skill training for staff members is a great approach to upskill your workers and keep top talent in your organization. According to a World Economic Forum survey, among all soft skills, critical thinking is one of the most sought-after soft skills by employers who want to entice and retain the best talent. Employers agree that the need for critical thinking abilities will increase over the next few years. Employees who practice critical thinking at work are more likely to think rationally and solve problems quickly. In the end, this lowers expensive errors and assures the wise use of an organization&#39;s resources.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Business leaders<\/li>\r\n\t<li>Business consultants<\/li>\r\n\t<li>HR leaders<\/li>\r\n\t<li>Entrepreneurs<\/li>\r\n\t<li>Trainers<\/li>\r\n\t<li>Anyone who is interested in learning about critical thinking<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 929,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/929\/C4U92_thumbnail_518x309.jpg",
        "product_name": "Importance of Continuous Learning",
        "skill": "Business Skills",
        "categories": [
            "Adaptability and Continuous Learning"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>We often tend to think of learning as something that happens exclusively within an academic environment. Learning, however, is a lifelong process that is crucial for one&rsquo;s personal and professional growth. In an era as dynamic as the 21st century, it is important to continuously learn so that one can keep up with the fast-changing world. Even in a workspace, employees need to take responsibility to upskill themselves. Furthermore, according to Deloitte&#39;s High-Impact Organization Design research, high performing organizations take decisions that enhance human capabilities and enable workforce mobility. They are always adopting new ways of working that foster passion in the workforce.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Business leaders<\/li>\r\n\t<li>Business consultants<\/li>\r\n\t<li>HR leaders<\/li>\r\n\t<li>Trainers<\/li>\r\n\t<li>Entrepreneurs<\/li>\r\n\t<li>Anyone who is interested in learning about continuous learning<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 930,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/930\/C4U93_thumbnail_518x309.jpg",
        "product_name": "Importance of Training and Development",
        "skill": "Business Skills",
        "categories": [
            "Adaptability and Continuous Learning"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>New software, programs, and technological advancements are released every day. This implies that there will always be a skill gap that needs to be filled. Training employees is a practical technique to make sure that the skill gap vanishes. Employees can improve and enhance their effectiveness at work through training. Even highly trained individuals must undergo training because prior experience may not always be sufficient. Training is intended for both the current workforce and newly hired employees. Even though it requires investing money, time, and other resources, training is a valuable investment.<\/p>\r\n\r\n<p>This training is meant for:&nbsp;<\/p>\r\n\r\n<ul>\r\n\t<li>Business leaders<\/li>\r\n\t<li>Business consultants<\/li>\r\n\t<li>HR leaders<\/li>\r\n\t<li>Anyone who is interested in learning about the importance of training and development<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 931,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/931\/C4U94_thumbnail_518x309.jpg",
        "product_name": "Improving Critical Thinking",
        "skill": "Business Skills",
        "categories": [
            "Critical Thinking and Decision Making"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>When burdened with deadlines, more often than not, we end up making hasty decisions. We skip examining the evidence and jump to the first conclusion. Even worse, we sometimes choose a solution that supports our beliefs. Lack of metacognition or not thinking critically is a barrier to effective decision-making. Fortunately, critical thinking can be learned. When we challenge our presumptions, ask logical questions, and take into account many viewpoints, we may be engaging in critical thinking, although perhaps not as consciously and rigorously as we should.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Business leaders<\/li>\r\n\t<li>Business consultants<\/li>\r\n\t<li>HR leaders<\/li>\r\n\t<li>Entrepreneurs<\/li>\r\n\t<li>Trainers<\/li>\r\n\t<li>Anyone who is interested in learning about critical thinking and decision-making<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 932,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/932\/C4U95_thumbnail_518x309.jpg",
        "product_name": "Strengthening Decision-Making Skills",
        "skill": "Business Skills",
        "categories": [
            "Critical Thinking and Decision Making"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>There are three levels of organization in management - administrative, executive, and operative. These levels have different decision-making requirements. Based on the level at which they occur, decisions can also be divided into three categories. Strategic decisions determine the direction of an organization. Tactical decisions are those that affect how things are done. Finally, operational decisions are decisions that employees make on a daily basis to keep the organization running.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Business leaders<\/li>\r\n\t<li>Business consultants<\/li>\r\n\t<li>HR leaders<\/li>\r\n\t<li>Anyone who is interested in learning about strengthening decision-making skills<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "12"
    },
    {
        "id": 933,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/933\/C4U96_thumbnail_518x309.jpg",
        "product_name": "Interpersonal Communication in the Workplace",
        "skill": "Business Skills",
        "categories": [
            "Self Development"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Interpersonal communication at the workplace refers to the interactions and exchanges between individuals within a professional setting. This can include verbal and nonverbal communication, such as face-to-face conversations, phone calls, emails, and body language. Effective interpersonal communication is crucial for building and maintaining positive relationships with colleagues, supervisors, and clients, and can lead to increased productivity, job satisfaction, and a more positive work environment.<\/p>\r\n\r\n<p>This training is meant for:&nbsp;<\/p>\r\n\r\n<ul>\r\n\t<li>Customer service<\/li>\r\n\t<li>Sales and marketing professionals<\/li>\r\n\t<li>Professionals (Entry to Leadership levels)<\/li>\r\n\t<li>Business leaders<\/li>\r\n\t<li>Business consultants<\/li>\r\n\t<li>HR leaders<\/li>\r\n\t<li>Anyone who is interested in learning about interpersonal communication<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 934,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/934\/C4U97_thumbnail_518x309.jpg",
        "product_name": "Understanding Gig Working",
        "skill": "Business Skills",
        "categories": [
            "Gig Working"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Side hustles are quickly becoming a popular new way of working. The gig working culture is almost synonymous with freestyle or independent working. Following COVID-19, we may see a significant increase in people seeking new avenues of work that will provide them with more flexibility and independence than the traditional 9&ndash;5 job. So, what is it that makes gig working so popular? Let&#39;s dig deeper into this module and learn more about the gig economy, how it works, and how to make a career out of it.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 935,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/935\/C4U98_thumbnail_518x309.jpg",
        "product_name": "Factors Affecting Decision-Making and Overcoming Them",
        "skill": "Business Skills",
        "categories": [
            "Critical Thinking and Decision Making"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>We live in a world where any and all information is one click away. Our minds are constantly stimulated and more often than not without our knowledge. This leads to infobesity, a cognitive state that is the result of overconsumption of junk information. Decision-making cannot be understood as one mechanism, it is rather an intermingling of multiple skills and mechanisms which allow us to synthesize, analyze, process, and evaluate information.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 936,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/936\/C4U99_thumbnail_518x309.jpg",
        "product_name": "Steps in Developing an Ethics Training Program",
        "skill": "Business Skills",
        "categories": [
            "Workplace Ethics"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Workplace ethics refers to a set of moral and legal guidelines that all employees of an organization should abide by. These guidelines typically define the ways in which the employees interact with each other and the customers alike. In essence, workplace ethics guide how companies serve their clients and treat their employees. Set guidelines don&rsquo;t have any meaning if the employees aren&rsquo;t aware of them, and this is where the aspect of ethical awareness comes in. Ethical awareness is the ability and eagerness to critically analyze, evaluate, and change if required, one&rsquo;s morals and ethics. All employees in an organization must be conscious of the ethical implications that their actions may have.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "12"
    },
    {
        "id": 937,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/937\/C4U100_thumbnail_518x309.jpg",
        "product_name": "Applying Interpersonal Skills at Work",
        "skill": "Business Skills",
        "categories": [
            "Interpersonal Skills",
            "Interpersonal Skills and Empathy"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Interpersonal skills are important because they demonstrate your ability to use everything as a scope and resource. Though they are the simplest and easiest way to work, they can also be the most difficult given the situations you face daily. Understanding the underlying skills required to apply interpersonal skills could help us build interpersonal communication.<\/p>\r\n\r\n<p>This training is meant for:&nbsp;<\/p>\r\n\r\n<ul>\r\n\t<li>Customer service<\/li>\r\n\t<li>Sales and marketing professionals<\/li>\r\n\t<li>Professionals (Entry to Leadership levels)<\/li>\r\n\t<li>Business leaders<\/li>\r\n\t<li>Business consultants&nbsp;<\/li>\r\n\t<li>HR leaders<\/li>\r\n\t<li>Anyone who is interested in learning about strengthening decision-making skills<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "12"
    },
    {
        "id": 938,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/938\/C4U101_thumbnail_518x309.jpg",
        "product_name": "Basics of Financial Accounting",
        "skill": "Business Skills",
        "categories": [
            "Finance"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>This course is designed to empower non-finance professionals to master the basics of business numbers. Finance metrics enable us to know the health of the business. If you are an entrepreneur, a business leader, a manager, or anyone who wants to understand the basics of finance and accounting, this course is for you!<\/p>\r\n\r\n<p>This training is meant for:&nbsp;<\/p>\r\n\r\n<ul>\r\n\t<li>Non-finance professionals who want a better grasp of financial accounting concepts<\/li>\r\n\t<li>Business owners<\/li>\r\n\t<li>Leaders<\/li>\r\n\t<li>Executives<\/li>\r\n\t<li>Managers<\/li>\r\n\t<li>Anyone who wants to determine the profitability of their cost center<\/li>\r\n\t<li>Anyone who aspires to start their own business<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "12"
    },
    {
        "id": 939,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/939\/C4U102_thumbnail_518x309.jpg",
        "product_name": "Promoting Return to Workplace",
        "skill": "Business Skills",
        "categories": [
            "Workplace Productivity"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>As an employer, are you facing resistance from employees when they are asked&nbsp;to return to office? And as an employee, are you reluctant to return to the workplace? In this lesson, you will learn the different strategies and methods one can employ to promote employees to return to the workplace.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 940,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/940\/C4U104_thumbnail_518x309.jpg",
        "product_name": "Anti-Bribery and Anti-Corruption Policies",
        "skill": "Compliance",
        "categories": [
            "Compliance"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Bribery and corruption are serious illegal activities that can have a negative impact on individuals and organizations. To combat this, many countries have enacted laws and regulations, such as the Foreign Corrupt Practices Act (FCPA) in the United States. Not limited to public organizations, even all the private sector organizations need to train their employees on these policies as this training is an important aspect of compliance in corporate companies.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 941,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/941\/C4U106_thumbnail_518x309.jpg",
        "product_name": "Time Management in the Workplace",
        "skill": "Business Skills",
        "categories": [
            "Workplace Productivity"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>We all have 24 hours in a day, so why do some people seem to accomplish more than others? Proper time management allows one to meet deadlines, increase work efficiency, and achieve a healthy work-life balance. As you progress through this course, you will learn key elements of time management as well as techniques to help you manage your time more effectively.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 942,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/942\/C4U103_thumbnail_518x309.jpg",
        "product_name": "Return to Workplace and Concerns Regarding It",
        "skill": "Business Skills",
        "categories": [
            "Workplace Productivity"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In this course, we will try to understand the various reasons behind the reluctance of employees to return to the workplace.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 943,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/943\/C4U105_thumbnail_518x309.jpg",
        "product_name": "Change Management Strategy and Process",
        "skill": "Business Skills",
        "categories": [
            "Leading Change"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Your idea is only as good as your execution. The biggest of ideas collapse if they aren&rsquo;t preceded by a plan. McKinsey &amp; Company estimates that roughly 70% of organizational change programs end up failing to meet their objectives. If you go in with a firm plan in place, you are much more likely to succeed. For this very reason, change management is crucial for a business. This includes preparing and supporting employees, establishing the necessary steps for change, and monitoring pre- and post-change activities to ensure successful implementation of strategies.<\/p>\r\n\r\n<p>This training is meant for:&nbsp;<\/p>\r\n\r\n<ul>\r\n\t<li>Business leaders<\/li>\r\n\t<li>Business consultants<\/li>\r\n\t<li>Entrepreneurs<\/li>\r\n\t<li>Trainers<\/li>\r\n\t<li>Anyone who is interested in learning about change management<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 944,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/944\/C4U107_thumbnail_518x309.jpg",
        "product_name": "Communication With the Team",
        "skill": "Business Skills",
        "categories": [
            "Workplace Productivity"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Being in business means being surrounded by people who interact with you and expect something from you. Workplace communication is an umbrella term for communication between employees, communication between managers and employees, and communication with external stakeholders, such as customers and suppliers. Despite the ever growing importance of effective workplace communication, 57% of employees report not being given clear directions and 69% of managers report feeling uncomfortable communicating with the employees in general.<\/p>\r\n\r\n<p>This training is meant for:&nbsp;<\/p>\r\n\r\n<ul>\r\n\t<li>Business leaders<\/li>\r\n\t<li>Business consultants<\/li>\r\n\t<li>Entrepreneurs<\/li>\r\n\t<li>HR executives<\/li>\r\n\t<li>Anyone who is interested in learning about workplace communication<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 945,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/945\/C4U109_thumbnail_518x309.jpg",
        "product_name": "Time Management \u2013 Myths and Mistakes",
        "skill": "Business Skills",
        "categories": [
            "Workplace Productivity"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The struggle to manage time has always been around, and finding practical solutions to manage time can be as frustrating as wasting time. The first step to reclaiming all those lost hours in your day is to simply identify the mistakes holding you back. We cannot fix problems we do not see as problems. This course will take you through a few common mistakes that you can avoid and become better at time management.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 946,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/946\/C4U110_thumbnail_518x309.jpg",
        "product_name": "Importance of Ethics and Code of Conduct",
        "skill": "Business Skills",
        "categories": [
            "Workplace Ethics"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>A Code of Conduct is a set of guidelines that a company develops for its employees. This code is meant to protect the company while keeping the employees informed of the company&#39;s expectations. The components of the code may slightly differ among organizations but what&rsquo;s common is that implementing an effective Code of Conduct is essential to an organization&rsquo;s sustainability.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 947,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/947\/C4U111_thumbnail_518x309.jpg",
        "product_name": "Creating a Successful Hiring Process",
        "skill": "Business Skills",
        "categories": [
            "Hiring Practices"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>A recruitment process is different for different organizations. The common steps involved in the process are to attract, select, and hire a new employee. To create an effective hiring process, it needs to be thoroughly thought through, planned, and executed with precision and dedication. Ensuring a streamlined process requires constant evaluation. An effective hiring process enables a pleasant experience for the aspirants and the hiring team, keeping in mind the pace to find qualified candidates quickly and efficiently.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 948,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/948\/C4U112_thumbnail_518x309.jpg",
        "product_name": "Employee Relations",
        "skill": "Business Skills",
        "categories": [
            "Hiring Practices"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>To keep your business on track, it is important to have a good mutual understanding and a strong bond with the employees. It is your employees who are responsible for everything that happens in the workplace. Strong employee relations ensure perfect sync amongst the team and add stability in business which fuels continuous growth.<\/p>\r\n\r\n<p>This training is meant for:&nbsp;<\/p>\r\n\r\n<ul>\r\n\t<li>Business leaders<\/li>\r\n\t<li>Business consultants<\/li>\r\n\t<li>Entrepreneurs<\/li>\r\n\t<li>HR executives<\/li>\r\n\t<li>Anyone who is interested in learning about employee relations<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 949,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/949\/C4U113_thumbnail_518x309.jpg",
        "product_name": "Interviewing Candidates for Employment",
        "skill": "Business Skills",
        "categories": [
            "Hiring Practices"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The building block of any organization is its employees. Aligning the right kind of employees with the right kind of company is often the biggest hurdle. According to a study by the Society for Human Resource Management, companies that take the time to carefully screen candidates are more likely to make a good hire, reduce turnover and increase employee satisfaction. Effective interviewing skills are important for making informed hiring decisions and building a successful and productive team.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Business leaders<\/li>\r\n\t<li>Business consultants<\/li>\r\n\t<li>Trainers<\/li>\r\n\t<li>Entrepreneurs<\/li>\r\n\t<li>HR executives<\/li>\r\n\t<li>Anyone who is interested in learning about interviewing<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 950,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/950\/C4U114_thumbnail_518x309.jpg",
        "product_name": "Five Stages of the Hiring Process",
        "skill": "Business Skills",
        "categories": [
            "Hiring Practices"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Filling available positions in an organization is an important process. The hiring process begins way before the actual selection or interview process. Successful recruitment depends on how well you prepare and publicize your job advertisements, as well as how well you screen applicants. This will help you meet the best candidates who closely fit what you are looking for both job description-wise as well as organization culture-wise.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 951,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/951\/C4U115_thumbnail_518x309.jpg",
        "product_name": "Intangible Assets",
        "skill": "Business Skills",
        "categories": [
            "Finance"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In today&#39;s business world, intangible assets have become a critical factor in the success of a company. They are often the source of significant value, creating a competitive advantage and driving revenue. Understanding the significance of intangible assets is essential for professionals who want to stay ahead in the business world. It is important to understand how intangible assets contribute to the success of a company, how to value them, and how to leverage them to achieve business goals.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 952,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/952\/C4U116_thumbnail_518x309.jpg",
        "product_name": "The Right Hire",
        "skill": "Business Skills",
        "categories": [
            "Hiring Practices"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Business survives based on the right person for the right job. It is essential that hiring managers understand the industry&rsquo;s best practices to search for qualified professionals and assess their credentials, enabling them to employ suitable candidates for the business. One of the most important performance indicators for a hiring manager is hiring the right candidates. As per recent changes in the hiring process, it is seen that there are numerous ways the candidate needs to be assessed and hired besides the conventional and traditional ways.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 953,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/953\/C4U117_thumbnail_518x309.jpg",
        "product_name": "Branding Yourself as a Leader at Your Company ",
        "skill": "Business Skills",
        "categories": [
            "Leadership"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Developing a strong personal brand can help you stand out from your colleagues, giving you a competitive edge in the job market. It also allows you to create valuable connections, as people are more likely to remember you if you have a distinct identity. Through this course, you will learn the key aspects of why branding yourself as a leader is important. In addition, you will learn the essential qualities and strategies you need to create your leadership brand.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 954,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/954\/C4U118_thumbnail_518x309.jpg",
        "product_name": "Effects of Unethical Practices in the Workplace",
        "skill": "Business Skills",
        "categories": [
            "Workplace Ethics"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>We often take corporate ethics for granted and are not aware enough of the repercussions of not following ethical standards. In this course, you will come across common mistakes that we often make at our workplace that are unethical. These can have negative effects both on the workplace and the workforce.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 955,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/955\/C4U119_thumbnail_518x309.jpg",
        "product_name": "Ten Tips for Successful Employee Recruitment",
        "skill": "Business Skills",
        "categories": [
            "Hiring Practices"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>According to Harvard Business Review, half of the new hires fail within the first 18 months of employment. These numbers apply to both management and lower levels of staff. But why should you care as a company? Unsuccessful recruitment is not just about monetary losses in terms of remuneration, it has far-reaching consequences. They lead to a loss of productivity and reputation, and worsen the morale in the office. Understanding and addressing these challenges is essential to ensure that the recruitment process is successful and that the company can attract the best talent.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 956,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/956\/C4U120_thumbnail_518x309.jpg",
        "product_name": "How Leaders Create and Use Networks",
        "skill": "Business Skills",
        "categories": [
            "Self Development"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Having a wide range of contacts from diverse backgrounds and experiences can give leaders a unique perspective on different issues. This course takes you through a leader&#39;s networking journey - the importance of building a network, the forms of networking, and what strategies can be used to build a stronger network.&nbsp;<\/p>\r\n\r\n<p>In this course, you will:&nbsp;<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 957,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/957\/C4U121_thumbnail_518x309.jpg",
        "product_name": "Five Ways to Promote Employee Mental Wellness ",
        "skill": "Wellness",
        "categories": [
            "Workplace Wellness"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Mental wellness of employees at the workplace can be promoted by a culture that values mental wellness, leadership initiatives and HR practices. In this course, you will learn five ways to improve employee mental wellness.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "12"
    },
    {
        "id": 958,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/958\/C4U122_thumbnail_518x309.jpg",
        "product_name": "An Overview of Customer Service ",
        "skill": "Business Skills",
        "categories": [
            "Customer Focus",
            "Customer Service"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Customer service is the assistance you provide to your clients to make their interactions with you simple and joyful, both before and after they purchase and utilize your goods or services. It&rsquo;s an essential part of every business.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "12"
    },
    {
        "id": 959,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/959\/C4U123_thumbnail_518x309.jpg",
        "product_name": "Firm-Level Innovation Model",
        "skill": "Business Skills",
        "categories": [
            "Innovation"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>We&#39;ve all heard stories of game-changing goods, services, and processes&mdash;the disruptors who make headlines and command exorbitant valuations. Then there are the entrepreneurs who make the cover of Bloomberg Businessweek and write best-selling books on their secrets to success. The message appears to be that invention is only available to a select few due to excellent timing or brilliance.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 960,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/960\/C4U124_thumbnail_518x309.jpg",
        "product_name": "Importance of Self-Care and Staying Well at Work ",
        "skill": "Wellness",
        "categories": [
            "Workplace Wellness"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Staff wellness can be promoted by enhancing employees&rsquo; personal and professional development, implementing health care initiatives, and supporting employees suffering from mental health issues.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 961,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/961\/C4U108_thumbnail_518x309.jpg",
        "product_name": "Mistakes in Interpersonal Communication ",
        "skill": "Business Skills",
        "categories": [
            "Workplace Productivity"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>We often take interpersonal communication for granted, as it is something that happens every day, in almost every moment of our lives. In this course, you will come across common mistakes that we often make in verbal, non-verbal, written, and listening communication.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 962,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/962\/C4UM01_thumbnail_518x309.jpg",
        "product_name": "Impacts of Returning to the Workplace",
        "skill": "Wellness",
        "categories": [
            "Workplace Wellness"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Return to workplace decisions could be based on certain assumptions that managers make. This course addresses the resultant impact when the assumptions may be incorrect.&nbsp;<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 963,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/963\/C4UM03_thumbnail_518x309.jpg",
        "product_name": "Tips to Create a Psychologically Safe Work Environment",
        "skill": "Wellness",
        "categories": [
            "Workplace Wellness"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Psychological safety at the workplace can be promoted through a culture change introduced by the leaders of the company that promotes inclusion, learning, contribution and freedom to challenge. In this course, you&rsquo;ll learn some tips to develop a psychologically safe atmosphere at work.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "16"
    },
    {
        "id": 964,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/964\/C4UM04_thumbnail_518x309.jpg",
        "product_name": "The 4 Stages of Psychological Safety",
        "skill": "Wellness",
        "categories": [
            "Workplace Wellness"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Do you feel like you can speak up in your workplace? Do you feel confident to contribute your ideas and voice your concerns? If your answers to these questions are yes, then, congratulations! You are in a psychologically safe work environment. If your answer is no, then, take this course to understand more about psychological safety.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 965,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/965\/C4UM7_thumbnail_518x309.jpg",
        "product_name": "Strategies and Skills for Effective Leadership and People Management",
        "skill": "Business Skills",
        "categories": [
            "Leading People",
            "Workplace Productivity"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>One may possess the technical skills required to get the job done, but that is not enough if one intends to be a constructive leader. The team may go through tough times if the manager&rsquo;s people management skills are not up to the mark. Managing a team is not just about reviewing performance or assigning team members their work; it is much more than that. That is why developing essential leadership and people management skills is vital.&nbsp;<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "17"
    },
    {
        "id": 966,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/966\/C4UM02_thumbnail_518x309.jpg",
        "product_name": "Importance of Psychological Safety at Work",
        "skill": "Wellness",
        "categories": [
            "Workplace Wellness"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Psychological safety at the workplace is extremely important for employee wellness as it promotes an inclusive culture, innovation, learning, and overall employee engagement and satisfaction, contributing directly to business growth.&nbsp;<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 967,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/967\/C4UM5_thumbnail_518x309.jpg",
        "product_name": "Online Safety and Cyber Security",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In the current times, companies and organizations have completely evolved to work in a digital environment. The internet has become a vital aspect to make organizations grow more easily. However, with great use comes more significant risks. Some threats lurk around on the internet, waiting for people to make mistakes. These mistakes have the potential to bring down an enterprise. Hence, it is crucial that organizations are aware of the methods that can help effectively include these risks. This course intends to point out the problems or risks involved in using the internet carelessly and effective methods and solutions to tackle these threats.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "17"
    },
    {
        "id": 968,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/968\/C4UM6_thumbnail_518x309.jpg",
        "product_name": "ESG Risk Management Framework",
        "skill": "Compliance",
        "categories": [
            "ESG"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In pursuit of growth, organizations are prone to taking risks. Risk management strategies or frameworks are designed to minimize or deal with a wide range of risks. In this course, you will dive deep into one of the types of risks called ESG risks and learn about a risk management framework to mitigate the same.&nbsp;<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 969,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/969\/C4UM8_thumbnail_518x309.jpg",
        "product_name": "Authentic Leadership and Empathy",
        "skill": "Business Skills",
        "categories": [
            "Leadership"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Legitimacy is every organization&rsquo;s essential business strategy. Organizations want leaders who are honest with themselves and with all the employees and create a better work environment. Thus, enhancing your leadership capabilities can be a boon to your career. Regardless of your professional position, committing to bettering yourself, working on your&sbquo; emotional intelligence, practicing leadership skills, and embracing a mission can yield substantial returns &ndash; for yourself, your team, and your organization.&nbsp;<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 970,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/970\/C4UM9_thumbnail_518x309.jpg",
        "product_name": "Types and Elements of Empathy",
        "skill": "Wellness",
        "categories": [
            "Workplace Wellness"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Empathy is a universal solvent, and in it, any problem becomes easily dissolvable. Exercising empathy can help us resolve conflicts, build productive teams, and improve our relationships with coworkers, clients, and customers. This course intends to explore what it really means to show empathy. A few simple actions can create stronger connections, honesty, and openness and make a real difference in your colleagues&rsquo; emotional well-being and productivity.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "18"
    },
    {
        "id": 971,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/971\/C4UM10_thumbnail_518x309.jpg",
        "product_name": "Mental Wellness at the Workplace and Its Benefits",
        "skill": "Wellness",
        "categories": [
            "Workplace Wellness"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Mental wellness at the workplace has emotional, psychosocial and safety aspects and its implementation benefits employees as well as the organization.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "16"
    },
    {
        "id": 972,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/972\/C4UM11_thumbnail_518x309.jpg",
        "product_name": "Getting Rid of Distractions at Work",
        "skill": "Business Skills",
        "categories": [
            "Workplace Productivity"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Distractions at the workplace reduce productivity and promote errors. Digital media is among the prominent distractors at work. This course will help you identify and nip these distractions in the bud.&nbsp;<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "19"
    },
    {
        "id": 973,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/973\/C4UM12_thumbnail_518x309.jpg",
        "product_name": "Introduction to Contractor Verification System",
        "skill": "Compliance",
        "categories": [
            "Compliance"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>It is more important than ever to ensure everything about your contractors on site. Organizations hiring contractors must demonstrate due diligence for conducting business or undertaking with regard to contractors working in their workplace under the law. Even if another contracting company is engaged to manage contractors in a workplace, a contractor verification system can help ensure that they are doing the right thing and that all contractors in the workplace are compliant and verified.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 974,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/974\/C4UM13_thumbnail_518x309.jpg",
        "product_name": "Employee Health Resources",
        "skill": "Compliance",
        "categories": [
            "Compliance"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>This lesson will provide you with an overview of the various resources available to employees to promote and maintain their health and well-being in the workplace. We will discuss the importance of employee health and the types of resources available. Investing in employee health and resources is a wise business decision that benefits employees and the company. By creating a supportive and healthy work environment, employers can foster a more productive, engaged, and satisfied workforce, leading to greater success and profitability in the long term.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 975,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/975\/C4UM14_thumbnail_518x309.jpg",
        "product_name": "Environmental Safety",
        "skill": "Safety",
        "categories": [
            "Workplace Safety"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The environment around us is crucial to our health, and it is equally essential to ensure that our work environment is safe and healthy for everyone. This lesson aims to educate you on the importance of environmental safety, the risks that exist in a workplace, and the measures that can be taken to minimize or prevent them. We will also cover the legal requirements and regulations related to environmental safety in the workplace. By the end of this lesson, you will clearly understand the significance of environmental safety and the role you can play in maintaining a healthy work environment.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 976,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/976\/C4UM15_thumbnail_518x309.jpg",
        "product_name": "Definition, Techniques, and Tips for Virtual Selling",
        "skill": "Business Skills",
        "categories": [
            "Self Development"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Not long ago, conducting sales appointments without the product and salesperson being physically present was considered difficult, if not impossible. The meetings were happening face-to-face and made up most of the salesforce. People were habituated to the salesperson visiting the client to discuss vital topics and review the sales catalog. But this system changed at the onset of the global pandemic. From 2020 till the end of 2021, most sales teams worked virtually. People got accustomed to meeting on video calls and seeing products through product demo videos. This switch happened in every industry, and it is expected to stay for a long time.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 977,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/977\/C4UM16_thumbnail_518x309.jpg",
        "product_name": "Definition and Trademarks of Technology-Based Agile Organizations",
        "skill": "Business Skills",
        "categories": [
            "Compliance",
            "Technology"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The world is changing quickly, thanks to innovative technologies. And, with the changing world, the markets are changing due to new customer interests and demands. Organizations are shifting from a traditional organizational structure to an agile one to keep up with the rapidly changing market conditions.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 978,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/978\/C4UM17_thumbnail_518x309.jpg",
        "product_name": "Importance of Building Technology-Based Agile Organizations",
        "skill": "Business Skills",
        "categories": [
            "Workplace Productivity"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The world is changing quickly, thanks to new technologies. And, with the changing world, the markets are changing due to new customer interests and demands. Organizations are shifting from a traditional organizational structure to an agile one&nbsp;to keep up with the rapidly changing market conditions. Agile organizations are technology dependent and are keen on keeping their agility.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 979,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/979\/C4UM18_thumbnail_518x309.jpg",
        "product_name": "An Introduction to Business Transformation",
        "skill": "Business Skills",
        "categories": [
            "Workplace Productivity"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Business transformation aims to create a more agile, innovative, and customer-focused organization that can adapt to changing market conditions and capitalize on new opportunities. Successful business transformation requires a clear vision, a well-defined strategy, and strong leadership to drive change throughout the organization. In this lesson, we will explore the key elements of business transformation and discuss best practices for implementing a successful transformation program.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "16"
    },
    {
        "id": 981,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/981\/C4U125_thumbnail_518x309.jpg",
        "product_name": "Strategies to Improve Staff Wellness",
        "skill": "Wellness",
        "categories": [
            "Workplace Wellness"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Staff wellness can be promoted by enhancing employees&rsquo; personal and professional development, implementing health care initiatives, and supporting employees suffering from mental health issues.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 982,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/982\/C4U126_thumbnail_518x309.jpg",
        "product_name": "The Brain Science to Create a High-Performing Team",
        "skill": "Business Skills",
        "categories": [
            "Workplace Productivity"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Congruent actions of senior leaders, managers, and team members in the right environment lead to a high performing team. Though it is a natural tendency to connect with others, it is important to create the right set of conditions and environment to drive an effective and consistently high-performing team. Research in neuroscience suggests that acting with precision and intention can help achieve synchrony in teams which thereby leads to improved prosocial behavior, empathy, engagement, project completions, coordination, and cooperation.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "16"
    },
    {
        "id": 983,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/983\/C4U127_thumbnail_518x309%20%281%29.jpg",
        "product_name": "Brain-Based Ways to Improve Team Performance",
        "skill": "Business Skills",
        "categories": [
            "Leading Teams",
            "Workplace Productivity"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Achieving phenomenal results by recognizing what actually works for the team and how to keep the team members motivated is one of the key responsibilities of a leader. Increasing the effectiveness of the team&rsquo;s performance through the elimination of conflicts and other challenges among teams is another important competency in a leader. This in turn reduces employee turnover and creates a culture of taking accountability and responsibility for tasks and actions. This also opens up pathways to innovation, creativity, and problem-solving. Let&rsquo;s look at how a leader can strike the right balance and apply some parts of neuroscience to bring harmony and understanding to the team.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "12"
    },
    {
        "id": 984,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/984\/C4U128_thumbnail_518x309.jpg",
        "product_name": "Equipment Safety",
        "skill": "Safety",
        "categories": [
            "Workplace Safety"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Equipment safety is an essential aspect of any workplace, particularly in industries that use heavy machinery and tools. It refers to the measures and procedures put in place to ensure the safety of workers operating equipment, as well as those who are in the immediate vicinity. Equipment safety is important to prevent accidents, injuries, and fatalities that can result from the improper use of machinery and tools. By following proper safety procedures and protocols, workers can help prevent accidents and injuries, and ensure a safe and productive workplace.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "12"
    },
    {
        "id": 985,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/985\/C4U129_thumbnail_518x309.jpg",
        "product_name": "Deferred Revenue",
        "skill": "Business Skills",
        "categories": [
            "Finance"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Deferred revenue is a common practice in businesses and is often used by companies that provide ongoing services or products over an extended period. It is a crucial accounting concept that helps businesses maintain accurate financial statements, but it is also an essential aspect of business strategy.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Business leaders<\/li>\r\n\t<li>Business consultants<\/li>\r\n\t<li>Entrepreneurs&nbsp;<\/li>\r\n\t<li>Accountants<\/li>\r\n\t<li>Anyone who is interested in learning about deferred revenue<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "12"
    },
    {
        "id": 986,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/986\/C4U130_thumbnail_518x309.jpg",
        "product_name": "Fire Safety",
        "skill": "Safety",
        "categories": [
            "Workplace Safety"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>There is a high risk of fires if employees don&#39;t know what to do or are not properly trained and instructed. Risks due to fires is more likely if they don&#39;t practice fire drills regularly. You will learn the three aspects of fire safety training: identifying fire, steps to mitigate fire, and how to prevent fire.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 987,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/987\/C4U132_thumbnail_518x309.jpg",
        "product_name": "Currency Transactions",
        "skill": "Business Skills",
        "categories": [
            "Finance"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>According to the 2019 Triennial Central Bank Survey of FX and OTC&nbsp;derivatives markets, the foreign exchange or Forex market is the largest financial market in the world &ndash; larger even than the stock market, with a daily volume of $6.6 trillion. The Forex market empowers everyone from central banks to retail investors to potentially see profits from currency fluctuations related to the global economy.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Business leaders<\/li>\r\n\t<li>Business consultants<\/li>\r\n\t<li>Entrepreneurs&nbsp;<\/li>\r\n\t<li>Accountants<\/li>\r\n\t<li>Anyone who is interested in learning about currency transactions<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 988,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/988\/C4U133_thumbnail_518x309.jpg",
        "product_name": "Influence of Interpersonal Skills on Business  Culture ",
        "skill": "Business Skills",
        "categories": [
            "Interpersonal Skills and Empathy",
            "Self Development"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>According to David Grossman&rsquo;s report, &ldquo;The Cost of Poor Communications&rdquo;, which included 400 large companies and 100,000 employees, the cost of communication barriers that arise in the workplace costs a whopping &nbsp;$62.4 million per year, per company. These numbers increase even more if we take some additional consequences into account, such as breached deadlines, mental and emotional health, retention rates, and so on and so forth. As workplaces evolve socially and technologically, interpersonal skills which help in collaboration, problem-solving, and effective decision-making, are crucial, now more than ever.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 989,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/989\/C4U134_thumbnail_518x309.jpg",
        "product_name": "An Introduction to Wellness",
        "skill": "Wellness",
        "categories": [
            "Workplace Wellness"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Wellness or feeling good physically as well as mentally, is associated with positive impacts among employees.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 990,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/990\/C4U135_thumbnail_518x309.jpg",
        "product_name": "10 Ways to Practice Self-Care at Work",
        "skill": "Wellness",
        "categories": [
            "Workplace Wellness"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Organizations can promote self-care among their employees through cultural modifications at the workplace, leadership initiatives and HR practices.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 991,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/991\/C4U137_thumbnail_518x309.jpg",
        "product_name": "How to Keep the Brain Fit for Agile Leadership",
        "skill": "Business Skills",
        "categories": [
            "Self Development"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Agile leadership endorses leaders who become the change rather than just being change evangelists. There are two key leadership competencies in agile leadership: walking the talk, and leading by example. Both of these are critical and crucial for leaders today as they are expected to communicate, commit, and collaborate. Good communication leads to self-discovery for both leader and the team which further leads to development of the individual, reflection, and learning. To draw out commitment from the team, the leader engages, inspires, and involves the team. To ensure that the team collaborates, a leader must empower, reward, recognize, and allow the team to come up with fresh ideas on which they could work together. Agile leadership works best when leaders are able to bring in fresh thinking and keep their brains fit.<\/p>\r\n\r\n<p>This training is meant for:&nbsp;<\/p>\r\n\r\n<ul>\r\n\t<li>HR leaders<\/li>\r\n\t<li>Business leaders<\/li>\r\n\t<li>Change leaders<\/li>\r\n\t<li>Business transformation leaders<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 992,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/992\/C4U138_thumbnail_518x309.jpg",
        "product_name": "Improving Your Judgment and Complex Decision-Making Skills",
        "skill": "Business Skills",
        "categories": [
            "Critical Thinking and Decision Making",
            "Self Development"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In today&#39;s complex and rapidly changing world, the ability to make sound judgments and decisions is crucial for success in both personal and professional contexts. Whether it&#39;s investing in a business or managing a team, individuals need to be able to evaluate options, weigh risks and rewards, and select the best course of action. Leaders, especially, require strong judgment and decision-making skills, to face complex and ambiguous situations that require careful evaluation of multiple factors. They need to be able to manage risk, prioritize goals, communicate effectively, and motivate their teams toward achieving their objectives. Moreover, leaders must be able to evaluate their own decisions and adapt to changing circumstances to ensure the success of their organization.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Business leaders<\/li>\r\n\t<li>Business consultants<\/li>\r\n\t<li>Entrepreneurs&nbsp;<\/li>\r\n\t<li>Trainers<\/li>\r\n\t<li>HR executives<\/li>\r\n\t<li>Anyone who is interested in learning about judgment and decision making<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 993,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/993\/C4U139_thumbnail_518x309.jpg",
        "product_name": "Examples and Process of Business Transformation ",
        "skill": "Business Skills",
        "categories": [
            "Self Development"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Business transformation refers to the process of fundamentally changing the way a company operates to improve its performance and\/or keep up with changes in its industry or the broader business environment. This can involve making significant changes to a company&#39;s strategy, processes, structure, culture, and technology to achieve its goals and remain competitive. Business transformation is often undertaken in response to disruptive events such as new technology, changes in consumer behavior, or shifts in the regulatory environment.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 994,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/994\/C4U141_thumbnail_518x309.jpg",
        "product_name": "Steps to Improve Interpersonal Communication Skills ",
        "skill": "Business Skills",
        "categories": [
            "Interpersonal Skills and Empathy",
            "Workplace Wellness"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Interpersonal communication skills involve more than just exchanging words with someone. It involves the ability to effectively convey information, ideas, and emotions to others. Good interpersonal communication skills are essential for building relationships, resolving conflicts, and achieving common goals. &nbsp;According to a CMSWire report, 97% of employees believe communication impacts their task efficiency on a daily basis.<\/p>\r\n\r\n<p>Despite being an absolute necessity, interpersonal communication is not prioritized in organizations and consequences of the same are apparent. Workplace communication statistics show that 86% of employees and executives cite the lack of effective collaboration and communication as the main cause of workplace failures. Furthermore, research carried out by McKinsey shows that well-connected teams can increase their productivity by 20 to 25%.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Business leaders<\/li>\r\n\t<li>Business consultants<\/li>\r\n\t<li>Entrepreneurs&nbsp;<\/li>\r\n\t<li>Trainers<\/li>\r\n\t<li>HR executives<\/li>\r\n\t<li>Anyone who is interested in learning about interpersonal communication&nbsp;<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 995,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/995\/C4UM19_thumbnail_518x309.jpg",
        "product_name": "Strategies to Embrace Change at Work",
        "skill": "Business Skills",
        "categories": [
            "Leading Change",
            "Workplace Productivity"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In this lesson, we will explore various approaches to help employees navigate through change and thrive in a constantly changing work environment. We will discuss the importance of a positive attitude, effective communication, and a willingness to learn and adapt to new situations in navigating change. By the end of this lesson, you will have a better understanding of how to embrace change at the workplace and become a more valuable asset to your organization.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "17"
    },
    {
        "id": 996,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/996\/C4UM20_thumbnail_518x309.jpg",
        "product_name": "Cryptography",
        "skill": "Technology",
        "categories": [
            "Modern Finance"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In today&rsquo;s generation of fast technology, it is evident that the most critical communication and confidential data sharing happens through computers, as it is considered the safest. But do you know what makes it the safest? The technology that makes it safest is called cryptography. How is this technology used for security, why is it used, and are there any types of it? Let&rsquo;s check all these in this module.&nbsp;<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1000,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1000\/C4UM27_thumbnail_518x309.jpg",
        "product_name": "Soft Skills in Business and Their Importance",
        "skill": "Business Skills",
        "categories": [
            "Business Skills",
            "Self Development"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Soft skills are personal attributes, behaviors, and traits that allow individuals to interact effectively and harmoniously with others in the workplace. They are often called &ldquo;people skills&rdquo; or &ldquo;interpersonal skills,&rdquo; They play a crucial role in building relationships, communicating effectively, and achieving personal and organizational goals.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1002,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1002\/C4UM25_thumbnail_518x309.jpg",
        "product_name": "Importance of Leadership and People Management",
        "skill": "Business Skills",
        "categories": [
            "Leading People",
            "Workplace Productivity"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The definition of leadership and the role of leaders in reforming an organization is simple to describe. However, it isn&rsquo;t easy to overstate the importance of leadership and the necessity to reach timely goals and corporate objectives. To apply leadership models to one&rsquo;s organization, one must first understand the fundamentals of leadership, its role in business transformation, and the important benefits of choosing a leadership role. In this course, we will go over all of that and more, beginning with what leadership is.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1004,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1004\/C4UM26_thumbnail_518x309.jpg",
        "product_name": "Advantages of Leading with Empathy and Authenticity",
        "skill": "Wellness",
        "categories": [
            "Workplace Wellness"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>There are a lot of disagreements on what and which skills are required to make leaders successful; thus, effective management is one of the most challenging skills to teach. The best managers always have authenticity and empathy in their management style. What is that and why it is necessary will be discussed in this course.&nbsp;<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1005,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1005\/C4UM28_thumbnail_518x309.jpg",
        "product_name": "Ways to Apply Leadership Techniques at Work",
        "skill": "Business Skills",
        "categories": [
            "Self Development"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Leadership is a crucial aspect of any workplace, as it involves guiding and motivating individuals and teams toward achieving organizational goals. Applying leadership techniques in the workplace involves utilizing various strategies and skills to inspire and influence employees to work effectively and efficiently. Leadership techniques include communication skills, goal setting, conflict resolution, delegation, motivation, and performance management. Effective leadership can increase employee satisfaction, productivity, and retention and improve organizational performance.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 1006,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1006\/C4UM33_thumbnail_518x309.jpg",
        "product_name": "Ways to Increase Creativity",
        "skill": "Business Skills",
        "categories": [
            "Innovation"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In today&rsquo;s fast-paced and ever-evolving business world, creativity has become a vital skill that can set individuals and organizations apart. Creativity fuels innovation, problem-solving, and adaptability, enabling companies to thrive in an increasingly competitive landscape. In this lesson, we will explore the significance of creativity in the workplace and how it can be fostered and harnessed to drive success. Whether you&rsquo;re a manager seeking to inspire your employees or an employee looking to tap into your creative abilities, this lesson will equip you with valuable insights and tools to embrace and harness creativity in the workplace.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "20"
    },
    {
        "id": 1007,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1007\/C4UM34_thumbnail_518x309.jpg",
        "product_name": "Gig Economy",
        "skill": "Business Skills",
        "categories": [
            "Gig Working"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In our rapidly changing world, traditional employment models are being reshaped by the rise of freelancing, independent contracting, and on-demand work. The gig economy, also known as the freelance or on-demand economy, refers to a rapidly growing employment model where individuals work independently on a temporary or project basis, often using online platforms to connect with clients or customers. This emerging trend offers both opportunities and challenges for workers and businesses alike. Throughout this lesson, we will explore the key features of the gig economy and its impact on the workforce and economy.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "20"
    },
    {
        "id": 1008,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1008\/C4UM29_thumbnail_518x309.jpg",
        "product_name": "Relationship Between Data Protection and Privacy",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Data being created and stored in organizations has amplified at an extraordinary rate, which has made securing that data increasingly important. In addition, business operations increasingly depend on data, and even a short downtime or a small amount of data loss can significantly affect a business. Today, we will see how organizations can save their data from all unwanted activities.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1009,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1009\/C4UM39_thumbnail_518x309.jpg",
        "product_name": "Microaggressions in Gender-Based Discrimination",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI at Workplace"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Despite efforts to foster equality, gender microaggressions persist in the workplace. One of the reasons for the continued gender inequality might be rooted in the fact that discrimination has transformed into subtler forms, which are more difficult to detect and hence go unreported. But this subtle gender discrimination can be as detrimental as overt discrimination.<\/p>\r\n\r\n<p>In the case of subtle gender microaggressions, females or marginalized groups tend to internalize the experience and perceive it as their own shortcomings. Hence, microaggressions might be even more stressful than overt discrimination for the target, as it negatively affects cognitive functioning, leading to higher levels of stress, anxiety, and insecurity.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "21"
    },
    {
        "id": 1010,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1010\/C4UM36_thumbnail_518x309.jpg",
        "product_name": "Continuous Learning and Curiosity",
        "skill": "Business Skills",
        "categories": [
            "Adaptability and Continuous Learning"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>As industries and technologies continue to advance, individuals need to stay up to date with the latest trends and developments in their fields. This is where continuous learning and curiosity come in as essential skills. Furthermore, the ability to approach work with a curious mindset can lead to innovative solutions and improved performance. In this lesson, we will explore the importance of continuous learning and curiosity in the workplace, discuss strategies for cultivating these traits, and examine the benefits they can bring to individuals and organizations.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1014,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1014\/C4UM30_thumbnail_518x309.jpg",
        "product_name": "Importance of Data Backup and Retention",
        "skill": "Technology",
        "categories": [
            "Technology"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In information technology, a backup, or data backup, is a copy of computer data taken and stored elsewhere so that it may be used to restore the original after a data loss event. Data retention defines persistent data and records management policies for meeting legal and business data archival requirements.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1015,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1015\/C4UM41_thumbnail_518x309.jpg",
        "product_name": "The Importance of Wellness in the Workplace",
        "skill": "Wellness",
        "categories": [
            "Workplace Wellness"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>There are several inaccurate assumptions that managers make with respect to wellness and its improvement in the workplace. Awareness is necessary about such assumptions so that any mistakes can be avoided and employees as well as organizations can reap the benefits of wellness at the workplace.&nbsp;<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "20"
    },
    {
        "id": 1016,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1016\/C4UM47_thumbnail_518x309.jpg",
        "product_name": "What Is Meant by Well-Being in the Workplace",
        "skill": "Wellness",
        "categories": [
            "Workplace Wellness"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Well-being in the workplace refers to a situation where employees feel physically and mentally well to contribute to their maximal potential at work.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1017,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1017\/C4UM43_thumbnail_518x309.jpg",
        "product_name": "Consolidating Subsidiaries",
        "skill": "Business Skills",
        "categories": [
            "Finance"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>According to a Deloitte report, 70% of companies with international operations view consolidation as a critical accounting function. The global revenue for mergers and acquisitions (M&amp;A) amounted to $2.2 trillion in 2020, indicating the increasing trend of businesses acquiring and consolidating with other companies.<\/p>\r\n\r\n<p>Effective consolidation management can result in a range of benefits, such as streamlined financial reporting processes, reduced accounting costs, and improved efficiency. Conversely, poor consolidation management can lead to inaccuracies in financial reporting, compliance issues, and reputational damage.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Business leaders<\/li>\r\n\t<li>Business consultants<\/li>\r\n\t<li>Entrepreneurs&nbsp;<\/li>\r\n\t<li>Trainers<\/li>\r\n\t<li>HR executives<\/li>\r\n\t<li>Anyone who is interested in learning about subsidiaries<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1018,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1018\/C4U131_thumbnail_518x309.jpg",
        "product_name": "Culture of Self-Care in the Workplace ",
        "skill": "Wellness",
        "categories": [
            "Workplace Wellness"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Self-care by employees has a positive impact on businesses and therefore any hurdles that impede self-care at work should be addressed.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 1019,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1019\/C4U136_thumbnail_518x309.jpg",
        "product_name": "Basic Digital Skills",
        "skill": "Technology",
        "categories": [
            "Technology"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>With the rise of digital transformation and technology, having a basic digital literacy is essential for all types of jobs, regardless of the industry. To stay competitive and be successful in the workplace, enhancing your digital skills should be a top priority.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 1020,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1020\/C4U140_thumbnail_518x309.jpg",
        "product_name": "How to Improve Workplace Wellness",
        "skill": "Wellness",
        "categories": [
            "Workplace Wellness"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Wellness at the workplace can be improved by improving the ergonomics and introducing cultural changes and training programs for leaders in practices around wellness.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 1021,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1021\/C4U142_thumbnail_518x309.jpg",
        "product_name": "Understanding Gender Inequality",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI at Workplace"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Gender equality is the right of both sexes to enjoy the same opportunities, rights, and obligations in all spheres of life, including equal power and influence, equal access to education and the opportunity to develop personal ambitions, interests, and talents. However, gender inequality is still a reality in many parts of the world. Women often face greater barriers to education, employment, and leadership compared to men. It is important to address these issues and promote gender equality to ensure a better and more equitable future.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 1022,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1022\/C4U143_thumbnail_518x309.jpg",
        "product_name": "Creating an Inclusive Workplace Culture",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI at Workplace"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Creating inclusive workplace cultures has become a significant focus for many organizations. In 2021, the proportion of women in senior management globally grew to 31% from 29% in 2019, the highest number ever recorded. While these numbers indicate significant growth, these are devastatingly low when we consider that women make up 47% of the workforce. Gender-inclusive workplaces promote diversity, improve employee satisfaction and retention, and are associated with better financial performance. However, despite the benefits of creating gender-inclusive workplaces, many organizations still face challenges.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Business leaders<\/li>\r\n\t<li>Business consultants<\/li>\r\n\t<li>Entrepreneurs&nbsp;<\/li>\r\n\t<li>Trainers<\/li>\r\n\t<li>HR executives<\/li>\r\n\t<li>Anyone who is interested in learning about inclusivity<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "16"
    },
    {
        "id": 1023,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1023\/C4U144_thumbnail_518x309.jpg",
        "product_name": "Empathy-Building Exercises to Improve Communication and Relationships",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI at Workplace",
            "Interpersonal Effectiveness",
            "Interpersonal Skills and Empathy"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>According to Businessolver&rsquo;s State of Workplace Empathy study, 93 percent of employees reported they would stay with an empathetic employer, and 82 percent of employees would leave their position to work for a more empathetic organization. Empathy is not just a good soft skill to have, it impacts your ability to become a good leader as well as a colleague. These aren&rsquo;t merely hypotheticals. According to Forbes, empathy has been the catalyst to improve engagement, innovation, and inclusivity in organizations. The numbers across these three verticals are more than twice as compared to those of apathetic organizations. Moreover, an empathetic workplace also leads to increased employee retention, a stronger ability to recruit top talent, and greater employee satisfaction.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Business leaders<\/li>\r\n\t<li>Business consultants<\/li>\r\n\t<li>Entrepreneurs&nbsp;<\/li>\r\n\t<li>Trainers<\/li>\r\n\t<li>HR executives<\/li>\r\n\t<li>Anyone interested in learning about empathy<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "19"
    },
    {
        "id": 1024,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1024\/C4U145_thumbnail_518x309.jpg",
        "product_name": "Gender Stereotypes in the Workplace",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI at Workplace"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Each one of us has some biases, conscious or unconscious. However, issues arise when we do not do enough to prevent these biases from affecting our day-to-day work. One such bias is favoring a particular gender over the other or stereotyping a gender. In this course, you will come across common mistakes that we often make at our workplace by stereotyping genders. These can have negative effects both on the workplace and its workforce.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1025,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1025\/C4U148_thumbnail_518x309.jpg",
        "product_name": "Judgment in Critical Thinking",
        "skill": "Business Skills",
        "categories": [
            "Critical Thinking and Decision Making"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Critical thinking is a logical, deliberate, and systematic way of thinking. Before arriving at a clear, rational, and evidence-based judgment, critical thinkers typically analyze and evaluate the facts. In an organization, the ability to make sound judgments is critical for research, problem-solving, and complex decision-making. Critical thinkers question assumptions and biases in order to gain a better understanding. Critical thinking judgment is primarily used to counteract cognitive biases and make accurate decisions. To assess the quality of our judgment, we must ensure that we have gathered relevant evidence, weighed it, organized it, presented appropriate evidence to support the points made, and organized our answer coherently and logically.&nbsp;<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Business leaders<\/li>\r\n\t<li>Business consultants<\/li>\r\n\t<li>Entrepreneurs<\/li>\r\n\t<li>Human Resource heads<\/li>\r\n\t<li>Learning and Development personnel<\/li>\r\n\t<li>Anyone interested in learning about judgment in critical thinking<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 1072,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1072\/C4UM38_thumbnail_518x309.jpg",
        "product_name": "An Introduction to DEI",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI at Workplace"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Companies are recognizing the importance of diversity and inclusion in the workplace and are making efforts to ensure that everyone feels included, regardless of their race, gender, age, or background. By doing this, they are creating a culture of acceptance and respect, which can go a long way in fostering a positive work environment, especially for women.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1073,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1073\/C4UM44_thumbnail_518x309.jpg",
        "product_name": "Gender and Innovation",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI at Workplace"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Gender and innovation are closely intertwined. The lack of gender diversity in innovation teams and leadership positions contributes to a lack of diverse perspectives and limits the potential for breakthrough ideas. Research has shown that companies with diverse workforces are more likely to produce innovative products and services, yet women continue to be underrepresented in key innovation roles such as research and development, product design, and leadership positions. This not only limits women&#39;s career opportunities but also contributes to the perpetuation of gender stereotypes and biases that can hinder innovation and progress. Promoting greater gender diversity and inclusion in the workplace is therefore essential to unlocking the full potential of innovation.&nbsp;<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1076,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1076\/Track_38_L1_thumbnail_518x309.jpg",
        "product_name": "POSH",
        "skill": "Compliance",
        "categories": [
            "POSH"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The objective of this course is to create awareness about what sexual harassment is and isn&rsquo;t and to empower individuals to speak up against sexual harassment in the workplace. By identifying unacceptable behaviors deemed as sexual harassment, we can create better workplaces for all.&nbsp;In this course, we will also briefly touch upon gender issues, which is where most sexual harassment issues originate.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>All individuals who work in an organization<\/li>\r\n\t<li>Individuals who need help identifying whether they are being sexually harassed and what steps can they take to seek redressal&nbsp;<\/li>\r\n\t<li>Individuals may be unknowingly engaging in behavior that is considered as sexual harassment.&nbsp;<\/li>\r\n\t<li>Individuals who play a key role in curbing sexual harassment through timely reporting such as: a supervisor or a designated single point of contact for reporting&nbsp;such issues<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n\r\n<ul>\r\n\t<li>Learn the definition of sexual harassment<\/li>\r\n\t<li>Identify what sexual harassment is and isn&rsquo;t through scenarios<\/li>\r\n\t<li>Understand where and how workplace sexual harassment can occur<\/li>\r\n\t<li>Identify the steps to take if you are a victim of sexual harassment<\/li>\r\n\t<li>Understand the correct role of a supervisor, in case of a formal complaint<\/li>\r\n<\/ul>\r\n",
        "duration": "15"
    },
    {
        "id": 1078,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1078\/Track_21_L1_thumbnail_518x309.jpg",
        "product_name": "Becoming a Good Business Writer",
        "skill": "Business Skills",
        "categories": [
            "Business Communication Skills",
            "Business Writing"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Written communications are a necessary part of a manager&rsquo;s daily work. Whether responding to emails, composing performance reviews for team members, editing an industry report, or crafting a letter to a client, you probably spend a lot of time on writing. For some people, this work comes naturally, but for others, it can be a chore. Becoming a strong writer takes time and practice. But the benefits are worth the effort. As you improve, you&rsquo;ll be able to structure and &ldquo;sell&rdquo; your ideas more easily and your messages will be better received. Let&rsquo;s look at some fundamental guidelines you can use to make your writing more powerful and effective.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1079,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1079\/C4UM21_thumbnail_518x309.jpg",
        "product_name": "Blockchain Revolution for Enterprises",
        "skill": "Technology",
        "categories": [
            "Modern Finance"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Blockchain technology has revolutionized various industries, from finance to supply chain management, with its decentralized and secure approach to data management. The distributed ledger system offers transparency, trust, and immutability, making it an attractive option for enterprises seeking to improve their processes and increase efficiency. The blockchain revolution is underway, and its potential applications continue to expand as more businesses adopt this transformative technology.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1080,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1080\/C4UM24_thumbnail_518x309.jpg",
        "product_name": "Consequences of Actions",
        "skill": "Wellness",
        "categories": [
            "Workplace Wellness"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Business transformation aims to create a more agile, innovative, and Impulsive decisions at the workplace can have adverse consequences such as failure of projects and discontent among employees. This course will help you recognize and combat impulsivity.&nbsp;<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1081,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1081\/C4UM23_thumbnail_518x309.jpg",
        "product_name": "Data Analytics for Finance",
        "skill": "Technology",
        "categories": [
            "Modern Finance"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>New technological advancements and the potential of insights from big data make analytics more important than ever. Today, organizations are prone to fall behind if they are not walking alongside the latest technology. Modern business organizations require timely information and insights to make crucial decisions. Organizations require practical financial planning and forecasting to remain competitive. Financial data analytics is designed to help organizations achieve these requirements &ndash; &nbsp;and we will learn how in this module.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1082,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1082\/C4UM22_thumbnail_518x309.jpg",
        "product_name": "Data Science and Engineering",
        "skill": "Technology",
        "categories": [
            "Technology"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The combination of data science and engineering enables organizations to make data-driven decisions and develop data-driven products and services. Data science and engineering are critical in today&rsquo;s information age, where the abundance of data presents opportunities and challenges for organizations looking to leverage data to gain a competitive advantage.<\/p>\r\n\r\n<p>This training is meant for:<\/p>\r\n\r\n<ul>\r\n\t<li>Anyone<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "16"
    },
    {
        "id": 1083,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1083\/Track_27_L1_thumbnail_518x309.jpg",
        "product_name": "Courageous Conversations on Race",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "Courageous Conversations"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Courage is the ability and willingness to act in spite of fear. Many of us avoid talking about bias, racism, and white privilege because we are afraid. We are afraid of not knowing what to say; afraid of being judged, or afraid of the change these conversations may produce. To have a courageous conversation about race is to engage in necessary dialogue despite fear.<\/p>\r\n\r\n<p>Authentic conversations are the first step toward personal awakening and creating an environment where meaningful change can occur. Fear and anger are common examples of emotional feedback that can arise when faced with unfamiliar or uncomfortable topics. Finding the courage to acknowledge those emotions is the first step. Engaging in open, constructive dialogue with people who may not share your views nor your life experiences is the way forward.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1084,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1084\/Track_27_L4_thumbnail_518x309.jpg",
        "product_name": "Institutional Strategies to Combat Racism",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "Courageous Conversations"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The simplest definition of diversity is &ldquo;a range or variety of different things&rdquo;. In the context of D&amp;I, diversity refers to &ldquo;the traits and characteristics that make people unique&rdquo; which include (but are not limited to) race, ethnicity, age, gender, socio-economic class, ability, sexual orientation, and nationality. The summation of these variables combine to create life experiences which shape how a person solves problems, creates, and assesses risk. These are examples of &ldquo;diversity of thinking&rdquo; which yields direct and indirect benefits that are foundational to the business case for investments in D&amp;I initiatives.<\/p>\r\n\r\n<p>An inclusive environment is one in which &ldquo;all individuals are treated fairly and respectfully, feel welcome, have equal access to opportunities and resources, and can contribute fully to the organization&rsquo;s success.&rdquo;<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1085,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1085\/Track_27_L3_thumbnail_518x309.jpg",
        "product_name": "Rethinking the Business Case for Diversity and Inclusion",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "Courageous Conversations"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The simplest definition of diversity is &ldquo;a range or variety of different things&rdquo;. In the context of D&amp;I, diversity refers to &ldquo;the traits and characteristics that make people unique&rdquo; which include (but are not limited to) race, ethnicity, age, gender, socio-economic class, ability, sexual orientation, and nationality. The summation of these variables combine to create life experiences which shape how a person solves problems, creates, and assesses risk. These are examples of &ldquo;diversity of thinking&rdquo; which yields direct and indirect benefits that are foundational to the business case for investments in D&amp;I initiatives.<\/p>\r\n\r\n<p>An inclusive environment is one in which &ldquo;all individuals are treated fairly and respectfully, feel welcome, have equal access to opportunities and resources, and can contribute fully to the organization&rsquo;s success.&rdquo;<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1086,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1086\/Track_27_L2_thumbnail_518x309.jpg",
        "product_name": "The Macro Effects of Microaggressions",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI at Workplace"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Microaggressions are one aspect on the spectrum of racism. They are interpersonal, everyday occurrences that have a significant impact. When faced with the need to eradicate racism in our society, it can feel like an overwhelming task. Understanding the macro effects of microaggressions, and how to address them, is a great place to start.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1091,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1091\/Track_41_L3_thumbnail_518x309.jpg",
        "product_name": "How to Conduct Virtual Interview",
        "skill": "Business Skills",
        "categories": [
            "Adapting to New Workstyle"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The virtual interview can be a challenging and difficult process if you don&rsquo;t prepare properly. You may face many challenges, such as technological, ambience related issues. However, to convene a successful interview, it is important to how to overcome these challenges. Branding your company is also one the challenges you may face when conducting virtual interview. Home setup throws various set of challenges, which one must overcome to have successful virtual interview. In this course, you will learn to overcome the challenges faced in conducting a successful virtual interview.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 1092,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1092\/Track_41_L2_thumbnail_518x309.jpg",
        "product_name": "Key Skills of Effective Virtual Leadership",
        "skill": "Business Skills",
        "categories": [
            "Leading People"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Being a successful virtual leader takes a lot more energy than a face-to-face leader. It is also important to keep each employee engaged in a &ldquo;high-touch&rdquo; environment. Leadership qualities such as communication, coaching, feedback, and professional development are important, yet it is how you deliver these qualities can be challenging. Virtual life has its pros and cons, hence it is important to have strong communication skills through effective virtual meetings that allow all employees to contribute.<\/p>\r\n\r\n<p>Tn this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 1093,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1093\/DT03_thumbnail_518x309.jpg",
        "product_name": "Transformation of Customer Needs, Workforce Needs, and Operations",
        "skill": "Technology",
        "categories": [
            "Digital Transformation"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Digital technologies are an undeniable part of today&rsquo;s global economy. Digital organizations, like Amazon, have set the standard for the ideal customer experience, and all industries will need to embrace digital technology in order to satisfy customer needs and expectations. Digital Transformation can be defined as Business Transformation enabled through digital technologies, such as mobile, cloud computing, artificial intelligence (AI) and machine learning, robotics, data analytics, the Internet of Things, and Virtual and Augmented Reality. Within the workplace, as human work shifts to a more knowledge-based, continual learning model, the flexible and agile use of technology will be critical in attracting and retaining top talent. AI, RPA, data analysis tools, and machine learning are speeding repetitive tasks so that human workers can concentrate on activities that are less redundant and more productive and profitable. Organizations that focus on building company-wide cultures that embrace the agile, flexible world of digital technology will reap the benefits as they learn and grow.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 1094,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1094\/DT04_thumbnail_518x309.jpg",
        "product_name": "Transformation of Technology, Security, and Enterprise Architecture",
        "skill": "Technology",
        "categories": [
            "Digital Transformation"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Organizations today have to adapt a digital strategy to stay aligned with the transforming market, business models, customer needs, and overall operations. In this course, we will review three aspects of digital transformation.<\/p>\r\n\r\n<p>The first aspect is the transformation of the digital technology. Legacy systems over time become operational risks for a business. These systems are not necessarily non-functional but prove to be a drain on costs and increase the vulnerability to security threats. Additionally, they prevent businesses from being truly agile in a dynamic marketplace.<\/p>\r\n\r\n<p>The second aspect is the transformation of enterprise security. With the proliferation of new digital technologies, also comes the question of enhancing the existing security protocols and creating newer ones.<\/p>\r\n\r\n<p>The third aspect is transformation of enterprise architecture. With the transformation of technology and security, enterprise architecture itself is undergoing a huge transformation.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1095,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1095\/Track_37_L3_thumbnail_518x309.jpg",
        "product_name": "Transitioning to Sales Management",
        "skill": "Business Skills",
        "categories": [
            "Sales Leadership"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Transitioning from a sales role to a sales manager role requires a mindset shift that is easy to ignore. Sales as a function is so hands on and requires so much commitment to daily hustle and reaching goals that most sales people find it difficult to condition themselves to think from the management perspective. While as a sales person, you had the drive and skills to succeed in closing deals and contributing to organizational growth, a sales manager position requires very different competencies.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 1096,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1096\/Track_37_L2_thumbnail_518x309.jpg",
        "product_name": "Effective Sales Presentation Skills for Small Groups",
        "skill": "Business Skills",
        "categories": [
            "Building a Strong Sales Team",
            "Effective Presentations",
            "Sales Leadership"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In today&rsquo;s dynamic business world, getting a client&rsquo;s attention and time is invaluable. Future conversations and further engagement with your organization depend on how effective your first presentation is. Especially when it comes to commercial sales, this step is crucial as it is the foundation of a typically long cycle that commercial selling requires. In addition, handling presentations for a small group has its dos and don&rsquo;ts that will stand you in good stead as you take this crucial and exciting first step with a client.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 1097,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1097\/Track_36_L1_thumbnail_518x309.jpg",
        "product_name": "Mastering the Cold Calling Process",
        "skill": "Business Skills",
        "categories": [
            "Sales Effectiveness"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The success of a product or services organization is dependent on how effectively their sales team sells. The ability of a company&#39;s sales reps to &ldquo;win&rdquo; at each stage of the selling process, and ultimately earn the business on the right terms and in the right timeframe, determines the sales team&rsquo;s effectiveness. In this course, you will get familiarized with the importance of cold calling, its key principles and the tips and trick of mastering the subject.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1098,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1098\/Track_23_L5_thumbnail_518x309.jpg",
        "product_name": "How to Change a Culture to Encourage Risk Taking",
        "skill": "Business Skills",
        "categories": [
            "Business Strategy"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The old saying, &ldquo;greater the risk, greater the rewards,&rdquo; has probably rung true for many of us in different stages and areas of life. However, most people still tend to avoid risks when possible, because they think that inaction is often safer than action. The belief is that taking a risk is &ldquo;exposing oneself to the possibility of loss or injury in the hopes of achieving a gain or reward.&rdquo; But the legendary boxer Muhammed Ali stated &ldquo;He who is not courageous enough to take risks will accomplish nothing in life.&rdquo; In this course, you will learn to mitigate risks and start taking calculated risks.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1136,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1136\/Track_41_L1_thumbnail_518x309.jpg",
        "product_name": "Agility in Times of Change",
        "skill": "Business Skills",
        "categories": [
            "Adapting to New Workstyle"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Leaders must focus on developing their ability to be more agile and strategic &ndash; within an environment of constant change. They should explore tools that can be leveraged to achieve the goal. Good agile leaders make sure that their teams identify the desired long-term goals, and then work backward from these to identify all the conditions that must be in place for the goals to occur.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "12"
    },
    {
        "id": 1137,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1137\/DT01_thumbnail_518x309.jpg",
        "product_name": "An Introduction to Digital Transformation",
        "skill": "Technology",
        "categories": [
            "Digital Transformation"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>To better understand today&rsquo;s digital age, it&rsquo;s important to look back at the Industrial Revolution. As Steve Jobs said, &ldquo;You can&rsquo;t connect the dots looking forward, you can only connect them looking backward.&rdquo; Just as the steam engine and other machines transformed the 18th-century economy, digital technologies are changing our world economy, business practices, customer expectations, and societal norms&mdash;and will continue to do so for the foreseeable future. And while it&rsquo;s impossible to predict the exact changes that lie ahead, it&rsquo;s possible to predict who will succeed: agile organizations who are able to quickly take advantage of new opportunities by applying digital technologies.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1138,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1138\/Track_27_L5_thumbnail_518x309.jpg",
        "product_name": "Attracting and Retaining Black Talent",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "Courageous Conversations"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>First and most importantly, it is the just and moral course of action. Centuries of exploitation, oppression, and disenfranchisement of the Black community has resulted in predominantly white leadership in most organizations. Companies must intentionally disrupt the systemic barriers in place that maintain the biased (prejudiced, race-based) status quo in order to create more inclusive and sustainable organizations that better serve the community.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1139,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1139\/DT05_thumbnail_518x309.jpg",
        "product_name": "Organization Changes Needed For Internal Digital Transformation",
        "skill": "Technology",
        "categories": [
            "Digital Transformation"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Digital transformation is about being more effective and efficient. It is a rejuvenating process that implements digital technologies to improve. It does not only use technology to transform an existing service to digital service but also helps to make the existing service meaningfully improved. Digital transformation involves people transformation, organizational structural change, and organizational cultural change. Today, technology has become a part of our lives in an unprecedented way. In addition, the pace of technology change has gone up significantly and every year, newer technologies replace older, outdated ones. The need for existing skillsets to be updated has been changing in a digital enterprise and existing skills are getting outdated fast. This leads to a demand for people transformation to result in adapt to changing needs. With digital transformation, it is not only just technology-related evolution that is happening. Organizational cultures too need to take a hard look at themselves and evolve.<\/p>\r\n\r\n<p>One of the key challenges that digital transformation presents is the fine balance between culture and technology. Some organizations are more open to change whereas others have in-built resistance to change. Culture therefore can be one of the biggest stumbling blocks to enable digital transformation.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1163,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1163\/C4U351_thumbnail_518x309.jpg",
        "product_name": "Data Protection and Privacy",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In an era where digital information is a valuable asset, understanding data privacy and security is more crucial than ever. This course delves into the fundamental principles and practices required to protect sensitive information from unauthorized access and breaches. You will explore the latest techniques for securing data and develop the skills needed to respond effectively to security incidents. Whether you&rsquo;re a professional looking to enhance your expertise or simply interested in safeguarding your personal information, this course provides essential insights and practical tools for navigating the complexities of data privacy and security in today&rsquo;s interconnected world.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1166,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1166\/C4U352_thumbnail_518x309.jpg",
        "product_name": "A Deep Dive Into Phishing",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Welcome to &quot; A Deep Dive Into Phishing,&quot; a comprehensive course designed to equip you with the essential knowledge and skills to protect yourself and your organization from phishing attacks. Phishing is a type of cyber-attack where malicious actors deceive individuals into providing sensitive information, such as usernames, passwords, and credit card details, by masquerading as a trustworthy entity in digital communications. As one of the most common forms of cybercrime, phishing poses significant threats to both individuals and organizations, leading to financial loss, identity theft, and compromised security.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1170,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1170\/C4U353_thumbnail_518x309%20%282%29.jpg",
        "product_name": "Cybersecurity Essentials",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In today&#39;s interconnected digital landscape, cybersecurity has become an essential skill for everyone. This course is designed to provide you with the foundational knowledge and practical tools needed to protect yourself and your organization from cyber threats. By the end of this course, you will be equipped with the skills to defend against digital dangers, ensuring your information remains secure in the ever-evolving digital age. Whether you&#39;re looking to enhance your cybersecurity knowledge or aiming to protect personal data, this course will empower you to confidently manage and mitigate cyber risks.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1171,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1171\/C4U354_thumbnail_518x309.jpg",
        "product_name": "Security Awareness for IT Professionals",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>This course will equip you with comprehensive knowledge and practical skills to become a responsible and security-conscious employee. You will learn how to safeguard your company&#39;s digital assets, understand the best practices for data protection, recognize potential security threats, and respond effectively to various cybersecurity challenges. By the end of the course, you will be well-prepared to contribute to your organization&#39;s overall security strategy.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1172,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1172\/C4U355_thumbnail_518x309.jpg",
        "product_name": "The Basics of GDPR",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In this engaging and comprehensive course, you&#39;ll dive deep into the General Data Protection Regulation, mastering its core principles, exploring the rights it grants to individuals, and uncovering the essential obligations for data controllers and processors. Get ready to enhance your knowledge and skills, ensuring compliance and fostering trust in today&rsquo;s data-driven world!<\/p>\r\n\r\n<p>In this course, you will:&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1174,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1174\/C4U356_thumbnail_518x309.jpg",
        "product_name": "AI for IT Operations",
        "skill": "Technology",
        "categories": [
            "AI"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In this course, you&#39;ll explore how AI can transform IT operations. Discover how AI anticipates problems before they occur, streamlines intricate processes, and fortifies security measures.&nbsp;<\/p>\r\n\r\n<p>You will cover predictive maintenance, anomaly detection, intelligent automation, and AI-enhanced security. By the end of this course, you&#39;ll be equipped with the knowledge to innovate and elevate your IT infrastructure using AI.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1176,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1176\/C4U357_thumbnail_518x309.jpg",
        "product_name": "The Interrelation Between Judgment and Decision-Making",
        "skill": "Business Skills",
        "categories": [
            "Critical Thinking and Decision Making",
            "Judgment and Complex Decision-Making"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The importance of judgment and decision-making skills in the workplace cannot be overstated. A study by the Center for Creative Leadership found that 86% of executives believe that ineffective decision-making is the biggest obstacle to success in their organizations.&nbsp;&nbsp;<\/p>\r\n\r\n<p>The interrelation between judgment and decision-making is an essential area of study that explores how individuals make decisions in complex and ambiguous situations and how their judgment impacts the outcome of their decisions. Understanding this relationship can help individuals and organizations make better decisions, mitigate risks, and achieve their goals.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1178,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1178\/C4U358_thumbnail_518x309.jpg",
        "product_name": "An Introduction to Creative Thinking",
        "skill": "Business Skills",
        "categories": [
            "Ability to Think Creatively"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In today&#39;s rapidly evolving and competitive business landscape, the ability to think creatively has become more crucial than ever. According to a study conducted by the World Economic Forum, creative thinking will be one of the top three most important job skills by 2025. Employers are increasingly seeking individuals who can generate innovative ideas and adapt to new challenges.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1179,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1179\/C4U359_thumbnail_518x309.jpg",
        "product_name": "Relationship Between Authentic Leadership and Empathy",
        "skill": "Business Skills",
        "categories": [
            "Leadership and Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In the realm of leadership, the dynamics have shifted from a time when hard skills took center stage, overshadowing the significance of softer, more human-centric qualities. Empathy, once considered a weakness or distraction to rational decision-making, is now recognized as a vital skill for effective leadership in our constantly evolving world. Extensive literature research on global leadership studies over the past decade has consistently acknowledged empathy as a crucial attribute for successful leaders.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;&nbsp;<\/p>\r\n",
        "duration": "20"
    },
    {
        "id": 1180,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1180\/C4U360_thumbnail_518x309.jpg",
        "product_name": "Strategies to Improve Empathetic Skills",
        "skill": "Business Skills",
        "categories": [
            "Interpersonal Skills and Empathy"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Empathetic skills enable people to comprehend and relate to others on a deeper level, making them crucial in the workplace. These skills entail paying attention to what coworkers are saying, identifying, and controlling your emotions, and taking other viewpoints into account. In the workplace, empathy encourages supportive and inclusive environments, improves communication, and helps develop strong connections.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1181,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1181\/C4U361_thumbnail_518x309.jpg",
        "product_name": "Anti-Discrimination Commitment",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI at Workplace"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Addressing diversity and inclusion is crucial, and neglecting this topic completely is a significant oversight. Merely relying on generic statements can come across as insincere. To genuinely communicate your dedication to anti-discrimination policies, it is important to be authentic. Demonstrating a sincere commitment to diversity and inclusion will greatly increase your chances of attracting talented individuals from underrepresented groups. By holding individual employees accountable for exemplifying inclusive behaviors and actively addressing bias, and by including these responsibilities alongside tasks such as assessing the competition, it becomes evident that the company takes its diversity, equity, and inclusion (DEI) policies seriously.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1182,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1182\/C4U362_thumbnail_518x309.jpg",
        "product_name": "Intercompany Transactions",
        "skill": "Business Skills",
        "categories": [
            "Finance and Accounting"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Intercompany transactions are a crucial aspect of modern business, with a significant impact on the global economy. The Tax Foundation estimates that intercompany transactions account for approximately one-third of all cross-border trade. Understanding the importance of intercompany transactions, as well as their associated statistics, is essential for companies to effectively manage financial reporting, tax optimization, and legal compliance. By developing robust policies and procedures for intercompany transactions, companies can optimize the use of resources, reduce costs, and maximize their benefits.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1183,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1183\/C4U363_thumbnail_518x309.jpg",
        "product_name": "How to Effectively Grow Your Business Network Using Online and Offline Methods",
        "skill": "Business Skills",
        "categories": [
            "Building Online and Offline Business Networks",
            "Business Skills"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In today&#39;s highly competitive business landscape, building and maintaining a strong network is the key to success. While traditional networking methods such as attending events and meeting people in person have long been effective, the rise of digital technology has introduced a whole new world of opportunities for networking online. Recent statistics demonstrate the importance of both online and offline networking methods for building strong business relationships.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1184,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1184\/C4U364_thumbnail_518x309.jpg",
        "product_name": "Developing Judgment and Complex Decision-Making Skills",
        "skill": "Business Skills",
        "categories": [
            "Judgment and Complex Decision-Making"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In situations where there are dilemmas and critical problems, there are complex decision-making processes involved. These decisions require the ability and mental tools to analyze and come to a judgment with sufficient data. Arriving at a judgment and forming subjective opinions require evaluation and prioritization of the factors involved.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1186,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1186\/C4U365_thumbnail_518x309.jpg",
        "product_name": "Leadership Techniques for Success",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader",
            "Leadership"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Effective leaders can optimize productivity, streamline processes, and make strategic decisions that positively impact an organization&#39;s bottom line. A study published in the Harvard Business Review found that employees working under effective leaders are 70% more likely to be engaged and committed to their work. These numbers become more poignant when we consider Gallup&#39;s State of the Global Workplace report, which states that only 15% of employees worldwide are engaged in their jobs. The impact of strong leadership is undeniable.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;&nbsp;<\/p>\r\n",
        "duration": "25"
    },
    {
        "id": 1188,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1188\/C4U366_thumbnail_518x309.jpg",
        "product_name": "Sexual Harassment Prevention Training: California Specific",
        "skill": "Business Skills",
        "categories": [
            "Respectful Workplace-DEI",
            "Workplace Harassment"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In recent years, addressing sexual harassment in the workplace has become crucial for fostering diversity, inclusion, and long-term business success. Organizations with clear policies against sexual harassment are more likely to achieve these goals. This course provides a comprehensive understanding of what constitutes sexual harassment and outlines procedures for addressing it, in accordance with California laws and regulations.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1189,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1189\/C4U367_thumbnail_518x309.jpg",
        "product_name": "Introduction to Online and Offline Business Networks",
        "skill": "Business Skills",
        "categories": [
            "Building Online and Offline Business Networks"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Networking is considered one of the best ways to showcase business and the easiest way of marketing. Building business networks helps get to know like-minded people and gives an edge to the business and career. There are various platforms for online networking and offline networking today that enrich our business network and opportunities.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1192,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1192\/C4U368_thumbnail_518x309.jpg",
        "product_name": "Sales and Procurement Practices",
        "skill": "Compliance",
        "categories": [
            "Contractor training"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Effective sales practices are critical to driving revenue growth, while effective procurement practices are critical to controlling costs and ensuring the timely delivery of goods and services. When the sales team is successful in generating new business, the procurement team must be able to secure the goods and services required to fulfill customer orders. In turn, when the procurement team is successful in securing goods and services at a competitive price and with minimal risk, the sales team can offer those goods and services to customers at a competitive price and with a high level of quality and service.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1194,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1194\/C4U369_thumbnail_518x309.jpg",
        "product_name": "Five Key Elements of Successful Change Management",
        "skill": "Business Skills",
        "categories": [
            "Leading Change",
            "Managing Change"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Change is constant in today&#39;s fast-paced business environment. Whether it&#39;s adapting to the latest technology, responding to competitive pressures, or addressing customer needs, organizations must manage change effectively to remain successful. To successfully manage change, you must have a deep understanding of the elements of the change process &ndash; vision, skills, incentives, resources, and action plans.&nbsp;<\/p>\r\n\r\n<p>In this course, you will:&nbsp;&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1196,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1196\/C4U370_thumbnail_518x309.jpg",
        "product_name": "Effective Management of Software Licenses and Compliance",
        "skill": "Compliance",
        "categories": [
            "Software Usage and Compliance"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In this course, you&#39;ll learn to manage your business&#39;s software licenses effectively, ensuring legal compliance and avoiding misuse. By the end, you&#39;ll have the skills to handle software compliance and protect your business from legal and financial risks.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;<\/p>\r\n",
        "duration": "20"
    },
    {
        "id": 1197,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1197\/C4U371_thumbnail_518x309.jpg",
        "product_name": "Exploring and Improving Creative Thinking Skills",
        "skill": "Business Skills",
        "categories": [
            "Ability to Think Creatively"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Creative thinking skills are highly sought after by employers across various industries. The job market is evolving, and creative thinking skills are in high demand. The World Economic Forum&#39;s report highlights that creativity and complex problem-solving are among the top three skills required for workplace success by 2025. As automation replaces routine tasks, the ability to think creatively becomes a sought-after skill for human professionals.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1198,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1198\/C4U372_thumbnail_518x309.jpg",
        "product_name": "Derivatives",
        "skill": "Business Skills",
        "categories": [
            "Finance and Accounting"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Derivatives have experienced explosive growth in recent years. In the United States, the number of options contracts traded on exchanges has grown from 1.5 billion in 2000 to over 6 billion in 2020, according to the Options Clearing Corporation. The increasing popularity and complexity of derivatives have made them an essential part of modern finance. However, their complexity and potential risks cannot be ignored. A solid understanding of derivatives and their applications is crucial for investors and financial professionals alike, as it can help manage risk and avoid losses.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1199,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1199\/C4U373_thumbnail_518x309.jpg",
        "product_name": "Differences Between Online and Offline Business Networks",
        "skill": "Business Skills",
        "categories": [
            "Building Online and Offline Business Networks"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Many new businesses are being established because of the availability of various platforms through which they can reach customers &ndash; whether online or offline. According to a survey by HubSpot in 2021, 67% of respondents said they networked virtually in the past year, while 33% said they networked in person. Although offline networking took a backseat for a couple of years during COVID-19, both online and offline networking have their own set of strengths. Businesses must evaluate their target market and business model to determine which approach is best for them.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;&nbsp;<\/p>\r\n",
        "duration": "20"
    },
    {
        "id": 1201,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1201\/C4U375_thumbnail_518x309.jpg",
        "product_name": "Impact of Resilience in Business",
        "skill": "Business Skills",
        "categories": [
            "Resilience in Business"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>As markets evolve, technologies advance, and unforeseen challenges arise, organizations must possess the ability to adapt, recover, and thrive in the face of adversity. According to a survey conducted by Deloitte, 60% of executives believe that resilience is one of the top three leadership traits required to succeed in an increasingly complex business environment. Resilience allows businesses to withstand and recover from disruptions, shocks, and setbacks while maintaining their core functions, operations, and value creation. It gives them the ability to bounce back stronger, innovate, and seize opportunities even in the most challenging circumstances.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1202,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1202\/C4U374_thumbnail_518x309.jpg",
        "product_name": "Dealing with Environmental Change and Uncertainty",
        "skill": "Business Skills",
        "categories": [
            "Lead Through an Environment of Change and Uncertainty",
            "Leading Change"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In today&#39;s dynamic and unpredictable business landscape, the need to effectively deal with environmental change and uncertainty has never been more evident. In the face of uncertainties, businesses need to prioritize planning and preparation to be better equipped to navigate disruption and emerge stronger.<\/p>\r\n\r\n<p>Steering a business through a period of uncertainty requires making tough decisions and embracing a survival mindset. Organizations can navigate these challenges strategically by keeping core business lines strong and implementing strategies to mitigate disruption.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1203,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1203\/C4U376_thumbnail_518x309.jpg",
        "product_name": "The Whys and Hows of a Growth Mindset at Work",
        "skill": "Business Skills",
        "categories": [
            "Personal Development",
            "Self Development"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Embracing a growth mindset at work can significantly impact an individual&#39;s ability to thrive, learn, and excel in their career. A study conducted by Carol Dweck, a prominent psychologist and researcher at Stanford University, revealed that individuals with a growth mindset consistently outperformed their fixed mindset counterparts. These individuals were more likely to embrace challenges, persist in the face of setbacks, and seek feedback as opportunities for growth. As organizations strive to adapt to an ever-evolving business landscape, cultivating a growth mindset becomes an indispensable factor for both individual and collective success.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1205,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1205\/C4U377_thumbnail_518x309.jpg",
        "product_name": "Release Management Ecosystem",
        "skill": "Technology",
        "categories": [
            "Agile Release Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The release management ecosystem is diverse and constantly evolving, with a wide range of tools and methodologies available to support the process. The choice of specific tools and practices may vary based on the organization&#39;s needs, development methodologies (e.g., Agile, DevOps), and the complexity of the software being released.<\/p>\r\n\r\n<p>In this course you will:&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1206,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1206\/C4U378_thumbnail_518x309.jpg",
        "product_name": "ESG Risk Mitigation",
        "skill": "Compliance",
        "categories": [
            "ESG"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>There is growing recognition of the interconnectedness between businesses and the environment, and society. Investors, consumers, and employees are increasingly demanding that companies take responsibility for their actions and consider the broader impacts beyond financial performance. Hence, ESG factors are considered critical indicators of a company&#39;s long-term sustainability, risk management, and resilience.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1208,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1208\/C4U379_thumbnail_518x309.jpg",
        "product_name": "EHS Principles and Their Importance",
        "skill": "Safety",
        "categories": [
            "Safety and EHS Orientation"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>EHS management refers to the implementation of procedures that focus on ensuring and improving the safety of workers and their surroundings and achieving the overall environmental goals of the organization. It is a crucial aspect for any organization and its operations, as it not only minimizes environmental impact and improves workers&#39; safety and well-being, but also improves employee retention and productivity.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1209,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1209\/C4U380_thumbnail_518x309.jpg",
        "product_name": "Best Practices for Leading Dispersed Teams Remotely",
        "skill": "Business Skills",
        "categories": [
            "Lead Remotely with Dispersed Teams"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The work landscape has undergone a profound transformation in recent years, with remote work becoming increasingly prevalent. A recent AT&amp;T study found the hybrid work model is expected to grow from 42% in 2021 to 81% in 2024. Prior to the COVID-19 pandemic, remote work was already on the rise, however, the pandemic acted as a catalyst, pushing organizations worldwide to implement remote work policies, with a staggering 88% of companies adopting remote work, as revealed by a Gartner survey.&nbsp;<\/p>\r\n\r\n<p>In this course, you will:&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1210,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1210\/C4U381_thumbnail_518x309.jpg",
        "product_name": "The Impact of Gender Biases on Recruitment and Retention",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "Gender Diversity"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Every individual harbors certain biases, whether they are within our conscious awareness or hidden in the depths of our subconscious. The challenge arises when our diligence falters, allowing these biases to infiltrate and influence our daily professional endeavors. An illustrative example of such bias pertains to the inclination towards one gender over another. This comprehensive course is designed to navigate you through prevalent errors frequently committed during the recruitment and retention processes. Such missteps can inflict detrimental repercussions upon both the work environment and its invaluable personnel.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1211,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1211\/C4U382_thumbnail_518x309.jpg",
        "product_name": "Requirements Gathering Techniques",
        "skill": "Technology",
        "categories": [
            "Agile Requirements Gathering"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Requirements are the basis of any project, technology integration, or product changeover in business, and knowing what precise criteria the goal of a firm or customer will ensure the level of success of a project. There are various methods for determining requirements, known as requirement gathering methods, and most include the consumers of the item, program, or product in need of development. Knowing the various requirement gathering strategies will help you acquire professional skills that can be applied in any sector or function.<\/p>\r\n\r\n<p>In this course you will:&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1213,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1213\/C4U383_thumbnail_518x309.jpg",
        "product_name": "Bribery, Corruption, and Risk Management",
        "skill": "Compliance",
        "categories": [
            "Compliance"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The magnitude of bribery and corruption becomes strikingly apparent when considering the staggering economic implications. The World Economic Forum estimates that corruption globally costs at least $2.6 trillion, equivalent to a substantial 5% of the global GDP. These alarming statistics shed light on the dire need for effective risk management in addressing the profound repercussions of bribery and corruption.<\/p>\r\n\r\n<p>In this course you will:&nbsp;<\/p>\r\n",
        "duration": "20"
    },
    {
        "id": 1215,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1215\/C4U384_thumbnail_518x309.jpg",
        "product_name": "How to Prevent Unconscious Bias in the Workplace",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "Unconscious Bias"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Today, creating diverse and inclusive work environments has become imperative for organizations striving for success. While many organizations recognize the importance of diversity, the presence of unconscious biases can hinder their efforts and perpetuate inequalities.&nbsp;<\/p>\r\n\r\n<p>A survey conducted by Deloitte found that 61% of employees who experienced bias were likely to leave their current organizations within two years. Such turnover can disrupt productivity, hinder team dynamics, and impact the organization&#39;s overall performance.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;<\/p>\r\n",
        "duration": "20"
    },
    {
        "id": 1216,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1216\/C4U385_thumbnail_518x309.jpg",
        "product_name": "Definition and Techniques of Agile Estimation",
        "skill": "Technology",
        "categories": [
            "Agile Estimation"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>One of the most difficult aspects of being a project manager or business owner is the ability to accurately estimate work. This involves the financial component, estimates for future quarters, and the necessity of deploying resources to ensure teams are well-utilized. All this hinges on employing proper agile estimation techniques. When estimation is done correctly, projects are completed on time, businesses are profitable, and team members are content, as their deadlines and priorities are established.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1217,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1217\/C4U386_thumbnail_518x309.jpg",
        "product_name": "Importance of Building Online and Offline Business Networks",
        "skill": "Business Skills",
        "categories": [
            "Building Online and Offline Business Networks"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Building networks has become an essential part of achieving success in business. Both online and offline networks offer unique opportunities to connect with potential customers, partners, investors, and mentors. While building networks can bring numerous benefits, it can be challenging to know where to start. With so many online and offline networking opportunities available, it can be overwhelming to decide which ones are worth investing time and effort in. That&#39;s why it&#39;s essential to have a clear strategy and focus on building relationships with individuals and organizations that align with your goals and values.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1218,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1218\/C4U387_thumbnail_518x309.jpg",
        "product_name": "How to Boost Resilience at Work",
        "skill": "Wellness",
        "categories": [
            "Resilience at Work"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Businesses worldwide have undergone significant adjustments to cope with challenges such as reduced revenue levels, weakened financial structures, and decreased employee productivity and morale. While growth is a familiar concept, the idea of resilience has gained prominence more recently. When it comes to fostering and maintaining resilience within your organization, it involves minimizing the impact of setbacks while remaining prepared to seize potential opportunities. The concept of business resilience encompasses multiple dimensions, encompassing financial, operational, strategic, and psychological aspects.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1220,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1220\/C4U388_thumbnail_518x309.jpg",
        "product_name": "Types of Harassment and Violence Commitment",
        "skill": "Compliance",
        "categories": [
            "Respectful Workplaces",
            "Workplace Harassment"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Understanding the different types of harassment and violence committed in the workplace is crucial as it helps individuals recognize and identify what constitutes unacceptable behavior. By increasing awareness and knowledge about these issues, we empower ourselves and others to create a work environment that is free from harassment and violence. By gaining an in-depth understanding of the various types of harassment and violence committed in the workplace, we can identify warning signs, develop preventive strategies, and effectively respond to incidents when they occur.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1222,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1222\/C4U389_thumbnail_518x309.jpg",
        "product_name": "Complaints - Reporting and Investigation Procedures",
        "skill": "Compliance",
        "categories": [
            "Respectful Workplaces"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>When an employee is unhappy or dissatisfied with the settings of their workplace, they have the right to file a complaint or grievance with their immediate supervisors, managers, and HR personnel. A complaint raised must be taken seriously, irrespective of whether the employee&rsquo;s complaint is valid or not. When workplace complaints are ignored or brushed under the carpet, it can lead to further damage to a business.&nbsp;<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1223,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1223\/C4U390_thumbnail_518x309.jpg",
        "product_name": "Release Management Process",
        "skill": "Technology",
        "categories": [
            "Agile Release Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>If you&#39;ve been through a software release, you must know the complexities involved. From handling project timelines to monitoring deadlines and scope, it can be overwhelming for an individual. This is where release management steps in. By implementing the appropriate procedures, you can effectively handle even the most intricate tasks. Release management is a method used to oversee, strategize, and regulate the process of software updates to enhance quality and effectiveness.&nbsp;<\/p>\r\n\r\n<p>This training is meant for: &nbsp;<\/p>\r\n\r\n<ul>\r\n\t<li>Business Leaders&nbsp;<\/li>\r\n\t<li>Business Consultants&nbsp;<\/li>\r\n\t<li>Entrepreneurs &nbsp;<\/li>\r\n\t<li>Product Managers&nbsp;<\/li>\r\n\t<li>Anyone who is interested in learning about release management process<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1224,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1224\/C4U391_thumbnail_518x309.jpg",
        "product_name": "Agile Requirements Gathering Stages",
        "skill": "Technology",
        "categories": [
            "Agile Requirements Gathering"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>One of the most important benefits of the agile methodology is the flexibility to react to changes even after the project has begun. When compared to other typical sequential methodologies, agile requirements offer greater project flexibility and transparency. Moreover, requirements gathering helps in identifying, documenting, and prioritizing the needs and expectations of stakeholders. It also involves eliciting and analyzing requirements in an iterative and collaborative manner throughout the project lifecycle.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1225,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1225\/C4U392_thumbnail_518x309.jpg",
        "product_name": "Safety and EHS Orientation",
        "skill": "Safety",
        "categories": [
            "Safety and EHS Orientation"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Safety orientation is an essential requirement for any company committed to implementing robust safety management practices. This process entails acquainting new, inexperienced, transferred, and returning employees with the principles of a secure and health-conscious workplace. A comprehensive safety orientation equips employees with the vital safety knowledge relevant to their specific job roles and responsibilities. &nbsp;<\/p>\r\n\r\n<p>This training is meant for: &nbsp;<\/p>\r\n\r\n<ul>\r\n\t<li>Business Leaders&nbsp;<\/li>\r\n\t<li>Senior Executives&nbsp;<\/li>\r\n\t<li>Plant and factory workers&nbsp;<\/li>\r\n\t<li>EHS Managers and safety officers&nbsp;<\/li>\r\n\t<li>Anyone who is interested in learning about Safety and EHS orientation&nbsp;<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1226,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1226\/C4U393_thumbnail_518x309.jpg",
        "product_name": "Why Is Diversity Essential",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Diversity in the workplace is essential for organizational success, as it helps businesses better understand their customers, stay competitive, and create an inclusive culture. Embracing diversity fosters creativity, innovation, effective decision-making, and improves employee engagement and retention.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1227,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1227\/T9_L4_thumbnail_518x309.jpg",
        "product_name": "Estrategias de inteligencia emocional",
        "skill": "Wellness",
        "categories": [
            "Emotional Intelligence"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>En las lecciones anteriores, ha aprendido las cuatro habilidades de autoconocimiento, autogesti&oacute;n, conciencia social y manejo de las relaciones para aumentar su Inteligencia Emocional y reforzar su capacidad para gestionarse a s&iacute; mismo e influir en los dem&aacute;s. Aumentar su inteligencia emocional potenciar&aacute; a&uacute;n m&aacute;s sus habilidades, coeficiente intelectual, personalidad, educaci&oacute;n y experiencia actuales. Esto deber&iacute;a alinearse con los beneficios de aumentar su Inteligencia Emocional como l&iacute;der en t&eacute;rminos de c&oacute;mo tratar con su gente y aumentar sus habilidades de liderazgo.&nbsp;&nbsp; Considere que puede tener el mejor plan y la mejor estrategia, pero no tendr&aacute; importancia a menos que comunique esta estrategia a su equipo, les convenza para que trabajen en ella, escuche sus aportaciones y les gu&iacute;e a trav&eacute;s de los obst&aacute;culos. Podr&aacute; hacerlo mostrando una fuerte Inteligencia Emocional.&nbsp;&nbsp; En esta lecci&oacute;n, esbozaremos algunas estrategias, ejercicios e ideas que puede utilizar para convertirse en un l&iacute;der emocionalmente inteligente. Necesita habilidades interpersonales para ejecutar y tener &eacute;xito en su plan. Desarrollar su Inteligencia Emocional potenciar&aacute; su arsenal de liderazgo.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1228,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1228\/C4U136_thumbnail_518x309.jpg",
        "product_name": "Competencias digitales b\u00e1sicas",
        "skill": "Business Skills",
        "categories": [
            "Leadership and Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Con el auge de la transformaci&oacute;n digital y la tecnolog&iacute;a, tener unos conocimientos digitales b&aacute;sicos es esencial para todo tipo de trabajos, independientemente del sector. Para seguir siendo competitivo y tener &eacute;xito en el lugar de trabajo, mejorar sus habilidades digitales debe ser una prioridad absoluta. Temas: Desarrollo profesional, Navegador web, Aplicaciones web Competencia: Conocimientos laborales.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1229,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1229\/T9_L1_thumbnail_518x309.jpg",
        "product_name": "Introducci\u00f3n a la Inteligencia Emocional ",
        "skill": "Wellness",
        "categories": [
            "Emotional Intelligence"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Ha utilizado su educaci&oacute;n, experiencia profesional, trabajo duro y habilidades empresariales para llegar a este punto de su carrera. Ahora es responsable de dirigir un equipo para alcanzar las metas y objetivos de su empresa. &iquest;Sab&iacute;a que hay otra habilidad que ser&aacute; fundamental para su &eacute;xito y avance continuos? Se llama Inteligencia Emocional (IE), y es un tema muy importante en los negocios hoy en d&iacute;a.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1230,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1230\/T9_L2_thumbnail_518x309.jpg",
        "product_name": "Competencia personal",
        "skill": "Wellness",
        "categories": [
            "Emotional Intelligence"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>En esta lecci&oacute;n, estudiaremos los dos primeros pasos de los cuatro componentes de la inteligencia emocional de Goleman: la autoconciencia y la autogesti&oacute;n. Seg&uacute;n Goleman, la autoconciencia es la piedra angular de todas las dem&aacute;s competencias. Si no reconoce lo que siente, no puede pasar a las dem&aacute;s competencias. Le ayuda a manejar sus emociones para evitar que interfieran en el trabajo y a utilizarlas para facilitar y recuperar el malestar emocional. La autogesti&oacute;n fluye de la autoconciencia. Ayuda a comprender las situaciones desde la perspectiva de los dem&aacute;s y a cultivar las relaciones.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1231,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1231\/C4U73_thumbnail_518x309.jpg",
        "product_name": "Ataques a la Ciberseguridad de la Red: Gesti\u00f3n y Supervisi\u00f3n",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>La seguridad de la red se est&aacute; convirtiendo en un &aacute;rea de atenci&oacute;n clave en una era de aumento de los ciberataques. La seguridad de la red no consiste &uacute;nicamente en protegerla de amenazas externas, sino tambi&eacute;n en ser consciente de las vulnerabilidades de la red.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1232,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1232\/T11_L3_thumbnail_518x309.jpg",
        "product_name": "Resoluci\u00f3n de conflictos ",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Es ley natural: si trabaja con gente, va a tener conflictos. Cuando se juntan personas con diferentes puntos de vista, antecedentes, personalidades, &eacute;tica laboral y experiencia en el sector, la discordia y las diferencias de opini&oacute;n son inevitables. Los l&iacute;deres sabios aceptan que el conflicto forma parte del trabajo, se anticipan a &eacute;l y tienen un plan para abordarlo. La resoluci&oacute;n eficaz de conflictos requiere pr&aacute;ctica. Quiz&aacute; deba pedir sugerencias a un colega con experiencia, a su departamento de RR.HH. o a su jefe sobre c&oacute;mo abordar esta cuesti&oacute;n. Tenga en cuenta que, aunque no puede evitar los conflictos por completo, puede establecer un entorno y un proceso que minimicen el da&ntilde;o que pueden causar. Si se manejan bien, los conflictos pueden conducir a la innovaci&oacute;n, a equipos m&aacute;s fuertes y a un mayor desarrollo personal, tanto suyo como de sus empleados.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1233,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1233\/T9_L3_thumbnail_518x309.jpg",
        "product_name": "COMPETENCIA SOCIAL ",
        "skill": "Wellness",
        "categories": [
            "Emotional Intelligence"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>En esta lecci&oacute;n estudiaremos la conciencia social y el manejo de las relaciones, que se engloban bajo el t&eacute;rmino &laquo;Competencia social&raquo; del modelo de inteligencia emocional de Bradberry y Greaves. La conciencia social es la capacidad de utilizar la empat&iacute;a y la escucha activa para comprender mejor a los dem&aacute;s. Los l&iacute;deres con una fuerte conciencia social no s&oacute;lo son capaces de leer con precisi&oacute;n sus emociones, sino tambi&eacute;n de hacer lo mismo con los dem&aacute;s. &nbsp; EEl manejo de las relaciones consiste en utilizar todas las habilidades de la Inteligencia Emocional para establecer relaciones s&oacute;lidas y gestionar las interacciones con los dem&aacute;s.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1234,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1234\/T11_L6_thumbnail_518x309.jpg",
        "product_name": "C\u00f3mo dar retroalimentaci\u00f3n eficaz",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>El feedback constructivo puede ayudar a los empleados a hacer mejor su trabajo. Ayuda a reforzar el equipo y a mejorar el rendimiento general. Muchos directivos son incapaces de dar un feedback constructivo, por lo que no obtienen los resultados esperados y, a veces, tienen un efecto adverso en la relaci&oacute;n con sus empleados. Para evitarlo, muchos directivos son reacios a dar feedback. El feedback constructivo es una oportunidad para ense&ntilde;ar a los miembros de su equipo a convertirse en colaboradores m&aacute;s productivos e independientes. Cuando dar y recibir feedback positivos y negativos se convierta en una parte rutinaria de la jornada laboral de todos, usted y su equipo estar&aacute;n en el camino hacia el &eacute;xito personal y organizativo.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1235,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1235\/C4UM29_thumbnail_518x309.jpg",
        "product_name": "Relaci\u00f3n entre protecci\u00f3n de datos y privacidad",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Los datos que se crean y almacenan en las empresas se han ampliado a un ritmo extraordinario, lo que ha hecho que asegurar esos datos sea cada vez m&aacute;s importante. Adem&aacute;s, las operaciones empresariales dependen cada vez m&aacute;s de los datos, por lo que incluso un breve tiempo de inactividad o una peque&ntilde;a p&eacute;rdida de datos pueden afectar significativamente a una empresa. Hoy veremos c&oacute;mo las organizaciones pueden proteger sus datos de todas las actividades no deseadas.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1236,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1236\/T11_L5_thumbnail_518x309.jpg",
        "product_name": "Gesti\u00f3n del rendimiento",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>En el competitivo mundo actual, las empresas se mueven cada vez m&aacute;s deprisa para adelantarse a la competencia, desarrollar nuevas ofertas y seguir el ritmo de las demandas de los clientes. Los empleados necesitan informaci&oacute;n, apoyo y orientaci&oacute;n constantes para alcanzar esos objetivos. La era de la revisi&oacute;n anual del rendimiento ha quedado atr&aacute;s, y ahora los directivos se re&uacute;nen con los miembros del equipo de manera frecuente para fijar objetivos, asesorar, impartir formaci&oacute;n y revisar el rendimiento. Los paneles de rendimiento que automatizan los objetivos de toda la empresa, las m&eacute;tricas, los comentarios de los clientes y otros datos relacionados con el rendimiento mantienen a los l&iacute;deres y a los miembros del equipo al tanto de su progreso. En lugar de mirar hacia atr&aacute;s, el nuevo modelo de gesti&oacute;n y motivaci&oacute;n del rendimiento de los empleados es r&aacute;pido y se centra en el feedback.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1237,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1237\/T13_L4_thumbnail_518x309.jpg",
        "product_name": "Pensamiento creativo y resoluci\u00f3n de problemas ",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Los problemas se presentan de distintas formas y magnitudes, y son una parte inevitable de la vida empresarial. En lugar de intentar evitarlos o ignorarlos, es mejor aceptarlos, encontrar formas de resolverlos y aprender de ellos. Con la perspectiva adecuada, los problemas pueden ser incluso puertas de entrada a la innovaci&oacute;n. Existe una gran variedad de modelos y m&eacute;todos que pueden utilizarse para identificar, analizar y aplicar soluciones eficaces. En esta lecci&oacute;n, examinaremos un h&iacute;brido del modelo A3, los 5 porqu&eacute;s y los m&eacute;todos divergente\/convergente.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1238,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1238\/T8_L5_thumbnail_518x309.jpg",
        "product_name": "Conversaci\u00f3n sobre coaching",
        "skill": "Business Skills",
        "categories": [
            "Effective Coaching"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Su talento es su recurso m&aacute;s importante. Desplegarlo para implementar diferentes m&eacute;todos de coaching no solo lo ayudar&aacute; a fortalecer las habilidades de su equipo, sino tambi&eacute;n sus propias habilidades de liderazgo. No importa d&oacute;nde se encuentre, no importa cu&aacute;ntas personas re&uacute;na en un equipo, siempre experimentar&aacute; el mismo fen&oacute;meno. Algunos miembros del equipo se desempe&ntilde;ar&aacute;n por encima de las expectativas, mientras que otros se desempe&ntilde;ar&aacute;n a un nivel promedio o est&aacute;ndar, y algunos se desempe&ntilde;ar&aacute;n a niveles inferiores. El coaching es un proceso de rendimiento con muchas acciones y pasos. Echemos un vistazo a algunas de las formas de capacitar a su equipo y c&oacute;mo puede aprovechar al m&aacute;ximo estas oportunidades.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1239,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1239\/C4U351_thumbnail_518x309.jpg",
        "product_name": "Protecci\u00f3n de datos y privacidad",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>En una era en la que la informaci&oacute;n digital es un activo valioso, comprender la privacidad y la seguridad de los datos es m&aacute;s crucial que nunca. Este curso profundiza en los principios y pr&aacute;cticas fundamentales necesarios para proteger la informaci&oacute;n confidencial de accesos no autorizados y filtraciones. Explorar&aacute; las &uacute;ltimas t&eacute;cnicas para proteger los datos y desarrollar&aacute; las habilidades necesarias para responder eficazmente a los incidentes de seguridad. Tanto si es usted un profesional que busca mejorar sus conocimientos como si simplemente est&aacute; interesado en salvaguardar su informaci&oacute;n personal, este curso le proporciona conocimientos esenciales y herramientas pr&aacute;cticas para navegar por las complejidades de la privacidad y la seguridad de los datos en el mundo interconectado de hoy en d&iacute;a.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1240,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1240\/T29_L2_thumbnail_518x309.jpg",
        "product_name": "Creaci\u00f3n de redes y construcci\u00f3n de relaciones",
        "skill": "Business Skills",
        "categories": [
            "Interpersonal Effectiveness",
            "Interpersonal Skills and Empathy"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Su &eacute;xito como empresario se ver&aacute; afectado en gran medida por las relaciones profesionales que cultive. Las habilidades interpersonales son la piedra angular para desarrollar estas asociaciones, por lo que es importante evaluar sus habilidades para comunicarse con claridad y empat&iacute;a, as&iacute; como para escuchar bien. Las relaciones m&aacute;s efectivas y satisfactorias se basan en un deseo genuino y mutuo de conocer y ayudar a los dem&aacute;s. Cuando se concentra en agregar valor a sus conexiones comerciales, construir&aacute; una red que sea tanto personalmente satisfactoria como profesionalmente beneficiosa.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1241,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1241\/T10_L1_thumbnail_518x309.jpg",
        "product_name": "Motivaci\u00f3n intr\u00ednseca frente a motivaci\u00f3n extr\u00ednseca",
        "skill": "Business Skills",
        "categories": [
            "Leading Teams"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Los empleados que trabajan en una organizaci&oacute;n aportan un nivel de entusiasmo y energ&iacute;a al trabajo que realizan en la organizaci&oacute;n. Son comprometidos y creativos en su enfoque. Esta energ&iacute;a es crucial para el &eacute;xito de cualquier organizaci&oacute;n y se denomina motivaci&oacute;n emocional. Los factores que influyen en este nivel de energ&iacute;a pueden ser intr&iacute;nsecos o extr&iacute;nsecos. En esta lecci&oacute;n, aprender&aacute; sobre la motivaci&oacute;n intr&iacute;nseca y la motivaci&oacute;n extr&iacute;nseca y c&oacute;mo aprovecharlas.&nbsp; &iquest;C&oacute;mo motiva a su equipo para que haga lo mejor que pueda? Les da las herramientas, la confianza y el tiempo para que hagan que su trabajo sea personal. Les ofrece suficientes desaf&iacute;os para que trabajen para facilitar mejor las cosas, pero no tanto como para que se desanimen. Ay&uacute;delos a conectarse con su trabajo y br&iacute;ndeles una raz&oacute;n para trabajar que vaya m&aacute;s all&aacute; del salario.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1242,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1242\/T11_L2_thumbnail_518x309.jpg",
        "product_name": "Desarrollando la inteligencia emocional",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Your success as a leader isn&rsquo;t dependent upon how much technical knowledge, business expertise, or years of industry experience you have. If you want to achieve goals consistently, build strong, collaborative teams, and establish solid relationships with colleagues, superiors, and clients, then you need Emotional Intelligence (EQ). Emotional Intelligence, also known as Emotional Quotient\u202f(EQ) is the ability to properly gauge your&nbsp;emotions&nbsp;as well as the emotions of others in all situations, use proper judgment and behave appropriately for the desired outcome. In other words, EQ is the ability to identify your emotions, and those of others, and use that knowledge to make the best decisions, regardless of the circumstances.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1243,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1243\/T7_L3_thumbnail_518x309.jpg",
        "product_name": "Planes de desarrollo individual",
        "skill": "Business Skills",
        "categories": [
            "Managing Performance"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Como l&iacute;der, una de sus principales responsabilidades es encontrar buenos talentos, cultivarlos e inspirar lealtad y motivaci&oacute;n en esas personas talentosas. Ofrecer desarrollo a los empleados es una excelente manera de hacer madurar a su personal y garantizar que permanezcan en la organizaci&oacute;n. Invertir en el crecimiento de los empleados es fundamental para su &eacute;xito y, en &uacute;ltima instancia, para el &eacute;xito de su empresa.&nbsp; La capacitaci&oacute;n formal, las tutor&iacute;as, las oportunidades de observar a otros l&iacute;deres, el coaching: estas son las cosas que mantienen a los empleados comprometidos y leales a su organizaci&oacute;n. En este curso, aprender&aacute; a brindarles el desarrollo que buscan, utilizando un Plan de Desarrollo Individual (PDI), que tambi&eacute;n es beneficioso para su empresa.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1244,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1244\/C4UM36_thumbnail_518x309.jpg",
        "product_name": "Curiosidad y aprendizaje continuos",
        "skill": "Business Skills",
        "categories": [
            "Adaptability and Continuous Learning"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>A medida que las industrias y las tecnolog&iacute;as contin&uacute;an avanzando, las personas necesitan mantenerse al d&iacute;a con las &uacute;ltimas tendencias y desarrollos en sus campos. Aqu&iacute; es donde el aprendizaje continuo y la curiosidad entran en juego como habilidades esenciales. Adem&aacute;s, la capacidad de abordar el trabajo con una mentalidad curiosa puede conducir a soluciones innovadoras y un mejor desempe&ntilde;o. En esta lecci&oacute;n, exploraremos la importancia del aprendizaje continuo y la curiosidad en el lugar de trabajo, analizaremos estrategias para cultivar estos rasgos y examinaremos los beneficios que pueden aportar a las personas y las empresas.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1245,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1245\/T12_L4_thumbnail_518x309.jpg",
        "product_name": "Presentaciones eficaces",
        "skill": "Business Skills",
        "categories": [
            "Business Power Skills"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Muchas veces los gerentes deben realizar presentaciones ante grupos de clientes, equipos interdepartamentales o tomadores de decisiones internos. El proceso de crear y realizar una presentaci&oacute;n requiere habilidades organizativas, perspicacia, habilidades t&eacute;cnicas y valent&iacute;a. Hablar en p&uacute;blico puede ser intimidante, pero si se toma el tiempo para planificar y ejecutar met&oacute;dicamente los detalles necesarios, podr&aacute; estar preparado y seguro para realizar una presentaci&oacute;n eficaz. Este curso lo guiar&aacute; por los pasos que necesitar&aacute; para planificar y organizar su tema, elegir ayudas visuales, considerar herramientas tecnol&oacute;gicas y practicar la presentaci&oacute;n de su discurso.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1246,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1246\/C4U70_thumbnail_518x309.jpg",
        "product_name": "Seguridad con objetos punzantes",
        "skill": "Healthcare",
        "categories": [
            "Healthcare"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>La seguridad con objetos punzantes afecta a cualquier persona que manipule bistur&iacute;es, suturas, agujas hipod&eacute;rmicas o herramientas para la extracci&oacute;n de sangre. Esto incluye enfermeras, agentes de seguridad p&uacute;blica, t&eacute;cnicos m&eacute;dicos de emergencia y cualquier persona que trabaje en las inmediaciones de procedimientos m&eacute;dicos. Las lesiones causadas por objetos punzantes pueden propagar pat&oacute;genos transmitidos por la sangre y causar graves problemas de salud y costos m&eacute;dicos.&nbsp; Este curso est&aacute; dise&ntilde;ado para cualquier persona que trabaje en un entorno de atenci&oacute;n m&eacute;dica o que trabaje con o cerca de procedimientos m&eacute;dicos en los que se utilicen objetos punzantes.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1247,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1247\/C4U65_thumbnail_518x309.jpg",
        "product_name": "Mejorar la satisfacci\u00f3n del cliente",
        "skill": "Business Skills",
        "categories": [
            "Customer Focus",
            "Customer Satisfaction"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>En el mundo actual cada vez m&aacute;s competitivo, atraer a los clientes es la clave. Independientemente de la industria en la que se encuentre una empresa o del tipo de productos y servicios que venda, sus clientes son la parte m&aacute;s importante del crecimiento del negocio. No habr&iacute;a ventas si no tuviera una base de clientes. La satisfacci&oacute;n del cliente y la experiencia del cliente son los dos aspectos m&aacute;s importantes de cualquier estrategia de ventas y marketing<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1248,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1248\/C4U93_thumbnail_518x309.jpg",
        "product_name": "Importancia de la capacitaci\u00f3n y el desarrollo",
        "skill": "Business Skills",
        "categories": [
            "Adaptability and Continuous Learning"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Todos los d&iacute;as se lanzan nuevos programas, software y avances tecnol&oacute;gicos. Esto implica que siempre habr&aacute; una brecha de habilidades que se debe cubrir. La capacitaci&oacute;n de los empleados es una t&eacute;cnica pr&aacute;ctica para asegurarse de que la brecha de habilidades desaparezca. Los empleados pueden mejorar y aumentar su eficacia en el trabajo mediante la capacitaci&oacute;n. Incluso las personas altamente capacitadas deben recibir capacitaci&oacute;n porque la experiencia previa puede no ser siempre suficiente. La capacitaci&oacute;n est&aacute; destinada tanto a la fuerza laboral actual como a los empleados reci&eacute;n contratados. Si bien requiere invertir dinero, tiempo y otros recursos, la capacitaci&oacute;n es una inversi&oacute;n valiosa.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1249,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1249\/T31_L2_thumbnail_518x309.jpg",
        "product_name": "Teor\u00eda del liderazgo situacional",
        "skill": "Business Skills",
        "categories": [
            "Situational Leadership"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>El entorno empresarial actual es internacional, generacionalmente diverso, colaborativo, multifuncional y en constante cambio. Los l&iacute;deres que creen que pueden alcanzar los objetivos organizacionales utilizando un solo estilo de liderazgo no tendr&aacute;n &eacute;xito. Los l&iacute;deres m&aacute;s eficaces aprenden a adaptar de manera flexible m&uacute;ltiples estilos de liderazgo para guiar a sus empleados, lograr sus objetivos y formar equipos s&oacute;lidos.<\/p>\r\n\r\n<p>Una teor&iacute;a de gesti&oacute;n popular llamada liderazgo situacional, que desarroll&oacute; por primera vez el Dr. Paul Hersey y Kenneth Blanchard en 1969, sigue siendo especialmente relevante en el entorno empresarial actual. Esta teor&iacute;a se basa en la premisa de que, dado que las empresas no est&aacute;n formadas por trabajadores igualmente capacitados y motivados, los l&iacute;deres deben gestionar a los miembros del equipo de acuerdo con sus habilidades individuales y su preparaci&oacute;n para el desarrollo. Revisaremos su m&eacute;todo y luego sugeriremos algunas formas en las que puede usarlo para gestionar los desaf&iacute;os empresariales actuales.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1250,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1250\/T11_L7_thumbnail_518x309.jpg",
        "product_name": "Visi\u00f3n empresarial - Finanzas",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Hay tres lenguajes empresariales que los gerentes deben comprender para tomar las mejores decisiones. Estos lenguajes son la contabilidad, las finanzas y la econom&iacute;a. Los l&iacute;deres utilizan estos lenguajes para ver c&oacute;mo se ha desempe&ntilde;ado su empresa en el pasado (contabilidad), planificar c&oacute;mo deber&iacute;a avanzar la empresa (finanzas) y predecir c&oacute;mo las influencias externas afectar&aacute;n su plan (econom&iacute;a). Los beneficios de tener un conocimiento pr&aacute;ctico de estos tres lenguajes incluyen poder comprender y comunicarse con otros en la empresa sobre cuestiones financieras, tomar decisiones que se alineen con los objetivos corporativos generales y fortalecer su valor para la empresa.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1251,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1251\/T31_L1_thumbnail_518x309.jpg",
        "product_name": "Roles del liderazgo",
        "skill": "Business Skills",
        "categories": [
            "Situational Leadership"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Muchos gerentes ascienden a puestos de liderazgo en virtud de sus habilidades t&eacute;cnicas o su conocimiento en la materia. Su competencia y experiencia los distinguen de otros candidatos. Estas habilidades son importantes, pero son solo un aspecto de ser un l&iacute;der eficaz. El experto en liderazgo, Stephen Covey, afirma que debido a la velocidad y el cambio constante que definen nuestro mundo actual, los l&iacute;deres deben ser capaces de enfrentar problemas nuevos y diferentes a medida que surgen, tomar decisiones estrat&eacute;gicas r&aacute;pidamente y guiar a sus empresas con competencia y car&aacute;cter. Ha identificado cuatro roles que un l&iacute;der debe dominar para tener &eacute;xito en este entorno en constante cambio.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1252,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1252\/T20_L2_thumbnail_518x309.jpg",
        "product_name": "Finanzas para gerentes no financieros",
        "skill": "Business Skills",
        "categories": [
            "Business Acumen Finance"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Como l&iacute;der de un equipo peque&ntilde;o o grande, todos ustedes son responsables del presupuesto asignado a sus proyectos que, a su vez, no es otra cosa que finanzas. Por lo tanto, consciente o inconscientemente, tambi&eacute;n est&aacute;n involucrados en la gesti&oacute;n financiera. Deben evaluar las decisiones de inversi&oacute;n, como el an&aacute;lisis del retorno de la inversi&oacute;n despu&eacute;s de entregar el producto o servicio del que son responsables. Como gerente no financiero, no pueden evitar la informaci&oacute;n financiera, los estados de rentabilidad, las tasas de retorno, los presupuestos, las variaciones, la gesti&oacute;n de activos y el an&aacute;lisis de proyectos.<\/p>\r\n\r\n<p>En esta lecci&oacute;n, obtendr&aacute; una descripci&oacute;n general de la gesti&oacute;n financiera, los roles dentro del departamento financiero y los cuatro objetivos financieros de cualquier empresa.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1253,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1253\/T3_L1_thumbnail_518x309.jpg",
        "product_name": "Creaci\u00f3n de equipos de innovaci\u00f3n",
        "skill": "Business Skills",
        "categories": [
            "Leading Innovation"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>La innovaci&oacute;n por s&iacute; sola es un proceso desafiante y agotador. La imprevisibilidad de los resultados de la innovaci&oacute;n aumenta el estr&eacute;s del innovador o de los equipos de innovaci&oacute;n. Combinar la tarea de innovaci&oacute;n con un proceso predecible ayuda a aliviar las dificultades. Esta lecci&oacute;n se centra en las seis &aacute;reas que se pueden incluir en el marco de su plan de innovaci&oacute;n que le ayudar&aacute;n a llevar a cabo las actividades de formaci&oacute;n de equipos innovadores de una manera constructiva. Tambi&eacute;n estar&aacute; en condiciones de identificar los roles de innovaci&oacute;n y designar a las personas adecuadas para promover un proceso de innovaci&oacute;n impecable. Las empresas que innovan nuevos conceptos utilizando el marco y los procesos correctos pueden garantizar un crecimiento constante de la industria. Tome esta lecci&oacute;n para aprender sobre la formaci&oacute;n de equipos de innovaci&oacute;n.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1254,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1254\/T17_L1_thumbnail_518x309.jpg",
        "product_name": "Gesti\u00f3n de conflictos situacionales",
        "skill": "Business Skills",
        "categories": [
            "Managing Conflict"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Los conflictos siempre generan inquietud en las mentes de los empleados y las empresas. Pueden generar emociones dolorosas y poner en riesgo las relaciones. Los l&iacute;deres experimentan la misma angustia emocional al manejar una situaci&oacute;n de conflicto. La situaci&oacute;n m&aacute;s dif&iacute;cil a la que se enfrenta un l&iacute;der es la gesti&oacute;n de conflictos. Se ha observado que un conflicto mal gestionado genera enormes costos que se presentan mediante gasto de tiempo, mayor deserci&oacute;n, implicaciones legales, etc. Tambi&eacute;n reduce la productividad. Cuando las personas se ven involucradas en un conflicto, comienzan a apartarse, dejan de compartir informaci&oacute;n y asumen menos riesgos. El resultado puede ser una mala toma de decisiones. La baja moral y las relaciones laborales tensas pueden causar estr&eacute;s y agotar la energ&iacute;a de los empleados para centrarse en ser creativos y productivos. En esta lecci&oacute;n, aprender&aacute; a lidiar con los conflictos situacionales.&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1255,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1255\/C4UM8_thumbnail_518x309.jpg",
        "product_name": "Liderazgo Aut\u00e9ntico y Empat\u00eda",
        "skill": "Business Skills",
        "categories": [
            "Leadership and Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>La legitimidad es la estrategia de negocio esencial de toda empresa. Las entidades quieren l&iacute;deres que sean honestos consigo mismos y con todos los empleados y creen un mejor ambiente laboral. Por eso, mejorar sus capacidades de liderazgo puede ser una gran ayuda para su carrera. Independientemente de su posici&oacute;n profesional, comprometerse a superarse, trabajar tu inteligencia emocional, practicar sus habilidades de liderazgo y abrazar una misi&oacute;n puede otorgarle beneficios sustanciales: para usted, para tu equipo y para tu empresa.&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1256,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1256\/T6_L2_thumbnail_518x309.jpg",
        "product_name": "Resistencia vs. apertura al cambio ",
        "skill": "Business Skills",
        "categories": [
            "Effective Feedback"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Como l&iacute;der, usted es responsable de dirigir a su equipo para alcanzar los objetivos de la empresa. A veces, eso implica cambiar procesos, adoptar nuevas tecnolog&iacute;as o aprender nuevas habilidades. &iquest;Qu&eacute; hace cuando uno o varios de sus empleados se niegan a cambiar y a crecer con el resto del equipo?&nbsp;&nbsp;<\/p>\r\n\r\n<p>Las personas tienden a abordar el cambio de dos maneras. O bien abrazan el cambio y se entusiasman con las posibilidades y oportunidades que conlleva una nueva aventura o se resisten al cambio porque temen lo desconocido. Como l&iacute;der, es probable que tenga empleados en ambos bandos.&nbsp;&nbsp;<\/p>\r\n\r\n<p>En este curso hablaremos de c&oacute;mo influir en los que se resisten al cambio.&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1257,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1257\/T12_L3_thumbnail_518x309.jpg",
        "product_name": "Servicio al cliente",
        "skill": "Business Skills",
        "categories": [
            "Business Power Skills"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Los estudios han demostrado que cuesta cinco veces m&aacute;s atraer a un nuevo cliente que mantener a uno existente. En una encuesta sobre la retenci&oacute;n de clientes, el 44% de las empresas afirmaron que centran sus esfuerzos en captar nuevos clientes, pero s&oacute;lo el 18% de las encuestadas se centran en retener a los clientes existentes. Otra encuesta revel&oacute; que las empresas que aumentan sus &iacute;ndices de retenci&oacute;n de clientes en un 5%, incrementan sus beneficios en al menos un 25%, y con frecuencia m&aacute;s. &nbsp;<br \/>\r\nEstas estad&iacute;sticas dejan claro que los clientes fieles ayudan a impulsar el crecimiento y la rentabilidad de una empresa. La clave para mantener a sus clientes satisfechos y fieles a su organizaci&oacute;n es un excelente servicio de atenci&oacute;n al cliente. &nbsp;<\/p>\r\n\r\n<p>En esta lecci&oacute;n aprender&aacute; a crear relaciones de confianza y aprecio.&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1258,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1258\/T21_L1_thumbnail_518x309.jpg",
        "product_name": "C\u00f3mo convertirse en un buen redactor empresarial",
        "skill": "Business Skills",
        "categories": [
            "Business Communication Skills",
            "Business Writing"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Las comunicaciones escritas son una parte necesaria del trabajo diario de un directivo. Ya sea respondiendo a correos electr&oacute;nicos, redactando evaluaciones de rendimiento para los miembros de su equipo, editando un informe del sector o redactando una carta a un cliente, es probable que dedique mucho tiempo a escribir. Para algunas personas, este trabajo resulta natural, pero para otras puede ser una tarea pesada. Convertirse en un buen redactor requiere tiempo y pr&aacute;ctica. Sin embargo, los beneficios merecen la pena. A medida que vaya mejorando, ser&aacute; capaz de estructurar y &laquo;vender&raquo; sus ideas con mayor facilidad y sus mensajes ser&aacute;n mejor recibidos. Veamos algunas pautas fundamentales que puede utilizar para que su escritura sea m&aacute;s poderosa y eficaz.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1259,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1259\/T12_L1_thumbnail_518x309.jpg",
        "product_name": "Habilidades de comunicaci\u00f3n empresarial",
        "skill": "Business Skills",
        "categories": [
            "Business Power Skills"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>En el mundo corporativo actual, es importante desarrollar sus habilidades de redacci&oacute;n y su marca personal. Cuando sea capaz de escribir de forma clara y pertinente sobre temas que comprenda bien, influir&aacute; no solo en su organizaci&oacute;n, sino tambi&eacute;n en sus clientes, colegas de la industria y clientes potenciales. Ya sea que escriba correos electr&oacute;nicos, cartas comerciales, art&iacute;culos en l&iacute;nea o publique en las redes sociales, tiene la capacidad de diferenciarse de otros l&iacute;deres si puede transmitir ideas de una manera que persuada, motive o informe de manera clara y poderosa. En esta lecci&oacute;n, aprender&aacute; a planificar, organizar y redactar comunicaciones comerciales, as&iacute; como a crear y gestionar su marca personal.&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1260,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1260\/T41_L1_thumbnail_518x309.jpg",
        "product_name": "Agilidad en tiempos de cambio",
        "skill": "Business Skills",
        "categories": [
            "Adapting to New Workstyle"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Los l&iacute;deres deben centrarse en desarrollar su capacidad para ser m&aacute;s &aacute;giles y estrat&eacute;gicos en un entorno de cambio constante. Deben explorar herramientas que se puedan aprovechar para alcanzar el objetivo. Los buenos l&iacute;deres &aacute;giles se aseguran de que sus equipos identifiquen los objetivos deseados a largo plazo y luego trabajen a partir de ellos para identificar todas las condiciones que deben darse para que concretar los objetivos se hagan realidad.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1261,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1261\/T16_L1_thumbnail_518x309.jpg",
        "product_name": "Relaciones interpersonales",
        "skill": "Business Skills",
        "categories": [
            "Building Relationships",
            "Interpersonal Skills and Empathy"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>&iquest;Por qu&eacute; decimos con frecuencia que es importante establecer redes de contactos de manera eficaz y construir alianzas comerciales s&oacute;lidas? Es porque su &eacute;xito como empresario se ver&aacute; afectado en gran medida por las relaciones profesionales que cultive. Ya sea que dirija a empleados, trabaje en un equipo multifuncional o se re&uacute;na con colegas en una conferencia de la industria, su capacidad para establecer redes de contactos de manera exitosa y construir relaciones comerciales productivas y aut&eacute;nticas es importante. Las relaciones comerciales s&oacute;lidas impulsan la productividad y el &eacute;xito empresarial. Los l&iacute;deres inteligentes dedican tiempo a desarrollar sus habilidades interpersonales para crear v&iacute;nculos s&oacute;lidos con sus empleados, trabajar de manera productiva y positiva con pares y superiores y generar relaciones comerciales que puedan contribuir al &eacute;xito personal y organizacional.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1262,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1262\/T31_L5_thumbnail_518x309.jpg",
        "product_name": "Habilidades de un l\u00edder situacional",
        "skill": "Business Skills",
        "categories": [
            "Situational Leadership"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>No existe un estilo o enfoque de liderazgo que sirva para todos los casos. Cada d&iacute;a surgen nuevas situaciones y desaf&iacute;os que afrontar. Seg&uacute;n las circunstancias, los l&iacute;deres eficaces modifican su forma de dirigir a los dem&aacute;s y de gestionar los resultados. Construyen alianzas de colaboraci&oacute;n con los miembros de su equipo. Desarrollan y aplican m&uacute;ltiples estilos de liderazgo. Como saben que el cambio es inevitable, planifican el futuro, tanto para ellos mismos como para los miembros de su equipo. Echemos un vistazo a las habilidades que necesitan los l&iacute;deres situacionales para triunfar.&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1263,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1263\/T15_L5_thumbnail_518x309.jpg",
        "product_name": "Entrevista conductual",
        "skill": "Business Skills",
        "categories": [
            "Talent Acquisition"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Para que sus contrataciones sean exitosas se requiere mucho trabajo. Existe una ciencia para identificar el talento que se adapta a las necesidades y la cultura de su empresa. El proceso de entrevistar a los candidatos en funci&oacute;n de preguntas de comportamiento es una forma comprobada de identificar a los solicitantes mejor calificados. En este curso, revisaremos los motivos y los m&eacute;todos para utilizar esta popular pr&aacute;ctica de entrevistas para que pueda aprovechar al m&aacute;ximo sus beneficios.&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1264,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1264\/C4U352_thumbnail_518x309.jpg",
        "product_name": "Una mirada profunda al Phishing",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Bienvenido a &quot;Una mirada profunda al phishing&quot;, un curso integral dise&ntilde;ado para brindarle los conocimientos y las habilidades esenciales para protegerse a s&iacute; mismo y a su empresa de los ataques de phishing. El phishing es un tipo de ciberataque en el que actores maliciosos enga&ntilde;an a las personas para que proporcionen informaci&oacute;n confidencial, como nombres de usuario, contrase&ntilde;as y datos de tarjetas de cr&eacute;dito, haci&eacute;ndose pasar por una entidad confiable de las comunicaciones digitales. Como una de las formas m&aacute;s comunes de ciberdelito, el phishing plantea amenazas significativas tanto para las personas como para las organizaciones, lo que genera p&eacute;rdidas financieras, robo de identidad y riesgos para la seguridad.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1265,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1265\/T26__L3_thumbnail_518x309.jpg",
        "product_name": "Manejo de clientes molestos",
        "skill": "Business Skills",
        "categories": [
            "Customer Focus"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Aprender a gestionar conflictos con &eacute;xito es una habilidad empresarial fundamental que vale la pena practicar. Inteligencia emocional de Daniel Goleman y Solo escucha de Mark Gouston son dos recursos entre muchos que pueden ayudarlo a fortalecer su aptitud para la gesti&oacute;n de conflictos. Las relaciones pueden ser complicadas, pero con las habilidades, la actitud y la mentalidad adecuadas, podr&aacute; abordar los problemas con calma, asegurarse de que su cliente se sienta escuchado y valorado, y llegar a una soluci&oacute;n que los satisfaga a ambos.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1266,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1266\/C4U354_thumbnail_518x309.jpg",
        "product_name": "Concientizaci\u00f3n sobre seguridad para profesionales de TI",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Este curso le proporcionar&aacute; conocimientos integrales y habilidades pr&aacute;cticas para convertirse en un empleado responsable y consciente de la seguridad. Aprender&aacute; a proteger los activos digitales de su empresa, comprender&aacute; las mejores pr&aacute;cticas para la protecci&oacute;n de datos, reconocer&aacute; posibles amenazas de seguridad y responder&aacute; de manera eficaz a diversos desaf&iacute;os de ciberseguridad. Al finalizar el curso, estar&aacute; bien preparado para contribuir a la estrategia de seguridad general de su empresa.&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1267,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1267\/C4U94_thumbnail_518x309.jpg",
        "product_name": "Mejorar el pensamiento cr\u00edtico",
        "skill": "Business Skills",
        "categories": [
            "Critical Thinking and Decision Making"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Cuando nos vemos agobiados por plazos, la mayor&iacute;a de las veces terminamos tomando decisiones apresuradas. Nos saltamos el examen de las pruebas y llegamos a la primera conclusi&oacute;n. Peor a&uacute;n, a veces elegimos una soluci&oacute;n que respalda nuestras creencias. La falta de metacognici&oacute;n o no pensar de manera cr&iacute;tica es una barrera para la toma de decisiones eficaz. Afortunadamente, el pensamiento cr&iacute;tico se puede aprender. Cuando cuestionamos nuestras presunciones, hacemos preguntas l&oacute;gicas y tenemos en cuenta muchos puntos de vista, podemos estar practicando el pensamiento cr&iacute;tico, aunque tal vez no de manera tan consciente y rigurosa como deber&iacute;amos.&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1268,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1268\/C4U85_thumbnail_518x309.jpg",
        "product_name": "Atenci\u00f3n a clientes con discapacidades",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI at Workplace"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Los clientes con discapacidades representan un gran porcentaje de la poblaci&oacute;n de consumidores actual. Seg&uacute;n la Ley de Estadounidenses con Discapacidades (ADA), m&aacute;s de 50 millones de estadounidenses tienen una discapacidad, lo que significa que aproximadamente el 18 % de la poblaci&oacute;n sufre y lidia con los efectos de alg&uacute;n tipo de discapacidad. El Departamento de Trabajo de los EE. UU. ha estimado que este segmento de la poblaci&oacute;n tiene alrededor de 175 mil millones de d&oacute;lares en poder adquisitivo discrecional, por lo que es un mercado que su empresa no puede pasar por alto, ni idealmente deber&iacute;a hacerlo. Trabajar diligentemente para atender a estos clientes no solo es bueno para los negocios, sino que es la obligaci&oacute;n legal de su empresa seg&uacute;n la ADA. Cuando comienza a centrarse en c&oacute;mo atender mejor a los clientes con discapacidades, haciendo que su empresa sea m&aacute;s accesible e inclusiva, en realidad puede ayudarlo a atender a todos los clientes.&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1269,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1269\/T19_L2_thumbnail_518x309.jpg",
        "product_name": "Convertirse en una organizaci\u00f3n de aprendizaje continuo",
        "skill": "Business Skills",
        "categories": [
            "Adaptability and Continuous Learning"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>En esta lecci&oacute;n, aprender&aacute; c&oacute;mo una cultura de aprendizaje conduce al &eacute;xito. Establecer una cultura de aprendizaje continuo en su organizaci&oacute;n requiere tiempo y esfuerzo, pero los resultados valen la inversi&oacute;n. Comience por obtener el apoyo de los ejecutivos y luego empiece a incorporar el aprendizaje en su misi&oacute;n general, sus objetivos estrat&eacute;gicos y sus declaraciones de valores. Trabaje para obtener la &ldquo;aceptaci&oacute;n&rdquo; de todos en su empresa e incl&uacute;yalos en la b&uacute;squeda de formas de aprender, ense&ntilde;ar y compartir conocimientos. Establezca sistemas y procesos f&aacute;ciles de usar que hagan del aprendizaje una parte esperada de su comportamiento corporativo. Su organizaci&oacute;n y sus empleados se beneficiar&aacute;n no solo a trav&eacute;s de una mayor productividad y mayores ganancias, sino tambi&eacute;n en el desarrollo personal y la satisfacci&oacute;n laboral.&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1270,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1270\/T10_L3_thumbnail_518x309.jpg",
        "product_name": "Liderando y gestionando equipos virtuales eficaces",
        "skill": "Business Skills",
        "categories": [
            "Leading Teams"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Las empresas est&aacute;n cambiando, y nuestras oficinas tambi&eacute;n. Los millennials de la nueva era se inclinan por el mundo virtual. Cada vez m&aacute;s empresas utilizan equipos virtuales para alcanzar los objetivos corporativos. Esto ha creado la necesidad de determinar la mejor manera de gestionar y dirigir estos grupos virtuales. Los m&eacute;todos tradicionales de gesti&oacute;n de grupos presenciales no funcionan con los trabajadores remotos, porque los equipos virtuales suelen estar compuestos por trabajadores que se encuentran repartidos en una extensi&oacute;n geogr&aacute;fica y cultural variada y se comunican, en su mayor parte, digitalmente. El Future Workforce Report afirma que el 63 % de las empresas utilizan trabajadores virtuales, pero s&oacute;lo el 57 % disponen de normas para gestionar el proceso. En esta lecci&oacute;n, aprender&aacute; a guiar eficazmente a equipos que rara vez se ven de manera presencial.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1271,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1271\/T13_L3_thumbnail_518x309.jpg",
        "product_name": "C\u00f3mo desarrollar un plan de sucesi\u00f3n de liderazgo eficaz",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>&iquest;Cu&aacute;nto tiempo dedica a desarrollar su plan de sucesi&oacute;n de liderazgo? Seg&uacute;n la Encuesta Deloitte Millennial de 2018, a medida que los l&iacute;deres de mayor edad comienzan a jubilarse a un ritmo mayor, el 65% de los l&iacute;deres millenials potenciales se sienten poco preparados para ocupar sus puestos. Forbes informa que para 2025, el 75% de la fuerza laboral estar&aacute; compuesta por millennials. Estas estad&iacute;sticas indican que hay una crisis de liderazgo en el horizonte. Dise&ntilde;ar una estrategia y un marco para dirigir el desarrollo del liderazgo es una misi&oacute;n fundamental para todas las organizaciones. Capacitar y retener a los l&iacute;deres emergentes en su empresa debe ser una prioridad m&aacute;xima. Comprender lo que los miembros del equipo quieren y esperan de un empleador lo ayudar&aacute; a desarrollar los programas y sistemas adecuados para mantener a su talento comprometido con el aprendizaje, el crecimiento y la contribuci&oacute;n a su organizaci&oacute;n.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1272,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1272\/C4U29_thumbnail_518x309.jpg",
        "product_name": "C\u00f3mo lidiar con tiradores activos",
        "skill": "Safety",
        "categories": [
            "Workplace Violence"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Bienvenidos a la capacitaci&oacute;n sobre c&oacute;mo prepararse para lidiar con tiradores activos. Si bien esta capacitaci&oacute;n es parte de la serie sobre c&oacute;mo manejar la violencia en el lugar de trabajo, la amenaza que representa un tirador activo puede darse en cualquier entorno y, por lo tanto, es una capacitaci&oacute;n &uacute;til para casi todos.&nbsp;<\/p>\r\n\r\n<p>Los tiroteos masivos se han convertido en un motivo de creciente preocupaci&oacute;n en los Estados Unidos. Seg&uacute;n Gun Violence Archive, solo en 2022 hubo 230 incidentes de tiroteos masivos en los que 4 o m&aacute;s personas recibieron disparos o fueron asesinadas (sin incluir al tirador).&nbsp;<\/p>\r\n\r\n<p>Esta alarmante tendencia solo subraya la necesidad de una preparaci&oacute;n integral para enfrentar tales situaciones. Seg&uacute;n el sitio web del Departamento de Seguridad Nacional de los EE. UU., las situaciones que involucran tiradores activos generalmente se resuelven en 10 o 15 minutos. Esto significa que las autoridades pueden no llegar a tiempo, por lo que la capacitaci&oacute;n para todos es fundamental.&nbsp;<\/p>\r\n\r\n<p>Esta capacitaci&oacute;n est&aacute; dirigida a:&nbsp;<\/p>\r\n\r\n<ul>\r\n\t<li>Profesionales de RR. HH.&nbsp;<\/li>\r\n\t<li>Manejo de instalaciones&nbsp;<\/li>\r\n\t<li>Profesionales de cumplimiento normativo&nbsp;<\/li>\r\n\t<li>Propietarios de empresas&nbsp;<\/li>\r\n\t<li>Alta direcci&oacute;n&nbsp;<\/li>\r\n\t<li>Todos los empleados&nbsp;<\/li>\r\n<\/ul>\r\n",
        "duration": "15"
    },
    {
        "id": 1273,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1273\/T33_L1_thumbnail_518x309.jpg",
        "product_name": "Establecer objetivos SMART",
        "skill": "Business Skills",
        "categories": [
            "Managing Performance"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>La gesti&oacute;n del rendimiento garantiza que las actividades diarias se centren en la consecuci&oacute;n de los objetivos de la organizaci&oacute;n.\u202fEn esta lecci&oacute;n, aprender&aacute; a establecer objetivos SMART aplicando el modelo SMART.\u202fTanto si utiliza el modelo SMART para definir los detalles de un objetivo de una peque&ntilde;a empresa como para gestionar un proyecto a nivel general de la empresa, descubrir&aacute; que este sistema aporta claridad, enfoque y flexibilidad al arte de establecer objetivos.&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1274,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1274\/T2_L4_thumbnail_518x309.jpg",
        "product_name": "RESPONSABILIZAR a las personas",
        "skill": "Business Skills",
        "categories": [
            "Leading People"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>La rendici&oacute;n de cuentas es la aceptaci&oacute;n de responsabilidad por parte de un individuo por el resultado de un trabajo, proyecto o programa. Hay cinco pasos que puede seguir para dise&ntilde;ar la responsabilidad tanto en sus procesos de trabajo como en sus empleados, para lograr objetivos de desempe&ntilde;o.<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1275,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1275\/T25_L1_thumbnail_518x309.jpg",
        "product_name": "Los beneficios del pensamiento creativo",
        "skill": "Business Skills",
        "categories": [
            "Creative Thinking & Problem Solving"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>En un estudio del Foro Econ&oacute;mico Mundial, los l&iacute;deres mencionaron la creatividad como la tercera habilidad laboral m&aacute;s importante que buscan en los empleados. Y a medida que las empresas enfrentan problemas comerciales cada vez m&aacute;s complejos, est&aacute;n capacitando a sus empleados para que sean tomadores de riesgos inteligentes y pensadores creativos. Tambi&eacute;n est&aacute;n contratando para estas competencias. A medida que aplique las recomendaciones que se brindan en este curso, sus habilidades aumentar&aacute;n, sus empleados se volver&aacute;n m&aacute;s confiados y competentes en sus habilidades y, juntos, crear&aacute;n una poderosa cultura de innovaci&oacute;n.&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1276,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1276\/C4U119_thumbnail_518x309.jpg",
        "product_name": "Diez consejos para una contrataci\u00f3n de personal exitosa",
        "skill": "Business Skills",
        "categories": [
            "Hiring Practices"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Seg&uacute;n Harvard Business Review, la mitad de los nuevos empleados fracasan en los primeros 18 meses de empleo. Estas cifras se aplican tanto a la direcci&oacute;n como a los niveles inferiores del personal. Pero &iquest;por qu&eacute; deber&iacute;a importarle esto a su empresa? Un proceso de contrataci&oacute;n fallido no solo se trata de p&eacute;rdidas monetarias en t&eacute;rminos de remuneraci&oacute;n, sino que tiene consecuencias de largo alcance. Conduce a una p&eacute;rdida de productividad y reputaci&oacute;n, y empeora la moral en la oficina. Comprender y abordar estos desaf&iacute;os es esencial para garantizar que el proceso de contrataci&oacute;n sea exitoso y que la empresa pueda atraer a los mejores talentos.&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1277,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1277\/C4U394_thumbnail_518x309.jpg",
        "product_name": "Leadership Training for Women",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader",
            "DEI"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Unlock your potential with our Leadership Training for Women course, designed to empower and equip you with the essential skills to thrive in leadership roles. This dynamic training will delve into key topics such as overcoming barriers, building confidence, and mastering negotiation techniques. You will learn how to navigate challenges unique to women leaders, leverage tools like the BATNA model for effective negotiations, and develop traits that set you apart as a successful leader.<\/p>\r\n\r\n<p>In this course you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1278,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1278\/C4U395_thumbnail_518x309.jpg",
        "product_name": "Inclusion for Workers With Disabilities",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>&ldquo;Disability Inclusion in the Workplace&quot; by the U.S. Department of Labor refers to\u202fthe practice of creating a work environment where individuals with disabilities are fully valued, have equal opportunities to succeed, and are not discriminated against, allowing them to contribute their skills and abilities without barriers, essentially promoting an inclusive workplace for all employees regardless of their disability status.&rdquo;<\/p>\r\n\r\n<p>In this course, you will:\u202f&nbsp;&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1280,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1280\/C4U397_thumbnail_518x309.jpg",
        "product_name": "Accountability in DEI",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>This course will guide you through understanding the critical role of accountability in creating an inclusive workplace, aligning with federal policies and best practices. You will explore how to set measurable DEI goals, track progress, and implement strategies to ensure that both individuals and teams are responsible for driving positive outcomes. By fostering a culture of accountability, organizations can build trust, encourage engagement, and achieve sustained DEI success.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1298,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1298\/C4U136_LM01_Basic%20Digital%20Skills_518x309.jpg",
        "product_name": "Grundlegende Digitale Kompetenzen",
        "skill": "Business Skills",
        "categories": [
            "Leadership and Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "German",
        "description": "<p>Aufgrund der zunehmenden digitalen Transformation und Technologie ist eine grundlegende digitale Kompetenz f&uuml;r alle Arten von&nbsp; Arbeitspl&auml;tzenunerl&auml;sslich, unabh&auml;ngig von der Branche. Um wettbewerbsf&auml;hig zu bleiben und am Arbeitsplatz erfolgreich zu sein, sollte die Verbesserung Ihrer digitalen Kompetenzen oberste Priorit&auml;t haben.&nbsp;<\/p>\r\n\r\n<p>In diesem Kurs werden Sie:&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1304,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1304\/C4U401_thumbnail_518x309.jpg",
        "product_name": "Understanding 360-Degree Feedback\u00a0",
        "skill": "Business Skills",
        "categories": [
            "Effective Feedback"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Effective feedback mechanisms are crucial for personal and professional development. 360-degree feedback, also known as multi-rater feedback, is a comprehensive evaluation system that gathers input from an individual&#39;s supervisors, peers, subordinates, and sometimes clients. &nbsp;<\/p>\r\n\r\n<p>This holistic approach offers a well-rounded perspective on performance, fostering self-awareness and continuous improvement. Organizations implementing this system have reported enhanced employee engagement, improved communication, and a stronger alignment between individual performance and organizational goals.&nbsp;<\/p>\r\n\r\n<p>This course is designed for:&nbsp;<\/p>\r\n\r\n<ul>\r\n\t<li>HR managers aiming to implement robust feedback systems&nbsp;<\/li>\r\n\t<li>Team leaders and supervisors looking to foster a culture of open communication&nbsp;<\/li>\r\n\t<li>Employees interested in personal development through comprehensive feedback&nbsp;<\/li>\r\n<\/ul>\r\n",
        "duration": "15"
    },
    {
        "id": 1317,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1317\/T9_L2_thumbnail_518x309.jpg",
        "product_name": "Pers\u00f6nliche Kompetenz ",
        "skill": "Wellness",
        "categories": [
            "Emotional Intelligence"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "German",
        "description": "<p>In dieser Lektion werden wir uns mit den ersten beiden Schritten von Golemans vier Komponenten der emotionalen Intelligenz befassen, der Selbsterkenntnis und dem Selbstmanagement. Nach Goleman ist die Selbstwahrnehmung das Fundament f&uuml;r alle anderen Kompetenzen. Ohne zu erkennen, was Sie f&uuml;hlen, k&ouml;nnen Sie die anderen Kompetenzen nicht entwickeln. Sie hilft Ihnen, mit Ihren Emotionen umzugehen, um zu verhindern, dass sie Ihre Arbeit beeintr&auml;chtigen. Au&szlig;erdem k&ouml;nnen Sie diese Emotionen nutzen, um sich von emotionalen Belastungen zu erholen. Selbstmanagement entsteht aus Selbsterkenntnis. Es hilft Ihnen, Situationen aus der Perspektive anderer zu verstehen und zwischenmenschliche Beziehungen zu pflegen.&nbsp;<\/p>\r\n\r\n<p>In diesem Kurs werden Sie:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1320,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1320\/C4U136_LM01_Basic%20Digital%20Skills_518x309.jpg",
        "product_name": "Comp\u00e9tences num\u00e9riques de base",
        "skill": "Business Skills",
        "categories": [
            "Leadership and Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "French",
        "description": "<p>Avec l&#39;essor de la transformation num&eacute;rique et de la technologie, disposer d&#39;une culture num&eacute;rique de base est essentiel pour tous les types d&#39;emplois, quel que soit le secteur d&#39;activit&eacute;. Pour rester comp&eacute;titif et r&eacute;ussir sur le lieu de travail, l&#39;am&eacute;lioration de vos comp&eacute;tences num&eacute;riques devrait &ecirc;tre une priorit&eacute; absolue.&nbsp;<\/p>\r\n\r\n<p>Dans ce cours, vous allez :&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1554,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1554\/T9_L1_thumbnail_518x309.jpg",
        "product_name": "Introduction \u00e0 l'intelligence \u00e9motionnelle ",
        "skill": "Wellness",
        "categories": [
            "Emotional Intelligence"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "French",
        "description": "<p>Vous avez tir&eacute; parti de votre formation, de votre exp&eacute;rience professionnelle, de votre travail acharn&eacute; et de vos comp&eacute;tences en affaires pour arriver &agrave; ce stade de votre carri&egrave;re. Vous avez maintenant la responsabilit&eacute; de diriger une &eacute;quipe afin d&#39;atteindre les objectifs de votre entreprise. Saviez-vous qu&#39;il existe une autre comp&eacute;tence qui sera essentielle &agrave; votre r&eacute;ussite et &agrave; votre avancement ? Il s&#39;agit de l&#39;intelligence &eacute;motionnelle (QE), qui est un sujet d&#39;actualit&eacute; dans le monde des affaires.&nbsp;<\/p>\r\n\r\n<p>Dans ce cours, vous :<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 1555,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1555\/T9_L2_thumbnail_518x309.jpg",
        "product_name": "Comp\u00e9tence personnelle ",
        "skill": "Wellness",
        "categories": [
            "Emotional Intelligence"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "French",
        "description": "<p>Dans cette le&ccedil;on, nous &eacute;tudierons les deux premi&egrave;res &eacute;tapes des quatre composantes de l&#39;intelligence &eacute;motionnelle de Goleman, la conscience de soi et l&#39;autogestion. Selon Goleman, la conscience de soi est la pierre angulaire de toutes les autres comp&eacute;tences. Si vous ne reconnaissez pas ce que vous ressentez, vous ne pouvez pas passer &agrave; d&#39;autres comp&eacute;tences. Elle vous aide &agrave; g&eacute;rer vos &eacute;motions afin d&#39;&eacute;viter qu&#39;elles n&#39;interf&egrave;rent avec votre travail et &agrave; les utiliser pour faciliter et surmonter une d&eacute;tresse &eacute;motionnelle. L&#39;autogestion d&eacute;coule de la conscience de soi. Elle aide &agrave; comprendre les situations du point de vue des autres et &agrave; cultiver les relations.&nbsp;<\/p>\r\n\r\n<p>Dans ce cours, vous :<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 1556,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1556\/C4U_73_thumbnail_518x309.jpg",
        "product_name": "Attaques de cybers\u00e9curit\u00e9 des r\u00e9seaux - gestion et surveillance ",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "French",
        "description": "<p>La s&eacute;curit&eacute; des r&eacute;seaux devient un domaine d&#39;int&eacute;r&ecirc;t majeur &agrave; une &eacute;poque o&ugrave; les&nbsp; cyberattaques&nbsp; se multiplient. La s&eacute;curit&eacute; des r&eacute;seaux ne consiste pas seulement &agrave; prot&eacute;ger le r&eacute;seau contre les menaces ext&eacute;rieures, mais aussi &agrave; &ecirc;tre conscient des vuln&eacute;rabilit&eacute;s au sein du r&eacute;seau.&nbsp;<\/p>\r\n\r\n<p>Dans ce cours, vous :<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 1557,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1557\/T9_L1_thumbnail_518x309.jpg",
        "product_name": "Einf\u00fchrung in das Thema Emotionale Intelligenz ",
        "skill": "Wellness",
        "categories": [
            "Emotional Intelligence"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "German",
        "description": "<p>Dank Ihrer Ausbildung, Ihrer Berufserfahrung, Ihrer harten Arbeit und Ihrer unternehmerischen F&auml;higkeiten haben Sie es bis zu diesem Punkt Ihrer Karriere geschafft. Heute tragen Sie die Verantwortung f&uuml;r die Leitung eines Teams, das die Ziele Ihres Unternehmens erreichen soll. Haben Sie gewusst, dass es noch eine weitere F&auml;higkeit gibt, die f&uuml;r Ihren anhaltenden Erfolg und Ihr Weiterkommen entscheidend sein wird? Sie wird Emotionale Intelligenz (EQ) genannt und ist ein wichtiges Thema in der heutigen Gesch&auml;ftswelt.&nbsp;<\/p>\r\n\r\n<p>In diesem Kurs werden Sie:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 1558,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1558\/C4U_73_thumbnail_518x309.jpg",
        "product_name": "Angriffe auf die netzwerk-Cybersicherheit - Steuerung und \u00fcberwachung ",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "German",
        "description": "<p>Die Sicherheit von Netzwerken ist in Zeiten zunehmender Cyberangriffe zu einem wichtigen Schwerpunktbereich geworden. Beim Thema Netzwerksicherheit geht es aber nicht nur darum, Ihr Netzwerk vor Bedrohungen von au&szlig;en zu sch&uuml;tzen, sondern auch darum, sich der Schwachstellen innerhalb des Netzwerks bewusst zu sein.&nbsp;<\/p>\r\n\r\n<p>In diesem Kurs werden Sie:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 1561,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1561\/T9_L4_thumbnail_518x309.jpg",
        "product_name": "Strat\u00e9gies d'intelligence \u00e9motionnelle ",
        "skill": "Wellness",
        "categories": [
            "Emotional Intelligence"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "French",
        "description": "<p>Dans les le&ccedil;ons pr&eacute;c&eacute;dentes, vous avez appris les quatre comp&eacute;tences que sont la conscience de soi, l&#39;autogestion, la conscience sociale et la gestion des relations afin d&#39;accro&icirc;tre votre QE et de renforcer votre capacit&eacute; &agrave; vous g&eacute;rer et &agrave; influencer les autres. L&#39;am&eacute;lioration de votre intelligence &eacute;motionnelle vous permettra d&#39;exploiter encore davantage vos comp&eacute;tences, votre QI, votre personnalit&eacute;, votre formation et votre exp&eacute;rience. Cela devrait s&#39;aligner sur les avantages de l&#39;am&eacute;lioration du QE en tant que dirigeant, en ce qui concerne la mani&egrave;re dont ils traitent leurs collaborateurs et am&eacute;liorent leurs comp&eacute;tences en mati&egrave;re de leadership.&nbsp; Ayez en t&ecirc;te que vous pouvez avoir le meilleur plan et la meilleure strat&eacute;gie, mais que cela n&#39;aura aucune importance si vous ne communiquez pas cette strat&eacute;gie &agrave; votre &eacute;quipe, si vous ne la persuadez pas de travailler dessus, si vous n&#39;&eacute;coutez pas ses commentaires et si vous ne la guidez pas &agrave; travers les obstacles. Vous y parviendrez en faisant preuve d&#39;un QE &eacute;lev&eacute;. Dans cette le&ccedil;on, nous d&eacute;crirons quelques strat&eacute;gies, exercices et id&eacute;es que vous pouvez utiliser pour devenir un leader &eacute;motionnellement intelligent. Vous avez besoin de comp&eacute;tences relationnelles pour ex&eacute;cuter et r&eacute;ussir votre plan. En d&eacute;veloppant votre QE, vous renforcerez votre arsenal de leadership.&nbsp;<\/p>\r\n\r\n<p>&Agrave; la fin de ce cours, vous serez capable de :&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1576,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1576\/T9_L4_thumbnail_518x309.jpg",
        "product_name": "Strategien der Emotionale Intelligenz",
        "skill": "Wellness",
        "categories": [
            "Emotional Intelligence"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "German",
        "description": "<p>In den vorangegangenen Lektionen haben Sie die vier F&auml;higkeiten kennen gelernt, mit denen Sie Ihren EQ steigern und Ihre F&auml;higkeit st&auml;rken k&ouml;nnen, sich selbst zu managen und andere zu beeinflussen: Selbstbewusstsein, Selbstmanagement, soziales Bewusstsein und Beziehungsmanagement. Die Steigerung Ihrer emotionalen Intelligenz wird Ihre bereits vorhandenen F&auml;higkeiten, Ihren IQ, Ihre Pers&ouml;nlichkeit, Ihre Ausbildung und Ihre Erfahrung noch mehr hervorheben. Dadurch werden die Vorteile der Steigerung Ihres EQ als F&uuml;hrungskraft im Hinblick auf den Umgang mit Ihren Mitarbeitern und die Verbesserung Ihrer F&uuml;hrungsqualit&auml;ten deutlich. Bedenken Sie, dass Sie zwar den besten Plan und die beste Strategie haben, aber das wird nichts n&uuml;tzen, wenn Sie diese Strategie nicht an Ihr Team weitergeben, sie davon &uuml;berzeugen, daran zu arbeiten, auf ihre Meinungen h&ouml;ren und sie durch alle m&ouml;glichen Herausforderungen f&uuml;hren. Aber mit einer starken EQ wird es Ihnen gelingen. In dieser Lektion werden wir Ihnen einige Strategien, &Uuml;bungen und Ideen vorstellen, die Sie nutzen k&ouml;nnen, um eine emotional intelligente F&uuml;hrungskraft zu werden. Sie ben&ouml;tigen Menschenkenntnis, um Ihren Plan umzusetzen und erfolgreich zu sein. Die Entwicklung Ihres EQ wird Ihre F&uuml;hrungsf&auml;higkeiten deutlich verbessern.<\/p>\r\n\r\n<p>In diesem Kurs werden Sie:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 1578,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1578\/T11_L3_thumbnail_518x309.jpg",
        "product_name": "Konfliktl\u00f6sung ",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "German",
        "description": "<p>Es ist ein Naturgesetz: Wenn Sie mit Menschen zusammenarbeiten, wird es Konflikte geben. Wenn Menschen mit unterschiedlichen Ansichten, Hintergr&uuml;nden, Pers&ouml;nlichkeiten, Arbeitsethiken und Branchenerfahrungen zusammenkommen, sind Unstimmigkeiten und Meinungsverschiedenheiten nicht zu vermeiden. Kluge F&uuml;hrungskr&auml;fte akzeptieren daher, dass Konflikte ein Teil ihrer Arbeit sind, sie stellen sich darauf ein und haben einen Plan, um sie zu l&ouml;sen. Effektive Konfliktl&ouml;sung erfordert allerdings &Uuml;bung. Bitten Sie einen erfahrenen Kollegen, Ihre Personalabteilung oder Ihren Vorgesetzten um Vorschl&auml;ge f&uuml;r den Umgang mit diesem Problem. Denken Sie daran, dass Sie Konflikte zwar nicht ganz vermeiden k&ouml;nnen, aber Sie k&ouml;nnen ein Umfeld und einen Prozess schaffen, der den Schaden, den Konflikte verursachen k&ouml;nnen, minimiert.&nbsp;<\/p>\r\n\r\n<p>Werden Konflikte erfolgreich bew&auml;ltigt, k&ouml;nnen sie zu Innovationen, st&auml;rkeren Teams und einer besseren pers&ouml;nlichen Entwicklung f&uuml;hren - f&uuml;r Sie und Ihre Mitarbeiter.&nbsp;<\/p>\r\n\r\n<p>In diesem Kurs werden Sie:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 1581,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1581\/T9_L3_thumbnail_518x309.jpg",
        "product_name": "Soziale kompetenz",
        "skill": "Wellness",
        "categories": [
            "Emotional Intelligence"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "German",
        "description": "<p>In dieser Lektion werden wir uns mit sozialem Bewusstsein und Beziehungsmanagement besch&auml;ftigen, die im Modell der emotionalen Intelligenz von Bradberry und Greaves unter den Begriff &bdquo;Soziale F&auml;higkeit&ldquo; fallen.&nbsp;Soziales Bewusstsein ist die F&auml;higkeit, Empathie und aktives Zuh&ouml;ren einzusetzen, um andere besser zu verstehen. Eine F&uuml;hrungskraft mit ausgepr&auml;gtem sozialem Bewusstsein ist nicht nur in der Lage, ihre eigenen Emotionen zu erkennen, sondern kann dies auch bei anderen tun.&nbsp;&nbsp;Beziehungsmanagement bedeutet, alle Ihre EQ-F&auml;higkeiten einzusetzen, um stabile Beziehungen aufzubauen und Ihre Interaktionen mit anderen zu steuern.&nbsp;<\/p>\r\n\r\n<p>In diesem Kurs werden Sie:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 1584,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1584\/C4UH351_thumbnail_518x309.jpg",
        "product_name": "Datenschutz und Datensicherheit ",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "German",
        "description": "<p>In unserer Zeit sind digitale Informationen ein wertvolles Gut. Das Verst&auml;ndnis von Datenschutz und&nbsp; Datensicherheit ist daher wichtiger denn je. Dieser Kurs befasst sich mit den grundlegenden Prinzipien und Praktiken, die erforderlich sind, um sensible Daten vor unbefugtem Zugriff und Verst&ouml;&szlig;en zu sch&uuml;tzen. Sie lernen die neuesten Techniken zum Schutz von Daten kennen und entwickeln die notwendigen F&auml;higkeiten, um auf Vorf&auml;lle im Bereich der Datensicherheit effektiv zu reagieren. Ganz gleich, ob Sie als Fachmann Ihr Wissen erweitern m&ouml;chten oder einfach nur daran interessiert sind, Ihre personenbezogenen Daten zu sch&uuml;tzen, dieser Kurs bietet Ihnen wichtige Einblicke und praktische Hilfsmittel, um die Komplexit&auml;t des Datenschutzes und der Datensicherheit in der heutigen vernetzten Welt erfolgreich zu bew&auml;ltigen.&nbsp;<\/p>\r\n\r\n<p>In diesem Kurs werden Sie:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1585,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1585\/T11_L6_thumbnail_518x309.jpg",
        "product_name": "Wirksames Feedback geben ",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "German",
        "description": "<p>Konstruktives Feedback kann Ihren Mitarbeitern helfen, ihre Arbeit besser zu machen. Es hilft , Ihr Team zu st&auml;rken und die Gesamtleistung zu verbessern. Viele F&uuml;hrungskr&auml;fte sind nicht in der Lage, konstruktives Feedback zu geben. Daher erzielen sie nicht die erwarteten Ergebnisse und manchmal wirkt sich dies auch negativ auf die Beziehung zu ihren Mitarbeitern aus. Um dies zu vermeiden, z&ouml;gern viele F&uuml;hrungskr&auml;fte daher, Feedback zu geben.&nbsp;Konstruktives Feedback ist eine hervorragende Gelegenheit, Ihre Teammitglieder darin zu schulen, wie sie sich zu produktiveren und unabh&auml;ngigeren Mitarbeitern entwickeln k&ouml;nnen. Wenn das Geben und Empfangen von positivem und negativem Feedback zur Routine im Arbeitsalltag eines jeden Mitarbeiters wird, sind Sie und Ihr Team auf dem besten Weg zum pers&ouml;nlichen und organisatorischen Erfolg.&nbsp;<\/p>\r\n\r\n<p>In diesem Kurs werden Sie:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1586,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1586\/C4UM29_thumbnail_518x309.jpg",
        "product_name": "Der Zusammenhang zwischen Datensicherheit und Datenschutz",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "German",
        "description": "<p>Die Menge an Daten, die in Unternehmen erstellt und gespeichert werden, hat sich in rasantem Tempo erh&ouml;ht, so dass die Sicherung dieser Daten immer wichtiger wird. Hinzu kommt, dass der Gesch&auml;ftsbetrieb zunehmend von Daten abh&auml;ngt, elbst eine kurze Ausfallzeit oder ein kleiner Datenverlust kann sich bereits erheblich auf ein Unternehmen auswirken. Heute werden wir sehen, wie Organisationen ihre Daten vor allen unerw&uuml;nschten Aktivit&auml;ten sch&uuml;tzen k&ouml;nnen.&nbsp;<\/p>\r\n\r\n<p>In diesem Kurs werden Sie:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1599,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1599\/C4UH351_thumbnail_518x309.jpg",
        "product_name": "Protection des donn\u00e9es et de la confidentialit\u00e9 ",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "French",
        "description": "<p>&Agrave; une &eacute;poque o&ugrave; l&#39;information num&eacute;rique est un bien pr&eacute;cieux, il est plus que jamais essentiel de comprendre les notions de confidentialit&eacute; et de s&eacute;curit&eacute; des donn&eacute;es. Ce cours aborde les principes fondamentaux et les pratiques n&eacute;cessaires pour prot&eacute;ger les informations sensibles contre les acc&egrave;s non autoris&eacute;s et les violations. Vous explorerez les derni&egrave;res techniques de s&eacute;curisation des donn&eacute;es et d&eacute;velopperez les comp&eacute;tences n&eacute;cessaires pour r&eacute;pondre efficacement aux incidents de s&eacute;curit&eacute;. Que vous soyez un professionnel cherchant &agrave; am&eacute;liorer votre expertise ou que vous soyez tout simplement int&eacute;ress&eacute; par la protection de vos informations personnelles, ce cours fournit des informations essentielles et des outils pratiques pour naviguer dans les complexit&eacute;s de la confidentialit&eacute; et de la s&eacute;curit&eacute; des donn&eacute;es dans le monde interconnect&eacute; d&#39;aujourd&#39;hui.&nbsp;<\/p>\r\n\r\n<p>Ce cours vous permettra de :<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1600,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1600\/T11_L3_thumbnail_518x309.jpg",
        "product_name": "R\u00e9solution des conflits\u00a0",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "French",
        "description": "<p>C&#39;est une loi de la nature : si vous travaillez avec des gens, vous aurez des conflits. Lorsque des personnes ayant des points de vue, des ant&eacute;c&eacute;dents, des personnalit&eacute;s, une &eacute;thique de travail et une exp&eacute;rience industrielle diff&eacute;rents se rencontrent, la discorde et les divergences d&#39;opinion sont in&eacute;vitables. Les dirigeants avis&eacute;s acceptent que les conflits fassent partie du travail, ils les anticipent et disposent d&#39;un plan pour y faire face. La r&eacute;solution efficace des conflits demande de la pratique. Vous pouvez demander &agrave; un coll&egrave;gue exp&eacute;riment&eacute;, &agrave; votre service des ressources humaines ou &agrave; votre sup&eacute;rieur hi&eacute;rarchique de vous donner des conseils sur la mani&egrave;re de g&eacute;rer ce probl&egrave;me. Sachez que m&ecirc;me si vous ne pouvez pas &eacute;viter compl&egrave;tement les conflits, vous pouvez cr&eacute;er un environnement et un processus qui minimisent les dommages qu&#39;ils peuvent causer. S&#39;il est bien g&eacute;r&eacute;, le conflit peut conduire &agrave; l&#39;innovation, &agrave; des &eacute;quipes plus fortes et &agrave; un meilleur d&eacute;veloppement personnel - pour vous et vos employ&eacute;s.<\/p>\r\n\r\n<p>Dans ce cours, vous :<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 1601,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1601\/T9_L3_thumbnail_518x309.jpg",
        "product_name": "Comp\u00e9tence sociale ",
        "skill": "Wellness",
        "categories": [
            "Emotional Intelligence"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "French",
        "description": "<p>Dans cette le&ccedil;on, nous &eacute;tudierons la conscience sociale et la gestion des relations, qui rel&egrave;vent de la &laquo; comp&eacute;tence sociale &raquo; dans le mod&egrave;le d&#39;intelligence &eacute;motionnelle de Bradberry et Greaves.&nbsp;La conscience sociale est la capacit&eacute; &agrave; utiliser l&#39;empathie et l&#39;&eacute;coute active pour mieux comprendre les autres. Les leaders dot&eacute;s d&#39;une forte conscience sociale sont non seulement capables de lire avec pr&eacute;cision leurs &eacute;motions, mais aussi de faire de m&ecirc;me avec les autres. La gestion des relations consiste &agrave; utiliser toutes les comp&eacute;tences en mati&egrave;re de QE pour &eacute;tablir des relations solides et g&eacute;rer les interactions avec les autres.&nbsp;<\/p>\r\n\r\n<p>Dans ce cours, vous :<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 1602,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1602\/C4U402_thumbnail_518x309.jpg",
        "product_name": "Understanding 360-Degree Feedback Reports",
        "skill": "Business Skills",
        "categories": [
            "Effective Feedback"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In today&#39;s dynamic professional landscape, comprehending and effectively utilizing 360-degree feedback reports is essential for personal and organizational growth. This course is meticulously designed to equip you with the knowledge and skills to interpret these comprehensive evaluations, facilitating informed development strategies.&nbsp;<\/p>\r\n\r\n<p>This course is meant for:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1603,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1603\/C4U405_thumbnail_518x309.jpg",
        "product_name": "360-Degree Feedback and Personal Development Plans ",
        "skill": "Business Skills",
        "categories": [
            "Effective Feedback"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>On your quest for success, insights and feedback can go a long way in identifying gaps and helping you focus on areas that might be holding you back.&nbsp;&nbsp;<\/p>\r\n\r\n<p>This course equips you with actionable tools to enhance self-awareness, identify strengths, and address development areas through 360-degree feedback and Personal Development Plans (PDPs). You&rsquo;ll learn how to turn feedback into a powerful tool for personal and professional growth while aligning your goals with organizational objectives.<\/p>\r\n\r\n<p>This course is designed for:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1604,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1604\/C4U403_thumbnail_518x309.jpg",
        "product_name": "Boosting Efficiency with Microsoft Copilot ",
        "skill": "Business Skills",
        "categories": [
            "Technical Skills"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>This course is designed to empower you with the tools and knowledge to achieve unparalleled productivity through Generative AI. You will understand the intricacies of Microsoft Copilot, an AI-driven assistant seamlessly integrated into the tools you use daily, like Word, Excel, Teams, and Outlook.&nbsp;<\/p>\r\n\r\n<p>You&rsquo;ll gain hands-on experience with Copilot&rsquo;s powerful features &ndash; from crafting compelling content to analyzing complex datasets &ndash; while learning best practices for ethical and effective use.&nbsp;<\/p>\r\n\r\n<p>In this course, you will:&nbsp;<\/p>\r\n",
        "duration": "20"
    },
    {
        "id": 1606,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1606\/T11_L6_thumbnail_518x309.jpg",
        "product_name": "Donner un feedback efficace",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "French",
        "description": "<p>Le feedback constructif a la capacit&eacute; d&#39;aider vos employ&eacute;s &agrave; mieux faire leur travail. Il contribue &agrave; renforcer votre &eacute;quipe et &agrave; am&eacute;liorer les performances globales. De nombreux managers sont incapables de donner un feedback constructif ; par cons&eacute;quent, ils n&#39;obtiennent pas les r&eacute;sultats escompt&eacute;s et leurs relations avec leurs employ&eacute;s s&#39;en ressentent parfois. Pour &eacute;viter cela, de nombreux managers sont r&eacute;ticents &agrave; fournir un feedback. Le feedback constructif est l&#39;occasion d&#39;aider les membres de votre &eacute;quipe &agrave; devenir des collaborateurs plus productifs et plus ind&eacute;pendants. Lorsque le fait de donner et de recevoir un feedback positif et n&eacute;gatif devient un &eacute;l&eacute;ment de routine dans la journ&eacute;e de travail de chacun, vous et votre &eacute;quipe &ecirc;tes sur la voie de la r&eacute;ussite personnelle et organisationnelle.<\/p>\r\n\r\n<p>Dans ce cours, vous :&nbsp;<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 1607,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1607\/C4UM29_thumbnail_518x309.jpg",
        "product_name": "Relation entre la protection des donn\u00e9es et la confidentialit\u00e9",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "French",
        "description": "<p>Les donn&eacute;es cr&eacute;&eacute;es et stock&eacute;es dans les organisations se sont multipli&eacute;es &agrave; une vitesse extraordinaire, ce qui a rendu la s&eacute;curisation de ces donn&eacute;es de plus en plus importante. En outre, les activit&eacute;s des entreprises d&eacute;pendent de plus en plus des donn&eacute;es, et m&ecirc;me un court temps d&#39;arr&ecirc;t ou une petite perte de donn&eacute;es peut affecter consid&eacute;rablement une entreprise. Aujourd&#39;hui, nous allons voir comment les organisations peuvent prot&eacute;ger leurs donn&eacute;es de toutes les activit&eacute;s ind&eacute;sirables.<\/p>\r\n\r\n<p>Dans ce cours, vous :&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1629,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1629\/C4U404_thumbnail_518x309.jpg",
        "product_name": "Boosting Efficiency With Google Gemini",
        "skill": "Business Skills",
        "categories": [
            "Technical Skills"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>This course is designed to empower you with the tools and knowledge to achieve unparalleled productivity through Generative AI. You will understand the intricacies of Google Gemini, an AI-driven assistant seamlessly integrated into the tools you use daily, like Gmail, Docs, Sheets, Meet, etc.&nbsp;<\/p>\r\n\r\n<p>You&rsquo;ll understand Gemini&rsquo;s powerful features &ndash; from crafting compelling content to analyzing complex datasets &ndash; all while learning best practices for ethical and effective use.&nbsp;<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1633,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1633\/T33_L1_thumbnail_518x309.jpg",
        "product_name": "SMART-Ziele setzen ",
        "skill": "Business Skills",
        "categories": [
            "Managing Performance"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "German",
        "description": "<p>Das Leistungsmanagement stellt sicher, dass die t&auml;glichen Aktivit&auml;ten auf die Erreichung der Unternehmensziele ausgerichtet sind. In dieser Lektion lernen Sie, wie Sie SMART-Ziele setzen, indem Sie das SMART-Modell anwenden. Unabh&auml;ngig davon, ob Sie das SMART-Modell verwenden, um die Einzelheiten eines kleinen Unternehmensziels zu definieren oder um ein unternehmensweites Projekt zu verwalten, werden Sie feststellen, dass diese Methode Klarheit, Konzentration und Flexibilit&auml;t in die Kunst der Zielsetzung einbringt.<\/p>\r\n\r\n<p>In diesem Kurs werden Sie:&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1638,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1638\/T33_L1_thumbnail_518x309.jpg",
        "product_name": "Fixer des objectifs SMART",
        "skill": "Business Skills",
        "categories": [
            "Managing Performance"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "French",
        "description": "<p>La gestion des performances garantit que les activit&eacute;s quotidiennes sont ax&eacute;es sur la r&eacute;alisation des objectifs de l&#39;organisation. Dans cette le&ccedil;on, vous apprendrez &agrave; d&eacute;finir des objectifs SMART en appliquant le mod&egrave;le SMART. Que vous utilisiez le mod&egrave;le SMART pour d&eacute;finir les sp&eacute;cificit&eacute;s d&#39;un petit objectif commercial ou pour g&eacute;rer un projet &agrave; l&#39;&eacute;chelle de l&#39;entreprise, vous constaterez que ce syst&egrave;me apporte clart&eacute;, concentration et flexibilit&eacute; &agrave; l&#39;art de la d&eacute;finition des objectifs.&nbsp;<\/p>\r\n\r\n<p>Dans ce cours, vous :<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1650,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1650\/T9_L4_thumbnail_518x309.jpg",
        "product_name": "Strategie di intelligenza emotiva ",
        "skill": "Wellness",
        "categories": [
            "Emotional Intelligence"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Italian",
        "description": "<p>Nelle lezioni precedenti, hai imparato le quattro competenze di autoconsapevolezza, gestione di s&eacute;, consapevolezza sociale e gestione delle relazioni per aumentare il tuo QE e rafforzare la tua capacit&agrave; di gestire te stesso e influenzare gli altri. Aumentare la tua intelligenza emotiva influenzer&agrave; ancora di pi&ugrave; le tue competenze esistenti, il tuo QI, la tua personalit&agrave;, la tua istruzione e la tua esperienza. Ci&ograve; dovrebbe allinearsi ai vantaggi dell&rsquo;aumento del tuo QE come leader in termini di come si rapportano con le persone e aumentano le loro capacit&agrave; di leadership.&nbsp;Considera che potresti avere il miglior piano e la migliore strategia, ma non avr&agrave; importanza se non comunichi questa strategia al tuo team, li convinci a lavorarci, ascolti i loro input e li guidi attraverso gli ostacoli. Sarai in grado di farlo attraverso una dimostrazione di forte QE.&nbsp;In questa lezione, delineeremo alcune strategie, esercizi e idee che puoi usare per diventare un leader emotivamente intelligente. Hai bisogno di competenze interpersonali per eseguire e avere successo nel tuo piano. Sviluppare il tuo QE potenzier&agrave; il tuo arsenale di leadership.&nbsp;<\/p>\r\n\r\n<p>In questo corso imparerai:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 1651,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1651\/C4U136_LM01_Basic%20Digital%20Skills_518x309.jpg",
        "product_name": "Competenze digitali di base",
        "skill": "Business Skills",
        "categories": [
            "Leadership and Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Italian",
        "description": "<p>Con l&rsquo;avvento della trasformazione digitale e della tecnologia, avere una conoscenza digitale di base &egrave; essenziale per tutti i tipi di lavoro, indipendentemente dal settore. Per rimanere competitivi e avere successo sul posto di lavoro, migliorare le proprie competenze digitali dovrebbe essere una priorit&agrave; assoluta.<\/p>\r\n\r\n<p>In questo corso, sarai in grado di:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 1652,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1652\/T9_L1_thumbnail_518x309.jpg",
        "product_name": "Introduzione all\u2019Intelligenza Emotiva ",
        "skill": "Wellness",
        "categories": [
            "Emotional Intelligence"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Italian",
        "description": "<p>Hai sfruttato la tua istruzione, esperienza professionale, duro lavoro e capacit&agrave; imprenditoriali per arrivare a questo punto della tua carriera. Ora sei responsabile della guida di un team per raggiungere gli obiettivi e i traguardi prefissati della tua azienda. Sapevi che esiste un&#39;altra competenza fondamentale per il tuo successo e la tua crescita personale? Si chiama Intelligenza Emotiva (IE) ed &egrave; un argomento di grande attualit&agrave; nel mondo degli affari.<\/p>\r\n\r\n<p>In questo corso imparerai:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 1653,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1653\/T9_L2_thumbnail_518x309.jpg",
        "product_name": "Competenza personale ",
        "skill": "Wellness",
        "categories": [
            "Emotional Intelligence"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Italian",
        "description": "<p>In questa lezione, studieremo i primi due passaggi delle quattro componenti dell&rsquo;intelligenza emotiva di Goleman, consapevolezza di s&eacute; e gestione di s&eacute;. Secondo Goleman, la consapevolezza di s&eacute; &egrave; il fondamento di tutte le altre competenze. Senza riconoscere ci&ograve; che stai provando, non puoi procedere ad altre competenze. Questa competenza aiuta a gestire le tue emozioni per evitare che interferiscano nel lavoro e a utilizzarle per facilitare e recuperare dallo stress emotivo. La gestione di s&eacute; deriva dalla consapevolezza di s&eacute;. Aiuta a comprendere le situazioni dal punto di vista degli altri e a coltivare relazioni.<\/p>\r\n\r\n<p>In questo corso imparerai:<\/p>\r\n",
        "duration": "11"
    },
    {
        "id": 1654,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1654\/C4U_73_thumbnail_518x309.jpg",
        "product_name": "Attacchi alla sicurezza informatica di rete \u2013 Gestione e monitoraggio ",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Italian",
        "description": "<p>La sicurezza di rete sta diventando un&rsquo;area di interesse fondamentale in un&rsquo;epoca di attacchi informatici in aumento. La sicurezza di rete non riguarda solo la protezione della rete da minacce esterne, ma anche la consapevolezza delle vulnerabilit&agrave; all&rsquo;interno della rete.<\/p>\r\n\r\n<p>In questo corso imparerai:<\/p>\r\n",
        "duration": "13"
    },
    {
        "id": 1663,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1663\/C4U406_thumbnail_518x309.jpg",
        "product_name": "Sustaining Team and Employee Engagement",
        "skill": "Business Skills",
        "categories": [
            "Managing Teams"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The challenge in sustaining high-performing teams lies in maintaining motivation, fostering collaboration, and addressing gaps in morale that arise over time.<\/p>\r\n\r\n<p>Whether it&rsquo;s recognizing the contributions of seasoned team members, empowering mid-level employees with growth opportunities, or guiding new hires to find their footing, effective team-building strategies are essential for long-term success.<\/p>\r\n\r\n<p>This course is designed for:<\/p>\r\n\r\n<ul>\r\n\t<li>HR managers aiming to implement effective engagement and recognition strategies<\/li>\r\n\t<li>Team leaders and supervisors looking to build trust and strengthen team cohesion<\/li>\r\n\t<li>And employees who want to enhance their workplace dynamics and contribute to a more engaged and productive team<\/li>\r\n<\/ul>\r\n\r\n<p>By the end of this course, you will be able to:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1664,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1664\/C4U407_thumbnail_518x309.jpg",
        "product_name": "Delegation Skills and Styles ",
        "skill": "Business Skills",
        "categories": [
            "Leadership and Management"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Effective delegation is a critical leadership skill that significantly enhances team performance and productivity. A study published in the International Journal of Economics and Business Administration found a positive correlation between effective delegation and employee performance, highlighting its importance in organizational success.&nbsp;<\/p>\r\n\r\n<p>This course is designed for:&nbsp;<\/p>\r\n\r\n<ul>\r\n\t<li>Aspiring leaders&nbsp;<\/li>\r\n\t<li>Managers&nbsp;<\/li>\r\n\t<li>Team leads&nbsp;<\/li>\r\n\t<li>HR professionals&nbsp;<\/li>\r\n\t<li>Entrepreneurs&nbsp;<\/li>\r\n<\/ul>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1665,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1665\/C4U406_thumbnail_518x309.jpg",
        "product_name": "Understanding Financial Performance Metrics",
        "skill": "Business Skills",
        "categories": [
            "Finance and Accounting"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>To accurately evaluate a company&#39;s financial health and long-term sustainability, it is crucial to analyze a range of its financial performance metrics. These metrics provide insights into four key areas: liquidity, solvency, profitability, and operating efficiency. Together, they offer a comprehensive picture of how a business manages its resources, meets its obligations, generates profit, and optimizes operations.<\/p>\r\n\r\n<p>This course is relevant for:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1688,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1688\/C4U409_thumbnail_518x309.jpg",
        "product_name": "Mastering Influence",
        "skill": "Business Skills",
        "categories": [
            "Business Skills"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In our personal and professional lives, each one of us wishes to influence our families, friends, and co-workers to consider our point of view and alter their actions accordingly. Some people seem to possess this as an innate skill, and many wish they were more influential. Influencing others is a skill that requires listening, flexibility and self-awareness.&nbsp;<\/p>\r\n\r\n<p>There are many different styles of influence that we instinctively gravitate towards, based on what works for us. Rationalizing, bridging, asserting, and inspiring others are just some of the styles of influence we use subconsciously.&nbsp;<\/p>\r\n\r\n<p>This course is designed for:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1695,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1695\/T12_L2_thumbnail_518x309.jpg",
        "product_name": "Perspicacia empresarial ",
        "skill": "Business Skills",
        "categories": [
            "Business Power Skills"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>La perspicacia empresarial consiste en comprender el funcionamiento de las empresas, as&iacute; como los comportamientos que deben poseer los profesionales. Esta importante habilidad es crucial no solo para los l&iacute;deres corporativos, sino tambi&eacute;n para los aspirantes a l&iacute;deres, gerentes y empleados. La organizaci&oacute;n que prioriza la perspicacia empresarial como competencia fundamental promueve el crecimiento de su fuerza laboral y fortalece su competitividad. Algunos usan la analog&iacute;a de un mariscal de campo que puede &quot;ver&quot; todo el campo para describir la perspicacia empresarial. Se trata simplemente de comprender c&oacute;mo funciona su empresa y luego usar ese conocimiento para desarrollar la mejor estrategia comercial. Independientemente de su rol en la organizaci&oacute;n, es una habilidad importante que debe desarrollarse.<\/p>\r\n\r\n<p>En este curso usted:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 1696,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1696\/T13_L1_thumbnail_518x309.jpg",
        "product_name": "Desarrollo de liderazgo",
        "skill": "Business Skills",
        "categories": [
            "Becoming a Competent Leader"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Muy pocos l&iacute;deres nacen con las cualidades necesarias para inspirar y liderar a otros. La mayor&iacute;a de los l&iacute;deres se forjan mediante el esfuerzo personal, mucha introspecci&oacute;n y la ayuda de tutores y otros l&iacute;deres. En este curso, aprender&aacute; las seis caracter&iacute;sticas que distinguen a los l&iacute;deres efectivos. Descubrir&aacute; las diferencias entre gesti&oacute;n y liderazgo, y cu&aacute;ndo se aplican. Adem&aacute;s, descubrir&aacute; c&oacute;mo crear un plan que le ayudar&aacute; a pasar de la simple gesti&oacute;n de resultados a definir una visi&oacute;n y liderar a otros.<\/p>\r\n\r\n<p>En este curso usted:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1697,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1697\/C4U400_thumbnail_518x309.jpg",
        "product_name": "Inclusi\u00f3n LGBTQ+  en el \u00e1mbito laboral",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>En el diverso entorno laboral actual, la inclusi&oacute;n LGBTQ+ no es solo una prioridad social, sino una ventaja estrat&eacute;gica para las empresas. Un entorno inclusivo empodera a los empleados LGBTQ+ para que sean aut&eacute;nticos en el trabajo, lo que mejora el bienestar general, la creatividad y la productividad. Seg&uacute;n un estudio del Instituto Williams, casi el 46 % de los empleados LGBTQ+ sienten la necesidad de ocultar su identidad en el trabajo, lo que puede afectar el rendimiento tanto individual como del equipo. Adoptar la inclusividad permite a las empresas atraer y retener a los mejores talentos, a la vez que fomenta la innovaci&oacute;n y el crecimiento.<\/p>\r\n\r\n<p>En este curso usted:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1698,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1698\/T23_L4_thumbnail_518x309.png.jpg",
        "product_name": "\u00c9tica en el lugar de trabajo ",
        "skill": "Business Skills",
        "categories": [
            "Business Strategy"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>Los principios que determinan c&oacute;mo reacciona una persona en una situaci&oacute;n determinada definen su &eacute;tica laboral. Tambi&eacute;n se define como la creencia de que el trabajo arduo y la integridad, demostrando un beneficio moral, fortalecen el car&aacute;cter humano. Es un conjunto de valores centrados en la importancia del trabajo y que se manifiestan en la determinaci&oacute;n o el deseo de trabajar duro. La &eacute;tica laboral garantiza la honestidad, el respeto al c&oacute;digo de conducta, la buena conducta y s&oacute;lidos principios morales.<\/p>\r\n\r\n<p>En este curso podr&aacute;:<\/p>\r\n",
        "duration": "14"
    },
    {
        "id": 1699,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1699\/T5_L4_thumbnail_518x309.jpg",
        "product_name": "Comunicaci\u00f3n ascendente ",
        "skill": "Business Skills",
        "categories": [
            "Effective Communications"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "Spanish",
        "description": "<p>La comunicaci&oacute;n ascendente fluye desde el nivel inferior al superior de una jerarqu&iacute;a. Por ejemplo, los empleados se comunican con su gerente inmediato, este con su gerente subordinado, y as&iacute; sucesivamente hasta la junta directiva o el propietario de la empresa. Esta forma de comunicaci&oacute;n ayuda a los empleados a expresar sus necesidades, ideas u objetivos. Gestionar la comunicaci&oacute;n ascendente es un arte que debe adquirir si busca una carrera a largo plazo en su organizaci&oacute;n y desea tener amplias oportunidades de aprendizaje y crecimiento. Este curso le ayudar&aacute; a comunicarse con sus superiores de manera eficaz.<\/p>\r\n\r\n<p>En este curso, podr&aacute;:<\/p>\r\n",
        "duration": "12"
    },
    {
        "id": 1814,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1814\/C4U410_thumbnail_518x309.jpg",
        "product_name": "Managing Passwords",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In today&rsquo;s connected work environment, the strength of our passwords plays a crucial role in protecting our organization&rsquo;s digital assets. Ironically, some conventional habits&mdash;like relying on complicated symbols, enforcing regular resets, and offering password hints&mdash;can create vulnerabilities instead of enhancing security. Current recommendations from cybersecurity experts emphasize the power of simple, yet lengthy, passphrases that are easy to remember.&nbsp;<\/p>\r\n\r\n<p>In this course, you will:&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1839,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1839\/C4U411_thumbnail_518x309.jpg",
        "product_name": "Social Engineering",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>The landscape of cybersecurity threats is in constant flux. While conventional attacks often seek to infiltrate systems and applications, social engineering employs a more cunning strategy&mdash;it preys upon human nature.&nbsp;<\/p>\r\n\r\n<p>By masquerading as trusted figures like colleagues, service providers, or technical support, attackers exploit trust and familiarity to coax individuals into revealing confidential information.&nbsp;<\/p>\r\n\r\n<p>In this course, you will:&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1842,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1842\/C4U412_thumbnail_518x309.jpg",
        "product_name": "Shadow IT",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Shadow IT refers to the use of unauthorized applications, devices, or services within an organization, often without the knowledge of the IT department. While employees may adopt these tools to boost productivity or simplify tasks, shadow IT can introduce significant security risks, including data breaches, compliance violations, and system vulnerabilities. Proper visibility, clear policies, and user-friendly approved tools can help organizations mitigate these risks while supporting innovation.&nbsp;<\/p>\r\n\r\n<p>In this course, you will:&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1843,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1843\/C4U413_thumbnail_518x309.jpg",
        "product_name": "Ransomware",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Ransomware is a type of malicious software that encrypts a victim&#39;s data, rendering it inaccessible until a ransom is paid to the attacker. Cybercriminals often deliver ransomware through phishing emails, malicious links, or software vulnerabilities. Beyond financial loss, ransomware can disrupt operations, damage reputations, and compromise sensitive information. Regular backups, employee training, and robust security measures are essential to defend against this growing threat.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1846,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1846\/C4U414_thumbnail_518x309.jpg",
        "product_name": "Malware",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In today&rsquo;s digital landscape, malware poses serious threats to business operations and sensitive data. In this course, we will explore what malware is, how it operates, and the various tactics employed by cybercriminals. We&rsquo;ll walk you through a realistic scenario where a bad actor uses malware to build a botnet for cryptocurrency mining, illustrating the practical implications of these threats.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1847,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1847\/C4U415_thumbnail_518x309.jpg",
        "product_name": "Cloud Security",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Cloud security is the fortress that safeguards data, applications, and infrastructure in the digital sky. It encompasses a suite of measures, including encryption, access controls, and threat monitoring, to shield sensitive information from breaches and cyberattacks. As organizations increasingly migrate to the cloud, robust security frameworks&mdash;such as zero-trust architecture and compliance standards&mdash;become paramount in ensuring confidentiality, integrity, and availability. With ever-evolving threats, continuous vigilance and proactive strategies are essential to maintain a secure and resilient cloud environment.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1849,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1849\/C4U416_thumbnail_518x309.jpg",
        "product_name": "Mobile Security",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Mobile security is essential in protecting personal data, financial information, and privacy from cyber threats. With smartphones serving as gateways to banking, communication, and sensitive apps, strong security measures&mdash;such as biometric authentication, encryption, and regular software updates&mdash;are crucial. Users must stay vigilant against phishing attacks, malware, and unsecured networks by adopting safe browsing habits and using trusted security tools. As mobile threats evolve, proactive defense is key to ensuring data remains secure in an increasingly connected world.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1853,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1853\/C4U418_thumbnail_518x309.jpg",
        "product_name": "Physical Security",
        "skill": "Technology",
        "categories": [
            "Cyber Security"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Physical Security in Cybersecurity refers to the measures taken to protect an organization&rsquo;s tangible assets&mdash;such as hardware, data centers, servers, and devices&mdash;from physical threats that could compromise digital systems or sensitive information. While cybersecurity focuses on defending against digital attacks, physical security ensures that unauthorized individuals cannot physically access, damage, or steal critical infrastructure or data.&nbsp;<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1854,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1854\/C4U396_thumbnail_518x309.jpg",
        "product_name": "Becoming an Ally in the Workplace",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In today&rsquo;s corporate world, fostering diversity, equity, and inclusion is more important than ever. While workplace diversity initiatives have been in place since the 1960s, many organizations still struggle to create environments where all individuals, regardless of their ethnicity, gender, sexuality, or background, feel empowered and included. This is where allyship becomes a critical factor.<\/p>\r\n\r\n<p>Allyship is about using your privilege and influence to uplift and support marginalized groups. By being an ally, you actively contribute to making the workplace a more inclusive, respectful, and equitable environment for everyone.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1855,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1855\/C4U398_thumbnail_518x309.jpg",
        "product_name": "Applications of Agile Estimation Techniques",
        "skill": "Technology",
        "categories": [
            "Agile Estimation"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>This course offers a comprehensive dive into Agile estimation techniques, equipping you with the skills to create accurate and effective project plans. You&rsquo;ll explore practical methods like T-Shirt Sizing and Planning Poker, learning how to integrate them seamlessly into your workflow. By the end, you&#39;ll be prepared to manage expectations, optimize resource allocation, and foster stronger team collaboration, ensuring your Agile projects run smoothly and successfully.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1856,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1856\/C4U399_thumbnail_518x309.jpg",
        "product_name": "Intersectionality in the Workplace",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In 1989, Kimberl&eacute; Crenshaw coined the term intersectionality to highlight how individuals often experience multiple forms of discrimination based on overlapping identities such as race, gender, class, and sexual orientation. For example, a Black woman with a disability faces compounded challenges, including pay disparities and higher unemployment rates&mdash;challenges that can&rsquo;t be addressed in isolation.&nbsp;<\/p>\r\n\r\n<p>Intersectionality helps us understand these complex layers, enabling organizations to recognize and tackle these inequalities effectively.&nbsp;<\/p>\r\n\r\n<p>By understanding this concept, you will develop the tools to move beyond surface-level diversity efforts and foster a truly inclusive environment for all identities.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1857,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1857\/C4U400_thumbnail_518x309.jpg",
        "product_name": "LGBTQ+ Inclusion in the Workplace",
        "skill": "DEI (Diversity, Equity, and Inclusion)",
        "categories": [
            "DEI"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In today&rsquo;s diverse workplace, LGBTQ+ inclusion is not just a social priority but a strategic business advantage. An inclusive environment empowers LGBTQ+ employees to bring their authentic selves to work, enhancing overall well-being, creativity, and productivity. According to a study by the Williams Institute, nearly 46% of LGBTQ+ employees feel the need to hide their identity at work, which can impact both individual and team performance. Embracing inclusivity allows companies to attract and retain top talent while fostering innovation and growth.<\/p>\r\n\r\n<p>In this course, you will:&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1859,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1859\/C4U417_thumbnail_518x309.jpg",
        "product_name": "Handling Email Complaints",
        "skill": "Business Skills",
        "categories": [
            "Customer Focus",
            "Customer Service"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Did you know that $3.7 trillion in global sales were at risk in 2024 due to poor customer experiences, according to Qualtrics? Every negative interaction with a brand influences a customer&rsquo;s purchasing behavior&mdash;not just for a single transaction but for future sales as well.<\/p>\r\n\r\n<p>On the flip side, when a brand delivers exceptional customer service, especially via email, the chances of repeat sales increase by 91%. A well-crafted email can turn a dissatisfied customer into a loyal advocate, strengthening your brand&rsquo;s reputation and customer retention.<\/p>\r\n\r\n<p>This course is ideal for:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1911,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1911\/Track_34_thumbnail_518x309.jpg",
        "product_name": "Health & Hygiene Practices in the Post-Pandemic World",
        "skill": "Business Skills",
        "categories": [
            "Healthcare",
            "Safety"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Maintaining personal hygiene and practicing safe interactions are essential for protecting yourself and others. This course equips you with the knowledge and practical skills needed to adapt to new norms, prevent the spread of contagious illnesses, and create a safe, respectful work environment.<\/p>\r\n\r\n<p>In this course, you will learn how to:<\/p>\r\n",
        "duration": "10"
    },
    {
        "id": 1948,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1948\/C4U419_thumbnail_518x309.jpg",
        "product_name": "Access Control",
        "skill": "Business Skills",
        "categories": [
            "General"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Access Control Secur;ity\u202fis a critical component of cybersecurity that ensures only authorized individuals, systems, or devices can access physical or digital resources within an organization. It acts as a gatekeeper, enforcing policies to protect sensitive data, systems, and facilities from unauthorized access, misuse, or breaches. In the context of\u202fsecurity flashes\u202f(rapid alerts about emerging threats), understanding access control is vital for addressing vulnerabilities quickly and mitigating risks.&nbsp;&nbsp;<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1949,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1949\/C4U420_thumbnail_518x309.jpg",
        "product_name": "Working in Public Places",
        "skill": "Business Skills",
        "categories": [
            "General"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Working in public places can expose you to various security risks, from device theft to cyber threats like Evil Twin attacks, packet sniffing, and session hijacking, and so on. This course will equip you with essential strategies to protect your data, including using a VPN, enabling MFA, securing your devices, and practicing safe browsing habits. With these suggestions you can stay secure and work confidently, no matter where you are.<\/p>\r\n\r\n<p>In this course, you will:<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1951,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1951\/C4U421_thumbnail_518x309.jpg",
        "product_name": "Bring Your Own Device (BYOD) ",
        "skill": "Business Skills",
        "categories": [
            "General"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Technology is evolving, and the modern workforce expects flexibility. Bring Your Own Device (BYOD) enables employees to use their personal devices for work, thereby boosting productivity and engagement. But with this flexibility comes the risk of cyber threats, data security concerns, and IT complexities. This course will help you understand the benefits, challenges, and best practices for ensuring a secure and well-managed BYOD policy. Learn how to empower your workforce without compromising security.&nbsp;<\/p>\r\n\r\n<p>By the end of this course, you will learn the following:&nbsp;<\/p>\r\n\r\n<p>&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1956,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1956\/C4U422_thumbnail_518x309.jpg",
        "product_name": "Clear Desk and Screen Policy in the Office",
        "skill": "Business Skills",
        "categories": [
            "General"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>In today&rsquo;s fast-paced work environment, safeguarding sensitive information is crucial. This course explores the importance of a Clear Desk and Clear Screen policy to protect confidential data from unauthorized access and security breaches. You&rsquo;ll learn best practices for securing physical and digital information, enforcing compliance, and ensuring workplace security through proper training and policy enforcement. Strengthen your organization&rsquo;s data protection measures with these essential security protocols.&nbsp;<\/p>\r\n\r\n<p>In this module, you will learn the following:&nbsp;&nbsp;<\/p>\r\n",
        "duration": "15"
    },
    {
        "id": 1957,
        "imagePath": "https:\/\/dochek.com\/assets\/assets\/uploads\/SCORM_course_thumbnail\/1957\/C4U423_thumbnail_518x309.jpg",
        "product_name": "Reporting Security Incidents",
        "skill": "Business Skills",
        "categories": [
            "General"
        ],
        "date": "Thu, Oct 09 2025",
        "status": true,
        "base_price": 9.9,
        "dealPrice": 12,
        "discountPercent": 17,
        "rating": 5.5,
        "language": "English",
        "description": "<p>Cyber threats can strike at any moment and knowing how to respond is just as important as spotting them. This course will equip you with the knowledge to report security incidents the right way - who to inform, what details to provide, and why immediate action matters. By following the correct reporting protocols, you can help prevent minor threats from turning into major breaches. Stay alert, report smart, and keep your organization secure.<\/p>\r\n\r\n<p>In this course, you will learn the following:<\/p>\r\n",
        "duration": "15"
    }
];

export const productcards: productcards[] = [
  {
    id: 1,
    imgSrc: 'assets/images/products/s4.jpg',
    title: 'Boat Headphone',
    price: '285',
    rprice: '375',
    date: 'Tue, Apr 03, 2025',
  },
  {
    id: 2,
    imgSrc: 'assets/images/products/s5.jpg',
    title: 'MacBook Air Pro',
    price: '285',
    rprice: '375',
    date: 'Tue, Apr 10, 2025',
  },
  {
    id: 3,
    imgSrc: 'assets/images/products/s7.jpg',
    title: 'Red Velvet Dress',
    price: '285',
    rprice: '375',
    date: 'Tue, Apr 15, 2025',
  },
  {
    id: 4,
    imgSrc: 'assets/images/products/s11.jpg',
    title: 'Soft Plush Teddy',
    price: '285',
    rprice: '375',
    date: 'Tue, Apr 12, 2025',
  },
];
