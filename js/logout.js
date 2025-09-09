// Logout functionality
      document
        .getElementById("logoutButton")
        .addEventListener("click", function () {
          if (confirm("Are you sure you want to logout?")) {
            window.location.href = "index.html"; // Redirect to login page
          }
        });
