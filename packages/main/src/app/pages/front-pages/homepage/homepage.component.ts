import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HomepageDetailsComponent } from '../homepage-details/homepage-details.component';

@Component({
  selector: 'app-homepage',
  imports: [RouterOutlet, CommonModule, HomepageDetailsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  public router = inject(Router);
}
