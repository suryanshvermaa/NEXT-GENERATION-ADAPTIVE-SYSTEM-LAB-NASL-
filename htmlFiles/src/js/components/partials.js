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
 * Only injects when placeholder is currently empty.
 */
export async function initPartials() {
  const navbarHost = /** @type {HTMLElement|null} */ ($('#navbar-placeholder'));
  if (navbarHost && navbarHost.childElementCount === 0) {
    const html = await fetchFirst(['/reuse/navbar.html']);
    if (html) navbarHost.innerHTML = html;
  }

  const footerHost = /** @type {HTMLElement|null} */ ($('#footer-placeholder'));
  if (footerHost && footerHost.childElementCount === 0) {
    const html = await fetchFirst(['/reuse/footer.html']);
    if (html) footerHost.innerHTML = html;
  }
}
