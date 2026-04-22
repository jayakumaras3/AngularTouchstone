import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { IconModule } from 'src/app/icon/icon.module';
import { MaterialModule } from 'src/app/material.module';
import { FooterComponent } from '../footer/footer.component';
import { FrontEndService } from 'src/app/services/apps/front-pages/front-end.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  imports: [IconModule, MaterialModule, CommonModule,
    FooterComponent, RouterModule
  ],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.scss'
})
export class BlogDetailsComponent implements OnInit {
  blogDetail = signal<any>(null);
  private frontendService = inject(FrontEndService);

  ngOnInit(): void {
    const selected = this.frontendService.getBlog()();

    if (selected) {
      this.blogDetail.set(selected);
    } else {
      // Default to DOCHEK blog when accessed directly
      const defaultBlog = {
        id: 100,
        time: '5 mins Read',
        imgSrc: '/assets/images/blog/dochek.jpg',
        user: '/assets/images/front-pages/user1.jpg',
        title: 'Smart Learning with DOCHEK',
        subtitle: 'Learning in the Flow of Work',
        description: 'Modern work demands learning that happens seamlessly within workflows, not outside them.',
        views: '4,200',
        category: 'Learning & Development',
        comments: 5,
        date: 'Tue, Apr 22',
      };
      this.blogDetail.set(defaultBlog);
    }
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();

    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    // Keep heading visible below sticky top navigation.
    const topOffset = 110;
    const targetTop = section.getBoundingClientRect().top + window.scrollY - topOffset;

    window.scrollTo({
      top: targetTop,
      behavior: 'smooth',
    });
  }
}
