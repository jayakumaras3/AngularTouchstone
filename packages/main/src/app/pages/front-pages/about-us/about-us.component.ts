import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { IconModule } from 'src/app/icon/icon.module';
import { MaterialModule } from 'src/app/material.module';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { PopupwindowComponent } from '../popupwindow/popupwindow.component';
import { MatDialog } from '@angular/material/dialog';
import { MediaMatcher } from '@angular/cdk/layout';
import { setupCards, stats, tclients, users, frameworks } from '../front-pagesData';
import { TemplateVideoComponent } from '../template-video/template-video.component';

// Move interface outside the component class
interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  position: 'top' | 'bottom';
  icon: string;
  status: 'current' | 'past' | 'future';
}

@Component({
  selector: 'app-about-us',
  imports: [
    IconModule,
    MaterialModule,
    CommonModule,
    ImageSliderComponent,
    FooterComponent,
    RouterModule
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
   reportLink = 'https://www.coursera.org';
  imagePath = 'assets/images/front-pages/Why-We-Built-DoChek.png';
  timelineEvents: TimelineEvent[] = [
    {
      year: '2016',
      title: 'Online Review Tool Launched',
      description: 'Feedback capture made simple',
      position: 'top',
      icon: '📝',
      status: 'past'
    },
    {
      year: '2019',
      title: 'AR/VR Tracking Integrated',
      description: 'Immersive learning analytics',
      position: 'bottom',
      icon: '👓',
      status: 'past'
    },
    {
      year: '2020',
      title: 'Course Builder Introduced',
      description: 'Dynamic content creation',
      position: 'top',
      icon: '🛠️',
      status: 'past'
    },
    {
      year: '2022',
      title: '50+ Courses Released',
      description: 'Content4You released',
      position: 'bottom',
      icon: '📚',
      status: 'past'
    },
    {
      year: '2023',
      title: 'Global Translation Support',
      description: 'Learning without barriers',
      position: 'top',
      icon: '🌐',
      status: 'past'
    },
    {
      year: '2025',
      title: 'SCORM & Builder v4',
      description: 'Next-gen tools delivered',
      position: 'bottom',
      icon: '⚡',
      status: 'future'
    },
    {
      year: 'Present',
      title: '500+ Courses & Expanding',
      description: 'And still growing',
      position: 'top',
      icon: '🚀',
      status: 'current'
    }
  ];

  hoveredEvent: TimelineEvent | null = null;

  getProgressWidth(): number {
    const pastEvents = this.timelineEvents.filter(event => event.status === 'past' || event.status === 'current');
    return (pastEvents.length / this.timelineEvents.length) * 100;
  }

  onEventHover(event: TimelineEvent): void {
    this.hoveredEvent = event;
  }

  onEventLeave(): void {
    this.hoveredEvent = null;
  }

  trackByYear(index: number, event: TimelineEvent): string {
    return event.year;
  }
featureList = [
    {
      id: 1,
      icon: 'camera',
      title: 'Misha Rodriguez, L&D Lead in a leading logistics company',
      img: `assets/images/profile/user-9.jpg`,
         question:'“Everything we need, in one place.”',
      subtext:
        '“DoCheck has simplified learning management for us. Earlier, we were juggling different platforms for uploading courses, tracking progress, and managing Excel reports. Now, everything happens under one roof, and it saves us a lot of time and effort.”  ',
    },
    {
      id: 2,
      icon: 'shield-lock',
      title: 'Liam Grant, HR Manager at a global FMCG brand',
      img: `assets/images/profile/user-1.jpg`,
         question:'“Drives real decision-making, not memorized answers”',

      subtext:
        '“With DoCheck, we build scenarios that mirror real situations, like a conference or client meeting. Every learner gets the same setup, but their answers differ, which gives us a much clearer view of their decision-making skills.” ',
    },
    {
      id: 15,
      icon: 'code',
      title: 'Sophie Müller, Training Coordinator in a European retail group',
      img: `assets/images/profile/user-10.jpg`,
         question:'“We train more people without higher costs.”',
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
  /* popup window start */
  centered = false;
  disabled = false;
  unbounded = false;
  radius: number = 0;
  color: string = '';
  showBackground: boolean = false;
  frameworks = frameworks;
  selectedIndex = 1;
  
  readonly dialog = inject(MatDialog);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  private mediaMatcher = inject(MediaMatcher);
 
  mobileQuery: MediaQueryList;
  isMobileView = false;

  setupCards = setupCards;
  stats = stats;
  tclients = tclients;
  currentIndex = signal(0);
  users = users;
  
  currentUser = computed(() => this.users[this.currentIndex()]);
  displayCount = computed(() => `${this.currentIndex() + 1}/${this.users.length}`);

  constructor() {
    this.mobileQuery = this.mediaMatcher.matchMedia('(max-width: 1199px)');
    this.isMobileView = this.mobileQuery.matches;

    const listener = (e: MediaQueryListEvent) => {
      this.isMobileView = e.matches;
    };

    this.mobileQuery.addEventListener('change', listener);

    this.destroyRef.onDestroy(() => {
      this.mobileQuery.removeEventListener('change', listener);
    });
  }

  openDialog(showBackground: boolean) {
    this.showBackground = showBackground;

    const dialogRef = this.dialog.open(TemplateVideoComponent, {
      data: {},
      width: '1000px',
    });
    
    return dialogRef.afterClosed();
  }

   openBookDemoDialog() {
        // Prevent background scroll
        document.body.style.overflow = 'hidden';

        const dialogRef = this.dialog.open(PopupwindowComponent, {
          width: '500px',
          disableClose: true,
          autoFocus: true,
          hasBackdrop: true, // background still visible
          panelClass: 'light-popup-window',
        });

        dialogRef.afterClosed().subscribe(() => {
          // Re-enable scrolling after popup closes
          document.body.style.overflow = 'auto';
        });
      }
  /* popup window End */

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