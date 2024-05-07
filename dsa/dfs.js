/**
 * https://www.youtube.com/watch?v=fPz40W9mfCg&ab_channel=Coderbyte
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

// Iteratively (pre-order)
// O(n) time, O(n) space
const dfs = (root) => {
  const stack = [root]
  while (stack.length > 0) {
    const curr = stack.pop()
    console.log(curr.val);

    // add curr's children to the top of the stack
    // we want to achieve pre-order traversal, so we need to add the RHS child
    // first, and then add the LHS child to the stack
    if (curr.right != null) {
      stack.push(curr.right)
    }
    if (curr.left != null) {
      stack.push(curr.left)
    }
  }
}

dfs(a)
// expected output: abdecf i.e. pre-order


// Recursively (pre-order)
// O(n) time, O(n) space
const recurDfs = (root) => {
  if (!root) return;

  console.log(root.val);

  recurDfs(root.left);
  recurDfs(root.right);

}

recurDfs(a)
// expected output: abdecf i.e. pre-order


// pre-order traversal
const preOrder = (root) => {
  if (root == null) return;

  console.log(root.val);
  preOrder(root.left);
  preOrder(root.right);
}
// self, left, right
//    a
//   /  \
//  b    c
// / \    \
// d  e    f
preOrder(a) // abdecf



// post-order traversal
const postOrder = (root) => {
  if (root == null) return;

  postOrder(root.left);
  postOrder(root.right);
  console.log(root.val);
}
// left, right, self
//    a
//   /  \
//  b    c
// / \    \
// d  e    f
postOrder(a) // debfca


// in-order traversal
const inOrder = (root) => {
  if (root == null) return;

  inOrder(root.left);
  console.log(root.val);
  inOrder(root.right);
}
// left, self, right
//    a
//   /  \
//  b    c
// / \    \
// d  e    f
inOrder(a) // dbeacf





// Sum of the tree (dfs)
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
  const stack = [root]

  let sum = 0

  while (stack.length > 0) {
    const curr = stack.pop()
    sum += curr.val

    if (curr.right) {
      stack.push(curr.right)
    }
    if (curr.left) {
      stack.push(curr.left)
    }
  }

  return sum
}
console.log(sumTree(g)); // 19