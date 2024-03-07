document.addEventListener("DOMContentLoaded", function () {
  console.log("Script is running!");

  const toggleButton = document.querySelector(".toggle-button");
  const navbarLinks = document.querySelector(".nav-list");

  toggleButton.addEventListener("click", () => {
    if (window.innerWidth <= 860) {
      navbarLinks.classList.toggle("show");
    }
  });

  navbarLinks.addEventListener("click", (event) => {
    navbarLinks.classList.remove("show");
  });
});
