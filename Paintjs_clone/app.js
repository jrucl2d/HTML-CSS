const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
let painting = false;

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
}

// color div들을 배열로 만들고 각각의 요소를 color로 접근. click 이벤트를 받음
function changeColors(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
}
Array.from(colors).forEach((color) =>
  color.addEventListener("click", changeColors)
);

function init() {
  canvas.width = 700; // 실제 픽셀 사이즈를 줘야 그려짐
  canvas.height = 700;
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2.5;
}

init();
