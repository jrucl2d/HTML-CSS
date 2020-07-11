function init() {
  const btn = document.querySelector(".fas");
  const menu = document.querySelector(".menus");
  btn.addEventListener("click", () => {
    menu.classList.toggle("menusShow");
  });
}
init();
