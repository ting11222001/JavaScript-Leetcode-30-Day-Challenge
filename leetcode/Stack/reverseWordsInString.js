/**
 * Given an input string, s, reverse the order of the words 
 * 
 * Example:
 * Input: "the sky is blue" ---->>>> Output: "blue is sky the"
 * Input: "  hello world  " ---->>>> Output: "world hello"
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
 * https://www.youtube.com/watch?v=UDHgN8UnO6w&list=PLKhlp2qtUcSZtJefDThsXcsAbRBCSTgW4&index=9&ab_channel=RoadsideCoder
 */

// Solution 1:
function reverseWords(str) {
  let split = str.split(' ')

  let reversed = split.reverse()

  return reversed.join(' ')
}

console.log(reverseWords("the sky is blue")); // "blue is sky the"

// Solution 2: use stack
function reverseWords2(str) {
  let inputStack = []
  let outputStr = ""

  let split = str.split(' ')
  for (let word of split) {
    inputStack.push(word)
  }

  while (inputStack.length > 0) {
    outputStr += inputStack.pop() + ' '
  }

  return outputStr.trim()
}

console.log(reverseWords2("the sky is blue")); // "blue is sky the"
console.log(reverseWords2("  hello world  ")); // "world hello"