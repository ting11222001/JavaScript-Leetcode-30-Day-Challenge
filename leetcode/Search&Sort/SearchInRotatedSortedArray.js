/**
 * https://www.youtube.com/watch?v=U8XENwh8Oy8
 */

function main(nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (target == nums[mid]) {
      return mid
    }

    // if mid belongs to the left sorted portion
    if (nums[left] <= nums[mid]) { // 4, 5, 6, 7^, 0, 1^^, 2 and find 0
      if (target > nums[mid]) {
        // then go right
        left = mid + 1
      } else if (target < nums[left]) {
        // then go right
        left = mid + 1
      } else {
        // others then go left
        right = mid - 1
      }
    } else { // if mid belongs to the right sorted portion
      if (target < nums[mid]) { // 4, 5, 6, 0^, 1, 2, 3 and find 2
        // then go left
        right = mid - 1
      } else if (target > nums[right]) {
        // then go left
        right = mid - 1
      } else {
        // others then go right
        left = mid + 1
      }
    }
  }

  return -1
}

const nums = [4, 5, 6, 7, 0, 1, 2]
const target = 0
console.log(main(nums, target)); // 4

const nums2 = [4, 5, 6, 0, 1, 2, 3]
const target2 = 6
console.log(main(nums2, target2)); // 2


const nums3 = [4, 5, 6, 0, 1, 2, 3]
const target3 = 2
console.log(main(nums3, target3)); // 5