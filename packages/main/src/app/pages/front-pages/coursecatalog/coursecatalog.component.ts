import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
type Course = { 
  title: string; 
  author?: string; 
  duration?: string 
};

type SubCategory = { 
  name: string; 
  courses: Course[] 
};

interface Category {
  title: string;
  count: number;
  subCategories: SubCategory[];
}
const catalogData: Category[] = [
  {
    title: 'Business Skills',
    count: 300,
    subCategories: [
      {
    "name": "Lead Remotely with Dispersed Teams",
    "courses": [
      { "title": "Best Practices for Leading Dispersed Teams Remotely", "duration": "15min" }
    ]
  },
  {
    "name": "Technical Skills",
    "courses": [
      { "title": "Boosting Efficiency with Microsoft Copilot", "duration": "15min" },
      { "title": "Boosting Efficiency With Google Gemini", "duration": "15min" }
    ]
  },
  {
    "name": "Managing Teams",
    "courses": [
      { "title": "Sustaining Team and Employee Engagement", "duration": "15min" }
    ]
  },
  {
    "name": "Customer-Centric Marketing",
    "courses": [
      { "title": "Understanding Customer Motivations in Sales", "duration": "18min" }
    ]
  },
  {
    "name": "Personal Development",
    "courses": [
      { "title": "The Whys and Hows of a Growth Mindset at Work", "duration": "15min" }
    ]
  },
  {
    "name": "Lead Through an Environment of Change and Uncertainty",
    "courses": [
      { "title": "Dealing with Environmental Change and Uncertainty", "duration": "15min" }
    ]
  },
  {
    "name": "Resilience in Business",
    "courses": [
      { "title": "Impact of Resilience in Business", "duration": "15min" }
    ]
  },
  {
    "name": "Judgment and Complex Decision-Making",
    "courses": [
      { "title": "The Interrelation Between Judgment and Decision-Making", "duration": "15min" },
      { "title": "Developing Judgment and Complex Decision-Making Skills", "duration": "15min" }
    ]
  },
  {
    "name": "Managing Change",
    "courses": [
      { "title": "Five Key Elements of Successful Change Management", "duration": "15min" }
    ]
  },
  {
    "name": "Finance and Accounting",
    "courses": [
      { "title": "Intercompany Transactions", "duration": "15min" },
      { "title": "Derivatives", "duration": "15min" },
      { "title": "Understanding Financial Performance Metrics", "duration": "15min" }
    ]
  },
  {
    "name": "Building Online and Offline Business Networks",
    "courses": [
      { "title": "How to Effectively Grow Your Business Network Using Online and Offline Methods", "duration": "15min" },
      { "title": "Introduction to Online and Offline Business Networks", "duration": "15min" },
      { "title": "Differences Between Online and Offline Business Networks", "duration": "20min" },
      { "title": "Importance of Building Online and Offline Business Networks", "duration": "15min" }
    ]
  },
  {
    "name": "Interpersonal Skills and Empathy",
    "courses": [
      { "title": "Interpersonal Relationships", "duration": "14min" },
      { "title": "Enhancing Listening Skills", "duration": "14min" },
      { "title": "Networking and Building Relationships", "duration": "15min" },
      { "title": "Applying Interpersonal Skills at Work", "duration": "12min" },
      { "title": "Influence of Interpersonal Skills on Business Culture", "duration": "11min" },
      { "title": "Steps to Improve Interpersonal Communication Skills", "duration": "14min" },
      { "title": "Empathy-Building Exercises to Improve Communication and Relationships", "duration": "19min" },
      { "title": "Strategies to Improve Empathetic Skills", "duration": "15min" },
      { "title": "Creación de redes y construcción de relaciones (Spanish)", "duration": "15min" },
      { "title": "Relaciones interpersonales (Spanish)", "duration": "15min" }
    ]
  },
  {
    "name": "Leadership and Management",
    "courses": [
      { "title": "Relationship Between Authentic Leadership and Empathy", "duration": "20min" },
      { "title": "Competencias digitales básicas (Spanish)", "duration": "15min" },
      { "title": "Liderazgo Auténtico y Empatía (Spanish)", "duration": "15min" },
      { "title": "Delegation Skills and Styles", "duration": "15min" },
      { "title": "Grundlegende Digitale Kompetenzen (German)", "duration": "15min" },
      { "title": "Compétences numériques de base (French)", "duration": "15min" },
      { "title": "Competenze digitali di base (Italian)", "duration": "15min" }
    ]
  },
  {
    "name": "Ability to Think Creatively",
    "courses": [
      { "title": "An Introduction to Creative Thinking", "duration": "15min" },
      { "title": "Exploring and Improving Creative Thinking Skills", "duration": "15min" }
    ]
  },
  {
    "name": "Workplace Ethics",
    "courses": [
      { "title": "Steps in Developing an Ethics Training Program", "duration": "12min" },
      { "title": "Importance of Ethics and Code of Conduct", "duration": "11min" },
      { "title": "Effects of Unethical Practices in the Workplace", "duration": "14min" }
    ]
  },
  {
    "name": "Interpersonal Skills",
    "courses": [
      { "title": "Applying Interpersonal Skills at Work", "duration": "12min" }
    ]
  },
  {
    "name": "Gig Working",
    "courses": [
      { "title": "Understanding Gig Working", "duration": "10min" },
      { "title": "Gig Economy", "duration": "15min" }
    ]
  },
  {
    "name": "Hiring Practices",
    "courses": [
      { "title": "Creating a Successful Hiring Process", "duration": "11min" },
      { "title": "Employee Relations", "duration": "15min" },
      { "title": "Interviewing Candidates for Employment", "duration": "13min" },
      { "title": "Five Stages of the Hiring Process", "duration": "11min" },
      { "title": "The Right Hire", "duration": "15min" },
      { "title": "Ten Tips for Successful Employee Recruitment", "duration": "15min" },
      { "title": "Diez consejos para una contratación de personal exitosa (Spanish)", "duration": "15min" }
    ]
  },
  {
    "name": "Finance",
    "courses": [
      { "title": "Basics of Financial Accounting", "duration": "12min" },
      { "title": "Intangible Assets", "duration": "14min" },
      { "title": "Deferred Revenue", "duration": "12min" },
      { "title": "Currency Transactions", "duration": "15min" },
      { "title": "Consolidating Subsidiaries", "duration": "15min" }
    ]
  },
  {
    "name": "Customer Service",
    "courses": [
      { "title": "An Overview of Customer Service", "duration": "12min" },
      { "title": "Handling Email Complaints", "duration": "15min" }
    ]
  },
  {
    "name": "Workplace Productivity",
    "courses": [
      { "title": "Promoting Return to Workplace", "duration": "11min" },
      { "title": "Time Management in the Workplace", "duration": "10min" },
      { "title": "Return to Workplace and Concerns Regarding It", "duration": "13min" },
      { "title": "Communication With the Team", "duration": "14min" },
      { "title": "Time Management – Myths and Mistakes", "duration": "11min" },
      { "title": "Mistakes in Interpersonal Communication", "duration": "13min" },
      { "title": "Strategies and Skills for Effective Leadership and People Management", "duration": "17min" },
      { "title": "Getting Rid of Distractions at Work", "duration": "19min" },
      { "title": "Importance of Building Technology-Based Agile Organizations", "duration": "14min" },
      { "title": "An Introduction to Business Transformation", "duration": "16min" },
      { "title": "The Brain Science to Create a High-Performing Team", "duration": "16min" },
      { "title": "Brain-Based Ways to Improve Team Performance", "duration": "12min" },
      { "title": "Strategies to Embrace Change at Work", "duration": "17min" },
      { "title": "Importance of Leadership and People Management", "duration": "14min" }
    ]
  },
  {
    "name": "Critical Thinking and Decision Making",
    "courses": [
      { "title": "Skills for Effective Decision-Making", "duration": "10min" },
      { "title": "Importance of Critical Thinking", "duration": "11min" },
      { "title": "Improving Critical Thinking", "duration": "10min" },
      { "title": "Strengthening Decision-Making Skills", "duration": "12min" },
      { "title": "Factors Affecting Decision-Making and Overcoming Them", "duration": "13min" },
      { "title": "Improving Your Judgment and Complex Decision-Making Skills", "duration": "15min" },
      { "title": "Judgment in Critical Thinking", "duration": "13min" },
      { "title": "The Interrelation Between Judgment and Decision-Making", "duration": "15min" },
      { "title": "Mejorar el pensamiento crítico (Spanish)", "duration": "15min" }
    ]
  },
  {
    "name": "Shareholder Driven Companies",
    "courses": [
      { "title": "Shareholder Driven Companies", "author": "Jagdish N. Sheth", "duration": "10min" }
    ]
  },{
    "name": "Adaptability and Continuous Learning",
    "courses": [
      { "title": "Becoming a Continuous Learning Organization", "duration": "15min" },
      { "title": "Importance of Continuous Learning", "duration": "10min" },
      { "title": "Importance of Training and Development", "duration": "10min" },
      { "title": "Continuous Learning and Curiosity", "duration": "15min" },
      { "title": "Curiosidad y aprendizaje continuos (Spanish)", "duration": "15min" },
      { "title": "Importancia de la capacitación y el desarrollo (Spanish)", "duration": "15min" },
      { "title": "Convertirse en una organización de aprendizaje continuo (Spanish)", "duration": "15min" }
    ]
  },
  {
    "name": "Leadership",
    "courses": [
      { "title": "Building an Effective Leadership Succession Plan", "duration": "14min" },
      { "title": "Leadership Development", "duration": "15min" },
      { "title": "Leading Small vs. Large Groups", "duration": "15min" },
      { "title": "The Components of Effective Leadership", "duration": "14min" },
      { "title": "What is Leadership? (Jagdish N. Sheth)", "duration": "10min" },
      { "title": "Evolving Organizational Leadership: Part 2 (Jagdish N. Sheth)", "duration": "8min" },
      { "title": "Evolving Organizational Leadership: Part 1 (Jagdish N. Sheth)", "duration": "11min" },
      { "title": "7 Good Habits of Successful Organizational Leaders: Part 1 (Jagdish N. Sheth)", "duration": "11min" },
      { "title": "7 Good Habits of Successful Organizational Leaders: Part 2 (Jagdish N. Sheth)", "duration": "12min" },
      { "title": "Leadership: Shareholder Driven OR Stakeholder Centric? (Jagdish N. Sheth)", "duration": "11min" },
      { "title": "Branding Yourself as a Leader at Your Company", "duration": "11min" },
      { "title": "Authentic Leadership and Empathy", "duration": "14min" },
      { "title": "Leadership Techniques for Success", "duration": "25min" }
    ]
  },
  {
    "name": "4 ‘A’s of Marketing Awareness and Accessibility",
    "courses": [
      { "title": "Four A's of Marketing: Differentiating Factors (Jagdish N. Sheth)", "duration": "12min" },
      { "title": "4 A's of Marketing Part 1 (Jagdish N. Sheth)", "duration": "10min" },
      { "title": "Affordability and Acceptability (Jagdish N. Sheth)", "duration": "10min" }
    ]
  },
  {
    "name": "Marketing",
    "courses": [
      { "title": "Introduction to Digital Marketing", "duration": "14min" },
      { "title": "Methods of Segmenting the Market (Jagdish N. Sheth)", "duration": "12min" },
      { "title": "Market Segmentation Overview (Jagdish N. Sheth)", "duration": "8min" },
      { "title": "Market Psychographics (Jagdish N. Sheth)", "duration": "9min" },
      { "title": "What is Market Segmentation? (Jagdish N. Sheth)", "duration": "13min" },
      { "title": "Market Buy-o-Graphics (Jagdish N. Sheth)", "duration": "15min" },
      { "title": "Awareness and Accessibility: Overview (Jagdish N. Sheth)", "duration": "12min" },
      { "title": "Four A's of Marketing: Differentiating Factors (Jagdish N. Sheth)", "duration": "12min" }
    ]
  },
  {
    "name": "Brand Management",
    "courses": [
      { "title": "Brand Loyalty Overview (Jagdish N. Sheth)", "duration": "15min" },
      { "title": "Behavioral Theories of Brand Loyalty (Jagdish N. Sheth)", "duration": "15min" },
      { "title": "Institutional Theories of Brand Loyalty (Jagdish N. Sheth)", "duration": "9min" },
      { "title": "Socialization Theories of Brand Loyalty (Jagdish N. Sheth)", "duration": "12min" },
      { "title": "Do Brand Have Nine Lives? (Jagdish N. Sheth)", "duration": "15min" },
      { "title": "Understanding Brand Value (Jagdish N. Sheth)", "duration": "10min" },
      { "title": "Expand the Brand Reach (Jagdish N. Sheth)", "duration": "9min" },
      { "title": "Brand Variation (Jagdish N. Sheth)", "duration": "8min" },
      { "title": "Extending the Brand Reach (Jagdish N. Sheth)", "duration": "10min" },
      { "title": "Brand Repositioning (Jagdish N. Sheth)", "duration": "11min" },
      { "title": "Getting More out of a Brand (Jagdish N. Sheth)", "duration": "12min" }
    ]
  },
  {
    "name": "Customer Satisfaction",
    "courses": [
      { "title": "Improving Customer Satisfaction", "duration": "10min" },
      { "title": "Mejorar la satisfacción del cliente (Spanish)", "duration": "15min" }
    ]
  },
  {
    "name": "Business Skills",
    "courses": [
      { "title": "Aligning Sales Strategy to Organizational Goals", "duration": "10min" },
      { "title": "Building Strategic Customer Alliances", "duration": "11min" },
      { "title": "How to Create and Present a Business Growth Plan", "duration": "14min" },
      { "title": "Soft Skills in Business and Its Importance", "duration": "15min" },
      { "title": "How to Effectively Grow Your Business Network Using Online and Offline Methods", "duration": "15min" },
      { "title": "Mastering Influence", "duration": "15min" }
    ]
  },
  {
    "name": "Self Development",
    "courses": [
      { "title": "Effective Resume Development", "duration": "12min" },
      { "title": "Delivering Effective Presentations", "duration": "13min" },
      { "title": "Technical Enhancements for Delivering Effective Presentations", "duration": "13min" },
      { "title": "Principles of Lean Operations", "duration": "11min" },
      { "title": "How to Give an Elevator Pitch?", "duration": "12min" },
      { "title": "Interpersonal Communication in the Workplace", "duration": "10min" },
      { "title": "How Leaders Create and Use Networks", "duration": "13min" },
      { "title": "Definition, Techniques, and Tips for Virtual Selling", "duration": "15min" },
      { "title": "Influence of Interpersonal Skills on Business Culture", "duration": "11min" },
      { "title": "How to Keep the Brain Fit for Agile Leadership", "duration": "14min" },
      { "title": "Improving Your Judgment and Complex Decision-Making Skills", "duration": "15min" },
      { "title": "Examples and Process of Business Transformation", "duration": "15min" },
      { "title": "Soft Skills in Business and Its Importance", "duration": "15min" },
      { "title": "Ways to Apply Leadership Techniques at Work", "duration": "13min" },
      { "title": "The Whys and Hows of a Growth Mindset at Work", "duration": "15min" }
    ]
  },{
    "name": "Innovation",
    "courses": [
      { "title": "Design Thinking for Creativity and Innovation", "duration": "21min" },
      { "title": "Types of Innovation in Design Thinking", "duration": "14min" },
      { "title": "Firm-Level Innovation Model", "duration": "11min" },
      { "title": "Ways to Increase Creativity", "duration": "13min" }
    ]
  },
  {
    "name": "Small Business",
    "courses": [
      { "title": "Accounting", "duration": "10min" },
      { "title": "HR Practices", "duration": "10min" },
      { "title": "Taxation", "duration": "10min" }
    ]
  },
  {
    "name": "Supply Chain",
    "courses": [
      { "title": "Introduction to Supply Chain Management", "duration": "13min" },
      { "title": "Inventory Control", "duration": "12min" },
      { "title": "Demand Planning", "duration": "10min" },
      { "title": "Order Management", "duration": "11min" },
      { "title": "Procurement", "duration": "11min" },
      { "title": "Legal Contracting", "duration": "11min" },
      { "title": "Supply Planning", "duration": "10min" },
      { "title": "Warehousing", "duration": "11min" },
      { "title": "Downstream and Upstream Procurement", "duration": "10min" },
      { "title": "Negotiating/Purchasing", "duration": "11min" },
      { "title": "Role of the Customer and Supplier", "duration": "10min" }
    ]
  },
  {
    "name": "Digital Marketing",
    "courses": [
      { "title": "Introduction to Digital Marketing", "duration": "14min" }
    ]
  },
  {
    "name": "Project Management",
    "courses": [
      { "title": "Project Management", "duration": "14min" },
      { "title": "Project Management Lifecycle", "duration": "14min" },
      { "title": "Role of the Project Manager", "duration": "11min" },
      { "title": "Project Scheduling and Budgeting", "duration": "16min" }
    ]
  },
  {
    "name": "Talent Acquisition",
    "courses": [
      { "title": "Behavioral Interviewing", "duration": "14min" },
      { "title": "Interviewing Skills", "duration": "14min" },
      { "title": "Recruiting", "duration": "13min" },
      { "title": "Selection", "duration": "14min" },
      { "title": "Entrevista conductual (Spanish)", "duration": "15min" }
    ]
  },
  {
    "name": "Situational Leadership",
    "courses": [
      { "title": "Choosing A Leadership Theory", "duration": "14min" },
      { "title": "Executive Presence", "duration": "14min" },
      { "title": "Roles of Leadership", "duration": "14min" },
      { "title": "Situational Leadership Theory", "duration": "14min" },
      { "title": "Skills of a Situational Leader", "duration": "15min" },
      { "title": "Teoría del liderazgo situacional (Spanish)", "duration": "15min" },
      { "title": "Roles del liderazgo (Spanish)", "duration": "15min" },
      { "title": "Habilidades de un líder situacional (Spanish)", "duration": "15min" }
    ]
  },
  {
    "name": "Sales Leadership",
    "courses": [
      { "title": "Transitioning to Sales Management", "duration": "14min" },
      { "title": "Effective Sales Presentation Skills for Small Groups", "duration": "14min" }
    ]
  },
  {
    "name": "Managing Performance",
    "courses": [
      { "title": "Developing Cascading Goals", "duration": "13min" },
      { "title": "Individual Development Plans", "duration": "11min" },
      { "title": "Setting SMART Goals", "duration": "15min" },
      { "title": "Setting Stretch Goals", "duration": "12min" },
      { "title": "The GROW Model", "duration": "11min" },
      { "title": "Planes de desarrollo individual (Spanish)", "duration": "15min" },
      { "title": "Establecer objetivos SMART (Spanish)", "duration": "15min" },
      { "title": "SMART-Ziele setzen (German)", "duration": "15min" },
      { "title": "Fixer des objectifs SMART (French)", "duration": "15min" }
    ]
  },
  {
    "name": "Managing Conflict",
    "courses": [
      { "title": "Situational Conflict", "duration": "15min" },
      { "title": "Small vs. Large Group Conflict", "duration": "15min" },
      { "title": "The Role of the Facilitator", "duration": "15min" },
      { "title": "Gestión de conflictos situacionales (Spanish)", "duration": "15min" }
    ]
  },{
    "name": "Leading Teams",
    "courses": [
      { "title": "Employee Motivation – Intrinsic vs. Extrinsic Motivation", "duration": "14min" },
      { "title": "Leading and Motivating Call Center Teams", "duration": "18min" },
      { "title": "Leading and Managing Effective Virtual Teams", "duration": "13min" },
      { "title": "Leading Dynamic Teams", "duration": "15min" },
      { "title": "Leading Generationally Diverse Teams", "duration": "13min" },
      { "title": "Brain-Based Ways to Improve Team Performance", "duration": "12min" },
      { "title": "Motivación intrínseca frente a motivación extrínseca (Spanish)", "duration": "15min" },
      { "title": "Liderando y gestionando equipos virtuales eficaces (Spanish)", "duration": "15min" }
    ]
  },
  {
    "name": "Leading People",
    "courses": [
      { "title": "Facilitating vs. Directing People", "duration": "11min" },
      { "title": "Holding People Accountable", "duration": "13min" },
      { "title": "Leading, Not Managing People", "duration": "13min" },
      { "title": "Motivating People – Theory X vs. Theory Y", "duration": "11min" },
      { "title": "Strategies and Skills for Effective Leadership and People Management", "duration": "17min" },
      { "title": "Importance of Leadership and People Management", "duration": "14min" },
      { "title": "Key Skills of Effective Virtual Leadership", "duration": "14min" },
      { "title": "RESPONSABILIZAR a las personas (Spanish)", "duration": "15min" }
    ]
  },
  {
    "name": "Sales Effectiveness",
    "courses": [
      { "title": "Mastering the Cold Calling Process", "duration": "15min" }
    ]
  },
  {
    "name": "Leading Innovation",
    "courses": [
      { "title": "Building Innovation Teams", "duration": "15min" },
      { "title": "Leading Innovation Sessions", "duration": "14min" },
      { "title": "Trystorming", "duration": "12min" },
      { "title": "Creación de equipos de innovación (Spanish)", "duration": "15min" }
    ]
  },
  {
    "name": "Leading Change",
    "courses": [
      { "title": "Kotter's 8-Step Change Model", "duration": "19min" },
      { "title": "Kurt Lewin’s 3 Stages of Change Model", "duration": "14min" },
      { "title": "McKinsey's 7-S Model", "duration": "14min" },
      { "title": "Change Management Strategy and Process", "duration": "13min" },
      { "title": "Strategies to Embrace Change at Work", "duration": "17min" },
      { "title": "Five Key Elements of Successful Change Management", "duration": "15min" },
      { "title": "Dealing with Environmental Change and Uncertainty", "duration": "15min" }
    ]
  },
  {
    "name": "Interpersonal Effectiveness",
    "courses": [
      { "title": "Enhancing Listening Skills", "duration": "14min" },
      { "title": "Networking and Building Relationships", "duration": "15min" },
      { "title": "Empathy-Building Exercises to Improve Communication and Relationships", "duration": "19min" },
      { "title": "Creación de redes y construcción de relaciones (Spanish)", "duration": "15min" }
    ]
  },
  {
    "name": "Effective Presentations",
    "courses": [
      { "title": "Effective Presentations", "duration": "14min" },
      { "title": "Engagement Practices", "duration": "14min" },
      { "title": "Delivering Effective Presentations", "duration": "13min" },
      { "title": "Technical Enhancements for Delivering Effective Presentations", "duration": "13min" },
      { "title": "Effective Sales Presentation Skills for Small Groups", "duration": "14min" }
    ]
  },
  {
    "name": "Effective Meetings",
    "courses": [
      { "title": "Assigning Roles and Responsibilities", "duration": "13min" },
      { "title": "Defining the Right Agenda", "duration": "10min" },
      { "title": "Understanding the Value of People's Time", "duration": "11min" }
    ]
  },
  {
    "name": "Effective Feedback",
    "courses": [
      { "title": "Giving Effective Feedback", "duration": "14min" },
      { "title": "Resistant vs. Open to Change", "duration": "10min" },
      { "title": "Sandwich Feedback", "duration": "10min" },
      { "title": "Managing Your Reaction to Feedback", "duration": "15min" },
      { "title": "Resistencia vs. apertura al cambio (Spanish)", "duration": "15min" },
      { "title": "Understanding 360-Degree Feedback", "duration": "15min" },
      { "title": "Understanding 360-Degree Feedback Reports", "duration": "15min" },
      { "title": "360-Degree Feedback and Personal Development Plans", "duration": "15min" }
    ]
  },
  {
    "name": "Effective Communications",
    "courses": [
      { "title": "Communicating Upward", "duration": "12min" },
      { "title": "Creating \"Win-Win\" Scenarios", "duration": "14min" },
      { "title": "Electronic Communications", "duration": "14min" },
      { "title": "Using Open-Ended Questions", "duration": "14min" },
      { "title": "Comunicación ascendente (Spanish)", "duration": "12min" }
    ]
  },
  {
    "name": "Customer Focus",
    "courses": [
      { "title": "Customer Service", "duration": "14min" },
      { "title": "Improving Customer Rapport", "duration": "15min" },
      { "title": "Understanding Customer Motivations in Sales", "duration": "18min" },
      { "title": "Managing Upset Customers", "duration": "14min" },
      { "title": "Role of the Customer and Supplier", "duration": "10min" },
      { "title": "Building Strategic Customer Alliances", "duration": "11min" },
      { "title": "Improving Customer Satisfaction", "duration": "10min" },
      { "title": "Food as a Necessity (Jagdish N. Sheth)", "duration": "11min" },
      { "title": "Time and Space as Dimensions of Varying Consumption (Jagdish N. Sheth)", "duration": "13min" },
      { "title": "Dramatic Difference of Clothing and Shelter (Jagdish N. Sheth)", "duration": "14min" },
      { "title": "Technology, Friendship and Agreement as Dimensions of Varying Consumption (Jagdish N. Sheth)", "duration": "13min" },
      { "title": "Other Dimensions of Varying Consumption (Jagdish N. Sheth)", "duration": "11min" },
      { "title": "Reality of the Declining Middle Class (Jagdish N. Sheth)", "duration": "11min" },
      { "title": "How Will the Declining Middle Class Impact the World? Part 1 (Jagdish N. Sheth)", "duration": "10min" },
      { "title": "How Will the Declining Middle Class Impact the World? Part 2 (Jagdish N. Sheth)", "duration": "12min" },
      { "title": "Customer Relationship Management (Jagdish N. Sheth)", "duration": "9min" },
      { "title": "An Overview of Customer Service", "duration": "12min" },
      { "title": "Mejorar la satisfacción del cliente (Spanish)", "duration": "15min" },
      { "title": "Manejo de clientes molestos (Spanish)", "duration": "15min" },
      { "title": "Handling Email Complaints", "duration": "15min" }
    ]
  },{
    "name": "Effective Coaching",
    "courses": [
      { "title": "Coaching Conversations", "duration": "14min" },
      { "title": "Coaching Skills Check-up", "duration": "14min" },
      { "title": "Coaching vs. Mentoring", "duration": "15min" },
      { "title": "Components of the Coaching Process", "duration": "14min" },
      { "title": "The Coaching Model", "duration": "14min" },
      { "title": "Conversación sobre coaching (Spanish)", "duration": "15min" }
    ]
  },
  {
    "name": "Creative Thinking & Problem Solving",
    "courses": [
      { "title": "Benefits of Creative Thinking", "duration": "15min" },
      { "title": "Los beneficios del pensamiento creativo (Spanish)", "duration": "15min" }
    ]
  },
  {
    "name": "Business Strategy",
    "courses": [
      { "title": "Creating a Competitive Edge", "duration": "14min" },
      { "title": "Fostering a Culture of Risk Taking", "duration": "14min" },
      { "title": "Operationalize Business Strategies – Organizational Strategy Element", "duration": "15min" },
      { "title": "Workplace Ethics", "duration": "14min" },
      { "title": "Competition vs. Differentiation (SWOT Analysis)", "duration": "14min" },
      { "title": "Six Core Organization Functions", "duration": "14min" },
      { "title": "How to Change a Culture to Encourage Risk Taking", "duration": "15min" },
      { "title": "Ética en el lugar de trabajo (Spanish)", "duration": "14min" }
    ]
  },
  {
    "name": "Business Power Skills",
    "courses": [
      { "title": "Business Acumen", "duration": "14min" },
      { "title": "Business Communication Skills", "duration": "14min" },
      { "title": "Customer Service", "duration": "14min" },
      { "title": "Effective Presentations", "duration": "14min" },
      { "title": "Interpersonal Effectiveness", "duration": "13min" },
      { "title": "Project Management", "duration": "14min" },
      { "title": "Presentaciones eficaces (Spanish)", "duration": "15min" },
      { "title": "Servicio al cliente (Spanish)", "duration": "15min" },
      { "title": "Habilidades de comunicación empresarial (Spanish)", "duration": "15min" },
      { "title": "Perspicacia empresarial (Spanish)", "duration": "14min" }
    ]
  },
  {
    "name": "Business Writing",
    "courses": [
      { "title": "Becoming a Good Business Writer", "duration": "15min" },
      { "title": "Cómo convertirse en un buen redactor empresarial (Spanish)", "duration": "15min" }
    ]
  },
  {
    "name": "Business Communication Skills",
    "courses": [
      { "title": "Building Your Personal Brand", "duration": "15min" },
      { "title": "Business Communication Skills", "duration": "14min" },
      { "title": "Review of Grammatical Principles", "duration": "17min" },
      { "title": "Becoming a Good Business Writer", "duration": "15min" },
      { "title": "Cómo convertirse en un buen redactor empresarial (Spanish)", "duration": "15min" }
    ]
  },
  {
    "name": "Business Acumen Finance",
    "courses": [
      { "title": "Business Acumen – Finance", "duration": "14min" },
      { "title": "Examining the Balance Sheet", "duration": "15min" },
      { "title": "Finance for Non-Finance Managers", "duration": "15min" },
      { "title": "Forecasting and Budgeting", "duration": "13min" },
      { "title": "Finanzas para gerentes no financieros (Spanish)", "duration": "15min" }
    ]
  },
  {
    "name": "Building Relationships",
    "courses": [
      { "title": "Interpersonal Relationships", "duration": "14min" },
      { "title": "Relaciones interpersonales (Spanish)", "duration": "15min" }
    ]
  },
  {
    "name": "Building a Strong Sales Team",
    "courses": [
      { "title": "Sales Effectiveness", "duration": "14min" },
      { "title": "Sales Leadership", "duration": "14min" },
      { "title": "Effective Sales Presentation Skills for Small Groups", "duration": "14min" }
    ]
  },
  {
    "name": "Becoming a Competent Leader",
    "courses": [
      { "title": "Building an Effective Leadership Succession Plan", "duration": "14min" },
      { "title": "Creative Thinking and Problem Solving", "duration": "14min" },
      { "title": "Leadership Development", "duration": "15min" },
      { "title": "Leading Effective Teams", "duration": "14min" },
      { "title": "Building Emotional Intelligence", "duration": "15min" },
      { "title": "Conflict Resolution", "duration": "14min" },
      { "title": "Giving Effective Feedback", "duration": "14min" },
      { "title": "Managing a Cross-Functional Team", "duration": "14min" },
      { "title": "Managing Performance", "duration": "14min" },
      { "title": "Operations Management", "duration": "13min" },
      { "title": "Reducing Rater Bias", "duration": "14min" },
      { "title": "Business Acumen", "duration": "14min" },
      { "title": "Facilitating vs. Directing People", "duration": "11min" },
      { "title": "Holding People Accountable", "duration": "13min" },
      { "title": "Leading, Not Managing People", "duration": "13min" },
      { "title": "Motivating People – Theory X vs. Theory Y", "duration": "11min" },
      { "title": "Leadership Techniques for Success", "duration": "25min" },
      { "title": "Resolución de conflictos (Spanish)", "duration": "15min" },
      { "title": "Cómo dar retroalimentación eficaz (Spanish)", "duration": "15min" },
      { "title": "Gestión del rendimiento (Spanish)", "duration": "15min" },
      { "title": "Pensamiento creativo y resolución de problemas (Spanish)", "duration": "15min" },
      { "title": "Desarrollando la inteligencia emocional (Spanish)", "duration": "15min" },
      { "title": "Visión empresarial - Finanzas (Spanish)", "duration": "15min" },
      { "title": "Cómo desarrollar un plan de sucesión de liderazgo eficaz (Spanish)", "duration": "15min" },
      { "title": "Leadership Training for Women", "duration": "15min" },
      { "title": "Desarrollo de liderazgo (Spanish)", "duration": "15min" },
      { "title": "Konfliktlösung (German)", "duration": "15min" },
      { "title": "Datenschutz und Datensicherheit (German)", "duration": "15min" },
      { "title": "Der Zusammenhang zwischen Datensicherheit und Datenschutz (German)", "duration": "15min" },
      { "title": "Résolution des conflits (French)", "duration": "15min" },
      { "title": "Donner un feedback efficace (French)", "duration": "15min" }
    ]
  },
  {
    "name": "Adapting to New Workstyle",
    "courses": [
      { "title": "How to Conduct Virtual Interview", "duration": "14min" },
      { "title": "Agility in Times of Change", "duration": "12min" },
      { "title": "Agilidad en tiempos de cambio (Spanish)", "duration": "15min" }
    ]
  },
    ],
  },
  {
    title: 'Compliance',
    count: 24,
    subCategories: [
      {
        name: 'Respectful Workplaces',
        courses: [
          { title: 'Types of Harassment and Violence Commitment', duration: '15 min' },
          { title: 'Complaints – Reporting and Investigation Procedures', duration: '15 min' }
        ]
      },
      {
        name: 'Contractor training',
        courses: [{ title: 'Sales and Procurement Practices', duration: '15 min' }]
      },
      {
        name: 'Software Usage and Compliance',
        courses: [{ title: 'Effective Management of Software Licenses and Compliance', duration: '20 min' }]
      },
      {
        name: 'Compliance',
        courses: [
          { title: 'Anti-Bribery and Anti-Corruption Policies', duration: '10 min' },
          { title: 'Introduction to Contractor Verification System', duration: '15 min' },
          { title: 'Employee Health Resources', duration: '15 min' },
          { title: 'Definition and Trademarks of Technology-Based Agile Organizations', duration: '14 min' },
          { title: 'Bribery, Corruption, and Risk Management', duration: '20 min' }
        ]
      },
      {
        name: 'ESG',
        courses: [
          { title: 'Overview of ESG (Environmental, Social and Governance)', duration: '10 min' },
          { title: 'ESG and Sustainable Investing', duration: '14 min' },
          { title: 'Waste Management', duration: '10 min' },
          { title: 'How ESG Can Impact Climate Change', duration: '10 min' },
          { title: 'Investing in ESG Stocks', duration: '15 min' },
          { title: 'ESG and Social Activism', duration: '15 min' },
          { title: 'Climate, Consumption and Culture Overview', author: 'Jagdish N. Sheth', duration: '14 min' },
          { title: 'ESG Risk Management Framework', duration: '15 min' },
          { title: 'ESG Risk Mitigation', duration: '15 min' }
        ]
      },
      {
        name: 'Workplace Harassment',
        courses: [
          { title: 'Anti-Sexual Harassment Training', duration: '12 min' },
          { title: 'Effects of Workplace Politics', duration: '11 min' },
          { title: 'Anti-Workplace Harassment Training', duration: '10 min' },
          { title: 'Anti-Workplace Harassment Training Part 2', duration: '10 min' },
          { title: 'Sexual Harassment Prevention Training: California Specific', duration: '15 min' },
          { title: 'Types of Harassment and Violence Commitment', duration: '15 min' }
        ]
      },
      {
        name: 'POSH',
        courses: [{ title: 'POSH', duration: '15 min' }]
      }
    ]
  },
  {
    title: 'DEI (Diversity, Equity, and Inclusion)',
    count: 49,
    subCategories: [
      {
        name: 'Unconscious Bias',
        courses: [{ title: 'How to Prevent Unconscious Bias in the Workplace', duration: '20 min' }]
      },
      {
        name: 'DEI',
        courses: [
          { title: 'Why Is Diversity Essential', duration: '15 min' },
          { title: 'Leadership Training for Women', duration: '15 min' },
          { title: 'Inclusion for Workers With Disabilities', duration: '15 min' },
          { title: 'Accountability in DEI', duration: '15 min' },
          { title: 'Becoming an Ally in the Workplace', duration: '15 min' },
          { title: 'Intersectionality in the Workplace', duration: '15 min' },
          { title: 'LGBTQ+ Inclusion in the Workplace', duration: '15 min' },
          { title: 'Inclusión LGBTQ+ en el ámbito laboral (Spanish)', duration: '15 min' }
        ]
      },
      // ... add additional subcategories like Gender Diversity, Family Status, etc.
    ]
  },
  {
    title: 'Technology',
    count: 56,
    subCategories: [
      {
        name: 'Agile Estimation',
        courses: [
          { title: 'Definition and Techniques of Agile Estimation', duration: '15 min' },
          { title: 'Applications of Agile Estimation Techniques', duration: '15 min' }
        ]
      },
      {
        name: 'Agile Requirements Gathering',
        courses: [
          { title: 'Requirements Gathering Techniques', duration: '15 min' },
          { title: 'Agile Requirements Gathering Stages', duration: '15 min' }
        ]
      },
      {
        name: 'AI',
        courses: [{ title: 'AI for IT Operations', duration: '15 min' }]
      },
      {
        name: 'Cyber Security',
        courses: [
          { title: 'How to Protect Yourself from Cyber Security Threats', duration: '13 min' },
          { title: 'The Cybersecurity Landscape', duration: '11 min' },
          { title: 'Malware and Advanced Persistent Threats', duration: '12 min' },
          // ... include more Cyber Sec examples
        ]
      }
      // ... add other subcategories like Cloud Technology, Digital Transformation, etc.
    ]
  },
  {
    title: 'Safety',
    count: 27,
    subCategories: [
      {
        name: 'Safety and EHS Orientation',
        courses: [
          { title: 'EHS Principles and Their Importance', duration: '15 min' },
          { title: 'Safety and EHS Orientation', duration: '15 min' }
        ]
      },
      {
        name: 'Workplace Safety',
        courses: [
          { title: 'Environmental Safety', duration: '15 min' },
          { title: 'Equipment Safety', duration: '12 min' },
          { title: 'Fire Safety', duration: '14 min' }
        ]
      },
      {
        name: 'Pandemic Management',
        courses: [
          { title: 'Epidemic and Pandemic Leadership', duration: '12 min' },
          { title: 'Mass Gatherings at Work', duration: '10 min' },
          { title: 'COVID-19 and the Workplace', duration: '14 min' }
        ]
      },
      {
        name: 'Workplace Violence',
        courses: [
          { title: 'Identifying Types of Violence in the Workplace', duration: '14 min' },
          { title: 'Dealing with Active Shooters', duration: '18 min' },
          { title: 'Cómo lidiar con tiradores activos (Spanish)', duration: '15 min' }
        ]
      }
    ]
  },
  {
    title: 'Wellness',
    count: 41,
    subCategories: [
      {
        name: 'Resilience at Work',
        courses: [{ title: 'How to Boost Resilience at Work', duration: '15 min' }]
      },
      {
        name: 'Workplace Politics',
        courses: [{ title: 'Workplace Politics: Debate', duration: '11 min' }]
      },
      {
        name: 'Mental Wellness',
        courses: [
          { title: 'Managing Stress and Emotions', duration: '18 min' },
          { title: 'Importance of Self-Care and Staying Well at Work', duration: '10 min' },
          { title: 'Tips to Create a Psychologically Safe Work Environment', duration: '16 min' }
        ]
      }
    ]
  },
  {
    title: 'Healthcare',
    count: 7,
    subCategories: [
      {
        name: 'Healthcare Overview',
        courses: [
          { title: 'Introduction to Healthcare Systems', duration: '10 min' },
          { title: 'Basics of Patient Care', duration: '12 min' }
        ]
      }
    ]
  }
];

@Component({
  selector: 'app-course-catalog',
  standalone: true,
  imports: [CommonModule,FooterComponent,FormsModule],
  templateUrl: './coursecatalog.component.html',
  styleUrls: ['./coursecatalog.component.scss']
})
export class CourseCatalogComponent {
  leftColumn = [catalogData[0]]; // Business Skills
  rightColumns = catalogData.slice(1); // the rest
  mainTitle = 'Course Catalog';
  subTitle = 'Micro Learning (500)';
  
  catalogData: Category[] = catalogData;
  filteredCatalog: Category[] = [];
  searchResults: Course[] = [];
  searchTerm: string = '';
  showSearchDropdown: boolean = false;

  constructor() {
    this.filteredCatalog = this.catalogData;
  }

  onSearch(): void {
    const term = this.searchTerm.toLowerCase().trim();

    if (!term) {
      this.filteredCatalog = this.catalogData;
      this.searchResults = [];
      this.showSearchDropdown = false;
      return;
    }

    // Filter the catalog data
    this.filteredCatalog = this.catalogData
      .map((category: Category): Category => {
        const filteredSubCategories: SubCategory[] = category.subCategories
          .map((subCat: SubCategory): SubCategory => {
            const filteredCourses: Course[] = subCat.courses.filter((course: Course) => {
              const title = course.title.toLowerCase();
              
              // Exact substring match
              if (title.includes(term)) return true;

              // Word-based partial match (any word should match)
              const words = term.split(' ').filter(w => w.length > 2);
              return words.some(word => title.includes(word));
            });

            return { ...subCat, courses: filteredCourses };
          })
          .filter((subCat: SubCategory) => subCat.courses.length > 0);

        return { ...category, subCategories: filteredSubCategories };
      })
      .filter((cat: Category) => cat.subCategories.length > 0);

    // Flat list for search results display
    this.searchResults = this.filteredCatalog.flatMap(cat =>
      cat.subCategories.flatMap(subCat => subCat.courses)
    );

    // Show dropdown when typing
    this.showSearchDropdown = this.searchTerm.length > 0 && this.searchResults.length > 0;
  }

  onSearchFocus(): void {
    if (this.searchTerm && this.searchResults.length > 0) {
      this.showSearchDropdown = true;
    }
  }

  onSearchBlur(): void {
    // Small timeout to allow click event to register before hiding
    setTimeout(() => {
      this.showSearchDropdown = false;
    }, 200);
  }

  onCourseSelect(course: Course): void {
    this.searchTerm = course.title;
    this.showSearchDropdown = false;
    // Optional: Add any additional logic when a course is selected
    console.log('Selected course:', course);
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.searchResults = [];
    this.showSearchDropdown = false;
    this.filteredCatalog = this.catalogData;
  }


}
