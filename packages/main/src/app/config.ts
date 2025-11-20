// ===============================
// 🌗 App Settings and Theme Logic
// ===============================

export interface AppSettings {
  dir: 'ltr' | 'rtl';
  theme: 'light' | 'dark';
  sidenavOpened: boolean;
  sidenavCollapsed: boolean;
  boxed: boolean;
  horizontal: boolean;
  activeTheme: string;
  language: string;
  cardBorder: boolean;
  navPos: 'side' | 'top';
  forceDark?: boolean; // manual override (true = dark, false = light, undefined = system)
}

// ===============================
// 🌙 System Theme Detection
// ===============================

/** Detect the current system theme */
export function getSystemTheme(): 'light' | 'dark' {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

/** Detects theme based on system, browser auto-dark (#enable-force-dark), or manual override */
export function detectColorScheme(forceDark?: boolean): 'light' | 'dark' {
  if (forceDark === true) return 'dark';
  if (forceDark === false) return 'light';

  const isForceDarkActive =
    window.matchMedia('(forced-colors: active)').matches ||
    document.documentElement.classList.contains('force-dark-mode');

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  return (isForceDarkActive || prefersDark) ? 'dark' : 'light';
}

// ===============================
// 🎨 Theme Application
// ===============================

/** Applies the theme to the <html> element */
export function applyTheme(theme: 'light' | 'dark'): void {
  const root = document.documentElement;

  // Remove any previous theme classes
  root.classList.remove('light-theme', 'dark-theme');
  // Add the new theme
  root.classList.add(`${theme}-theme`);

  // Set a data attribute for CSS or components to detect
  root.setAttribute('force-dark', theme === 'dark' ? 'true' : 'false');
}

// ===============================
// 🔁 Auto Theme Initialization
// ===============================

/** Initializes automatic theme handling */
/** Initialize and listen for system or Chrome #enable-force-dark changes */
export function initAutoTheme(forceDark?: boolean): void {
  let lastTheme: 'light' | 'dark' = detectColorScheme(forceDark);
  applyTheme(lastTheme);

  // --- React to system-level theme change ---
  if (window.matchMedia) {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', () => {
      const newTheme = detectColorScheme(forceDark);
      if (newTheme !== lastTheme) {
        lastTheme = newTheme;
        applyTheme(newTheme);
      }
    });
  }

  // --- React to Chrome's "Auto Dark Mode for Web Contents" ---
  // Chrome doesn't fire prefers-color-scheme changes, so we poll occasionally.
  setInterval(() => {
    const newTheme = detectColorScheme(forceDark);
    if (newTheme !== lastTheme) {
      lastTheme = newTheme;
      applyTheme(newTheme);
    }
  }, 2000); // check every 2 seconds
}


// ===============================
// ⚙️ Default App Settings
// ===============================

export const defaults: AppSettings = {
  dir: 'ltr',
  theme: detectColorScheme(), // type-safe: returns 'light' | 'dark'
  sidenavOpened: false,
  sidenavCollapsed: false,
  boxed: true,
  horizontal: false,
  cardBorder: false,
  activeTheme: 'blue_theme',
  language: 'en-us',
  navPos: 'side',
  forceDark: undefined // undefined = follow system
};

// Initialize theme immediately
initAutoTheme(defaults.forceDark);

// ===============================
// 🌐 Base URL Paths
// ===============================

// Localhost Root
/*export const baseUrlPath = '';
export const baseUrlPathslash = '';
export const LoginUrl = '';
export const logoUrl = '';*/

// Example for server setups (comment/uncomment as needed)
/*
export const baseUrlPath = '/DOCHEKDOTCOM/app/Views/angular_view/';
export const baseUrlPathslash = '/DOCHEKDOTCOM/app/Views/angular_view';
export const logoUrl = '/DOCHEKDOTCOM/app/Views/angular_view/';
*/

/**/
//Host URL
export const baseUrlPath = '/ang/';
export const baseUrlPathslash = '/ang';
export const LoginUrl = 'ang/';
export const logoUrl = '/ang/';




// PHP service URLs
export const apiUrl = 'http://172.16.0.173/landing';
  
  export const forgotUrl = 'http://172.16.0.173/landing';
  export const contactApiUrl = 'http://172.16.0.173/landing';
/*

   // Dochek
  export const apiUrl = 'https://dochek.com/landing';
  
  export const forgotUrl = 'https://dochek.com/landing';
  export const contactApiUrl = 'https://dochek.com/landing'
*/

