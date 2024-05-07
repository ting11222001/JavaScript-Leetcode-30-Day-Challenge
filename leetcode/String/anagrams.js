// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('coding money', 'money coding') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// https://www.youtube.com/watch?v=ufBbWIyKY2E&ab_channel=freeCodeCamp.org


// Solution 1:
function charMap(str) {
  const charMap = {}

  for (let char of str) {
    if (charMap[char]) {
      charMap[char] += 1
    } else {
      charMap[char] = 1
    }
  }

  return charMap
}

function anagrams(stringA, stringB) {
  // [] denotes a character class, which allows you to specify a set of characters.
  // `\W` inside the character class represents a shorthand for any non-word character.
  // `/g` is a flag in regular expressions that stands for "global," meaning it will replace all occurrences of the pattern in the string, not just the first one.
  // Note that:
  // `\w` matches: a, A, 0, 9, _, b, C, etc. Essentially, any letter (uppercase or lowercase), digit, or underscore. 
  // `\W` matches: !, @, #, $, %, , &, (, ), etc.Essentially, any character that is not a letter, digit, or underscore.
  stringA = stringA.toLowerCase().replace(/[\W]/g, '') // railsafety
  stringB = stringB.toLowerCase().replace(/[\W]/g, '') // fairytales

  // Step 1: build char map for stringA
  const charMapA = charMap(stringA) // { r: 1, a: 2, i: 1, l: 1, s: 1, f: 1, e: 1, t: 1, y: 1 }

  // Step 2: build char map for stringB
  const charMapB = charMap(stringB) // { f: 1, a: 2, i: 1, r: 1, y: 1, t: 1, l: 1, e: 1, s: 1 }

  // Step 3: compare each character in the both char maps
  // Object.keys(charMapA): [ 'r', 'a', 'i', 'l', 's', 'f', 'e', 't', 'y']
  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) return false

  for (let key in charMapA) {
    if (charMapA[key] !== charMapB[key]) return false
  }

  return true
}


console.log(anagrams('RAIL! SAFETY!', 'fairy tales')); // true
console.log(anagrams('Hi there', 'Bye there')); // false


// Solution 2:
function cleanStr(str) {
  return str.toLowerCase().replace(/[\W]/g, '').split('').sort().join('')
}

function anagrams2(stringA, stringB) {
  return cleanStr(stringA) === cleanStr(stringB)
}

console.log(anagrams2('RAIL! SAFETY!', 'fairy tales')); // true
console.log(anagrams2('Hi there', 'Bye there')); // false