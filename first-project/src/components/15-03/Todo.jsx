import React, { useState } from 'react'

const Todo = () => {

    const [todos, setTodos] = useState("")
    const [newTodos, setNewTodos] = useState([])

    console.log(todos, "todos")
    console.log(newTodos, "newtodos")

    function handleChange(event) {
        setTodos(event.target.value)
    }

    function handleSubmit() {
        setNewTodos([...newTodos, todos])
        setTodos("")
    }

    const handleDelete = (index) => {
        //console.log(index)
        const newDelete = [...newTodos];
        newDelete.splice(index, 1);
        setNewTodos(newDelete)
    }
  return (
    <div>
      <h1>Todos</h1>
      <input type='text' value={todos} onChange={handleChange} placeholder='Type your favourites Sports' />
      <button onClick={handleSubmit}>Submit</button>
      {newTodos.length? <div>
        <h2>Your Todos</h2>
        {newTodos.map((todo, index) => (
            <p>{index + 1}. {todo}  <span><button onClick={() => handleDelete(index)}>Delete</button></span></p>
        ))}
      </div> : <h1>Todos not found</h1>}
    </div>
  )
}

export default Todo
