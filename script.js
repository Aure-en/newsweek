//Display the collapsed navbar after the user scrolls.
function changeNav() {

  if (window.matchMedia("(max-width: 1200px)").matches) return;

  const navbar = document.querySelector(".navbar");
  const nav = document.querySelector(".header_expanded");
  const main = document.querySelector("main");
  const trending = document.querySelector(".row__trending");


  if (pageYOffset > nav.clientHeight - trending.clientHeight) {
    navbar.classList.remove("d-lg-none");
  }

  if (pageYOffset == 0) {
    navbar.classList.add("d-lg-none");
  }

}

window.addEventListener("scroll", changeNav);