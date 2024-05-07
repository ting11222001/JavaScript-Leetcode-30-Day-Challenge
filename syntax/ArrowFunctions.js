/** 
 * https://www.w3schools.com/REACT/react_es6_arrow.asp
 * https://leetcode.com/problems/create-hello-world-function/editorial/?envType=study-plan-v2&envId=30-days-of-javascript
*/

// Anonymous Function
const f = function (a, b) {
  const sum = a + b
  return sum
}
console.log(f(1, 2)) // 3

// Arrow Syntax
const e = (a, b) => {
  const sum = a + b
  return sum
}
console.log(e(1, 2)) // 3

// If the arrow function only has one statement
const e_simplified = (a, b) => a + b
console.log(e_simplified(1, 2)) // 3


// Rest Arguments
const g = function (...args) {
  const sum = args[0] + args[1]
  return sum
}
console.log(g(1, 2)) // 3