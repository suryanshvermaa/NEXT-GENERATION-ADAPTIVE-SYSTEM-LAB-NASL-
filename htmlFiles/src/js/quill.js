// Legacy entrypoint: some admin/forms pages include this.
// It boots the module app, which will initialize Quill only if needed.
(async function () {
  try {
    await import('./main.js');
  } catch (e) {
    console.error('Failed to load /js/main.js from quill.js', e);
  }
})();
