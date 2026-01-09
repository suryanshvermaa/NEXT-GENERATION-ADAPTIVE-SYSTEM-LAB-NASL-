/**
 * @file Footer admin-only link visibility.
 */

import { $ } from '../utils/dom.js';
import { getStoredUser } from '../state/auth.js';

export function initFooterAdminLink() {
  const createUserLink = /** @type {HTMLElement|null} */ ($('#create-user'));
  if (!createUserLink) return;

  const user = getStoredUser();
  const role = user?.role;

  createUserLink.style.display = role === 'ADMIN' ? 'block' : 'none';
}
