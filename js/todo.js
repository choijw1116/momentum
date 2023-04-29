const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//toDo저장하기
//기존데이터에 추가되는 데이터가 있으면 변수가 수정되어야하므로 const에서 let으로 수정
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //toDos에 넣어준 value를 localStorage에 저장
  //JSON.stringify는 object나 array를 string화 시켜준다
}

function deleteToDo(event) {
  //X클릭시 해당 li가 삭제
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //클릭한 li.id와 다른 toDo만 걸러준다. toDo.id는 number타입이고 li.id는 string타입으로 서로 타입이 다르므로 li.id를 parseInt로 number로 바꿔준다
  saveToDos(); //지우고 남은 li를 다시 localStorage에 새로저장
}

function paintToDo(newTodoObj) {
  //toDo를 그리는 역할담당
  //todo-list ul안에 li가 추가되도록 할 것
  const li = document.createElement("li"); //li생성
  li.id = newTodoObj.id; //li의 id
  const span = document.createElement("span"); //span생성
  span.innerText = newTodoObj.text; //form에서 전달해준 newToDo값을 span에 담아준다
  const btn = document.createElement("btn"); //button생성
  btn.innerText = ` ✗`; //button에 X릉 넣어줌
  btn.addEventListener("click", deleteToDo);
  li.appendChild(span); //li안에 span을 넣어준다
  li.appendChild(btn); //li안에 span을 넣어준다

  toDoList.appendChild(li); //todo-list id를 가진 ul에 li를 담아준다
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value; //입력한 input의 value를 newToDo에 담아준다
  toDoInput.value = ""; //input안에 입력한 내용을 지운다
  const newTodoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); //toDos배열에 추가된 todo를 넣어준다.
  paintToDo(newTodoObj); //input의 value를 paintToDo함수에 담아서 호출
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//localStorage에 있는 단순 string을 array로 변환
const savedToDos = localStorage.getItem(TODOS_KEY); //localStorage에서 저장된 todo value를 가져온다

//localstorage에 저장된 todo value가 존재하지않아 null일 수 있으므로 아래 조건문으로 넣어준다
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; //localStorage에 이전데이터가 들어있었다면 toDos에 넣어서 복원
  parsedToDos.forEach(paintToDo); //foreach함수는 각각의 item에 대해 해당 함수를 실행시킨다
}

// localStorage는 데이터베이스가 아님
// 데이터를 복사해두는곳
// 콘솔로 찍어서 보여지는 toDos 배열과 localStorage는 전혀 다른것!

//.filter -> true/false로 구분한다. 기존의 arr이 아니라 새로운 arr을 반환해준다.
