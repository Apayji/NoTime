const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const circle = document.querySelector(".circle");
const tooltip = document.querySelector(".tooltip");
const circle1 = document.querySelector(".circle1");
const tooltip1 = document.querySelector(".tooltip1");
const circle2 = document.querySelector(".circle2");
const tooltip2 = document.querySelector(".tooltip2");
const circle3 = document.querySelector(".circle3");
const tooltip3 = document.querySelector(".tooltip3");
const circle4 = document.querySelector(".circle4");
const tooltip4 = document.querySelector(".tooltip4");
const circle5 = document.querySelector(".circle5");
const tooltip5 = document.querySelector(".tooltip5");
menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

circle1.addEventListener("mouseover", () => {
  tooltip1.classList.remove("invisible");
});

circle1.addEventListener("mouseout", () => {
  tooltip1.classList.add("invisible");
});

circle2.addEventListener("mouseover", () => {
  tooltip2.classList.remove("invisible");
});

circle2.addEventListener("mouseout", () => {
  tooltip2.classList.add("invisible");
});

circle3.addEventListener("mouseover", () => {
  tooltip3.classList.remove("invisible");
});

circle3.addEventListener("mouseout", () => {
  tooltip3.classList.add("invisible");
});

circle4.addEventListener("mouseover", () => {
  tooltip4.classList.remove("invisible");
});

circle4.addEventListener("mouseout", () => {
  tooltip4.classList.add("invisible");
});

circle5.addEventListener("mouseover", () => {
  tooltip5.classList.remove("invisible");
});

circle5.addEventListener("mouseout", () => {
  tooltip5.classList.add("invisible");
});
