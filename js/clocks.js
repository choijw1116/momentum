const clock = document.querySelector("h1#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");

  clock.innerText = `${hours}:${min}`;
}

//website가 load되자마자 getClock()을 실행하고 매초마다 다시 실행되도록함
getClock(); //load되자마자 getClock실행
setInterval(getClock, 1000); //1초마다 실행
