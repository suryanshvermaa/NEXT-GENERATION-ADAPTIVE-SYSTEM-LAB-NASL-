/**
 * @file Runtime API base configuration.
 */

/**
 * @typedef {Object} NaslConfig
 * @property {string} LOCAL
 * @property {string} PRODUCTION
 * @property {string} API_BASE
 */

/**
 * Initializes `window.NASL` (backward-compatible with legacy `js/config.js`).
 * @param {{ local?: string, production?: string, apiBase?: string }} [overrides]
 * @returns {NaslConfig}
 */
export function initConfig(overrides = {}) {
  const LOCAL = overrides.local ?? 'http://localhost:3000';
  const PRODUCTION = overrides.production ?? 'https://nasl-lab-backend.vercel.app';

  const host = window.location.hostname;
  const computed = (host === 'localhost' || host === '127.0.0.1') ? LOCAL : PRODUCTION;
  const API_BASE = overrides.apiBase ?? computed;

  // Preserve existing window.NASL if present
  const current = /** @type {any} */ (window.NASL ?? {});
  const next = {
    ...current,
    LOCAL,
    PRODUCTION,
    API_BASE: current.API_BASE ?? API_BASE,
  };

  window.NASL = next;
  return /** @type {NaslConfig} */ (next);
}

/** @returns {string} */
export function getApiBase() {
  return (window.NASL && window.NASL.API_BASE) || (window.NASL && window.NASL.PRODUCTION) || '';
}
