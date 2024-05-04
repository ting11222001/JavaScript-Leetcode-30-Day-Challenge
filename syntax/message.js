
/**
 * Default Exports
 * https://www.w3schools.com/REACT/react_es6_modules.asp
 */

// You can only have one default export in a file.

const message = () => {
  const name = "Jesse";
  const age = 40;
  return name + ' is ' + age + ' years old.';
}

export default message;