export interface AppSettings {
  dir: 'ltr' | 'rtl';
  theme: string;
  sidenavOpened: boolean;
  sidenavCollapsed: boolean;
  boxed: boolean;
  horizontal: boolean;
  activeTheme: string;
  language: string;
  cardBorder: boolean;
  navPos: 'side' | 'top';
}

// base URL set
// ng build --configuration production --base-href /DOCHEKDOTCOM/app/Views/angular_view/
//localhost Root
export const baseUrlPath = '';

export const baseUrlPathslash = '';
export const LoginUrl = '';
export const logoUrl = '/';
//webserver

//172.16.0.99
/*export const baseUrlPath = '/DOCHEKDOTCOM/app/Views/angular_view/';
export const baseUrlPathslash = '/DOCHEKDOTCOM/app/Views/angular_view';

export const logoUrl = '/DOCHEKDOTCOM/app/Views/angular_view/';*/

//172.16.0.173
/*export const baseUrlPath = '/app/Views/angular_view/';
export const baseUrlPathslash = '/app/Views/angular_view';

export const LoginUrl = 'app/Views/angular_view/';
export const logoUrl = '/app/Views/angular_view/';*/


export const defaults: AppSettings = {
  dir: 'ltr',
  theme: 'light',
  sidenavOpened: false,
  sidenavCollapsed: false,
  boxed: true,
  horizontal: false,
  cardBorder: false,
  activeTheme: 'blue_theme',
  language: 'en-us',
  navPos: 'side',
};
