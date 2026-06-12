// ── Course Details Page ───────────────────────────────────────────────────────
(async function () {
  const root          = document.getElementById('pageRoot');
  const courseId      = parseInt(getQueryParam('id'), 10);
  const certId        = parseInt(getQueryParam('certId'), 10) || null;
  const paymentStatus = getQueryParam('payment_status') || 'NOT_PAID';
  const isPaid        = paymentStatus === 'PAID';

  if (isNaN(courseId)) {
    showError(root, 'No course specified.');
    root.removeAttribute('hidden');
    return;
  }

  const [productMap, certifications] = await Promise.all([loadProducts(), loadCertifications()]);

  const product = productMap.get(courseId);
  const cert    = certId ? certifications.find(c => c.certificate_id === certId) : null;
  const config  = cert ? getConfigById(cert.certificate_id) : null;

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

  if (!product && !courseName) {
    showError(root, `Course ID ${courseId} not found.`);
    root.removeAttribute('hidden');
    return;
  }

  populateCoursePage(product, courseName, courseId, isPaid, config);
  initListeners(courseId, certId);
  root.removeAttribute('hidden');
})();

// ── Populate all course page elements ─────────────────────────────────────────
function populateCoursePage(product, courseName, courseId, isPaid, config) {
  const title      = product?.product_name || courseName || `Course ${courseId}`;
  const desc       = product?.description  || '';
  const objectives = product?.objectives   || '';
  const duration   = product?.duration ? `${product.duration} min` : '';
  const language   = product?.language     || '';
  const imageSrc   = product?.imagePath    || '';
  const skill      = product?.skill        || '';
  const subCats    = (product?.categories  || []).join(', ');

  // Back button — prepend icon to existing <span>Back</span>
  document.getElementById('courseBackBtn').insertAdjacentHTML('afterbegin', getIcon('arrow-left', 16));

  // Image
  const imageWrap = document.getElementById('courseImageWrap');
  if (imageSrc) {
    const img     = new Image();
    img.src       = imageSrc;
    img.alt       = title;
    img.className = 'course-img';
    img.id        = 'courseImg';
    img.addEventListener('error', () => {
      imageWrap.innerHTML = `<div class="course-img-placeholder">${getIcon('image', 48)}</div>`;
    });
    imageWrap.appendChild(img);
  } else {
    imageWrap.innerHTML = `<div class="course-img-placeholder">${getIcon('image', 48)}</div>`;
  }

  // Title
  document.getElementById('courseTitle').textContent = title;

  // Category
  if (skill) {
    document.getElementById('catRow').removeAttribute('hidden');
    document.getElementById('catChip').textContent = skill;
  }

  // Sub-categories
  if (subCats) {
    document.getElementById('subcatRow').removeAttribute('hidden');
    document.getElementById('subcatChip').textContent = subCats;
  }

  // Language meta chip
  if (language) {
    document.getElementById('langChip').removeAttribute('hidden');
    document.getElementById('langValue').textContent = language;
  }

  // Duration meta chip
  if (duration) {
    document.getElementById('durChip').removeAttribute('hidden');
    document.getElementById('durValue').textContent = duration;
  }

  // Description (rich text from API)
  if (desc) {
    const descEl = document.getElementById('courseDesc');
    descEl.removeAttribute('hidden');
    descEl.innerHTML = desc;
  }

  // Objectives list
  if (objectives) {
    const items = objectives.split('|').map(o => o.trim()).filter(Boolean);
    if (items.length) {
      document.getElementById('objIntro').removeAttribute('hidden');
      const list = document.getElementById('objList');
      list.removeAttribute('hidden');
      items.forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;
        list.appendChild(li);
      });
    }
  }

  // Launch button — only when cert is purchased
  if (isPaid) {
    const accent  = config?.color || '#10b981';
    const section = document.getElementById('launchSection');
    section.removeAttribute('hidden');
    const btn = document.getElementById('launchBtn');
    btn.style.background = accent;
    btn.innerHTML = `${getIcon('play', 18)} Launch Course`;
  }
}

// ── Event listeners ───────────────────────────────────────────────────────────
function initListeners(courseId, certId) {
  document.getElementById('courseBackBtn').addEventListener('click', () => {
    if (document.referrer) history.back();
    else window.location.href = 'index.html';
  });

  const launchBtn = document.getElementById('launchBtn');
  if (launchBtn) {
    launchBtn.addEventListener('click', () => {
      const params = new URLSearchParams({ courseId });
      if (certId) params.set('certId', certId);
      window.location.href = `../../course-player/launch?${params}`;
    });
  }
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
