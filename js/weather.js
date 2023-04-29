// import { config } from "config.js";
API_KEY = "d2283edb95539d06320ab8ff264b55b6";

function onGeoSuccess(position) {
  const lat = position.coords.latitude; //위도위치
  const lon = position.coords.longitude; //경도위칭
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
