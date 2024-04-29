/**
 * Day 1
 * https://www.youtube.com/watch?v=P9Ldx1eTlRc&ab_channel=NeetCodeIO
 * https://leetcode.com/problems/create-hello-world-function/editorial/?envType=study-plan-v2&envId=30-days-of-javascript
 */


const createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  }
}

const f = createHelloWorld();
console.log(f()); // Hello World

/**
 * Function Syntax 
 * In JavaScript, there are two main ways to declare a function. One of which is to use the function keyword. 
 */

/**
 * Basic Syntax
 * 
 */
function add(a, b) {
  const sum = a + b;
  return sum;
}
console.log(add(3, 4)); // 7


/**
 * Anonymous Function
You can optionally exclude the name of the function after the function keyword.
 */
const addition = function (a, b) {
  const sum = a + b;
  return sum;
}
console.log(addition(3, 4)) //7

/**
 * Immediately Invoked Function Expression (IIFE)
 * You can create a function and immediately execute it in Javascript.
 */
const result = (function (a, b) {
  const sum = a + b;
  return sum;
})(3, 4);
console.log(result); // 7

/**
 * Function Hoisting
JavaScript has a feature called hoisting where a function can sometimes be used before it is initialized. You can only do this if you declare functions with the function syntax.
 */
function createFunction() {
  return add;   // add() is used here i.e. before it's initialized

  function add(a, b) {
    const sum = a + b;
    return sum;
  }
}
const createFunctionResult = createFunction();
console.log(createFunctionResult(3, 4)); // 7

/**
 * Arrow Syntax
 * Note that arrow syntax is usually used with anonynous function.
 */

// these are equivalent:
// using function keyword
function add2(a, b) {
  const sum = a + b;
  return sum;
}
console.log(add2(3, 5)); // 8

// using arrow syntax and anonymous function
const add3 = (a, b) => {
  const sum = a + b;
  return sum;
}
console.log(add3(3, 5)); // 8

/**
 * Anonymous function doesn't support function hoisting.
 */
add4(1, 2); // 3

function add4(a, b) {
  console.log(a + b);
}

/**
  add5(1, 2); // ReferenceError: Cannot access 'add5' before initialization
  
  const add5 = (a, b) => {
    console.log(a + b);
  }
 */

/**
 * Closure
 * It's all about "hidden state", so it's for OOP.
 */

function createCounter() {
  let value = 0;

  function increment() {
    return ++value; // return "value" after "value" is incremented
  }

  return {
    increment: increment // createCounter() returns an object with a method called "increment"
  }
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1.increment()); // 1
console.log(counter1.increment()); // 2

console.log(counter2.increment()); // 1

/**
 * Rest Arguments
 * ... is called "spread operator"
 * You can use rest syntax to access all the passed arguments as an array. This isn't necessary for this problem, but it will be a critical concept for many problems. You can read more about ... syntax
 */
let a = [1, 2];
let b = [3, 4];

console.log([...a, ...b]); // [ 1, 2, 3, 4 ]

function add6(...args) {
  console.log(args[0] + args[1]);
}

add6(...a); // 3
add6(8, 2); // 10