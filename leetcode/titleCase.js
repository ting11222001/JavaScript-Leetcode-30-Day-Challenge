// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('this is mukhtar from coding money') --> 'This Is Mukhtar From Coding Money'
//   capitalize('what is titlecase?') --> 'What Is Titlecase?'
//   capitalize('titles of books, movies, songs, plays and other works') --> 'Titles Of Books, Movies, Songs, Plays And Other Works'

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * 
 * https://www.youtube.com/watch?v=ufBbWIyKY2E&ab_channel=freeCodeCamp.org
 */


// Solution 1:
function capitalize(str) {
  const result = []
  const words = str.split(" ")
  // [ 'this', 'is', 'mukhtar', 'from', 'coding', 'money' ]
  // [ 'titles', 'of', 'books,', 'movies,', 'songs,', 'plays', 'and', 'other', 'works']

  for (let word of words) {
    result.push(word[0].toUpperCase() + word.slice(1))
  }

  return result.join(' ') // join with whitespace as separator
}

console.log(capitalize('this is mukhtar from coding money'));
// 'This Is Mukhtar From Coding Money'
console.log(capitalize('titles of books, movies, songs, plays and other works'));
// Titles Of Books, Movies, Songs, Plays And Other Works'



// Solution 2:
function capitalize2(str) {
  const words = str.split(" ")

  const result = words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ')

  return result
}

console.log(capitalize2('this is mukhtar from coding money'));
// 'This Is Mukhtar From Coding Money'