/**
 * @file Bridges declarative HTML attributes to JS functions without inline handlers.
 */

import { $all } from '../utils/dom.js';

/**
 * Attaches submit handlers for forms using `data-nasl-submit="functionName"`.
 * The function is expected to exist on `window`.
 */
export function initFormHandlers() {
  $all('form[data-nasl-submit]').forEach((form) => {
    const name = form.getAttribute('data-nasl-submit');
    if (!name) return;

    form.addEventListener('submit', (ev) => {
      const fn = /** @type {any} */ (window)[name];
      if (typeof fn === 'function') {
        fn(ev);
      }
    });
  });
}
