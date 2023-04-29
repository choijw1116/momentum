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
    }); //fetch함수는 자바스크립트가 자동으로 url을 불러준다. 콘솔 네트워크창에 들어가보면 request에서 볼수있다
  //fetch는 promise로 이루어져있는데 promise는 시간이 좀 걸린뒤에 일어난다
}
function onGeoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
//getCurrentPosiion은 2개의 argument가 필요함
// 첫번쨰는 모든게 잘되었을때 실행될핢수
// 두번쨰는 에러가 발생했을때 실행되는 함수
//API = 다른 서버와 대화할 수 있는 방법
