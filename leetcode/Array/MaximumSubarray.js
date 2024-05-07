/**
 * https://www.youtube.com/watch?v=5WZl3MMT0Eg
 */

function main(arr) {
  let maxSubArrSum = arr[0]
  let currSum = 0

  for (let num of arr) {
    if (currSum < 0) {
      currSum = 0
    }
    currSum += num
    maxSubArrSum = Math.max(maxSubArrSum, currSum)
  }

  return maxSubArrSum
}

const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(main(input)); // 6