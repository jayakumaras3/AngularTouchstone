import { Component, computed, DestroyRef, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { IconModule } from '../../../icon/icon.module';
import { MaterialModule } from '../../../material.module';
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
  image?: string; // optional image path for custom icons
}

interface HeroSlide {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  variant?: 'default' | 'saas';
  showDefaultActions?: boolean;
  ctaLabel?: string;
  ctaStyle?: 'outline' | 'filled';
  ctaAction?: 'login' | 'demo' | 'catalog';
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
export class HomepageDetailsComponent implements OnInit, OnDestroy{
   private router = inject(Router);
  heroSlides: HeroSlide[] = [
    {
      title: 'One Platform. All Your Learning Needs. Zero Chaos.',
      description:
        'Deliver, manage, and track training in just a few clicks - all in one simple workspace.',
      image: 'assets/images/front-pages/design-collection.png',
      imageAlt: 'DoChek learning platform overview',
      variant: 'default',
      showDefaultActions: true,
    },
    {
      title: 'Make your team more digitally productive.',
      description:
        'We added 7 new courses that can help your teams build smarter digital capabilities, faster.',
      image: 'assets/images/front-pages/main banner_image 3.png',
      imageAlt: 'Desktop monitor showing DoChek learning dashboard',
      variant: 'saas',
      showDefaultActions: false,
      ctaLabel: 'Get started now',
      ctaStyle: 'outline',
      ctaAction: 'catalog',
    },
  ];
  activeHeroSlide = 0;
  private readonly heroSlideInterval = 5000;
  private heroSlideTimerId: number | null = null;

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

  displayedCourses: Course[] = [];
  initialCoursesCount: number = 3;
  coursesPerLoad: number = 8;
  currentDisplayCount: number = 0;

  ngOnInit() {
    this.loadInitialCourses();
    this.startHeroAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopHeroAutoSlide();
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

  nextHeroSlide(): void {
    if (!this.heroSlides.length) {
      return;
    }

    this.activeHeroSlide = (this.activeHeroSlide + 1) % this.heroSlides.length;
  }

  goToHeroSlide(index: number): void {
    if (index < 0 || index >= this.heroSlides.length) {
      return;
    }

    this.activeHeroSlide = index;
    this.startHeroAutoSlide();
  }

  onHeroSlideCtaClick(slide: HeroSlide): void {
    if (slide.ctaAction === 'login') {
      this.router.navigate(['/login']);
      return;
    }

    if (slide.ctaAction === 'catalog') {
      this.router.navigate(['/catalog']);
      return;
    }

    this.openBookDemoDialog();
  }

  pauseHeroAutoSlide(): void {
    this.stopHeroAutoSlide();
  }

  resumeHeroAutoSlide(): void {
    this.startHeroAutoSlide();
  }

  private startHeroAutoSlide(): void {
    this.stopHeroAutoSlide();

    if (this.heroSlides.length <= 1) {
      return;
    }

    this.heroSlideTimerId = window.setInterval(() => {
      this.nextHeroSlide();
    }, this.heroSlideInterval);
  }

  private stopHeroAutoSlide(): void {
    if (this.heroSlideTimerId === null) {
      return;
    }

    window.clearInterval(this.heroSlideTimerId);
    this.heroSlideTimerId = null;
  }
  /*  Courese Career skills end*/
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


    paymentLogos = paymentLogos;
    clientLogo=clientLogo;
     industries = [
    {
      title: 'Switch Without the Stress',
      icon: 'bi bi-cash-coin',
      img: 'assets/images/industryImage/finance.jpg',
      desc: 'Moving to a new LMS doesn’t have to be messy. Dochek makes migration simple by supporting industry standards (SCORM 1.2) and offering seamless data transfer from your existing LMS. '
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
        image: 'assets/images/homepage/build icon.svg',
      title: 'Build & Customize Easily',
      subtext:
        'Create and upload courses, package multiple trainings into a module, and export as SCORM for any LMS. ',
    },
    {
      id: 2,
      icon: 'shield-lock',
      image: 'assets/images/homepage/engage icon.svg',
      title: 'Engage Learners',
      subtext:
        'Boost user retention with gamification, discussion forums, and scenario-based simulations.',
    },
    {
      id: 15,
      icon: 'code',
      image: 'assets/images/homepage/track icon.svg',
      title: 'Track Progress',
      subtext:
        'Measure learning outcomes with real-time reports and advanced activity tracking.',
    },
  ];
   featureList = [
    
    {
      id: 1,
      icon: 'camera',
      title: 'L&D Lead, Logistics Company',
      img: `assets/images/profile/user-9.jpg`,
         question:'“Everything we need, in one place.”',
      subtext:
        '“DoCheck has simplified learning management for us. Earlier, we were juggling different platforms for uploading courses, tracking progress, and managing Excel reports. Now, everything happens under one roof, and it saves us a lot of time and effort.”  ',
    },
    {
      id: 2,
      icon: 'shield-lock',
      title: 'HR Manager, Global FMCG Brand',
      img: `assets/images/profile/user-1.jpg`,
         question:'“Drives real decision-making, not memorized answers.”',

      subtext:
        '“With DoCheck, we build scenarios that mirror real situations, like a conference or client meeting. Every learner gets the same setup, but their answers differ, which gives us a much clearer view of their decision-making skills.” ',
    },
    {
      id: 15,
      icon: 'code',
      title: 'Training Coordinator, European Retail Group',
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
  private destroyRef = inject(DestroyRef); // ✅ For automatic cleanup
  private mediaMatcher = inject(MediaMatcher); // ✅ Proper MediaMatcher injection

  mobileQuery: MediaQueryList;
  isMobileView = false;

  readonly panelOpenState = signal(false);
  tiles = tiles;
  hideCloserBtn: boolean = true;
  users = users;
  openFaqIndex: number | null = null;
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
   
  }

 
  onImageClick(path: string) {
    this.selectedPath = path;

    setTimeout(() => {
      this.router.navigate([path]);
    }, 100); // brief delay to show border
  }

  toggleFaq(index: number): void {
    this.openFaqIndex = this.openFaqIndex === index ? null : index;
  }

  isFaqOpen(index: number): boolean {
    return this.openFaqIndex === index;
  }
}
