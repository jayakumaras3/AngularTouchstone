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