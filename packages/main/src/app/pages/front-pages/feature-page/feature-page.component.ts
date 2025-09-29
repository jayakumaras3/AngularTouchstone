import { Component, computed, signal } from '@angular/core';
import { IconModule } from 'src/app/icon/icon.module';
import { MaterialModule } from 'src/app/material.module';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { FooterComponent } from '../footer/footer.component';
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
