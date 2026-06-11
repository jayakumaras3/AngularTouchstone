// ── Certifications Catalog Page ───────────────────────────────────────────────
(async function () {
  const root = document.getElementById('pageRoot');

  const certifications = await loadCertifications();

  const viewModels = certifications
    .map(cert => {
      const config = getConfigById(cert.certificate_id);
      if (!config) return null;
      return { cert, config, totalCourses: getTotalCourses(cert.learning_paths) };
    })
    .filter(Boolean);

  root.innerHTML = renderCatalog(viewModels);
  attachCardListeners(viewModels);
})();

// ── Render Catalog ────────────────────────────────────────────────────────────
function renderCatalog(viewModels) {
  return `
    <section class="cert-hero">
      <div class="hero-blob hero-blob--tl" aria-hidden="true"></div>
      <div class="hero-blob hero-blob--br" aria-hidden="true"></div>
      <div class="hero-content">
        <div class="hero-badge">
          <span class="hero-badge-dot"></span>
          7 Professional Certifications
        </div>
        <h1 class="hero-title">Professional Certification<br>Programs</h1>
        <p class="hero-subtitle">
          Industry-focused certification programs designed to accelerate careers
          and build professional credibility
        </p>
        <div class="hero-stats">
          <div class="hero-stat">
            <span class="hero-stat-value">7</span>
            <span class="hero-stat-label">Certifications</span>
          </div>
          <div class="hero-stat-divider"></div>
          <div class="hero-stat">
            <span class="hero-stat-value">200+</span>
            <span class="hero-stat-label">Courses</span>
          </div>
          <div class="hero-stat-divider"></div>
          <div class="hero-stat">
            <span class="hero-stat-value">37</span>
            <span class="hero-stat-label">Learning Paths</span>
          </div>
        </div>
      </div>
      <div class="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="#f1f5f9"/>
        </svg>
      </div>
    </section>

    <section class="cert-cards-section">
      <div class="cards-grid">
        ${viewModels.map((vm, i) => renderCard(vm, i)).join('')}
      </div>
    </section>`;
}

function renderCard(vm, index) {
  const { cert, config, totalCourses } = vm;
  const imgSrc = getCertificationImage(config.shortName);
  const desc   = stripHtml(cert.certificate_description);
  const delay  = (index + 1) * 0.07;

  return `
    <div class="cert-card" style="--card-color:${config.color}; animation-delay:${delay}s">
      <div class="card-image">
        <img src="${imgSrc}" alt="${escHtml(cert.certificate_name)}"
             loading="lazy" onerror="this.parentElement.style.display='none'">
      </div>
      <div class="card-body">
        <h3 class="cert-title">${escHtml(cert.certificate_name)}</h3>
        <p class="cert-desc">${escHtml(desc)}</p>
        <div class="cert-price" style="color:${config.color}">${config.price}</div>
        <div class="stats-row">
          <div class="stat-item">
            <span class="stat-icon" style="color:${config.color}">${getIcon('clock', 18)}</span>
            <span class="stat-label">${config.duration}</span>
          </div>
          <div class="stat-item">
            <span class="stat-icon" style="color:${config.color}">${getIcon('book', 18)}</span>
            <span class="stat-label">${totalCourses} Courses</span>
          </div>
          <div class="stat-item">
            <span class="stat-icon" style="color:${config.color}">${getIcon('route', 18)}</span>
            <span class="stat-label">${cert.learning_paths.length} Learning Paths</span>
          </div>
        </div>
        <div class="card-footer">
          <button class="details-btn" style="--btn-color:${config.color}"
                  data-action="details" data-cert-id="${cert.certificate_id}"
                  aria-label="View details for ${escHtml(cert.certificate_name)}">
            View Details
          </button>
          <button class="signup-btn" style="--btn-color:${config.color}"
                  data-action="signup" data-cert-id="${cert.certificate_id}"
                  aria-label="Buy now for ${escHtml(cert.certificate_name)}">
            Buy Now
          </button>
        </div>
      </div>
    </div>`;
}

// ── Event Delegation ──────────────────────────────────────────────────────────
function attachCardListeners(viewModels) {
  document.getElementById('pageRoot').addEventListener('click', e => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const id = parseInt(btn.dataset.certId, 10);
    const vm = viewModels.find(v => v.cert.certificate_id === id);
    if (!vm) return;

    if (btn.dataset.action === 'details') {
      window.location.href = `certification-details.html?id=${id}`;
    } else if (btn.dataset.action === 'signup') {
      window.location.href = `../../authentication/signup?certId=${id}&name=${encodeURIComponent(vm.cert.certificate_name)}&price=${encodeURIComponent(vm.config.price)}`;
    }
  });
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
