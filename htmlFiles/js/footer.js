fetch("/frontend/reuse/footer.html")
    .then(res => res.text())
    .then(html => {
    document.getElementById('footer-placeholder').innerHTML = html;
    })