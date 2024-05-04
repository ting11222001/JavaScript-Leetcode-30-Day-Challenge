/**
 * https://www.w3schools.com/REACT/react_jsx.asp
 * https://www.w3schools.com/REACT/react_jsx.asp
 */


import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import ImportedCar from './testExportCar'; // can change the imported function name

/**
 * JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods. JSX converts HTML tags into react elements.
 */

// this is JSX and with JSX you can write expressions inside curly braces { }.
const myFirstElement = <h1>Hello React! Today is {new Date().toString()} </h1>
// The createRoot() function takes one argument, an HTML element.
// The purpose of the function is to define the HTML element where a React component should be displayed.
const root = ReactDOM.createRoot(document.getElementById('root'));
// The render() method is then called to define the React component that should be rendered.
root.render(myFirstElement);
// The result is displayed in the <div id="root"> element in the "public" folder and its index.html file.


// Inserting a Large Block of HTML
const myElements = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
)
const second = ReactDOM.createRoot(document.getElementById('second'));
second.render(myElements);



// fragments
const myFragment = (
  <>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </>
)
const third = ReactDOM.createRoot(document.getElementById('third'));
third.render(myFragment);



// Ternary expressions
const x = 10
const myTernary = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>
const forth = ReactDOM.createRoot(document.getElementById('forth'));
forth.render(myTernary);



// function component
function Car() {
  return <h2>Hi, I am a Car!</h2>
}
const fifth = ReactDOM.createRoot(document.getElementById('fifth'));
fifth.render(<Car />);



/** 
 * Pass props to function component:
 * Props are like function arguments, and you send them into the component as attributes.
 * React Props are read-only! You will get an error if you try to change their value.
 */
function Car2(props) {
  return <h2>I am a {props.color} car.</h2>
}
const sixth = ReactDOM.createRoot(document.getElementById('sixth'));
sixth.render(<Car2 color="red" />)



// Refer to components inside other components
function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car />
    </>
  )
}
const seventh = ReactDOM.createRoot(document.getElementById('seventh'));
seventh.render(<Garage />)



// Test imports
const eighth = ReactDOM.createRoot(document.getElementById('eighth'));
eighth.render(<ImportedCar />)



// Pass props from on component to another
function Car3(props) {
  return (
    <>
      <h2>I am a {props.brand} and a {props.color} car.</h2>
      <h2>My model is {props.info.model}</h2>
    </>
  )
}
function Garage2() {
  const carColor = "purple"
  const carInfo = { model: "Mustang" }

  return (
    <>
      <h1>Who lives in my garage?</h1>
      {/* If you have a variable to send, and not a string, you just put the variable name inside curly brackets */}
      <Car3 brand="Ford" color={carColor} info={carInfo} />
    </>
  )
}
const ninth = ReactDOM.createRoot(document.getElementById('ninth'));
ninth.render(<Garage2 />)



// Adding Events
// React events are written in camelCase syntax and event handlers are written inside curly braces
function Football() {
  const shoot = () => {
    alert("Great Shot!")
  }

  return <button onClick={shoot}>Take the shot!</button>
}
const tenth = ReactDOM.createRoot(document.getElementById('tenth'));
tenth.render(<Football />)



// To pass an argument to an event handler, use an arrow function.
function Football2() {
  const shoot = (str) => {
    alert(str)
  }

  return <button onClick={() => shoot("Goal!")}>Take another shot!</button>
}
const eleventh = ReactDOM.createRoot(document.getElementById('eleventh'));
eleventh.render(<Football2 />)



// Conditional Rendering
function MissedGoal() {
  return <h1>MISSED!</h1>
}
function MadeGoal() {
  return <h1>MADE GOAL!</h1>
}
function Goal(props) {
  const isGoal = props.isGoal;

  // Original:
  // if (isGoal) {
  //   return <MissedGoal />
  // } else {
  //   return <MadeGoal />
  // }

  // With Ternary Operator
  return (
    <>
      {isGoal ? <MissedGoal /> : <MadeGoal />}
    </>
  )
}
const condition = ReactDOM.createRoot(document.getElementById('condition'));
condition.render(<Goal isGoal={false} />);



// Conditionally render a React component by using the && operator.
function Garage3(props) {
  const cars = props.cars

  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your garage.
        </h2>
      }
    </>
  )
}
const cars = ['Ford', 'BMW', 'Audi'];
const condition2 = ReactDOM.createRoot(document.getElementById('condition2'));
condition2.render(<Garage3 cars={cars} />);



// Map a list of item
// I can use the index of the element in the array to to be the "key" of each child component
function Animal(props) {
  return <h2>A {props.name}</h2>
}
function Farm() {
  const animals = ['horse', 'pig', 'cow']

  return (
    <>
      <h1>Who lives in my farm?</h1>
      {/* One way of arrow syntax for the Array.map() */}
      {animals.map((animal, index) => <Animal key={index} name={animal} />)}
      {/* Another way of arrow syntax for the Array.map() */}
      {animals.map((animal, index) => {
        return <Animal key={index} name={animal} />
      })}
    </>
  )
}
const farm = ReactDOM.createRoot(document.getElementById('farm'));
farm.render(<Farm />)



// Keys
// Keys allow React to keep track of elements.This way, if an item is updated or removed, only that item will be re - rendered instead of the entire list.
function Student(props) {
  return <h2>{props.name}</h2>
}
function MathClass() {
  const students = [
    { id: 1, name: "Frank" },
    { id: 2, name: "Amy" },
    { id: 3, name: "Melissa" },
  ]
  return (
    <>
      <h1>Who are in my math class?</h1>
      {students.map((student) => <Student key={student.id} name={student.name} />)}
    </>
  )

}
const mathClass = ReactDOM.createRoot(document.getElementById('mathClass'));
mathClass.render(<MathClass />)



// Form: Use the useState Hook to manage the input
// Also, add an event handler in the onSubmit attribute for the <form>
function MyForm() {
  const [name, setName] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`The name you entered was: ${name}`)
  }

  return (
    <>
      <h2>In the input, you've input: {name}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </>
  )
}
const form = ReactDOM.createRoot(document.getElementById('form'));
form.render(<MyForm />)



// Multiple Input Fields
function MyForm2() {
  const [inputs, setInputs] = useState({})

  const handleTextChange = (event) => {
    const name = event.target.name // access the name attribute of the input tag -> username
    const value = event.target.value // access the value attribute of the input tag -> actual input e.g. q
    setInputs({
      ...inputs,
      [name]: value,
    })
    // about how to update objects in state: https://react.dev/learn/updating-objects-in-state
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert("You've submitted: " + inputs.username + ' and ' + inputs.age)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleTextChange}
        />
      </label>
      <label>
        Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleTextChange}
        />
        <input type="submit" />
      </label>
    </form>
  )
}
const form2 = ReactDOM.createRoot(document.getElementById('form2'));
form2.render(<MyForm2 />)



// Text Area
function MyTextArea() {
  const [textArea, setTextArea] = useState("")

  const handleTextChange = (e) => {
    setTextArea(e.target.value)
  }

  return (
    <form>
      <textArea value={textArea} onChange={handleTextChange} />
    </form>
  )
}
const textArea = ReactDOM.createRoot(document.getElementById('textArea'));
textArea.render(<MyTextArea />)



// Select: A drop down list, or a select box, etc.
function MySelect() {
  const [myCar, setMyCar] = useState("Volvo")

  const handleChange = (e) => {
    setMyCar(e.target.value)
  }

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}
const select = ReactDOM.createRoot(document.getElementById('select'));
select.render(<MySelect />)