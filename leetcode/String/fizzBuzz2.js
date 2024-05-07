// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

/**
 * https://www.youtube.com/watch?v=ufBbWIyKY2E&ab_channel=freeCodeCamp.org
 */

// Solution 1:
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let result = ""

    if (i % 3 == 0) {
      result += "fizz"
    }
    if (i % 5 == 0) {
      result += "buzz"
    }

    console.log(result || i)
  }
}

fizzBuzz(5)

/*
1
2
fizz
4
buzz
*/

// Solution 2:
function fizzBuzz2(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz")
    } else if (i % 3 === 0) {
      console.log("fizz")
    } else if (i % 5 === 0) {
      console.log("buzz")
    } else {
      console.log(i)
    }
  }
}

fizzBuzz2(5)

/*
1
2
fizz
4
buzz
*/

fizzBuzz2(15)

/*
1
2
fizz
4
buzz
fizz
7
8
fizz
buzz
11
fizz
13
14
fizzbuzz
 */