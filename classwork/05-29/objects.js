const car = {
  make: "Toyota",
  model: "Matrix",
};
car.model;
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c); // 1, 2, 3

const obj = { firstName: "Jon", favColor: "blue" };
const { firstName, favColor } = obj;
console.log(firstName, favColor); // 'Jon', blue'

/**
 * Without using the native “Object.keys()” method of JavaScript, compose a
 * function titled “grabKeys” that will take in an object and return all of
 * the keys of the key:value pairs of that object. Modify the Object class,
 * appending a static method to the Object class., appending a static method
 * to the Object class. Leverage the “for...in” loop.
 */

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

const grabKeys = (obj) => {
  const result = [];

  for (const property in obj) {
    result.push(property);
  }

  return result;
};
const myObj = { a: 1, b: 2, c: 3 };

Object.grabKeys = function (obj) {
  const result = [];
  for (const key in obj) {
    result.push(key);
  }
  return result;
};

Object.grabKeys(myObj);
