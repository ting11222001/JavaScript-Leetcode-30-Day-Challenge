/**
 * https://www.youtube.com/watch?v=7FhJHA5jlYk&ab_channel=NeetCodeIO
 * https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript
 * 
 * map method:
 * https://www.w3schools.com/js/js_array_iteration.asp#mark_map
 * 
 * for ... of:
 * for of statement loops through the values of an iterable object.
 * 
 * for ... in:
 * https://www.w3schools.com/js/js_loop_forin.asp
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  // Solution 2: loop over the array with index
  const result = [];

  for (const i in arr) {
    result.push(fn(arr[i], Number(i)));
    // result is an array object, so I can use the push method, but result cannot be reassigned with new array value. "i" was string, so I need to cast it into number.
  }

  return result;

  // Solution 1: Functional Programming
  // i.e. no state management explicitly.
  // Use map method from the array object. Create a new array by performing a function on each array element.
  // return arr.map(fn);
};

const arr1 = [1, 2, 3];

function plusOne(n) {
  return n + 1;
}

function plusByIndex(n, i) {
  return n + i;
}

function constant() {
  return 42;
}

const plusOneResult = map(arr1, plusOne);
console.log(plusOneResult); // [ 2, 3, 4 ]

const plusByIndexResult = map(arr1, plusByIndex);
console.log(plusByIndexResult); // [ 1, 3, 5 ]

const constantResult = map(arr1, constant);
console.log(constantResult); // [ 42, 42, 42 ]