/**
 * https://www.youtube.com/watch?v=4CykZVqBuCw&ab_channel=DerrickSherrill
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i // start from index: 0

    for (let j = i + 1; j < arr.length; j++) { // index: 1 onwards
      if (arr[j] < arr[min]) {
        min = j
      }
    }

    // SWAP
    if (min != i) {
      [arr[min], arr[i]] = [arr[i], arr[min]] // RHS: [4, 2] -> LHS: [2, 4]
    }
  }

  return arr
}

console.log(selectionSort([4, 6, 2, 8, 7])) // [ 2, 4, 6, 7, 8 ]