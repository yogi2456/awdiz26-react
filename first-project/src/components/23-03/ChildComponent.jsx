import React from 'react'
import { memo } from 'react'

const ChildComponent = ({ todos, addTodo}) => {
    console.log("child render...")

  return (
    <div>
      <h1>my todo</h1>
       {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
       ))}
       <button onClick={addTodo}>addTodo</button>
    </div>
  )
}

export default memo(ChildComponent)
