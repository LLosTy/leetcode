/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  len = this.length;
  if (len === 0) {
    return -1;
  } else {
    return this[len - 1];
  }
};

const arr = [1, 2, 3];
// const arr = [];
let a = arr.last(); // 3
console.log(a);
