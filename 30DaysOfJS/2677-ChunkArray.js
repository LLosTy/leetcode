/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  // go over the array, add array element to new array,
  // once the new array hits new size, append to return array
  let subarr = [];
  let res = [];
  for (i in arr) {
    subarr.push(arr[i]);
    if (subarr.length == size || arr.length == ++i) {
      res.push(subarr);
      subarr = [];
    }
  }
  return res;

  //more optimized version
  //it doesn't have to iterate through the entire array one by one, instead it
  //uses a "windowed slice approach", so for some iterations like this one, it only runs once
  // while mine runs through the entire array
  // const result = [];

  // for (let i = 0; i < arr.length; i += size) {
  //   console.log(i, size);
  //   result.push(arr.slice(i, i + size));
  // }

  // return result;
};
let arr = [8, 5, 3, 2, 6];
let size = 6;

console.log(chunk(arr, size));
