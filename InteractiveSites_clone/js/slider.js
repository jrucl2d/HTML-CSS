function init() {
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");

  let num = 0;
  left.addEventListener("click", () => {
    const showImg = document.querySelector(".show");
    const select = document.querySelector(".select");
    showImg.classList.remove("show");
    select.classList.remove("select");
    num = num - 1 == -1 ? 4 : num - 1;
    const newShowImg = Array.from(document.querySelectorAll("img"));
    const newSelect = Array.from(document.querySelectorAll(".btns"));
    newShowImg[num].classList.add("show");
    newSelect[num].classList.add("select");
  });
  right.addEventListener("click", () => {
    const showImg = document.querySelector(".show");
    const select = document.querySelector(".select");
    showImg.classList.remove("show");
    select.classList.remove("select");
    num = num + 1 == 5 ? 0 : num + 1;
    const newShowImg = Array.from(document.querySelectorAll("img"));
    const newSelect = Array.from(document.querySelectorAll(".btns"));
    newShowImg[num].classList.add("show");
    newSelect[num].classList.add("select");
  });
}
init();
