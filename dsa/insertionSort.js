/**
 * https://www.doabledanny.com/insertion-sort-in-javascript
 * https://www.youtube.com/watch?v=byHi41L9vTM&ab_channel=DerrickSherrill
 * https://www.programiz.com/dsa/insertion-sort
 * 
 * start from the 2nd element and keep swapping to the left
 */

// Solution 1:
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i]

    let j

    for (j = i - 1; j >= 0 && arr[j] > curr; j--) {
      arr[j + 1] = arr[j] // move the big left to the curr i.e. on its right
    }

    arr[j + 1] = curr // put the curr in front of the value when arr[j] < curr
  }

  console.log(arr)
}

console.log("Solution 1:")
insertionSort([2, 1, 3, 7, 5]) // [1, 2, 3, 5, 7]
insertionSort([5, 2, 4, 6, 1, 3]) // [1, 2, 3, 4, 5, 6]
insertionSort([2, 4, 1, 3]) // [1, 2, 3, 4]


// Solution 2:
function insertionSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    curr = arr[i]

    let j = i - 1

    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j]
      j--
    }

    arr[j + 1] = curr
  }

  console.log(arr)
}

console.log("Solution 2:")
insertionSort2([2, 1, 3, 7, 5]) // [1, 2, 3, 5, 7]
insertionSort2([5, 2, 4, 6, 1, 3]) // [1, 2, 3, 4, 5, 6]
insertionSort2([2, 4, 1, 3]) // [1, 2, 3, 4]

// Solution 3:
function insertionSort3(arr) {
  for (let i = 1; i < arr.length; i++) {
    valueToSort = arr[i]

    // arr[i - 1] is the value on the left, and keep going left
    while (arr[i - 1] > valueToSort && i > 0) {
      let temp = valueToSort
      valueToSort = arr[i - 1]
      arr[i - 1] = temp
      i--
    }
  }
  console.log(arr)
}

console.log("Solution 3:")
insertionSort3([2, 1, 3, 7, 5]) // [1, 2, 3, 5, 7]
insertionSort3([5, 2, 4, 6, 1, 3]) // [1, 2, 3, 4, 5, 6]
insertionSort3([2, 4, 1, 3]) // [1, 2, 3, 4]