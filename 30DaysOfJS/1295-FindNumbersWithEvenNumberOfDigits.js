/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let evenDigits = 0;
  for (num of nums) {
    if (num.toString().length % 2 == 0) {
      evenDigits++;
    }
  }
  return evenDigits;
};

let a = findNumbers([12, 345, 2, 6, 7896]);

console.log("a:", a);
