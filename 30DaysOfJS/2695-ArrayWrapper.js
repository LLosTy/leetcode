/**
 * @param {number[]} nums
 * @return {void}
 */
// TODO: Make this better as this is not quite the expected solution
var ArrayWrapper = function (nums) {
  const obj = {
    value: nums,
    valueOf() {
      let sum = 0;
      for (val of this.value) {
        sum += val;
      }
      return sum;
    },
    toString() {
      return `u[${this.value.toString()}]`;
    },
  };
  return obj;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {};

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
let a = obj1 + obj2; // 10
String(obj2); // "[3,4]"
