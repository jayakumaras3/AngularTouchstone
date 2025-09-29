import { Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { IconModule } from 'src/app/icon/icon.module';
import { MaterialModule } from 'src/app/material.module';
import { paymentLogos, plans,clientLogo } from '../front-pagesData';
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
import { PopupwindowComponent } from '../popupwindow/popupwindow.component';

interface Course {
  university: string;
  universityShort: string;
  title: string;
  level: string;
  provider: string;
  thumbnail: string;
}

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
  /*  Courese Career skills start*/
export class HomepageDetailsComponent implements OnInit{
     allCourses: Course[] = [
    {
      university: 'University of Michigan',
      universityShort: 'UM',
      title: 'Python for Everybody',
      level: 'Beginner - Specialization',
      provider: '',
      thumbnail: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=400&h=200&fit=crop'
    },
    {
      university: 'Vanderbilt University',
      universityShort: 'VU',
      title: 'Prompt Engineering',
      level: 'Beginner - Specialization',
      provider: '',
      thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=200&fit=crop'
    },
    {
      university: 'IBM, IBM',
      universityShort: 'IBM',
      title: 'IBM Data Science',
      level: 'Beginner - Professional Certificate',
      provider: 'IBM',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop'
    },
    {
      university: 'ALEXIIS',
      universityShort: 'ALX',
      title: 'Advanced Machine Learning',
      level: 'Intermediate - Specialization',
      provider: '',
      thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop'
    },
    {
      university: 'Stanford University',
      universityShort: 'SU',
      title: 'Machine Learning',
      level: 'Intermediate - Specialization',
      provider: '',
      thumbnail: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=200&fit=crop'
    },
    {
      university: 'Google',
      universityShort: 'GOOG',
      title: 'Google UX Design',
      level: 'Beginner - Professional Certificate',
      provider: 'Google',
      thumbnail: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=200&fit=crop'
    },
    {
      university: 'University of Pennsylvania',
      universityShort: 'UP',
      title: 'Business Foundations',
      level: 'Beginner - Specialization',
      provider: '',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop'
    },
    {
      university: 'Johns Hopkins University',
      universityShort: 'JHU',
      title: 'Data Science',
      level: 'Intermediate - Specialization',
      provider: '',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop'
    },
    {
      university: 'University of California',
      universityShort: 'UC',
      title: 'Full Stack Web Development',
      level: 'Intermediate - Specialization',
      provider: '',
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop'
    },
    {
      university: 'Harvard University',
      universityShort: 'HU',
      title: 'CS50: Introduction to Computer Science',
      level: 'Beginner - Course',
      provider: '',
      thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop'
    },
    {
      university: 'Meta',
      universityShort: 'META',
      title: 'Front-End Developer',
      level: 'Beginner - Professional Certificate',
      provider: 'Meta',
      thumbnail: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=200&fit=crop'
    },
    {
      university: 'University of London',
      universityShort: 'UL',
      title: 'Computer Science',
      level: 'Intermediate - Degree',
      provider: '',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop'
    },
    {
      university: 'Amazon',
      universityShort: 'AWS',
      title: 'AWS Cloud Practitioner',
      level: 'Beginner - Certification',
      provider: 'Amazon',
      thumbnail: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=200&fit=crop'
    },
    {
      university: 'University of Toronto',
      universityShort: 'UT',
      title: 'Learn to Program: The Fundamentals',
      level: 'Beginner - Course',
      provider: '',
      thumbnail: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=200&fit=crop'
    },
    {
      university: 'IBM',
      universityShort: 'IBM',
      title: 'AI Engineering',
      level: 'Intermediate - Professional Certificate',
      provider: 'IBM',
      thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop'
    },
    {
      university: 'University of Colorado',
      universityShort: 'UCO',
      title: 'Data Structures and Algorithms',
      level: 'Intermediate - Specialization',
      provider: '',
      thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=200&fit=crop'
    },
    {
      university: 'MIT',
      universityShort: 'MIT',
      title: 'Computer Science and Programming',
      level: 'Intermediate - Course',
      provider: '',
      thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop'
    },
    {
      university: 'Microsoft',
      universityShort: 'MS',
      title: 'Azure Fundamentals',
      level: 'Beginner - Certification',
      provider: 'Microsoft',
      thumbnail: 'https://images.unsplash.com/photo-1591012911207-7d26f4695df6?w=400&h=200&fit=crop'
    },
    {
      university: 'Duke University',
      universityShort: 'DU',
      title: 'Statistics with R',
      level: 'Intermediate - Specialization',
      provider: '',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop'
    }
  ];

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

    paymentLogos = paymentLogos;
    clientLogo=clientLogo;
     industries = [
    {
      title: 'Switch Without the Stress',
      icon: 'bi bi-cash-coin',
      img: 'assets/images/industryImage/finance.jpg',
      desc: 'Moving to a new LMS doesn’t have to be messy. Dochek makes migration simple by supporting industry standards (SCORM1.2I) and offering seamless data transfer from your existing LMS. '
    },
    {
      title: 'Life Sciences',
      icon: 'bi bi-heart-pulse',
      img: 'assets/images/industryImage/lifescience.jpg',
      desc: 'Accelerating product knowledge and compliance through immersive life sciences training.',
      insight: true
    },
    {
      title: 'Technology',
      icon: 'bi bi-cpu',
      img: 'assets/images/industryImage/technology.jpg',
      desc: 'Accelerating product knowledge and compliance through immersive life sciences training.'
    },
    {
      title: 'Manufacturing',
      icon: 'bi bi-gear-wide-connected',
      img: 'assets/images/industryImage/manufacturing.jpg',
      desc: 'Accelerating product knowledge and compliance through immersive life sciences training.'
    },
    {
      title: 'Government',
      icon: 'bi bi-bank',
      img: 'assets/images/industryImage/government.jpg',
      desc: 'Accelerating product knowledge and compliance through immersive life sciences training.'
    }
  ];
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
      title: 'Misha Rodriguez, L&D Lead in a leading logistics company',
      img: `assets/images/profile/user-9.jpg`,
      subtext:
        '“DoCheck has simplified learning management for us. Earlier, we were juggling different platforms for uploading courses, tracking progress, and managing Excel reports. Now, everything happens under one roof, and it saves us a lot of time and effort”  ',
    },
    {
      id: 2,
      icon: 'shield-lock',
      title: 'Liam Grant, HR Manager at a global FMCG brand',
      img: `assets/images/profile/user-1.jpg`,
      subtext:
        '“With DoCheck, we build scenarios that mirror real situations, like a conference or client meeting. Every learner gets the same setup, but their answers differ, which gives us a much clearer view of their decision-making skills.” ',
    },
    {
      id: 15,
      icon: 'code',
      title: 'Sophie Müller, Training Coordinator in a European retail group',
      img: `assets/images/profile/user-10.jpg`,
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
    return dialogRef.afterClosed();
    /*dialogRef.afterClosed().subscribe((result) => {
      if (result === false) {
        this.showBackground = false; // Reset or take any action
      }
    });*/
  }

 
  onImageClick(path: string) {
    this.selectedPath = path;

    setTimeout(() => {
      this.router.navigate([path]);
    }, 100); // brief delay to show border
  }
}
