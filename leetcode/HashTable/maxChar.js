/**
 * Given a string, return the character that is most commonly used in string.
 * 
 * Example:
 * maxChar("abccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 * 
 * Same technique can be used for:
 * What is the most common character in the string?
 * Does string A have the same characters as string B (Anagram)?
 * Does the given string have any repeated characters in it?
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
 * 
 * https://www.youtube.com/watch?v=ufBbWIyKY2E&ab_channel=freeCodeCamp.org
 */

function maxChar(str) {
  let charMap = {}

  for (let char of str) {
    if (charMap[char]) {
      charMap[char] += 1
    } else {
      charMap[char] = 1
    }
  }

  let max = 0;
  let maxChar = '';
  for (let key in charMap) {
    if (charMap[key] > max) {
      max = charMap[key]
      maxChar = key
    }
  }

  return maxChar
}

console.log(maxChar("abccccccd")); // c
console.log(maxChar("apple 1231111")); // 1
