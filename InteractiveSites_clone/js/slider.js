function init() {
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const btns = document.querySelector(".btns");
  let num = 0;

  function Change(newNum) {
    // 새로운 이미지로 변경하는 함수
    const showImg = document.querySelector(".show");
    const select = document.querySelector(".select");
    showImg.classList.remove("show");
    select.classList.remove("select");
    num = newNum; // 선택된 숫자로 갱신
    const newShowImg = Array.from(document.querySelectorAll("img"));
    const newSelect = Array.from(document.querySelectorAll(".btn"));
    newShowImg[num].classList.add("show");
    newSelect[num].classList.add("select");
  }

  function BtnClickHandler(event) {
    // 클릭한 버튼의 아이디 값을 가져옴
    const tar = event.target;
    const clickedNum = parseInt(tar.getAttribute("id"));
    if (num == clickedNum) {
      // 이미 선택된 것이면 리턴
      return null;
    }
    // 기존의 선택된 것은 제거
    Change(clickedNum);
  }

  left.addEventListener("click", () => {
    newNum = num - 1 == -1 ? 4 : num - 1;
    Change(newNum);
  });
  right.addEventListener("click", () => {
    newNum = num + 1 == 5 ? 0 : num + 1;
    Change(newNum);
  });
  // 이벤트 위임 연습
  btns.addEventListener("click", BtnClickHandler);
}
init();
