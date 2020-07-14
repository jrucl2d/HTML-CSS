function init() {
  const btn = document.querySelector(".btn");
  const menu = document.querySelector(".menu");
  btn.addEventListener("click", () => {
    btn.classList.toggle("btnclicked");
    menu.classList.toggle("menuShow");
  });
}
init();
