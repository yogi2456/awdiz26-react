import React, { useMemo, useState } from 'react'

const UseMemo = () => {

    const [counter, setCounter] = useState(1);
    const [todos, setTodos] = useState([]);

    function AddTodos () {
        setTodos([...todos, "NEW TODO"])
    }

    // const LenghthyCalculation = ExpensiveCalculation(counter);

    const LenghthyCalculation = useMemo(() => ExpensiveCalculation(counter), [counter])
  return (
    <div>
        <h1>ExpensiveCalculation: {LenghthyCalculation}</h1>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={AddTodos}>AddTodos</button>
      {todos.map((todo) => (
        <h1>{todo}</h1>
      ))}
    </div>
  )
}

function ExpensiveCalculation(number) {
    console.log("Running the expensive calculation")
    for (var i = 0; i < 1000000000; i++) {
        number += 1;
    }
    return number;
}

export default UseMemo
