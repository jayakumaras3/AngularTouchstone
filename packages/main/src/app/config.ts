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


//localhost Root
/*export const baseUrlPath = '';

export const baseUrlPathslash = '';

export const logoUrl = '/';*/
//webserver

export const baseUrlPath = '/DOCHEKDOTCOM/app/Views/angular_view/';
export const baseUrlPathslash = '/DOCHEKDOTCOM/app/Views/angular_view';

export const logoUrl = '/DOCHEKDOTCOM/app/Views/angular_view/';/**/


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
