import { Component } from '@angular/core';
import { CoreService } from '../../../../services/core.service';
import { logoUrl, trainingPortalUrl } from '../../../../config';
import { AuthService } from '../../../../services/login/auth.service';
@Component({
  selector: 'app-branding',
  imports: [],
  template: `
    <a [href]="logoUrl" class="logodark" (click)="onLogoClick($event)">
      <img
        src="./assets/images/logos/dark-logo.svg"
        class="align-middle m-2"
        alt="logo"
      />
    </a>

    <a [href]="logoUrl" class="logolight" (click)="onLogoClick($event)">
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

  constructor(private settings: CoreService, private authService: AuthService) {
    this.options = this.settings.getOptions();
  }

  /**
   * Logged-in users are sent to the CodeIgniter training portal instead of
   * the Angular landing page; guests keep the default anchor navigation.
   */
  onLogoClick(event: MouseEvent): void {
    if (this.authService.isLoggedIn()) {
      event.preventDefault();
      window.location.href = trainingPortalUrl;
    }
  }
}
