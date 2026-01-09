/**
 * @file App entrypoint. Safe to load on every page.
 */

import { initConfig } from './services/config.js';
import { initPartials } from './components/partials.js';
import { initNavbarAuth } from './components/navbarAuth.js';
import { initFooterAdminLink } from './components/footerAdmin.js';
import { initReadMoreToggle } from './features/readMore.js';
import { initFileUploadLabel } from './features/fileUpload.js';
import { initQuillEditor } from './features/quillEditor.js';
import { initFormHandlers } from './features/formHandlers.js';

async function init() {
  // Ensure window.NASL exists even if legacy config script is removed.
  initConfig();

  // Ensure placeholders are filled before auth/admin DOM logic runs.
  await initPartials();

  initNavbarAuth();
  initFooterAdminLink();

  // Feature initializers (no-op unless the page has matching DOM).
  initReadMoreToggle();
  initFileUploadLabel();
  initQuillEditor();
  initFormHandlers();
}

// Module scripts are deferred by default, so this runs after parsing
// (and before DOMContentLoaded), keeping legacy inline listeners working.
init();
