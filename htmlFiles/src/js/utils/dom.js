/**
 * @file DOM helpers with safe querying + event delegation.
 */

/** @template {Element} T @param {string} selector @param {ParentNode} [root=document] @returns {T|null} */
export function $(selector, root = document) {
  return /** @type {T|null} */ (root.querySelector(selector));
}

/** @template {Element} T @param {string} selector @param {ParentNode} [root=document] @returns {T[]} */
export function $all(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

/**
 * Add an event listener and return an unsubscribe function.
 * @param {EventTarget} target
 * @param {string} type
 * @param {(ev: Event) => void} handler
 * @param {AddEventListenerOptions|boolean} [options]
 * @returns {() => void}
 */
export function on(target, type, handler, options) {
  target.addEventListener(type, handler, options);
  return () => target.removeEventListener(type, handler, options);
}

/**
 * Event delegation helper.
 * @param {Element|Document} root
 * @param {string} type
 * @param {string} selector
 * @param {(ev: Event, matched: Element) => void} handler
 */
export function delegate(root, type, selector, handler) {
  on(root, type, (ev) => {
    const target = /** @type {Element|null} */ (ev.target instanceof Element ? ev.target : null);
    if (!target) return;

    const matched = target.closest(selector);
    if (!matched) return;

    handler(ev, matched);
  });
}
