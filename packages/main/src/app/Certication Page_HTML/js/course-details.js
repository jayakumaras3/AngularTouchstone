// ── Course Details Page ───────────────────────────────────────────────────────
(async function () {
  const root     = document.getElementById('pageRoot');
  const courseId = parseInt(getQueryParam('id'), 10);
  const certId   = parseInt(getQueryParam('certId'), 10) || null;

  if (isNaN(courseId)) { showError(root, 'No course specified.'); return; }

  const [productMap, certifications] = await Promise.all([loadProducts(), loadCertifications()]);

  const product = productMap.get(courseId);
  const cert    = certId ? certifications.find(c => c.certificate_id === certId) : null;
  const config  = cert ? getConfigById(cert.certificate_id) : null;
  const accent  = config?.color || '#5d87ff';

  let courseName = product?.product_name || '';
  if (!courseName) {
    outer: for (const c of certifications) {
      for (const lp of c.learning_paths) {
        for (const course of lp.courses) {
          if (course.course_id === courseId) { courseName = course.course_name; break outer; }
        }
      }
    }
  }

  if (!product && !courseName) { showError(root, `Course ID ${courseId} not found.`); return; }

  root.innerHTML = buildCoursePage(product, courseName, courseId, certId, cert, config, accent);
  attachListeners();
})();

function buildCoursePage(product, courseName, courseId, certId, cert, config, accent) {
  const title      = product?.product_name || courseName || `Course ${courseId}`;
  const desc       = product?.description  || '';
  const objectives = product?.objectives   || '';
  const duration   = product?.duration ? `${product.duration} min` : '';
  const language   = product?.language     || 'English';
  const imageSrc   = product?.imagePath    || '';
  const skill      = product?.skill        || '';
  const certName   = cert?.certificate_name || '';
  const certPrice  = config?.price         || '';

  const objList = objectives
    ? objectives.split('|').map(o => `<li>${escHtml(o.trim())}</li>`).join('')
    : '';

  return `
    <section class="course-hero" style="--course-color:${accent}">
      <div class="course-container">
        <button class="back-btn" type="button" id="courseBackBtn">
          ${getIcon('arrow-left', 18)}
          <span>${certName ? `Back to ${escHtml(certName.split('(')[0].trim())}` : 'Back'}</span>
        </button>
      </div>
    </section>

    <section class="course-main">
      <div class="course-container course-layout">

        <div class="course-image-wrap">
          ${imageSrc
            ? `<img src="${imageSrc}" alt="${escHtml(title)}" class="course-img" onerror="this.parentElement.innerHTML='<div class=course-img-placeholder>${getIcon('image', 48)}</div>'">`
            : `<div class="course-img-placeholder">${getIcon('image', 48)}</div>`}
        </div>

        <div class="course-info-panel">
          ${certName ? `<div class="course-cert-badge" style="color:${accent};background:${accent}15;border-color:${accent}30">${escHtml(certName.split('(')[0].trim())}</div>` : ''}
          <h1 class="course-title">${escHtml(title)}</h1>

          <div class="course-meta">
            ${language ? `<div class="meta-chip"><span class="meta-chip-label">Language</span><span class="meta-chip-value">${escHtml(language)}</span></div>` : ''}
            ${duration  ? `<div class="meta-chip"><span class="meta-chip-label">Duration</span><span class="meta-chip-value">${duration}</span></div>` : ''}
            ${skill     ? `<div class="meta-chip"><span class="meta-chip-label">Category</span><span class="meta-chip-value">${escHtml(skill)}</span></div>` : ''}
          </div>

          ${desc ? `<div class="course-section"><h3 class="section-title">About this Course</h3><div class="course-desc">${desc}</div></div>` : ''}
          ${objList ? `<div class="course-section"><h3 class="section-title">What You'll Learn</h3><ul class="objectives-list">${objList}</ul></div>` : ''}

          <div class="course-signup-cta">
            ${certPrice ? `<div class="cta-price-info"><span class="cta-price-label">Part of certification at</span><span class="cta-price-value" style="color:${accent}">${certPrice}</span></div>` : ''}
            <button class="course-signup-btn" style="background:${accent}" id="courseSignupBtn">
              Buy Now ${getIcon('arrow-right', 18)}
            </button>
          </div>
        </div>

      </div>
    </section>`;
}

function attachListeners() {
  document.getElementById('courseBackBtn')?.addEventListener('click', () => {
    if (document.referrer) history.back();
    else window.location.href = 'index.html';
  });
  document.getElementById('courseSignupBtn')?.addEventListener('click', () => {
    const certId = getQueryParam('certId');
    window.location.href = certId
      ? `../../authentication/signup?certId=${certId}`
      : `../../authentication/signup`;
  });
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
