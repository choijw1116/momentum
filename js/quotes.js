const quotes = [
  {
    quote:
      " You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "",
  },
  {
    quote: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Helen Keller",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Thomas A. Edison",
  },
  {
    quote:
      "You have brains in your head.You have feet in your shoes.You can steer yourself any direction you choose.",
    author: "Dr.Seuss",
  },
  {
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//Math메소드
// Math.random() -> 0부터 1까지 랜덤한 숫자를 제공한다
// Math.random() * 10 -> 0부터 10까지 랜덤한 숫자를 제공한다 / 소주점까지의 수를 제공한다
// Math.round() -> 숫자를 반올림한 integer를 반환해준다
//Math.ceil() -> 숫자를 올림한 integer를 반환해준다
//Math.floor() -> 숫자를 내림한 integer를 반환해준다
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
