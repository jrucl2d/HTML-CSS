const body = document.querySelector("body");

function paintImage(imgNum) {
  const image = new Image();
  image.src = `Images/${imgNum}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image); // 배경 이미지라서 앞에 추가
}

function getRand() {
  const number = Math.floor(Math.random() * 6 + 1);
  return number;
}

function init() {
  const randNum = getRand();
  paintImage(randNum);
}
init();
