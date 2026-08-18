// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.

/*export const environment = {
  production: false,
  apiUrl: 'http://172.16.2.218/DOCHEK/landing',
  forgotUrl: '/DOCHEK',
  contactApiUrl: 'http://172.16.2.218/DOCHEK/landing',
  trainingPortalUrl: 'http://172.16.2.218/DOCHEK/my_training',
  // Cloudflare Turnstile — public site key only. Never put the secret key here.
  turnstileSiteKey: '0x4AAAAAADh_GIYrBeeJ7VaM'
};*//*
export const environment = {
  production: false,
  apiUrl: 'https://staging.dochek.com/landing',
  forgotUrl: 'https://staging.dochek.com/landing',
  contactApiUrl: 'https://staging.dochek.com/landing',
  turnstileSiteKey: '0x4AAAAAADh_GIYrBeeJ7VaM'
};*/
export const environment = {
  production: false,
  apiUrl: 'https://dochek.com/landing',
  forgotUrl: 'https://dochek.com/landing',
  contactApiUrl: 'https://dochek.com/landing',
  trainingPortalUrl: 'https://dochek.com/my_training',
  turnstileSiteKey: '0x4AAAAAADh_GIYrBeeJ7VaM'
};