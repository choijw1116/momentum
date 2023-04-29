//querySelector는 classname, tagname 모두 검색가능하므로 정확히 구분해주어야한다!
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); //브라우저의 기본동작을 막음(submit동작을 막는것)
  loginForm.classList.add(HIDDEN_CLASSNAME); //form에 hidden 이라는 class를 추가
  const username = loginInput.value; //input의 value를 username에 저장
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username); //아래 두줄이 반복되어 함수로 뻄
}

function paintGreetings(username) {
  greeting.innerText = `Have a nice day ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

//localstorage에 정보가 저장되어있을떄 설정
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
