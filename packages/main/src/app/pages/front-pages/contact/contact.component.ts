import { Component,OnInit } from '@angular/core';
import { IconModule } from 'src/app/icon/icon.module';
import { MaterialModule } from 'src/app/material.module';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { baseUrlPathslash } from '../../../config';
@Component({
  selector: 'app-contact',
  imports: [MaterialModule,IconModule,FooterComponent,CommonModule,],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{
   
  backgroundStyle: any;
 
 ngOnInit() {
    this.setBackground();
 }

  setBackground() {
    this.backgroundStyle = {
      'background-image': `url('${baseUrlPathslash}/assets/images/backgrounds/profilebg.png')`,
      'background-size': 'cover',
      'background-position': 'center',
      'background-repeat': 'no-repeat'
    };
  }
}
