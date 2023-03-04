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
//start of image slider 
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;
//image slider autoplay
var playSlider;

var repeater = () => {
  playSlider = setInterval(function () {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });

    slideNumber++;

    if (slideNumber > (numberOfSlides - 1)) {
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
  }, 4000);
}
repeater();

//stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
  repeater();
});
//end of image slider