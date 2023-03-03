const others = document.getElementById("others");
const subMenu = document.querySelector(".sub-menu");

others.addEventListener("mouseenter", () => {
  subMenu.style.display = "block";
  subMenu.style.animation = "fadein 0.5s";
});

const menu = document.querySelector(".main-menu");

menu.addEventListener("mouseleave", () => {
  subMenu.style.display = "none";
});

subMenu.addEventListener("mouseleave", () => {
  subMenu.style.display = "none";
});
/////////////////////////////////////////////////////////
const mainMenu = document.querySelector(".main-menu");
const humberger = document.querySelector(".humberger");

humberger.addEventListener("click", () => {
  if (mainMenu.style.display == "" || mainMenu.style.display == "none") {
    mainMenu.style.display = "flex";
    mainMenu.style.animation = "fadein 0.5s";
  } else {
    mainMenu.style.display = "none";
  }
});
