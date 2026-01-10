// Legacy runtime config (classic script).
// Keeps compatibility with pages that include /js/config.js.
(function () {
  const LOCAL = 'http://localhost:3000';
  const PRODUCTION = 'https://nasl-lab-backend.vercel.app';

  const existing = (window.NASL && typeof window.NASL === 'object') ? window.NASL : {};
  const host = window.location.hostname;

  const computedBase = (host === 'localhost' || host === '127.0.0.1') ? LOCAL : PRODUCTION;

  window.NASL = {
    ...existing,
    LOCAL: existing.LOCAL || LOCAL,
    PRODUCTION: existing.PRODUCTION || PRODUCTION,
    API_BASE: existing.API_BASE || computedBase,
  };
})();
