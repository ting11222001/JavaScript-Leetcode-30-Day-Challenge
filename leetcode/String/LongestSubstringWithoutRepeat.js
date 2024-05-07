/**
 * https://www.youtube.com/watch?v=wiGpQwVHdE0
 * 
 * typical sliding window question
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size
 */

function main(str) {
  let charSet = new Set()

  let left = 0

  let result = 0

  for (let right = 0; right < str.length; right++) {
    while (str[right] in charSet) {
      charSet.delete(str[left])
      left++
    }
    charSet.add(str[right])
    result = Math.max(result, charSet.size) // charSet.size can be attained from rigt - left + 1
  }

  return result
}

const input = "abcabcbb"
console.log(main(input)); // 3