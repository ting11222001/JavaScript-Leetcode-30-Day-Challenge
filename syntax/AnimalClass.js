/**
 * https://www.youtube.com/watch?v=Cto38GpvJgg&ab_channel=BroCode
 */

class Animal {
  constructor() {
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super() // must have, or ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    this.name = name
    this.age = age
    this.runSpeed = runSpeed
  }
}

class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super()
    this.name = name
    this.age = age
    this.swimSpeed = swimSpeed
  }
}

const rabbit = new Rabbit("rabbit", 1, 25)
const fish = new Fish("fish", 2, 12)

console.log(rabbit.name)
console.log(rabbit.age)
console.log(rabbit.runSpeed)

console.log(fish.name)
console.log(fish.age)
console.log(fish.swimSpeed)