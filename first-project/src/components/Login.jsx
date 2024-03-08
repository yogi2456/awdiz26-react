import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const router = useNavigate();
    const [userData, setUserData] = useState({email: "", password: ""})
    //console.log(userData)

    const handleChange = (event) => {
        //console.log(event.target.name, event.target.value)
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    function handleSubmit (event) {
        event.preventDefault();
        if(userData.email && userData.password) {
            try {
                const response = {data: {success: true, message: "Login Successfull"}}
                if(response.data.success) {
                    toast.success(response.data.message, { position: "top-right"})
                    setUserData({email: "", password: ""})
                    router('/')
                }
            } catch (error) {
                toast.error(error)
            }
        } else {
            alert("All fields are required")
        }
    }
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label>Email : </label> <br/>
                <input type='email' onChange={handleChange} required name='email'/> <br/>
                <label>Password : </label> <br/>
                <input type='password' onChange={handleChange} required name='password'/> <br/>
                <input type='submit' value="Login"/>
            </form>
        </div>
    )
}

export default Login;