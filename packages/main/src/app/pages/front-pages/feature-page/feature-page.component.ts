import { Component, computed, signal } from '@angular/core';
import { IconModule } from 'src/app/icon/icon.module';
import { MaterialModule } from 'src/app/material.module';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { FooterComponent } from '../footer/footer.component';
interface features {
  id: number;
  icon: string;
  title: string;
  subtext: string;
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
   imports: [IconModule,MaterialModule ,CommonModule,ImageSliderComponent,FooterComponent,
    //PagePricingComponent
  ],
  templateUrl: './feature-page.component.html',
  styleUrl: './feature-page.component.scss'
})
  

export class FeaturePageComponent {
  // Component data
  reportLink = 'https://www.coursera.org';
  imagePath = 'assets/images/front-pages/2.jpg';
 
  features: features[] = [
    {
      id: 1,
      icon: 'camera',
      title: 'Seamless Migratio',
      subtext:
        'Switch from your existing learning platform without losing courses, data, or learner progress.',
    },
    {
      id: 2,
      icon: 'shield-lock',
      title: 'Scalable by Design',
      subtext:
        'Train from 10 to 10,000 learners with no slowdown, lag, or disruption.',
    },
    {
      id: 15,
      icon: 'code',
      title: 'Impact-driven',
      subtext:
        'Utilize AR/VR insights in our learning platform to refine programs and enhance user retention.',
    },
    {
      id: 3,
      icon: 'archive',
      title: 'Flexible Pricing',
      subtext: 'A pay-as-you-go model with no hidden fees, no heavy contracts, and complete control over your budget.',
    },
    {
      id: 4,
      icon: 'adjustments',
      title: 'Course Builder',
      subtext:
        'Create engaging courses within a day by uploading videos, files, and quizzes.',
    },
    {
      id: 5,
      icon: 'tag',
      title: 'Collaborative Learning',
      subtext: 'Provides built-in discussion feature that helps learners exchange ideas and stay connected.',
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
