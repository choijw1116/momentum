function sayHello(nameOfPerson, age) {
  return nameOfPerson;
}

sayHello("choi", 13); //sayHello 함수를 실행

//!!데이터를 받는 방법(argument받는법)
// ex) function hey(){}
//     -> ()안에 데이터를 추가하는것
//     -> ()안에는 어떤이름을 넣어도 상관이 없음
// argument는 1개이상을 받을 수 있음

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  times: function (a, b) {
    return a * b;
  },
};

const plus = calculator.add(5, 1);
const minus = calculator.minus(plus, 1);
const times = calculator.times(10, minus);

//!값을 꺼내기 위해서는 return 을 적어야한다

const age = 99;

function calculateKrAge(ageOFForeigner) {
  return ageOFForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);

//conditionals

const agee = ㅔparseInt(prompt("how are you"));

console.log(isNaN(agee));
//parseInt는 숫자만 받을 수 있음
//function은 내부에서 외부로 작동한다
//isNaN은 boolean을 반환함
