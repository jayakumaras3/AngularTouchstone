#!/usr/bin/env node
// Generates per-route static HTML snapshots so crawlers (Microsoft Teams, LinkedIn,
// Facebook, WhatsApp, Slack, Outlook, etc.) receive correct <title>/Open Graph/Twitter
// Card tags directly from the initial HTML response, without executing JavaScript.
//
// This never renders any Angular component — it only clones the already-built
// dist/.../browser/index.html and swaps the per-route <head> tag values via string
// replacement, then writes the result to dist/.../browser/<path>/index.html. The
// existing .htaccess rule ("don't rewrite files/directories that exist") makes Apache
// serve these real files directly for e.g. /ang/catalog, ahead of the SPA fallback.
//
// Runs automatically after `npm run build` via the "postbuild" npm script.
// Keep ROUTES below in sync with the `data.title` / `data.description` values in
// src/app/pages/front-pages/front-pages.routes.ts.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BROWSER_DIST = join(__dirname, '..', 'dist', 'Modernize', 'browser');
const SITE_ORIGIN = 'https://dochek.com/ang';

const ROUTES = [
  {
    path: 'homepage',
    title: 'Launch Courses in Minutes | Cloud-based LMS',
    description:
      'Create academic and corporate training programs, certifications, engaging gamification experiences, and track learning progress with no lags through our learning platform. Sign up today!',
  },
  {
    path: 'about',
    title: 'About Us | DOCHEK',
    description:
      'Discover more about DOCHEK and the team behind the platform simplifying learning management for modern organizations.',
  },
  {
    path: 'contact',
    title: 'Contact DOCHEK | Cloud-based LMS',
    description:
      'Looking for a hassle-free way to manage learning? Contact DOCHEK to book a demo, explore features, and discuss scalable eLearning solutions for your team.',
  },
  {
    path: 'features',
    title: 'Launch Courses in Minutes | Cloud-based LMS',
    description:
      'Create courses in minutes, manage learner tracking, certifications, gamification, and reporting with a lightweight learning management platform. Sign up today!',
  },
  {
    path: 'coursecatalog',
    title: 'Course Catalog | DOCHEK',
    description:
      "Explore leadership, business, compliance, cybersecurity, and soft skills training courses through DOCHEK's online learning catalog for modern organizations.",
  },
  {
    path: 'certifications',
    title: 'Professional Certification Programs | DOCHEK',
    description:
      'Explore industry-focused certification programs designed to accelerate careers and build professional credibility.',
  },
  {
    path: 'catalog',
    title: 'Course Catalog | DOCHEK',
    description: 'Launch Courses in Minutes | Cloud-based Learning Management System',
  },
  {
    path: 'dochek-lms',
    title: 'Dochek | The LMS Built for Companies That Take Learning Seriously',
    description:
      "Whether you're training 10 people or 10,000, Dochek keeps your L&D running without the complexity. See how Dochek + 500 microlearning courses work for your team.",
  },
  {
    path: 'smartlms',
    title: 'Dochek Smart LMS + Microlearning Bundle | Touchstone',
    description:
      'Get the best of both worlds — a lightweight, scalable LMS and instant access to 500+ microlearning courses. See the bundle in action.',
  },
  {
    path: 'immersivelearning',
    title: 'Immersive AR/VR/XR Training | Touchstone Learning & Consulting',
    description:
      "Training that works because it feels real. Explore bespoke AR, VR, and XR learning experiences built around your team's real-world challenges.",
  },
];

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function setMetaContent(html, attrMatch, content) {
  const pattern = new RegExp(`(<meta[^>]*${attrMatch}[^>]*content=")[^"]*("[^>]*>)`, 'i');
  if (!pattern.test(html)) {
    throw new Error(`generate-seo-snapshots: could not find a meta tag matching ${attrMatch} in index.html`);
  }
  return html.replace(pattern, `$1${content}$2`);
}

function buildSnapshotHtml(baseHtml, route) {
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const url = `${SITE_ORIGIN}/${route.path}`;

  let html = baseHtml;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
  html = setMetaContent(html, 'name="description"', description);
  html = setMetaContent(html, 'property="og:title"', title);
  html = setMetaContent(html, 'property="og:description"', description);
  html = setMetaContent(html, 'property="og:url"', url);
  html = setMetaContent(html, 'name="twitter:title"', title);
  html = setMetaContent(html, 'name="twitter:description"', description);
  return html;
}

function main() {
  const indexPath = join(BROWSER_DIST, 'index.html');
  if (!existsSync(indexPath)) {
    console.warn(`[generate-seo-snapshots] ${indexPath} not found - skipping (did "ng build" run first?)`);
    return;
  }

  const baseHtml = readFileSync(indexPath, 'utf8');

  for (const route of ROUTES) {
    const html = buildSnapshotHtml(baseHtml, route);
    const outDir = join(BROWSER_DIST, route.path);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'index.html'), html, 'utf8');
    console.log(`[generate-seo-snapshots] wrote ${route.path}/index.html`);
  }

  console.log(`[generate-seo-snapshots] done - ${ROUTES.length} route(s) snapshotted.`);
}

main();
