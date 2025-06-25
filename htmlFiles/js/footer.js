
    const create_userButton = document.getElementById("create-user");
    // const token = localStorage.getItem("authToken");
    let user = JSON.parse(localStorage.getItem("user"));
    let user_Role = user?.role;
    console.log("FOOTER",user_Role)

    if (user_Role === "ADMIN") {
      document.getElementById("create-user").style.display = "block";
    } else {
      document.getElementById("create-user").style.display = "none";
    }
