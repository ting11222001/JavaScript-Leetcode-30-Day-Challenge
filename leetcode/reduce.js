/**
 * https://www.youtube.com/watch?v=KmTbYfpGxdM&ab_channel=NeetCodeIO
 * https://leetcode.com/problems/array-reduce-transformation/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * 
 * reduce method:
 * https://www.w3schools.com/js/js_array_iteration.asp#mark_reduce
 */


/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

// try:
// const nums = [1, 2, 7, 4, 5];
// function fn(init, n) {
//   return init + n;
// }
// console.log(nums.reduce(fn, 0)); // 19

// Solution 1: declarative programming
const nums = [1, 2, 7, 4, 5];

function fn(init, n) {
  return init + n;
}

var reduce = function (nums, fn, init) {
  return nums.reduce(fn, init);
};
console.log(reduce(nums, fn, 0)); // 19


// Solution 2: imperative programming (for loop)
var reduce2 = function (nums, fn, init) {
  let result = init;

  for (let i = 0; i < nums.length; i++) {
    result = fn(result, nums[i]); // new result = prev result + new num
  }

  return result;
};
console.log(reduce2(nums, fn, 0)); // 19


// Solution 3: imperative programming (forEach)
var reduce3 = function (nums, fn, init) {
  let result = init;

  nums.forEach((n) => {
    result = fn(result, n);
  });

  return result;
};
console.log(reduce3(nums, fn, 0)); // 19