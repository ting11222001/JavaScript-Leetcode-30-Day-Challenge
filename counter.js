/**
 * @param {number} n
 * @return {Function} counter
 */

var createCounter = function (n) {
  let count = n;

  return function () {
    return count++; // before it increments n, it returns n
  };
};


const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12

/**
 * version 2: create a class
 */

class Counter {
  constructor(n) {
    this.n = n;
  }

  increment() {
    return this.n++; // return this.n and then increment
  }
}

const counterClass = new Counter(10);
console.log(counterClass.increment()); // 10
console.log(counterClass.increment()); // 11
console.log(counterClass.increment()); // 12