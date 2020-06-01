// In class code
let myString = "hello world";
typeof myString;
let myNum = 12;
let myBool = true;
typeof myBool;

const myObj = {
  name: "Shahid",
  location: "New York",
  age: 95,
};

2 + 2;
2 + "2";
"2" + 2;
"2" - 2;

!!0;
!!"";
!!null;

var myVar = "hello";
console.log(myVar);
var myVar = "goodbye";
console.log(myVar);

let myVar = "hello";
console.log(myVar);
// let myVar = 'goodbye'
myVar = "goodbye";
console.log(myVar);

const myNum = 35;
console.log(myNum);
const myNum = 25;
console.log(myNum);

const myString = "hello";
myString = "goodbye";

const myArray = [1, 2, 3];
console.log(myArray);
myArray.push(4);
myArray = [3, 4];

greet("Shahid");

function greet(name) {
  console.log("Hello " + name);
}

myAdder(35);

const myAdder = function (num) {
  return num + 1;
};

myAdder(5);

const mySubtract = (num1, num2) => {
  return num1 - num2;
};

const mySubtract = (num1, num2) => num1 - num2;

mySubtract(15, 2);

const fruits = ["apple", "pear", "banana"];
console.log(fruits[2]);

const cars = [
  ["Porsche", "Camaro"],
  ["Camry", "Prius"],
];

cars[0][1];
