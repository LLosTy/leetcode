/**
 * @param {number[]} nums
 * @return {void}
 */
// Better version of ArrayWrapper solution
var ArrayWrapper = function (nums) {
  this.value = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
  let sum = 0;
  for (val of this.value) {
    sum += val;
  }
  return sum;
};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
  return `[${this.value.toString()}]`;
};

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
let a = obj1 + obj2; // 10
String(obj2); // "[3,4]"
