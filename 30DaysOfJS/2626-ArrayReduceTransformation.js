/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = (nums, fn, init) => {
    if(nums.length){
         for(let i = 0;i < nums.length; i++){
            init = fn(init, nums[i])
        }
    }
    return init
};
