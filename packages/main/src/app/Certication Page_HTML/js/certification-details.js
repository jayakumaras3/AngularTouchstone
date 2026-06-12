// ── Certification Details Page ────────────────────────────────────────────────
(async function () {
  const root          = document.getElementById('pageRoot');
  const certId        = parseInt(getQueryParam('id'), 10);
  // CodeIgniter: replace getQueryParam with the DB field value injected by the controller
  const paymentStatus = getQueryParam('payment_status') || 'NOT_PAID';

  if (isNaN(certId)) { showNotFound(root); return; }

  const [certifications, productMap] = await Promise.all([
    loadCertifications(),
    loadProducts(),
  ]);

  const cert   = certifications.find(c => c.certificate_id === certId);
  const config = getConfigById(certId);

  if (!cert || !config) { showNotFound(root); return; }

  let selectedLpId = cert.learning_paths[0]?.lp_id ?? null;

  function render() {
    root.innerHTML = buildDetailsPage(cert, config, selectedLpId, productMap, paymentStatus);
    attachListeners();
  }

  function attachListeners() {
    root.querySelectorAll('.lp-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        selectedLpId = parseInt(tab.dataset.lpId, 10);
        render();
        root.querySelector('.details-right')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    root.querySelectorAll('.lp-course-card').forEach(card => {
      card.addEventListener('click', () => {
        window.location.href = `course-details.html?id=${card.dataset.courseId}&certId=${certId}`;
      });
    });

    root.querySelector('.signup-now-btn')?.addEventListener('click', () => {
      const action = root.querySelector('.signup-now-btn')?.dataset.ctaAction;
      if (action === 'assessment') {
        window.location.href = `../../assessment/start?certId=${certId}`;
      } else {
        window.location.href = `../../authentication/signup?certId=${certId}&name=${encodeURIComponent(cert.certificate_name)}&price=${encodeURIComponent(config.price)}`;
      }
    });

    root.querySelector('.back-btn')?.addEventListener('click', () => {
      if (document.referrer) history.back();
      else window.location.href = 'index.html';
    });
  }

  render();
})();

// ── Build Page ────────────────────────────────────────────────────────────────
function buildDetailsPage(cert, config, selectedLpId, productMap, paymentStatus) {
  const totalCourses = getTotalCourses(cert.learning_paths);
  const selectedLp   = cert.learning_paths.find(lp => lp.lp_id === selectedLpId) || cert.learning_paths[0];
  const isPaid       = paymentStatus === 'PAID';

  return `
    <section class="details-hero" style="--hero-color:${config.color}">
      <div class="details-container">
        <button class="back-btn" type="button">
          ${getIcon('arrow-left', 18)}<span>Back to Certifications</span>
        </button>
      </div>
    </section>

    <section class="details-main">
      <div class="details-container details-layout">

        <div class="details-left">
          <div class="cert-banner" style="background:${config.color}15; border-color:${config.color}30">
            <div class="banner-icon-wrapper" style="background:${config.color}22; color:${config.color}">
              ${getIcon(config.icon, 40)}
            </div>
            <span class="banner-cert-name" style="color:${config.color}">${escHtml(cert.certificate_name)}</span>
          </div>

          <div class="quick-stats-card">
            <div class="qs-row">
              <span class="qs-icon">${getIcon('clock', 20)}</span>
              <div><span class="qs-label">Duration</span><span class="qs-value">${config.duration}</span></div>
            </div>
            <div class="qs-row">
              <span class="qs-icon">${getIcon('route', 20)}</span>
              <div><span class="qs-label">Learning Paths</span><span class="qs-value">${cert.learning_paths.length}</span></div>
            </div>
            <div class="qs-row">
              <span class="qs-icon">${getIcon('book', 20)}</span>
              <div><span class="qs-label">Total Courses</span><span class="qs-value">${totalCourses}</span></div>
            </div>
            <div class="qs-row">
              <span class="qs-icon">${getIcon('currency-rupee', 20)}</span>
              <div><span class="qs-label">Price</span><span class="qs-value price-highlight" style="color:${config.color}">${config.price}</span></div>
            </div>
          </div>
        </div>

        <div class="details-right">
          <div class="lp-tabs" role="tablist">
            ${cert.learning_paths.map((lp, i) => `
              <button class="lp-tab${lp.lp_id === selectedLpId ? ' lp-tab--active' : ''}"
                      style="--tab-color:${config.color}"
                      data-lp-id="${lp.lp_id}" role="tab"
                      aria-selected="${lp.lp_id === selectedLpId}">
                <span class="lp-tab-num">${i + 1}</span>
                <span class="lp-tab-name">${escHtml(lp.lp_name)}</span>
              </button>`).join('')}
          </div>

          ${selectedLp ? buildLpPanel(selectedLp, config, productMap) : ''}

          <div class="signup-cta">
            <div class="cta-price-info">
              <span class="cta-price-label">${isPaid ? 'Enrolled for' : 'Enroll for'}</span>
              <span class="cta-price-value" style="color:${config.color}">${config.price}</span>
            </div>
            <button class="signup-now-btn" type="button"
                    data-cta-action="${isPaid ? 'assessment' : 'signup'}"
                    style="background:${isPaid ? '#10b981' : config.color}">
              ${isPaid ? 'Take Assessment' : 'Buy Now'} ${getIcon('arrow-right', 18)}
            </button>
          </div>
        </div>

      </div>
    </section>`;
}

function buildLpPanel(lp, config, productMap) {
  let html = '';

  if (lp.lp_banner) {
    html += `<div class="lp-banner-wrap">
      <img src="${lp.lp_banner}" alt="${escHtml(lp.lp_name)}" class="lp-banner-img"
           onerror="this.parentElement.style.display='none'">
    </div>`;
  }

  html += `<h2 class="lp-detail-title">${escHtml(lp.lp_name)}</h2>`;

  if (lp.lp_description) {
    html += `<div class="lp-detail-desc">${lp.lp_description}</div>`;
  }

  html += `
    <div class="lp-courses-section">
      <div class="lp-courses-header">
        <span style="color:${config.color}">${getIcon('list-check', 15)}</span>
        Courses Included
      </div>
      <div class="lp-course-cards">
        ${lp.courses.map(course => {
          const product  = productMap.get(course.course_id);
          const duration = product?.duration ? `${product.duration} min` : '';
          return `
            <button class="lp-course-card" type="button"
                    style="--course-color:${config.color}"
                    data-course-id="${course.course_id}">
              <div class="lcc-info">
                <span class="lcc-name">${escHtml(course.course_name)}</span>
                ${duration ? `<span class="lcc-duration">${getIcon('clock', 11)} ${duration}</span>` : ''}
              </div>
              <span class="lcc-arrow">${getIcon('arrow-right', 17)}</span>
            </button>`;
        }).join('')}
      </div>
    </div>`;

  return html;
}

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
