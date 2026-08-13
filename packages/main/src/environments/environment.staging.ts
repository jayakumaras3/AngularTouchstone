// 🔨 STAGING ENVIRONMENT - HTTPS
// 🔐 Set production: true for staging to enable all security validations
/*export const environment = {
  production: true,
  apiUrl: 'https://staging.dochek.com/DOCHEK/landing',
  forgotUrl: 'https://staging.dochek.com/DOCHEK/landing',
  contactApiUrl: 'https://staging.dochek.com/DOCHEK/landing',
  turnstileSiteKey: '0x4AAAAAADh_GIYrBeeJ7VaM'
};*/
export const environment = {
  production: true,
 apiUrl: 'http://172.16.2.218/DOCHEK/landing',
  forgotUrl: 'http://172.16.2.218/DOCHEK',
  contactApiUrl: 'http://172.16.2.218/DOCHEK/landing',
  trainingPortalUrl: 'http://172.16.2.218/DOCHEK/my_training',
  // Cloudflare Turnstile — public site key only. Never put the secret key here.
  turnstileSiteKey: '0x4AAAAAADh_GIYrBeeJ7VaM'
};/*
export const environment = {
  production: true,
  apiUrl: 'https://dochek.com/landing',
  forgotUrl: 'https://dochek.com/landing',
  contactApiUrl: 'https://dochek.com/landing',
  trainingPortalUrl: 'https://dochek.com/my_training',
  turnstileSiteKey: '0x4AAAAAADh_GIYrBeeJ7VaM'
};*/
