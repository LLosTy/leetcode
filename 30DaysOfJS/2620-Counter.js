/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = (n) => {
    n -= 1
    return function() {
        return n+=1
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
