/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = (init) => {
    var number = init
    return {
        increment:() => {
            number +=1
            return number
        },
         reset:() => {
            number = init
            return number
        },
        decrement:() => {
            number -= 1
            return number
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
