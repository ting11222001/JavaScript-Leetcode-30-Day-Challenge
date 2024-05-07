/**
 * https://www.youtube.com/watch?v=9UtInBqnCgA
 */

function solution1(s, t) {
  if (s.length !== t.length) return false
  let countS = {} // {char: counts}
  let countT = {}

  for (let i = 0; i < s.length; i++) {
    countS[s[i]] = countS[s[i]] ? countS[s[i]] + 1 : 1
    countT[t[i]] = countT[t[i]] ? countT[t[i]] + 1 : 1
  }

  for (let char in countS) {
    if (countS[char] !== countT[char]) {
      return false
    }
  }

  return true
}

const s1 = "anagram"
const t1 = "nagaram"
console.log(solution1(s1, t1)); // true

const s2 = "rat"
const t2 = "car"
console.log(solution1(s2, t2)); // false

function solution2(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('') // make strings into arrays before sorting
}

console.log(solution2(s1, t1)); // true
console.log(solution2(s2, t2)); // false