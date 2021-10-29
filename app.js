const menuBtn = document.querySelector(".menu-icon");
const menu = document.querySelector("nav > ul");

let productImg = document.querySelector("#product-img");
const smallImg = document.querySelectorAll(".small-img");

//Toggle menu function
const toggleMenu = () => {
  menu.classList.toggle("active");
};

//Events Listeners
menuBtn.addEventListener("click", toggleMenu);
smallImg.forEach((img) =>
  img.addEventListener("click", () => {
    productImg.src = img.src;
  })
);
