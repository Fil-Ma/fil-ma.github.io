const hamburgerMenu = document.getElementById("hamburger-menu");

// this functions opens hamburger menu if user clicks the icon
function handleClickHanburger() {
  if (hamburgerMenu.style.display === "block") {
    hamburgerMenu.style.display = "none";
  } else {
    hamburgerMenu.style.display = "block";
  }
};
