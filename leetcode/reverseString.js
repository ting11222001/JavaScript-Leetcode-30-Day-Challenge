/** 
 * Given a string, return a new string with reversed order of characters.
 * 
 * Example:
 * reverse("hello") = "olleh"
 * 
 * https://www.w3schools.com/js/js_string_methods.asp#mark_split
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 * 
 * https://www.youtube.com/watch?v=ufBbWIyKY2E&ab_channel=freeCodeCamp.org
*/

function reverse(str) {
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed; // h -> eh -> leh, etc.
  }

  return reversed;
}

console.log(reverse("hello")); // olleh

// Solution 2: use Array.reverse()
function reverse2(str) {
  const strToArray = str.split('');
  // If the separator is "", the returned array will be an array of single characters
  // [ 'C', 'o', 'd', 'i', 'n', 'g' ]

  strToArray.reverse();
  // This will be an array
  // [ 'g', 'n', 'i', 'd', 'o', 'C' ]

  return strToArray.join(''); // Join each element into a string
}

console.log(reverse2("Coding")); // gnidoC
