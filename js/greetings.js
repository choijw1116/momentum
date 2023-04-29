//const loginForm = document.querySelector("login-form");
//querySelector는 classname, tagname 모두 검색가능하므로 정확히 구분해주어야한다!
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  // 어떤정보를 브라우저가 주고있는지 보여주기 위해서 추가
  // preventDefault는 어떤event의 기본행동이든지 발생하지 않도록 막는것(기본행동이란 어떤function에 대해 브라우저가 기본적으로 수행하는 동작)
  event.preventDefault(); //브라우저의 기본동작을 막음(submit동작을 막는것)
  loginForm.classList.add(HIDDEN_CLASSNAME); //form에 hidden 이라는 class를 추가
  const username = loginInput.value; //input의 value를 username에 저장
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username); //아래 두줄이 반복되어 함수로 뻄
  //   greeting.innerText = `Hello ${username}`; //greeting id를 가지고 있는 h1dp Hello ${이름} 을 넣어준다
  //   greeting.classList.remove(HIDDEN_CLASSNAME); //hidden을 삭제해준다
}

function paintGreetings(username) {
  greeting.innerText = `Have a nice day ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// loginForm.addEventListener("submit", onLoginSubmit);
// // loginForm.addEventListener("submit", onLoginSubmit()); 함수에 ()를 붙이면 즉시 함수가 실행된다는 의미다
// //! submit event가 발생하면 브라우저가 알아서 function을 실행시켜준다.
// //!event가 발생할때 브라우저가 function을 호출하게 되는데 event에 대한 정보를 함수의 첫번째 argument로 추가정보를 넘겨준후 호출하게 된다.

const savedUsername = localStorage.getItem(USERNAME_KEY);

//localstorage에 정보가 저장되어있을떄 설정
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

//새로고침을 해도 정보를 그대로 가지고 있도록 기억하기 -> localstorage를 사용한다

//localstorage는 브라우저에 뭔가 저장할 수 있게 함
//mdn local storage API 참조

//localStorage.setItem('a','b') -> setItem()을 사용하면 정보를 저장할 수 있음 첫번째 인자는 저장할 값의 이름 / 두번째 인자는 저장할 value
//localStorage.getItem('a') -> 저장한 값을 불러오기
//localStorage.removeItem('a') -> 저장한 값을 삭제하기
