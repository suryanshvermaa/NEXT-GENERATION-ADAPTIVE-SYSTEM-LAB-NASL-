document.getElementById('file-upload').addEventListener('change', function () {
    const fileName = this.files[0]?.name || "No file chosen";
    document.getElementById('file-name').textContent = fileName;
});