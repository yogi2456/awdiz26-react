import React, { useContext } from 'react'
import { MyCounterContext } from './Context/CounterContext';
import { AuthContext } from './Context/AuthContext';
import { useNavigate } from 'react-router-dom'
// import { ThemeContext } from './Context/ThemeContext';

const Home = () => {

    const router = useNavigate();

    const {counter, Increment, Decrement, Reset} = useContext(MyCounterContext)
    const { state, LOGOUT } = useContext(AuthContext)
    // const { changeTheme } = useContext(ThemeContext);

    return (
        <div>
            <h1>Home Page</h1>
            <h1>UserName - {state?.user?.name}</h1>
            <button onClick={() => router('/login')}>Login</button>
            <button onClick={LOGOUT}>Logout</button>
            <h2>Counter : {counter}</h2>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
            <button onClick={Reset}>Reset</button>
        </div>
        
    )
}

export default Home;



