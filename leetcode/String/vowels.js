// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('How are you?') --> 5
//   vowels('Coding Money') --> 4
//   vowels('why?') --> 0

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
 * 
 * https://www.youtube.com/watch?v=ufBbWIyKY2E&ab_channel=freeCodeCamp.org
 */

// Solution 1:
function vowels(str) {
  // `g` is the global flas
  // `i` is for case-insensitivity
  const matches = str.match(/[aeiou]/gi)

  return matches ? matches.length : 0
}

console.log(vowels("Hi There!")) // 3

// Solution 2:
function vowels2(str) {
  const vowelCheck = ['a', 'e', 'i', 'o', 'u']

  let count = 0

  for (let char of str.toLowerCase()) {
    if (vowelCheck.includes(char)) {
      count += 1
    }
  }

  return count
}

console.log(vowels2("Hi There!")) // 3
