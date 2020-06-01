/**
 * Rest: used in functions to gather any nth number of arguments that may be
 * passed after the defined parameter into an array.
 */

function restSum(...args) {
  return args.reduce((acc, cur) => acc + cur);
}

console.log(restSum(1, 2, 3));
// expected output: 6

console.log(restSum(1, 2, 3, 4));
// expected output: 10

// Similar to arguments object but not an Array like the rest parameters

function test(a, b, ...args) {
  console.log("a", a);
  console.log(typeof a);
  console.log("b", b);
  console.log(typeof b);
  console.log("args", args);
  console.log(typeof args);
  console.log(args[0]);
}

test("hello", "goodbye", "hey", "hi", "whoa");

/**
 * Spread: opposite of Rest, and is used to restructure an array (or
 * array-like object) into individual parts. Simplest use case is to
 * concatenate arrays, but has many other helpful use cases.
 */

function spreadSum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(spreadSum(...numbers));
// expected output: 6

console.log(spreadSum.apply(null, numbers));
// expected output: 6

const myArr = [1, 2, 3, 4, "hello"];
console.log(typeof myArr);
console.log(Array.isArray(myArr));
console.log(Array.isArray({ greeting: "hello" }));
