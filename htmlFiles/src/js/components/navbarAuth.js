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

  if (!authButton) return;

  const token = getAuthToken();

  if (!token) {
    authButton.textContent = 'Login';
    if (profileButton) profileButton.style.display = 'none';
    return;
  }

  authButton.textContent = 'Logout';
  if (profileButton) profileButton.style.display = 'inline-block';

  authButton.addEventListener('click', (ev) => {
    ev.preventDefault();
    clearAuth();
    alert('Logged out successfully.');
    location.reload();
  });

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
      if (!user || !user.profileImage) return;

      const profileImg = /** @type {HTMLImageElement|null} */ ($('#profile_image'));
      if (!profileImg) return;

      profileImg.src = user.profileImage;
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
