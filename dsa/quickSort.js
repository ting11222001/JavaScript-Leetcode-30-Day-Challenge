/**
 * https://www.youtube.com/watch?v=kFeXwkgnQ9U&ab_channel=DerrickSherrill
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 */

function quickSort(arr) {
  if (arr.length <= 1) return arr // when the arr length is only 1 element, then it's sorted

  let pivot = arr.pop() // chose the last item as pivot

  let itemsGreater = []
  let itemsLower = []

  for (let item of arr) {
    if (item > pivot) {
      itemsGreater.push(item)
    } else {
      itemsLower.push(item)
    }
  }

  return quickSort(itemsLower).concat([pivot]).concat(quickSort(itemsGreater))
  // similar to quickSort(itemsLower) + [pivot] + quickSort(itemsGreater)
  // but I want it to return as an array, not a string, so I used Array.concat()
}

console.log(quickSort([4, 3, 1, 6, 5, 2])) // [ 1, 2, 3, 4, 5, 6 ]
console.log(quickSort([5, 6, 7, 8, 9, 8, 7, 6, 5, 6, 7, 8, 9])) // [5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9]