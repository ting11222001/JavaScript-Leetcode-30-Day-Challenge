/**
 * https://www.w3schools.com/REACT/react_es6_classes.asp
 */

class Car {
  constructor(brand) {
    this.carName = brand
  }

  present() {
    return 'I have a ' + this.carName
  }
}

class Model extends Car {
  constructor(brand, model) {
    super(brand) // invoke the parent class' constructor
    this.model = model
  }

  show() {
    return this.present() + ', it is a ' + this.model
  }
}

const mycar = new Car("Ford");
console.log(mycar.carName) // Ford

console.log(mycar.present()) // I have a Ford

const myModel = new Model("Ford", "Mustang")
console.log(myModel.show()) // I have a Ford, it is a Mustang