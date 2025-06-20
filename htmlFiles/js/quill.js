const quill = new Quill('#editor', {
    theme: 'snow',
    modules: {
      toolbar: '#toolbar'
    }
  });
  function submitForm(e) {
    document.getElementById('hiddenArea').value = quill.root.innerHTML;
  }