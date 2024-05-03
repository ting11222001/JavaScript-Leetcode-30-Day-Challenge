// Basic Stack Implementation

class Stack {
  constructor() {
    this.stack = []
  }

  push(element) {
    this.stack.push(element)
  }

  pop() {
    if (this.isEmpty()) return "Stack is empty. Can't perform pop()."

    return this.stack.pop()
  }

  peek() {
    if (this.isEmpty()) return "Stack is empty. Can't perform peek()."

    return this.stack[this.size() - 1] // i.e. return the last element
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    return this.stack.length
  }

  printStack() {
    if (this.isEmpty()) return "Stack is empty. Can't perform printStack()."

    for (let element of this.stack) {
      console.log(element);
    }
  }
}

// Running the stack
const stack = new Stack()

// Initialize the stack
stack.push(10)
stack.push(69)
stack.push(420)
console.log(stack.peek()) // 420

console.log(stack.size()); // 3

stack.printStack() // 10 69 420

console.log(stack.pop()) // 420

console.log(stack.peek()) // 69

console.log(stack.pop()) // 69
console.log(stack.pop()) // 10

console.log(stack.peek()) // Stack is empty. Can't perform peek().
console.log(stack.pop()) // Stack is empty. Can't perform pop().
console.log(stack.isEmpty()) // true