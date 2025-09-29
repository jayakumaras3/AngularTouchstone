import { Component, computed } from '@angular/core';
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
import { Router, RouterModule } from '@angular/router';
import { PopupwindowComponent } from '../popupwindow/popupwindow.component';
import {  DestroyRef, inject, OnInit, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MediaMatcher } from '@angular/cdk/layout';
import {
  faqList,
  followercardsFirst,
  followercardSecond,
  followercardThird,
  frameworks,
  tiles,
  topcardsGrid,
} from '../front-pagesData';
import { TemplateVideoComponent } from '../template-video/template-video.component';
@Component({
  selector: 'app-about-us',
  imports: [IconModule,MaterialModule ,CommonModule,ImageSliderComponent,FooterComponent,
    //PagePricingComponent
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  /* popup window start */
  centered = false;
  disabled = false;
  unbounded = false;
  radius: number;
  color: string;
  showBackground: boolean = false;
  frameworks = frameworks;
  selectedIndex = 1;
    readonly dialog = inject(MatDialog);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef); // ✅ For automatic cleanup
  private mediaMatcher = inject(MediaMatcher); // ✅ Proper MediaMatcher injection
 
  mobileQuery: MediaQueryList;
  isMobileView = false;
  constructor() {

    const isSmallScreen = this.mediaMatcher.matchMedia('(max-width: 599px)');
    // ✅ Setup media query for max-width: 1199px
    this.mobileQuery = this.mediaMatcher.matchMedia('(max-width: 1199px)');
    this.isMobileView = this.mobileQuery.matches;

    const listener = (e: MediaQueryListEvent) => {
      this.isMobileView = e.matches;
    };

    // ✅ Listen to viewport changes
    this.mobileQuery.addEventListener('change', listener);

    // ✅ Clean up listener on component destroy
    this.destroyRef.onDestroy(() => {
      this.mobileQuery.removeEventListener('change', listener);
    });
  }
   openDialog(showBackground:boolean){
      this.showBackground = showBackground;
  
      const dialogRef = this.dialog.open(TemplateVideoComponent, {
        data: {},
        width: '1000px',
      });
      return dialogRef.afterClosed();
      /*dialogRef.afterClosed().subscribe((result) => {
        if (result === false) {
          this.showBackground = false; // Reset or take any action
        }
      });*/
    }
    openBookDemoDialog() {
  const dialogRef = this.dialog.open(PopupwindowComponent, {
    width: '500px',
    disableClose: true,
    autoFocus: true,
  });

  dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      console.log('Form submitted:', result);
    }
  });
}
/* popup window End */

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


     
}
