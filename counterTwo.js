/**
 * https://www.youtube.com/watch?v=UXNXKGFZD08&ab_channel=NeetCodeIO
 * https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript
 */

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let count = init;

  function increment() {
    return ++count; // increment the count before returning it
  }

  function decrement() {
    return --count;
  }

  function reset() {
    count = init; // reassign the count using the init value
    return count;
  }

  return {
    increment: increment,
    decrement: decrement,
    reset: reset,
  }
};

const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4

/**
 * create a class
 */
class CounterTwo {
  constructor(init) {
    this.init = init;
    this.count = init; // outside of this constructor, the "init" will be "out of scope", so I need an extra "count" variable to access the "init" variable.
  }

  increment() {
    return ++this.count; // 6
  }

  decrement() {
    return --this.count; // 4
  }

  reset() {
    this.count = this.init; // 5
    return this.count;
  }
}

const counterTwo = new CounterTwo(5);
console.log(counterTwo.increment()); // 6
console.log(counterTwo.reset()); // 5
console.log(counterTwo.decrement()); // 4

// The above function solution can be more concise
var createCounter2 = function (init) {
  let count = init;

  const increment = () => ++count;
  const decrement = () => --count;

  const reset = () => {
    count = init;
    return count;
  }

  return {
    increment, // the key and value have the same names, so the values can be omitted.
    decrement,
    reset,
  }
};

const counter2 = createCounter2(5)
console.log(counter2.increment()); // 6
console.log(counter2.reset()); // 5
console.log(counter2.decrement()); // 4