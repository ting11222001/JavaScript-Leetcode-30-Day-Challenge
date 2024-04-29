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
  // Solution 2: loop over with index
  const result = [];

  for (const i in arr) {
    result.push(fn(arr[i], i));
    // result is an array object, so I can use the push method, but cannot reassign it with new array value.
    // "i" was string, so I need to cast it into number e.g. result.push(fn(arr[i], Number(i)));
  }

  return result;

  // Solution 1: Use map method from the array object. Create a new array by performing a function on each array element.
  // return arr.map(fn);
};

const arr1 = [1, 2, 3];

function plusOne(n) {
  return n + 1;
}

const plusOneResult = map(arr1, plusOne)
console.log(plusOneResult); // [ 2, 3, 4 ]

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}
console.log(text);