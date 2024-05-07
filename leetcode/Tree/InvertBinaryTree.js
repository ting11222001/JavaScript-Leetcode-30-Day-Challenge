/**
 * https://www.youtube.com/watch?v=OnSn2XEQ4MY&ab_channel=NeetCode
 * The below code needs to be run on Leetcode console:
 * https://leetcode.com/problems/invert-binary-tree/description/
 */

function invertTree(root) {
  if (!root) {
    return null
  }

  // swap the children
  let temp = root.left
  root.left = root.right
  root.right = temp

  invertTree(root.left)
  invertTree(root.right)

  return root
}
const root = [4, 2, 7, 1, 3, 6, 9]
console.log(invertTree(root));
