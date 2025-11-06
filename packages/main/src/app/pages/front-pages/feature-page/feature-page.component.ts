import { Component, computed, signal,inject, } from '@angular/core';
import { IconModule } from '../../../icon/icon.module';
import { MaterialModule } from '../../../material.module';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { FooterComponent } from '../footer/footer.component';
import { Router,RouterModule } from '@angular/router';
import { paymentLogos, plans,clientLogo } from '../front-pagesData';
interface features {
  id: number;
  icon: string;
  title: string;
  subtext: string;
}
interface TemplateFeature {
  id: number;
  icon: string;
  title: string;
  subtext: string;
}


interface Course {
  university: string;
  universityShort: string;
  title: string;
  level: string;
  provider: string;
  thumbnail: string;
}
//import { PagePricingComponent } from '../page-pricing/page-pricing.component';
import {
  setupCards,
  stats,
  tclients,

  users,
} from '../front-pagesData';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-feature-page',
   imports: [IconModule,MaterialModule ,CommonModule,ImageSliderComponent,FooterComponent,RouterModule,
    //PagePricingComponent
  ],
  templateUrl: './feature-page.component.html',
  styleUrl: './feature-page.component.scss'
})
  

export class FeaturePageComponent {
  selectedPath: string | null = null;
  private router = inject(Router);


   onExploreClick() {
    console.log('Explore clicked!');
    // Call any method or logic you want here

    // Navigate to the catalog page
    this.router.navigate(['/catalog']);
  }
  // Component data
  reportLink = 'https://www.coursera.org';
  imagePath = 'assets/images/front-pages/2.jpg';
   allCourses: Course[] = [
    {
      university: '',
      universityShort: '',
      title: 'Network Cybersecurity Attacks: Management and Monitoring',
      level: 'Beginner - Specialization',
      provider: '',
      thumbnail: 'assets/images/courses/C4U73_thumbnail_400x200.jpg'
    },
    {
      university: '',
      universityShort: '',
      title: 'Basic Digital Skills',
      level: 'Beginner - Specialization',
      provider: '',
      thumbnail: 'assets/images/courses/C4U136_thumbnail_400x200.jpg'
    },
    {
      university: '',
      universityShort: '',
      title: 'Data Protection and Privacy',
      level: 'Beginner - Professional Certificate',
      provider: '',
      thumbnail: 'assets/images/courses/C4U351_thumbnail_400x200.jpg'
    },    
    {
      university: '',
      universityShort: '',
      title: 'Relationship Between Data Protection and Privacy',
      level: 'Intermediate - Specialization',
      provider: '',
      thumbnail: 'assets/images/courses/C4UM29_thumbnail_400x200.jpg'
    },    
    {
      university: '',
      universityShort: '',
      title: 'Continuous learning and curiosity',
      level: 'Intermediate - Specialization',
      provider: '',
      thumbnail: 'assets/images/courses/C4UM36_thumbnail_400x200.jpg'
    },
    {
      university: '',
      universityShort: '',
      title: 'Becoming an Effective Manager Conflict Resolution',
      level: 'Intermediate - Specialization',
      provider: '',
      thumbnail: 'assets/images/courses/Track_07_L3_thumbnail_400x200.jpg'
    },
    {
      university: '',
      universityShort: '',
      title: 'Effective Coaching: Coaching Conversations',
      level: 'Intermediate - Specialization',
      provider: '',
      thumbnail: 'assets/images/courses/Track_08_5_thumbnail_400x200.jpg'
    },
    {
      university: '',
      universityShort: '',
      title: 'Emotional Intelligence: Introduction to Emotional Quotient (EQ)',
      level: 'Beginner - Professional Certificate',
      provider: '',
      thumbnail: 'assets/images/courses/Track_09_L1_thumbnail_400x200.jpg'
    },
    {
      university: '',
      universityShort: '',
      title: 'Emotional Intelligence: Personal Competence',
      level: 'Beginner - Specialization',
      provider: '',
      thumbnail: 'assets/images/courses/Track_09_L2_thumbnail_400x200.jpg'
    },
    {
      university: '',
      universityShort: '',
      title: 'Social Competence',
      level: 'Intermediate - Specialization',
      provider: '',
      thumbnail: 'assets/images/courses/Track_09_L3_thumbnail_400x200.jpg'
    },
    {
      university: '',
      universityShort: '',
      title: 'Emotional Intelligence: Emotional Quotient (EQ) Strategies',
      level: 'Intermediate - Specialization',
      provider: '',
      thumbnail: 'assets/images/courses/Track_09_L4_thumbnail_400x200.jpg'
    },
    {
      university: '',
      universityShort: '',
      title: 'Leading Teams: Intrinsic vs. Extrinsic Motivation',
      level: 'Beginner - Course',
      provider: '',
      thumbnail: 'assets/images/courses/Track_10_L1_thumbnail_400x200.jpg'
    },
    {
      university: '',
      universityShort: '',
      title: 'Becoming an Effective Manager: Building Emotional Intelligence',
      level: 'Beginner - Professional Certificate',
      provider: '',
      thumbnail: 'assets/images/courses/Track_11_L2_thumbnail_400x200.jpg'
    },
    {
      university: '',
      universityShort: '',
      title: 'Becoming an Effective Manager Conflict Resolution',
      level: 'Intermediate - Degree',
      provider: '',
      thumbnail: 'assets/images/courses/Track_11_L3_thumbnail_400x200.jpg'
    },
    {
      university: '',
      universityShort: '',
      title: 'Interpersonal Effectiveness: Networking and Building Relationships',
      level: 'Intermediate - Specialization',
      provider: '',
      thumbnail: 'assets/images/courses/Track_29_L2_thumbnail_400x200.jpg'
    },{
      university: '',
      universityShort: '',
      title: 'Becoming an Effective Manager: Managing Performance',
      level: 'Intermediate - Specialization',
      provider: '',
      thumbnail: 'assets/images/courses/Track_11_L5_thumbnail_400x200.jpg'
    },
    {
      university: '',
      universityShort: '',
      title: 'Becoming an Effective Manager: Giving Effective Feedback',
      level: 'Intermediate - Specialization',
      provider: '',
      thumbnail: 'assets/images/courses/Track_11_L6_thumbnail_400x200.jpg'
    },
    {
      university: '',
      universityShort: '',
      title: 'Business Power Skills: Effective Presentations',
      level: 'Intermediate - Specialization',
      provider: '',
      thumbnail: 'assets/images/courses/Track_12_L4_thumbnail_400x200.jpg'
    },
    {
      university: '',
      universityShort: '',
      title: 'Becoming a Competent Leader: Creative Thinking and Problem Solving',
      level: 'Intermediate - Specialization',
      provider: '',
      thumbnail: 'assets/images/courses/Track_13_L4_thumbnail_400x200.jpg'
    },
  ];
onImageClick(path: string) {
    this.selectedPath = path;

    setTimeout(() => {
      this.router.navigate([path]);
    }, 100); // brief delay to show border
  }
  displayedCourses: Course[] = [];
  initialCoursesCount: number = 3;
  coursesPerLoad: number = 8;
  currentDisplayCount: number = 0;

  ngOnInit() {
    this.loadInitialCourses();
  }

  get hasMoreCourses(): boolean {
    return this.displayedCourses.length < this.allCourses.length;
  }

  get coursesToShow(): number {
    const remaining = this.allCourses.length - this.displayedCourses.length;
    return remaining > this.coursesPerLoad ? this.coursesPerLoad : remaining;
  }

  loadInitialCourses() {
    this.currentDisplayCount = this.initialCoursesCount;
    this.displayedCourses = this.allCourses.slice(0, this.initialCoursesCount);
  }

  loadMore() {
    this.currentDisplayCount += this.coursesPerLoad;
    
    if (this.currentDisplayCount >= this.allCourses.length) {
      this.displayedCourses = [...this.allCourses];
    } else {
      this.displayedCourses = this.allCourses.slice(0, this.currentDisplayCount);
    }
  }
  /*  Courese Career skills end*/
    features: features[] = [
    {
      id: 1,
      icon: 'stack-2', // represents scalability, stacking, and modular design
      title: 'Scalable by Design',
      subtext:
        'Train from 10 to 10,000 learners with no slowdown, lag, or disruption.',
    },
    {
      id: 2,
      icon: 'brain', // symbolizes intelligence, insights, and learning impact
      title: 'Impact-driven',
      subtext:
        'Utilize AR/VR insights in our learning platform to refine programs and enhance user retention.',
    },
    {
      id: 3,
      icon: 'wallet', // clearly represents flexible, pay-as-you-go pricing
      title: 'Flexible Pricing',
      subtext:
        'A pay-as-you-go model with no hidden fees, no heavy contracts, and complete control over your budget.',
    },
  ];

  
  setupCards=setupCards;
  stats = stats;
   tclients=tclients;
    currentIndex = signal(0); // Starting from 0
    users = users;
   // Computed values to auto-update template
   currentUser = computed(() => this.users[this.currentIndex()]);
   displayCount = computed(
     () => `${this.currentIndex() + 1}/${this.users.length}`
   ); 
    goPrev() {
       if (this.currentIndex() > 0) {
         this.currentIndex.update((i) => i - 1);
       }
     }
   
     goNext() {
       if (this.currentIndex() < this.users.length - 1) {
         this.currentIndex.update((i) => i + 1);
       }
 
 
      }
onJoinClick(): void {
    // Add your join logic here
    console.log('Join button clicked');
    // You can add navigation or other actions
  }

}
