// ── Test Panel — Remove before production ─────────────────────────────────────
(function () {
  const CERTS = [
    { id: 1, name: 'CCD-Tech' },
    { id: 2, name: 'HC-LC'    },
    { id: 3, name: 'SDBPS'   },
    { id: 4, name: 'WRWEI'   },
    { id: 5, name: 'CSMBL'   },
    { id: 6, name: 'CTLTE'   },
    { id: 7, name: 'CSFBA'   },
  ];

  function renderRows() {
    const body = document.getElementById('testPanelBody');
    if (!body) return;
    body.innerHTML = CERTS.map(c => {
      const status = purchaseState[c.id] || 'NOT_PAID';
      const cls    = status === 'PAID' ? 'paid' : 'not-paid';
      return `
        <div class="tp-row">
          <span class="tp-name">${c.name}</span>
          <span class="tp-badge ${cls}" id="tp-badge-${c.id}">${status}</span>
          <button class="tp-btn" onclick="tpToggle(${c.id})">Toggle</button>
        </div>`;
    }).join('');
  }

  window.tpToggle = function (id) {
    const current = purchaseState[id] || 'NOT_PAID';
    const next    = current === 'PAID' ? 'NOT_PAID' : 'PAID';
    updatePurchaseStatus(id, next);
    const badge = document.getElementById('tp-badge-' + id);
    if (badge) {
      badge.textContent = next;
      badge.className   = 'tp-badge ' + (next === 'PAID' ? 'paid' : 'not-paid');
    }
  };

  window.markAll = function (status) {
    CERTS.forEach(c => updatePurchaseStatus(c.id, status));
    renderRows();
  };

  document.getElementById('testPanelToggle').addEventListener('click', function () {
    const body   = document.getElementById('testPanelBody');
    const footer = document.getElementById('testPanelFooter');
    const open   = body.style.display !== 'none';
    body.style.display   = open ? 'none' : 'block';
    footer.style.display = open ? 'none' : 'flex';
    this.textContent     = open ? '+' : '−';
  });

  const observer = new MutationObserver(function () {
    if (document.querySelector('.cert-card')) {
      observer.disconnect();
      renderRows();
    }
  });
  observer.observe(document.getElementById('pageRoot'), { childList: true, subtree: true });
})();
