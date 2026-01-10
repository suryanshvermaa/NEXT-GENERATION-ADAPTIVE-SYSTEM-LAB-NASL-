/**
 * @file Loads shared HTML partials (navbar/footer) into placeholders.
 */

import { $ } from '../utils/dom.js';

/**
 * Fetch the first URL that succeeds.
 * @param {string[]} urls
 * @returns {Promise<string|null>}
 */
async function fetchFirst(urls) {
  for (const url of urls) {
    try {
      const res = await fetch(url, { cache: 'no-cache' });
      if (!res.ok) continue;
      return await res.text();
    } catch {
      // ignore and try next
    }
  }
  return null;
}

/**
 * Loads navbar/footer fragments if placeholders exist.
 * Replaces any existing placeholder content to keep headers/footers consistent.
 */
export async function initPartials() {
  const navbarHost = /** @type {HTMLElement|null} */ ($('#navbar-placeholder'));
  if (navbarHost) {
    const html = await fetchFirst(['/reuse/navbar.html']);
    if (html) navbarHost.innerHTML = html;
  }

  const footerHost = /** @type {HTMLElement|null} */ ($('#footer-placeholder'));
  if (footerHost) {
    const html = await fetchFirst(['/reuse/footer.html']);
    if (html) footerHost.innerHTML = html;
  }
}
