/**
 * https://www.doabledanny.com/binary-search-javascript
 * https://www.w3schools.com/dsa/dsa_algo_binarysearch.php
 */

function binarySearch(arr, target) {
  let left = 0
  let right = arr.length - 1
  let mid

  while (left <= right) {
    mid = Math.floor((left + right) / 2)

    if (arr[mid] > target) {
      right = mid - 1 // Search the left half
    } else if (arr[mid] < target) {
      left = mid + 1  // Search the right half
    } else if (arr[mid] == target) {
      return mid  // found the target
    }
  }

  return -1 // target not found
}

console.log(binarySearch([1, 2, 3, 4], 1)) // 0
console.log(binarySearch([1, 2, 3, 4, 5], 5)) // 4