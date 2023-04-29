const images = ["1.jpeg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//Js에서 HTML에 엘리먼트추가하기
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

//body안에 bgImage를 넣어주기
document.body.appendChild(bgImage);
