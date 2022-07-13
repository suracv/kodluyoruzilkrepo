const burger = document.querySelector(".burger");
const navRight = document.querySelector(".navbar-list");
let menuOpen = false;
let menuShow = false;
burger.addEventListener("click", () => {
  if (!menuOpen) {
    burger.classList.add("open");
    menuOpen = true;
  } else {
    burger.classList.remove("open");
    menuOpen = false;
  }
});
burger.addEventListener("click", () => {
  if (!menuShow) {
    navRight.classList.add("show");
    menuShow = true;
  } else {
    navRight.classList.remove("show");
    menuShow = false;
  }
});