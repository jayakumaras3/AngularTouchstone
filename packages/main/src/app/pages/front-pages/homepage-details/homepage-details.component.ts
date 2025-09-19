import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { IconModule } from 'src/app/icon/icon.module';
import { MaterialModule } from 'src/app/material.module';
import { paymentLogos, plans } from '../front-pagesData';
import {
  faqList,
  followercardsFirst,
  followercardSecond,
  followercardThird,
  frameworks,
  tiles,
  users,
  topcardsGrid,
} from '../front-pagesData';
import { CommonModule } from '@angular/common';
import { MediaMatcher } from '@angular/cdk/layout';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { FooterComponent } from '../footer/footer.component';
import { MatDialog } from '@angular/material/dialog';
import { TemplateVideoComponent } from '../template-video/template-video.component';
import { Router, RouterModule } from '@angular/router';

interface features {
  id: number;
  icon: string;
  title: string;
  subtext: string;
}
@Component({
  selector: 'app-homepage-details',
  imports: [
    MaterialModule,
    IconModule,
    CommonModule,
    ImageSliderComponent,
    FooterComponent,
    RouterModule
  ],
  templateUrl: './homepage-details.component.html',
  styleUrl: './homepage-details.component.scss',
})

export class HomepageDetailsComponent {
    paymentLogos = paymentLogos;
 features:features[] = [
    {
      id: 1,
      icon: 'camera',
      title: 'Build & Customize Easily',
      subtext:
        'Create and upload courses, package multiple trainings into a module, and export as SCORM for any LMS ',
    },
    {
      id: 2,
      icon: 'shield-lock',
      title: 'Engage Learners',
      subtext:
        'Boost user retention with gamification, discussion forums, and scenario-based simulations',
    },
    {
      id: 15,
      icon: 'code',
      title: 'Track Progress',
      subtext:
        'Measure learning outcomes with real-time reports and advanced activity tracking.',
    },
  ];
   featureList = [
    {
      id: 1,
      icon: 'camera',
      title: '- Misha Rodriguez, L&D Lead in a leading logistics company',
      subtext:
        '“DoCheck has simplified learning management for us. Earlier, we were juggling different platforms for uploading courses, tracking progress, and managing Excel reports. Now, everything happens under one roof, and it saves us a lot of time and effort”  ',
    },
    {
      id: 2,
      icon: 'shield-lock',
      title: '- Liam Grant, HR Manager at a global FMCG brand',
      subtext:
        '“With DoCheck, we build scenarios that mirror real situations, like a conference or client meeting. Every learner gets the same setup, but their answers differ, which gives us a much clearer view of their decision-making skills.” ',
    },
    {
      id: 15,
      icon: 'code',
      title: '- Sophie Müller, Training Coordinator in a European retail group',
      subtext:
        'Finally, a learning management platform that’s simple to use and affordable. We can train more employees without worrying about costs spiraling out of control or the system slowing down when multiple users log in. ',
    },
  ];

  activeIndex = 0;

  // 👉 Getter renamed from currentFeature → activeFeature
  get activeFeature() {
    return this.featureList[this.activeIndex];
  }

  // 👉 Methods renamed
  showNext() {
    this.activeIndex = (this.activeIndex + 1) % this.featureList.length;
  }

  showPrevious() {
    this.activeIndex =
      (this.activeIndex - 1 + this.featureList.length) % this.featureList.length;
  }

  showCounter() {
    return `${this.activeIndex + 1} / ${this.featureList.length}`;
  }

  // Dummy user
  getUser() {
    return {
      name: 'John Doe',
      img: './assets/images/users/user1.jpg'
    };
  }
  topcards=topcardsGrid;

 
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

  readonly panelOpenState = signal(false);
  tiles = tiles;
  hideCloserBtn: boolean = true;
  users = users;
  expandedIndex: number | null = null;
  currentIndex = signal(0); // Starting from 0
  faqList = faqList;
  selectedPath: string | null = null;
  clicked = false;

  followercardsfirst = followercardsFirst;
  followercardsecond = followercardSecond;
  followercardthird = followercardThird;

  currentUser = computed(() => this.users[this.currentIndex()]);
  displayCount = computed(() => `${this.currentIndex() + 1}/${this.users.length}`);

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
   isActiveRoute(route: string): boolean {
    return this.router.url.includes(`/front-pages/${route}`);
  }
  isOver(): boolean {
    return this.mediaMatcher.matchMedia('(max-width: 1199px)').matches;
  }

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
  openDialog(showBackground:boolean){
    this.showBackground = showBackground;

    const dialogRef = this.dialog.open(TemplateVideoComponent, {
      data: {},
      width: '1000px',
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result === false) {
        this.showBackground = false; // Reset or take any action
      }
    });
  }

 
  onImageClick(path: string) {
    this.selectedPath = path;

    setTimeout(() => {
      this.router.navigate([path]);
    }, 100); // brief delay to show border
  }
}
