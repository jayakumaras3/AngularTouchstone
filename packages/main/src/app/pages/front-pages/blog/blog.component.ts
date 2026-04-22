import { Component, inject, OnInit } from '@angular/core';
import { IconModule } from 'src/app/icon/icon.module';
import { MaterialModule } from 'src/app/material.module';
import { cardimgs } from '../front-pagesData';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterModule } from '@angular/router';
import { FrontEndService } from 'src/app/services/apps/front-pages/front-end.service';

@Component({
  selector: 'app-blog',
  imports: [IconModule, MaterialModule, FooterComponent, RouterModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {

  private router = inject(Router);
  private frontendService = inject(FrontEndService);
  cardimgs = cardimgs;

  ngOnInit() {
    this.cardimgs = cardimgs.map((cardimg) => ({
      ...cardimg,
      imgSrc: this.normalizeAssetPath(cardimg.imgSrc),
      user: this.normalizeAssetPath(cardimg.user),
    }));
  }

  private normalizeAssetPath(path: string): string {
    if (!path) return path;
    const marker = '/assets/';
    const markerIndex = path.indexOf(marker);
    return markerIndex >= 0 ? path.substring(markerIndex) : path;
  }

  getNavigate(cardimg: any) {
    this.frontendService.setBlog(cardimg);
    if (cardimg.id === 100) {
      this.router.navigate(['/blog-details']);
    } else {
      this.router.navigate(['front-pages/blog-details']);
    }
  }

}
