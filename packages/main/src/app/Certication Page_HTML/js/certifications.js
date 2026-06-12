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
