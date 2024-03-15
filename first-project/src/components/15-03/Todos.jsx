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

    function handleDelete(index) {
        const todo = [...todos];
        todo.splice(index, 1);
        setTodos(todo)
    }
  return (
    <div>
      <h1>Todos</h1>
      <input value={todo} onChange={handleChange} placeholder='Do Lunch..'/>
      <button onClick={handleSubmit}>Submit</button>
      {todos.length? <div>
        <h2>your Todos</h2>
         {todos.map((todo, i) => (
            <p>{i + 1}. {todo} <span><button onClick={handleDelete}>Delete</button></span></p>
         ))}
      </div> : <h1>Todos not Found</h1>}
    </div>
  )
}

export default Todos
