// myForEach
// take an array and iterate over its indexes
// invoke a callback on each index

/**
 * My own version of the Array.prototype.forEach method
 * @param {Number[]} arr Array of numbers
 * @param {Function} cb Callback function to invoke on each array index
 */
const myForEach = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
};

const addOne = (n) => {
  console.log(n + 1);
};

const myNums = [1, 2, 3, 4];
myForEach(myNums, addOne);

Array.prototype.myProtoEach = (cb) => {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

myNums.myProtoEach(addOne);
