import React, { useContext } from 'react'
import { MyCounterContext } from './Context/CounterContext';

const Home = () => {

    const {counter, Increment, Decrement, Reset} = useContext(MyCounterContext)
    return (
        <div>
            <h1>Home Page</h1>
            <h2>Counter : {counter}</h2>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default Home;



