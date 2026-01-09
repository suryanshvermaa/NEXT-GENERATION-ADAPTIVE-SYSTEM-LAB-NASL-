/**
 * @file Minimal auth state accessors (localStorage-backed).
 */

/**
 * @typedef {Object} StoredUser
 * @property {string} [role]
 * @property {string} [name]
 */

/** @returns {string|null} */
export function getAuthToken() {
  return localStorage.getItem('authToken');
}

/** @returns {StoredUser|null} */
export function getStoredUser() {
  try {
    const raw = localStorage.getItem('user');
    return raw ? /** @type {StoredUser} */ (JSON.parse(raw)) : null;
  } catch {
    return null;
  }
}

export function clearAuth() {
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
}
