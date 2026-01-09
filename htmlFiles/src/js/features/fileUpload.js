/**
 * @file File input label update (#file-upload -> #file-name).
 */

import { $ } from '../utils/dom.js';

export function initFileUploadLabel() {
  const input = /** @type {HTMLInputElement|null} */ ($('#file-upload'));
  const label = /** @type {HTMLElement|null} */ ($('#file-name'));
  if (!input || !label) return;

  input.addEventListener('change', () => {
    const fileName = input.files?.[0]?.name || 'No file chosen';
    label.textContent = fileName;
  });
}
