import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext';
import api from '../AxiosConfig';

const Login = () => {

    const router = useNavigate();

    const { LOGIN } =useContext(AuthContext)
    const [userData, setUserData] = useState({email: "", password: ""})
    //console.log(userData)

    const handleChange = (event) => {
        //console.log(event.target.name, event.target.value)
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    async function handleSubmit (event) {
        event.preventDefault();
        if(userData.email && userData.password) {
            try {
                const response = await api.post(
                    '/user/login',
                    { userData }, { withCredentials: true })
                // const response = {data: {success: true, message: "Login Successfull", token: "abdgbhhhhhufejksjk", userData: {name: "yogesh", email: "yogesh@gmail.com"}}}
                if(response.data.success) {
                    // localStorage.setItem("token", JSON.stringify(response.data.token))
                    LOGIN(response.data.userData)
                    toast.success(response.data.message,) 
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

// { position: "top-right"}