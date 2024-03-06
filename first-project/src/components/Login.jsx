import React, { useState } from 'react'

const Login = () => {
    const [userData, setUserData] = useState({email: "", password: ""})
    //console.log(userData)

    const handleChange = (event) => {
        //console.log(event.target.name, event.target.value)
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    function handleSubmit (event) {
        event.preventDefault();
        if(userData.email && userData.password) {
            alert("login successful")
        } else {
            alert("All fields are required")
        }
    }
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label>Email : </label> <br/>
                <input type='email' onChange={handleChange} required name='name'/> <br/>
                <label>Password : </label> <br/>
                <input type='password' onChange={handleChange} required/> <br/>
                <input type='submit' value="Login"/>
            </form>
        </div>
    )
}

export default Login;