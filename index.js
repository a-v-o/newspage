const menuButton = document.querySelector("#menu-toggle");
const menuClose = document.querySelector("#menu-close");
const nav = document.querySelector("#navigation");
const main = document.getElementById("main");

menuButton.addEventListener("click", function () {
  nav.classList.remove("scale-x-0");
  menuClose.classList.remove("hidden");
  menuButton.classList.add("hidden");
  main.style.filter = "brightness(50%)";
  document.body.style.position = "fixed";
  document.body.style.backgroundColor = "#c5c6ce";
});

menuClose.addEventListener("click", function () {
  nav.classList.add("scale-x-0");
  menuClose.classList.add("hidden");
  menuButton.classList.remove("hidden");
  main.style.filter = "brightness(100%)";
  document.body.style.position = "relative";
  document.body.style.backgroundColor = "#fffdfa";
});
