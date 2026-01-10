/**
 * @file Navbar auth/profile behavior.
 */

import { $ } from '../utils/dom.js';
import { getApiBase } from '../services/config.js';
import { clearAuth, getAuthToken } from '../state/auth.js';

/**
 * Initializes auth button + profile image behavior if the elements exist.
 */
export function initNavbarAuth() {
  const authButton = /** @type {HTMLAnchorElement|null} */ ($('#auth-button'));
  const profileButton = /** @type {HTMLAnchorElement|null} */ ($('#profile-button'));
  const profileMenu = /** @type {HTMLElement|null} */ ($('#profile-menu'));
  const logoutLink = /** @type {HTMLAnchorElement|null} */ ($('#logout-link'));
  const adminDashboardItem = /** @type {HTMLElement|null} */ ($('#admin-dashboard-item'));
  const profileLoginItem = /** @type {HTMLElement|null} */ ($('#profile-login-item'));

  if (!authButton) return;

  const token = getAuthToken();

  if (!token) {
    authButton.textContent = 'Login';
    authButton.style.display = '';
    if (profileLoginItem) profileLoginItem.style.display = '';
    if (profileMenu) profileMenu.style.display = 'none';
    if (profileButton) profileButton.style.display = 'none';
    return;
  }

  authButton.textContent = 'Logout';
  authButton.style.display = 'none';
  if (profileLoginItem) profileLoginItem.style.display = 'none';
  if (profileMenu) profileMenu.style.display = '';
  if (profileButton) profileButton.style.display = '';

  const handleLogout = (ev) => {
    ev.preventDefault();
    clearAuth();
    alert('Logged out successfully.');
    location.reload();
  };

  if (logoutLink) logoutLink.addEventListener('click', handleLogout);
  // Backward compatibility: if some pages still rely on the old auth button for logout.
  authButton.addEventListener('click', handleLogout);

  const apiBase = getApiBase();
  if (!apiBase) return;

  fetch(`${apiBase}/api/user/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((response) => {
      if (!response.ok) throw new Error('Failed to fetch profile');
      return response.json();
    })
    .then((result) => {
      const user = result?.data?.user;
      if (!user) return;

      const profileName = /** @type {HTMLElement|null} */ ($('#profile_name'));
      if (profileName) profileName.textContent = user.name || 'Profile';

      const role = String(user.role || user.userRole || '').toLowerCase();
      if (adminDashboardItem) {
        adminDashboardItem.style.display = role === 'admin' ? '' : 'none';
      }

      const profileImg = /** @type {HTMLImageElement|null} */ ($('#profile_image'));
      if (!profileImg) return;

      profileImg.src = user.profileImage || '/assets/default-avatar.svg';
      profileImg.alt = user.name || 'Profile Image';
      profileImg.style.width = '30px';
      profileImg.style.height = '30px';
      profileImg.style.borderRadius = '50%';
      profileImg.style.objectFit = 'cover';
    })
    .catch((error) => {
      console.error('Error loading profile image:', error);
    });
}
