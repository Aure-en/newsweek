function changeNav() {

  const navbar = document.querySelector(".navbar");
  const nav = document.querySelector(".header_expanded");
  const main = document.querySelector("main");

  if (pageYOffset == 0) {
    nav.classList.remove("d-none");
    navbar.classList.add("d-none");
  }

  else {
    nav.classList.add("d-none");
    navbar.classList.remove("d-none");
  }

}

window.addEventListener("scroll", changeNav);