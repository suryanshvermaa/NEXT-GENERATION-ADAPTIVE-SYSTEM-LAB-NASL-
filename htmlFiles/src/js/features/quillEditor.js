/**
 * @file Quill editor bootstrap + submit wiring.
 */

import { $ } from '../utils/dom.js';

/**
 * Initializes Quill for pages that have `#editor` + `#toolbar`.
 * Also wires form submit to copy HTML into `#hiddenArea`.
 */
export function initQuillEditor() {
  const editor = $('#editor');
  const toolbar = $('#toolbar');
  if (!editor || !toolbar) return;

  // Quill is provided via CDN on these pages.
  const QuillCtor = /** @type {any} */ (window.Quill);
  if (!QuillCtor) return;

  /** @type {any} */
  const existing = typeof QuillCtor.find === 'function' ? QuillCtor.find(editor) : null;

  /** @type {any} */
  const quill = existing
    ? existing
    : new QuillCtor('#editor', {
        theme: 'snow',
        modules: { toolbar: '#toolbar' },
      });

  // Backward-compat for existing inline scripts.
  if (!(/** @type {any} */ (window).quill)) {
    /** @type {any} */ (window).quill = quill;
  }

  const hidden = /** @type {HTMLInputElement|HTMLTextAreaElement|null} */ ($('#hiddenArea'));
  if (!hidden) return;

  const form = hidden.closest('form');
  if (!form) return;

  form.addEventListener('submit', () => {
    hidden.value = quill.root.innerHTML;
  });
}
