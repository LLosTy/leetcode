/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  console.log("here");
  // //0, 1, 1, 2, 3, 5, 8, 13
  // //fib
  let curr = 0;
  let prev = 0;
  let res = 0;
  while (true) {
    if (prev == 0 && curr == 0) {
      yield 0;
      prev++;
    }
    res = curr + prev;
    yield res;
    prev = curr;
    curr = res;
  }
};

const gen = fibGenerator();
