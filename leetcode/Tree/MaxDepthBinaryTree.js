/**
 * https://www.youtube.com/watch?v=hTM3phVI6YQ&ab_channel=NeetCode
 * https://stackoverflow.com/questions/1590247/how-do-you-implement-a-stack-and-a-queue-in-javascript
 * The below code needs to be run on Leetcode console:
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/ 
*/

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

// Recursion DFS
function maxDepth(root) {
  if (!root) {
    return 0
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

const input = [3, 9, 20, null, null, 15, 7]
console.log(maxDepth([input])); // 3

// BFS
function maxDepth2(root) {
  if (!root) {
    return 0
  }

  let level = 0
  let queue = []
  queue.push(root)

  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      let node = queue.shift()

      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }

    level++
  }

  return level
}
console.log(maxDepth2([input])); // 3

// Iterative DFS
function maxDepth3(root) {
  if (!root) {
    return 0
  }

  let stack = []
  stack.push([root, 1])

  let result = 1

  while (stack.length > 0) {
    let [node, depth] = stack.pop()

    if (node) {
      result = Math.max(result, depth)
      stack.push([node.left, depth + 1])
      stack.push([node.right, depth + 1])
    }
  }

  return result
}
console.log(maxDepth3([input])); // 3