import { Component,OnInit } from '@angular/core';
import { IconModule } from 'src/app/icon/icon.module';
import { MaterialModule } from 'src/app/material.module';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [MaterialModule,IconModule,FooterComponent,CommonModule,],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{
    baseUrlPathslash = ''; // You can set this dynamically
  backgroundStyle: any;
 ngOnInit() {
    // Example: assign your base path dynamically if needed
    this.baseUrlPathslash = window.location.origin; 
    this.setBackground();
  }

  setBackground() {
    this.backgroundStyle = {
      'background-image': `url('${this.baseUrlPathslash}/assets/images/backgrounds/profilebg.png')`,
      'background-size': 'cover',
      'background-position': 'center',
      'background-repeat': 'no-repeat'
    };
  }
}
