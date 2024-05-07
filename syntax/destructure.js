/**
 * https://www.w3schools.com/REACT/react_es6_destructuring.asp
 */


// Destructuring Objects in a function
const vehicle = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021,
  color: 'red'
}

function myVehicle({ type, color, brand, model }) {
  const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.'
  return message
}

console.log(myVehicle(vehicle)) // My car is a red Ford Mustang.

// Destructing Arrays
// When destructuring arrays, the order that variables are declared is important.
function calculate(a, b) {
  const add = a + b
  const subtract = a - b
  const multiply = a * b
  const divide = a / b

  return [add, subtract, multiply, divide]
}

const [add, subtract, multiply, divide] = calculate(8, 4)
console.log(add) // 12
console.log(subtract) // 4
console.log(multiply) // 32
console.log(divide) // 2

const vehicles = ['mustang', 'f-150', 'expedition'];
const [car, truck, suv] = vehicles
console.log(car); // mustang
console.log(truck); // f-150
console.log(suv); // expedition


// We can even destructure deeply nested objects
const vehicleComplete = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021,
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

function myVehicleComplete({ model, registration: { state } }) {
  const message = 'My ' + model + ' is registered in ' + state + '.'
  return message
}

console.log(myVehicleComplete(vehicleComplete)) // My Mustang is registered in Texas.