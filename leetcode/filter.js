/**
 * https://leetcode.com/problems/filter-elements-from-array/?envType=study-plan-v2&envId=30-days-of-javascript
 * https://www.youtube.com/watch?v=w1o81gbEEJU&ab_channel=NeetCodeIO
 * 
 * Array filter:
 * https://www.w3schools.com/js/js_array_iteration.asp#mark_filter
 * 
 * Nullish Coalescing
 * These are equivalent:
 * const n = "" ?? "Hello";
 * const n = "" ? "" : "Hello";
 * 
 * Better to write explicit conditions like:
 * if (userInput !== null && userInput !== "") {}
 * Rather than:
 * if (userInput) {}
 * Because it's possible to have "0" for userInput which will consider as False
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  // Solution 1: use filter method
  // declarative programming
  // return arr.filter(fn);

  // Solution 2:
  // imperative programming i.e. we manage the state ourselves
  const result = [];

  // better to use this extract indexes to avoid casting issues
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }

  return result;
};

function greaterThan10(n) {
  return n > 10;
}

const arr1 = [0, 10, 20, 30]
const result = filter(arr1, greaterThan10);
for (let element of result) {
  console.log(element); // 20, 30
}