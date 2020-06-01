function outerFunc(cb) {
  return cb();
}

const greet = () => {
  console.log("Hello world!");
};

outerFunc(greet);

outerFunc(function () {
  return "hello from the other side";
});

const myNums = [3, 52, 7, 12];
myNums.forEach((num) => console.log(num + 5));
myNums.forEach(function (num) {
  console.log("add 5", num + 5);
  console.log("subtract 5", num - 5);
  console.log("-----");
});

const myNewNums = myNums.map((num) => {
  let result = num * 2.5;
  return result;
});

const result = myNums.reduce((acc, cur) => {
  return acc + cur;
});

result;

const myObjects = [
  { val: 5, name: "Joe" },
  { val: 2, name: "Jane" },
  { val: 3, name: "Erin" },
];

myObjects.reduce((acc, cur) => acc * cur.val, 1);

const addTwo = (num) => num + 2;

const subtractFive = (num) => {
  return num - 5;
};
function multiplyByFactor(num, factor) {
  return num * factor;
}

const myNums = [3, 52, 7, 12];

myNums.map((num) => addTwo(num));

myNums.map(function (n) {
  return subtractFive(n);
});

myNums
  .map((num) => subtractFive(num))
  .map((num) => multiplyByFactor(num, 1.25));

const isItFreezing = (temp) => {
  return temp <= 32;
};
isItFreezing(4);

const turnOnHeat = (temp) => {
  return;
};

"2" == 2;
"2" === 2;
