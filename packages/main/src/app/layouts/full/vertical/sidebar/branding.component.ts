import { Component } from '@angular/core';
import { CoreService } from '../../../../services/core.service';
import { logoUrl } from '../../../../config';
@Component({
  selector: 'app-branding',
  imports: [],
  template: `
    <a [href]="logoUrl" class="logodark">
      <img
        src="./assets/images/logos/dark-logo.svg"
        class="align-middle m-2"
        alt="logo"
      />
    </a>

    <a [href]="logoUrl" class="logolight">
      <img
        src="./assets/images/logos/light-logo.svg"
        class="align-middle m-2"
        alt="logo"
      />
    </a>
  `,
})
export class BrandingComponent {
  logoUrl = logoUrl;
  options;
  
  constructor(private settings: CoreService) {
    this.options = this.settings.getOptions();
  }
}
