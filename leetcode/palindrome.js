/**
 * Given a string, return true if the string is a palindrome.
 * 
 * Example:
 * palindrome("kayak") == true
 * palindrome("school") == false
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 * 
 * https://www.youtube.com/watch?v=ufBbWIyKY2E&ab_channel=freeCodeCamp.org
 */

// Solution 1: use two pointers
function palindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] != str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(palindrome("kayak")); // true
console.log(palindrome("school")); // false

// Solution 2: use reversed to check
function palindrome2(str) {
  const reversed = str.split('').reverse().join('');

  // console.log(str.split('')); // [ 's', 'c', 'h', 'o', 'o', 'l' ]
  // console.log(str.split('').reverse()); // [ 'l', 'o', 'o', 'h', 'c', 's' ]
  // console.log(reversed); // loohcs

  if (str === reversed) {
    return true;
  }

  return false;
}

console.log(palindrome2("kayak")); // true
console.log(palindrome2("school")); // false