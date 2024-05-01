/**
 * https://www.doabledanny.com/bubble-sort-in-javascript
 * 
 * 4 elements will only need 3 passes
 * the largest numbe bubbles to the top
 */

function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        // SWAP
        let temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  console.log(arr)
}

bubbleSort([3, 2, 4, 1]) // [1, 2, 3, 4]

function bubbleSort2(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        // SWAP
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      }
    }
  }
  console.log(arr)
}

bubbleSort2([3, 2, 4, 1]) // [1, 2, 3, 4]
bubbleSort2([2, 3, 1, 2]) // [1, 2, 2, 3]