const clock = document.querySelector("h1#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  // const sec = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${min}`;
}

//website가 load되자마자 getClock()을 실행하고 매초마다 다시 실행되도록함
getClock(); //load되자마자 getClock실행
setInterval(getClock, 1000); //1초마다 실행
//setInterval은 interval 기능을 제공하고 첫번쨰 인자에는 내가 실행하고자 하는 function 두번째 인자는 호출되는 function 간격을 몇ms로 할지 적어주면된다. 바로 실행된다.

//setTimeout(sayHello, 500);
//setInterval과 달리 바로 실행되지 않는다. 첫번쨰 인자에는 호출하려는 function 을, 두번쨰 인자에는 얼마나 기다릴지 ms단위를 넣어주면 된다.

// padStart() -> string에 쓸 수 있음 첫번째 인자에는 만들고싶은 길이(숫자), 두번쨰 인자에는 첫번째 인자의 길이가 아니면 어떤걸 붙일건지 string을 넣어주면 된다.
