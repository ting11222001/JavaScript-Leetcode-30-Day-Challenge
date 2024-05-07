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

/**
 * https://www.youtube.com/watch?v=jJXJ16kPFWg
 * only consider A-Z, a-z, 0-9 the alphanumerical characters
 * 
 * https://www.youtube.com/watch?v=P1gmutIKPRU&ab_channel=JSDev
 * https://stackoverflow.com/questions/4434076/best-way-to-alphanumeric-check-in-javascript
 */
// I should consider if the inputs have other characters, e.g. whitespace, etc.
const s = "A man, a plan, a canal: Panama"
const t = "race a car"

function check(str) {
  let left = 0
  let right = str.length - 1

  while (left <= right) {
    if (str[left] === str[right]) {
      left++
      right--
    } else {
      return false
    }
  }

  return true
}

function solution3(str) {
  const regex = /[^a-zA-Z0-9]/g // negate anything that's not alphanumerical and use g to capture all
  const clean = str.replace(regex, '').toLowerCase()

  return check(clean)
}

console.log(solution3(s)); // true
console.log(solution3(t)); // false