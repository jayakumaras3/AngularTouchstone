// ── Certification Details Page ────────────────────────────────────────────────
(async function () {
  const root          = document.getElementById('pageRoot');
  const certId        = parseInt(getQueryParam('id'), 10);
  // CodeIgniter: replace getQueryParam with the DB field value injected by the controller
  const paymentStatus = getQueryParam('payment_status') || 'NOT_PAID';
  const isPaid        = paymentStatus === 'PAID';

  if (isNaN(certId)) {
    showNotFound(root);
    root.removeAttribute('hidden');
    return;
  }

  const [certifications, productMap, progress] = await Promise.all([
    loadCertifications(),
    loadProducts(),
    isPaid ? loadProgress(certId) : Promise.resolve(null),
  ]);

  const cert   = certifications.find(c => c.certificate_id === certId);
  const config = getConfigById(certId);

  if (!cert || !config) {
    showNotFound(root);
    root.removeAttribute('hidden');
    return;
  }

  let selectedLpId = cert.learning_paths[0]?.lp_id ?? null;

  // ── Inner: switch active LP tab and rebuild panel ────────────────────────────
  function switchLp(lpId) {
    selectedLpId = lpId;
    document.querySelectorAll('.lp-tab').forEach(t => {
      const active = parseInt(t.dataset.lpId, 10) === lpId;
      t.classList.toggle('lp-tab--active', active);
      t.setAttribute('aria-selected', active);
    });
    populateLpPanel(cert, config, productMap, progress, lpId);
    document.querySelector('.details-right')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // ── Inner: Attach all event listeners once ───────────────────────────────────
  function initListeners() {
    document.getElementById('backBtn').addEventListener('click', () => {
      if (document.referrer) history.back();
      else window.location.href = 'index.html';
    });

    document.getElementById('lpTabs').addEventListener('click', e => {
      const tab = e.target.closest('.lp-tab');
      if (tab) switchLp(parseInt(tab.dataset.lpId, 10));
    });

    // Course card clicks use event delegation on the panel container
    document.getElementById('lpPanel').addEventListener('click', e => {
      const card = e.target.closest('.lp-course-card');
      if (card) window.location.href = `course-details.html?id=${card.dataset.courseId}&certId=${certId}&payment_status=${paymentStatus}`;
    });

    document.getElementById('ctaBtn').addEventListener('click', () => {
      const action = document.getElementById('ctaBtn').dataset.ctaAction;
      if (action === 'assessment') {
        window.location.href = `../../assessment/start?certId=${certId}`;
      } else if (action === 'continue') {
        document.querySelector('.lp-course-cards')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.location.href = `../../authentication/signup?certId=${certId}&name=${encodeURIComponent(cert.certificate_name)}&price=${encodeURIComponent(config.price)}`;
      }
    });
  }

  // ── Populate page and show ───────────────────────────────────────────────────
  populateHero(config);
  populateSidebar(cert, config, progress);
  populateLpTabs(cert, config, progress, selectedLpId);
  populateLpPanel(cert, config, productMap, progress, selectedLpId);
  populateCta(isPaid, progress, config);
  animateProgressBar();
  initListeners();
  root.removeAttribute('hidden');
})();

// ── Hero section ──────────────────────────────────────────────────────────────
function populateHero(config) {
  document.getElementById('detailsHero').style.setProperty('--hero-color', config.color);
  document.getElementById('backBtn').insertAdjacentHTML('afterbegin', getIcon('arrow-left', 18));
}

// ── Left sidebar: banner, quick stats, progress card ─────────────────────────
function populateSidebar(cert, config, progress) {
  const banner = document.getElementById('certBanner');
  banner.style.background  = `${config.color}15`;
  banner.style.borderColor = `${config.color}30`;

  const iconWrapper = document.getElementById('bannerIconWrapper');
  iconWrapper.style.background = `${config.color}22`;
  iconWrapper.style.color      = config.color;
  iconWrapper.innerHTML        = getIcon(config.icon, 40);

  const nameEl = document.getElementById('bannerCertName');
  nameEl.style.color  = config.color;
  nameEl.textContent  = cert.certificate_name;

  document.getElementById('iconDuration').innerHTML = getIcon('clock', 20);
  document.getElementById('iconPaths').innerHTML    = getIcon('route', 20);
  document.getElementById('iconCourses').innerHTML  = getIcon('book', 20);
  document.getElementById('iconPrice').innerHTML    = getIcon('currency-rupee', 20);

  document.getElementById('valDuration').textContent = config.duration;
  document.getElementById('valPaths').textContent    = cert.learning_paths.length;
  document.getElementById('valCourses').textContent  = getTotalCourses(cert.learning_paths);

  const priceEl = document.getElementById('valPrice');
  priceEl.textContent = config.price;
  priceEl.style.color = config.color;

  if (progress) populateProgressCard(progress, config);
}

// ── Progress card ─────────────────────────────────────────────────────────────
function populateProgressCard(progress, config) {
  document.getElementById('progressCard').hidden = false;

  const pct   = Math.min(100, Math.max(0, Math.round(progress.certificationProgress)));
  const pctEl = document.getElementById('progressPct');
  pctEl.textContent = `${pct}%`;
  pctEl.style.color = config.color;

  const fill = document.getElementById('progressFill');
  fill.style.setProperty('--bar-color', config.color);
  fill.dataset.pct = `${pct}%`;

  document.getElementById('statCompletedCourses').textContent =
    `${progress.completedCourses} / ${progress.totalCourses}`;
  document.getElementById('statCompletedPaths').textContent =
    `${progress.completedLearningPaths} / ${progress.totalLearningPaths}`;

  if (progress.nextCourse) {
    document.getElementById('progressNext').hidden = false;
    document.getElementById('progressNextCourse').textContent = progress.nextCourse;
  }
}

// ── LP tab buttons ────────────────────────────────────────────────────────────
function populateLpTabs(cert, config, progress, selectedLpId) {
  const container = document.getElementById('lpTabs');
  container.innerHTML = '';

  cert.learning_paths.forEach((lp, i) => {
    const frag = document.getElementById('tplLpTab').content.cloneNode(true);
    const btn  = frag.querySelector('.lp-tab');
    const done = getLpCompleted(lp.lp_id, progress);

    btn.dataset.lpId = lp.lp_id;
    btn.style.setProperty('--tab-color', config.color);
    btn.setAttribute('aria-selected', lp.lp_id === selectedLpId);
    if (lp.lp_id === selectedLpId) btn.classList.add('lp-tab--active');
    if (done) btn.classList.add('lp-tab--done');

    const numSpan = btn.querySelector('.lp-tab-num');
    if (done) {
      numSpan.classList.add('lp-tab-num--done');
      numSpan.innerHTML = getIcon('check', 11);
    } else {
      numSpan.textContent = i + 1;
    }

    btn.querySelector('.lp-tab-name').textContent = lp.lp_name;
    container.appendChild(frag);
  });
}

// ── LP panel (rebuilt on each tab switch) ────────────────────────────────────
function populateLpPanel(cert, config, productMap, progress, selectedLpId) {
  const panel      = document.getElementById('lpPanel');
  const selectedLp = cert.learning_paths.find(lp => lp.lp_id === selectedLpId)
                     || cert.learning_paths[0];

  if (!selectedLp) { panel.innerHTML = ''; return; }

  const frag = document.getElementById('tplLpPanel').content.cloneNode(true);

  // Banner image
  const bannerWrap = frag.querySelector('.lp-banner-wrap');
  if (selectedLp.lp_banner) {
    const img  = bannerWrap.querySelector('img');
    img.src    = selectedLp.lp_banner;
    img.alt    = selectedLp.lp_name;
    img.addEventListener('error', () => { bannerWrap.style.display = 'none'; });
  } else {
    bannerWrap.style.display = 'none';
  }

  // Title and description
  frag.querySelector('.lp-detail-title').textContent = selectedLp.lp_name;
  const descEl = frag.querySelector('.lp-detail-desc');
  if (selectedLp.lp_description) {
    descEl.innerHTML = selectedLp.lp_description;
  } else {
    descEl.style.display = 'none';
  }

  // Courses header icon
  const headerIcon     = frag.querySelector('.lp-header-icon');
  headerIcon.innerHTML   = getIcon('list-check', 15);
  headerIcon.style.color = config.color;

  // Course cards
  const cardsContainer = frag.querySelector('.lp-course-cards');
  selectedLp.courses.forEach(course => {
    cardsContainer.appendChild(createCourseCard(course, config, productMap, progress));
  });

  panel.innerHTML = '';
  panel.appendChild(frag);
}

// ── Single course card ────────────────────────────────────────────────────────
function createCourseCard(course, config, productMap, progress) {
  const frag = document.getElementById('tplCourseCard').content.cloneNode(true);
  const btn  = frag.querySelector('.lp-course-card');

  btn.style.setProperty('--course-color', config.color);
  btn.dataset.courseId = course.course_id;

  // Status dot inserted before .lcc-info
  const status = getCourseStatus(course.course_id, progress);
  if (status) {
    const dot = document.createElement('span');
    dot.className = `lcc-status lcc-status--${status}`;
    if (status === 'completed') dot.innerHTML = getIcon('check', 11);
    btn.insertBefore(dot, btn.firstChild);
  }

  btn.querySelector('.lcc-name').textContent = course.course_name;

  const durEl   = btn.querySelector('.lcc-duration');
  const product = productMap.get(course.course_id);
  if (product?.duration) {
    durEl.innerHTML = `${getIcon('clock', 11)} ${product.duration} min`;
  } else {
    durEl.style.display = 'none';
  }

  btn.querySelector('.lcc-arrow').innerHTML = getIcon('arrow-right', 17);

  return frag;
}

// ── CTA button ────────────────────────────────────────────────────────────────
function populateCta(isPaid, progress, config) {
  const cta = getCtaConfig(isPaid, progress, config);

  document.getElementById('ctaPriceLabel').textContent = isPaid ? 'Enrolled for' : 'Enroll for';

  const priceVal = document.getElementById('ctaPriceValue');
  priceVal.textContent = config.price;
  priceVal.style.color = config.color;

  const ctaBtn = document.getElementById('ctaBtn');
  ctaBtn.style.background  = cta.bg;
  ctaBtn.dataset.ctaAction = cta.action;
  ctaBtn.innerHTML         = `${cta.label} ${getIcon('arrow-right', 18)}`;
}

// ── Animate progress bar fill ─────────────────────────────────────────────────
function animateProgressBar() {
  const fill = document.querySelector('.progress-fill');
  if (!fill) return;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      fill.style.width = fill.dataset.pct || '0%';
    });
  });
}

// ── LP completion lookup ──────────────────────────────────────────────────────
function getLpCompleted(lpId, progress) {
  if (!progress?.learningPaths?.length) return false;
  return progress.learningPaths.find(l => l.lp_id === lpId)?.completed === true;
}

// ── Course status lookup ──────────────────────────────────────────────────────
// Returns null when progress is absent (cert not purchased — no indicator shown).
// Returns 'not_started' / 'in_progress' / 'completed' when progress exists.
function getCourseStatus(courseId, progress) {
  if (!progress) return null;
  const entry = progress.courses?.find(c => c.course_id === courseId);
  return entry?.status || 'not_started';
}

// ── CTA button config (3-state) ───────────────────────────────────────────────
// NOT_PAID              → Buy Now           (cert color)
// PAID + progress < 100 → Continue Learning (cert color)
// PAID + progress = 100 → Take Assessment   (green)
function getCtaConfig(isPaid, progress, config) {
  if (!isPaid) {
    return { label: 'Buy Now',           action: 'signup',     bg: config.color };
  }
  if ((progress?.certificationProgress ?? 0) >= 100) {
    return { label: 'Take Assessment',   action: 'assessment', bg: '#10b981'    };
  }
  return   { label: 'Continue Learning', action: 'continue',   bg: config.color };
}

// ── Not-found error state ─────────────────────────────────────────────────────
function showNotFound(container) {
  container.innerHTML = `
    <div class="not-found">
      ${getIcon('certificate-off', 64)}
      <h2>Certification Not Found</h2>
      <p>The certification you are looking for does not exist.</p>
      <button class="back-btn-dark" onclick="window.location.href='index.html'">
        ${getIcon('arrow-left', 16)} Back to Certifications
      </button>
    </div>`;
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
