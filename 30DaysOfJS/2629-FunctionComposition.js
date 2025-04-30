const { sourceMapsEnabled } = require("process");

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    for (func of functions.reverse()) {
      x = func(x);
    }
    return x;
  };
};

const fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
let a = fn(4); // 9
