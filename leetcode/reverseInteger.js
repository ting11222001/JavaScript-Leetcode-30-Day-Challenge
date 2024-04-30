/**
 * Given an integer, return an integer that is reversed.
 * 
 * Example:
 * reverseInteger(15) == 51
 * reverseInteger(-15) == -51 -> this was tricky
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
 * 
 * 
 * https://www.youtube.com/watch?v=ufBbWIyKY2E&ab_channel=freeCodeCamp.org
 */

function reverseInteger(n) {
  const reversed = n.toString().split('').reverse().join('');
  // console.log(reversed); // 51-
  // console.log(parseInt(reversed)); // 51
  return parseInt(reversed) * Math.sign(n); // The Math.sign() static method returns 1 or -1 for positive or neg
}

console.log(reverseInteger(981)); // 189
console.log(reverseInteger(-15)); // -51