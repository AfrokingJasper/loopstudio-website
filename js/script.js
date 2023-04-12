const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
console.log(btn);
btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
}
