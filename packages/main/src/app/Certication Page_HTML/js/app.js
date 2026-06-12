// ── Certification Config Data ─────────────────────────────────────────────────
const CERTIFICATION_CONFIGS = [
  { certificate_id: 1, shortName: 'CCD-Tech',  duration: '7 Hours 10 Minutes',  price: '₹799', priceValue: 799,  color: '#3b82f6', icon: 'cloud'     },
  { certificate_id: 2, shortName: 'HC-LC',     duration: '9 Hours',             price: '₹899', priceValue: 899,  color: '#8b5cf6', icon: 'users'     },
  { certificate_id: 3, shortName: 'SDBPS',     duration: '8 Hours 37 Minutes',  price: '₹799', priceValue: 799,  color: '#10b981', icon: 'brain'     },
  { certificate_id: 4, shortName: 'WRWEI',     duration: '5 Hours 29 Minutes',  price: '₹599', priceValue: 599,  color: '#f59e0b', icon: 'heart'     },
  { certificate_id: 5, shortName: 'CSMBL',     duration: '10 Hours',            price: '₹899', priceValue: 899,  color: '#ec4899', icon: 'chart-bar' },
  { certificate_id: 6, shortName: 'CTLTE',     duration: '5 Hours 28 Minutes',  price: '₹599', priceValue: 599,  color: '#06b6d4', icon: 'award'     },
  { certificate_id: 7, shortName: 'CSFBA',     duration: '4.2 Hours',           price: '₹499', priceValue: 499,  color: '#ef4444', icon: 'coins'     },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
function getConfigById(id) {
  return CERTIFICATION_CONFIGS.find(c => c.certificate_id === id) || null;
}

function getTotalCourses(learningPaths) {
  return learningPaths.reduce((total, lp) => total + lp.courses.length, 0);
}

function getCertificationImage(shortName) {
  const map = {
    'CCD-Tech': 'Cloud, Cybersecurity and Digital Transformation.jpg',
    'HC-LC':    'Human-Centric Leadership and Inclusive Culture.jpg',
    'SDBPS':    'Self-Development and Business Power Skills.jpg',
    'WRWEI':    'Workplace Wellness.jpg',
    'CSMBL':    'Strategic Marketing and Brand Leadership.jpg',
    'CTLTE':    'Transformational Leadership.jpg',
    'CSFBA':    'Strategic Finance.jpg',
  };
  const filename = map[shortName];
  return filename ? `assets/images/${encodeURIComponent(filename)}` : '';
}

function stripHtml(html) {
  if (!html) return '';
  const div = document.createElement('div');
  div.innerHTML = html;
  return (div.textContent || div.innerText || '').replace(/\s+/g, ' ').trim();
}

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

// ── Data Loading ──────────────────────────────────────────────────────────────
async function loadCertifications() {
  const res = await fetch('data/certifications.json');
  if (!res.ok) throw new Error(`Failed to load certifications (${res.status})`);
  return res.json();
}

async function loadProducts() {
  try {
    const res = await fetch('data/product-data.json');
    if (res.ok) {
      const data = await res.json();
      const map = new Map();
      for (const p of data) map.set(p.id, p);
      return map;
    }
  } catch (_) {}
  return new Map();
}

// ── SVG Icon Library ──────────────────────────────────────────────────────────
const ICONS = {
  cloud: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
  users: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  brain: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.44-4.66z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.44-4.66z"/></svg>`,
  heart: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  'chart-bar': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/><line x1="2" x2="22" y1="20" y2="20"/></svg>`,
  award: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  coins: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><line x1="9.27" x2="12" y1="8" y2="8"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  book: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>`,
  route: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg>`,
  'arrow-left': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`,
  'arrow-right': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  'list-check': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/></svg>`,
  'currency-rupee': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3"/><path d="M9 13c6.667 0 6.667-10 0-10"/></svg>`,
  'certificate-off': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="2" x2="22" y2="22"/><path d="M7 7H4a2 2 0 0 0-2 2v3a7 7 0 0 0 4.5 6.5L8 19.9"/><path d="M10.5 7H20a2 2 0 0 1 2 2v3a7 7 0 0 1-4.5 6.5L16 19.9"/></svg>`,
  image: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`,
};

function getIcon(name, size = 18) {
  const svg = ICONS[name] || ICONS['image'];
  return svg
    .replace(/width="24"/g, `width="${size}"`)
    .replace(/height="24"/g, `height="${size}"`);
}

// ── Shared loading/error states ───────────────────────────────────────────────
function showLoading(container, message) {
  container.innerHTML = `<div class="state-loading"><div class="spinner"></div><p>${message}</p></div>`;
}

function showError(container, message) {
  container.innerHTML = `
    <div class="not-found">
      ${getIcon('certificate-off', 56)}
      <h2>Something went wrong</h2>
      <p>${message}</p>
      <button onclick="history.back()" class="back-btn-dark">${getIcon('arrow-left', 16)} Go Back</button>
    </div>`;
}
