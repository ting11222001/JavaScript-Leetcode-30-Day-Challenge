// https://www.w3schools.com/REACT/react_memo.asp

import { memo } from "react";

const Todos = ({ todos }) => {
  console.log("child render"); // When you click the increment button in the index.js, the Todos component re-renders.

  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>
      })}
    </>
  )
}
// export default Todos
export default memo(Todos)