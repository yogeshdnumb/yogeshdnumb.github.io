const menuBtn = document.querySelector(".header__menu");
const closeBtn = document.querySelector(".header__close");
const headerList = document.querySelector(".header__list");

const lightBtn = document.querySelector(".header__sun");
const darkBtn = document.querySelector(".header__moon");
const body = document.querySelector("body");

const githubIcon = document.querySelector(".ci-github");

menuBtn.addEventListener("click", () => {
  toggleMenu();
});

closeBtn.addEventListener("click", () => {
  toggleMenu();
});

function toggleMenu() {
  menuBtn.classList.toggle("visible");
  closeBtn.classList.toggle("visible");
  headerList.classList.toggle("open");
}

lightBtn.addEventListener("click", () => {
  toggleTheme();
});
darkBtn.addEventListener("click", () => {
  toggleTheme();
});

function toggleTheme() {
  lightBtn.classList.toggle("visible");
  darkBtn.classList.toggle("visible");
  body.classList.toggle("dark");
  githubIcon.classList.toggle("ci-invert");
}
