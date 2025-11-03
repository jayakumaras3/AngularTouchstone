import { Component } from '@angular/core';
import { IconModule } from 'src/app/icon/icon.module';
import { MaterialModule } from 'src/app/material.module';
import { RouterLink } from '@angular/router';
import { HomepageDetailsComponent } from '../homepage-details/homepage-details.component';

import { Router, RouterModule } from '@angular/router';
import { PopupwindowComponent } from '../popupwindow/popupwindow.component';
import { computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MediaMatcher } from '@angular/cdk/layout';
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
import { TemplateVideoComponent } from '../template-video/template-video.component';
@Component({
  selector: 'app-footer',
  imports: [MaterialModule, IconModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
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
    isActiveRoute(route: string): boolean {
    return this.router.url.includes(`/front-pages/${route}`);
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
     // First navigate to contact page
  this.router.navigate(['/contact']).then(() => {
    // After navigation, scroll to the contact heading
    setTimeout(() => {
      const heading = document.querySelector('.contact-heading') as HTMLElement;
      if (heading) {
        heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
        heading.focus();
      }
    }, 300); // small delay ensures DOM is loaded
  });
  }
/* popup window End */

  applicationsItems = [
    {
      title: 'Kanban',
      href: "/apps/kanban"
    },
    {
      title: 'Invoice List',
      href: "/apps/invoice/list"
    },
    {
      title: 'eCommerce',
      href: "/apps/product/shop"
    },
    {
      title: 'Chats',
      href: "/apps/chat"
    },
    {
      title: 'Tickets',
      href: "/apps/tickets"
    },
    {
      title: 'Blog',
      href: "/apps/blog/post"
    },
  ];

  formsItems = [
    {
      title: 'Form Layout',
      href: "/forms/form-layouts"
    },
    {
      title: 'Form Horizontal',
      href: "/forms/form-horizontal"
    },
    {
      title: 'Form Wizard',
      href: "/forms/form-wizard"
    },
    {
      title: 'Form Vertical',
      href: "/forms/form-vertical"
    },
    {
      title: 'Form Toastr',
      href: "/forms/form-toastr"
    },
  ];

  tablesItems = [
    {
      title: 'Basic Table',
      href: "/tables/basic-table"
    },
    {
      title: 'Multi Header Footer Table',
      href: "/tables/multi-header-footer-table"
    },
    {
      title: 'Pagination Table',
      href: "/tables/pagination-table"
    },
    {
      title: 'Dynamic Table',
      href: "/tables/dynamic-table"
    },
    {
      title: 'HTTP Table',
      href: "/tables/http-table"
    },
    {
      title: 'Sortable Table',
      href: "/tables/sortable-table"
    },
  ];

  socialIcons = [
    { src: 'assets/images/front-pages/icon-facebook.svg', tooltip: 'Facebook' },
    { src: 'assets/images/front-pages/icon-twitter.svg', tooltip: 'Twitter' },
    { src: 'assets/images/front-pages/icon-instagram.svg', tooltip: 'Instagram' },
  ];
}
