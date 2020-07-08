function init() {
  const showBtn = document.querySelector(".showModal");
  const modalWindow = document.querySelector(".modalWindow");
  const closeBtn = document.querySelector(".closeModal");
  const body = document.querySelector(".body");
  const modalLayer = document.querySelector(".modalLayer");

  showBtn.addEventListener("click", () => {
    // show 버튼 누르면 모달 레이어와 모달 윈도우 보임
    // body < modal layer < modal window
    modalLayer.classList.toggle("modalShow");
  });
  closeBtn.addEventListener("click", () => {
    modalLayer.classList.toggle("modalShow");
  });
}
init();
