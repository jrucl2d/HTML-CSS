const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const savebtn = document.getElementById("jsSave");

let painting = false;
let filling = false;

if (canvas) {
  canvas.addEventListener("mousemove", (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
      ctx.beginPath(); // 선이 계속 생김, 그러나 그려지지는 않음. 시작점은 마우스
      ctx.moveTo(x, y); // 펜을 옮김
    } else {
      ctx.lineTo(x, y); // 선을 그림
      ctx.stroke();
    }
  });
  canvas.addEventListener("mousedown", (event) => {
    painting = true;
  });
  canvas.addEventListener("mouseup", (event) => {
    painting = false;
  });
  canvas.addEventListener("mouseleave", (event) => {
    painting = false;
  });
  canvas.addEventListener("click", () => {
    if (filling) {
      ctx.fillRect(0, 0, 700, 700);
    }
  });
  canvas.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  }); // 우클릭 이미지 저장 방지
}

// color div들을 배열로 만들고 각각의 요소를 color로 접근. click 이벤트를 받음
function changeColors(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color; // 라인 그리기 색
  ctx.fillStyle = color; // 채우기 색
}
Array.from(colors).forEach((color) =>
  color.addEventListener("click", changeColors)
);

// range 처리
if (range) {
  range.addEventListener("input", (event) => {
    ctx.lineWidth = event.target.value;
  });
}

// mode 처리
if (mode) {
  mode.addEventListener("click", () => {
    if (filling === true) {
      filling = false;
      mode.innerText = "Fill";
    } else {
      filling = true;
      mode.innerText = "Paint";
    }
  });
}

if (savebtn) {
  savebtn.addEventListener("click", () => {
    const image = canvas.toDataURL("image/png"); // 이미지 URL 생성 디폴트가 png라 비워도 됨
    const link = document.createElement("a"); // 링크를 생성
    link.href = image; // 링크를 이미지 URL로 설정
    link.download = "PaintJS"; // 파일 이름
    link.click(); // 링크를 클릭한 효과
  });
}

function init() {
  canvas.width = 700; // 실제 픽셀 사이즈를 줘야 그려짐
  canvas.height = 700;
  ctx.fillStyle = "white"; // 초기 배경 흰색
  ctx.fillRect(0, 0, 700, 700);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.lineWidth = 2.5;
}

init();
