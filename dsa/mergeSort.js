/**
 * https://www.doabledanny.com/merge-sort-javascript
 * 
 * The shift() method removes the element at the zeroth index.
 * The pop() method has similar behavior to shift(), but applied to the last element in an array.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
 * 
 * Step 1:
 * Write a merge helper function which accepts two SORTED arrays and merges them into one, larger sorted array.
 * Step 2:
 * Writing the Merge Sort function which uses recursion to halve the arrays with the slice() method. The base case is when the arrays have a length of 1 or 0.
 * 
 */

function merge(left, right) {
  let sortedArr = []

  while (left.length && right.length) { // when there's elements in left and right arrays
    if (left[0] < right[0]) {  // the two arrays are sorted, so we can always look at arr[0]
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }

  let combined = [...sortedArr, ...left, ...right]

  return combined
}

// test the merge function:
// merge([1, 4], [2, 6, 9]) // [1, 2, 4, 6, 9]

function mergeSort(arr) {
  // Base case
  if (arr.length <= 1) return arr

  let mid = Math.floor((arr.length) / 2)

  // Recursive calls
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))

  return merge(left, right)
}

// console.log(mergeSort([3, 5, 8, 5, 99, 1])) // [1, 3, 5, 5, 8, 99]
console.log(mergeSort([10, 24, 76, 73])) // [10, 24, 73, 76]