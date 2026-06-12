// ── Module-level State ────────────────────────────────────────────────────────
let _viewModels = [];

// Per-certification purchase state, keyed by certificate_id.
// CodeIgniter: populate via updatePurchaseStatus() using the DB field payment_status.
const purchaseState = {};

// ── Public: Re-render all certification cards ─────────────────────────────────
function renderCertificationCards() {
  const grid = document.getElementById('cardsGrid');
  grid.innerHTML = '';
  _viewModels.forEach((vm, i) => grid.appendChild(createCardElement(vm, i)));
}

// ── Public: Update purchase status for one certification ──────────────────────
// certificationId : number  (certificate_id)
// paymentStatus   : string  'PAID' | 'NOT_PAID'
function updatePurchaseStatus(certificationId, paymentStatus) {
  purchaseState[certificationId] = paymentStatus;
  const btn = document.querySelector(`[data-action-btn="${certificationId}"]`);
  if (!btn) return;
  const isPaid   = paymentStatus === 'PAID';
  const vm       = _viewModels.find(v => v.cert.certificate_id === certificationId);
  const certName = vm ? vm.cert.certificate_name : '';
  setActionButton(btn, certificationId, certName, isPaid);
}

// ── Create card element from <template id="tplCertCard"> ─────────────────────
function createCardElement(vm, index) {
  const { cert, config, totalCourses } = vm;
  const frag = document.getElementById('tplCertCard').content.cloneNode(true);
  const card = frag.querySelector('.cert-card');

  card.style.setProperty('--card-color', config.color);
  card.style.animationDelay = `${(index + 1) * 0.07}s`;

  // Image
  const img = card.querySelector('img');
  img.src = getCertificationImage(config.shortName);
  img.alt = cert.certificate_name;
  img.addEventListener('error', () => { img.parentElement.style.display = 'none'; });

  // Text content
  card.querySelector('.cert-title').textContent = cert.certificate_name;
  card.querySelector('.cert-desc').textContent  = stripHtml(cert.certificate_description);

  // Price
  const priceEl = card.querySelector('.cert-price');
  priceEl.textContent = config.price;
  priceEl.style.color = config.color;

  // Stats (3 icon+label pairs)
  const icons  = card.querySelectorAll('.stat-icon');
  const labels = card.querySelectorAll('.stat-label');
  [
    { icon: 'clock', label: config.duration                                },
    { icon: 'book',  label: `${totalCourses} Courses`                     },
    { icon: 'route', label: `${cert.learning_paths.length} Learning Paths` },
  ].forEach((s, i) => {
    icons[i].innerHTML    = getIcon(s.icon, 18);
    icons[i].style.color  = config.color;
    labels[i].textContent = s.label;
  });

  // Details button
  const detailsBtn = card.querySelector('[data-action="details"]');
  detailsBtn.style.setProperty('--btn-color', config.color);
  detailsBtn.dataset.certId = cert.certificate_id;
  detailsBtn.setAttribute('aria-label', `View details for ${cert.certificate_name}`);

  // Action button (Buy Now / Take Assessment)
  const actionBtn = card.querySelector('[data-action-btn]');
  setActionButton(actionBtn, cert.certificate_id, cert.certificate_name,
                  purchaseState[cert.certificate_id] === 'PAID');

  return frag;
}

// ── Set action button state (used by createCardElement and updatePurchaseStatus)
function setActionButton(btn, certId, certName, isPaid) {
  btn.className         = isPaid ? 'assessment-btn' : 'buy-now-btn';
  btn.dataset.action    = isPaid ? 'assessment'     : 'signup';
  btn.dataset.certId    = certId;
  btn.dataset.actionBtn = certId;
  btn.textContent       = isPaid ? 'Take Assessment' : 'Buy Now';
  btn.setAttribute('aria-label', isPaid
    ? `Take assessment for ${certName}`
    : `Buy now for ${certName}`);
}

// ── Card Listener — initialized once, uses event delegation on #pageRoot ──────
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
