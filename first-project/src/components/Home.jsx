import React, { useContext } from 'react'
import { MyCounterContext } from './Context/CounterContext';
import { AuthContext } from './Context/AuthContext';

const Home = () => {

    const {counter, Increment, Decrement, Reset} = useContext(MyCounterContext)
    const { state } = useContext(AuthContext)

    return (
        <div>
            <h1>Home Page</h1>
            <h1>welcome homepage - {state?.user?.name}</h1>
            <h2>Counter : {counter}</h2>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default Home;



