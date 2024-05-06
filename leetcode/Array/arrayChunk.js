// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/**
 * https://www.youtube.com/watch?v=ufBbWIyKY2E&ab_channel=freeCodeCamp.org
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 */

function chunk(array, size) { // array: [1, 2, 3, 4, 5], size: 2
  const result = [];
  let start = 0;
  let end;

  while (start < array.length) { // array.length: 5
    end = start + size;
    // start: 0, size: 2, end: 2 -> start: 2, size: 2, end: 4 -> start: 4, size: 2, end: 6
    result.push(array.slice(start, end));
    // start: 0, end; 2, [ 1, 2] -> start: 2, end; 4, [ 3, 4] -> start: 4, end: 6, [5]
    start += size; // start: 2 -> start: 4 -> start: 6
  }

  return result;
}

console.log(chunk([1, 2, 3, 4, 5], 2)); // [[ 1, 2], [3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 4)); // [[1, 2, 3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]