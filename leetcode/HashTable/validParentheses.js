/**
 * Given a string containing just the characters:
 * '(', ')', '{', '}', '[', ']'. Determine if the input string is valid.
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * 
 * Example:
 * Input: "()[]{}" ---->>>> Output: true
 * Input: "([]{})" ---->>>> Output: true
 * Input: "(]" ---->>>> Output: false
 * 
 * 
 * For solution 1, I think this video is a bit too complicated:
 * https://www.youtube.com/watch?v=UDHgN8UnO6w&list=PLKhlp2qtUcSZtJefDThsXcsAbRBCSTgW4&index=9&ab_channel=RoadsideCoder
 * 
 * So I check the neetcode one for solution 2:
 * https://www.youtube.com/watch?v=WTzjTskDFMg&ab_channel=NeetCode
 * 
 * 
 * https://www.geeksforgeeks.org/how-to-iterate-over-characters-of-a-string-in-javascript/
 * https://stackoverflow.com/questions/1098040/checking-if-a-key-exists-in-a-javascript-object
 * https://stackoverflow.com/questions/3559070/are-there-dictionaries-in-javascript-like-python
 */

/**
 * str: "([]{})"
 * 
 * [] => ['(', '[' ... => ']', so pop '['
 * [] => ['(', '{' ... => '}', so pop '{'
 * [] => ['(', ... => ')', so pop '('
 * 
 * valid will end up having empty stack
 */


// Solution 2: Use stack and hashmap
function validParentheses2(str) {
  const stack = []
  const closeToOpen = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  for (let char of str) {
    if (char in closeToOpen) { // if it's a closing bracket
      // stack is not empty, and the top one can be a pair
      if (stack.length && stack[stack.length - 1] === closeToOpen[char]) {
        stack.pop()
      } else {
        return false
      }
    } else {  // if it's an opening bracket
      stack.push(char)
    }
  }
  return true
}

console.log(validParentheses2("()[]{}")) // true
console.log(validParentheses2("(]")) // false