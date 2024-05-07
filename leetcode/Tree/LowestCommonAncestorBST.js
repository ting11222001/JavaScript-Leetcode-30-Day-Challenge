/**
 * https://www.youtube.com/watch?v=gs2LMfuOR9k&ab_channel=NeetCode
 * The below code needs to be run on Leetcode console:
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 */

function lowestCommonAncestor(root, p, q) {
  let curr = root

  while (curr) {
    if (p.val > curr.val && q.val > curr.val) {
      curr = curr.right
    } else if (p.val < curr.val && q.val < curr.val) {
      curr = curr.left
    } else {
      return curr
    }
  }
}