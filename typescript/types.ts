/**
 * https://www.w3schools.com/typescript/
 * 
 * Simple Types
 * Arrays
 * Object Types
 * Interface and Extending Interfaces
 * Union Types
 * Functions
 * Classes
 */

// Simple Types
let firstName: string = "Tiffany";
console.log(firstName); // Tiffany

// Arrays
const names: string[] = [];
names.push("Tiffany");
names.push("Dylan");
console.log(names); // [ Tiffany, Dylan ]

// Object Types
const car: {type: string, model: string, year: number, mileage?: number} = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
}
console.log(car); // { type: 'Toyota', model: 'Corolla', year: 2009 }


// Interface and Extending Interfaces
interface Rectangle {
  height: number,
  width: number
}
interface ColoredRectangle extends Rectangle {
  color: string
}
const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
}
console.log(coloredRectangle); // { height: 20, width: 10, color: 'red' }


// Union Types
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`);
}
printStatusCode("200"); // My status code is 200.
printStatusCode(404); // My status code is 404.

// Functions
// Return types
function getTime(): number {
  return new Date().getTime();
}
console.log(getTime()); // 1714379425870

function printHello(): void {
  console.log("Hello!");
}
printHello(); // Hello!

// Parameters
function multiply(a: number, b: number) {
  return a * b;
}
console.log(multiply(2, 3)); // 6

// Optional Parameters
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}
console.log(add(2, 3, 1)); // 6
console.log(add(2, 3)); // 5

// Default Parameters
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}
console.log(pow(10)); // 10000000000

// Named Parameters
function divide({ dividend, divisor } : { dividend: number, divisor: number }) {
  return dividend / divisor;
}
console.log(divide({dividend: 6, divisor: 2})); // 3

