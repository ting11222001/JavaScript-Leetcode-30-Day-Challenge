/**
 * https://www.youtube.com/watch?v=Ber2pi2C0j0
 */

function main(matrix, target) {
  let rows = matrix.length
  let cols = matrix[0].length - 1

  let topRow = 0
  let bottomRow = rows - 1

  while (topRow <= bottomRow) {
    let midRow = Math.floor((topRow + bottomRow) / 2)

    if (target > matrix[midRow][cols]) {
      topRow = midRow + 1
    } else if (target < matrix[midRow][0]) {
      bottomRow = midRow - 1
    } else {
      break // target is in this current row
    }
  }

  if (!(topRow <= bottomRow)) {
    return false
  }

  let currRow = Math.floor((topRow + bottomRow) / 2)

  let left = 0
  let right = cols - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (target > currRow[mid]) {
      left = mid + 1
    } else if (target < currRow[mid]) {
      right = mid - 1
    } else {
      return true
    }
  }

  return false

}

const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
const target = 3
console.log(main(matrix, target)); // true