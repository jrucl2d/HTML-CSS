function init() {
  const btn = document.querySelector(".btn");
  btn.addEventListener("click", () => {
    btn.classList.toggle("btnclicked");
  });
}
init();
