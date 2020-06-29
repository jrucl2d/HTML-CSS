const weather = document.querySelector(".js-weather");
const COORDS = "coords";
const API_KEY = "73d9d80ea581f9486d62f66f2b862ca1";

function getWeather(lat, lng) {
  // fetch로 api 데이터를 fetch 해옴. then은 모든 데이터를 다 불러오고 나서 실행
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then((response) => {
      return response.json(); // 결과의 json(오브젝트)를 리턴
    })
    .then((json) => {
      // 그 오브젝트를 모두 불러오면 출력
      const tem = json.main.temp;
      const place = json.name;
      weather.innerText = `${tem} ℃ ${place}`;
    });
}

function saveCoods(coords) {
  localStorage.setItem(COORDS, JSON.stringify(coords));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coords = {
    latitude, // key와 value가 같다면 하나만 써도 됨
    longitude,
  };
  saveCoods(coords);
  getWeather(latitude, longitude);
}
function handleGeoError(position) {}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}
init();
