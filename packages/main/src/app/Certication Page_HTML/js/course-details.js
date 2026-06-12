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
  const categories = product?.categories   || [];
  const certName   = cert?.certificate_name || '';
  const certPrice  = config?.price         || '';

  const subCats = categories.join(', ');

  const objItems = objectives
    ? objectives.split('|').map(o => `<li>${escHtml(o.trim())}</li>`).join('')
    : '';

  return `
    <div class="course-page-wrap">
      <div class="course-container">

        <button class="back-btn-simple" type="button" id="courseBackBtn">
          ${getIcon('arrow-left', 16)}
          <span>Back</span>
        </button>

        <div class="course-card">

          <div class="course-image-wrap">
            ${imageSrc
              ? `<img src="${escHtml(imageSrc)}" alt="${escHtml(title)}" class="course-img" id="courseImg">`
              : `<div class="course-img-placeholder">${getIcon('image', 48)}</div>`}
          </div>

          <div class="course-info-panel">
            <h1 class="course-title">${escHtml(title)}</h1>

            ${skill   ? `<div class="course-cat-row"><span class="course-cat-label">Categories:</span><span class="course-cat-chip">${escHtml(skill)}</span></div>` : ''}
            ${subCats ? `<div class="course-subcat-row"><span class="course-cat-label">Sub Catogeries:</span><span class="course-subcat-chip">${escHtml(subCats)}</span></div>` : ''}

            <div class="course-meta">
              ${language ? `<div class="meta-chip"><span class="meta-chip-label">Language</span><span class="meta-chip-value">${escHtml(language)}</span></div>` : ''}
              ${duration  ? `<div class="meta-chip"><span class="meta-chip-label">Duration</span><span class="meta-chip-value">${duration}</span></div>` : ''}
            </div>

            <hr class="course-divider">

            ${desc    ? `<div class="course-desc">${desc}</div>` : ''}

            ${objItems ? `
              <p class="objectives-intro">At the end of this course, you will be able to:</p>
              <ul class="objectives-list">${objItems}</ul>
            ` : ''}

          </div>
        </div>
      </div>
    </div>`;
}

function attachListeners() {
  document.getElementById('courseBackBtn')?.addEventListener('click', () => {
    if (document.referrer) history.back();
    else window.location.href = 'index.html';
  });
  const img = document.getElementById('courseImg');
  if (img) {
    img.addEventListener('error', () => {
      img.parentElement.innerHTML = `<div class="course-img-placeholder">${getIcon('image', 48)}</div>`;
    });
  }
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
