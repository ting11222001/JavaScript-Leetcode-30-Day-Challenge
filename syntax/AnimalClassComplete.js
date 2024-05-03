/**
 * https://www.youtube.com/watch?v=Cto38GpvJgg&ab_channel=BroCode
 * 
 * In this file, the children class' name and age have been hoisted to parent class
 * 
 * super is a keyword used in classes to call the constructor or access the properties and methods
 * of a parent (i.e. superclass)
 * 
 * this means "this" object
 */

class Animal {
  constructor(name, age) { // name, age fields are common in the children class
    this.name = name
    this.age = age
  }

  move(speed) {
    console.log(`The ${this.name} moves at a speed of ${speed} mph.`)
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age) // pass these params to parent class
    this.runSpeed = runSpeed
  }

  run() {
    console.log(`This ${this.name} can run`);
    super.move(this.runSpeed)
  }
}

class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age) // pass these params to parent class
    this.swimSpeed = swimSpeed
  }

  swim() {
    console.log(`This ${this.name} can swim`);
    super.move(this.swimSpeed)
  }
}

const rabbit = new Rabbit("rabbit", 1, 25)
const fish = new Fish("fish", 2, 12)

console.log(rabbit.name) // rabbit
console.log(rabbit.age) // 1
console.log(rabbit.runSpeed) // 25

console.log(fish.name) // fish
console.log(fish.age) // 2
console.log(fish.swimSpeed) // 12

rabbit.run()
/**
This rabbit can run
The rabbit moves at a speed of 25 mph.
 */

fish.swim()
/**
This fish can swim
The fish moves at a speed of 12 mph.
 */