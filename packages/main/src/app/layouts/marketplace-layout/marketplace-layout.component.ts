import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DiaAssistantComponent } from '../../components/dia-assistant/dia-assistant.component';

@Component({
  selector: 'app-marketplace-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, DiaAssistantComponent],
  templateUrl: './marketplace-layout.component.html',
  styleUrls: ['./marketplace-layout.component.scss']
})
export class MarketplaceLayoutComponent {}
