import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent'

const UseCallback = () => {

    const [counter, setcounter] = useState(0)
    const [todos, setTodos] = useState([])

    const Increment = () => {
        setcounter(counter + 1)
    }

    // const addTodo = () => {
    //     setTodos([...todos, "NEW TODO"])
    //setTodos((t) => [...t, "New Todo"]);
    // }

    const addTodo = useCallback(() => {
        setTodos((todos) => [...todos, "New Todo"])
    }, [todos])
  return (
    <>
    <ChildComponent todos={todos} addTodo={addTodo}/>

    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={Increment}>Increment</button>
    </div>
    </>
  )
}

export default UseCallback
