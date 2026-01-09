// Legacy entrypoint: kept so older pages can load shared behavior.
// Loaded as a classic script, so we use dynamic import to run the module app.
(async function () {
  try {
    await import('./main.js');
  } catch (e) {
    console.error('Failed to load /js/main.js from navbar.js', e);
  }
})();
