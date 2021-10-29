const menuBtn = document.querySelector(".menu-icon");
const menu = document.querySelector("nav > ul");

const toggleMenu = () => {
  menu.classList.toggle("active");
};

menuBtn.addEventListener("click", toggleMenu);
