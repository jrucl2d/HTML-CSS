const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings"); // 이름 출력부

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text); // LS에 저장
}

function handleSubmit(event) {
  event.preventDefault(); // 이벤트의 기본동작을 막음(엔터 누르면 새로고침)
  const currentValue = input.value;
  paintGreetings(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreetings(text) {
  form.classList.remove(SHOWING_CN); // form은 안 보이게 해줌
  greeting.classList.add(SHOWING_CN); // showing 클래스를 더해줌
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreetings(currentUser);
  }
}

function init() {
  loadName();
}
init();
