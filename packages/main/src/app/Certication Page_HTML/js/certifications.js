// ── Module-level State ────────────────────────────────────────────────────────
let _viewModels = [];

// Per-certification purchase state, keyed by certificate_id.
// paymentStatus values: 'PAID' => Take Assessment (green) | 'NOT_PAID' => Buy Now (blue)
// CodeIgniter: populate via updatePurchaseStatus() using the DB field payment_status.
const purchaseState = {};

// ── Public: Re-render all certification cards ─────────────────────────────────
function renderCertificationCards() {
  document.getElementById('pageRoot').innerHTML = renderCatalog(_viewModels);
}

// ── Public: Update purchase status for one certification ──────────────────────
// certificationId : number  (certificate_id)
// paymentStatus   : string  'PAID' | 'NOT_PAID'  — matches CodeIgniter payment_status field

function updatePurchaseStatus(certificationId, paymentStatus) {
  purchaseState[certificationId] = paymentStatus;
  const btn = document.querySelector(`[data-action-btn="${certificationId}"]`);
  if (!btn) return;
  const isPaid   = paymentStatus === 'PAID';
  const vm       = _viewModels.find(v => v.cert.certificate_id === certificationId);
  const certName = vm ? escHtml(vm.cert.certificate_name) : '';
  btn.className      = isPaid ? 'assessment-btn' : 'buy-now-btn';
  btn.dataset.action = isPaid ? 'assessment'     : 'signup';
  btn.textContent    = isPaid ? 'Take Assessment' : 'Buy Now';
  btn.setAttribute('aria-label', isPaid
    ? `Take assessment for ${certName}`
    : `Buy now for ${certName}`);
}

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
  const imgSrc      = getCertificationImage(config.shortName);
  const desc        = stripHtml(cert.certificate_description);
  const delay       = (index + 1) * 0.07;
  const isPaid      = purchaseState[cert.certificate_id] === 'PAID';
  const actionLabel = isPaid ? 'Take Assessment' : 'Buy Now';
  const actionKey   = isPaid ? 'assessment'      : 'signup';
  const actionClass = isPaid ? 'assessment-btn'  : 'buy-now-btn';

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
          <button class="${actionClass}"
                  data-action="${actionKey}"
                  data-cert-id="${cert.certificate_id}"
                  data-action-btn="${cert.certificate_id}"
                  aria-label="${actionLabel} for ${escHtml(cert.certificate_name)}">
            ${actionLabel}
          </button>
        </div>
      </div>
    </div>`;
}

// ── Card Listener — initialized once, survives innerHTML replacement ───────────
function initCardListeners() {
  document.getElementById('pageRoot').addEventListener('click', e => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const id = parseInt(btn.dataset.certId, 10);
    const vm = _viewModels.find(v => v.cert.certificate_id === id);
    if (!vm) return;

    if (btn.dataset.action === 'details') {
      const paymentStatus = purchaseState[id] || 'NOT_PAID';
      window.location.href = `certification-details.html?id=${id}&payment_status=${paymentStatus}`;
    } else if (btn.dataset.action === 'signup') {
      window.location.href = `../../authentication/signup?certId=${id}&name=${encodeURIComponent(vm.cert.certificate_name)}&price=${encodeURIComponent(vm.config.price)}`;
    } else if (btn.dataset.action === 'assessment') {
      window.location.href = `../../assessment/start?certId=${id}`;
    }
  });
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ── Init ──────────────────────────────────────────────────────────────────────
(async function () {
  const certifications = await loadCertifications();

  _viewModels = certifications
    .map(cert => {
      const config = getConfigById(cert.certificate_id);
      if (!config) return null;
      return { cert, config, totalCourses: getTotalCourses(cert.learning_paths) };
    })
    .filter(Boolean);

  // Initialize per-cert purchase state.
  // CodeIgniter: cert.payment_status is the DB field value ('PAID' | 'NOT_PAID').
  _viewModels.forEach(vm => {
    purchaseState[vm.cert.certificate_id] = vm.cert.payment_status || 'NOT_PAID';
  });

  renderCertificationCards();
  initCardListeners();
})();
