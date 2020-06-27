const navBtn = document.querySelector(".navbtn");
const menu = document.querySelector(".navcontent");
const icons = document.querySelector(".navicons");

navBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});
