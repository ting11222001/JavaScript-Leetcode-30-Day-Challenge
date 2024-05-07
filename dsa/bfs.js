/**
 * https://www.youtube.com/watch?v=dfaKCrJ2HAk&list=PLxQ8cCJ6LyOZHhAjIYrEFWcfYdyJl5VYf&index=16&ab_channel=Coderbyte
 */

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")
const f = new Node("f")

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

//    a
//   /  \
//  b    c
// / \    \
// d  e    f

const bfs = (root) => {
  const queue = [root]

  while (queue.length > 0) {
    const curr = queue.shift()

    console.log(curr.val)

    if (curr.left) {
      queue.push(curr.left)
    }
    if (curr.right) {
      queue.push(curr.right)
    }
  }
}
bfs(a) // abcdef



// search the target value in the tree (using bfs)
const searchBFS = (root, target) => {
  const queue = [root]

  while (queue.length > 0) {
    const curr = queue.shift()

    if (curr.val == target) {
      return true
    }

    if (curr.left) {
      queue.push(curr.left)
    }
    if (curr.right) {
      queue.push(curr.right)
    }
  }

  return false
}
console.log(searchBFS(a, "e")); // true
console.log(searchBFS(a, "z")); // false


// Sum of the tree (bfs)
const g = new Node(3)
const h = new Node(2)
const i = new Node(7)
const j = new Node(4)
const k = new Node(-2)
const l = new Node(5)

g.left = h
g.right = i
h.left = j
h.right = k
i.right = l

//     3
//   /   \
//  2     7
// / \     \
// 4  -2    5

const sumTree = (root) => {
  const queue = [root]
  let sum = 0

  while (queue.length > 0) {
    const curr = queue.shift()

    sum += curr.val

    if (curr.left) {
      queue.push(curr.left)
    }
    if (curr.right) {
      queue.push(curr.right)
    }
  }

  return sum
}
console.log(sumTree(g)); // 19