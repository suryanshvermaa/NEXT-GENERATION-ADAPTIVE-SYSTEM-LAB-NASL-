// make the navbar dynamic everywhere
//   const navbarDiv = document.createElement('div');
//   navbarDiv.id = 'navbar-placeholder';
//   document.body.insertBefore(navbarDiv, document.body.firstChild);

// document.addEventListener("DOMContentLoaded", () => {
//   const currentDepth = location.pathname.split("/").length - 1;

//   // Go up N folders to get to site root
//   const prefix = "../".repeat(currentDepth - 2); // adjust if needed

//   document.querySelectorAll("[data-path]").forEach(link => {
//     const relativePath = link.getAttribute("data-path");
//     link.setAttribute("href", prefix + relativePath);
//   });
// });

// fetch("/htmlFiles/reuse/navbar.html")
//   .then((res) => res.text())
//   .then((html) => {
//     document.getElementById("navbar-placeholder").innerHTML = html;

    // Re-run navbar logic manually after DOM injection
    const authButton = document.getElementById("auth-button");
    const profileButton = document.getElementById("profile-button");
    const token = localStorage.getItem("authToken");
    const userData = JSON.parse(localStorage.getItem("user"));
    const userRole = userData?.role;

    console.log(userRole);

    if (token) {
      authButton.textContent = "Logout";
      authButton.href = "";
      profileButton.style.display = "inline-block";

      authButton.addEventListener("click", () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        alert("Logged out successfully.");
        location.reload();
      });

        fetch(
          "https://next-generation-adaptive-system-lab-nasl.onrender.com/api/user/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
          .then((response) => {
            if (!response.ok) throw new Error("Failed to fetch profile");
            return response.json();
          })
          .then((result) => {
            const { user } = result.data;
            if (user && user.profileImage) {
              const profileImg = document.getElementById("profile_image");
              profileImg.src = user.profileImage;
              profileImg.alt = user.name || "Profile Image";
              profileImg.style.width = "30px";
              profileImg.style.height = "30px";
              profileImg.style.borderRadius = "50%";
              profileImg.style.objectFit = "cover";
            }
          })
          .catch((error) => {
            console.error("Error loading profile image:", error);
          });
      }else {
      authButton.textContent = "Login";
      authButton.href = "../users/login.html";
      profileButton.style.display = "none";
    }
