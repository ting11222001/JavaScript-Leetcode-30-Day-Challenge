/**
 * https://www.w3schools.com/REACT/react_es6_spread.asp
 * 
 * The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
 */

// On arrays
const numbers = [1, 2, 3, 4, 5, 6]

const [one, two, ...rest] = numbers

console.log(one) // 1
console.log(two) // 2
console.log(rest); // [3, 4, 5, 6]

// On objects
const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021,
  color: 'yellow'
}

const myUpdateVehicle = { ...myVehicle, ...updateMyVehicle }
console.log(myUpdateVehicle);
/**
 * {
  brand: 'Ford',
  model: 'Mustang',
  color: 'yellow',
  type: 'car',
  year: 2021
}
 */
// Notice the properties that did not match were combined, but the property that did match, color, was overwritten by the last object that was passed, updateMyVehicle. The resulting color is now yellow.