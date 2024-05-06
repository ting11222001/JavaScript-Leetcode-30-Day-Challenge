/**
 * https://www.youtube.com/watch?v=1pkOgXD63yU
 */

function main(arr) {
  let left = 0  // left for buy, right for sell
  let right = 1
  let maxProfit = 0

  while (right < arr.length) {
    if (arr[left] < arr[right]) {
      let profit = arr[right] - arr[left]
      maxProfit = Math.max(maxProfit, profit)
    } else {
      // left++
      left = right
    }
    right++
  }

  return maxProfit
}

const prices = [7, 1, 5, 3, 6, 4]
console.log(main(prices)); // 5