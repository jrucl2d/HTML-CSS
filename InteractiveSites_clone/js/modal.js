function init() {
  const showBtn = document.querySelector(".showModal");
  const modalWindow = document.querySelector(".modalWindow");
  const closeBtn = document.querySelector(".closeModal");
  const body = document.querySelector(".body");
  const modalLayer = document.querySelector(".modalLayer");

  // default로 모달 창은 보이지 않음
  modalWindow.style.display = "none";

  showBtn.addEventListener("click", () => {
    // show 버튼 누르면 모달 레이어와 모달 윈도우 보임
    // body < modal layer < modal window
    modalLayer.style.display = "block";
    modalWindow.style.display = "block";
  });
  closeBtn.addEventListener("click", () => {
    modalLayer.style.display = "none";
    modalWindow.style.display = "none";
  });
}
init();
