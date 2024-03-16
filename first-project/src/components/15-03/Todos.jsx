import React, { useState } from 'react'

const Todos = () => {

    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([])

    console.log(todo, "todo")
    console.log(todos, "todos")

    function handleChange(event) {
        setTodo(event.target.value)
    }

    function handleSubmit() {
        setTodos([...todos, todo])
        setTodo("")
    }

    const handleDelete = (index) => {
        const newTodo = [...todos];
        newTodo.splice(index, 1);
        setTodos(newTodo)
    }
  return (
    <div>
      <h1>Todos</h1>
      <input value={todo} onChange={handleChange} placeholder='Do Lunch..'/>
      <button onClick={handleSubmit}>Submit</button>
      {todos.length? <div>
        <h2>your Todos</h2>
         {todos.map((todo, index) => (
            <p>{index + 1}. {todo} <span><button onClick={() => handleDelete(index)}>Delete</button></span></p>
         ))}
      </div> : <h1>Todos not Found</h1>}
    </div>
  )
}

export default Todos
