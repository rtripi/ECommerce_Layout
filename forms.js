const loginForm = document.querySelector("#login-form");
const regForm = document.querySelector("#reg-form");
const indicator = document.querySelector("#indicator");

const loginBtn = document.querySelector("#loginBtn");
const regBtn = document.querySelector("#regBtn");

regBtn.addEventListener("click", () => {
  regForm.style.transform = "translateX(0px)";
  loginForm.style.transform = "translateX(0px)";
  indicator.style.transform = "translateX(150px)";
});

loginBtn.addEventListener("click", () => {
  regForm.style.transform = "translateX(300px)";
  loginForm.style.transform = "translateX(300px)";
  indicator.style.transform = "translateX(50px)";
});
