fetch("/htmlFiles/reuse/footer.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("footer-placeholder").innerHTML = html;

    const create_userButton = document.getElementById("create-user");
    const token = localStorage.getItem("authToken");
    const userData = JSON.parse(localStorage.getItem("user"));
    const userRole = userData?.role;

    if (userRole === "ADMIN") {
      document.getElementById("create-user").style.display = "block";
    } else {
      document.getElementById("create-user").style.display = "none";
    }
  });
