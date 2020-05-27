// Declaring a function with the function keyword;
function greet(name) {
  return `Hello, ${name}!` // string interpolation or a template string;
}

// Declaring a one-line function (with implicit return) with the ES6 Arrow Syntax;
const add = (a, b) => a + b;

// Declaring a multi-line function (with explicit return, with only one parameter) with the ES6 Arrow Syntax;
const isPalindrome = str => {
  if (!str.length) return false;
  
  let leftSideIdx = 0;
  let rightSideIdx = str.length - 1;

  while (leftSideIdx < rightSideIdx) {
    let leftSideLetter = str[leftSideIdx];
    let rightSideLetter = str[rightSideIdx];

    if (leftSideLetter !== rightSideLetter) return false;

    leftSideIdx++;
    rightSideIdx--;
  }

  return true;
}

// Declaring a multi-line function (with explicit return, with more than one parameter) with the ES6 Arrow Syntax;
const doMath = (x, y, z) => {
  let sum = x + y + z;
  let product = x * y * z;

  return product / sum;
}

// Declaring a parent class called Animal and a subclass called Dog;

// class Animal { 
//   constructor(name) {
//     this.name = name;
//     this.cat = "cat";
//   }
  
//   speak() {
//     console.log(`${this.name} makes a noise.`);
//   }
// }

// class Dog extends Animal { // The 'extends' keyword allows us to inherit all of the methods and properties from the parent class;
//   constructor(name) {
//     super(name); // call the super class constructor and pass in the name parameter
//   }
// }

// let d = new Dog('Mitzie');
// d.speak(); // "Mitzie makes a noise";
// d.cat; // "cat";

class Animal { 
  constructor(name) {
    this.name = name;
    this.cat = "cat";
  }
  
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}

let d = new Dog('Mitzie');
d.speak();
d.cat;