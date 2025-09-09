import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

type Course = { title: string; author?: string; duration?: string };
type SubCategory = { name: string; courses: Course[] };
interface Category {
  title: string;
  count: number;
  subCategories: SubCategory[];
}

// Fixed & consistent data
const catalogData: Category[] = [
  {
    title: 'Business Skills',
    count: 72,
    subCategories: [
      {
        name: 'Customer-Centric Marketing',
        courses: [
          { title: 'How Does Your Next Customer Look Like?', author: 'Dominique Turpin', duration: '30min' },
          { title: 'New Realities Shaping Consumer Markets', author: 'Dr. Imad Baalbaki', duration: '35min' },
          { title: 'Marketing’s Dilemma: Putting the Customer First', author: 'Muralikrishnan B', duration: '30min' }
        ]
      },
      {
        name: 'Marketing Strategy',
        courses: [
          { title: 'Mastercard: A Masterclass in Multi-Sensory Marketing', author: 'Raja Rajamannar', duration: '40min' }
        ]
      },
      {
        name: 'Sustainability Development Goals and Sustainability for Maximizing Profit',
        courses: [
          { title: 'Un(Thinking) Sustainability in Food and Health', author: 'Hernando Ruiz-Jimenez', duration: '35min' },
          { title: 'Culture and Growth Behaviors for a Sustainable Future', author: 'Basak Karaca', duration: '40min' },
          { title: 'Building Sustainable Brands', author: 'Dr. Darren Coleman', duration: '35min' }
        ]
      },{ "name": "Leadership and Management", "courses": [ { "title": "Healing Our World: The Role of Business", "author": "Dr. Raj Sisodia", "duration": "40min" } ] }, { "name": "Sustainable Marketing", "courses": [ { "title": "Vaillant Group Italia: Humanism in Business", "author": "Gherardo Magri", "duration": "25min" } ] }, { "name": "Branding and Design", "courses": [ { "title": "Personal Branding", "author": "Roberto Basso", "duration": "40min" }, { "title": "Branding and Experience Design", "author": "Russ Klein", "duration": "35min" }, { "title": "Managing by Design and Innovation: Competing for the Future", "author": "Dr. Manoj Singh", "duration": "30min" } ] }, { "name": "Sustainability", "courses": [ { "title": "5 Insights to Turn Sustainability Into a Business Asset", "author": "Dominique Hanssens, Mirei Takashima", "duration": "35min" }, { "title": "Sustainability Beyond the Hype", "author": "Richard Straub", "duration": "35min" }, { "title": "Hidden Champions - Pioneers in Sustainability", "author": "Hermann Simon", "duration": "30min" }, { "title": "Future-Oriented Sustainable Technology", "author": "Luiz Moutinho", "duration": "20min" }, { "title": "Sustainable Marketing: Oxymoron or Tautology?", "author": "Dr. Egbert Dommerholt", "duration": "40min" }, { "title": "Align With Nature: The Time Is Now", "author": "Kamran Rizvi", "duration": "30min" } ] }, { "name": "Marketing", "courses": [ { "title": "Role of Marketing", "author": "Philip Kotler", "duration": "45min" }, { "title": "Value Creation and Innovation in a VUCA World", "author": "Marc Oliver Opresnik", "duration": "35min" }, { "title": "Lesson That Marketers Must Learn From Quantum Physics", "author": "Martha Rogers", "duration": "45min" }, { "title": "Creating Sustainable Marketing Interventions", "author": "Jonathan Hall", "duration": "35min" }, { "title": "Sustainable Marketing in the 21st Century", "author": "Marc Oliver Opresnik", "duration": "30min" }, { "title": "Storytelling for Sustainability", "author": "Elia Guardiola", "duration": "35min" }, { "title": "The PENTA Model to Reinvent a Company", "author": "Alberto Levy", "duration": "45min" }, { "title": "Pushing for Equity in Representation in Marketing", "author": "Valeria Paiggio", "duration": "30min" }, { "title": "Neuromarketing in This Age", "author": "Hae-Sun Lee", "duration": "15min" }, { "title": "Digital Marketing Strategies for Success", "author": "Dominique Turpin", "duration": "40min" }, { "title": "Human-Centered Leadership for Purpose-Driven Marketing", "author": "Roberto Croci", "duration": "40min" }, { "title": "Is Marketing Compatible With Sustainability?", "author": "Philip Kotler", "duration": "35min" }, { "title": "Future for Marketers: Proximity, AI, and the Metaverse", "author": "Rob Wolcott", "duration": "40min" }, { "title": "Sustainability in Marketing", "author": "Angela Lee", "duration": "35min" }, { "title": "The Power of Design in Marketing", "author": "Demah Alfakhri", "duration": "20min" }, { "title": "Minimalism in Marketing Theory", "author": "Raul Amigo", "duration": "45min" }, { "title": "A New Path to Digital", "author": "Gabriele Carboni", "duration": "45min" }, { "title": "Being Human in a Digital World", "author": "Tariq Qureishy", "duration": "35min" }, { "title": "The Long-Term Impact of Marketing", "author": "Dominique Hanssens", "duration": "45min" }, { "title": "Marketing in the Age of Super Intelligence", "author": "Irfan Wahab Khan", "duration": "35min" }, { "title": "The Necessity of Sustainable Marketing", "author": "Edyta Rudawska", "duration": "45min" }, { "title": "The Future of Social Media", "author": "Teresa Heath-Wareing", "duration": "45min" }, { "title": "Ethical Marketing", "author": "Abu Yousuf Md. Abdullah", "duration": "30min" }, { "title": "Digital Marketing Simplified", "author": "Christian Farioli", "duration": "40min" }, { "title": "The Power of the CMOs in Globalizing Firms", "author": "V Kumar", "duration": "40min" }, { "title": "Sustainability: Don't Be Left Behind", "author": "Dr. David Reibstein", "duration": "40min" }, { "title": "Do Sustainable Goals Mean Sustainable Business?", "author": "Muriel Pénicaud", "duration": "45min" }, { "title": "Marketing for Growth", "author": "Dominique Hanssens", "duration": "35min" }, { "title": "The Key To Meaningful Growth", "author": "Thomas Kolster", "duration": "30min" }, { "title": "Avoiding Complacency", "author": "Len Herstein", "duration": "45min" }, { "title": "Principles of Positioning to Succeed in the 21st Century", "author": "Laura Ries", "duration": "45min" }, { "title": "Tough Marketing", "author": "Dr. Ahmad Roosta", "duration": "35min" }, { "title": "Adapting Your Content Marketing for Today", "author": "Brian Rotsztein", "duration": "50min" }, { "title": "Negotiation in Leadership", "author": "Angelo Monoriti", "duration": "45min" } ] }, { "name": "Brand Management", "courses": [ { "title": "Building Your SME Brand", "author": "Darren Coleman", "duration": "45min" }, { "title": "Design for Positive Change", "author": "Ann-Sofie", "duration": "30min" } ] }, { "name": "Self Development", "courses": [ { "title": "Maximizing Workplace Presence", "author": "Marshall Goldsmith", "duration": "35min" }, { "title": "Self-Improvement and Personal Growth", "author": "Marshall Goldsmith", "duration": "40min" }, { "title": "Building Self-Awareness", "author": "Marshall Goldsmith", "duration": "25min" }, { "title": "Coaching and Feedback", "author": "Marshall Goldsmith", "duration": "35min" }, { "title": "Achieving Success", "author": "Marshall Goldsmith", "duration": "35min" }, { "title": "The Science of Great Teams", "author": "Amy Bernstein, Carol Kauffman, Jeremie Brecheisen, Markus Nordberg", "duration": "35min" }, { "title": "Leadership and Building Relationships", "author": "Marshall Goldsmith", "duration": "30min" }, { "title": "Reinvention of Management, Strategy, and Leadership", "author": "Oscar Motomura", "duration": "40min" }, { "title": "Why Do Good Companies Fail?", "author": "Jagdish N. Sheth", "duration": "40min" }, { "title": "Creating Value and Leaders", "author": "Gautam Mahajan", "duration": "40min" }, { "title": "Critical Leadership Skills", "author": "Francis J. Kong", "duration": "40min" } ] }, { "name": "Innovation", "courses": [ { "title": "Winning Through Innovation Management and Culture", "author": "Marc Oliver Opresnik", "duration": "30min" } ] }, { "name": "Supply Chain", "courses": [ { "title": "AI-Driven Supply Chain Optimization for Inflation Control", "author": "Denis Rothman", "duration": "35min" } ] }, { "name": "Leading People", "courses": [ { "title": "Leading Teams Through Change", "author": "Fabrizio Contardi", "duration": "35min" }, { "title": "What Great Leaders Do to Create Sustainable Customer-Centric Cultures", "author": "Chris Brown", "duration": "30min" }, { "title": "A New Type of Leader", "author": "Jennifer Aaker", "duration": "30min" }, { "title": "Leading In Times of Crises", "author": "Marshall Goldsmith", "duration": "45min" } ] }, { "name": "Customer Focus", "courses": [ { "title": "Leadership and Sustainability Depend on Customer-Centric Culture", "author": "Linden Brown", "duration": "45min" }, { "title": "How Does Your Next Customer Look Like?", "author": "Dominique Turpin", "duration": "30min" }, { "title": "New Realities Shaping Consumer Markets", "author": "Dr. Imad Baalbaki", "duration": "35min" }, { "title": "Marketing’s Dilemma: Putting the Customer First", "author": "Muralikrishnan B", "duration": "30min" } ] }
      // ... (trimmed, keep the rest consistent in same structure)
    ]
  },
  {
    title: 'Compliance',
    count: 24,
    subCategories: [
      {
        name: 'DEI (Diversity, Equity, and Inclusion)',
        courses: [
          { title: 'Creating a Better Tomorrow Through Inclusive Lenses', author: 'Aung Tun Thet', duration: '30min' },
          { title: 'Diversity and Inclusion', author: 'Stefania Pertusi', duration: '30min' }
        ]
      }
    ]
  },
  {
    title: 'Technology',
    count: 9,
    subCategories: [
      {
        name: 'Technology and Innovation',
        courses: [
          { title: 'Marketing 5.0: Technology for Humanity', author: 'Iwan Setiawan', duration: '45min' },
          { title: 'Why Business Schools Need Radical Innovation', author: 'Dr. Bodo Schlegelmilch', duration: '45min' },
          { title: 'The Importance of Innovation and Disruption', author: 'Mauro Porcini', duration: '40min' },
          { title: 'Importance of Data', author: 'Ammar Hassan', duration: '30min' },
          { title: 'Explainable AI', author: 'Denis Rothman', duration: '45min' },
          { title: 'Technology as an Enabler of Business', author: 'Roberto Tundo', duration: '45min' },
          { title: 'Automating Retail', author: 'Thomas Foscht', duration: '30min' },
          { title: 'Sustainable Futures in New Media', author: 'Adam Rudawski', duration: '30min' },
          { title: 'Vectors of Change That Will Alter Businesses', author: 'Howard Tullman', duration: '30min' }
        ]
      }
    ]
  },
  {
    title: 'Safety',
    count: 27,
    subCategories: [
      {
        name: 'Wellness',
        courses: [
          { title: 'Emotional Intelligence', author: 'Marshall Goldsmith', duration: '30min' }
        ]
      }
    ]
  }
];

@Component({
  selector: 'app-corecatalog',
  standalone: true,
  imports: [CommonModule,FooterComponent],
  templateUrl: './corecatalog.component.html',
  styleUrls: ['./corecatalog.component.scss']
})
export class CorecatalogComponent {
  leftColumn = [catalogData[0]]; // Business Skills
  rightColumns = catalogData.slice(1); // the rest
  mainTitle = 'Core Catalog';
  subTitle = 'Core Learning (84)';
}
