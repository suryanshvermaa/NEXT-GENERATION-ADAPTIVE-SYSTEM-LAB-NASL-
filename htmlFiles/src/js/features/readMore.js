/**
 * @file Read-more toggle on the homepage.
 */

import { $ } from '../utils/dom.js';

export function initReadMoreToggle() {
  const link = /** @type {HTMLElement|null} */ ($('#readMoreLink'));
  const dots = /** @type {HTMLElement|null} */ ($('#dots'));
  const more = /** @type {HTMLElement|null} */ ($('#more'));
  if (!link || !dots || !more) return;

  link.addEventListener('click', (ev) => {
    ev.preventDefault();

    const dotsHidden = dots.style.display === 'none';
    if (dotsHidden) {
      dots.style.display = 'inline';
      link.innerHTML = 'Read more';
      more.style.display = 'none';
    } else {
      dots.style.display = 'none';
      link.innerHTML = 'Read less';
      more.style.display = 'inline';
    }
  });
}
